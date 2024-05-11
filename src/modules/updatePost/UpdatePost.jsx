import PostFormComponent from "../../components/PostFormComponent";

function UpdatePost({post}) {
    return <div className={"min-h-screen pt-20 flex justify-center align-middle"}>
        <PostFormComponent
            initVal={{
                "title": post.title,
                "body": post.body,
            }}
        />
    </div>;
}

export default UpdatePost;