import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ text = '', customStyle = {},path, children }) {
  const [click, setClick] = useState(false);
  const navigate=useNavigate();
  return (
    <button
      style={customStyle}
      className={click ? `${styles.btn} ${styles.click}` : `${styles.btn}`}
      onClick={(e) => {
        setClick((pv) => !pv);
        navigate(`/${path?path:''}`);
        e.preventDefault();
      }}
    >
      {text || children}
    </button>
  );
}
