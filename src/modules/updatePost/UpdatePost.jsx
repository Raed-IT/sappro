import PostFormComponent from "../../components/PostFormComponent";
import {useLocation} from "react-router";

function UpdatePost() {
    const {state} = useLocation();

    return <div className={"min-h-screen pt-20 flex justify-center align-middle"}>
        <PostFormComponent
            initVal={{
                "title": state.title,
                "body": state.body,
                "id": state.id,
            }}
        />
    </div>;
}

export default UpdatePost;