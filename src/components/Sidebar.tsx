import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';

const drawerWidth = 280;

const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: { theme: any; open: boolean }) => ({
  width: drawerWidth,
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Componente para renderizar el "Menú Vertical".
export default function Sidebar({STATUS_SIDEBAR, closeSidebar}) {
  return (
    <Drawer variant="permanent" open={STATUS_SIDEBAR} className="hidden md:block">
      <div className="relative h-60 bg-[#334FAF]">
        <div className="absolute top-0 right-0 text-white rounded-full m-6">
          <button onClick={closeSidebar}>
            <MenuIcon />
          </button>
        </div>
        <div
          className={`${
            STATUS_SIDEBAR ? "" : "hidden"
          } flex items-center justify-center h-full`}
        >
          <p className="text-center text-white">
            ADMIN-PROMASS <br /> admin@promass.com
          </p>
        </div>
      </div>
      <Divider />
      <List>

         <NavLink to="/insert-post" activeClassName="bg-red-500 text-white hover:bg-red-500" className="rounded-r-full mr-5">
            <ListItemButton >
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </NavLink>
      </List>
    </Drawer>
  );
}
