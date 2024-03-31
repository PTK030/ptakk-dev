"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [year, setYear] = useState<string>();

  useEffect(() => {
    const date: Date = new Date();
    const currentYear: number = date.getFullYear();
    setYear(String(currentYear));
  }, []);
  
  return (
    <footer className='footer' id='footer'>
      <p className="footer__copyright">
        <span>&copy; {year}</span> CodeWeb Solution <FontAwesomeIcon icon={faSpider} style={{ color: '#00839f' }}/>
      </p>
    </footer>
  );
}

export default Footer;
