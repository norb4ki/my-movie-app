import {createBrowserRouter, Navigate} from "react-router-dom";
import {lazy} from "react";
import LoadComponent from "../common/route/index.jsx";
import {ERoutePaths} from "../common/route/enum/index.js";
import MainLayout from "./layout/index.jsx";
import MoviePage from "../pages/movie/index.jsx";
import NotFoundPage from "../pages/notFound/index.jsx";

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
                path: `${ERoutePaths.MOVIE_PATH}:movieId`,
                element: <MoviePage/>
            },
            {
                path: ERoutePaths.NOT_FOUND_PATH,
                element: <NotFoundPage/>
            },
            {
                path:"*",
                element:<Navigate to={ERoutePaths.NOT_FOUND_PATH}/>
            }

        ]
    }
])
export default router