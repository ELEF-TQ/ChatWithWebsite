import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { PageProps } from "@/types/PageProps";
import { reconstructUrl } from "@/utils/reconstructUrl";
import { v4 as uuidv4 } from "uuid";

const Page = async ({ params }: PageProps) => {
  // Reconstruct the URL to be normalized
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

  try {
    // Check if the URL is already indexed
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);
    if (!isAlreadyIndexed) {
      // Configure Upstash VectorDB
      await ragChat.context.add({
        type: "html",
        source: reconstructedUrl,
      });

      // Add the new URL to indexed-urls
      await redis.sadd("indexed-urls", reconstructedUrl);
    }

    // Check if there's an existing session ID for this URL
    let sessionId = await redis.get(`session-id:${reconstructedUrl}`);

    if (sessionId === null) {
      // Generate a new session ID if it doesn't exist
      sessionId = uuidv4();

      // Store the session ID associated with the URL
      await redis.set(`session-id:${reconstructedUrl}`, sessionId);
    }

    // Ensure sessionId is a string before passing to ChatWrapper
    if (typeof sessionId !== "string") {
      throw new Error("Session ID is not a string");
    }

    // Fetch initial messages for the session
    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId });

    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />;
  } catch (error) {
    console.error("Error handling page:", error);
    // Handle the error (e.g., return an error component)
    return <div>Error loading page</div>;
  }
};

export default Page;
