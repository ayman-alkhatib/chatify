import { RouterProvider } from "react-router";
import { router } from "./logic/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
