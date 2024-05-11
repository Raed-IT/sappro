import {useGetPostsQuery} from "../../data/api/posts-api";
import LoadingListComponent from "./components/loadingListComponent";
import PostsListComponents from "./components/PostsListComponents";

function Home() {
    // user getQuery hook from postsApi
    return (
        <div className={"container m-auto"}>
           <PostsListComponents/>
        </div>
    );
}

export default Home;