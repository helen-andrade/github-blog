import headerImg from "../../assets/icons/header.svg";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={headerImg} alt="" />
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
