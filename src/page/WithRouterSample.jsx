import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

// withRouter HoC는 라우트 컴포넌트가 아닌곳(일반 컴포넌트)에서 match, location, history를 사용해야할때 쓰였다
// 그러나 v6에서는 더이상 지원하지 않기 때문에 아래와 같이 수정해서 써야한다
const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />

      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} readOnly />

      <button onClick={() => navigate('/')}>홈으로</button>
    </>
  );
};

export default WithRouterSample;
