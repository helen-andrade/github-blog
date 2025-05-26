import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  position: relative;
`;

export const HeaderContent = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ProfileCardWrapper = styled.div`
  position: absolute;
  top: calc(100% - 106px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
