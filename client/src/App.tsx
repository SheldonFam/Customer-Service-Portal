// import { HomePage } from "./pages/HomePage";
// import { ReportPage } from "./pages/ReportPage";
// import { NotFoundPage } from "./pages/NotFound";
// import { Routes, Route } from "react-router-dom";
// import { NavBar } from "./components/navbar";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path={`/report/:reportId`} element={<ReportPage />} />
//         <Route path={"/*"} element={<NotFoundPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { HomePage } from "./pages/HomePage";
import { ReportPage } from "./pages/ReportPage";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { useState, useEffect } from "react";
import { User } from "./models/users";
import * as UsersApi from "./api/users_api";
import { LoginModal } from "./components/loginmodal";
import { SignUpModal } from "./components/signupmodal";

function App() {
  const [logInUser, setLogInUser] = useState<User | null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UsersApi.getLogInUser();
        setLogInUser(user);
      } catch (error) {
        throw error;
      }
    }
    fetchLoggedInUser();
  }, []);
  return (
    <>
      <NavBar
        loggedInUser={logInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLogInUser(null)}
      />

      <SignUpModal
        isOpen={showSignUpModal}
        onDismiss={() => setShowSignUpModal(false)}
        // onSignUpSuccessful={(user) => {
        //   setLogInUser(user);
        //   setShowSignUpModal(false);
        // }}
      />

      <LoginModal
        isOpen={showLoginModal}
        onDismiss={() => setShowLoginModal(false)}
        onLoginSuccessful={(user) => {
          setLogInUser(user);
          setShowLoginModal(false);
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage logInUser={logInUser} />} />
        <Route path={`/report/:reportId`} element={<ReportPage />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
