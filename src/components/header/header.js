import { NavHeader, Links, Icons, Link, BrandContainer } from './header.style'
import Icon from "../icon";
import Brand from "./components/brand";

const Header = () => {
  return (
    <NavHeader>
      <BrandContainer>
        <Brand />
      </BrandContainer>
      <Links>
        <Link href="#aboutMe"> ABOUT </Link>
        <Link href="#skills"> SKILLS </Link>
        <Link href="#experience"> EXPERIENCE </Link>
      </Links>
      <Icons>
        <Icon name='email'/>
        <Icon name='linkedIn'/>
        <Icon name='telegram'/>
        <Icon name='github'/>
      </Icons>
    </NavHeader>
  );
}

export default Header;