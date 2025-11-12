import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

function fetchPosts() {
    return async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data;
    }
}
export function useGetPosts() {
    const queryResult = useQuery({
        queryKey:['posts'],
        queryFn: fetchPosts(),       
    });
    return queryResult;
};