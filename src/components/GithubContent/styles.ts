import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const GithubContentPublisher = styled.div`
  background: ${(props) => props.theme["post"]};
  width: 416px;
  height: 260px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;

  &:hover {
    background: ${(props) => props.theme["post"]}CC;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme["title"]};
    ${mixins.fonts.titleM};
    max-width: 280px;
    word-break: break-word;
    line-height: 1.2;
  }

  span {
    color: ${(props) => props.theme["span"]};
    ${mixins.fonts.textS};
    white-space: nowrap;
    flex-shrink: 0;
  }

  p {
    color: ${(props) => props.theme["text"]};
    margin-top: 20px;
    ${mixins.fonts.textM};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
