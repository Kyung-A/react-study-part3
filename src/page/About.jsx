import React from 'react';
import { useLocation } from 'react-router-dom';

// Query 조회
// location 사용 X
const About = () => {
  const { search } = useLocation();

  // 쿼리의 파싱 결과값은 문자열이다
  const detail = search === '?detail=true';

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지입니다</p>
      {detail && <p>추가적인 정보 입니다</p>}
    </div>
  );
};

export default About;
