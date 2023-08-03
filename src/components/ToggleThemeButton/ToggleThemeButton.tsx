import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Context, useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
export type ToggleThemeButtonProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
};

const ToggleThemeButton = ({ ColorModeContext }: ToggleThemeButtonProps) => {
  const mobileCheck = useMediaQuery("(min-width:500px)");
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ToggleThemeButton;
