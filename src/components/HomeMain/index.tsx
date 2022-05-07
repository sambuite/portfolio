import { Contact } from '../Contact';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Work } from './Work';

export function HomeMain() {
  return (
    <main>
      <Hero />
      <Projects />
      <Work />
      <Contact />
    </main>
  );
}
