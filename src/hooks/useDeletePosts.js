import { DeletePosts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeletePost() {
    const [deletePosts, { loading: loadingDelete }] = useMutation(DeletePosts);
    return { deletePosts, loadingDelete };
}

export default useDeletePost;
