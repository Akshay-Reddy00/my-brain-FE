import { ReactElement } from "react";

export function SideBarItem({text, icon}:{
    text: string;
    icon: ReactElement
}) {
    return <div className="flex items-center text-gray-600 py-2 cursor-pointer rounded hover:bg-gray-200">
        <div className="pl-2 pr-4">
            {icon} 
        </div>
        <div className="font-semibold text-lg">
            {text}
        </div>
    </div>
}