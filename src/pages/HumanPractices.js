import Accordion from 'react-bootstrap/Accordion'
import Template from './Template';

export default function HumanPractices() {
  return (
    <Template title="Human Practices">
      <h1>Integrating Human Practices into Our Research</h1>
      <h2>Introduction</h2>
      <p>
        MORPH’s human practice initiative played a crucial role in shaping the scope of our project, its social, economical, and environmental implications, and opportunities for further development. It involved a survey, a river cleanup activity, and interviews with several experts in the scientific community to gather valuable insights, which enabled our team to select plastic pollution as the project theme and guided our approach to the development and application of a potential solution to address the problem. Let us take you on our journey to understand how our engagements with various stakeholders MORPHed our project design and goals over time.
      </p>

      <h3>Tokyo River Friends</h3>
      <p>
        We felt it would be valuable to get a first-hand perspective of the plastic pollution crisis.  Over the summer, one of the international students in our team joined a weekly coastal cleanup session in Japan with an organization called Tokyo River Friends. There were 9 other volunteers alongside the organization’s founder, James Gibbs. Together, 71 trash bags were collected, of which 22 bags consisted of PET bottles. According to Mr. Gibbs, after collection, the trash gets sent off to the Edogawa Japan Ward for burning and recycling purposes.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            Throughout the cleanup, we were able to have an open discussion with Mr. Gibbs and the volunteers on the issue of plastic pollution in Japan. They shared their concerns with Japan’s deep-rooted culture of excessively packaging goods and the systematic overconsumption of PET bottles and other single-use plastics that lead Japan to have the second highest plastic packaging waste per capita, behind the United States. When we shared our project research with the participants they were extremely enthusiastic about our efforts and expressed strong desires for a scalable, cost-effective way to mass-degrade their collected PET bottles.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
          We are grateful for the opportunity to engage with communities outside of the U.S. These insightful interactions and the experience of clearing out trash from the Edogawa river significantly impacted the direction of our project and its application. The cleanup gave insight into the significance of our research and how impactful our solution could be to communities. We became more cognizant of the ubiquity and detriment of plastics and felt a great sense of responsibility to integrate the feedback from the Tokyo River Friends organization into our project and help reduce the abundance of plastics around the world. This gave rise to our idea to implement a bioreactor containing yeast engineered with our optimized PETase that could act as a local degradation system for plastic waste. We also began to envision how our PET-degrading yeast bioreactor could operate at municipal waste management sites in the U.S, Japan, and anywhere else around the world. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Conferences with ReCollegy, Plastic Recycling Open House, and CalRecycle</h3>
      <p>
        The initial idea for the project was triggered by our participation in three conferences on plastic recycling—ReCollegy, Plastics Recycling Open House, and CalRecycle. Through interactions with various company representatives at these events, we gathered information on the current state of recycling facilities that has helped inform us on what project application context PET degrading yeast would have the most positive impact.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            From these conferences, we learned a lot about the limitations of recycling. For example, not many people know that only 9% of plastics has ever been recycled around the world. one reason is that it is extremely difficult for a plastic bottle to be completely recycled into another plastic bottle, since it is not a circular system. According to the ReCollegy session, while a metal can can be recycled into a metal can over and over again, a plastic bottle can only be downcycled into lower quality grade plastic products like fleece fillers or plastic bricks. China used to import most of the world’s discarded plastics, however in 2017 China enforced a plastic import ban which has significantly impacted the global waste industry and forced countries like the US to try to better manage their own plastic waste. One initiative in the Bay Area, CA is to gradually decrease the size of landfill bins so people are motivated to sort their waste into compost and recycling bins. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            <p>
              Initially, we were exploring a broad array of project applications in plastic waste management. For instance, PET-degrading yeast could act as an agent for degrading plastic particles in soil, be taken as a probiotic supplement to clear microplastics from the gastrointestinal tract, or break down plastic at an industrial scale in bioreactors. Through our conversations with recycling companies, we learned about the limitations of recycling initiatives and began to discuss how our project could potentially fill the gaps. The information we gathered from the conferences significantly helped narrow our project application. By fully degrading PET waste into non-toxic monomers, we can begin to reduce the amount of plastic that is accumulating in the world as opposed to downcycling it. With this goal in mind, we decided to move forward with project MORPH by focusing on mass-degradation of PET plastic waste. Based on all of the input we believe a bioreactor was the solution, but we needed to figure out where it would be the most useful— in recycling plants, in personal homes, or on a community/municipal scale.
            </p>
            <p>
              These webinars helped finalize our decision to focus on implementing and placing the bioreactor for municipal waste management with large educational or corporate communities, instead of trying to work with recycling plants to add it to their processing stream. Firstly, we wanted to reduce the amount of transport needed to degrade plastic. Plastic is often shipped to large central waste collection areas, or around the world to different countries and recycling plants depending on the type of plastic. We want to shorten the plastic waste stream in order to reduce fossil fuel emissions from transport and the number of hands it has to go through (where you are likely to lose some to pollution along the way). Local degradation of plastic closer to the site of use is more sustainable. The current system also acts as a black box where people in the U.S get rid of their waste and never think about it again. It would be beneficial to have a bioreactor on display in communities to inspire them with synthetic biology, and also to make people more conscious of where their waste goes. The downsizing landfill bin policy is also a testament to waste policies that tap into the public psyche, thus encouraging us to design a public-facing bioreactor.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Katherine Huded </h3>
      <p>
        Katherine Huded is the VP of Circular Ventures at The Recycling Partnership, an organization that partners with companies to advance circularity, transform underperforming recycling programs, and meet sustainability goals. She is well-versed on residential recycling and the work still needed to improve the U.S. recycling system.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            According to Katherine, “infrastructure and education at scale are the chief limitations to recycling success.” She explained further that for proven recycling solutions to have any positive impact on the environment, U.S recycling infrastructure would need to address a $17 billion funding gap. In addition to this, an economic benefit of $30.8 billion over 10 years, which includes wages, taxes, landfill savings, and the value of recyclables, would need to be applied, as described further in The Recycling Partnership “Paying It Forward Report.” Not only are there gaps in recycling infrastructure but also in educating people about current recycling processes and plastic waste solutions. Katherine described that recycling is successful only when everyone can participate and the materials collected can be processed, however, recycling infrastructure and education is not provided evenly across the U.S. Katherine was very supportive of our goal to tackle plastic waste and said she looks forward to seeing innovations ready to be implemented at scale in the future.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            Katherine’s input reinforced our decision to implement an in vivo OrthoRep system with PETase in yeast since optimized microbial degradation offers a more cost-effective, carbon neutral, and scalable solution to tackle PET pollution. It also influenced us to envision our solution functioning as its own niche, instead of trying to integrate it into the current recycling pipeline that has poor infrastructure and support. In addition, it got us thinking about how to encourage public education surrounding recycling and our project.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Public Survey Responses</h3>
      <p>
        We wanted to gather more insights from the general public on plastic waste and recycling to gauge how educated people are on these topics and understand if there are any misconceptions. To do this, we collaborated with The American School in Japan (ASIJ) iGEM team by promoting our public <a href="https://docs.google.com/forms/d/e/1FAIpQLSdInqTyG_0OXamwgio0OlO-lok9I0oJZ99gVGNv6Ki02FbNAg/viewform" target="_blank" rel="noreferrer noopener">Plastic Waste Survey</a> among people in Japan and the U.S, the two leading countries with the highest plastic waste generation per capita. 
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            The survey responses we received shed insight into what knowledge gaps there are surrounding sorting trash, the recycling process, and current bioengineering solutions that are being implemented. Based on the responses we realized that many view recycling as the solution to global plastic pollution and are not aware of its limitations. In particular, 82% of the survey responses believed that a plastic bottle could be recycled into another entirely new plastic bottle, which we know isn’t possible given the reality that plastic bottles are being downcycled. Additionally, around 55% of respondents estimated that over 25% of plastics in the world end up recycled. The survey responses reinforced what other stakeholders have been saying regarding the lack of education and misinformation surrounding recycling.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            <p>
            The survey helped us understand that education and raising awareness will inevitably be a key component for successful implementation of any solution for plastic degradation. For this reason, we believe implementing PET-degrading bioreactors in a university setting would accomplish this component by drawing the attention of the public eye and eliciting meaningful discourse on how to be more conscious of our own waste stream.
            </p>

            <h5>Ethical Reasoning</h5>
            <p>
              Although many people could use better education on pollution and recycling, we want to acknowledge that the responsibility of these problems does not fall on individual citizens. We have thought a lot about the plastic waste stream and who is responsible for it. We originally thought we wanted people to have personal bioreactors in their home for their plastic waste, but realized that it is not accessible and would wrongfully place the responsibility on individuals. Guilting individual citizens for their consumption habits and encouraging them to spend money in the hopes of feeling more sustainable and “green” is a tactic sometimes used by large corporations to avoid accountability for their large role in the climate crisis. In addition, if people individually purchased a bioreactor they might be encouraged to use more plastic bottles in order to feel like they are “getting their money’s worth.” Even though personal bioreactors would encourage education and awareness, they are not practical. Thus, we changed our direction for our proposed implementation to be implemented on a local community scale, either by large corporate or college campuses, where communities could see the bioreactors in action.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <p>
        Next, we engaged with the scientific community to delve deeper into the biology of our project and seek technical advice on our experimental methods and project execution.
      </p>

      <h3>Dr. Chang C. Liu</h3>
      <p>
        Dr. Chang C. Liu is a Biomedical Engineering Professor at UC Irvine. His lab is well known for pioneering the orthogonal replication (OrthoRep) system.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            Dr. Liu has been instrumental in guiding our wet lab cloning procedures for the Orthorep-engineered yeast and helping troubleshoot any obstacles. We implemented all of his suggestions detailed below.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            In order to maintain OrthoRep's P1 and P2 plasmids in the yeast, Dr. Liu recommended we use a petite yeast strain since its toxin/antitoxin system works better. As per his suggestion, we also decided to clone our PETase gene into the P1 plasmid first and then clone the other genetics circuitry after in order to ensure that the P1 plasmid with our gene of interest is being replicated. We initially faced some difficulty transforming our Orthorep-engineered yeast on our selection plates. Dr. Liu’s input on the estimated duration of evolving Orthorep yeasts and how to navigate the issue of unselected growth on plates was the key piece of information we needed to troubleshoot and make informed experimental decisions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Stanford Bio-X Poster Presentation</h3>
      <p>
        We sought several opportunities to share our research with our local scientific community and gather feedback on our project. During the summer, we presented a poster detailing our project’s vision and experimental procedures at the annual Stanford Bio-X symposium. Stanford Bio-X is Stanford University’s interdisciplinary biosciences institute.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            At the Bio-X event, we had the chance to discuss our project with Allan Tong, the president of the Stanford BIOME student organization that is dedicated to providing skills, resources, and opportunities for bioengineering research. After we presented Allan with our structure and sequence phylogeny trees for the PETase protein, he advised and made recommendations on our protein modeling strategy. Specifically, he suggested we also look into capturing the docking mechanism of PET substrate into the active site of our modeled PETase.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            We ended up implementing his idea and adapted our PETase protein model to also include the docking mechanism with PET.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Dr. Drew Endy</h3>
      <p>
        Dr. Drew Endy is a synthetic biology expert, a founder of the iGEM competition, and an associate professor of the Bioengineering department at Stanford University.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            Prof. Endy played an instrumental role in helping us to recognize an important issue in downstream processing that could have a negative impact on the environment and to re-consider the design of our degradation process to address the issue. One of the byproducts of the degradation process is ethylene glycol. It is an anti-freeze known to be extremely toxic and detrimental to the environment if released untreated. Prof. Endy advised us to incorporate a mechanism in our degradation process by which ethylene glycol could be further degraded into non-toxic chemicals. With respect to human practice initiative, Prof. Endy pointed out a potential opportunity for public engagement and community involvement.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            As per his advice, we brainstormed a myriad of ways to address the issue of ethylene glycol production in our PET degradation system and incorporated this into our bioreactor design which incorporates a method to safely convert ethylene glycol into carbon dioxide and water, as explained in detail in our proposed implementation page. After our discussion with Dr. Endy on public engagement, we hosted an information tabeling session on one of the main parts of the Stanford University campus, White Plaza, to share our project research findings with the Stanford community, as well as gather feedback on potential application for the project.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Tabeling Session in White Plaza</h3>
      <p>
        At the tabeling session, we surveyed campus students and sought input on our idea for a yeast bioreactor to degrade PET plastics. We also utilized the tabeling opportunity to raise awareness about plastic pollution and provide background information about iGEM and our project.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            Some students raised concern about the potential release of engineered microbes into the environment. Other individuals inquired about the toxicity of byproducts from the degradation process and its potential harm to the environment. Setting up a table on campus not only helped increase the visibility and awareness of our research work, but also gave us the opportunity to spontaneously connect with other organizations working towards a similar goal. During our tabeling session, we got the chance to talk to one of the student leads for the All About No Waste organization and learn more about how we could collaborate with them. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Integration</Accordion.Header>
          <Accordion.Body>
            After connecting with the All About No Waste organization, we were able to feature our research project on their website and open the door to speak as a panel member at their next Innovation Expo. With regards to the feedback we got after surveying people, we decided to improve our experimental methods to address the concerns that were raised about the potential harm that engineered microbes can pose to the environment. Specifically, we made sure to use a yeast strain that is unable to survive without nutrient supplements, or in other words, implemented intrinsic biocontainment through metabolic auxotrophy. We also began to look into methods to further degrade the PET degradation byproduct, Terephthalic acid, or TPA.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Sebastian Cocioba</h3>
      <p>
        Sebastian Cocioba is a Plant Biotechnology researcher and owner of New York Botanics, LLC, a plant biotech R&D laboratory.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Input</Accordion.Header>
          <Accordion.Body>
            During our zoom meeting with Sebastian, we pitched our initial project idea and explained the PET degradation pathway via the PETase enzyme and its products. We had a fruitful discussion with him on the potential ways we can optimize the function of the PETase enzyme and also how we can address the build up of the PET degradation product, TPA. It was his suggestion to incorporate the TPADO enzyme into our PET degradation system to further degrade the TPA byproduct into protocatechuic acid (PCA), an antioxidant commonly found in green tea.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Implementation</Accordion.Header>
          <Accordion.Body>
            <p>
              We are planning to optimize the already designed parts for the TPA degradation system  via TPADO to function in yeast and fully convert TPA into PCA.
            </p>
            <h5>Parts</h5>
            <ul>
              <li>BBa_K4378004</li>
              <li>BBa_K4378005</li>
              <li>BBa_K4378006</li>
              <li>BBa_K4378012</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h2>Conclusion</h2>
      <p>
        Through our engagement with the public, scientific experts, and key stakeholders, we were able MORPH our project to enhance its applicability and render it more responsive to addressing the global scourge of PET plastic pollution.
      </p>

    </Template>
  );
}
