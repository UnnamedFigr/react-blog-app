import '../index.css'
import { useGetPosts } from '../hooks/usePosts';
import axios from 'axios';
import { Link } from 'react-router-dom';
function PostsDefaultPage() {
    const {data, isLoading, isError, error} = useGetPosts();
    if(isLoading) {
        return(
            <div>
                <h1>Loading . . .</h1>
            </div>
        );
    }
    if(isError){
        return(
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {data.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`posts/${post.id}`}>{post.title}</Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}
export default PostsDefaultPage;