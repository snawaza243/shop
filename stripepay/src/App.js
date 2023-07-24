import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}