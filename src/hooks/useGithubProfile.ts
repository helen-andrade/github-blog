import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubUser {
  name: string;
  login: string;
  bio: string;
  work: string;
  followers: number;
  avatar_url: string;
}

export function useGithubProfile(username: string) {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    api.get(`/users/${username}`).then((response) => {
      setUser(response.data);
    });
  }, [username]);

  return user;
}
