import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { AuthContext } from "../../AuthContext";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { user, setUser } = useContext(AuthContext);

	const onLoginClick = () => {
		fetch("/login/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username: username, password: password })
		}).then(res => {
			if (res.status == 200) {
				setUser("username");
			}
		});
	};
	return (
		<Container maxWidth="md">
			<Grid container justify="center">
				<FormControl>
					<TextField
						value={username}
						onChange={event => setUsername(event.target.value)}
						label="Username"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						value={password}
						onChange={event => setPassword(event.target.value)}
						label="Password"
						type="password"
						margin="normal"
						variant="outlined"
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={onLoginClick}
					>
						Login
					</Button>
				</FormControl>
			</Grid>
		</Container>
	);
};
