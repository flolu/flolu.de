import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const props = await Document.getInitialProps(context)
    if (!context.req || !context.res) return {...props}
    return {...props}
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          {/* Google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
