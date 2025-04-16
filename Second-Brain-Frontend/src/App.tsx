import { Dashboard } from "./pages/Dashboard"
import { HomePage } from "./pages/HomePage"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
}
export default App
