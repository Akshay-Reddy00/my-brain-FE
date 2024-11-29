import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { Input } from "./Input";


export function ContentModal({open, onClose}){
    const [modal, setModal] = useState(false);

    return <div>
        {open && 
        <div className="w-screen h-screen bg-slate-900 fixed top-0 left-0 opacity-80 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className=" bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                        <Input placeholder={"Type: twitter | youtube"} />
                    </div>
                    <div className="flex justify-center mt-2" >
                        <Button variant={"primary"} text={"Submit"} size={"md"}/>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}