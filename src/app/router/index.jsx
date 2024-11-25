import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import LoadComponent from "../common/route/index.jsx";
import {ERoutePaths} from "../common/route/enum/index.js";
import MainLayout from "./layout/index.jsx";
import MoviePage from "../pages/movie/index.jsx";

const MainPage = LoadComponent(lazy(async() => import('../pages/main/index.jsx')))

const router = createBrowserRouter([
    {
        element:<MainLayout/>,
        children:[
            {
                path:ERoutePaths.MAIN_PATH,
                element: <MainPage/>,
                index: true
            },
            {
                path: `${ERoutePaths.MOVIE_PATH}/:movieId`,
                element: <MoviePage/>
            }

        ]
    }
])
export default router