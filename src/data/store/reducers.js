import {postsApi} from "../api/posts-api";

const reducers = {
    [postsApi.reducerPath]:postsApi.reducer,
};
export default reducers;