import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'
import Template from './Template';
import '../stylesheets/pages/contribution.scss';

export default function Contribution() {
  return (
    <Template title="Contribution">
      <h1>OrthoRep</h1>
      <h2>Introduction</h2>
      <h3>The Basics of Directed Evolution</h3>

      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/contribution/directed-evolution-cycle.jpeg"
        alt="Directed Evoluiton Cycle"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Directed Evolution iterative cycle. Image Source Wang et. al 2021 [1]</caption>

      <p>
        "Directed evolution aims to expedite the natural evolution process of biological molecules and systems” [1] in a lab setting so that synthetic biologists and protein engineers alike can tailor and optimize molecules to have specific desired qualities. Two components are needed to perform directed evolution: <strong>1) iterative rounds of gene diversifications</strong> and <strong>2) library screening/selection.</strong> There are many ways to enact these two processes.
      </p>
      <ul>
        <li>
          For instance, focused mutagenesis vs. random mutagenesis both contribute to genetic diversification. Focused mutagenesis targets a specific area or residue of a gene, while random mutagenesis can lead to changes in any base pair across an entire gene of interest (GOI). 
        </li>
        <li>
          Typical random mutagenesis has a moderate mutation rate of 10-4 to 10-3 substitutions per replicated base [1]. A fast mutation rate is usually desired because it will lead to quicker changes that you want to see in a gene’s product, and thus a quicker evolutionary path towards a desired end phenotype. A common way to achieve mutations is by using a “low-fidelity” DNA polymerase (DNAP) that makes mistakes when replicating the gene.
        </li>
        <li>
          Mutagenesis can also be done in vitro or in vivo. In vitro includes “iterative cycles of gene diversification, transfection, screening, and isolation, which are labor and time intensive” [1]. In vivo mutagenesis in living cells avoids these laborious steps, but the key is to link the desired phenotype with cell growth or with a method of high-throughput screening. In vivo mutagenesis has been limited by the problem of introducing deleterious mutations not just in the GOI, but also in the host genome, resulting in genetic instability and debilitated cells. This is where OrthoRep comes in…
        </li>
      </ul>

      <h3>What is OrthoRep?</h3>
      <p>Our project used a random mutagenesis method of directed evolution called OrthoRep to evolve our GOI that encodes for the FAST-PETase enzyme. Designed by Chang Liu et. al. at UC Irvine, OrthoRep is a molecular biology system that allows for “Scalable, Continuous Evolution of Genes at Mutation Rates above Genomic Error Thresholds” [2]. OrthoRep functions in living S. cerevisiae cells as they grow and divide. While OrthoRep rapidly mutates a GOI, you can apply certain selective pressures on your cells to push the evolution of that gene towards customizable phenotypes of your choice. This can be applied to any gene of your choosing that could be expressed in S. cerevisiae, so its potential for use in iGEM projects is limitless. For example, one could reprogram ligand specificity of biosensors [3], optimize promoters, or improve an enzyme’s efficiency. The advantage of OrthoRep over other directed evolution methods is that you can rapidly evolve biomolecules in a high-throughput setting. This is because it works continuously in vivo, with more and more mutations in the GOI added with each cell division. By designing an efficient selection method for the genetically diverse population of cells, one can essentially automate the testing of large numbers of mutant biomolecules in order to select for characteristics of a desired evolved version.</p>
      
      <h2>Our Contribution</h2>
      <p>We believe we are the first iGEM team to successfully implement OrthoRep in their project, so we wanted to provide a comprehensive guide for future teams so they may also find success in using it to evolve their desired biomolecules. Since there is abundant potential for applications, our goal is to help others tap into this cool system so that many more innovative synthetic biology projects may be realized! OrthoRep is a system with a variety of moving parts so it can be complicated to implement, but we hope our tips and tricks will make it accessible to anyone who has curiosity and determination. On this page we will guide you through:</p>
      <ul>
        <li>How OrthoRep works</li>
        <li>The steps we took to implement OrthoRep</li>
        <li>Potential Selection Methods</li>
      </ul>

      <h3>How OrthoRep Works</h3>
      
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/contribution/orthogonal-replication.png"
        alt="Orthogonal Replication"
        width="600px"
      />
      <caption className="d-block mx-auto text-center"> A diagram showing how orthogonality prevents host genome mutations.</caption>

      <p>The special mechanism of OrthoRep involves the expression of a highly error-prone orthogonal DNA polymerase that will specifically replicate and mutate an orthogonal plasmid containing the gene of interest. Orthogonality is the key to avoiding host genome mutations that would normally disrupt an in vivo mutagenesis method. Orthogonality in synthetic biology describes the inability of two biomolecules to interact with one another. In this case, the error-prone polymerase does not interact with or induce mutations in the host genome. It only replicates and mutates the orthogonal plasmid that we want to evolve. This specificity is attributed to protein-primed replication: the 5′ end of the orthogonal plasmid is covalently linked to a terminal protein (TP), which serves as a replication origin for the error-prone polymerase. This cytoplasmic plasmid system was originally found in Kluveromyces lactis [4].</p>
      
      <h4>Molecular Machinery of the System</h4>

      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/contribution/orthorep-diagram.jpg"
        alt="Orthogonal Replication"
        width="600px"
      />
      <caption className="d-block mx-auto text-center"> A diagram of the OrthoRep system and its molecular machinery. Image source Ravikumar et al. 2018 [2].</caption>

      <ul>
        <li>TP-DNAP1: A highly error-prone orthogonal DNA polymerase that only replicates the orthogonal p1 plasmid. This is what creates mutations in the GOI at a rapid rate of 10-5 substitutions per base. It uses terminal proteins as origins to begin DNA replication.</li>
        <li>p*: A nuclear plasmid that encodes for the expression of TP-DNAP1. This plasmid is localized in the nucleus, so it will not be mutated by TP-DNAP1. The specific version of this plasmid that we used is pAR-Ec633, which can be found on Addgene #130873 [2]. In our implementation we added a TRP1 selection marker to this plasmid. We registered our version as part BBa_K4466028 in the registry.</li>
        <li>p1: The orthogonal cytoplasmic plasmid containing the GOI that is replicated and mutated by TP-DNAP1. It is a linear, high-copy, double-stranded plasmid that is primed with a terminal protein. </li>
        <li>p2: An accessory orthogonal cytoplasmic plasmid that maintains itself and p1. It does this by encoding for all of the accessory components required for replication and transcription (because they don’t normally exist outside of the nucleus). It is also a linear, high-copy, double-stranded plasmid that is primed with a terminal protein. It encodes for a regularly functioning TP-DNAP2 that only replicates p2 according to specific terminal proteins.</li>
        <li>The OrthoRep Yeast strain that contains p1 and p2. We obtained this strain from the creators of OrthoRep at UC Irvine [2].</li>
        <li>Integration cassette: Once you have a yeast strain with the standard p1 and p2, you will need to insert your GOI into p1 to begin its mutation and evolution. To do this, we built a genetic integration cassette containing our GOI, the selection marker LEU2, and homology arms matching p1 to allow for integration. Our full integration cassette is documented on the registry as part BBa_K4466022.</li>
      </ul>

      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/contribution/integration-into-p1.png"
        alt="OrthoRep Integration into P1"
        width="600px"
      />
      <caption className="d-block mx-auto text-center"> Integration of cassette into p1 by homology arms</caption>

      <h3>Steps Taken to Implement OrthoRep</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Build the integration cassette for integration into p1.</Accordion.Header>
          <Accordion.Body>
          <ol type="A">
          <li>Include the gene(s) of interest and a yeast selection marker.</li>
          <ul>
            <li>
              Tip: Adding the 10B2 Promoter in front of the GOI and a poly(A) tail behind it can help achieve maximal protein expression of the gene [5]. We included a 75 nucleotide poly(A) tail.
            </li>
          </ul>
          <li>Create homology arms add overhangs to the cassette with primers and PCR.</li>
          <ul>
            <li>
              The 1st homology arm is registered as part <a href="http://parts.igem.org/Part:BBa_K4466029" target="_blank" rel="noreferrer">BBa_K4466029</a>. 
              It should go in front of the cassette.
            </li>
            <li>
              The 2nd homology arm is registered as part <a href="http://parts.igem.org/Part:BBa_K4466030" target="_blank" rel="noreferrer">BBa_K4466030</a>. 
              It should go behind the cassette.
            </li>
          </ul>
          <li>Restriction digest the integration cassette with SCAI-HF before integration.</li>
        </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Make electrocompetent yeast cells using the yeast strain that contains p1 and p2.</Accordion.Header>
          <Accordion.Body>
            No additional details :D
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Transform the competent cells with the p* plasmid.</Accordion.Header>
          <Accordion.Body>
          <ol type="A">
            <li>Perform an outgrowth so the cells have time to make the amino acids: incubate in regular YPD media for 1 hour.</li>
            <li>Wash out YPD twice with 1mL sorbitol.</li>
            <li>Then plate on the proper selection plate for p*. Ex. Our p* plasmid has TRP1 so we plated on -Trp plates.</li>
          </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Grow up a colony from the first plate of transformed yeast. Make them electrocompetent again and transform the yeast with the enzyme-digested integration cassette. The homology arms should integrate it into p1.</Accordion.Header>
          <Accordion.Body>
          <ol type="A">
            <li>Perform an outgrowth so the cells have time to make the amino acids: incubate in regular YPD media for 1 hour.</li>
            <li>Wash out YPD twice with 1mL sorbitol.</li>
            <li>Then plate on a double selection plate for p1 and p*.</li>
          </ol>
          <p>Tip for step 4C: You must use two different selection markers for p1 and p* in order to have a double selection plate. Ex) We used -Leu -Trp plates according to our plasmid design.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Pick a colony and grow a yeast culture in double selection synthetic media.</Accordion.Header>
          <Accordion.Body>
          The cells will already be mutating the p1 plasmid at this point.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Begin your Selection Method.</Accordion.Header>
          <Accordion.Body>
          No additional notes :D
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Potential Selection Methods</h3>
      <p>
        Once you have a culture of mutating yeast, you have accomplished the 1st part of directed evolution: iterative rounds of gene diversifications. Now you need to design the 2nd part: library screening/selection of the evolving biomolecule. The design will depend on what phenotype you want to select for, but it should include the repeated seeding of many smaller independent cultures from the initial culture. This causes multiple lines or branches of evolution to occur, making it more likely to find a branch that will evolve into the desired phenotype. A way to screen all these cultures for the presence of the desired trait will be project-specific, and will require creativity to make it efficient and high-throughput. Here are some examples of selection methods you might use:
      </p>
      <ul>
        <li>
          Our method was a physical barrier that only the best cultures could pass through. 
          Learn more about this on our <Link to="\engineering">Engineering Success</Link> page.
        </li>
        <li>
          Cell growth selection: design so that only cells expressing your evolved gene can access or utilize a food source
        </li>
        <li>
          Cell death selection: In the URA3 / 5-FOA media selection system, 5-FOA is converted by the URA3 gene to a toxic compound. Link the improvement of your GOI to the disruption or deletion of URA3, so that only the improving mutants survive in the culture.
        </li>
      </ul>
      <p>
        After selecting a culture that has evolved to express the desired phenotype, grow it up and repeat the selection process of dividing it into smaller cultures and screening them again. This will gradually apply a selective pressure to further improve your biomolecule in the direction of your choice. 
      </p>

      <h2>Other Contributions</h2>
      <h3>AlphaFold Downloader</h3>
      <p>
      This summer, the AlphaFold Structure Database released 200 million new computer-generated protein structures, expanding the sample space of all known protein structures twenty-fold. To take advantage of this massive new library of proteins, we developed an automated web scraper that accepts a list of Uniprot IDs and downloads the most recent structural PDB files for each protein in the list from the online AlphaFold database. The program is flexible and light, and can be adjusted to download files from any online database. Its download rate is optimized to reduce 429 request errors from the AlphaFold website. As part of the modeling component of our project, we used the program to download PDB files for over 2,500 Uniprot IDs in a single run. We have released this program in our team’s Software Gitlab for use by any future team or other research group, including an example input list and output data for a large-scale protein download run.
      </p>

      <h3>Legacy</h3>
      <p>
        After the virtual years during COVID-19, the Stanford iGEM team had lost a lot of guidance/critical instructions for future iGEM teams. As the first team back, the Stanford 2022 iGEM team made it one of its missions to leave behind a drive of protocols for future teams to rely on. This included finance, logistics, lab processes, and outreach protocols based on guidelines and lessons we learned from our mistakes. We hope to set up next year’s team for a smooth transition that leads to success.
      </p>

      <h4>References</h4>
      <ol className="references">
        <li>
          Wang, Y., Xue, P., Cao, M., Yu, T., Lane, S. T., & Zhao, H. (2021). Directed evolution: methodologies and applications. <i>Chemical Reviews</i>, <i>121</i>(20), 12384–12444. https://doi.org/10.1021/acs.chemrev.1c00260 
        </li>
        <li>
         Ravikumar, A., Arzumanyan, G. A., Obadi, M. K. A., Javanpour, A. A., & Liu, C. C. (2018). Scalable, Continuous Evolution of Genes at Mutation Rates above Genomic Error Thresholds. Cell, 175(7), 1946-1957.e13. https://doi.org/10.1016/j.cell.2018.10.021 
        </li>
        <li>
          Javanpour, A. A., & Liu, C. C. (2021). Evolving Small-Molecule Biosensors with Improved Performance and Reprogrammed Ligand Preference Using OrthoRep. ACS Synthetic Biology [Electronic Resource], 10(10), 2705–2714. https://doi.org/10.1021/acssynbio.1c00316 
        </li>
        <li>
          Ravikumar, A., Arrieta, A., & Liu, C. C. (2014). An orthogonal DNA replication system in yeast. Nature Chemical Biology, 10(3), 175–177. https://doi.org/10.1038/nchembio.1439
        </li>
        <li>
          Zhong, Z., Ravikumar, A., & Liu, C. C. (2018). Tunable expression systems for orthogonal DNA replication. ACS Synthetic Biology [Electronic Resource], 7(12), 2930–2934. https://doi.org/10.1021/acssynbio.8b00400
        </li>
      </ol>

    </Template>
  );
}
