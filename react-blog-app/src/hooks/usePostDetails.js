import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

// function fetchPostDetails(postId) {
//     return async () => {
//         const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         return result.data;
//     }
// }

export function useGetPostDetails(postId) {
    const queryResult = useQuery({
        queryKey: ['posts', postId],
        queryFn: async () => {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            return result.data;
        },
        // post id is defined ?
        enabled: !!postId,
    })
    return queryResult;
}