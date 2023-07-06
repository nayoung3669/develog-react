import { styled } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../lib/styles/theme";

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <ContentBox>
        <div className="logoText">
          <Link to="/">MELOG</Link>
        </div>
        {children}
      </ContentBox>
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
const ContentBox = styled.div`
  width: 360px;
  height: 600px;
  margin: auto;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  border: 0.8px solid #24242431;
  display: block;
  position: relative;
  cursor: pointer;

  &:hover:before {
    border-top: 32px solid #7373734f;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 32px solid ${theme.colors.pink};
    border-left: 32px solid rgba(0, 0, 0, 0);
    width: 0;
  }

  .logoText {
    ${theme.common.flexCenterColumn}
    margin-top: 30px;
    font-size: 2rem;
  }
`;
