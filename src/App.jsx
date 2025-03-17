import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { ThemeProvider } from "./context/ThemeProvider";

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
