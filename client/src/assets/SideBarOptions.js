import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SideBarOptions = [
  {
    text: "Home",
    Icon: HomeIcon,
    active: true,
  },
  {
    text: "Explore",
    Icon: SearchIcon,
  },
  {
    text: "Notifications",
    Icon: NotificationsNoneIcon,
  },
  {
    text: "Messages",
    Icon: MailOutlineIcon,
  },
  {
    text: "List",
    Icon: ListAltIcon,
  },
  {
    text: "Bookmark",
    Icon: BookmarkBorderIcon,
  },
  {
    text: "Profile",
    Icon: PermIdentityIcon,
  },
  {
    text: "More",
    Icon: MoreHorizIcon,
  },
];

export default SideBarOptions;
