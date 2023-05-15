import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import getMovieAsync from "../../reducers/thunk/getMovieAsync";
import {Box, Container, Typography} from "@mui/material";
import {imageUrl} from "../../api/api";

function Movie() {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getMovieAsync(id))
    }, [dispatch, id])

    const {selectedMovie} = useSelector(state => state.movies)


    const renderGenres = () => {
        if (selectedMovie.genres) {
            return (
                selectedMovie.genres.map(genre => <Typography
                    variant='h6'
                    component='span'
                    key={genre.id}
                    ml={3}>{genre.name}
                </Typography>)
            )
        }
    }

    return(
        <Box sx={{backgroundColor:'#1f2123'}}>
            <Box style={{display: 'flex', height: '100vh'}}>
                <Container style={{display: 'flex'}}>
                    <img style={{width: '100%', height:'100%', borderRadius: '10px'}}
                         width='300'
                         src={imageUrl+selectedMovie.poster_path}
                         alt='Poster'
                    />
                    <Box sx={{backgroundColor:'#25282B', paddingLeft:3, paddingRight:3}}>
                        <Typography sx={{color: '#9f9f9f', textAlign:'center'}} variant='h4' mb={3}>{selectedMovie.original_title}</Typography>
                        <Typography sx={{color: '#9f9f9f'}} variant='h6' mb={3}>Release
                            Date: {selectedMovie.release_date}</Typography>
                        <Typography sx={{color: '#9f9f9f'}} variant='h6' fontWeight='bold'>Overview</Typography>
                        <Typography sx={{color: '#9f9f9f'}} variant='h6' mb={3}>{selectedMovie.overview}</Typography>
                        <Box>
                            <Typography sx={{color: '#9f9f9f'}} variant='h6' component='span'>Genres:{renderGenres()}</Typography>
                        </Box>
                        <Typography sx={{color: '#9f9f9f'}} variant='h6'
                                    mt={3}>Original language: {selectedMovie.original_language}</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default Movie