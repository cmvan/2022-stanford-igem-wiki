import Template from './Template';

export default function Improve() {
  return (
    <Template title="Improve">
      <h1>Rational Design of an Acid-Tolerant PETase Enzyme</h1>
      <p>
        Over the course of our project we developed several Registry parts with new or expanded 
        functionalities. Two were FAST-PETase mutants we developed through rational design. They
        improve upon the original PETase by adapting the enzyme to a lower functional pH, more 
        suitable for use in yeast and other well-characterized and scalable biological chassis.
        One of our variants, which mutated a catalytic histidine (residue number 237) to an 
        aspartic acid, was based directly on the work of iGEM Washington in 2011 on lowering 
        the functional pH of Kumamolisin-As. The other variant we designed used a related 
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
        <li>
          The tetrahedral carbon re-forms a carbonyl while the ethyl group leaves as ethylene glycol.
        </li>
        <li>
        A second water molecule binds to the carbonyl, releasing terephthalic acid as the second 
        product and allowing the enzyme to be recycled to its original form (arrow pushing not shown).
        </li>
      </ol>
      <p>
        This type of enzyme-mediated reaction pathway is colloquially referred to as a ping-pong 
        mechanism. Another enzyme class that commonly uses ping-pong mechanisms is cysteine 
        hydrolases, which mirror serine hydrolases in their catalytic triads, but use a cysteine, 
        rather than serine, as the initial nucleophile. In order to lower the functional pH of 
        FAST-PETase, we decided to try converting it from a serine hydrolase to a cysteine 
        hydrolase by mutating residue 160 from Ser to Cys. We hypothesized that this change would 
        cause the protein to operate more effectively at a lower pH, because the hydrolysis 
        reaction is dependent on the deprotonation of the nucleophile, and cysteine deprotonates 
        more easily than serine under acidic conditions.
      </p>
      <p>
        We have validated the structure of this mutant through computational modeling, available 
        in our Project Modeling tab, and are in the process of comparing the efficiencies of the 
        original FAST-PETase and our mutant under low pH experimentally (see our Results tab).
      </p>
    </Template>
  );
}
