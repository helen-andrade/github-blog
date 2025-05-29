import { useEffect, useState } from "react";
import { GithubContent } from "../GithubContent";
import { Container, SearchContent } from "./styles";
import { fetchIssues } from "../../services/issue";
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

export function SearchComponents() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadIssues() {
      const data = await fetchIssues();
      setIssues(data);
    }

    loadIssues();
  }, []);

  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <SearchContent>
        <div>
          <div className="publications">
            <h2>Publicações</h2>
            <p>{filteredIssues.length} publicações</p>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </SearchContent>
      <GithubContent issues={filteredIssues} />
    </Container>
  );
}
