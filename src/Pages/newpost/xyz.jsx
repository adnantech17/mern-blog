import "./newpost.css";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";

const NewPos = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImages, setUploadedImages] = useState([]);

  function _uploadImageCallBack(file) {
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };
    setUploadedImages([...uploadedImages, imageObject]);
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  }

  const onEditorStateChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", convertToRaw(contentState));
    setEditorState(editorState);
    console.log(uploadedImages);
  };

  return (
    <div className="App">
      <form>
        <div class="form-group new-post-title">
          <input
            type="text"
            class="form-control"
            name="name"
            required=""
            placeholder="Title*"
            data-form-field="Name"
          />
          <button type="submit" class="btn btn-sm btn-primary form-group">
            Publish
          </button>
        </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            inline: { inDropdown: false },
            list: { inDropdown: true },
            textAlign: { inDropdown: false },
            link: { inDropdown: true },
            history: { inDropdown: false },
            image: { uploadCallback: _uploadImageCallBack },
            inputAccept:
              "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel",
          }}
        />
      </form>
    </div>
  );
};

export default NewPos;
