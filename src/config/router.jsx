import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, db, getDoc, doc, auth } from "../config/firebase";
import UserChat from "../pages/Chat";
import LoginPage from "../pages/Login";
import SignupApp from "../pages/Signup";

function AppRouter() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(true);
        }
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <UserChat /> : <SignupApp />} />
          <Route
            path="/chat"
            element={user ? <UserChat /> : <Navigate to={"/signup"} />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to={"/chat"} /> : <SignupApp />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/chat"} /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
