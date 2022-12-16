import Template from './Template';

export default function Results() {
  return (
    <Template title="Results">
      <h1>Results</h1>
      <p>
        Though our project revolved around PETase, it must be mentioned that we included a plethora of components––created through both rational design and directed evolution––in order to truly understand and optimize PETase functionality. Therefore, we obtained results from multiple outcomes. 
      </p>
      
      <h1>Rationally Designed Mutants</h1>
      <p>
        We designed two single-residue mutants of FAST PETase that we expected to have heightened activity under acidic conditions compared to the original protein. In order to conduct activity assays on the PETases at a range of pH levels, we needed to develop a plan to purify the protein in large quantities. In some preliminary tests, we showed that our purification procedure would allow us to collect a suitable amount of FAST-PETase and both rational design mutants. The gels below indicate the presence of the PET protein at each step of the purification. Our protein forms bands at the level marked with the red arrow.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/results/gels.jpg"
        alt="Gels"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Gels</caption>

      <h2>Gel Labels</h2>
      <ul>
        <li>
        WC = whole-cell (the protein would form a strong band here if it was stuck in the cell membrane)
        </li>
        <li>
        INS = insoluble (the protein would form a strong band here if it precipitated out of the aqueous solution)
        </li>
        <li>
        SOL = soluble protein (the protein would form a strong band here if it was soluble in extremely high concentrations)
        </li>
        <li>
        FT = flow-through (the protein would form a strong band here if it was unable to bind to the nickel beads)
        </li>
        <li>
        BD = bead eluate (the protein forms a strong band here because it bound to the nickel beads during the wash step, but was able to separate from them in the final elution step). We used two different sample volumes for our bead eluate (5 μL and 25 μL) so that we could more effectively estimate the amount of protein). All other columns (WC, INS, SOL, and FT) used 20 μL samples.
        </li>
      </ul>
      <p>
        Because the thickest and darkest band on each protein gel is in the bead eluate columns, our PETases clearly perform as expected at each stage of the purification process, validating this method as a way to purify large quantities of all of our proteins for further experimentation. The next step in testing our rational designs is growing and purifying the proteins at a larger scale and performing activity assays to study their effectiveness at degrading PET plastic.
      </p>

      <h1>OrthoRep Directed Evolution Mutant</h1>
      <p>
      We were ultimately able to successfully integrate PETase into the Original Orthorep Yeast, thereby, beginning the process of ortho rep and correspondingly evolution. After completing the process of integration, we completed a gDNA extraction, sequenced our p1 plasmid, and completed our analysis using ApE. The p1 plasmid contains the alpha-factor signal sequence and FAST-PETase genes. Previous literature had indicated that once integrated this plasmid would thus allow for the induction of the othorep evolution process; thereby, our PETase had finally theoretically begun mutating. 
      </p>
      <p>
      The issue lied in the fact that though it appeared the mutations occurring they were of no selection and hence, neutral drift. Below is an alignment between the sequenced evolved version of this cassette (on top) and the original cassette that was integrated at the start of the evolution process (on bottom). So far we see only one confirmed mutation in base pair #117 of the alpha signal sequence gene (orange). It changes a C to a T in the last letter of a codon, so it is a silent mutation that codes for Isoleucine either way.   
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/results/screen-shot-2022-10-12-at-8-48-35-am.png"
        alt="Tryptophan After"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Sequence Alignment Between Alpha Signal Sequence Before and After OrthoRep Directed Evolution</caption>

      <p>
        Affirming what previous literature indicated, Orthorep and correspondingly evolution of the enzyme was occurring since we did ultimately attain a mutation in our sequence. But it appears to not be nearly at the high mutation rate one would expect from the system indicating flaws and errors. We plan to investigate further what could have caused this. Potential errors to be tested could potentially consist of low copy plasmids, low copy TO-DNAP1s, or inconsistent sequencing. It could be in theory that perhaps more mutations were created in other cells, but they were so unfit that those cells died quickly, leaving only cells with few silent mutations left to sequence. 
      </p>
      <h1>Gasket Screening</h1>
      <p>
        An issue revolving around culture growth arose with the newly developed ortho rep yeast. The yeast cultures made using synthetic media without uracil and tryptophan as selecting factors, appeared to grow extremely slowly, especially for the time constraints we had. Additionally, we realized that our yeast were not mutating at a sufficient rate, thus we have not been able to test our mutant screening method yet. We were, however, able to successfully engineer a gasket to keep cultures separated and in place. It is ready for the screening process once our cultures are. We merely need to complete further experimentation with the evolution of our yeast. Once developed, we will be able to implement our gasket, PET, and well plate set up as intended. 
      </p>
    </Template>
  );
}
