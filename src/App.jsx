import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./app/router/index.jsx";
import Header from "./app/components/header/index.jsx";


const App = () => {

  return (
    <>
        <Header>My Movie App</Header>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
