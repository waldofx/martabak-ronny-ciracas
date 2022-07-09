import { UpdateMenus } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useUpdateMenu() {
    const [updateMenus, { loading: loadingUpdate }] = useMutation(UpdateMenus);
    return { updateMenus, loadingUpdate };
}

export default useUpdateMenu;
