import FirstIsland from "../islands/FirstIsland.tsx";

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
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="./about">About</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Welcome to BMCC.space!</h2>
      {/* Page-specific content goes here */}
    </main>
    <footer>
      {/* Footer content, such as contact information and links */}
    </footer>
  </body>
</>

  );
}
