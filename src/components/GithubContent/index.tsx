import { CardsWrapper, GithubContentPublisher } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

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
interface GithubContentProps {
  issues: Issue[]; 
}

export function GithubContent({ issues }: GithubContentProps) {
  const navigate = useNavigate();

  return (
    <CardsWrapper>
      {issues.map((issue) => (
        <GithubContentPublisher
          key={issue.number}
          onClick={() => navigate(`/viewProject/${issue.number}`)}
        >
          <div className="infos">
            <h2>{issue.title}</h2>
            <span>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <p>{issue.body.substring(0, 200)}...</p>
        </GithubContentPublisher>
      ))}
    </CardsWrapper>
  );
}
