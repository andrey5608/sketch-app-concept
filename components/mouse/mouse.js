import React from 'react';
import './mouse.scss';

const Mouse = ({ visible = true }) => {
  const className = ['scroll', 'scroll-fixed'];

  if (visible === false) {
    className.push('hidden');
  }
  return (
    <div className="lettering scroll-fixed-lettering">
      Scroll down!
      <button className={className.join(' ').trim()} title="Choose Wisely">
        <span />
      </button>
    </div>
  );
};

export default Mouse;
