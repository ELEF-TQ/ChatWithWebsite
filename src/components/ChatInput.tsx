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
    <div className="absolute bottom-0 left-0 w-full bg-white shadow-lg z-10">
      <div className="flex flex-row gap-3 mx-4 lg:max-w-2xl xl:max-w-3xl lg:mx-auto py-4">
        <div className="flex-1 flex items-center relative">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <Textarea
              minRows={2}
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
              className="resize-none rounded-xl text-base px-4 py-2 focus:outline-none bg-gray-100 hover:bg-gray-200"
              style={{ borderRadius: "12px", outline: "none", padding: "12px" }}
            />

            <Button
              size="sm"
              type="submit"
              className="absolute right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition-all"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
