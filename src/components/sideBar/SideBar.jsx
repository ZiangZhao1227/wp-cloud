import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DnsIcon from "@mui/icons-material/Dns";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import WebIcon from "@mui/icons-material/Web";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Avatar from "@mui/material/Avatar";

import "./sideBar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">WP-Cloud</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>

          <li>
            <WebIcon className="icon" />
            <span>Sites</span>
          </li>

          <li>
            <MoveDownIcon className="icon" />
            <span>Migrations</span>
          </li>

          <li>
            <DnsIcon className="icon" />
            <span>Zoner DNS</span>
          </li>

          <li>
            <AnalyticsIcon className="icon" />
            <span>Analytics</span>
          </li>

          <li>
            <ApartmentIcon className="icon" />
            <span>Company</span>
          </li>

          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>

          <li>
            <VisibilityIcon className="icon" />
            <span>Activity Log</span>
          </li>

          <p className="title">USER</p>
          <li>
            <Avatar />
            <span className="username">Zoner.fi</span>
          </li>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
