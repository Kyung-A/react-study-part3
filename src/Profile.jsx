import React from 'react';
import { useParams } from 'react-router-dom';

// 프로필에서 사용할 데이터
const profileData = {
  kyungA: {
    name: '남은경',
    description: '개발자다아아아악!',
  },
  gildong: {
    name: '홍길동',
    description: '길동이다아아아악!',
  },
};

// URL Params
// match 객체 사용 x
const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
