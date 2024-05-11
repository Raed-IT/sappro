import {postsApi} from "../api/posts-api";

const middlewares = [
        postsApi.middleware,
    ]
;
export default middlewares;