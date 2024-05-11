import {CardBody, CardContainer, CardItem} from "./3dCard";
import React from "react";
import {Image, Shimmer} from 'react-shimmer'

export default function Card3DComponent({post,image}) {
    return (
        <CardContainer className="inter-var"  key={post.id} >
            <CardBody
                className="	 relative group/card  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className=" line-clamp-1 text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {post.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className=" line-clamp-2	 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {post.body}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    {image}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        read more →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
