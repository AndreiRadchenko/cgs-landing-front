import Image from "next/image";
import logo from "../../../public/logo.png";
import * as Styled from "../../styles/AdminAuth";

const AuthAdminHeader = () => {
  return (
    <Styled.AdminAuthHeader>
    <Styled.AdminAuthTeamLogo>
      <Image src={logo} />
    </Styled.AdminAuthTeamLogo>
  </Styled.AdminAuthHeader>
  )
}

export default AuthAdminHeader;