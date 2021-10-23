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
        </Head>
        <body className="theme-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
