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
        <form
          className={uploadstyles.uploadform}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* config options */}
          <div className={uploadstyles.section} name="config">
            <h3>Configuration</h3>

            {/* output count */}
            <div className={uploadstyles.option}>
              <h4 className={uploadstyles.title}>Rendition Count</h4>
              <div>
                <input
                  type="number"
                  defaultValue="3"
                  {...register("count", { min: 2, max: 10 })}
                />
              </div>
            </div>

            {/* dimension min/max */}
            <div className={uploadstyles.option}>
              <h4 className={uploadstyles.title}>Dimension Range %</h4>
              <div>
                <p>Min</p>
                <input
                  type="number"
                  defaultValue="10"
                  {...register("dimension-min", { min: 10, max: 90 })}
                />
                <p>Max</p>
                <input
                  type="number"
                  defaultValue="90"
                  {...register("dimension-max", { min: 10, max: 90 })}
                />
              </div>
            </div>

            {/* quality min/max */}
            <div className={uploadstyles.option}>
              <h4 className={uploadstyles.title}>Quality Range %</h4>
              <div>
                <p>Min</p>
                <input
                  type="number"
                  defaultValue="10"
                  {...register("quality-min", { min: 10, max: 90 })}
                />
                <p>Max</p>
                <input
                  type="number"
                  defaultValue="90"
                  {...register("quality-max", { min: 10, max: 90 })}
                />
              </div>
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
              <input type="radio" {...register("upload")} value="Upload" />
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
