import { useEffect, useState } from "react";

export function useGithubReadme(username: string) {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/${username}/${username}/main/README.md`
    )
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(buffer);
        setReadme(text);
      });
  }, [username]);

  return readme;
}
