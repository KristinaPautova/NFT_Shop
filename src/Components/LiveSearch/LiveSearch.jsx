import React, {useEffect, useState} from 'react';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {useLocation, useSearchParams} from "react-router-dom";
import "./LiveSearch.css"


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const LiveSearch = () => {

    const [searchValue, setSearchValue] = useState('') ;
    const [searchParams, setSearchParams] = useSearchParams('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/marketPlace") {
        setSearchParams({
            q: searchValue,
        })
        }
    },[searchValue])

    return (
        <div>
            <Search >
                <SearchIconWrapper className="glass">
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase style={{paddingTop: "10px", paddingBottom: "10px" }} className='search'
                    placeholder="Search???"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchValue}
                    onChange = {(e) => setSearchValue(e.target.value || "")}
                />
            </Search>
        </div>
    );
};

export default LiveSearch;