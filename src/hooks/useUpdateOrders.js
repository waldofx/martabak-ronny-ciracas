import { UpdateOrders } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useUpdateOrder() {
    const [updateOrders, { loading: loadingUpdate }] = useMutation(UpdateOrders);
    return { updateOrders, loadingUpdate };
}

export default useUpdateOrder;
