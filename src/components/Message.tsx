import { cn } from "@/utils/cn";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "bg-white": isUserMessage,
        "bg-gray-100": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-gray-300 bg-white flex justify-center items-center",
              {
                "bg-blue-100 border-blue-300 text-blue-700": isUserMessage,
                "bg-gray-200 border-gray-300 text-gray-700": !isUserMessage,
              }
            )}
          >
            {isUserMessage ? <User className="size-5" /> : <Bot className="size-5 text-black" />}
          </div>

          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-black">
                {isUserMessage ? "You" : "Website"}
              </span>
            </div>

            <p className="text-sm font-normal py-2.5 text-black">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};