import project1Img from '../../../assets/project-01.png';
import project2Img from '../../../assets/project-02.png';
import project3Img from '../../../assets/project-03.png';
import { PROJECTS_ID } from '../../../utils/constants';
import { Project } from './Project';

const projects = [
  {
    name: 'Portfolio',
    description:
      'Esse site que você está acessando agora, inspirado em um design minimalista. De pouco a pouco vem sendo atualizado e melhorado',
    imgCover: project1Img,
    codeLink: {
      text: 'Veja como foi construído',
      url: 'https://github.com/sambuite/portfolio',
    },
    liveLink: undefined,
    subText: 'Criado usando Next.js, Typescript e TailwindCSS.',
  },
  {
    name: 'Ig.news',
    description:
      'O Ig.news é um projeto de estudo. Se trata de um blog por assinatura, você pode se logar através da conta do github e não consegue ler notícias caso não seja assinante.',
    subText:
      'Criado usando Next.js(SSR and SSG) e Typescript, autenticação com next-auth, estilizado com SCSS, pagamentos com Stripe, dados servidos pelo Prismic CMS, FaunaDB como banco de dados e testes com Jest.',
    imgCover: project2Img,
    codeLink: {
      text: 'Acesse o código',
      url: 'https://github.com/sambuite/ignews',
    },
    liveLink: {
      text: 'Veja o site',
      url: 'https://ignews-sambuite.vercel.app',
    },
  },
  {
    name: 'Dashgo',
    description:
      'O Dashgo é um projeto de estudo. Um dashboard simples onde é possível criar e listar usuários e há uma simulação de dados nos gráficos.',
    subText:
      'O server fake é gerado pelo MirageJS e os dados são gerados pelo FakerJs e consumidos pelo Axios e o React Query. Os gráficos são feitos com o React Apexcharts e na criação de usuário são usados o React hook form para o formulário e o Yup para validação de dados.',
    imgCover: project3Img,
    codeLink: {
      text: 'Mais informações',
      url: 'https://github.com/sambuite/dashgo',
    },
    liveLink: undefined,
  },
];

export function Projects() {
  return (
    <section className="default-center flex flex-col mt-36" data-aos="fade-in">
      {projects.map((project, index) => (
        <Project
          key={index}
          id={index === 0 ? PROJECTS_ID : undefined}
          name={`0${index + 1}/` + project.name}
          description={project.description}
          imgCover={project.imgCover}
          codeLink={project.codeLink}
          liveLink={project.liveLink}
          subText={project.subText}
        />
      ))}
    </section>
  );
}
