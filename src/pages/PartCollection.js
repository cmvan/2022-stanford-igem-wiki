import Table from 'react-bootstrap/Table'
import Template from './Template';

export default function PartCollection() {
  return (
    <Template title="Part Collection">
      <h1>OrthoRep Parts Collection</h1>
      <p>
        Here we present our collection of OrthoRep parts. It contains all the molecular machinery needed for the cloning and transformation steps when implementing OrthoRep [1], a novel system of continuous directed evolution in yeast cells. This collection is an essential part of our contribution to future iGEM teams. Please refer to the <a href="https://2022.igem.wiki/stanford/contribution"><strong>Contribution</strong></a> page for explanations on how others can use OrthoRep to evolve any gene of their choosing and details on how to use these parts.
      </p>
        <h3 className="space-above">Our Collection</h3>
        <div className="part-table">
        <Table hover responsive>
          <thead>
            <tr>
              <th>Part Number</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="http://parts.igem.org/Part:BBa_K4466028" target="_blank" rel="noreferrer noopener">BBa_K4466028</a></td>
              <td>pAR-Ec633-trp1</td>
              <td>This is the p* plasmid that encodes for the highly error prone TP-DNAP1. The entire plasmid should be transformed into the cells.</td>
            </tr>
            <tr>
              <td><a href="http://parts.igem.org/Part:BBa_K4466029" target="_blank" rel="noreferrer noopener">BBa_K4466029</a></td>
              <td>1st homology arm to integrate into OrthoRep p1</td>
              <td>This is a short sequence that should be cloned somewhere in front of your integration cassette. It allows for integration of your gene into the p1 OrthoRep plasmid because it matches a sequence in p1.</td>
            </tr>
            <tr>
              <td><a href="http://parts.igem.org/Part:BBa_K4466030" target="_blank" rel="noreferrer noopener">BBa_K4466030</a></td>
              <td>2nd homology arm to integrate into OrthoRep p1</td>
              <td>This is a short sequence that should be cloned somewhere in back of your integration cassette. It allows for integration of your gene into the p1 OrthoRep plasmid because it matches another sequence in p1.</td>
            </tr>
            <tr>
              <td><a href="http://parts.igem.org/Part:BBa_K4466022" target="_blank" rel="noreferrer noopener">BBa_K4466022</a></td>
              <td>OrthoRep integration cassette with Ura3, Leu2, mKate2, AmpR and PETase</td>
              <td>This is an example of the DNA sequence (containing your gene of interest) that will integrate into the p1 plasmid and begin to mutate. The homology arms (parts BBa_K4466029 and BBa_K4466030) should be cloned on either side of this integration cassette part. This is a composite part, and for our project we included some selection markers with our genes of interest. Our genes of interest were Alpha SS+PETase (Part BBa_K4466017), so one would substitute in a different part you wish to evolve for this. </td>
            </tr>
            <tr>
              <td><a href="http://parts.igem.org/Part:BBa_K4466027" target="_blank" rel="noreferrer noopener">BBa_K4466027</a></td>
              <td>OrthoRep Integration Cassette with Evolved PETase</td>
              <td>This is another version of our integration cassette after some mutation has occurred due to replication by TP-DNAP1 in yeast cells. Its purpose is to provide an example of how genes in the integration cassette will begin to evolve once integrated into p1 in the OrthoRep yeast strain.</td>
            </tr>
          </tbody>
        </Table>
      </div>
      
      <h4 className="space-above">References</h4>
      <ol className="references">
        <li>
          Ravikumar, A., Arzumanyan, G. A., Obadi, M. K. A., Javanpour, A. A., & Liu, C. C. (2018). Scalable, Continuous Evolution of Genes at Mutation Rates above Genomic Error Thresholds. <i>Cell, 175(7)</i>, 1946-1957.e13. <a href="https://doi.org/10.1016/j.cell.2018.10.021" newTab>https://doi.org/10.1016/j.cell.2018.10.021</a>
        </li>
      </ol>
    </Template>
  );
}
