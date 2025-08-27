import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Notification from "./pages/Notification";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="notification" element={<Notification />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
