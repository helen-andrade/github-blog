import { useEffect, useState } from "react";
import { GithubContent } from "../GithubContent";
import { Container, SearchContent } from "./styles";
import { fetchIssues } from "../../services/issue";

export function SearchComponents() {
  const [issuesCount, setIssuesCount] = useState(0);

  useEffect(() => {
    async function loadIssues() {
      const issues = await fetchIssues();
      setIssuesCount(issues.length);
    }
  
    loadIssues();
  }, []);
  
  return (
    <Container>
      <SearchContent>
        <div>
          <div className="publications">
            <h2>Publicações</h2>
            <p>{issuesCount} publicações</p>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </div>
      </SearchContent>
      <GithubContent />
    </Container>
  );
}
