import {Outlet, useLocation} from "react-router";
import {ToastContainer} from "react-toastify";
import {FloatingNav} from "../floatingNavbar/floatingNavbar";
import {Link} from "react-router-dom";
import AppRouters from "../../data/constants/appRouters";
import {cn} from "../../utils/cn";
import {useEffect, useState} from "react";
import {IoMoon, IoSunny} from "react-icons/io5";
import useLocalStorage from "../../data/hooks/useLocalStorage";
import Popup from "react-animated-popup";
import {CgClose} from "react-icons/cg";

function MainLayout() {
    const location = useLocation();
    const [dark, setDark] = useLocalStorage("dark", 0);
    const [showFeatures, setShowFeatures] = useLocalStorage("showFeatures", 0);

    useEffect(() => {
        if (dark) {
            document.body.classList.toggle("dark");
        }
    }, [])
    const darkModeHandler = () => {
        document.body.classList.toggle("dark");
        setDark(!dark)
    }
    return (
        <div className={"dark:bg-gray-950 pt-28"}>
            <Popup style={{backgroundColor: dark ? 'black' : "white"}} className={'bg-black '} visible={showFeatures}
                   onClose={() => {
                   }}>

                <button onClick={() => setShowFeatures(false)}><CgClose className={'dark:text-white'}/></button>
                <h1 className={'text-3xl my-6 dark:text-white'}>Features</h1>
                <ul className={'dark:text-white'}>
                    <li>Fetch All Posts From Api</li>
                    <li>Create Post</li>
                    <li>Show Post</li>
                    <li>Update Post</li>
                    <li>Delete Post</li>
                    <li>Dark Light Mode (save locally through Custom hook)</li>
                </ul>

            </Popup>
            <FloatingNav navItems={
                <div className={'flex'}>
                    <Link
                        className={"relative rounded-3xl dark:text-neutral-50  items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2 px-5 " + (location.pathname === AppRouters.index ? "active" : "")}
                        to={AppRouters.index}>
                        <span className="rounded-3xl text-sm">Home</span>
                    </Link>
                    <Link
                        className={"relative rounded-3xl dark:text-neutral-50  items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2 px-5 " + (location.pathname === AppRouters.addPost ? "active" : "")}
                        to={AppRouters.addPost}>
                        <span className=" text-sm">Add Post</span>
                    </Link>
                    <button className={'text-black dark:text-white px-5 '} onClick={() => darkModeHandler()}>
                        {
                            dark && <IoSunny/>
                        }
                        {
                            !dark && <IoMoon/>
                        }
                    </button>

                </div>
            }/>
            <ToastContainer/>
            <main>
                <Outlet/>
            </main>


            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a className="flex items-center">

                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SAPPRO</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a className="hover:underline">Flowbite</a>
                                    </li>
                                    <li>
                                        <a className="hover:underline">Tailwind CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                                    us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Main
                                    Actions</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to={AppRouters.index} className="hover:underline">Home</Link>
                                    </li>
                                    <li>
                                        <Link to={AppRouters.addPost} className="hover:underline">Add Post</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                </div>
            </footer>

        </div>
    );
}

export default MainLayout;

