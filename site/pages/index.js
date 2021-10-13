import Layout from "../components/layout";
import Upload from "../components/upload";

export default function HomePage() {
  const title = "Upload";

  return (
    <Layout title={title}>
      <Upload title={title} />
    </Layout>
  );
}
