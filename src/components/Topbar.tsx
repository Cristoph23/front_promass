import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
  } from "@mui/material";
  import { useState } from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  import MuiAppBar from "@mui/material/AppBar";
  import { styled } from "@mui/material/styles";
  
  const drawerWidth = 280;
  
  const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#FFFFFF",
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }));
  
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  
  // Componente para renderizar el "Menú Horizontal".
  export default function TopBar({STATUS_SIDEBAR, openSidebar}) {
    const [statusSettingsDropdwon, setStatusSettingsDropdwon] = useState(null);
  
    const openSettingsDropdown = (event) => {
      setStatusSettingsDropdwon(event.currentTarget);
    };
    const closeSettingsDropdown = () => {
      setStatusSettingsDropdwon(null);
    };
    return (
      <AppBar position="fixed" open={STATUS_SIDEBAR}>
        <Toolbar>
          {STATUS_SIDEBAR ? (
            <></>
          ) : (
            <div className="hidden md:block text-gray-950 hover:bg-slate-100 rounded-full p-2">
              <button onClick={() => openSidebar()}>
                <MenuIcon />
              </button>
            </div>
          )}
  
          <div className="flex h-16 items-center justify-between w-full p-5">
            <div className="flex items-center"></div>
            <div className="hiden md:block">
              <div className="ml-10 flex items-center md:ml-6">
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={openSettingsDropdown} sx={{ p: 0 }}>
                    <Avatar
                      src="../assets/images/Logo_Winba.png"
                      className="rounded-full bg-white"
                    />
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-black">
                        ADMIN-PROMASS
                      </div>
                      <div className="text-xs font-medium leading-none text-black">
                        admin@promass.com
                      </div>
                    </div>
                  </IconButton>
  
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={statusSettingsDropdwon}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(statusSettingsDropdwon)}
                    onClose={closeSettingsDropdown}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={closeSettingsDropdown}>
                        <div className="text-center">{setting}</div>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }