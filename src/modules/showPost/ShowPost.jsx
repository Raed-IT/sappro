import {useLocation} from "react-router";
import React from "react";
import {TracingBeam} from "../../components/tracingBeam/TracingBeam";
import {TracingBeamComponent} from "../../components/tracingBeam/TracingBeamComponsnt";
import PostsListComponents from "../home/components/PostsListComponents";

function ShowPost() {
    const {state} = useLocation();
    return (
        <div className={"min-h-screen pb-20"}>
            <TracingBeamComponent post={state}/>
        </div>
    );
}

export default ShowPost;