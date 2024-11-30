import { useRef } from "react";
import axios from "axios";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signUp(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup",{
            username,
            password
        })
        navigate("/signin");
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg border min-w-48 p-8">
            <Input reference={usernameRef} placeholder={"username"} />
            <Input reference={passwordRef} placeholder={"password"} />
            <div className="flex justify-center pt-4">
                <Button variant={'primary'} text={'Signup'} 
                    size={'md'} fullWidth={true} loading={false} onClick={signUp}/>
            </div>
        </div>
    </div>
}