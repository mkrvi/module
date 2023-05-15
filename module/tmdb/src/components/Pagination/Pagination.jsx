import React from "react";
import {Pagination, Stack} from "@mui/material";


function MoviePagination({count, page, onChange}){

    return(
        <Stack sx={{margin:'auto', paddingTop:5}}>
            <Pagination  sx={{margin:'auto', backgroundColor:'#00ffff', color:'e5e5e5'}} count={count} page={page} onChange={onChange}/>
        </Stack>
    )
}
export default MoviePagination