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
import logo from '../../image/logo.png';
import {Link, NavLink} from "react-router-dom";
import './NavBar.css'
import {useContext} from "react";
import {admin, authContext} from "../../context/AuthContext";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {cartContext} from "../../context/CartContextProvider";
import {favoritesContext} from "../../context/FavoritesContextProvider";



const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user, handleLogout} = useContext(authContext);
    const {cartLength} = useContext(cartContext);
    const {favoritesLength} = useContext(favoritesContext)


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

                        <NavLink className='logo' to="/">
                        NFT
                        </NavLink>

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

                            <MenuItem  key="Blog" onClick={handleCloseNavMenu}>
                                <Link to='/tutorial' style={{textDecoration: "none", color: "black"}}>
                                <Typography  textAlign="center">Tutorial</Typography>
                                </Link>
                            </MenuItem>
                            { user && (
                                <MenuItem  key="MarketPlace" onClick={handleCloseNavMenu}>
                                    <Link to='/marketPlace' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Market Place</Typography>
                                    </Link>
                                </MenuItem>
                            )}

                            { user && (
                                <MenuItem  key="Cart" onClick={handleCloseNavMenu}>
                                    <Link to='/cart' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Cart</Typography>
                                    </Link>
                                </MenuItem>
                            )}
                            { user && (
                                <MenuItem  key="favorite" onClick={handleCloseNavMenu}>
                                    <Link to='/favorite' style={{textDecoration: "none", color: "black"}}>
                                        <Typography  textAlign="center">Favorites</Typography>
                                    </Link>
                                </MenuItem>
                            )}

                            {admin === user.email && (
                            <MenuItem  key="AddNft" onClick={handleCloseNavMenu}>
                                <Link to='/addNft' style={{textDecoration: "none", color: "black"}}>
                                <Typography  textAlign="center">Add nft</Typography>
                                </Link>
                            </MenuItem>
                            )}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        { user && (
                        <NavLink to='/marketPlace' style={{textDecoration:"none", marginLeft:'10px'}}>
                        <Button
                            key='marketPlace'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Market Place
                        </Button>
                        </NavLink>
                            )}
                        { user && (
                            <NavLink to='/chat' style={{textDecoration:"none"}}>
                                <Button
                                    key='Feedback'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    Feedback
                                </Button>
                            </NavLink>
                        )}
                        <NavLink to='/tutorial' style={{textDecoration:"none"}}>
                        <Button
                            key='blog'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Tutorial
                        </Button>
                        </NavLink>
                        {admin === user.email && (
                        <NavLink to='/addNft' style={{textDecoration:"none"}}>
                        <Button
                            key='addNFT'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Add nft
                        </Button>
                        </NavLink>
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {user &&
                            <>
                            <NavLink className='love' to="/favorite" >
                                <Badge style={{marginRight:"20px"}} size="large" badgeContent={favoritesLength} color="warning">
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
