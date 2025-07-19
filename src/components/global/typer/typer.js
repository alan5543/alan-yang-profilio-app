import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import './typer.css';

const Typer = ({ position }) => {
  const { i18n } = useTranslation();
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: position,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    // Initialize Typed instance
    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, [position, i18n.language]); // Re-run when position or language changes

  return (
    <span ref={el} className="typer" aria-live="polite" />
  );
};

export default Typer;