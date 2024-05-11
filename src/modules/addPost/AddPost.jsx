import PostFormComponent from "../../components/PostFormComponent";

function AddPost() {
    return <div className={"min-h-screen pt-20 flex justify-center align-middle"}>
        <PostFormComponent
            initVal={{
                "title": "",
                "body": '',

            }}
             />
    </div>;
}

export default AddPost;