import { useRef, useState } from "react";
import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


enum contentType{
    Youtube="youtube",
    Twitter="twitter",
    TextNote="textNote"
}


interface CreateContentProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContent({ open, onClose }: CreateContentProps) {
    const titleRef= useRef<any>("");
    const linkRef= useRef<any>("");
    const [type,setType]=useState(contentType.Youtube);
    

   async function addContent(){
        const title= titleRef.current.value;
        const link= linkRef.current.value;
        try{

            await axios.post(BACKEND_URL+"/api/v1/content",{
                link,
                title,
                type
            },{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            onClose();
            alert("content added");  
            
        }catch(e){
            
        }
    }

    return <div>
         {open && <div className="w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-80 flex justify-center">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon /> 
                        </div>
                         
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref={linkRef} placeholder={type === contentType.TextNote ? "Description" : "Link"}/>

                    </div>
                    <div className="flex gap-2 pt-2 pb-2 items-center justify-between">
                        <Button text="Youtube" variant={type=== contentType.Youtube? "secondary" : "primary"} onClick={()=>{
                            setType(contentType.Youtube)
                        }}/>
                        <Button text="Text" variant={type=== contentType.TextNote? "secondary" : "primary"} onClick={()=>{
                            setType(contentType.TextNote)
                        }}/>
                        <Button text="Twitter" variant={type=== contentType.Twitter? "secondary" : "primary"} onClick={()=>{
                            setType(contentType.Twitter)
                        }}/>
                        
                    </div>
                    <div className="flex justify-center pt-2">
                        <Button onClick={addContent} variant="secondary" text="Submit"/>
                    </div>
                </span>
            </div>
         </div>}
    </div>
   
}

