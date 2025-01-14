import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import GuestLayout from "./layouts/GuestLayout";

function App() {
  return (
    <GuestLayout>
      <Routes>
        <Route path="/" index={true} element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </GuestLayout>
  );
}

export default App;
