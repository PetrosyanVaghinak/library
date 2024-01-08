import "./App.css";
import Header from "./component/header/Header.jsx";
import Main from "./component/main/Main.jsx";
import Footer from "./component/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Catalog from "./component/catalog/Catalog.jsx";
import Login  from "./component/login/Login.jsx";
import Registers from "./component/registers/Registers.jsx";




function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registers" element={<Registers/>} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
