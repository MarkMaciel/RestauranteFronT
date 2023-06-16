import { Html, Head, Main, NextScript } from "next/document";
import { icons } from "react-icons";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
        rel="icon"
        href="https://cdn.discordapp.com/attachments/967872716063526942/1119406058075602996/pneu-removebg-preview.png"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <title>Restaurante</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
