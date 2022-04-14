import * as Styled from "../../styles/AdminAuth";
import buttonBack from "../../../public/back-button.png";
import Image from "next/image";

const AuthSubmitButton = () => {
  return (
    <Styled.AdminAuthButton type="submit">
    <Image src={buttonBack} />
    <Styled.AdminAuthButtonText>
      Submit
    </Styled.AdminAuthButtonText>
  </Styled.AdminAuthButton>
  )
}

export default AuthSubmitButton;