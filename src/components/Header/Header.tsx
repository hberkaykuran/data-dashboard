import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSession, signIn, signOut } from "next-auth/react";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { Context, useState } from "react";
import { Button, Link, useMediaQuery, useTheme } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
export type HeaderProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
};

function Header({ ColorModeContext }: HeaderProps) {
  const { data: session } = useSession();
  const tabletCheck = useMediaQuery("(min-width:768px)");
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginRight="auto"
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DupeX
            </Typography>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DupeX
            </Typography>
          </Box>
          <ToggleThemeButton ColorModeContext={ColorModeContext} />
          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            <Tooltip title="Open profile settings">
              <Button
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <Avatar
                  src={session?.user?.image ?? undefined}
                  alt={session?.user?.name ?? undefined}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {session?.user?.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#d3d3d3",
                      fontSize: "0.5rem",
                    }}
                  >
                    {session?.user?.email}
                  </Typography>
                </Box>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  href="/dashboard/profile"
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  return session ? signOut() : signIn();
                }}
              >
                <Typography textAlign="center">
                  {session ? "Logout" : "Login"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
