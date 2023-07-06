import { styled } from "styled-components";
import theme from "../lib/styles/theme";

const Input = ({ children, w, h, ph, name, value, onChange }) => {
  return (
    <StyledInput
      w={w}
      h={h}
      placeholder={`${ph}`}
      type={ph === "PW" && "password"}
      name={name}
      value={value}
      onChange={onChange}>
      {children}
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: ${(props) => `${props.w}`};
  height: ${(props) => `${props.h}`};
  height: 50px;
  font-size: 1.2rem;
  border-bottom: solid 1px ${theme.colors.pink};
`;
