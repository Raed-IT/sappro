import {Outlet} from "react-router";

function MainLayout() {
    return (
        <div className={"dark:bg-gray-950"}>
            <Outlet/>
        </div>
    );
}

export default MainLayout;

