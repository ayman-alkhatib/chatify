import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Nav from "../component/Nav";
import LoginPage from "../pages/LoginPage";
import ChatsListPage from "../pages/ChatsListPage";
import ChatPage from "../pages/ChatPage";

export const routes = {
  login: "/login",
  chatsListPage: "/chatsListPage",
  chatPage: "/chatPage",
};

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chatsListPage" element={<ChatsListPage />} />
      <Route path="/chatPage/:receiverId" element={<ChatPage />} />
    </Route>
  )
);
