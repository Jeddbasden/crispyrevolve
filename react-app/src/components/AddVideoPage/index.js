import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../../store/videos";
import { useHistory } from "react-router-dom";
import { Form, FormInput, FormLabel, FormLabelInput } from "../StyledComponents/Form-style";
import { ButtonTwo } from "../StyledComponents/Button-style";
import { ContentDiv } from "../StyledComponents/Content-style";
import "./AddVideoPage.css"

const AddVideoPage = () => {
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
    return history.push('/')
  }

  return (
    <ContentDiv>
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
      <div className="spacingDiv"></div>
    </ContentDiv>
  )
}

export default AddVideoPage;
