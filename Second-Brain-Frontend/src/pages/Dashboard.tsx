
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContent } from "../components/CreateContent"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/ShareIcon"
import '../index.css'
import { SideBar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { LogoutIcon } from "../components/icons/LogoutIcon"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
  const [modelOpen,setModelOpen] = useState(false);
  const navigate = useNavigate();
  const {contents, refresh} = useContent();


  useEffect(() => {
    refresh();
  }, [modelOpen])
  
  return(
    <div>
      <SideBar refresh={refresh}/>
    <div className="p-4 ml-64 min-h-screen bg-gray-100">
      <CreateContent open={modelOpen} onClose={()=>{
        setModelOpen(false);
      }}></CreateContent>
      <div className="flex justify-end gap-4">
        
        <Button startIcon={<ShareIcon/>}  variant="primary" text="Share Brain"/>
        <Button onClick={()=>{
          setModelOpen(true);
        }}startIcon={<PlusIcon />} variant="secondary" text="Add Content" />
        <Button startIcon={<LogoutIcon/>} variant="logout" text="Logout" onClick={Logout}/>
      </div>
      <div className="flex gap-4 flex-wrap pt-2">
        {contents.map((content)=>
        <Card refresh={refresh} type={content.type}link={content.link} title={content.title} _id={content._id}/>
        )}
        
      </div>
    </div>
    </div>
    
  )
  function Logout(){
    localStorage.removeItem("token");
    navigate("/homepage")
}
}


