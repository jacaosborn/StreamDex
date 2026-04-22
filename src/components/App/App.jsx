import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import fetchBrowsePage from "../../utils/psPricesApi";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <HashRouter>
      <Header onSearchChange={setSearchQuery} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Main fetchBrowsePage={fetchBrowsePage} searchQuery={searchQuery} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
