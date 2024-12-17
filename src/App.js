import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ArtistsCarousel from "./components/ArtistsCarousel";
import About from "./components/About";
import Footer from "./components/Footer";
import ArtistsPage from "./ArtistsPage";
import ArtistBio from "./ArtistBio";
import ApplyForm from "./ApplyForm";
import ArtistForm from "./components/ArtistForm";
import IndustryForm from "./components/IndustryForm";
import InstrumentalistForm from "./components/InstrumentalistForm";
import Placeholder1 from "./assets/placeholder-image-1.png";
import Placeholder2 from "./assets/placeholder-image-2.jpeg";
import Placeholder3 from "./assets/placeholder-image-3.jpg";

const App = () => {
  const artists = [
    { 
      name: "Raven Riot", 
      location: "Northeastern University", 
      genre: "Punk Rock", 
      image: Placeholder1, 
      bio: "Raven Riot channels raw energy into anthems that critique societal norms with blistering guitar riffs and unapologetic lyrics."
    },
    { 
      name: "The Boston Banshees", 
      location: "Boston University", 
      genre: "Punk Rock", 
      image: Placeholder2, 
      bio: "The Boston Banshees bring a haunting edge to punk rock, blending aggressive beats with ethereal melodies and fiery vocals." 
    },
    { 
      name: "Dark Room", 
      location: "Berklee College of Music", 
      genre: "Alt Pop", 
      image: Placeholder3, 
      bio: "Dark Room's dreamy soundscapes and introspective lyrics create a hauntingly beautiful listening experience."
    },
    { 
      name: "Crystalline", 
      location: "Northeastern University", 
      genre: "Trap House", 
      image: Placeholder1, 
      bio: "Raven Riot channels raw energy into anthems that critique societal norms with blistering guitar riffs and unapologetic lyrics."
    },
  ];

  return (
    <Router>
      <div className="bg-covenPurple min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection artist={artists[1]} />
              <ArtistsCarousel artists={artists} />
              <About />
            </>
          } />
          <Route path="/artists" element={<ArtistsPage artists={artists} />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/artists/:artistName" element={<ArtistBio artists={artists} />} />
          <Route path="/apply/artist" element={<ArtistForm />} />
          <Route path="/apply/industry" element={<IndustryForm />} />
          <Route path="/apply/instrumentalist" element={<InstrumentalistForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;