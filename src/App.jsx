import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./Components/ShareLayout";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
