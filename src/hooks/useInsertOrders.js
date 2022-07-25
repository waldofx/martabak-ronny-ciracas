import { InsertOrders } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertOrder() {
    const [insertOrders, { loading: loadingInsert }] = useMutation(InsertOrders);
    return { insertOrders, loadingInsert };
}

export default useInsertOrder;
