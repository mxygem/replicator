import styles from "../styles/Home.module.css";
import uploadstyles from "./uploadform.module.css";
import { useForm } from "react-hook-form";

export default function Upload({ title }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={uploadstyles.form_wrapper}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          className={uploadstyles.uploadform}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* config options */}
          <div className={uploadstyles.section} name="config">
            <h3>Configuration</h3>
            {/* output count */}
            <div>
              <p>Rendition Count</p>
              <input
                type="number"
                defaultValue="3"
                {...register("count", { min: 2, max: 10 })}
              />
            </div>

            <div>
              {/* dimension min/max */}
              <p>Dimension Minimum</p>
              <input
                type="number"
                defaultValue="10"
                {...register("dimension-min", { min: 10, max: 90 })}
              />
            </div>

            <div>
              <p>Dimension Maximum</p>
              <input
                type="number"
                defaultValue="90"
                {...register("dimension-max", { min: 10, max: 90 })}
              />
            </div>

            <div>
              <p>Quality Minimum</p>
              <input
                type="number"
                defaultValue="10"
                {...register("quality-min", { min: 10, max: 90 })}
              />
            </div>
            {/* quality min/max */}

            <div>
              <p>Quality Maximum</p>
              <input
                type="number"
                defaultValue="90"
                {...register("quality-max", { min: 10, max: 90 })}
              />
            </div>

            {/* format/extensions */}
            {/* email */}
          </div>

          {/* upload options */}
          <div className={uploadstyles.section} name="upload">
            <h3>Upload</h3>
            {/* direct upload */}
            <div>
              {/* image or json */}
              <p>Direct</p>
              <input {...register("upload")} />
            </div>
            {/* remote upload */}
            <div>
              {/* config location (url) */}
              <p>Remote</p>
              <input {...register("remote")} />
            </div>
          </div>

          <div className={uploadstyles.submit}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
