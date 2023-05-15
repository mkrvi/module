import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {imageUrl} from "../../api/api";
import getMoviesThunk from "../../reducers/thunk/getMoviesAsync";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";


function CardList(){
    const dispatch = useDispatch();
    const {movies} = useSelector((state) => state.movies);
    const {selectedLanguage} = useSelector(state => state.languages)
    const {genresId} = useSelector((state)=>state.genres)
    const {searchValue} = useSelector(state => state.searchValue)
    const {pagination} = useSelector(state => state.page)
    const {favorite} = useSelector(state=>state.movies)
    const navigate = useNavigate()

    const noImage =`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`

    function navigateToMovieInfo(movie){
        navigate(`${movie.id}`)
    }

    useEffect((page)=>{
        if (selectedLanguage.length === 0 && genresId.length === 0 && searchValue.length === 0 && pagination.page === 1) {
            dispatch(getMoviesThunk(page));
        }
    },[dispatch, selectedLanguage.length, genresId.length, searchValue.length, pagination.page])

    function onClickButton(movie) {
        favorite.push(movie)
    }

    function notFound() {
        if (movies.length===0){
            return(
                <div style={{height:'100vh', margin:'auto'}}>
                    <h3 style={{textAlign: 'center', color:'#9f9f9f'}}>Nothing was found</h3>
                </div>
            )
        }
    }

    return(
        <Grid container spacing={1} sx={{marginTop:1, paddingRight:3}}>
            {notFound()}
            {movies.map((movie) => (
                <Grid item md={3} sx={{m:'auto'}} key={movie.id}>
                    <Card sx={{borderRadius:'12px'}}>
                        <CardActionArea onClick={() =>navigateToMovieInfo(movie)}>
                            <CardMedia
                                component="img"

                                image={ movie.poster_path ? `${imageUrl}/${movie.poster_path}` : noImage}
                                alt={movie.title}
                                sx={{display:'block', width:'100%', height:'100%'}}
                            />
                            <CardContent  sx={{height:50, backgroundColor:'#25282B'}}>
                                <Typography gutterBottom variant="h5" component="div"
                                             sx={{m:'auto', fontSize:16, textAlign:'center', color: '#9f9f9f'}}>
                                    {movie.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button onClick={()=>onClickButton(movie)} sx={{backgroundColor:'#00ffff', color:'#25282B', width:'100%'}}>
                            Add to favourite</Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default CardList