import { useQuery } from "@apollo/client";
import { GetPostsByNewest } from "../graphql/query";

function useGetDataByNewest() {
    const { data: dataByNewest, loading: loadingDataByNewest, error: errorDataByNewest } = useQuery(GetPostsByNewest);
    return {
        dataByNewest,
        loadingDataByNewest,
        errorDataByNewest,
    };
}

export default useGetDataByNewest;
