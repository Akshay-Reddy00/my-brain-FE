import { useRef } from "react";
import axios from "axios";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { Input } from "./Input";
import { BACKEND_URL, TOKEN } from "../config";


export function ContentModal({open, onClose}){

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const typeRef = useRef<HTMLInputElement>();

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link, title, type
        },{
            headers:{
                "Authorization": localStorage.getItem(TOKEN)
            }
        })
        onClose();
    }

    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-900 fixed top-0 left-0 opacity-80 flex justify-center"></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className=" bg-white p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input reference={titleRef} placeholder={"Title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                            <Input reference={typeRef} placeholder={"Type: twitter | youtube"} />
                        </div>
                        <div className="flex justify-center mt-2" >
                            <Button variant={"primary"} text={"Submit"} size={"md"} onClick={addContent}/>
                        </div>
                    </span>
                </div>
            </div>
        </div>}
    </div>
}