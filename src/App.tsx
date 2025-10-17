import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Notification from "./pages/notification";
import Mytask from "./pages/Mytask";
import Favorites from "./pages/Favorites";
import DMessages from "./pages/DMessages";
import Trash from "./pages/Trash";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="mytask" element={<Mytask />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="dm" element={<DMessages />} />
                    <Route path="trash" element={<Trash />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
