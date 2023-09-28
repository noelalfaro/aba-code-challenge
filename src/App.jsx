import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <>
      <div id="app-container">
        <Nav />
        <Gallery />
        <ReservationForm />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
