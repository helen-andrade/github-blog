import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  width: 864px;
  margin: 0 auto;
`;

export const SearchContent = styled.div`
  margin-top: 20px;

  .publications {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 864px;
  }

  h2 {
    color: ${(props) => props.theme["subtitle"]};
    ${mixins.fonts.titleS};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 20px;
  }

  p {
    color: ${(props) => props.theme["span"]};
    font-size: 14px;
    margin-top: 20px;
    ${mixins.fonts.textS};
  }

  input {
    margin-top: 20px;
    border: 1px solid #1c2f41;
    border-radius: 6px;
    padding: 12px 16px;
    background: ${(props) => props.theme["input"]};
    color: ${(props) => props.theme["subtitle"]};
    width: 864px;
    height: 50px;
    box-sizing: border-box;
    outline: none;
    box-shadow: none;
    font-size: 1rem;
    ${mixins.fonts.textM};

    &::placeholder {
      color: ${(props) => props.theme["label"]};
      ${mixins.fonts.textM};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
      box-shadow: 0 0 0 2px rgba(50, 148, 248, 0.3);
    }
  }
`;
