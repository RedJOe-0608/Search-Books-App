import React, { useState } from "react";

import GetData from "./Components/GetData";
import Layout from "./Components/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fantasy from "./Components/Fantasy";
import Historical_Fiction from "./Components/Historical_Fiction";
import Art_History from "./Components/Art_History";
import Poetry from "./Components/Poetry";
import Mystery from "./Components/Mystery";
import Entrepreneurship from "./Components/Entrepreneurship";
import Humour from "./Components/Humour";
import Romance from "./Components/Romance";
import Science_fiction from "./Components/Science_fiction";
import Horror from "./Components/Horror";
import Thriller from "./Components/Thriller";
import Young_adult from "./Components/Young_adult";

import Literature from "./Components/Literature";
import Mental_health from "./Components/Mental_health";
import Cooking from "./Components/Cooking";
import Religion from "./Components/Religion";
import Architecture from "./Components/Architecture";
import Fashion from "./Components/Fashion";
import Film from "./Components/Film";
import Music_Theory from "./Components/Music_Theory";
import Photography from "./Components/Photography";
import Plays from "./Components/Plays";
import Short_Stories from "./Components/Short_Stories";

import Business_Economics from "./Components/Business_Economics";
import Stories_in_rhyme from "./Components/Stories_in_rhyme";
import Baby_Books from "./Components/Baby_Books";
import Picture_Books from "./Components/Picture_Books";
import SelfHelp from "./Components/SelfHelp";
import Anthropology from "./Components/Anthropology";
import Political_Science from "./Components/Political_Science";
import Psychology from "./Components/Psychology";
import Intro from "./Components/Intro";

const App = () => {
  const [mode, setMode] = useState(false); //true means dark mode

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <Router>
      <Layout mode={mode} handleMode={handleMode}>
        <Routes>
          <Route path="Search" element={<GetData mode={mode} />} />
          <Route path="/" element={<Intro />} />

          <Route path="Art_History" element={<Art_History mode={mode} />} />
          <Route path="Anthropology" element={<Anthropology mode={mode} />} />
          <Route path="Baby_Books" element={<Baby_Books mode={mode} />} />
          <Route path="Cooking" element={<Cooking mode={mode} />} />
          <Route path="Architecture" element={<Architecture mode={mode} />} />
          <Route
            path="Entrepreneurship"
            element={<Entrepreneurship mode={mode} />}
          />
          <Route path="Fantasy" element={<Fantasy mode={mode} />} />
          <Route path="Fashion" element={<Fashion mode={mode} />} />
          <Route path="Film" element={<Film mode={mode} />} />
          <Route
            path="Business_Economics"
            element={<Business_Economics mode={mode} />}
          />
          <Route
            path="Historical_Fiction"
            element={<Historical_Fiction mode={mode} />}
          />
          <Route path="Horror" element={<Horror mode={mode} />} />
          <Route path="Humour" element={<Humour mode={mode} />} />

          <Route path="Literature" element={<Literature mode={mode} />} />
          <Route path="Mental_health" element={<Mental_health mode={mode} />} />
          <Route path="Mystery" element={<Mystery mode={mode} />} />
          <Route path="Music_Theory" element={<Music_Theory mode={mode} />} />

          <Route path="Plays" element={<Plays mode={mode} />} />
          <Route path="Photography" element={<Photography mode={mode} />} />
          <Route path="Picture_Books" element={<Picture_Books mode={mode} />} />
          <Route
            path="Political_Science"
            element={<Political_Science mode={mode} />}
          />
          <Route path="Psychology" element={<Psychology mode={mode} />} />
          <Route path="Poetry" element={<Poetry mode={mode} />} />
          <Route path="Religion" element={<Religion mode={mode} />} />

          <Route path="Romance" element={<Romance mode={mode} />} />
          <Route
            path="Science_fiction"
            element={<Science_fiction mode={mode} />}
          />
          <Route path="Short_Stories" element={<Short_Stories mode={mode} />} />
          <Route
            path="Stories_in_rhyme"
            element={<Stories_in_rhyme mode={mode} />}
          />
          <Route path="SelfHelp" element={<SelfHelp mode={mode} />} />
          <Route
            path="Thriller"
            element={<Thriller mode={mode} handleMode={handleMode} />}
          />
          <Route path="Young_adult" element={<Young_adult mode={mode} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
