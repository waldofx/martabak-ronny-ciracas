import { UpdatePosts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useUpdatePost() {
    const [updatePosts, { loading: loadingUpdate }] = useMutation(UpdatePosts);
    return { updatePosts, loadingUpdate };
}

export default useUpdatePost;
