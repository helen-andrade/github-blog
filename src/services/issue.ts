// services/issue.ts
export async function fetchIssues() {
  const response = await fetch(
    "https://api.github.com/repos/helen-andrade/github-blog/issues"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar issues");
  }

  const data = await response.json();

  return (
    data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((item: any) => !item.pull_request) // filtra apenas issues
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((issue: any) => ({
        number: issue.number,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at,
        comments: issue.comments,
        user: issue.user.login,
        html_url: issue.html_url,
      }))
  );
}
