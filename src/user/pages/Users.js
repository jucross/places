import React from "react";
import { UserList } from "../components/UserList";

const Users = () => {
	const Users = [{ id: "u1", name: "Job", image: "", places: 2 }];
	return <UserList items={Users} />;
};

export default Users;
