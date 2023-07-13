import { styled } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../lib/styles/theme";

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <ContentBox>
        <div className="logoText">
          <Link to="/">
            {"<"} DEVELOG {"/>"}
          </Link>
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
  border-radius: 6px;

  border: 0.8px solid #24242431;
  position: relative;

  &:hover:before {
    border-top: 35px solid #1d1d1d4f;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 35px solid ${theme.colors.pink};
    border-left: 35px solid rgba(0, 0, 0, 0);
    width: ;
  }

  .logoText {
    ${theme.common.flexCenterColumn}
    margin-top: 30px;
    font-size: 2rem;
  }
`;
