import React, { useState } from "react";

import styles from "./navbar.module.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const MenuLinks = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgbt3">What is GBT3</a>
      </p>
      <p>
        <a href="#possibility">OpenAI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.gbt3__navbar}>
      <div className={styles["gbt3__navbar-links"]}>
        <div className={styles["gbt3__navbar-links_logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles["gbt3__navbar-links_container"]}>
          <MenuLinks />
        </div>
      </div>
      <div className={styles["gbt3__navbar-sign"]}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles["gbt3__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div
            className={styles["gbt3__navbar-menu_container scale-up-center"]}
          >
            <div className={styles["gbt3__navbar-menu_container-links"]}>
              <MenuLinks />
              <div className={styles["gbt3__navbar-menu_container-links-sign"]}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
