import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import WithRouterSample from './page/WithRouterSample';
import Profile from './Profile';

// 서브라우트 (라우트 내부의 라우트를 만드는것)
const Profiles = () => {
  return (
    <div>
      <h3>유저목록 : </h3>
      <ul>
        <li>
          <Link to="/profiles/kyungA">남은경</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">홍길동</Link>
        </li>
      </ul>
      <WithRouterSample />

      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
