import { Link, Outlet } from "react-router";
function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to={"login"}>login</Link>
        </li>
        <li>
          <Link to={"chatsListPage"}>chatsListPage</Link>
        </li>
        <li>
          <Link to={"chatPage"}>chatPage</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Nav;
