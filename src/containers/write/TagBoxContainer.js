import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TagBox from "../../components/write/TagBox";
import { changeField } from "../../redux/modules/write";

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(({ write }) => write.tags);

  const onChangeTags = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );
  return (
    <div>
      <TagBox tagsData={tags} onChangeTagsData={onChangeTags} />
    </div>
  );
};

export default TagBoxContainer;
