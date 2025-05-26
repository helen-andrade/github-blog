// ProfileCard.tsx
import {
  Followers,
  GithubProfile,
  User,
  ProfileCardInfos,
  UserDescription,
  Work,
  ImgProfile,
  ProfileDetails,
  HeaderCard,
  FooterInfo,
} from "./styles";
import iconArrow from "../../assets/icons/icon-arrow.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconWork from "../../assets/icons/icon-work.svg";
import iconFollowers from "../../assets/icons/icon-followers.svg";
import avatar from "../../assets/icons/avatar.svg";

export function ProfileCard() {
  return (
    <ProfileCardInfos>
      <ImgProfile>
        <img src={avatar} alt="Foto de perfil" />
      </ImgProfile>

      <ProfileDetails>
        <HeaderCard>
          <h2>Cameron Williamson</h2>
          <GithubProfile>
            <a href="#">
              GitHub <img src={iconArrow} alt="" />
            </a>
          </GithubProfile>
        </HeaderCard>

        <UserDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </UserDescription>

        <FooterInfo>
          <User>
            <img src={iconGithub} alt="" />
            <span>cameronwll</span>
          </User>
          <Work>
            <img src={iconWork} alt="" />
            <span>Rocketseat</span>
          </Work>
          <Followers>
            <img src={iconFollowers} alt="" />
            <span>32 seguidores</span>
          </Followers>
        </FooterInfo>
      </ProfileDetails>
    </ProfileCardInfos>
  );
}
