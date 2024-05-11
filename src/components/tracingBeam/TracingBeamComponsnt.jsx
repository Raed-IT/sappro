"use client";
import React from "react";
import {twMerge} from "tailwind-merge";
import {TracingBeam} from "./TracingBeam";
import {Image, Shimmer} from "react-shimmer";
import {Link} from "react-router-dom";
import AppRouters from "../../data/constants/appRouters";

export function TracingBeamComponent({id, title, info}) {
    return (
        <>

            <TracingBeam>
                <div className=" max-w-2xl mx-auto antialiased pt-4 relative  ">

                    <div className={'flex justify-between'}>
                        <p className={"text-xl  dark:text-white"}>{id} </p>

                        <Link className="bg-black my-4 text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
                              to={AppRouters.updatePost}>
                            تعديل
                        </Link>

                    </div>
                    <h1 className={"text-xl mb-10   dark:text-white"}>
                        {title}
                    </h1>
                    <Image
                        className="rounded-lg mb-10 object-cover"
                        src={'https://source.unsplash.com/random/500x500'}
                        fallback={<Shimmer height={500} width={500}/>}
                    />
                    <p className={"text-xl mt-10  dark:text-white"}>
                        {info}
                    </p>

                </div>
            </TracingBeam></>
    );
}

