import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
