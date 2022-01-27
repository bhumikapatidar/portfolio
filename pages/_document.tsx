import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-slate-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument