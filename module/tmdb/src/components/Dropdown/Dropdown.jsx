import React from "react";
import {Box, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import getGenresAsync from "../../reducers/thunk/getGenresAsync";
import discoverMovieAsync from "../../reducers/thunk/discoverMovieAsync";
import getLanguagesThunk from "../../reducers/thunk/getLanguagesAsync";
import {updateGenresId} from "../../reducers/genresReducer";
import {updateLanguages} from "../../reducers/languageReducer";
import getMoviesThunk from "../../reducers/thunk/getMoviesAsync";
import Search from "../Search/Search";
import Button from "@mui/material/Button";

function Dropdown(){
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genres)
    const {page} = useSelector(state => state.page)

    useEffect(() => {
        dispatch(getGenresAsync())
        dispatch(getLanguagesThunk())
    }, [dispatch])

    const {languages} = useSelector((state) => state.languages)
    const {selectedLanguage} = useSelector(state => state.languages)
    const {genresId} = useSelector((state)=>state.genres)

    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('')

    function handleLanguageChange(event,language) {
        event.preventDefault()
        selectedLanguage.push(language)
    }

    function handleGenreChange(event, genreId) {
        event.preventDefault()
        genresId.push(genreId)
    }

    function onSubmitButton (genreId, language, page) {
        dispatch(discoverMovieAsync(genreId,language, page))
        console.log(genresId, selectedLanguage, page);
    }

    function onResetButton(genreId, language,page) {
        dispatch(getMoviesThunk(page));
        dispatch(updateGenresId(genreId))
        dispatch(updateLanguages(language))
        setLanguage('')
        setGenre('')
    }

    return(
        <Box sx={{width:'35%', marginLeft:4}}>
            <div>
                <InputLabel id="demo-simple-select-label" sx={{color:'#9f9f9f'}}>Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Genres"
                    value={genre}
                    onChange={(event)=>setGenre(event.target.value)}
                    sx={{width:'90%', marginBottom:3, backgroundColor:'#e5e5e5'}}
                >
                    {genres.map((genre)=>(
                    <MenuItem key={genre.id} value={genre.name}
                              onClick={(event)=>handleGenreChange(event, genre.id)}>
                        {genre.name}
                    </MenuItem>
                        ))}
                </Select>
                <InputLabel id="demo-simple-select-helper-label" sx={{color:'#9f9f9f'}}>Languages</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Languages"
                    value={language}
                    onChange={(event)=> setLanguage(event.target.value)}
                    sx={{width:'90%', backgroundColor:'#e5e5e5'}}
                >
                    {languages.map((language)=>(
                        <MenuItem key={language.iso_639_1} value={language.english_name}
                        onClick={(event)=>handleLanguageChange(event, language.iso_639_1)}
                        >{language.english_name}</MenuItem>
                    ))}
                </Select>
                <div style={{display:'flex', width:'90%', justifyContent:'space-between'}}>
                    <Button variant="contained"
                            onClick={() => onSubmitButton(genresId.slice(-1).join(''), selectedLanguage.slice(-1).join(''), page)}
                            sx={{
                                marginTop: 3,
                                backgroundColor: '#00ffff',
                                color: '#25282B',
                                borderRadius: '12px'
                            }}>Search</Button>
                    <Button variant='contained'
                            onClick={() => onResetButton(genresId.toString(), selectedLanguage.toString(), page)}
                            sx={{marginTop: 3, backgroundColor: '#00ffff', color: '#25282B', borderRadius: '12px'}}>Reset
                        filters</Button>
                </div>

                <Search/>
            </div>
        </Box>
    )
}
export default Dropdown