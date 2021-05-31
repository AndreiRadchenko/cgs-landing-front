import Document from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = context.renderPage;

    context.renderPage = () => (
      originalRenderPage({
        enhanceApp(App) {
          return (props) => (
            sheet.collectStyles(<App {...props} />)
          );
        },
      })
    );

    const initialProps = await Document.getInitialProps(context);

    const styleElement = sheet.getStyleElement();

    sheet.seal();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styleElement}
        </>
      ),
    };
  }
}
