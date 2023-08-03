import scss from "./Footer.module.scss";
import { Button, Paper, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();
  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;
  return (
    <footer className={scss.footer}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul>
          <li>
            <FooterLink href={"/"}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/analytics"}>Analytics</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={"/#termsandconditions"}>
              Terms & Conditions
            </FooterLink>
          </li>
          <li>
            <FooterLink href={"/#accessibilitystatement"}>
              Accessibility statement
            </FooterLink>
          </li>
          <li>
            <Button
              variant="text"
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign out" : "Sign in"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
