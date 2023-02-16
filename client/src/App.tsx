import { HomePage } from "./pages/Home";
import { ReportPage } from "./pages/Report";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./component/navbar";
import { useState, useEffect } from "react";
import { User } from "./models/user";
import * as UsersApi from "./api/users_api";
import { LoginModal } from "./component/LoginModal";
import { SignUpModal } from "./component/SignUpModal";

function App() {
  const [logInUser, setLogInUser] = useState<User | null>(null);
  // const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  //fetch loginUser data?if key in the correct password and name
  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UsersApi.getLogInUser();
        console.log(user);
        setLogInUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <>
      <NavBar
        loggedInUser={logInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        // onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLogInUser(null)}
      />
      {/* {showSignUpModal && (
        <SignUpModal
          onDismiss={() => setShowSignUpModal(false)}
          onSignUpSuccessful={(user) => {
            setLogInUser(user);
            setShowSignUpModal(false);
          }}
        />
      )} */}
      {showLoginModal && (
        <LoginModal
          onDismiss={() => setShowLoginModal(false)}
          onLoginSuccessful={(user) => {
            setLogInUser(user);
            setShowLoginModal(false);
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/report/:reportId`} element={<ReportPage />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
