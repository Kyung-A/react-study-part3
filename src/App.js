import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import About from './page/About';
// import Profile from './Profile';
import Profiles from './Profiles';
import NavigateSample from './page/NavigateSample';

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
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/navigate">Navigate 예제</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<NavigateSample />} />
      </Routes>
    </>
  );
}

export default App;
