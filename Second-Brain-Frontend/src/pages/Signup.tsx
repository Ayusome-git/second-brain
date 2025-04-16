import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export function Signup(){
    const usernameRef= useRef<any>("");
    const passwordRef=useRef<any>("");
    const navigate=useNavigate();

    async function signup(){
        const username=usernameRef.current.value;
        const password=passwordRef.current.value;
        await axios.post(BACKEND_URL+"/api/v1/signup",{
            username,
            password
        })
        alert("You are signed up!")
        navigate("/signin")

    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl border min-w-48 p-8">
                <Input ref={usernameRef} placeholder="Username"/>
                <Input ref={passwordRef} placeholder="Password"/>
                <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} fullwidth={true} variant="secondary" text="signup"/>
                </div>
                
        </div>
    </div>
}