import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive, faCog } from '@fortawesome/free-solid-svg-icons';

const BottomItems = () => {
  return (
    <div className='bottom-0'>
      <ul className="flex space-x-4 py-2 items-center w-full justify-around text-blue-100 cursor-pointer">
        <li className='hover:text-white'>
          <FontAwesomeIcon icon={faTrash} />
        </li>
        <li className='hover:text-white'>
          <FontAwesomeIcon icon={faArchive} />
        </li>
        <li className='hover:text-white'>
          <FontAwesomeIcon icon={faCog} />
        </li>
      </ul>
    </div>
  );
};

export default BottomItems;
