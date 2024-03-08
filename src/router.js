import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CharacterPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'characters'}/>
            },
            {
                path: 'characters', element: <CharacterPage/>
            }
        ]
    }

]);

export {
    router
}