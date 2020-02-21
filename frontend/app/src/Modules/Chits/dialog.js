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
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	}
}));

export const CreateChit = () => {
	const members = [
		{
			firstname: "manju",
			lastname: "satya",
			address: "some reference"
		},
		{
			firstname: "manju",
			lastname: "satya2",
			address: "some reference"
		},
		{
			firstname: "manju",
			lastname: "satya3",
			address: "some reference"
		}
	];

	const classes = useStyles();
	const [selectedMembers, setSelected] = React.useState([]);

	const selectMembers = event => {
		setSelected(event.target.value);
	};

	return (
		<Grid container item style={{ padding: "0px 5px 0px 5px" }}>
			<FormControl fullWidth margin="normal">
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Principal"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					select
					label="Benefit Type"
					SelectProps={{
						native: true
					}}
				>
					<option value={0}>Month based</option>
					<option value={1}>EMI based</option>
				</TextField>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Start Date"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Number of Members"
					type="number"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Commission Percentage"
					type="number"
				/>
				<FormControl variant="outlined">
					<InputLabel>Select Members</InputLabel>
					<Select
						multiple
						value={selectedMembers}
						onChange={selectMembers}
						input={<Input id="select-multiple-chip" />}
						renderValue={selected => (
							<div className={classes.chips}>
								{selectedMembers.map(value => (
									<Chip
										key={value}
										label={value}
										className={classes.chip}
									/>
								))}
							</div>
						)}
					>
						{members.map((member, index) => (
							<MenuItem
								key={index}
								value={member.firstname + " " + member.lastname}
							>
								{member.firstname + " " + member.lastname}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					variant="outlined"
					margin="normal"
					label="Reference"
				/>
			</FormControl>
		</Grid>
	);
};
