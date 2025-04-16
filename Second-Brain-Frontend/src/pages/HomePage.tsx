import { useEffect} from "react";
import { Button } from "../components/Button";
import { Brain } from "../components/icons/Brain";
import { HomeLogo } from "../components/icons/HomeLogo";
import { useNavigate } from "react-router-dom";





export function HomePage(){

    
    const navigate = useNavigate();
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="flex text-2xl pt-2 items-center text-purple-600 fixed top-0 left-0">
            <div className="pr-2">
                {<Brain/>}
            </div>
            Second Brain
        </div>
        <div className="text-6xl text-purple-600 fixed top-0 pt-20 opacity-80 hover:opacity-100">Use Your Second Brain</div>
            <div className="fixed pb-10">
                <HomeLogo/>
        </div>
        <div className=" flex gap-6 fixed bottom-0 pb-24">
            <Button text="SignUp" variant="secondary" startIcon={false} fullwidth={true} onClick={()=>{
                navigate("/signup")
            }}/>
            <Button text="SignIn" variant="secondary" startIcon={false} fullwidth={true} onClick={()=>{
                navigate("/signin")
            }}/>
        </div>
            
    </div>
}