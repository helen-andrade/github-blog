import { createContext, useState, useEffect, type ReactNode } from "react";
import { fetchIssues } from "../services/issue";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

interface IssuesContextType {
  issues: Issue[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const IssuesContext = createContext<IssuesContextType>({
  issues: [],
});

interface IssuesProviderProps {
  children: ReactNode;
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchIssues();
      setIssues(data);
    }
    load();
  }, []);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
}
