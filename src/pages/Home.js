import Template from './Template';
import Image from '../components/shared/Image';

export default function Home() {
  const homeHeroImg = "https://static.igem.wiki/teams/4466/wiki/dummy-hero.jpg"
  return (
    <Template title="Home">
      <Image.Hero src={homeHeroImg} alt="test" />ß
      <main>
        <h1>This is the Home page</h1>
        <p>Hello World!</p>
      </main>
    </Template>
  );
}
