import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getVideos, editVideo } from "../../store/videos";
import { Form, FormLabel, FormInput,FormLabelInput } from "../StyledComponents/Form-style";
import { ButtonTwo } from "../StyledComponents/Button-style";
import { ContentDiv2, SpacingDiv } from "../StyledComponents/Content-style";
import './EditVideoPage.css'

const EditVideoPage = ({setModal}) => {
  const videos = useSelector(state => state.videos)
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const video = videos?.find((video) => video?.id === Number(id));

  const [title, setTitle] = useState(video?.title);
  const [description, setDescription] = useState(video?.description);
  const [imgUrl, setImgUrl] = useState(video?.imgUrl);

  useEffect(() => {
    dispatch(getVideos())
  }, [dispatch])

  const submit = async (e) => {
    e.preventDefault();
    const newVideo = {
      title,
      description,
      imgUrl,
    };
    await dispatch(editVideo(newVideo, id))
    return setModal(false);
  };

  return (
    <ContentDiv2>
      <SpacingDiv></SpacingDiv>
      <Form onSubmit={submit}>
        <FormLabelInput>
          <FormLabel>Title</FormLabel>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormLabelInput>
        <FormLabelInput>
          <FormLabel>Description</FormLabel>
          <textarea
            className="textareaThing"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormLabelInput>
        <FormLabelInput>
          <FormLabel>Image Url</FormLabel>
          <FormInput
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </FormLabelInput>
        <ButtonTwo type="submit">submit</ButtonTwo>
      </Form>
      <SpacingDiv></SpacingDiv>
    </ContentDiv2>
  );
}

export default EditVideoPage;
