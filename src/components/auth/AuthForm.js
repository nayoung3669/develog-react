import { styled } from "styled-components";
import theme from "../../lib/styles/theme";
import { Button, Input } from "../../common";
import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  return (
    <AuthFormBlock>
      <div className="typeText">{type.toUpperCase()}</div>
      <div className="inputs">
        <Input className="input" ph="ID" w="90%" h="50px" />
        <Input className="input" ph="PW" w="90%" h="50px" />
        {type === "register" && (
          <Input className="input" ph="PW" w="90%" h="50px" />
        )}
      </div>
      <Button w="185" h="40">
        {type}
      </Button>
      {type === "login" && (
        <Link to={`/register`} className="register">
          REGISTER {">"}
        </Link>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

const AuthFormBlock = styled.div`
  padding: 50px;
  ${theme.common.flexCenterColumn}
  gap: 70px;

  .typeText {
    font-size: 1.2rem;
  }

  .inputs {
    ${theme.common.flexCenterColumn}
    gap: 20px;
  }

  .register {
    height: 50px;
    width: 100px;
  }
`;
