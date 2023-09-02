import Login from "../islands/Login.tsx"
export default function Home() {
  return (
    <>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* Meta tags specific to each page can be added here */}
    <title>BMCC.space</title>
  </head>
  <body>
    <main>
      <h1>BMCC.space</h1>
      <p>an online student directory for BMCC</p>
      <Login/>
    </main>
  </body>
</>

  );
}
