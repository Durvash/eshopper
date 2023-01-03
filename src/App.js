import {BrowserRouter} from "react-router-dom";
import RoutesSetting from "./config/RoutesSetting";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { bounce } from "./helper/General";

function App() {
  return <>
    <BrowserRouter>
      <div className="loading hide">Loading</div>
      <Topbar/>
      <Navbar/>
      <RoutesSetting/>
      <Footer/>
    </BrowserRouter>
    <ToastContainer transition={bounce} />
  </>
}

export default App;
