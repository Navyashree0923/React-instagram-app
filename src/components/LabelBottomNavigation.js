import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 400}} value={value} onChange={handleChange}>
      {/* <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} /> */}
      <BottomNavigationAction
        label="Home"
        value="/home"
        icon={<HomeIcon />}
      />
       <BottomNavigationAction
        label="Search"
        value="/Search"
        icon={<SearchIcon />}
/>
      <BottomNavigationAction
        label="Add"
        value="/add"
        icon={<AddIcon />}
/>
<BottomNavigationAction
        label="Like"
        value="/like"
        icon={<FavoriteIcon />}
/>
      <BottomNavigationAction
        label="Profile"
        value="/Profile"
        icon={<AccountCircle />}
      />
    </BottomNavigation>
  );
}

