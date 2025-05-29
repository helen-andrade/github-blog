import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIssues } from "../../services/issue";
import { Header } from "../../components/Header";
import {
  ViewProjectContainer, PostInfo, PostHeader, ActionButtons,
  Title, FooterInfo, User, Calendar, Comments, ContainerPost,
} from "./styles";

import iconArrow from "../../assets/icons/icon-arrow.svg";
import iconBack from "../../assets/icons/icon-back.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconCalendar from "../../assets/icons/icon-calendar.svg";
import iconComments from "../../assets/icons/icon-comments.svg";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
  html_url: string;
}

export function ViewProject() {
  const { id } = useParams<{ id: string }>();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    async function loadIssue() {
      const issues = await fetchIssues();
      const found = issues.find((issue: Issue) => String(issue.number) === id);
      setIssue(found || null);
    }
  
    loadIssue();
  }, [id]);
  

  if (!issue) return <p>Carregando...</p>;

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
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                VER NO GITHUB <img src={iconArrow} alt="" />
              </a>
            </ActionButtons>
            <Title>{issue.title}</Title>
          </PostHeader>

          <FooterInfo>
            <User>
              <img src={iconGithub} alt="" />
              <span>{issue.user.login}</span>
            </User>
            <Calendar>
              <img src={iconCalendar} alt="" />
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </Calendar>
            <Comments>
              <img src={iconComments} alt="" />
              <span>{issue.comments} comentários</span>
            </Comments>
          </FooterInfo>
        </PostInfo>

        <ContainerPost>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </ContainerPost>
      </ViewProjectContainer>
    </>
  );
}
