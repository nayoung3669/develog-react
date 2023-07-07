import { styled } from "styled-components";
import theme from "../../lib/styles/theme";
import { Button } from "../../common";

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <div className="logoText">DEVLOG</div>
        <Button w="80" h="30" c="dark">
          LOGOUT
        </Button>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 4.5rem;
  padding: 0px 50px 4px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.pink};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  .logoText {
    font-size: 1.7rem;
    font-weight: bold;
    letter-spacing: 3px;
  }

  button {
    margin-top: 5px;
    font-size: 0.8rem;
    letter-spacing: 1.8px;
  }
`;

//헤더만큼 차지 (컨텐츠 가리지 않게)
const Space = styled.div`
  height: 4.5rem;
`;
