import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./newpost.scss";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const NewPost = () => {
  const [tags, setTags] = useState([]);
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState("Others");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("/category")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  function handleChange(tags) {
    setTags(tags);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(content);

    await fetch("/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: content,
        tags: tags,
        category: cat,
      }),
    })
      .then((res) => res.json())
      .catch((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group new-post-title">
          <input
            type="text"
            className="form-control"
            required=""
            placeholder="Title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-primary form-group">
            Publish
          </button>
        </div>

        <div className="tag-cat d-flex align-items-center">
          <div className="col-md-4 col-sm-12 flex-grow-1">
            Category:&nbsp;&nbsp;
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="w-50 h-100"
            >
              {cats.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <TagsInput value={tags} onChange={handleChange} />
          </div>
        </div>
        <Editor
          initialValue=""
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
