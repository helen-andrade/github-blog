import { GithubContent } from "../GithubContent";
import { Container, SearchContent } from "./styles";

export function SearchComponents() {
  return (
    <Container>
      <SearchContent>
        <div>
          <div className="publications">
            <h2>Publicações</h2>
            <p>6 publicações</p>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </div>
      </SearchContent>
      <GithubContent />
    </Container>
  );
}
