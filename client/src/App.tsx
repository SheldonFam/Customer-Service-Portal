import { HomePage } from "./pages/HomePage";
import { ReportPage } from "./pages/ReportPage";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";

function App() {
  const [logInUser, setLogInUser] = useState<User | null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
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
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage logInUser={logInUser} />} />
        <Route path={`/report/:reportId`} element={<ReportPage />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
