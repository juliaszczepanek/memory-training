import { Signup, Login } from "./authentication";
import { Navigation, Footer } from "./UI";
import {
  Home,
  NumberSpan,
  Profile,
  CorsiBlock,
  VerbalMemory,
  TestModule,
  MemoryStrategies,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./authentication/ProtectedRoute";

function App() {
  const routing = [
    { path: "/", element: <Home /> },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    { path: "/number-span", element: <NumberSpan /> },
    { path: "/verbal-memory", element: <VerbalMemory /> },
    { path: "/corsi-block", element: <CorsiBlock /> },
    { path: "/memory-strategies", element: <MemoryStrategies /> },
    {
      path: "/test-module",
      element: (
        <ProtectedRoute>
          <TestModule />
        </ProtectedRoute>
      ),
    },
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
