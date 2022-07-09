import { InsertMenus } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertMenu() {
    const [insertMenus, { loading: loadingInsert }] = useMutation(InsertMenus);
    return { insertMenus, loadingInsert };
}

export default useInsertMenu;
