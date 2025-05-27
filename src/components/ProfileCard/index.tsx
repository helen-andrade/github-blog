import {
  Followers,
  GithubProfile,
  User,
  ProfileCardInfos,
  Bio,
  Work,
  Avatar,
  ProfileDetails,
  HeaderCard,
  FooterInfo,
} from "./styles";

import iconArrow from "../../assets/icons/icon-arrow.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconWork from "../../assets/icons/icon-work.svg";
import iconFollowers from "../../assets/icons/icon-followers.svg";

import { useGithubProfile } from "../../hooks/useGithubProfile";
import { useGithubReadme } from "../../hooks/useGithubReadme";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function ProfileCard() {
  const user = useGithubProfile("helen-andrade");
  const readme = useGithubReadme("helen-andrade");

  if (!user) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <ProfileCardInfos>
      <Avatar>
        <img src={user.avatar_url} alt={`Foto de perfil de ${user.name}`} />
      </Avatar>

      <ProfileDetails>
        <HeaderCard>
          <h2>{user.name}</h2>
          <GithubProfile>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <img src={iconArrow} alt="" />
            </a>
          </GithubProfile>
        </HeaderCard>

        <Bio>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
          >
            {readme}
          </ReactMarkdown>
        </Bio>
        <FooterInfo>
          <User>
            <img src={iconGithub} alt="" />
            <span>{user.login}</span>
          </User>
          <Work>
            <img src={iconWork} alt="" />
            <span>{user.work ?? "Sem empresa"}</span>
          </Work>
          <Followers>
            <img src={iconFollowers} alt="" />
            <span>{user.followers} seguidores</span>
          </Followers>
        </FooterInfo>
      </ProfileDetails>
    </ProfileCardInfos>
  );
}
