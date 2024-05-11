import {createBrowserRouter} from "react-router-dom";
import AppRouters from "./data/constants/appRouters";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./modules/home/Home";
import ShowPost from "./modules/showPost/ShowPost";
import AddPost from "./modules/addPost/AddPost";
import UpdatePost from "./modules/updatePost/UpdatePost";

const router = createBrowserRouter([
    {
        path: AppRouters.index,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: AppRouters.showPost+'/:id',
                element: < ShowPost/>,
            },
            {
                path: AppRouters.addPost,
                element: < AddPost/>,
            },
            {
                path: AppRouters.updatePost+'/:id',
                element: < UpdatePost/>,
            },
        ],

    }
],);
export default router;