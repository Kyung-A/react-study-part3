import React from 'react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import WithRouterSample from './page/WithRouterSample';
import Profile from './Profile';

// 서브라우트 (라우트 내부의 라우트를 만드는것)
const Profiles = () => {
  return (
    <div>
      <h3>유저목록 : </h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/kyungA"
            style={({ isActive }) => ({ color: isActive ? 'pink' : 'green' })}
          >
            남은경
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            홍길동
          </NavLink>
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
