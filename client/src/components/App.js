import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

import { AppContext } from "./AppContext";

const App = () => {
  const { appUser, signInWithGoogle, handleSignOut, message } = useContext(
    AppContext
  );

  return (
    <StyledPageWrapper>
      <StyledHeader>
        {appUser && appUser.email ? (
          <StyledContainer>
            <div>
              <Avatar style={{ width: "200px" }} src={appUser.photoURL} />
            </div>
            <Main>
              <Text>
                Welcome back 
                <Span>{` ${appUser.displayName}`}</Span>
              </Text>
            </Main>
            <Info>
              <Text>{appUser.email}</Text>
            </Info>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </StyledContainer>
        ) : (
          <StyledContainer>
            <Text> Welcome !</Text>
            <Button onClick={signInWithGoogle}>Sign In</Button>
          </StyledContainer>
        )}
      </StyledHeader>
      <StyledUserContainer>{message}</StyledUserContainer>
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.nav`
  background: #eaeaea;
  padding: 6px 14px;
  min-height: 48px;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: center;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  min-height: 400px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div``;
const Info = styled.div``;
const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;

  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  color: #fff;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0cf;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #097396;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }
`;
const Text = styled.p`
  font-size: 150%;
`;
const Image = styled.div`
  height: 300px;
  width: 300px;
`;
const Span = styled.span`
  color: #097396;
  
`;
export default App;
