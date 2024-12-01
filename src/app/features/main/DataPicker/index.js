import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AIR_OPTION, FAVORITE_OPTION, POPULAR_OPTION } from "../../../components/dropdown/utils/index.js";
import { getFavoriteRequest } from "../../../redux/slices/favorite/index.js";
import { getAirRequest, getPopularRequest } from "../../../redux/slices/movie/index.js";

const useDataPicker = (category) => {
    const dispatch = useDispatch();
    const { popularData, airData } = useSelector((state) => state.movieReducer);
    const { data } = useSelector((state) => state.favoriteReducer);

    useEffect(() => {
        switch (category) {
            case FAVORITE_OPTION:
                dispatch(getFavoriteRequest({ page: 1, language: "en-US" }));
                break;
            case POPULAR_OPTION:
                dispatch(getPopularRequest({ page: 1, language: "en-US" }));
                break;
            case AIR_OPTION:
                dispatch(getAirRequest({ page: 1, language: "en-US" }));
                break;
            default:
                break;
        }
    }, [category, dispatch]);

    switch (category) {
        case FAVORITE_OPTION:
            return data;
        case POPULAR_OPTION:
            return popularData;
        case AIR_OPTION:
            return airData;
        default:
            return {};
    }
};

export default useDataPicker;
