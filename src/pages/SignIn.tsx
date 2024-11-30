import { useRef } from "react";
import axios from "axios";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signIn(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg border min-w-48 p-8">
            <Input reference={usernameRef} placeholder={"username"} />
            <Input reference={passwordRef} placeholder={"password"} />
            <div className="flex justify-center pt-4">
                <Button variant={'primary'} text={'Signin'} 
                    size={'md'} fullWidth={true} loading={false} onClick={signIn}/>
            </div>
        </div>
    </div>
}