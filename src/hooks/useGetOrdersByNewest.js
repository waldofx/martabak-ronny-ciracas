import { useQuery } from "@apollo/client";
import { GetOrdersByNewest } from "../graphql/query";

function useGetDataByNewest() {
    const { data: dataByNewest, loading: loadingDataByNewest, error: errorDataByNewest } = useQuery(GetOrdersByNewest);
    return {
        dataByNewest,
        loadingDataByNewest,
        errorDataByNewest,
    };
}

export default useGetDataByNewest;
