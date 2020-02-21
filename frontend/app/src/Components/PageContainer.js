import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	}
});

const PageContainer = props => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Drawer open={open} onClose={() => toggleDrawer()}>
				<div className={classes.list} role="presentation">
					<List>
						{[
							{ name: "Finances", route: "/finance" },
							{ name: "Chits", route: "/chits" },
							{ name: "Members", route: "/members" }
						].map((module, index) => (
							<Link to={module.route}>
								<ListItem button>
									<ListItemIcon>{<MailIcon />}</ListItemIcon>
									<ListItemText primary={module.name} />
								</ListItem>
							</Link>
						))}
					</List>
				</div>
			</Drawer>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() => toggleDrawer()}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container disableGutters={true} maxWidth="md">
				{props.children}
			</Container>
		</div>
	);
};

export default PageContainer;
