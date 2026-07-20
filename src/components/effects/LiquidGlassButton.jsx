import { useCallback, useRef } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import './LiquidGlassButton.css';

function LiquidGlassButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ...motionProps
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const handleMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    node.style.setProperty('--glass-x', `${x}%`);
    node.style.setProperty('--glass-y', `${y}%`);
  }, []);

  const handleLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;

    node.style.setProperty('--glass-x', '50%');
    node.style.setProperty('--glass-y', '50%');
  }, []);

  return (
    <Motion.a
      ref={ref}
      href={href}
      className={`liquid-glass-btn liquid-glass-btn--${variant} ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { y: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      {...motionProps}
    >
      <span className="liquid-glass-btn__glow-ring" aria-hidden="true" />
      <span className="liquid-glass-btn__blob" aria-hidden="true" />
      <span className="liquid-glass-btn__surface" aria-hidden="true" />
      <span className="liquid-glass-btn__shine" aria-hidden="true" />
      <span className="liquid-glass-btn__label">{children}</span>
    </Motion.a>
  );
}

export default LiquidGlassButton;
