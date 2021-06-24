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
import { Box } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Popover from '@material-ui/core/Popover';
import { useState } from "react";
import {Dialog} from "@material-ui/core";


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

	const [openSwitchAccount,setOpenSwitchAccount] = useState(false);

	console.log(user);

	const handleLogout = () => {
		localStorage.removeItem('feathers-jwt');
		logout();
		window.location.reload();
	}

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;


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
							<Box>
								<Chip onClick={handleClick} aria-describedby={id} 
								label={user.name ? user.name : ''} avatar={<Avatar src={user.avatar ? user.avatar : ''} />} />
								<Popover
									id={id}
									open={open}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
								>
									<Box
										width={'100%'}
										p={2}
										display={'flex'}
										flexDirection={'column'}
									>
										<Button
											onClick={() => handleLogout()}
											color={"primary"}
										>
											{"Log Out"}
										</Button>
										<Button
											onClick={() => setOpenSwitchAccount(true)}
											color={"primary"}
										>
											{"Switch Accout"}
										</Button>
									</Box>
								</Popover>
							</Box>
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

			<Dialog open={openSwitchAccount} onClose={() => setOpenSwitchAccount(false)}>
				\
			</Dialog>
		</React.Fragment>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
	title: PropTypes.string,
};

export default withStyles(styles)(Header);
