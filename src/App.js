import React from 'react';

export default function App() {
  return (
    <div className="flower-page">
      <div className="flower-scene">
        <svg className="flower" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <circle className="petal petal1" cx="120" cy="40" r="30" fill="#FF8ACD" />
          <circle className="petal petal2" cx="180" cy="80" r="30" fill="#FF40B7" />
          <circle className="petal petal3" cx="180" cy="160" r="30" fill="#FF8ACD" />
          <circle className="petal petal4" cx="120" cy="200" r="30" fill="#FF40B7" />
          <circle className="petal petal5" cx="60" cy="160" r="30" fill="#FF8ACD" />
          <circle className="petal petal6" cx="60" cy="80" r="30" fill="#FF40B7" />
          <circle className="petal petal7" cx="120" cy="120" r="28" fill="#FFD15C" />
          <circle className="flower-center" cx="120" cy="120" r="22" fill="#FFEA7B" />
        </svg>
        <h1 className="flower-title">Happy Birthday Mubbara</h1>
      </div>
    </div>
  );
}
