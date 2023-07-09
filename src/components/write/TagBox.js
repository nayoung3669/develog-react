import { styled } from "styled-components";
import { Button } from "../../common";
import theme from "../../lib/styles/theme";
import { useCallback, useState } from "react";

const TagBox = () => {
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState([]);

  const onChangeHandler = (e) => {
    setInputTag(e.target.value);
  };

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      //유효성검사 (빈 데이터이거나, 이미 존재한다면)
      if (!inputTag) {
        alert("태그를 입력해주세요.");
        return;
      }
      if (tags.includes(inputTag)) {
        alert("이미 존재하는 태그입니다.");
        return;
      }
      setTags((prev) => prev.concat(inputTag));
      setInputTag("");
    },
    [inputTag, tags],
  );

  const onRemove = useCallback((tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagFormBlock>
        <input
          name="input"
          placeholder="태그를 입력하세요."
          value={inputTag}
          onChange={onChangeHandler}></input>
        <Button w="43" h="40" onClick={onSubmitHandler}>
          추가
        </Button>
      </TagFormBlock>
      <TagList tags={tags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

const TagList = ({ tags, onRemove }) => {
  return (
    <TagListBox>
      {tags.map((tag) => (
        //tag onClick 삭제
        <p key={tag} onClick={() => onRemove(tag)}>
          #{tag}
        </p>
      ))}
    </TagListBox>
  );
};

export default TagBox;

const TagBoxBlock = styled.div`
  height: 60px;
  margin-left: 40px;
`;

const TagFormBlock = styled.div`
  /* ${theme.common.flexCenter} */
  margin-top: 10px;

  input {
    height: 40px;
    width: 150px;
    border: 1px solid lightgray;
  }
  button {
    position: absolute;
    border-radius: 0px;
    border: 1px solid lightgray;
  }
`;

const TagListBox = styled.div`
  ${theme.common.flexCenter}
  margin-top: 10px;
  p {
    color: #727272;
    margin-right: 6px;
  }
  font-size: 0.9rem;
`;
