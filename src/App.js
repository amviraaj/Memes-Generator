import React from "react";
import "./index.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Meme from './components/Meme';



export default function App() {

  return (
      <main >
            <Header />
            <Meme />
          {/* <section className="mount-details">
            {people}
          </section> */}
          <Footer/>
      </main>

  );
}
