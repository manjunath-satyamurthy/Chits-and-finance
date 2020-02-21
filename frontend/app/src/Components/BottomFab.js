import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const BottomFab = props => {
	return (
		<Grid container item justify="flex-end" style={{ paddingRight: 20 }}>
			<Link
				to={props.href}
				style={{
					textAlign: "right",
					margin: 0,
					top: "auto",
					bottom: 20,
					position: "fixed"
				}}
			>
				<Fab color="primary" aria-label="add">
					{props.action}
				</Fab>
			</Link>
		</Grid>
	);
};

export default BottomFab;
