import { styled } from "styled-components";
import theme from "../../lib/styles/theme";
import { Button, Input } from "../../common";
import { Link } from "react-router-dom";

const AuthForm = ({
  typeName,
  formData,
  onChange,
  checkPW,
  onConfirm,
  onSubmit,
}) => {
  return (
    <AuthFormBlock>
      <div className="typeText">
        {typeName === "login"
          ? `${typeName.toUpperCase()}`
          : "Welcome to DEVLOG!"}
      </div>
      <div className="inputs">
        <Input
          className="input"
          name="id"
          ph={"ID"}
          w={"90%"}
          h={"50px"}
          value={formData.id}
          onChange={onChange}
        />
        <Input
          className="input"
          name="password"
          ph={"PW"}
          w={"90%"}
          h={"50px"}
          value={formData.password}
          onChange={onChange}
        />
        {typeName === "register" && (
          <Input
            className="input"
            ph={"PW"}
            w={"90%"}
            h={"50px"}
            value={checkPW}
            onChange={onConfirm}
          />
        )}
      </div>
      <Button w={"185"} h={"40"} onClick={onSubmit}>
        {typeName.toUpperCase() + `${" >"}`}
      </Button>
      {typeName === "login" && (
        <Link to={`/register`} className="register">
          REGISTER {">"}
        </Link>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

const AuthFormBlock = styled.div`
  padding: 20px;
  ${theme.common.flexCenterColumn}
  gap: 30px;

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
