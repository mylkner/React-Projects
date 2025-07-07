import { Route, Routes } from "react-router";
import Header from "./components/Header";

function App() {
    return (
        <Routes>
            <Route index element={<Header />} />
        </Routes>
    );
}

export default App;
