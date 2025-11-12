import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}
export function useGetPosts() {
    const res = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts()
    })
    return res;
}