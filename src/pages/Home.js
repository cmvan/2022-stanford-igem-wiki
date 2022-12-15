import Template from './Template';

export default function Home() {
  return (
    <Template title="MORPH: Mutation Optimized Reactor for PET Hydrolysis">
      <h1>Introducing MORPH!</h1>
      <p>
        Polyethylene Terephthalate (PET), accounts for 12% of solid waste worldwide thus making PET processing a top priority. Recently, an enzyme was discovered in bacteria that breaks down PET and following this, several studies have used the wild-type protein to improve its efficiency and stability for enzymatic degradation in vitro. Although these recent achievements are incredible advances, having optimized PETases for conditions that microbes prefer will essentially make PET biodegradable. To produce PETases that function under different conditions (e.g. fermentation), our team is building a platform for producing PETases through continuous directed evolution called “OrthoRep”. To achieve this, we’ve developed a system that selects for yeast mutants with improved activity in user-defined conditions. Our workflow can be used to evolve PETases that work optimally for different species based on the pH and temperature used in our evolution and could be used to evolve enzymes that break down many other materials.
      </p>
      <h2>Check out our Video for a SPEEDY Intro ;)</h2>
      <iframe className="d-block mx-auto space-above"title="Stanford: MORPH (2022) - Project Promotion [English]" width="840" height="473" src="https://video.igem.org/videos/embed/9323e1c8-b182-49ea-b680-b50bdd0cab61" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
    </Template>
  );
}
