import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import movies from "./Components/DataMovies";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import About from "./Components/About";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTopButon from "./Components/BackToTopButon";
import FeedBack from "./Components/FeedBack";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <>
      <BackToTopButon />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/moviedetails/:id"
            element={<MovieDetailsPage movies={movies} />}
          />
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
