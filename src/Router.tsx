import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/chat" element={<Home />} />
    </Routes>
  );
}
