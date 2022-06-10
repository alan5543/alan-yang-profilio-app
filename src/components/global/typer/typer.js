import * as React from 'react';
import Typed from 'typed.js';

const Typer = ({position}) => {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  const positions = position;

  React.useEffect(() => {
    const options = {
      strings: positions,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    // @ts-ignore
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      // @ts-ignore
      typed.current.destroy();
    }
    // eslint-disable-next-line
  }, [])


  return (
    <span ref={el} />
  );
}

export default Typer;