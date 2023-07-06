import { styled } from "styled-components";
import theme from "../lib/styles/theme";

const Button = ({ children, w, h, onClick }) => {
  return (
    <StyledButton w={w} h={h} onClick={onClick}>
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

  &:hover {
    color: ${theme.colors.ivory};
    background: ${theme.colors.dark};
  }
`;

export default Button;
