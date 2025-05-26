import { Header } from "../../components/Header";
import {
  ViewProjectContainer,
  PostInfo,
  PostHeader,
  ActionButtons,
  Title,
  FooterInfo,
  User,
  Calendar,
  Comments,
  ContainerPost,
} from "./styles";

import iconArrow from "../../assets/icons/icon-arrow.svg";
import iconBack from "../../assets/icons/icon-back.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconCalendar from "../../assets/icons/icon-calendar.svg";
import iconComments from "../../assets/icons/icon-comments.svg";
import ReactMarkdown from "react-markdown";

export function ViewProject() {
  return (
    <>
      <Header />
      <ViewProjectContainer>
        <PostInfo>
          <PostHeader>
            <ActionButtons>
              <a href="/">
                <img src={iconBack} alt="" /> VOLTAR
              </a>
              <a href="#">
                VER NO GITHUB <img src={iconArrow} alt="" />
              </a>
            </ActionButtons>
            <Title>JavaScript data types and data structures</Title>
          </PostHeader>

          <FooterInfo>
            <User>
              <img src={iconGithub} alt="" />
              <span>cameronwll</span>
            </User>
            <Calendar>
              <img src={iconCalendar} alt="" />
              <span>Há 1 dia</span>
            </Calendar>
            <Comments>
              <img src={iconComments} alt="" />
              <span>5 comentários</span>
            </Comments>
          </FooterInfo>
        </PostInfo>

        <ContainerPost>
          <ReactMarkdown>
            {`
**Programming languages all have built-in data structures, but these often differ from one language to another.** 
This article attempts to list the built-in data structures available in JavaScript and what properties they 
have. These can be used to build other data structures. Wherever possible, comparisons with other languages 
are drawn.

## Dynamic typing

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any
particular value type, and any variable can be assigned (and re-assigned) values of all types:

\`\`\`js
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
\`\`\`
          `}
          </ReactMarkdown>
        </ContainerPost>
      </ViewProjectContainer>
    </>
  );
}
