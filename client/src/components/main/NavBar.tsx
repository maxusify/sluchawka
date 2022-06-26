import React from "react";
import { useLogoutMutation, useMeQuery } from "../../lib/generated/graphql";

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const [{ data, fetching }] = useMeQuery();
  const [, logout] = useLogoutMutation();

  return <div>NavBar</div>;
};

export default NavBar;
