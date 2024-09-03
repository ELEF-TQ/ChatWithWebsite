"use client";

import { Button, Textarea } from "@nextui-org/react";
import { type useChat } from "ai/react";
import { Send } from "lucide-react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-zinc-900 z-10">
      <div className="flex flex-row gap-3 mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl md:last:mb-6">
        <div className="flex flex-1 items-stretch relative h-full">
          <form onSubmit={handleSubmit} className="flex flex-col flex-grow w-full p-4">
            <Textarea
              minRows={4}
              autoFocus
              onChange={handleInputChange}
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                  setInput("");
                }
              }}
              placeholder="Enter your question..."
              className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
            />

            <Button
              size="sm"
              type="submit"
              className="absolute right-2 bottom-2 z-10 border border-border bg-zinc-900"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
