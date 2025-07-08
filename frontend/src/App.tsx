import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import DocsPage from "./routes/DocsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </>
  );
}
