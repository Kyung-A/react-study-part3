import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import About from './page/About';
import Profile from './Profile';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
