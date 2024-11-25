import './App.css'
import Dropdown from "./app/components/Dropdown.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./app/router/index.jsx";


const App = () => {

  return (
    <div>
        <h1>My Movie App</h1>
        <Dropdown/>
        <RouterProvider router={router}/>

    </div>
  )
}

export default App
