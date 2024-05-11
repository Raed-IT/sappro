import Card3DComponent from "../../../components/card3d/3dCardComponent";
import {Image, Shimmer} from "react-shimmer";
import {useGetPostsQuery} from "../../../data/api/posts-api";
import LoadingListComponent from "./loadingListComponent";
import {useNavigate} from "react-router";
import AppRouters from "../../../data/constants/appRouters";
import {Link} from "react-router-dom";

function PostsListComponents() {
    const {data, error, isLoading} = useGetPostsQuery();

    if (error != null) {
        return <div>an error accord ....</div>
    }
    return (
        <div className={'grid lg:grid-cols-2 md:grid-cols-1   xl:grid-cols-3'}>
            {isLoading ?
                <LoadingListComponent/>
                : data != null ?
                    data.map(post => <Link key={post.id} to={AppRouters.showPost + '/' + post.id} state={post}>
                        <Card3DComponent
                            post={post}
                            image={<Image
                                height="300px"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                                src='https://source.unsplash.com/random/500x400'
                                fallback={<Shimmer width={350} height={300}/>}
                            />}/>
                    </Link>)
                    : <div> no Data Found .. </div>}
        </div>
    );

}

export default PostsListComponents;