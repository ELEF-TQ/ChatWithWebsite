import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { PageProps } from "@/types/PageProps";
import { reconstructUrl } from "@/utils/reconstructUrl";

const Page = async ({ params }: PageProps) => {

  // Reconstructing URL to be normalized
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

  try {
    // Check if the URL is already indexed
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);

    if (!isAlreadyIndexed) {
      // Configure Upstash VectorDB
      await ragChat.context.add({
        type: "html",
        source: reconstructedUrl,
        config: { chunkOverlap: 50, chunkSize: 200 },
      });

      // Add the new URL to indexed-urls
      await redis.sadd("indexed-urls", reconstructedUrl);
    }
  } catch (error) {
    console.error("Error handling page:", error);
   
  }

  return (
    <div>
     hello
    </div>
  );
};

export default Page;
