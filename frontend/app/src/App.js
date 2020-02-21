import React, { useState, useContext } from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "./AuthContext";
import { Login } from "./Modules/Login";
import { Members } from "./Modules/Members";
import { Chits } from "./Modules/Chits";
import { Finance } from "./Modules/Finance";

export const App = () => {
	// const { user } = useContext(AuthContext);

	return (
		<Switch>
			<Route path="/login" exact component={Login} />
			<Route path="/finance" component={Finance} />
			<Route path="/chits" component={Chits} />
			<Route path="/members" component={Members} />
		</Switch>
	);
};
