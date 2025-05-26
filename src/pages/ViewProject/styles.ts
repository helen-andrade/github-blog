import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const ViewProjectContainer = styled.main`
  background: ${(props) => props.theme["profile"]};
  width: 864px;
  height: 168px;
  padding: 2rem;
  border-radius: 10px;

  margin: 1rem auto 0;
  position: relative;
  z-index: 1;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PostInfo = styled.section`
  margin-bottom: 2rem;
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-top: -5px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    ${mixins.fonts.textS};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["title"]};

  ${mixins.fonts.titleL};
`;

export const FooterInfo = styled.footer`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  ${mixins.fonts.textM};
  color: ${(props) => props.theme["span"]};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Calendar = styled(User)``;

export const Comments = styled(User)``;

export const ContainerPost = styled.div`
  width: 100%;
  margin-top: 5rem;
  color: ${(props) => props.theme["text"]};
  ${mixins.fonts.textM};
  font-size: 16px;

  p {
    margin-bottom: 16px;
    text-align: justify;
  }

  h2 {
    margin-top: 30px;
    font-size: 17px;
    font-weight: 100;
    margin-bottom: 12px;
    color: ${(props) => props.theme["blue"]};
    text-decoration: underline;
  }

  pre {
    background: ${(props) => props.theme["post"]};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  code {
    background: none;
    color: ${(props) => props.theme["text"]};
  }
`;
