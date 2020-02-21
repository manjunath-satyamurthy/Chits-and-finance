import React, { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router";

import PageContainer from "../../Components/PageContainer";
import { ListMembers } from "./list";
import { CreateMember } from "./dialog";

export const Members = () => {
	return (
		<PageContainer>
			<Switch>
				<Route exact path="/members/create">
					<CreateMember />
				</Route>
				<Route exact path="/members/list">
					<ListMembers />
				</Route>
				<Redirect from="/members" to="/members/list" />
			</Switch>
		</PageContainer>
	);
};
