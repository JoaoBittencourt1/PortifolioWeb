// eslint-disable-next-line no-unused-vars -- motion is used via JSX tags (<motion.span>), which this rule doesn't detect
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const EASE = [0.22, 1, 0.36, 1];

function SectionHead({ n, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-number">{n}</span>
      <h2 className="section-title">{title}</h2>
      <motion.span
        className="section-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ transformOrigin: 'left center' }}
      />
    </Reveal>
  );
}

export default SectionHead;
