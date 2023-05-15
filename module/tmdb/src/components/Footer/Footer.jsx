import React from 'react';
import {Box, Typography} from "@mui/material";

function Footer() {
    return(
        <Box sx={{backgroundColor: '#00ffff'}}>
            <Typography sx={{paddingTop:3, paddingBottom:3, textAlign:'center'}} variant="body2" color="inherit">
            © 2023 Movies App. All rights reserved
        </Typography>
        </Box>
    )
}

export default Footer