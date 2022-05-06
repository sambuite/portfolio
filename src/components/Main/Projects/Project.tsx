import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'phosphor-react';

interface Props {
  id?: string;
  name: string;
  description: string;
  imgCover: StaticImageData;
  subText?: string;
  link?: {
    text: string;
    url: string;
  };
  route?: {
    text: string;
    url: string;
  };
}

export function Project({
  id,
  name,
  description,
  imgCover,
  link,
  route,
  subText,
}: Props) {
  return (
    <div
      id={id}
      className="flex justify-between border-b-[1.5px] border-zinc-600 first:mt-0 mt-28 pb-28"
    >
      <div className="w-96 flex flex-col justify-between">
        <div className="flex flex-col ">
          <h3 className="text-title">{name}</h3>
          <p className="text-body mt-6">{description}</p>
          {subText && <span className="text-sub-text mt-8">{subText}</span>}
        </div>

        <a className="flex items-center text-sub-link">
          <Link href={route?.url || link?.url || '/home'}>
            {route?.text || link?.text || 'Saiba mais'}
          </Link>
          {route ? (
            <ArrowRight className="w-5 h-5 ml-2" />
          ) : (
            <ArrowUpRight className="w-5 h-5 ml-2" />
          )}
        </a>
      </div>
      <div className="w-[46.875rem] h-[22.813rem] bg-zinc-400">
        {/* <Image
          src={imgCover}
          alt={`Imagem do projeto ${name}`}
          layout="responsive"
          objectFit="contain"
        /> */}
      </div>
    </div>
  );
}
