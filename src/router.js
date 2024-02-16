import {createBrowserRouter, Navigate} from "react-router-dom"
import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {MainLayout} from "./layout";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>
            },
            {
                path:'users/:id', element: <UserDetailsPage/>, children:[
                    {
                        path:'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path:'posts/:id', element:<PostDetailsPage/>
            }
        ]

    }
]);

export {
    router
}