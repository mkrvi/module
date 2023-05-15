import {Box} from "@mui/material";
import NavBar from "../NavBar/Navbar";

function Header() {
    return(
        <Box sx={{backgroundColor: '#25282B', display:'flex', justifyContent:'center'}}>
            <NavBar/>
        </Box>
    )
}

export default Header