import React, { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={splashScreenStyle}>
      <div style={animationContainerStyle}>
      <img src={`${process.env.PUBLIC_URL}/logosite.webp`} alt="Terapia Logo" style={logoStyle} />

        <h1 style={titleStyle}>Terapia</h1>
      </div>
    </div>
  );
};

const splashScreenStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#e3f2fd',
  textAlign: 'center',
};

const animationContainerStyle = {
  position: 'relative',
};

const logoStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
  position: 'absolute',
  animation: 'spinAround 3s linear infinite',
};

const titleStyle = {
  margin: 0,
  fontSize: '2.5rem',
  fontFamily: 'Arial, sans-serif',
  color: '#1E88E5',
  position: 'relative',
};


const keyframesStyle = `
  @keyframes spinAround {
    0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
  }
`;


const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = keyframesStyle;
document.head.appendChild(styleSheet);

export default SplashScreen;