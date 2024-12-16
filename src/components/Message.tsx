import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessagesProps {
    content: string;
    isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessagesProps) => {
            
    return (
        <div className={cn({ "bg-zinc-800": isUserMessage, "bg-zinc-900/25": !isUserMessage })}>
            <div className="p-6">
                <div className="max-w-3xl mx-sauto flex items-start gap-2.5">
                    <div className={cn("size-10 shrink-0 aspect-square  rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center", {
                        "bg-blue-900 boreder-blue-700 text-zinc-700": isUserMessage,
                    })}>
                        {isUserMessage ? <User className="size-5"/> : <Bot className="size-5 text-white"/>}

                    </div>
                    <div className="flex flex-col ml-6 w-full">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{isUserMessage? "You":"Web"}</span>

                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                            {content}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
