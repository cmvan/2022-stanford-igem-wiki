import Template from './Template';

export default function Results() {
  return (
    <Template title="Results">
      <h1>Rationaly Designed Mutant</h1>
      <p>
        We were able to collect a suitable quantity of both FAST-PETase and both rational design mutants via nickel bead elution.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/results/gels.jpg"
        alt="Gels"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Gels</caption>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/results/gelref.jpg"
        alt="Gels Ref"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Gels Ref</caption>

      <h1>Directed Evolution Mutant</h1>
      <p>
      We were just now able to sequence our p1 plasmid from the OrthoRep cells that recently started their evolution process. This plasmid contains the alpha-factor signal sequence and FAST-PETase genes. Below is an alignment between the sequenced evolved version of this cassette (on top) and the original cassette that was integrated at the start of the evolution process (on bottom). So far we see only one confirmed mutation in base pair #117 of the alpha signal sequence gene (orange). It changes a C to a T in last letter of a codon, so it is a silent mutation that codes for Isoleucine either way.   
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/results/screen-shot-2022-10-12-at-8-48-35-am.png"
        alt="Tryptophan After"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Sequence Alignment Between Alpha Signal Sequence Before and After OrthoRep Directed Evolution</caption>

      <p>
      Since we did get a mutation in our sequence, OrthoRep must be working to some degree, but not nearly at the high mutation rate one would expect from the system. We plan to investigate further what could have caused this: low copy plasmids, low copy TP-DNAP1s, or inconsistent sequencing? Or perhaps more mutations were created in other cells, but they were so unfit that those cells died quickly, leaving only cells with few silent mutations left to sequence.
      </p>
      <h1>Gasket Screening</h1>
      <p>
      Since we are still trying to grow up viable cultures that are mutating at a sufficient rate, we have not been able to test our mutant screening method yet. We know our engineered gasket works to keep cultures separated and in place, and it will be ready for the screening process once our cultures are.
      </p>
    </Template>
  );
}
