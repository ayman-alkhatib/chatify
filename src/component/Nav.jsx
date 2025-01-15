import { Link, Outlet } from "react-router";
import { routes } from "../logic/router";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.login}>login</Link>
        </li>
        <li>
          <Link to={routes.chatsListPage}>chatsListPage</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Nav;
