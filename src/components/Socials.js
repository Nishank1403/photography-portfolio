import React, {useContext} from 'react';
// import icons
import {
  ImTwitter,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'
// import cursor context
// import { CursorContext } from '../context/CursorContext';


const Socials = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  return (
    <div 
    className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://x.com/thakurmohit1509' target='_blank'>
           <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com/mohitthakur_photography' target='_blank'>
           <ImPinterest />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/mohitthakur_photography' target='_blank'>
           <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
