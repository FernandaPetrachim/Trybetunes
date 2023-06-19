import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userApi';

function Header() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = await getUser();
      setUserName(user.name);
      setLoading(false);
    };

    fetchUserName();
  }, []);

  return (
    <header data-testid="header-component">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p data-testid="header-user-name">{userName}</p>
      )}

      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          Search
        </NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">
          Favorites
        </NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
