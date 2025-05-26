import { CardsWrapper, GithubContentPublisher } from "./styles";

export function GithubContent() {
  return (
    <CardsWrapper>
      <GithubContentPublisher>
        <div className="infos">
          <h2>JavaScript data types and data structures</h2>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </GithubContentPublisher>

      <GithubContentPublisher>
        <div className="infos">
          <h2>JavaScript data types and data structures</h2>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </GithubContentPublisher>
    </CardsWrapper>
  );
}
