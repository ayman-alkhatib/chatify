import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { supabase } from "./logic/supabase";
import { useEffect, useState } from "react";

import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import ChatsListPage from "./pages/ChatsListPage";
import Nav from "./component/Nav";

function App() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            path="/login"
            element={
              !session ? <LoginPage /> : <Navigate to={"/chatsListPage"} />
            }
          />
          <Route
            path="/chatsListPage"
            element={<ChatsListPage userId={session?.user.id} />}
          />
          <Route
            path="/chatPage/:receiverId"
            element={<ChatPage senderId={session?.user.id} receiverId={""} />}
          />
          {/* <Route
            path="*"
            element={<Navigate to={session ? "/chatsListPage" : "/login"} />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
