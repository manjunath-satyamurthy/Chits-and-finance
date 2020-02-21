import React, { useState, useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/Add";
import BottomFab from "../../Components/BottomFab";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	}
}));

export const ListFinances = () => {
	const data = [
		{
			id: "fn-1243",
			principal: 50000,
			start_date: "10-12-2018"
		}
	];

	const classes = useStyles();

	return (
		<>
			<List className={classes.root}>
				{data.map((chit, index) => (
					<ListItem key={index}>
						<ListItemAvatar>
							<Avatar>
								<ImageIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={chit.id}
							secondary={chit.principal}
						/>
					</ListItem>
				))}
			</List>
			<BottomFab action={<AddIcon />} href="/finance/create" />
		</>
	);
};
