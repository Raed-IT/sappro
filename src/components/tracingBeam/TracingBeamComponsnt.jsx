"use client";
import {TracingBeam} from "./TracingBeam";
import {Link} from "react-router-dom";
import AppRouters from "../../data/constants/appRouters";
import {DeletePostControlledPopup} from "../DeletePostControlledDialog";

export function TracingBeamComponent({post}) {
    return (
        <>
            <TracingBeam>
                <div className=" max-w-2xl mx-auto antialiased pt-4 relative  ">
                    <div className={'flex justify-start'}>
                        <DeletePostControlledPopup post={post}/>
                        <Link className="bg-black my-4 text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
                              to={AppRouters.updatePost}>
                            Edit
                        </Link>
                    </div>
                    <h1 className={"text-xl mb-10   dark:text-white"}>
                        {post.title}
                    </h1>
                    <div
                        className="rounded-lg mb-10 object-cover"
                    >
                        <img
                            height={500}
                            width={500}
                            className="rounded-lg mb-10 object-cover"
                            src={'https://source.unsplash.com/random/500x500'}
                            alt={'image'}/>
                    </div>
                    <p className={"text-xl   dark:text-white"}>
                        {post.body}
                    </p>

                </div>
            </TracingBeam></>
    );
}

