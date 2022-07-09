import { useQuery } from "@apollo/client";
import { GetMenusByPrice } from "../graphql/query";

function useGetDataByPrice() {
    const { data: dataByPrice, loading: loadingDataByPrice, error: errorDataByPrice } = useQuery(GetMenusByPrice);
    return {
        dataByPrice,
        loadingDataByPrice,
        errorDataByPrice,
    };
}

export default useGetDataByPrice;
