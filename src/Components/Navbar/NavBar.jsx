import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../image/logo.png';
import {Link, NavLink} from "react-router-dom";
import './NavBar.css'
import {useContext} from "react";
import {authContext} from "../../context/AuthContext";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {cartContext} from "../../context/CartContextProvider";



const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user, handleLogout} = useContext(authContext);
    const {cartLength} = useContext(cartContext)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" style={{backgroundColor:"white", color: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavLink to="/">
                    <img width={130} src={logo} alt=""/>
                    </NavLink>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            marginLeft: "10px",
                        }}
                    >
                        <NavLink className='logo' to="/">
                        NFT
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}

                        >
                            <MenuItem  key="MarketPlace" onClick={handleCloseNavMenu}>
                                <Typography  textAlign="center">Market Place</Typography>
                            </MenuItem>
                            <MenuItem  key="Blog" onClick={handleCloseNavMenu}>
                                <Typography  textAlign="center">Blog</Typography>
                            </MenuItem>
                            <MenuItem  key="AddNft" onClick={handleCloseNavMenu}>
                                <Typography  textAlign="center">Add nft</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavLink to='/marketPlace' style={{textDecoration:"none"}}>
                        <Button
                            key='marketPlace'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Market Place
                        </Button>
                        </NavLink>
                        <Button
                            key='blog'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Blog
                        </Button>
                        <NavLink to='/addNft' style={{textDecoration:"none"}}>
                        <Button
                            key='addNFT'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Add nft
                        </Button>
                        </NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {user &&
                            <>
                            <NavLink className='love' to="/" >
                                <Badge style={{marginRight:"20px"}} size="large" badgeContent={cartLength} color="warning">
                                    <FavoriteIcon />
                                </Badge>
                            </NavLink>
                            <NavLink className='link' to="/cart" >
                            <Badge style={{marginRight:"20px"}} size="large" badgeContent={cartLength} color="warning">
                            <ShoppingCartIcon />
                            </Badge>
                            </NavLink>
                            </>
                        }





                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            { user ? <MenuItem onClick={handleLogout}><Link to='/' style={{textDecoration: "none", color: "black"}}>Loge out</Link></MenuItem>
                                : <MenuItem onClick={handleCloseUserMenu} ><Link to='/auth' style={{textDecoration: "none", color: "black"}}>Loge in</Link></MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
