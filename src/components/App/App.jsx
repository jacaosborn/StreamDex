import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import fetchBrowsePage from "../../utils/psPricesApi";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Main fetchBrowsePage={fetchBrowsePage} />}
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
