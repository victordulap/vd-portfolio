import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'About',
    anchor: '#about',
  },
  {
    text: 'Experience',
    anchor: '#experience',
  },
  {
    text: 'Work',
    anchor: '#work',
  },
  {
    text: 'Contact',
    anchor: '#contact',
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-slate-50 shadow-sm">
      <div className="container mx-auto p-3 flex justify-between h-full items-center">
        <div className="flex-1 hidden sm:block">
          <Link className="font-secondary" to="/">
            <span className="text-purple-400 mr-2">&gt;</span>Victor Dulap
          </Link>
        </div>
        <ul className="flex justify-end gap-4 w-full flex-1">
          {LINKS.map((link, index) => (
            <li>
              <a href={link.anchor} className="font-secondary">
                <span className="text-purple-400 text-sm mr-2">{index + 1}.</span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
