import {useState} from 'react';
import styled from '@emotion/styled';

// import ThemeToggle from '@app/components/ThemeToggle';
import Breadcrumbs from '../../Breadcrumbs';
import MenuDrawer from '../MenuDrawer';
import IconButton from '../../IconButton';
import MenuItem from './MenuItem';
import NavHider from './NavHider';

import {menuItems} from './menuItems';

import {
  MenuIcon,
  HeartIcon,
} from '@heroicons/react/solid';

const Nav = styled.nav`
  /* background-color: rgba(0, 0, 0, 0); */
  /* background-image: radial-gradient(rgba(0,0,0,0) 1px,rgba(var(--color-bg-primary), 0.5) 1px );
  background-size: 4px 4px;
  backdrop-filter: brightness(100%) blur(2px); */
  display: flex;
  z-index: 49;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin-bottom: 2rem; */
  padding: 0px;
  /* position: fixed; */
  /* top: 0px; */
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
  backdrop-filter: var(--app-backdrop-filter);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  align-content: space-between;
  padding-top: 0px;
  background: var(--color-app-primary);
  /* transition: background 0.25s ease-in-out;
  will-change: background; */
`;

// bg-app-bg shadow-lg backdrop-filter bg-opacity-70 backdrop-blur-sm

type NavBarProps = {
  className?: string;
}

export default function Navbar({className, ...rest}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} title="Menu">
        <NavLinks className="flex flex-col gap-4 justify-end content-between items-center pt-0 mt-7 w-full">
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.href}
              href={menuItem.href}
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full h-10 text-xl text-center hover:bg-primary text-neutral-white"
            >
              {menuItem.name}
            </MenuItem>
          ))}
        </NavLinks>
      </MenuDrawer>
      <NavHider>
        <Nav {...rest} className={`bg-app-bg-base bg-opacity-70 shadow-lg ${className ? className : ''}`}>

          {/* Medium+ Screens */}
          <div className="hidden md:flex md:justify-between md:items-center md:w-full md:pt-0 md:mx-3">
            <div className="flex gap-x-4 items-center">
              <HeartIcon className="w-6 h-6 text-icon-secondary" />
              <div className="flex gap-4 content-between items-center pt-0">
                {menuItems.map((menuItem) => (
                  <MenuItem animatedLink className="text-neutral-white" key={menuItem.href} href={menuItem.href}>{menuItem.name}</MenuItem>
                ))}
              </div>
            </div>
            <div className="flex gap-x-4 justify-end items-center">
              <Breadcrumbs className="hidden lg:flex text-neutral-white" />
              {/* <ThemeToggle /> */}
            </div>
          </div>

          {/* Small- Screens */}
          <div className="flex justify-between items-center mx-3 w-full md:hidden">

            {/* <ThemeToggle /> */}
            <IconButton onClick={() => setIsOpen(!isOpen)} className="mr-3 md:hidden" aria-label="navigation menu">
              <MenuIcon className="w-8 h-8 text-icon-primary" />
            </IconButton>

          </div>
        </Nav>
      </NavHider>

    </>
  );
};
