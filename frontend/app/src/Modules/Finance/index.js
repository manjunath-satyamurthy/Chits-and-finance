import React, { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router";

import PageContainer from "../../Components/PageContainer";
import { ListFinances } from "./list";
import { CreateFinance } from "./dialog";

export const Finance = () => {
	return (
		<PageContainer>
			<Switch>
				<Route exact path="/finance/create">
					<CreateFinance />
				</Route>
				<Route exact path="/finance/list">
					<ListFinances />
				</Route>
				<Redirect from="/finance" to="/finance/list" />
			</Switch>
		</PageContainer>
	);
};
