import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";

function MainLayout() {
    return (
        <div className={"dark:bg-gray-950"}>
            <ToastContainer />
            <Outlet/>
        </div>
    );
}

export default MainLayout;

