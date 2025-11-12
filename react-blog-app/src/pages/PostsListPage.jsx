import '../index.css'
import { useGetPosts } from '../hooks/usePosts';
import axios from 'axios';
function PostsDefaultPage() {
    const {data, isLoading, isError} = useGetPosts();
    if(isLoading) {
        return(
            <h1>Loading . . .</h1>
        );
    }
    if(isError){
        return(
            <h1>Error</h1>
        );
    }
    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {data &&
                    data.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })}
            </ul>
        </div>
    )
}
export default PostsDefaultPage;