import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import {
  HeaderContainer,
  ProfileCardWrapper,
} from "../../components/Header/styles";
import { SearchComponents } from "../../components/SearchContent";

export function ProfileGithub() {
  return (
    <div>
      <HeaderContainer>
        <Header />
        <ProfileCardWrapper>
          <ProfileCard />
          <SearchComponents />
        </ProfileCardWrapper>
      </HeaderContainer>
    </div>
  );
}
