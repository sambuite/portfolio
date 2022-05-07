import homeImg from '../../../assets/home.png';
import { Project } from './Project';

const projects = [
  {
    id: 'first-project',
    name: 'BQT - Big Queue Terminator',
    description:
      'Essa aplicação visa solucionar o problema das filas em orgãos públicos, possibilitando a marcação de horário antecipado.',
    imgCover: homeImg,
    link: {
      text: 'Acesse o site no ar',
      url: 'https://github.com/sambuite',
    },
    subText:
      'Criado usando Typescript e muita coisa legal você nem acreditaria se eu te contasse é muito legal mesmo acredite em mim',
  },
  {
    name: 'Edit anywhere',
    description: 'SAAS que permite a edição de videos direto do navegador',
    subText:
      'Criado usando Javascript e nem tanta coisa legal se eu contasse você acreditaria sim.',
    imgCover: homeImg,
    route: {
      text: 'Acesse já a página',
      url: 'https://github.com/sambuite',
    },
  },
  {
    name: 'Brower',
    description: 'Apenas um browser escrito em Rust!',
    imgCover: homeImg,
    link: {
      text: 'Baixe aqui',
      url: 'https://github.com/sambuite',
    },
  },
];

export function Projects() {
  return (
    <section className="default-center flex flex-col mt-36">
      {projects.map((project, index) => (
        <Project
          key={index}
          id={index === 0 ? 'first-project' : undefined}
          name={`0${index + 1}/` + project.name}
          description={project.description}
          imgCover={project.imgCover}
          link={project.link}
          route={project.route}
          subText={project.subText}
        />
      ))}
    </section>
  );
}
