import { useRef } from "react";
import axios from "axios";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/Label";

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


    return <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="py-4">
            <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/467502/add-user-square.svg"/>
            <p className="m-1 px-2 py-1 flex justify-center font-bold text-2xl">Sign Up</p>
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
                <Button variant={'primary'} text={'Sign Up'} size={'md'} fullWidth={true} loading={false} onClick={signUp}/>
                <p className="flex pt-2 justify-center text-gray-600">Already registered?&nbsp;
                    <a href="/signin" className="flex justify-center font-medium text-purple-600 hover:font-bold">Sign In</a>
                </p>
            </div>
        </div>
    </div>
}