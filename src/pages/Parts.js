import Table from 'react-bootstrap/Table'
import Template from './Template';

export default function Parts() {
  return (
    <Template title="Parts">
      <h1>Parts</h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Designers</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BBa_K4466001</td>
            <td>Signaling</td>
            <td>S. cerevisiae alpha-factor secretion signal</td>
            <td>Phillip Kyriakakis, Savana Huskins</td>
            <td>273 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466002</td>
            <td>Coding</td>
            <td>Saccharomyces cerevisiae Codon Optimized FAST-PETase</td>
            <td>Phillip Kyriakakis, Shreya Vailaya</td>
            <td>792 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466003</td>
            <td>Coding</td>
            <td>FAST-PETase S160C Mutant</td>
            <td>Phillip Kyriakakis</td>
            <td>792 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466004</td>
            <td>Coding</td>
            <td>FAST-PETase H237D Mutant</td>
            <td>Phillip Kyriakakis</td>
            <td>792 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466005</td>
            <td>Coding</td>
            <td>Evolved FAST-PETase</td>
            <td>Gurmenjit Bahia</td>
            <td>792 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466006</td>
            <td>Signaling</td>
            <td>Evolved alpha-factor secretion signal</td>
            <td>Gurmenjit Bahia</td>
            <td>273 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466028</td>
            <td>Plasmid</td>
            <td>pAR-Ec633-trp1 (p*)</td>
            <td>Phillip Kyriakakis, Chang Liu</td>
            <td>7455 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466029</td>
            <td>DNA</td>
            <td>1st homology arm to integrate into OrthoRep p1</td>
            <td>Phillip Kyriakakis</td>
            <td>138 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466030</td>
            <td>DNA</td>
            <td>2nd homology arm to integrate into OrthoRep p1</td>
            <td>Phillip Kyriakakis</td>
            <td>34 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466017</td>
            <td>Composite</td>
            <td>Alpha ss + FAST-PETase</td>
            <td>Gurmenjit Bahia, Savana Huskins, Shreya Vailaya</td>
            <td>1073 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466031</td>
            <td>Composite</td>
            <td>Evolved Alpha ss + FAST-PETase</td>
            <td>Gurmenjit Bahia, Savana Huskins, Shreya Vailaya</td>
            <td>1073 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466022</td>
            <td>Composite</td>
            <td>OrthoRep integration cassette with Ura3, Leu2, mKate2, AmpR and PETase</td>
            <td>Gurmenjit Bahia, Phillip Kyriakakis</td>
            <td>5018 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466027</td>
            <td>Composite</td>
            <td>OrthoRep Integration Cassette with Evolved PETase</td>
            <td>Gurmenjit Bahia, Savana Huskins</td>
            <td>5018 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466032</td>
            <td>Composite</td>
            <td>His-SUMO tag + FAST-PETase S160C Mutant</td>
            <td>Claudia Phillips</td>
            <td>1123 bp</td>
          </tr>
          <tr>
            <td>BBa_K4466033</td>
            <td>Composite</td>
            <td>His-SUMO tag + FAST-PETase H237D Mutant</td>
            <td>Claudia Phillips</td>
            <td>1123 bp</td>
          </tr>
        </tbody>
      </Table>
    </Template>
  );
}
