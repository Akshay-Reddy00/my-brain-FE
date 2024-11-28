import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {
    return <div className="h-screen bg-white border pl-4">
        <div className="flex text-2xl items-center pt-4">
            <div className="pr-2 text-purple-600">
                <BrainIcon />
            </div> 
            Brainly
        </div>
        <div className="pt-6 pl-4">
            <SideBarItem text={"Twitter"} icon={<TwitterIcon />}/>
            <SideBarItem text={"Youtube"} icon={<YoutubeIcon />}/>
        </div>
    </div>
}