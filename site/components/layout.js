import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title }) {
  let baseTitle = "Replicator";
  if (title) {
    baseTitle += "- " + title;
  }

  return (
    <div>
      <Head>
        <title>{baseTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
}