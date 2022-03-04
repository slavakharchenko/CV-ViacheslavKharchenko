import { ContainerHeader, NavHeader, Links, Icons, Link } from './header.style'
import Icon from "./icon";

const Header = () => {
  return (
    <ContainerHeader>
      <NavHeader>
          <Links>
            <Link to="/aboutMe"> About me </Link>
            <Link to="/skills"> Skills </Link>
            <Link to="/experience"> Experience </Link>
          </Links>

          <Icons>
            <Icon name='email'/>
            <Icon name='linkedIn'/>
            <Icon name='telegram'/>
            <Icon name='github'/>
          </Icons>
      </NavHeader>
    </ContainerHeader>
  );
}

export default Header;