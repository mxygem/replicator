import Layout from "../components/layout";
import FAQ from "../components/faq";

export default function FAQPage() {
  const title = "FAQ";
  const faqs = [
    {
      q: "What does this this do?",
      a: "It turns one or more images into many different versions of the same image. `Replicator` uses the configuration options available to determine a subset of images to make.",
    },
    {
      q: "What are my options?",
      a: "Currently, you can provide a target count of images, specify the range of image quality, and range of size. These values are a fraction of the base image's values.",
    },
    {
      q: "Where can I find an example of a valid config file?",
      a: "https://github.com/mxygem/replicator",
      l: true,
    },
    {
      q: "test question ABC",
      a: "test answer XYZ",
    },
  ];

  return (
    <Layout title={title}>
      <FAQ title={title} questions={faqs} />
    </Layout>
  );
}
