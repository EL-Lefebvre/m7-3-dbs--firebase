import React from 'react';
import styled from 'styled-components';

const Avatar = ({ src }) => <StyledAvatar src={src} />;

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export default Avatar;
