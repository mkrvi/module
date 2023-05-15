import CardList from "../../components/CardList/CardList";
import Dropdown from "../../components/Dropdown/Dropdown";
import MoviePagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import discoverMovieAsync from "../../reducers/thunk/discoverMovieAsync";
import {Box, Grid} from "@mui/material";
import searchMovieAsync from "../../reducers/thunk/searchMovieAsync";

function Movies() {
    const dispatch = useDispatch();
    const {pagination} = useSelector(state => state.page)
    const {genresId} = useSelector(state=>state.genres)
    const {selectedLanguage} = useSelector(state=>state.languages)
    const {searchValue} = useSelector(state => state.searchValue)


    function onChange(page, genresId, selectedLanguage){
        window.scrollTo(0, 0);
        if (searchValue){
            const searchMovie = (page) => {
                dispatch(searchMovieAsync(searchValue, page))
            }
            return searchMovie(page)
        } else {
            dispatch(discoverMovieAsync(genresId, selectedLanguage, page))
        }
    }

    return(
        <Box sx={{display: 'flex', backgroundColor:'#1f2123'}}>
            <Dropdown />
            <Grid container spacing={0} sx={{marginBottom:5}}>
                <CardList/>
                <MoviePagination count={pagination.totalPages}
                                 page={pagination.page}
                                 onChange={(event, page) => onChange(page, genresId.toString(), selectedLanguage.toString())}/>
            </Grid>
        </Box>
    )
}

export default Movies