import PropTypes from 'prop-types';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../../assets/svgs/maxmind-logo.svg';
import AccessibilityNav from './AccessibilityNav';
import styles from './Header.module.scss';
import SearchBar from './SearchBar';

interface IHeader {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<IHeader> = (props) => {
  const { isSidebarOpen, toggleSidebar } = props;
  return (
    <>
      <AccessibilityNav
        className={styles['accessibility-nav']}
      />
      <header
        className={styles.header}
      >
        <div
          className={styles.nav}
        >
          <a
            aria-label="Home"
            className={styles.logo}
            href="/"
          >
            <Logo />
          </a>
          <SearchBar
            className={styles.search}
          />
          <button
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            className={styles.toggle}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FaTimes
                aria-hidden="true"
              />
            ) : (
              <FaBars
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
