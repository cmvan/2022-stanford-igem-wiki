import Template from './Template';

export default function Safety() {
  return (
    <Template title="Safety">
      <h1>Possible Risk from Our Project</h1>
      <p>
        When analyzing the potential risk of our project, it was evident that the biggest threat would be the release of our PETase being introduced into the environment. This could lead to potential replication which then would lead to mass degradation of plastic infrastructure. Especially with relation to our bioreactor, this potential risk increases due to the proximity of our PETase and plastic infrastructure. Another risk taken into consideration is the build up of Terephthalic Acid (TPA) which can create long, eye, and/or skin hazards. 
      </p>

      <h1>Mitigating These Risks</h1>
      <p>
        Taking into consideration these potential dangers, the best mitigation strategy we implemented is that we made sure the yeast strain that we used for our PETase are unable to survive without nutrient supplements. In other words, we implemented intrinsic biocontainment through metabolic auxotrophy. Furthermore, as a further preparation for this risk, the yeast can also be easily destroyed using bleach/chemicals. In addressing risks revolving TPA, we incorporated the TPADO enzyme into our PET degradation system to further degrade TPA byproduct into protocatechuic acid (PCA), an antioxidant commonly found in green tea, thereby eliminating the risk of accumulating TPA. By adopting these strategies the team addressed the risks considered within our project. 
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/safety/auxotrophy.png"
        alt="Auxotrophy"
        width="600px"/>
      <caption className="d-block mx-auto text-center">Auxotrophy</caption>
    </Template>
  );
}
