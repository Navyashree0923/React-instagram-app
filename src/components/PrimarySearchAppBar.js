import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
 
import AccountCircle from '@mui/icons-material/AccountCircle';
import Message from '@mui/icons-material/Message';
 
import MoreIcon from '@mui/icons-material/MoreVert';
const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: 'inherit',
 '& .MuiInputBase-input': {
   padding: theme.spacing(1, 1, 1, 0),
   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
     width: '20ch',
   },
 },
}));
 
export default function PrimarySearchAppBar() {
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
 
 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
 
 const handleProfileMenuOpen = (event) => {
   setAnchorEl(event.currentTarget);
 };
 
 const handleMobileMenuClose = () => {
   setMobileMoreAnchorEl(null);
 };
 
 const handleMenuClose = () => {
   setAnchorEl(null);
   handleMobileMenuClose();
 };
 
 const handleMobileMenuOpen = (event) => {
   setMobileMoreAnchorEl(event.currentTarget);
 };
 
 const menuId = 'primary-search-account-menu';
 const renderMenu = (
   <Menu
     anchorEl={anchorEl}
     anchorOrigin={{
       vertical: 'top',
       horizontal: 'right',
     }}
     id={menuId}
     keepMounted
     transformOrigin={{
       vertical: 'top',
       horizontal: 'right',
     }}
     open={isMenuOpen}
     onClose={handleMenuClose}
   >
     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
   </Menu>
 );
 
 const mobileMenuId = 'primary-search-account-menu-mobile';
 const renderMobileMenu = (
   <Menu
     anchorEl={mobileMoreAnchorEl}
     anchorOrigin={{
       vertical: 'top',
       horizontal: 'right',
     }}
     id={mobileMenuId}
     keepMounted
     transformOrigin={{
       vertical: 'top',
       horizontal: 'right',
     }}
     open={isMobileMenuOpen}
     onClose={handleMobileMenuClose}
   >
     <MenuItem>
       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         <Badge badgeContent={4} color="error">
           <Message />
         </Badge>
       </IconButton>
       <p>Messages</p>
     </MenuItem>
        </Menu>
 );
 
 return (
   <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static"
     sx={{ mr: 18}}
     
    
     >
       <Toolbar>
                 <Typography
           variant="h6"
           noWrap
           component="div"
           sx={{ display: { xs: 'none', sm: 'block' } }}
         >
         INSTAGRAM
         </Typography>
                 <Box sx={{ flexGrow: 1 }} />
         <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <IconButton size="large" aria-label="show 4 new mails" color="inherit">
             <Badge badgeContent={4} color="error">
               <Message/>
             </Badge>
           </IconButton>
                 </Box>
         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
           <IconButton
             size="large"
             aria-label="show more"
             aria-controls={mobileMenuId}
             aria-haspopup="true"
             onClick={handleMobileMenuOpen}
             color="inherit"
           >
             <MoreIcon />
           </IconButton>
         </Box>
       </Toolbar>
     </AppBar>
     {renderMobileMenu}
     {renderMenu}
   </Box>
 );
}
 

