import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileCardInfos = styled.div`
  background: ${(props) => props.theme["profile"]};
  color: ${(props) => props.theme["white"]};
  width: 864px;
  max-width: 1120px;
  border-radius: 10px;
  margin-top: 5rem;
  padding: 2rem 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  display: flex;
  gap: 2rem;
  align-items: flex-start; /* importante para alinhar topo */
`;

export const Avatar = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme["title"]};
  }
`;

export const GithubProfile = styled.button`
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const Bio = styled.div`
  ${mixins.fonts.textS};
  color: ${(props) => props.theme["text"]};
  margin-top: 0.5rem;
  overflow-wrap: break-word;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme["title"]};
    margin: 0.5rem 0;
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin: 0.5rem;
    margin-top: 2rem;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const User = styled.div`
  ${mixins.fonts.textS};
  color: ${(props) => props.theme["span"]};

  img {
    margin-right: 5px;
    margin-bottom: -3px;
  }
`;

export const Work = styled.div`
  ${mixins.fonts.textS};
  color: ${(props) => props.theme["span"]};

  img {
    margin-right: 5px;
    margin-bottom: -3px;
  }
`;

export const Followers = styled.div`
  ${mixins.fonts.textS};
  color: ${(props) => props.theme["span"]};

  img {
    margin-right: 5px;
    margin-bottom: -3px;
  }
`;
