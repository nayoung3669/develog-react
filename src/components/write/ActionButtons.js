import { Button } from "../../common";
import { styled } from "styled-components";
import theme from "../../lib/styles/theme";

const ActionButtons = ({ onSubmitHandler }) => {
  return (
    <ActionButtonsBlock>
      <Button c={"dark"} h={"35"} w={"90"} onClick={onSubmitHandler}>
        작성완료
      </Button>
      <Button h={"35"} w={"65"}>
        취소
      </Button>
    </ActionButtonsBlock>
  );
};

export default ActionButtons;

const ActionButtonsBlock = styled.div`
  ${theme.common.flexCenter}
  margin: 40px 40px;
  button {
    margin-right: 15px;
  }
`;
