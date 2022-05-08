export function scrollToSection(id: string) {
  const width =
    typeof window !== 'undefined'
      ? window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      : 0;

  document
    .querySelector('#' + id)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: width > 1050 ? 'center' : 'start',
    });
}
