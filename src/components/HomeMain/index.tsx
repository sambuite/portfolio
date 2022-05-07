import { Contact } from '../Contact';
import { Hero } from './Hero';
import { Projects } from './Projects';

export function HomeMain() {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
