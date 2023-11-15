import React from 'react';
import Profile from '../Header/Profile';

const Header = () => {
  // Generate a random profile photo URL
  const randomProfilePhoto = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;

  // Function to format the date
  const formatDate = () => {
    const options = {
      weekday: 'long', // Displays the full name of the day (e.g., "Sunday")
      month: 'long',   // Displays the full name of the month (e.g., "February")
      day: 'numeric',   // Displays the day of the month (e.g., "17")
      year: 'numeric',  // Displays the year (e.g., "2020")
    };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex items-center justify-between bg-transparent px-4 py-4 sm:ml-56">
      <div className="flex items-center">
        <div className="font-semibold mr-4">
          {formatDate()}
        </div>
      </div>
      <div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
