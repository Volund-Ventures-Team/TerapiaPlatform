import React from 'react';
import styled from 'styled-components';

const StarfieldContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: black;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  opacity: 0.75;
  border-radius: 50%;
  animation: moveStars linear infinite;

  @keyframes moveStars {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;

const generateStars = (starCount) => {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    const left = Math.random() * 100 + '%';
    const top = Math.random() * 100 + '%';
    const animationDuration = Math.random() * 5 + 5 + 's'; // between 5s and 10s

    stars.push({ left, top, animationDuration });
  }
  return stars;
};

const Starfield = () => {
  const starCount = 100;
  const stars = generateStars(starCount);

  return (
    <StarfieldContainer>
      {stars.map((star, index) => (
        <Star
          key={index}
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </StarfieldContainer>
  );
};

export default Starfield;
