import Template from './Template';

// implement this if have time? https://pdfjs.express/blog/how-embed-pdf-in-html-website

export default function Notebook() {
  return (
    <Template title="Notebook">
      <h1>Wet Lab Notebook</h1>
      <p>Check out our notebook down below for a day-by-day play of our time in the lab!</p>
      <iframe title="2022 Stanford iGEM Wet Lab Notebook" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/dummy.pdf"></iframe>
    </Template>
  );
}
