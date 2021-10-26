import styles from "../styles/Home.module.css";
import uploadstyles from "./uploadform.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Preview from "../components/preview";

export default function Upload({ title }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPreview, setShowPreview] = useState("");
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.file[0].name);
    formData.append("config", null);
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:3000/uploads", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res);

    const json = await res.json();
    setShowPreview(json.file.url);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={uploadstyles.main}>
        <div className={uploadstyles.form_wrapper}>
          <form
            className={uploadstyles.uploadform}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={uploadstyles.section} name="upload">
              <h3>Upload</h3>
              <div>
                <input type="file" {...register("file")} />
              </div>
            </div>

            <div className={uploadstyles.submit}>
              <input type="submit" />
            </div>
          </form>
        </div>

        {showPreview != "" ? <Preview url={showPreview} /> : null}
      </div>
    </div>
  );
}
