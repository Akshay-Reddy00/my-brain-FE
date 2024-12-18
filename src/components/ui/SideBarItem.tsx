import { ReactElement } from "react";

export function SideBarItem({text, icon}:{
    text: string;
    icon: ReactElement
}) {
    return <div className="flex items-center text-gray-600 py-2 cursor-pointer rounded hover:bg-gray-200">
        <div className="p-2 md:pl-2 md:pr-4">
            {icon} 
        </div>
        <div className="font-semibold text-lg md:text-xl">
            {text}
        </div>
    </div>
}