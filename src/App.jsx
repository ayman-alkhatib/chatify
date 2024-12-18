import { BrowserRouter, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import ChatsListPage from "./pages/ChatsListPage";
import Nav from "./component/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chatsListPage" element={<ChatsListPage />} />
            <Route path="/chatPage" element={<ChatPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
