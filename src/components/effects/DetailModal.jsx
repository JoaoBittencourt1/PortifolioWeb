import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used via JSX tags (<motion.div>), which this rule doesn't detect
import { AnimatePresence, motion } from 'framer-motion';
import './DetailModal.css';

const MARGIN = 12;
const POPOVER_WIDTH = 320;

function getPosition(rect) {
  const top = rect.bottom + 10;
  const centerX = rect.left + rect.width / 2;
  const left = Math.min(
    Math.max(centerX - POPOVER_WIDTH / 2, MARGIN),
    window.innerWidth - POPOVER_WIDTH - MARGIN
  );
  const arrowLeft = Math.min(
    Math.max(centerX - left, 16),
    POPOVER_WIDTH - 16
  );
  return { top, left, arrowLeft };
}

function DetailModal({ anchor, title, subtitle, body, link, onClose }) {
  const [pos, setPos] = useState(() => (anchor ? getPosition(anchor) : null));
  const popoverRef = useRef(null);

  useEffect(() => {
    if (anchor) setPos(getPosition(anchor));
  }, [anchor]);

  useEffect(() => {
    if (!title) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const onPointerDown = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) onClose();
    };
    const onScroll = () => onClose();

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
  }, [title, onClose]);

  return (
    <AnimatePresence>
      {title && pos && (
        <motion.div
          ref={popoverRef}
          className="detail-popover"
          role="dialog"
          aria-modal="false"
          aria-labelledby="detail-popover-title"
          style={{ top: pos.top, left: pos.left, '--arrow-left': `${pos.arrowLeft}px` }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <button type="button" className="detail-popover-close" onClick={onClose} aria-label="Fechar">
            ×
          </button>
          {subtitle && <span className="detail-popover-subtitle">{subtitle}</span>}
          <h3 id="detail-popover-title" className="detail-popover-title">
            {title}
          </h3>
          <p className="detail-popover-body">{body}</p>
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="detail-popover-link"
            >
              {link.label}
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DetailModal;
