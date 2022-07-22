import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../../store/videos";
import { useHistory } from "react-router-dom";
import { Form, FormInput, FormLabel, FormLabelInput } from "../StyledComponents/Form-style";
import { ButtonTwo } from "../StyledComponents/Button-style";
import { ContentDiv2, AddSpacingDiv } from "../StyledComponents/Content-style";
import "./AddVideoPage.css"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const AddVideoPage = ({setModal}) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [title, setTitle] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  
  const submit = async (e) => {
    e.preventDefault()
    const video = {
      title,
      videoUrl,
      description,
      imgUrl
    };

    await dispatch(addVideo(video));
    setModal(false);
    return history.push(``);
  }

  return (
    <ContentDiv2>
      <AddSpacingDiv/>
      <Form onSubmit={submit}>
        <FormLabelInput>
          <FormLabel>Title</FormLabel>
          <FormInput
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </FormLabelInput>
        <FormLabelInput>
          <FormLabel>Video Url</FormLabel>
          <FormInput
            type='text'
            name='videoUrl'
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            required
          />
        </FormLabelInput>
        <FormLabelInput>
          <FormLabel>Description</FormLabel>
          <textarea
            className="textareaThing"
            type='text'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </FormLabelInput>
        <FormLabelInput>
          <FormLabel>Image Url</FormLabel>
          <FormInput
            type='text'
            name='imgUrl'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
            required
          />
        </FormLabelInput>
        <ButtonTwo type='submit'>submit</ButtonTwo>
      </Form>
      <AddSpacingDiv/>
    </ContentDiv2>
  )
}

export default AddVideoPage;
