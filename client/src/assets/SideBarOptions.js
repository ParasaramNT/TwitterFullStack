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
    route: "/",
  },
  {
    text: "Explore",
    route: "/explore",
    Icon: SearchIcon,
  },
  {
    text: "Notifications",
    route: "/notifications",
    Icon: NotificationsNoneIcon,
  },
  {
    text: "Messages",
    route: "/messages",
    Icon: MailOutlineIcon,
  },
  {
    text: "List",
    route: "/list",
    Icon: ListAltIcon,
  },
  {
    text: "Bookmark",
    route: "/bookmarks",
    Icon: BookmarkBorderIcon,
  },
  {
    text: "Profile",
    route: "/profile",
    Icon: PermIdentityIcon,
  },
  {
    text: "More",
    Icon: MoreHorizIcon,
  },
];

export default SideBarOptions;
