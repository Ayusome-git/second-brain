import axios from "axios";
import { DeleteIcon } from "./icons/DeleteIcon";
import { BACKEND_URL } from "../config";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { OpenIcon } from "./icons/OpenIcon";
import { TextNoteIcon } from "./icons/TextNoteIcon";
import { useContent } from "../hooks/useContent";



interface CardProps{
    title:string
    link: string
    type: "twitter"| "youtube" | "textNote"
    _id: string
    refresh: ()=>void
}

export function Card(props:CardProps){
    return <div>
        <div className="p-4 bg-white rounded-md border max-w-72 min-h-48 min-w-72 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm">
                    <div className="pr-2 text-gray-500">
                        {props.type==="twitter" && <TwitterIcon />}
                        {props.type==="youtube" && <YoutubeIcon />}
                        {props.type==="textNote" && <TextNoteIcon big={false} />}
                    </div>
                    <div className={props.type==="textNote"? "":"pb-1"}>{props.title}</div>
                    
                </div>
                <div className="flex items-center">
                    <div className="pr-3 text-gray-500">
                        <a href={props.link} target="_blank">
                        <OpenIcon/>
                        </a>
                    </div>
                <div className= "text-gray-500 cursor-pointer" onClick={()=>deleteContent(props._id)}>
                    <DeleteIcon />
                </div> 
            </div>
        </div>
        <div className="pt-4">
            {props.type==="youtube" && <iframe className="w-full" width="560" height="315" 
            src={props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>}
            {props.type==="twitter" && <blockquote className="twitter-tweet">
                <a href={props.link.replace("x.com","twitter.com")}></a>
                </blockquote>}

            {props.type==="textNote" &&  <div>
                {props.link}
            </div>}
           
            </div>
        </div>
    </div>
    
    async function deleteContent(_id:string){
        try{
            await axios.delete(`${BACKEND_URL}/api/v1/content/${_id}`)
            props.refresh()

        }catch(e){
            console.log(e);
        }
    
    }
}