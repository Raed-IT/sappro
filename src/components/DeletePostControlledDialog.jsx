import React, {useState} from 'react';
import Popup from "react-animated-popup";
import {useDeletePostMutation} from "../data/api/posts-api";
import ControlledButton from "./ControlledButton";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import AppRouters from "../data/constants/appRouters";
import useLocalStorage from "../data/hooks/useLocalStorage";
//

export const DeletePostControlledPopup = ({post}) => {
    const [open, setOpen] = useState(false);
    const [deletedPostRequest, {isLoading: isDelete, error}] = useDeletePostMutation();
    const navigate = useNavigate();
    const [dark, setDark] = useLocalStorage("dark", 0);

    return (
        <>
            <button onClick={() => setOpen(true)}
                    className={'bg-red-900 my-4 text-white rounded-full text-sm w-fit px-4 py-1 mb-4'}>Delete Post
            </button>
            <Popup  style={{backgroundColor: dark ? 'black' : "white"}}  visible={open} onClose={() => setOpen(false)}>
                <h1 className={'mb-8 dark:text-white'}>Delte Post </h1>
                <p className={'dark:text-white'}>The post '''{post.title}''' will be deleted</p>
                <div className={'flex justify-between'}>
                    <ControlledButton isLoadingButton={isDelete} onClick={async () => {
                     await   deletedPostRequest(post).then((va) => {
                                if (Object?.keys(va).includes('error')) {
                                    toast("Error : " + va?.error?.status);
                                } else {
                                    toast("Done Delete ");
                                    navigate(AppRouters.index);
                                }
                            }
                        );

                    }}
                                      title={"Delete"}/>
                </div>
            </Popup>
        </>
    );
};