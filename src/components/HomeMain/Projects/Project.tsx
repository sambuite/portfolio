import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

interface Props {
  id?: string;
  name: string;
  description: string;
  imgCover: StaticImageData;
  subText?: string;
  liveLink?: {
    text: string;
    url: string;
  };
  codeLink: {
    text: string;
    url: string;
  };
}

export function Project({
  id,
  name,
  description,
  imgCover,
  liveLink,
  codeLink,
  subText,
}: Props) {
  const width =
    typeof window !== 'undefined'
      ? window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      : 0;

  return (
    <div
      id={id}
      className="flex flex-col xl:flex-row justify-start xl:justify-between border-b-[1.5px] border-zinc-600 first:mt-0 mt-28 pb-28"
    >
      <div className="w-full xl:w-96 flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="text-title">{name}</h3>
          <p className="text-body mt-6">{description}</p>
          {subText && <span className="text-sub-text mt-8">{subText}</span>}
        </div>

        <div className="">
          <span className="flex items-center text-sub-link mt-8 xl:mt-0">
            <Link href={codeLink.url}>
              <a target="_blank">{codeLink.text}</a>
            </Link>
            <GithubLogo className="w-5 h-5 ml-2" weight="bold" />
          </span>

          {liveLink && (
            <span className="flex items-center text-sub-link mt-4">
              <Link href={liveLink.url}>
                <a target="_blank">{liveLink.text}</a>
              </Link>
              <ArrowUpRight className="w-5 h-5 ml-2" weight="bold" />
            </span>
          )}
        </div>
      </div>
      <div className="w-full xl:w-[47rem] h-[20rem] xl:h-[28.969rem] mt-14 xl:mt-0 bg-zinc-200 dark:bg-zinc-800 relative border border-zinc-200 dark:border-zinc-800">
        <Image
          src={imgCover}
          alt={`Imagem do projeto ${name}`}
          layout="fill"
          objectFit={width > 1280 ? 'cover' : 'contain'}
        />
      </div>
    </div>
  );
}
