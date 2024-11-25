import './App.css'
import Index from "./app/components/dropdown/index.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./app/router/index.jsx";
import Header from "./app/components/header/index.jsx";


const App = () => {

  return (
    <div>
        <Header/>
        <RouterProvider router={router}/>

    </div>
  )
}

export default App
