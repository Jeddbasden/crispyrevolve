import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getComments, editComment } from "../../store/comments";
import { ContentDiv, SpacingDiv } from "../StyledComponents/Content-style";
import { ButtonTwo } from "../StyledComponents/Button-style";
import { Form, FormLabel, FormInput, FormLabelInput } from "../StyledComponents/Form-style";
import "./EditCommentPage.css"


const EditCommentPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  const comment = comments?.find(comment => comment?.id === Number(id));

  const [message, setMessage] = useState(comment.comment)

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(editComment(message, comment?.id))
    return history.push(`/videos/${comment?.videoId}`)
  }

  return (
    <ContentDiv>
      <SpacingDiv></SpacingDiv>
      <Form onSubmit={submit}>
        <FormLabel>Edit Comment</FormLabel>
        <FormInput
          type="text"
          name="comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ButtonTwo type="submit">Done</ButtonTwo>
      </Form>
      <SpacingDiv></SpacingDiv>
    </ContentDiv>
  );
};

export default EditCommentPage;
