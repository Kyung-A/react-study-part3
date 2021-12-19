import React from 'react';
import { useNavigate } from 'react-router-dom';

import { usePrompt } from '../Blocker';

function NavigateSample() {
  const navigate = useNavigate();

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // 홈으로 가기
  const goHome = () => {
    navigate('/');
  };

  // 특정 경로로 이동하기
  const goKyungAProfile = () => {
    navigate('/profiles/kyungA');
  };

  // 페이지 이탈 시 경고창
  usePrompt('정말 떠나실건가요?', true);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={goKyungAProfile}>경아프로필</button>
    </div>
  );
}

export default NavigateSample;
