import { ReactElement } from "react";

export function SideBarItem({text, icon}:{
    text: string;
    icon: ReactElement
}) {
    return <div className="flex text-gray-600 py-2 cursor-pointer rounded hover:bg-gray-200">
        <div className="pr-2">
            {icon} 
        </div>
        <div>
            {text}
        </div>
    </div>
}