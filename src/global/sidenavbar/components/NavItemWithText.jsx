import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItemWithText = ({ icon, text, to, is_expanded }) => (
  <Link
    to={to}
    className={`flex items-center p-4 cursor-pointer hover:bg-gray-700 ${!is_expanded ? 'justify-center' : ''}`}
  >
    <FontAwesomeIcon icon={icon} className="text-lg" />
    {is_expanded && <span className="ml-5 flex-grow">{text}</span>}
  </Link>
);

export default NavItemWithText;
