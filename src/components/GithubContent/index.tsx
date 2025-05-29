import { useEffect, useState } from "react";
import { fetchIssues } from "../../services/issue";
import { CardsWrapper, GithubContentPublisher } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function GithubContent() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadIssues() {
      const data = await fetchIssues();
      setIssues(data);
    }

    loadIssues();
  }, []);

  return (
    <CardsWrapper>
      {issues.map((issue) => (
        <GithubContentPublisher key={issue.id}>
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
