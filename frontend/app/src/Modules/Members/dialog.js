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
import { Input } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	}
}));

export const CreateMember = () => {
	const classes = useStyles();

	let [formData, setFormData] = React.useState({
		firstname: "",
		lastname: "",
		gender: "",
		address: "",
		phone_number: "",
		reference: ""
	});

	const onChange = (field, value) => {
		setFormData({ ...formData, [field]: value.currentTarget.value });
	};

	const submitForm = () => {
		console.log(formData);
	};

	return (
		<Grid container item style={{ padding: "0px 5px 0px 5px" }}>
			<FormControl fullWidth margin="normal">
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Firstname"
					value={formData.firstname}
					onChange={val => onChange("firstname", val)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Lastname"
					value={formData.lastname}
					onChange={val => onChange("lastname", val)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					select
					label="Gender"
					SelectProps={{
						native: true
					}}
				>
					<option value={0}>Male</option>
					<option value={1}>Female</option>
				</TextField>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Address"
					value={formData.address}
					onChange={val => onChange("address", val)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					label="Phone number"
					type="number"
					value={formData.phone_number}
					onChange={val => onChange("phone_number", val)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					label="Reference"
					value={formData.reference}
					onChange={val => onChange("reference", val)}
				/>
				<Button
					margin="normal"
					variant="contained"
					color="primary"
					onClick={submitForm}
				>
					Create
				</Button>
			</FormControl>
		</Grid>
	);
};
