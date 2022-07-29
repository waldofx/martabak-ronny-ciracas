import { DeleteOrders } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteOrder() {
    const [deleteOrders, { loading: loadingDelete }] = useMutation(DeleteOrders);
    return { deleteOrders, loadingDelete };
}

export default useDeleteOrder;
