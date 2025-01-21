import { Signup, Login } from "./authentication";
import { Navigation, Footer } from "./UI";
import { Home, NumberSpan, Profile, CorsiBlock, VerbalMemory } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const routing = [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/number-span", element: <NumberSpan /> },
    { path: "/verbal-memory", element: <VerbalMemory /> },
    { path: "/corsi-block", element: <CorsiBlock /> },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {routing.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
