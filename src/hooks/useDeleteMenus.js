import { DeleteMenus } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteMenu() {
    const [deleteMenus, { loading: loadingDelete }] = useMutation(DeleteMenus);
    return { deleteMenus, loadingDelete };
}

export default useDeleteMenu;
