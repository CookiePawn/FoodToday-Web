import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { theme, commonStyles } from './styles/theme';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Nav>
        <NavContainer>
          <Logo to="/">오늘의 한끼</Logo>
          <NavLinks>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/terms">이용약관</NavLink>
            <NavLink to="/privacy">개인정보처리방침</NavLink>
          </NavLinks>
        </NavContainer>
      </Nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer>
        <FooterContainer>
          <FooterContent>
            <FooterLogo>오늘의 한끼</FooterLogo>
            <FooterLinks>
              <FooterLink to="/terms">이용약관</FooterLink>
              <FooterLink to="/privacy">개인정보처리방침</FooterLink>
            </FooterLinks>
            <Copyright>© 2025 오늘의 한끼. All rights reserved.</Copyright>
          </FooterContent>
        </FooterContainer>
      </Footer>
    </Router>
  );
};

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Nav = styled.nav({
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
});

const NavContainer = styled.div({
  ...commonStyles.container,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '70px',
});

const Logo = styled(Link)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.colors.primary,
});

const NavLinks = styled.div({
  display: 'flex',
  gap: '24px',
});

const NavLink = styled(Link)({
  color: theme.colors.text,
  fontSize: '16px',
  fontWeight: '500',
  '&:hover': {
    color: theme.colors.primary,
  },
});

const Footer = styled.footer({
  backgroundColor: 'white',
  padding: '40px 0',
  marginTop: '80px',
});

const FooterContainer = styled.div({
  ...commonStyles.container,
});

const FooterContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

const FooterLogo = styled.div({
  fontSize: '20px',
  fontWeight: 'bold',
  color: theme.colors.primary,
});

const FooterLinks = styled.div({
  display: 'flex',
  gap: '16px',
});

const FooterLink = styled(Link)({
  color: theme.colors.gray,
  fontSize: '14px',
  '&:hover': {
    color: theme.colors.text,
  },
});

const Copyright = styled.p({
  color: theme.colors.gray,
  fontSize: '14px',
});

export default App;
