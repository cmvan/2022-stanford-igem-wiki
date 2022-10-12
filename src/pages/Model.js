import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Template from './Template';

export default function Model() {
  return (
    <Template title="Model">
      <h1>Project Modeling</h1>
      <p>
      We used two major models as part of our project: a protein model and a set of phylogenies. We have chosen to share our process in great detail to make our work more reproducible, and to point out stumbling blocks that may be relevant to anyone else attempting this type of modeling. We carried out much of this project in web servers, which are accessible to most people with some academic or institutional affiliation.
      </p>

      <h2>Protein Modeling and Docking</h2>
      <p>
      In structural biology, “docking” is a computational process in which a protein is fitted to some other structure (typically a ligand, small molecule, other protein) in accordance with biochemical and mechanical principles. Docking can be used as a tool for drug discovery, for identifying amino acids that are relevant to the binding affinities of a protein, and for estimating the bond energy of a protein-ligand complex. We chose to use docking to qualitatively evaluate the binding affinity of our rational design PETase mutants to PET plastic as a way of validating our designs. 
      </p>

      <h3>The Docking Process</h3>
      <h4>Preparing the Foundational Protein Structure File</h4>
      <p>
      To model our foundational PETase, we started with a solved crystal structure from the Protein Data Bank (PDB). The PDB is a public repository for protein structures that have been discovered experimentally. The PDB has its own filetype, which is designed to store spatial and structural information about proteins and other biomolecules. PDB files can be used to construct 3D models of proteins, like the one shown below.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/model/spinning-protein.gif"
        alt="spinning protein"
        width="600px"
      />
      <caption className="d=block mx-auto text-center">Spinning Protein</caption>

      <p>
      Fortunately, there are several high-quality PETase structures available in the PDB. We chose one that modeled FAST-PETase specifically. While the resolution, Ramachandran angles, and clashscores for the model suggested that it was accurate, the protein structure required a few tweaks in preparation for docking. In particular, one amino acid near the active site required repositioning and the file needed to be edited and reformatted.
      </p>
      <p>
      Aligning the 7SH6 with a wild-type (WT) PETase structure showed that a key tryptophan residue was not in the binding conformation in the FAST-PETase pdb file, but rather in an inactive conformation (Han et al. 2017). Using the 3-button Editing tool in PyMOL, we altered the conformation of the tryptophan to better match the binding sidechain angles.
      </p>

      <img 
        className="d-block mx-auto text-center"
        src="https://static.igem.wiki/teams/4466/wiki/pages/model/tryptophanbefore.png"
        alt="Tryptophan Before"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Tryptophan Before</caption>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/model/tryptophanafter.png"
        alt="Tryptophan After"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Tryptophan After</caption>

      <p>
      We initially intended to use HADDOCK as our docking software of choice, as it’s widely available for use through a very user-friendly <a href="https://wenmr.science.uu.nl/haddock2.4/" target="_blank" rel="noreferrer noopener">web server</a>. However, the HADDOCK server is unable to take in precise data about the structures of ligands, and the local version of the software, which allows more parameters to be entered, was not compatible with the technology available to the team while modeling was underway. As a result, we were unable to carry out docking to the extent that we hoped. In the future, we would like to conduct docking experiments between PET and PETase over a range of pH values and plot the resultant dissociation constant estimates.
      </p>

      <h4>Creating and Validating Mutant Structure Files</h4>
      <p>
      As part of our two-pronged approach to engineering the PETase protein, we used rational design methods to select two point mutations that we predicted would improve the activity of FAST-PETase at low pH levels. More information on the process of creating these mutants can be found on our <Link to="/improvement">Improvement of an Existing Part</Link> page.
      </p>
      <p>
      To dock our rational design mutants, we first needed to create versions of the FAST-PETase PDB file that included the mutations. To do this, we used the Mutagenesis Wizard in PyMOL to edit the 7SH6 structure. We attempted to choose conformations for the replacement amino acids that positioned them similarly to the originals. Neither of the mutant amino acids had any notable clashes in these positions.
      </p>
      <p>
      In the case of the serine-to-cysteine mutation within the catalytic triad, we were concerned that the new cysteine would form unwanted disulfide bonds. When multiple cysteine residues exist in the same protein structure, they commonly undergo oxidation reactions to form strong covalent bonds with one another. PETase has several of these linkages, termed disulfide bonds, and we were concerned that the new cysteine in our mutant would link to another cysteine, disrupting the entire structure of the protein and completely shutting down its catalytic activity. The Mutagenesis Wizard in PyMOL is very useful for editing .pdb files, but it does not include features to calculate major topographical changes to the protein.
      </p>
      <p>
      To assess the possibility of major conformational alterations to the protein, we modeled our mutants using RoseTTAFold. RoseTTAFold is currently one of the two major protein-modeling software programs used by structural biologists, alongside AlphaFold. Using the <a href="https://robetta.bakerlab.org/" target="_blank" rel="noreferrer noopener">Robetta servers</a> available from the Baker Lab, we submitted both of our designed mutants for modeling, along with FAST-PETase as a control. 
      </p>
      <p>
      We found that the models for our mutants look quite similar to the model for FAST-PETase. 
      </p>
      
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/model/160-rosetta.png"
              alt="Tryptophan After"
              width="400px"
            />
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/model/237-rosetta.png"
              alt="Tryptophan After"
              width="400px"
            />
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/model/7sh6-rosetta.png"
              alt="Tryptophan After"
              width="400px"
            />
          </Col>
        </Row>
      </Container>
      <caption className="d-block mx-auto text-center">From left to right: the original FAST-PETase, the S160C mutant, and the H237D mutant. The color of the protein cartoon represents the confidence score provided by the modeling software for that region of the protein. Cooler colors represent greater confidence from RoseTTAFold.</caption>
      
      <p>
      One limitation to both RoseTTAFold and AlphaFold is their reliance on extrapolation from a relatively small dataset. Both software programs use neural networks trained from the experimental data in the PDB. Because both of our mutants involve changes to a highly-conserved catalytic triad, it’s unlikely that there are any files in the PDB with very similar structures to the mutants. Therefore, the experimental data from which RoseTTAFold’s models are built is biased to produce a model with rigid conformations that don’t easily move in response to mutations.
      </p>

      <h2>PETase Phylogenies by Sequence and Structure</h2>
      <p>The process by which PETase evolved in Ideonella sakaiensis is not well-understood, and the enzyme appears to only have close homology to a few proteins. The lack of PETase-related proteins known in nature is unfortunate, as it limits the sample space for experimentation and characterization around PETase. That said, in order to better understand the structure and behavior of PETase while carrying out our rational design work, we decided to compare it to a variety of other proteins through a set of phylogenies. The first type of phylogeny we created was a fairly standard construction based on differences in amino acid sequence. The second phylogeny was more unusual: it was constructed based on the structures of the sequence-related proteins, and relied on exciting advances in the field of computational protein modeling. The phylogenetic component of our modeling work was based heavily on the procedures described in “Structure-based phylogeny identifies avoralstat as a TMPRSS2 inhibitor that prevents SARS-CoV-2 infection in mice” by Sun et al. (2021) [1], from which the code for 3DPhyloFold was borrowed (DOI 10.17632/kk3gkzdsbf.2.). </p>

      <h3>Sequence Phylogeny</h3>
      <p>
      Sequence phylogenies compare the sequences of DNA or protein molecules to each other in order to guess at the biomolecule’s evolutionary lineage. These can provide useful information about the relationships between different proteins, and even hint at the mechanistic and physical traits of related proteins. To find a set of proteins with some similarity to PETase, we used the HMMER web server, which uses hidden Markov model analysis to thoroughly search the entire tree of life for sequence analogs of the protein of interest. We received over 2,500 Uniprot IDs from HMMER, but cut down our list to the top 74 most similar proteins. We created a multiple sequence alignment in BLAST and used IQ-Tree web server to generate the phylogenetic tree. We let IQ-Tree choose the most effective tree-making method, which was LG+F+I+G4, and ran 1,000 replicates. Using the data from IQ-Tree, we created the phylogenetic data display in MEGA-X. 
      </p>

      <iframe title="Sequence Phylogeny" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/pages/model/sequence-phylogeny-top75.pdf"></iframe>
      <p>
      This phylogeny is interesting, but not totally surprising. The closest sequence relationship that the I. sakaiensis PETase has is one to another PETase protein, from Rhizobacter gummiphilus. These two proteins are known to have different electric behavior on their surfaces, however, which affects their reactivity (Sagong et al. 2021).
      </p>

      <h3>Structural Phylogeny</h3>
      <p>
      For the structural phylogeny element of our modeling work, we first had to collect structures for the 75 most similar proteins from the sequence phylogeny. When we initially went looking for these structures, we realized quickly that there were not nearly enough files in the PDB to create any meaningful structural relationships related to PETase. However, shortly after we came to this conclusion, AlphaFold released 200 million new computationally-modeled protein structures. In order to take advantage of this incredible new resource, we wrote a program that could take a list of protein IDs and use it to download the latest AlphaFold structures for those proteins.
      </p>
      <p>
      After obtaining the AlphaFold structures, we used PFam and a part of the 3DPhyloFold code to isolate the homologous domain (DLH) that is shared between PETase and the other proteins, and then conducted automated structural alignments in Pymol across the DLH domains of all 75 proteins to create a structural dissimilarity matrix (DSM). DSMs can be used to create phylogenetic trees, so we used MEGA-X to create a structural tree to match the sequence-based phylogeny.
      </p>
      <iframe title="Structural Phylogeny" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/pages/model/structural-phylogeny-top75-sheet.pdf"></iframe>

    </Template>
  );
}
