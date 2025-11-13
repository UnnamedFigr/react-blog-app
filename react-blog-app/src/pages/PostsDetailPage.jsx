import { useGetPostDetails } from '../hooks/usePostDetails'
import { useParams, Link } from 'react-router-dom';

function PostsDetailPage() {
    const {postId} = useParams();
    const {data: post, isLoading, isError, error} = useGetPostDetails(postId);
    
    if(isError) {
        return (
            <div>
                <h1>There is error is error</h1>
                <p>{error.message}</p>;
            </div>
        )
    }
    if(isLoading){
        return (
        <div>
            <h1>Loading content. . .</h1>
        </div>
        )
    }
    if(!post){
        <div>
            <h1>No such posts</h1>
        </div>
    }
    return (
        <div>
            <Link to="/">- Return back -</Link>
            <ul style={{listStyle: 'none', color: '#b9229576'}}>
                <li><h1>{post.title}</h1></li>
                <li>{post.body}</li>
            </ul>
        </div>
    );
}
export default PostsDetailPage;