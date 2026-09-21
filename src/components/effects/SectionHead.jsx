'use client';

import Reveal from './Reveal.jsx';

function SectionHead({ label, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}

export default SectionHead;
