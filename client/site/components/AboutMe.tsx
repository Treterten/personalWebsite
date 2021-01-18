import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const AboutMe = (props: any) => {
  const element = document.createElement('div');
  const { children } = props;
  const root = document.getElementById('modal');

  useEffect(() => {
    root.appendChild(element);
  }, []);

  return createPortal(children, element);
};

export default AboutMe;
