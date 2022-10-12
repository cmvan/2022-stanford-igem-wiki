import Template from './Template';

export default function Description() {
  return (
    <Template title="Description">
      <h1>This is the Description Page</h1>
      <p>IMAGE OF BOTTLES</p>

      <h3>Motivation</h3>
      <p>
       Everywhere we turn, plastic waste seems to surround us. Plastic pollution in oceans, soils, and food leads to harmful microplastic accumulation in the human body [1]. Microplastics have been shown to cause damage to human cells when they travel around the body to our organs and even fetuses [2]. After noticing the accumulation of plastic waste in our lab and reading about the FAST-PETase developed by UT Austin [3] in April of 2022, our team decided to take action and focus our project in the plastic degradation solution space. Since polyethylene terephthalate (PET) plastics account for approximately 12% of global solid waste [4], the choice to focus on PET was clear to us to make a large impact on global pollution. After further literature review and brainstorming, our team decided to develop a PETase optimized for ideal microbial conditions. Most PETases in the literature are designed for use in a cell-free setting with protein purification that must be done in a lab, but we wanted to express it extracellularly in microbes. A microbe strain that hydrolyzes PET would change the game of plastic waste solutions by making the biodegradation of PET portable, scalable, and cheaper than purified enzymes. To achieve this, we built a PETase secreting platform through a continuous directed evolution system called “OrthoRep” [5]. 
      </p>
      <p>IMAGE DEGRADATION PATHWAY</p>

      <h3>Background</h3>
      <h5>PET-Ase</h5>
      <p>
        A PETase is a plastic degrading enzyme that can hydrolyze PET into the molecules mono-(2-hydroxyethyl)terephthalic acid (MHET), terephthalic acid (TPA), and ethylene glycol (EG). PET hydrolyzation is a chemical reaction that is carried out in the presence of a catalyst and that depolymerizes the PET into its monomers [6]. The first PETase was discovered in a strain of bacteria called Ideonella sakaiensis 201-F6 which was able to metabolize PET as its energy and carbon source [7]. Two other enzymes, MHETase and TPADO, have since been found to further hydrolyse MHET and TPA into the most basic monomers EG and protocatechuate (PCA) [8] [9]. Using all three enzymes in a cocktail can harness this biological pathway to convert PET plastic waste into safe and useful molecules. PCA is a major metabolite of antioxidant polyphenols found in green tea, and has potential as a cancer therapeutic [10]. EG can be used as antifreeze or processed into non-toxic biocompatible compounds through UV light oxidation [11].
      </p>

      <p>IMAGE OF EVOLUTION</p>
      <h5>Directed Evolution</h5>
      <p>
        Directed Evolution is a highly effective protein engineering technique that mimics the process of natural evolution using iterative mutagenesis to screen and/or select for desired gene variations [12]. OrthoRep is a continuous directed evolution platform designed at UC Irvine that utilizes an orthogonal DNA replication system with high mutagenicity for high-throughput continuous evolution of user defined genes in vivo in yeast [5]. Refer to our Contributions Page for a thorough description of how OrthoRep and directed evolution works.
      </p>

      <h5>α-Factor Secretion Signal</h5>
      <p>
        Saccharomyces cerevisiae have an efficient secretory pathway to extracellularly express their alpha-factor mating pheromone. This pathway can also be used in synthetic biology with heterologous expression of forgeign proteins [13]. It uses a preproleader secretion signal to increase production yields when targeting the protein to the extracellular environment [14]. Aza et. al. used site-directed mutagenesis to optimize this secretion signal, making it a better universal signal that can enhance the production of heterologous proteins and improve recombinant enzyme production in S. cerevisiae [14].
      </p>

      <h3>Development Goals</h3>
      <p>
        During our initial literature review, UT Austin’s FAST PETase paper that was published in April 2022 [3] came to mind as their PETase was revolutionary in the search for PETases that would function in practical scenarios. Most previous PETases require very specific reaction conditions to achieve hydrolytic activity, specifically a pH of 8.0 and temperatures around 50 °C [3]. Their FAST PETase hydrolase was created through a structure based machine learning algorithm which yielded a mutant that was able to most quickly depolymerize untreated, amorphous portions of plastic in a larger range of temperatures and pHs. Despite this incredible breakthrough, there is still progress to be made before we reach a PETase that would be scalable and efficient enough for recycling purposes. Through our project Mutation-Optimized Reactor for PET Hydrolysis (MORPH), we hope to continue the progression of creating an efficient PETase that can function in microbes to biodegrade PET waste worldwide. Our project development goal is to further evolve FAST-PETase using OrthoRep in mutating yeast cells, by selecting for greater efficiency at conditions which the microbes prefer. Yeast grow optimally at temperatures and pHs lower than those at which FAST-PETase is most active. Our system will iteratively select for PETase mutants with improved PET hydrolytic activity at 30 °C and pH 6.8, thereby bringing the enzyme up to speed for our desired application in microbial culture conditions.
      </p>
      <p>OPTIMAL YEAST GROWING IMAGE</p>

      <h3>Project Design</h3>
      <h5>Inducing Mutations</h5>
      <p>
        Our project used a strain of Saccharomyces cerevisiae that contains the molecular machinery needed for OrthoRep. The OrthoRep directed evolution system only works in S. cerevisiae, and we codon-optimized our genes for this species. In these cells, the p1 OrthoRep plasmid is the target for a highly error-prone DNA polymerase, which causes mutations and subsequent evolution of any genes encoded on p1. Thus, we wanted to integrate the FAST-PETase gene into this plasmid. We also included the α-factor secretion signal in front of this gene so the enzyme would be expressed extracellularly. When transcribed together, the enzyme is expressed and secreted into the media, where it can degrade PET molecules into its monomers. This is important because most plastic waste products are too large to diffuse into the cell, and the enzyme needs to come into contact with the plastic for degradation to occur. We integrated a cassette with these two sequences into p1 to begin creating genetic variants of FAST-PETase.
      </p>
      <p>MOLECULAR DESIGN IMAGE</p>
      
      <h5>Mutant Screening</h5>
      <p>
        In one culture of our OrthoRep yeast, each cell may carry a different mutated FAST-PETase gene. We needed a high-throughput screening method to select for yeast that had evolved more effective PETases. We designed a method that works with a 96 well plate thus allowing for 96 individual cultures that could each branch into a unique evolutionary path. The final design for our screening device has three layers: on top, a gasket into which OrthoRep yeast culture samples are pipetted. On the bottom, a 96-well plate. A thin film of PET plastic is sandwiched between the gasket and the plate. The gasket keeps cultures separate and in place atop the PET film. Read more about this method on our Engineering Success page.
      </p>
      <p>GASKET WELL IMAGE</p>
      <p>
        For a yeast strain to be selected, it must successfully break down the PET film and drop down into the well. The OD600 of the wells in the plate can be measured over time using a plate reader or Nanodrop device, allowing a researcher to directly observe the rate at which different yeast strains break through the film. The first mini culture to break through carries the most active enzymes, so it is then grown up into a larger culture, and again divided into another 96 well gasket screening.This iterative screening process places selective pressure on enzymes to become more and more efficient at hydrolyzing PET under yeast growing conditions.
      </p>
      <p>ENZYME MUTANT PNG</p>

      <h5>Optimized Enzyme</h5>
      <p>
        Once we obtain a mini culture of cells with a PETase variant that is fit enough for our liking, we miniprep the culture and sequence the p1 plasmid. We can then compare the mutated sequence with the original plasmid the cells started with before evolving. Mutations made will give us insight into potential residues and protein changes that contribute to the increased hydrolytic activity. In the OrthoRep yeast cells the sequence will continue to mutate, but if we are happy with it we can clone it into regular yeast cells. We can then run in vivo and in vitro tests comparing the optimized PETase’s degradation speed with typical PETase degradation speed, in order to confirm that the enzyme has gotten faster at degrading PET film. Eventually we want to test the enzyme of regular post-consumer PET products, such as food packaging and water bottles.
      </p>

      <h5>Applications</h5>
      <p>
        One of our goal metrics is to be able to degrade a plastic water bottle in a culture of yeast cells expressing our optimized enzyme. Once achieved, we want to scale it up into a bioreactor that can degrade real PET waste. Read more about this on our Proposed Implementation page.
      </p>
      <p>BIOREACTOR SOLVES POLLTUION IMAGE</p>

      <h4>References</h4>
      <ol className="references">
        <li>
          Mohamed Nor, N. H., Kooi, M., Diepens, N. J., & Koelmans, A. A. (2021). Lifetime accumulation of microplastic in children and adults. Environmental Science & Technology, 55(8), 5084–5096. https://doi.org/10.1021/acs.est.0c07384
        </li>
        <li>
          Microplastics cause damage to human cells, study shows | Plastics | The Guardian. (n.d.). Retrieved October 11, 2022, from https://www.theguardian.com/environment/2021/dec/08/microplastics-damage-human-cells-study-plastic
        </li>
        <li>
          Lu, H., Diaz, D. J., Czarnecki, N. J., Zhu, C., Kim, W., Shroff, R., Acosta, D. J., Alexander, B. R., Cole, H. O., Zhang, Y., Lynd, N. A., Ellington, A. D., & Alper, H. S. (2022). Machine learning-aided engineering of hydrolases for pet depolymerization. Nature, 604(7907), 662–667.
        </li>
        <li>
          George, N., & Kurian, T. (2014). Recent Developments in the Chemical Recycling of Postconsumer Poly(ethylene terephthalate) Waste. Industrial & Engineering Chemistry Research, 53(37), 14185–14198. https://doi.org/10.1021/ie501995m
        </li>
        <li>
          Ravikumar, A., Arzumanyan, G. A., Obadi, M. K. A., Javanpour, A. A., & Liu, C. C. (2018). Scalable, Continuous Evolution of Genes at Mutation Rates above Genomic Error Thresholds. Cell, 175(7), 1946-1957.e13. https://doi.org/10.1016/j.cell.2018.10.021
        </li>
        <li>
          Stanica-Ezeanu, D., & Matei, D. (2021). Natural depolymerization of waste poly(ethylene terephthalate) by neutral hydrolysis in marine water. Scientific Reports, 11(1), 4431. https://doi.org/10.1038/s41598-021-83659-2
        </li>
        <li>
          Yoshida, S., Hiraga, K., Takehana, T., Taniguchi, I., Yamaji, H., Maeda, Y., Toyohara, K., Miyamoto, K., Kimura, Y., & Oda, K. (2016). A bacterium that degrades and assimilates poly(ethylene terephthalate). Science, 351(6278), 1196–1199. https://doi.org/10.1126/science.aad6359
        </li>
        <li>
          Knott, B. C., Erickson, E., Allen, M. D., Gado, J. E., Graham, R., Kearns, F. L., Pardo, I., Topuzlu, E., Anderson, J. J., Austin, H. P., Dominick, G., Johnson, C. W., Rorrer, N. A., Szostkiewicz, C. J., Copié, V., Payne, C. M., Woodcock, H. L., Donohoe, B. S., Beckham, G. T., & McGeehan, J. E. (2020). Characterization and engineering of a two-enzyme system for plastics depolymerization. Proceedings of the National Academy of Sciences of the United States of America, 117(41), 25476–25485. https://doi.org/10.1073/pnas.2006753117
        </li>
        <li>
         Kincannon, W. M., Zahn, M., Clare, R., Lusty Beech, J., Romberg, A., Larson, J., Bothner, B., Beckham, G. T., McGeehan, J. E., & DuBois, J. L. (2022). Biochemical and structural characterization of an aromatic ring-hydroxylating dioxygenase for terephthalic acid catabolism. Proceedings of the National Academy of Sciences of the United States of America, 119(13), e2121426119. https://doi.org/10.1073/pnas.2121426119
        </li>
        <li>
          Acquaviva, R., Tomasello, B., Di Giacomo, C., Santangelo, R., La Mantia, A., Naletova, I., Sarpietro, M. G., Castelli, F., & Malfa, G. A. (2021). Protocatechuic Acid, a Simple Plant Secondary Metabolite, Induced Apoptosis by Promoting Oxidative Stress through HO-1 Downregulation and p21 Upregulation in Colon Cancer Cells. Biomolecules, 11(10). https://doi.org/10.3390/biom11101485
        </li>
        <li>
          McGinnis, B. D., Adams, V. D., & Middlebrooks, E. J. (2001). Degradation of ethylene glycol using Fenton's reagent and UV. Chemosphere, 45(1), 101–108. https://doi.org/10.1016/s0045-6535(00)00597-x
        </li>
        <li>
          Wang, Y., Xue, P., Cao, M., Yu, T., Lane, S. T., & Zhao, H. (2021). Directed evolution: methodologies and applications. Chemical Reviews, 121(20), 12384–12444. https://doi.org/10.1021/acs.chemrev.1c00260
        </li>
        <li>
          Brake, A. J., Merryweather, J. P., Coit, D. G., Heberlein, U. A., Masiarz, F. R., Mullenbach, G. T., Urdea, M. S., Valenzuela, P., & Barr, P. J. (1984). Alpha-factor-directed synthesis and secretion of mature foreign proteins in Saccharomyces cerevisiae. Proceedings of the National Academy of Sciences of the United States of America, 81(15), 4642–4646. https://doi.org/10.1073/pnas.81.15.4642
        </li>
        <li>
          Aza, P., Molpeceres, G., de Salas, F., & Camarero, S. (2021). Design of an improved universal signal peptide based on the α-factor mating secretion signal for enzyme production in yeast. Cellular and Molecular Life Sciences, 78(7), 3691–3707. https://doi.org/10.1007/s00018-021-03793-y
        </li>
      </ol>
    </Template>
  );
}
