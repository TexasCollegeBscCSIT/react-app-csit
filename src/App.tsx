import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import GuestLayout from "./layouts/GuestLayout";
import Register from "./pages/Register";

function App() {
  return (
    <GuestLayout>
      <Routes>
        <Route path="/" index={true} element={<Homepage></Homepage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </GuestLayout>
  );
}

export default App;
