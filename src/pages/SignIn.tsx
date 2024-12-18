import { useRef } from "react";
import axios from "axios";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL, TOKEN, USERNAME } from "../config";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/Label";

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
        localStorage.setItem(TOKEN, jwt);
        localStorage.setItem(USERNAME, username!);
        navigate("/dashboard");
    }
    
    return <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="py-4">
            <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg"/>
            <p className="m-1 px-2 py-1 flex justify-center font-bold text-3xl">Sign In</p>
        </div>
        <div className="bg-white rounded-lg border w-full max-w-md p-8">
            <div className="py-2">
                <Label label="Username"/>
                <Input reference={usernameRef} placeholder={"Enter username"} />
            </div>

            <div className="py-2">
                <Label label="Password"/>
                <Input reference={passwordRef} placeholder={"Enter password"} />
            </div>
            <div className="flex flex-col justify-center pt-4">
                <Button variant={'primary'} text={'Sign In'} size={'md'} fullWidth={true} loading={false} 
                    onClick={signIn}/>
                <p className="flex pt-2 justify-center text-gray-600">Don&#x27;t have an account yet?&nbsp;
                    <a href="/signup" className="flex justify-center font-medium text-purple-600 hover:font-bold">Sign Up</a>
                </p>
            </div>
        </div>
    </div>
}