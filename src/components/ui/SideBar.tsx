import { useNavigate } from "react-router-dom";
import { TOKEN, USERNAME } from "../../config";
import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {
    const navigate = useNavigate();
    
    function logoutUser(){
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USERNAME);
        navigate("/signin");
    }

    function deleteUser(){
        console.log('Delete User');
    }
    return <div className="min-w-32 md:w-64 border h-screen flex flex-col">
        <div className="flex items-center p-2 md:py-4 md:justify-center">
            <div className="pr-1 md:pr-3">
                <BrainIcon className="size-7 md:size-10"/>
            </div> 
            <p className="font-bold text-xl md:text-3xl">My Brain</p>
        </div>
        <div className="pt-2 px-2 flex flex-col overflow-y-auto md:pt-6 md:px-6 md:justify-center">
            <SideBarItem text={"Twitter"} icon={<TwitterIcon className="size-6 md:size-8"/>}/>
            <SideBarItem text={"Youtube"} icon={<YoutubeIcon className="size-6 md:size-8"/>}/>
        </div>
        <div className="flex flex-col mt-auto p-2 justify-center md:py-4 md:flex md:flex-row md:justify-evenly">
            <button className="p-2 m-1 md:px-4 py-2 bg-black text-white font-semibold text-lg rounded-md border hover:text-black hover:rounded-md hover:bg-white" onClick={logoutUser}>
                Logout
            </button>
           
            <button className="p-2 m-1 md:px-4 py-2 bg-red-600 text-white font-semibold text-lg rounded-md border hover:text-red-600 hover:rounded-md hover:bg-white" onClick={deleteUser}>
                Delete User
            </button>
        </div>
    </div>
}