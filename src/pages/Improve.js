import { Link } from 'react-router-dom'
import Template from './Template';

export default function Improve() {
  return (
    <Template title="Improve">
      <h1>Rational Design of an Acid-Tolerant PETase Enzyme</h1>
      <p>
        Over the course of our project, we developed several registry parts with new or expanded 
        functionalities. Two were FAST-PETase mutants we developed through rational design. They
        improve upon the original PETase by adapting the enzyme to a lower functional pH, more 
        suitable for use in yeast and other well-characterized and scalable biological chassis.
      </p>
      <p>
        One of our variants, which mutated a catalytic histidine (residue number 237) to an 
        aspartic acid, was based directly on the work of <a href="https://2011.igem.org/Team:Washington/Celiacs/Background" 
        target="_blank" rel="noreferrer noopener"> iGEM Washington in 2011 on lowering the 
        functional pH of Kumamolisin-As</a>. The other variant we designed used a related 
        principle, switching a key residue to a structurally and functionally similar amino acid 
        with a lower pKa.
      </p>
      <p>
        The PETase enzyme is structurally similar to several cutinase proteins, which catalyze the
        breakdown of plant waxes via hydrolysis. These cutinases fit into a class of enzymes called
        serine hydrolases, as does PETase (Han et al., 2017). The active site of PETase consists of
        a catalytic triad: a binding pocket flanked by three amino acids: serine, histidine, and 
        aspartic acid. 
      </p>
      <p>
        Based on a general understanding of the behavior of serine proteases, the mechanism for 
        PET degradation by PETase likely takes place over three general reaction stages:
      </p>
      <ol>
        <li>
          Histidine pulls a hydrogen off of the serine, allowing the serine’s oxygen to attack the 
          PETase carbonyl carbon. The positive charge that forms on the histidine as a result is 
          stabilized through hydrogen bonding with the negatively charged aspartic acid.
        </li>
        <img
          className="d-block mx-auto" 
          src="https://static.igem.wiki/teams/4466/wiki/pages/improve/serine-hydrolase-step-1.png"
          alt="Serine Hydrolase Step 1"
          width="300px" />
        <caption className="mx-auto d-block text-center">Serine Hydrolase Step 1</caption>
        <li>
          The tetrahedral carbon re-forms a carbonyl while the ethyl group leaves as ethylene glycol.
        </li>
        <img 
          className="d-block mx-auto" 
          src="https://static.igem.wiki/teams/4466/wiki/pages/improve/serine-hydrolase-steps-2-3.png"
          alt="Serine Hydrolase Step 2-3"
          width="700px" />
        <caption className="mx-auto d-block text-center">Serine Hydrolase Steps 2 and 3</caption>
        <li>
          A second water molecule binds to the carbonyl, releasing terephthalic acid as the second 
          product and allowing the enzyme to be recycled to its original form (arrow pushing not shown).
        </li>
        <img 
          className="d-block mx-auto" 
          src="https://static.igem.wiki/teams/4466/wiki/pages/improve/serine-hydrolase-step-4.png"
          alt="Serine Hydrolase Step 4"
          width="300px" />
        <caption className="mx-auto d-block text-center">Serine Hydrolase Step 4</caption>
      </ol>
      <p>
        This type of enzyme-mediated reaction pathway is colloquially referred to as a ping-pong 
        mechanism. Another enzyme class that commonly uses ping-pong mechanisms is cysteine 
        hydrolases, which mirror serine hydrolases in their catalytic triads, but use a cysteine, 
        rather than serine, as the initial nucleophile.
      </p>
      <p>
        In order to lower the functional pH of FAST-PETase, we decided to try converting it from 
        a serine hydrolåase to a cysteine hydrolase by mutating residue 160 from Ser to Cys. 
        We hypothesized that this change would cause the protein to operate more effectively 
        at a lower pH, because the hydrolysis reaction is dependent on the deprotonation of the 
        nucleophile, and cysteine deprotonates more easily than serine under acidic conditions.
      </p>
      <p>
        We have validated the structure of this mutant through computational modeling, available 
        in <Link to="/model">Project Modeling</Link>, and are in the 
        process of comparing the efficiencies of the original FAST-PETase and our mutant under 
        low pH experimentally (see <Link to="/results">Results</Link>).
      </p>
    </Template>
  );
}
