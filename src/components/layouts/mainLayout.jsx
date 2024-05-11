import {Outlet, useLocation} from "react-router";
import {ToastContainer} from "react-toastify";
import {FloatingNav} from "../floatingNavbar/floatingNavbar";
import {Link} from "react-router-dom";
import AppRouters from "../../data/constants/appRouters";
import {cn} from "../../utils/cn";

function MainLayout() {
    const location = useLocation();
    console.log(location.pathname===AppRouters.addPost)
    return (
        <div className={"dark:bg-gray-950"}>
            <FloatingNav navItems={
                <div className={'flex'}>
                    <Link
                        className={"relative rounded-3xl dark:text-neutral-50  items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2 px-5 "+(location.pathname===AppRouters.index?"active":"")}
                        to={AppRouters.index}>
                         <span className="rounded-3xl text-sm">Home</span>
                    </Link>
                    <Link
                        className={"relative rounded-3xl dark:text-neutral-50  items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2 px-5 "+(location.pathname===AppRouters.addPost?"active":"")}
                        to={AppRouters.addPost}>
                        <span className=" text-sm">Add Post</span>
                    </Link>


                </div>
            }/>
            <ToastContainer/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;

