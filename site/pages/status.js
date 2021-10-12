import Layout from "../components/layout";
import Status from "../components/status";

export default function StatusPage() {
  const title = "Status";

  return (
    <Layout title={title}>
      <Status title={title} />
    </Layout>
  );
}
