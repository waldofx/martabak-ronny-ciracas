import { InsertPosts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertPost() {
    const [insertPosts, { loading: loadingInsert }] = useMutation(InsertPosts);
    return { insertPosts, loadingInsert };
}

export default useInsertPost;
