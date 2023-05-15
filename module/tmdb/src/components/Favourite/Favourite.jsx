import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {imageUrl} from "../../api/api";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Favorite() {
    const {favorite} = useSelector(state=>state.movies)
    const navigate = useNavigate()

    const noImage =`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`

    function navigateToMovieInfo(movie){
        navigate(`${movie.id}`)
    }


    function renderFavoriteMovies() {
        const filteredArray = favorite.filter((item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
        if (filteredArray.length !== 0) {
            return (
                <Grid container spacing={1}>
                    {filteredArray.map((movie) => (
                        <Grid item md={3} sx={{m:'auto'}} key={movie.id}>
                            <Card sx={{borderRadius:'12px'}}>
                                <CardActionArea onClick={() =>navigateToMovieInfo(movie)}>
                                    <CardMedia
                                        component="img"
                                        height="140"
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
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )
        } else {
            return (
                <Box sx={{display:'flex', justifyContent:'center', height:'100vh', backgroundColor: '#1f2123'}}>
                    <h3 style={{textAlign: 'center', color:'#9f9f9f'}}>You didn't add any movies to favourite</h3></Box>
            )
        }
    }

    return(
        <>
            {renderFavoriteMovies()}
        </>
    )
}

export default Favorite