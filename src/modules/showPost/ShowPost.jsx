import {useLocation} from "react-router";
import React from "react";
import {TracingBeamComponent} from "../../components/tracingBeam/TracingBeamComponsnt";

function ShowPost() {
    const {state} = useLocation();
    return (
        <div className={"min-h-screen pb-20"}>
            <TracingBeamComponent post={state}/>
        </div>
    );
}

export default ShowPost;