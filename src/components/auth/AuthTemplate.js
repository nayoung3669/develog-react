import { styled } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../lib/styles/theme";

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logoText">
          <Link to="/">MELOG</Link>
        </div>
      </WhiteBox>
      {children}
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  //화면 꽉채우기
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.ivory};
  ${theme.common.flexCenterColumn}
`;
const WhiteBox = styled.div``;
