import homeImg from '../../../assets/home.png';
import { Project } from './Project';

export function Projects() {
  return (
    <section className="default-center flex flex-col mt-36">
      <Project
        id="first-project"
        name="01/BQT - Big Queue Terminator"
        description="Essa aplicação visa solucionar o problema das filas em orgãos públicos, possibilitando a marcação de horário antecipado."
        imgCover={homeImg}
        link={{
          text: 'Acesse o site no ar',
          url: 'https://github.com/sambuite',
        }}
        subText="Criado usando Typescript e muita coisa legal você nem acreditaria se eu te contasse é muito legal mesmo acredite em mim"
      />
      <Project
        name="02/Edit anywhere"
        description="SAAS que permite a edição de videos direto do navegador"
        subText="Criado usando Javascript e nem tanta coisa legal se eu contasse você acreditaria sim."
        route={{
          text: 'Acesse já a página',
          url: 'https://github.com/sambuite',
        }}
        imgCover={homeImg}
      />
      <Project
        name="01/Brower"
        description="Apenas um browser escrito em Rust!"
        imgCover={homeImg}
        link={{
          text: 'Baixe aqui',
          url: 'https://github.com/sambuite',
        }}
      />
    </section>
  );
}
