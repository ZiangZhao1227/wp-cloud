import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Badge } from "@mui/material";

import "./navBar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="title">Dashboard</span>
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <Badge badgeContent={4} color="primary">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
