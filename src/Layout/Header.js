import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "laco-react";
import UserStore from "../store/userStore";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { logout } from "../apis/authentication";
import { useRouter } from "next/router";
import app from '../apis/index';


const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes, onDrawerToggle, title } = props;
  const { user } = useStore(UserStore);
  const Router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('feathers-jwt');
    logout();
    window.location.reload();
  }

  return (
    <React.Fragment>
      <Head>
        <title>
          {title ? title + " | IMCA Bank" : "IMCA Bank"}
        </title>
      </Head>
      <AppBar color="#ffffff" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Button
                onClick={() => handleLogout()}
                variant={"outlined"}
                color={"primary"}
              >
                {"Log Out"}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="#ffffff"
        position="static"
        elevation={2}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="primary" variant="h3">
                {title ? title : ""}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(Header);
