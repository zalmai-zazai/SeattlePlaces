import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import PlacesList from './Components/PlacesList';

function App() {
  return (
    <>
      <Navbar />
      <h1 className="mt-4 text-center">Popular Places Near Seattle</h1>

      <p className="mt-4">
        <b>Summary: </b>These areas, both within and around Seattle, offer an
        incredible mix of natural beauty, cultural experiences, and
        entertainment, providing tourists with a wide variety of activities to
        enjoy! Art enthusiasts will be captivated by the unique exhibits at the
        Museum of Pop Culture, showcasing everything from music to film. Each
        location tells a story, inviting visitors to engage with the city’s
        heritage, creativity, and community spirit, making them essential stops
        for anyone exploring Seattle and its surrounding areas.
      </p>

      <PlacesList />
    </>
  );
}

export default App;
