import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, TOKEN, USERNAME } from "../config";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";
import { useRef, useState } from "react";
import { AlertText } from "./ui/Alerts";

export function Confirmation({open, onClose}) {
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const textRef = useRef<HTMLInputElement>();
    
    async function deleteUser() {
        const text = textRef.current?.value;
        console.log(text);
        try{
            await axios.delete(BACKEND_URL + "/api/v1/delete", {
                data: { 
                    confirmationText: text // BE expects confirmationText as key
                },
                headers: {
                    "Authorization": localStorage.getItem(TOKEN)
                }
            })
        
            localStorage.removeItem(TOKEN);
            localStorage.removeItem(USERNAME);
            navigate("/signin");
            onClose();
        }catch(error: any){
            setDisplay(error.response.data.message)
        }
    }

    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-900 fixed top-0 left-0 opacity-80 flex justify-center"></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className=" bg-white p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon className="size-6 cursor-pointer hover:text-red-600"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="pb-6 font-medium text-2xl">Drop User</p>
                            <p className="pb-2 text-lg">
                                To drop the user from the database, type 
                                <b className="text-red-700">&nbsp;DELETE&nbsp;</b> 
                                to confirm.
                            </p>
                            <Input reference={textRef} placeholder={"Type here"} />
                        </div>
                        <div className="flex justify-center">
                            <AlertText display={display}/>
                        </div>
                        <div className="flex justify-center mt-2" >
                            <Button variant={"primary"} text={"Delete User"} size={"md"} onClick={deleteUser}/>
                        </div>
                    </span>
                </div>
            </div>
            
        </div>}
    </div>

}