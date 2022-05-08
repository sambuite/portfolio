import { ArrowCircleUp } from 'phosphor-react';
import { HEADER_ID } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function BackToTopButton() {
  return (
    <button
      type="button"
      title="Voltar ao topo"
      className="fixed flex items-center justify-center rounded-full bottom-5 lg:bottom-10 xl:bottom-14 right-5 lg:right-10 xl:right-14 w-12 h-12"
      onClick={() => scrollToSection(HEADER_ID)}
    >
      <ArrowCircleUp className="w-12 h-12 rounded-full" weight="fill" />
    </button>
  );
}
