import { ArrowCircleUp } from 'phosphor-react';
import { HEADER_ID } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function BackToTopButton() {
  return (
    <button
      type="button"
      title="Voltar ao topo"
      className="fixed flex items-center justify-center rounded-full bottom-14 right-14 w-12 h-12 "
      onClick={() => scrollToSection(HEADER_ID)}
    >
      <ArrowCircleUp className="w-12 h-12" weight="fill" />
    </button>
  );
}
