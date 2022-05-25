import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { NavLink, NavMenu } from "./NavbarElements";

const Nav = styled.div`
  background: #fffef7;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #f4f7f6;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="container">
      <div className="nav-bottom">
        <IconContext.Provider value={{ color: "black" }}>
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <h1 style={{ textAlign: "center", marginLeft: "50px" }}>
              News Now
            </h1>
            <NavMenu style={{ textAlign: "center", marginLeft: "200px" }}>
              <NavLink
                to="/gold-price"
                style={{
                  color: "black",
                  fontSize: "18px",
                }}
              >
                Metals
              </NavLink>

              <span className="nav-link">
                <NavLink
                  to="/stocks"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Market Data
                </NavLink>
              </span>

              <span className="nav-link">
                <NavLink
                  to="/news-english"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  English
                </NavLink>
              </span>
              <span className="nav-link">
                <NavLink
                  to="/news-hindi"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Hindi
                </NavLink>
              </span>
              <span className="nav-link">
                <NavLink
                  to="/about-us"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  About
                </NavLink>
              </span>
              <span className="nav-link">
                <NavLink
                  to="/contact-us"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Contact
                </NavLink>
              </span>

              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Sidebar;
