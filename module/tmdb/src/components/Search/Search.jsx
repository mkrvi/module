import React from "react";
import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../reducers/thunk/getMoviesAsync";
import {updateSearchValue} from "../../reducers/searchReducer";
import searchMovieAsync from "../../reducers/thunk/searchMovieAsync";

function Search() {
    const {searchValue} = useSelector(state => state.searchValue)
    const dispatch = useDispatch()

    const updateSearchInputValue = (event,page) => {
        dispatch(updateSearchValue(event.target.value))
        if (!event.target.value) {
            dispatch(getMoviesAsync(page))
        }
    }

    const searchMovie = (page) => {
        dispatch(searchMovieAsync(searchValue, page))
    }

    return(
        <Box sx={{width:'90%', marginTop:3}}>
            <TextField sx={{backgroundColor:'#ffffff'}}
                placeholder='Enter a movie name...'
                fullWidth
                value={searchValue}
                onChange={updateSearchInputValue}
            />
            <Box mt={2}>
                <Button
                    onClick={()=>searchMovie(1)}
                    variant='contained'
                    fullWidth
                    style={{marginTop:3, backgroundColor: '#00ffff', color:'#25282B'}}
                >
                    Find
                </Button>
            </Box>
        </Box>
    )
}

export default Search