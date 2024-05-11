import {createBrowserRouter} from "react-router-dom";
import AppRouters from "./data/constants/appRouters";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./modules/home/Home";
import ShowPost from "./modules/showPost/ShowPost";

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
        ],

    }
],);
export default router;