import { css, styled } from "styled-components";
import theme from "../lib/styles/theme";

const Button = ({ children, w, h, c, onClick }) => {
  return (
    <StyledButton w={w} h={h} c={c} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: "Orbit", sans-serif;
  width: ${({ w }) => `${w}px`};
  height: ${({ h }) => `${h}px`};
  outline: none;
  font-weight: 600;
  color: ${theme.colors.dark};
  background: ${theme.colors.pink};
  cursor: pointer;

  ${(props) =>
    props.c === "dark" &&
    css`
      background: ${theme.colors.dark};
      color: ${theme.colors.ivory};
    `};

  &:hover {
    color: ${theme.colors.ivory};
    background: ${theme.colors.dark};
  }
`;

export default Button;
