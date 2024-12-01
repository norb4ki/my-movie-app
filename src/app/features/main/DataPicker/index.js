import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AIR_OPTION, FAVORITE_OPTION, POPULAR_OPTION } from "../../../components/dropdown/utils/index.js";
import { getFavoriteRequest } from "../../../redux/slices/favorite/index.js";
import { getAirRequest, getPopularRequest } from "../../../redux/slices/movie/index.js";

const useDataPicker = (category) => {
    const dispatch = useDispatch();
    const {
        popularData,
        airData,
        lastPopularRequestTime,
        lastAirRequestTime} = useSelector((state) => state.movieReducer);
    const { data, edited } = useSelector((state) => state.favoriteReducer);

    const hasPassedOneMinute = (date) => {
        const currentTime = Date.now();
        const timeDifference = currentTime - date;
        return timeDifference > 60000;
    };


    useEffect(() => {
        switch (category) {
            case FAVORITE_OPTION:
                if(edited)
                    dispatch(getFavoriteRequest({ page: 1, language: "en-US" }));
                break;
            case POPULAR_OPTION:
                console.log(lastPopularRequestTime)
                if(!lastPopularRequestTime || hasPassedOneMinute(lastPopularRequestTime))
                    dispatch(getPopularRequest({ page: 1, language: "en-US" }));
                break;
            case AIR_OPTION:
                if(!lastAirRequestTime || hasPassedOneMinute(lastAirRequestTime))
                    dispatch(getAirRequest({ page: 1, language: "en-US" }));
                break;
            default:
                break;
        }
    }, [category, dispatch,lastPopularRequestTime]);

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
