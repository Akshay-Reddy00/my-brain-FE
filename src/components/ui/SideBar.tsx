import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {    
    return <div className="h-screen bg-white border">
        <div className="flex text-2xl justify-center pt-4">
            <div className="pr-3 text-purple-600">
                <BrainIcon />
            </div> 
            <p className="font-bold text-3xl">My Brain</p>
        </div>
        <div className="pt-6 px-6 flex flex-col">
            <SideBarItem text={"Twitter"} icon={<TwitterIcon />}/>
            <SideBarItem text={"Youtube"} icon={<YoutubeIcon />}/>
        </div>
    </div>
}