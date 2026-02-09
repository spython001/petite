import './App.css';
import { Routes, Route } from "react-router-dom";

import Topbar from './components/topbar/Topbar';
import SpotifyPlay from './components/Spotify/SpotifyPlay';

import Hero from './components/Hero/Hero';
import Reasons from './components/Reasons/Reasons';
import Story from './components/Storyy/Story';
import Proposal from './components/Proposal/Proposal';
import LoveMessage from './components/LoveMessage/LoveMessage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Topbar />
            <div className="App">
              <SpotifyPlay />

              <section id="hero">
                <Hero />
              </section>

              <section id="story">
                <Story />
              </section>

              <section id="reasons">
                <Reasons />
              </section>

              <section id="proposal">
                <Proposal />
              </section>
            </div>
          </>
        }
      />

      <Route path="/message" element={<LoveMessage />} />
    </Routes>
  );
}
export default App;
