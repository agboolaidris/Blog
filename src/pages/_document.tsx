import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Reddit</title>
          <meta property="og:site_name" content="reddit" />

          {/* <meta property="twitter:site" content="@reddit" /> */}
          <meta property="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={process.env.NEXT_PUBLIC_CLIENT_BASE_URL + "/reddit.svg"}
          />
          <meta
            property="twitter:image"
            content={process.env.NEXT_PUBLIC_CLIENT_BASE_URL + "/reddit.svg"}
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href={process.env.NEXT_PUBLIC_CLIENT_BASE_URL + "/reddit.svg"}
          />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
