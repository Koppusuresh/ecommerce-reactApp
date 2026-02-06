import { BrowserRouter, Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {NavBar} from "./Navbar"
import Banner from "./Banner"
import About from "./components/About"
import LoginPage from "./components/LoginPage"
import RegistrationPage from "./components/RegistrationPage"
import ProductDetails from "./components/ProductDetails"

const App = () => {
  return (
    <div> 
       <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<Banner/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/details" element={<ProductDetails/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
