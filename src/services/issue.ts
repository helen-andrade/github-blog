// services/issue.ts
export async function fetchIssues() {
  const response = await fetch(
    "https://api.github.com/repos/helen-andrade/github-blog/issues"
  );
  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const issuesOnly = data.filter((item: any) => !item.pull_request);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return issuesOnly.map((issue: any) => ({
    id: issue.id,
    title: issue.title,
    body: issue.body,
    created_at: issue.created_at,
  }));
}
