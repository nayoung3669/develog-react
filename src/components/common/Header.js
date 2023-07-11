import { styled } from "styled-components";
import theme from "../../lib/styles/theme";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { verifyFailure } from "../../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogo = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const handleLogout = async () => {
    dispatch(verifyFailure());
    alert("로그아웃 되었습니다.");
  };

  return (
    <>
      <HeaderBlock>
        <div className="logoText" onClick={onClickLogo}>
          DEVLOG
        </div>
        <Button w={"80"} h={"30"} c={"dark"} onClick={handleLogout}>
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
    cursor: pointer;
  }

  button {
    margin-top: 5px;
    font-size: 0.8rem;
    letter-spacing: 1.8px;
  }
`;

const Space = styled.div`
  height: 4.5rem;
`;
