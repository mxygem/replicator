import Image from "next/image";
import uploadstyles from "./uploadform.module.css";

export default function Upload({ url }) {
  return url != "" ? (
    <div className={uploadstyles.preview}>
      <Image src={url} width="300" height="300" />
    </div>
  ) : null;
}
