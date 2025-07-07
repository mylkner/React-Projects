import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import CharacterList from "./pages/CharacterList";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<CharacterList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
