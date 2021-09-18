import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./newpost.scss";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const NewPost = () => {
  const [tags, setTags] = useState([]);

  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };
  function handleChange(tags) {
    setTags(tags);
    console.log(tags);
  }

  return (
    <div>
      <h1>Create a New Post</h1>
      <br />
      <br />
      <form>
        <div className="form-group new-post-title">
          <input
            type="text"
            className="form-control"
            name="name"
            required=""
            placeholder="Title*"
            data-form-field="Name"
          />
          <button type="submit" className="btn btn-sm btn-primary form-group">
            Publish
          </button>
        </div>

        <div className="tag-cat d-flex align-items-center">
          <div className="col-md-4 col-sm-12 flex-grow-1">
            Category:&nbsp;&nbsp;
            <select name="categories" id="categories" className="w-50 h-100">
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="django">Django</option>
              <option value="blockchain">Blockchain</option>
              <option value="cats">Cats</option>
              <option value="music">Music</option>
              <option value="travel">Travel</option>
            </select>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <TagsInput value={tags} onChange={handleChange} />
          </div>
        </div>
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: "640",
            selector: "#editor",
            plugins: "image codesample",
            toolbar: "undo redo | align | color | link image | codesample ",
            image_title: true,
            automatic_uploads: false,
            file_picker_types: "image",
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.onload = function () {
                  var base64 = reader.result.split(",")[1];
                  cb(`data:image/jpeg;base64, ${base64}`, {
                    title: file.name,
                  });
                };
                reader.readAsDataURL(file);
              };

              input.click();
            },
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onChange={handleEditorChange}
        />
      </form>
    </div>
  );
};

export default NewPost;
