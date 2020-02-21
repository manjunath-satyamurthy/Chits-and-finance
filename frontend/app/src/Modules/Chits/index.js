import React, { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router";

import PageContainer from "../../Components/PageContainer";
import { ListChits } from "./list";
import { CreateChit } from "./dialog";

export const Chits = () => {
	return (
		<PageContainer>
			<Switch>
				<Route exact path="/chits/create">
					<CreateChit />
				</Route>
				<Route exact path="/chits/list">
					<ListChits />
				</Route>
				<Redirect from="/chits" to="/chits/list" />
			</Switch>
		</PageContainer>
	);
};
