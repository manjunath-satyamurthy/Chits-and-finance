import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = props => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/is_authenticated/", { credentials: "include" })
			.then(res => {
				if (res.status === 200) {
					return res.json();
				}
				throw Error();
			})
			.then(data => setUser(data.username))
			.catch(err => console.log(err));
	});

	return (
		<AuthContext.Provider value={{ user: user, setUser: setUser }}>
			{props.children}
		</AuthContext.Provider>
	);
};
