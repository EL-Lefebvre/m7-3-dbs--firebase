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
            <Avatar style={{width:'200px'}} src={appUser.photoURL} />
            </div>
            <Main>
              <Text>{appUser.displayName}</Text>
            </Main>
            <Info>
              <Text>{appUser.email}</Text>
            </Info>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </StyledContainer>
        ) : (
          <Button onClick={signInWithGoogle}>Sign In</Button>
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
  justify-content:center;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  min-height: 400px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

`;

const Main = styled.div``;
const Info = styled.div``;
const Button = styled.button`
    width:  200px;
    height:25px;
    font-size:100%;
`;
const Text = styled.h1``;
const Image = styled.div`
height:300px;
width:300px;
`;
export default App;
