import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailResult from "./components/DetailResult";
import LatestResult from "./components/LatestResult";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";


function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/latestresults" element={<LatestResult />} />
          <Route path="/latestresults/detail/:id" element={<DetailResult />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
