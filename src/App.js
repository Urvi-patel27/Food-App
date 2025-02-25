import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import StoreContextProvider from "./context/StoreContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Review from "./components/Review";
// import Chef from "./components/Chef";
import Menu from "./components/Menu";
import Dishes from "./components/Dishes";


function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <div className="app">
        <StoreContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dishes" element={<Dishes/>}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </StoreContextProvider>
      </div>
      <Footer />
      
    </>
  );
}

export default App;
