import { MessageCircle, Link } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <div className="flex items-center space-x-4 mb-4">
        <MessageCircle className="h-12 w-12 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">Hello!</h1>
      </div>
      <p className="text-lg text-gray-600 flex items-center justify-center">
        <span>Add</span>
        <Link className="h-6 w-6 mx-2 text-blue-500" />
        <span className="font-semibold text-blue-500">/chat &nbsp; </span>
        <span> at the end of the current link to start chatting.</span>
      </p>
    </div>
  );
};

export default Page;
