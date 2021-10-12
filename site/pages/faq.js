import Layout from "../components/layout";
import FAQ from "../components/faq";

export default function FAQPage() {
  const title = "FAQ";
  const faqs = [
    {
      q: "What does this this do?",
      a: "It turns one or more images into many different versions of the same image.",
    },
    {
      q: "Where can I find an example of a valid config file?",
      a: "https://github.com/mxygem/replicator",
      l: true,
    },
    {
      q: "test question 3",
      a: "test answer 3",
    },
  ];

  return (
    <Layout title={title}>
      <FAQ title={title} questions={faqs} />
    </Layout>
  );
}
