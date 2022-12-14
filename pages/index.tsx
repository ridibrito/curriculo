import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp, BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { useState } from "react";

const linkDownload =
  "https://drive.google.com/file/d/1Ne1T23ruaPV1Cb7PyJs9MdZF1IA759OW/view?usp=share_link";

export default function Home() {
  const [download, setDownload] = useState("");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-500 h-52 w-full mb-2"></div>

      <div className="text-center flex justify-center mx-auto p-5 max-w-5xl -mt-52 border-b-2 border-gray-500">
        <Image
          src="/perfil.png"
          alt="avatar"
          width="300"
          height="300"
          className="shadow"
        />
        <div className="block text-left ml-5">
          <h2 className="text-white font-thin">FRONTEND DEVELOPER</h2>
          <div className="flex">
            <h1 className="text-white text-6xl font-black flex">
              RICARDO ALBUQUERQUE
            </h1>
            <Link target='_blank' href={linkDownload}>
              
              <GrDocumentPdf className="w-7 h-7 cursor-pointer" />
              
            </Link>
          </div>
           <div className="mt-12">
            <h2 className="text-lg">ENTRE EM CONTATO</h2>
            <div className="flex gap-10">
              <Link target="_blank" href="https://wa.me/5561983555195">
                <p className="text-gray-500 flex items-center gap-2">
                  <BsWhatsapp className="text-green-600" />
                  Telefone (61) 98355-5195
                </p>
              </Link>
              <div className="block">
                <p className="text-gray-500 flex items-center gap-2">
                  <AiOutlineMail className="w-7 h-5" />
                  ricardo.brasiliadf@hotmail.com
                </p>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/ricardobalbuquerque/"
                >
                  <p className="text-gray-500 flex items-center gap-2 ">
                    <BsLinkedin className="text-sky-600 w-7 h-5" />
                    /ricardoalbuquerque
                  </p>
                </Link>
                <Link target="_blank" href="https://github.com/ridibrito">
                  <p className="text-gray-500 flex items-center gap-2 ">
                    <BsGithub className="text-black w-7 h-5" />
                    /ridibrito
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex mt-2">
              <div>
                <h2 className="text-lg">MEU PORTF??LIO</h2>
                <Link
                  target="_blank"
                  href="https://www.ricardoalbuquerque.com/"
                >
                  <p className="text-gray-500 flex items-center gap-2 ">
                    https://ricardoalbuquerque.com
                  </p>
                </Link>
              </div>
              <div className="ml-5">
                <h2 className="text-lg">CURRICULO EM V??DEO</h2>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UCNBLR9lUVA8zyg7S7JKxG8A"
                >
                  <p className="text-gray-500 flex items-center gap-2">
                    <BsYoutube className="text-red-500 w-6 h-5" />
                    https://www.youtube.com
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto p-5 max-w-5xl flex gap-10">
        <div className="w-1/3  pb-4">
          <h2 className="text-lg">PERFIL PROFISSIONAL</h2>
          <p className="text-gray-500 mt-2 pb-5 border-b-2 border-gray-500">
            Apaixonado por solu????es simples e resolu????o de problemas, perfil de
            lideran??a, um estudante incans??vel estou em constante
            desenvolvimento pessoal.
          </p>
          <h2 className="text-lg mt-3">T??CNOLOGIAS</h2>
          <ul className="list-disc marker:text-gray-500 pl-5 border-b-2 border-gray-500 pb-5">
            <li className="text-gray-500">HTML5, CSS3 e JS</li>
            <li className="text-gray-500">ReactJS, NextJS</li>
            <li className="text-gray-500">TypeScript</li>
            <li className="text-gray-500">NodeJs, Express</li>
            <li className="text-gray-500">Consumo de API externa - RestAPI</li>
            <li className="text-gray-500">
              Banco de dados com Docker, Docker-compose e bancos SQL em nuvem.
            </li>
            <li className="text-gray-500">GIT</li>
          </ul>
          <h2 className="text-lg mt-3">IDIOMAS</h2>
          <ul className="ml-5 list-disc marker:text-gray-500">
            <li className="text-gray-500">Portugues: Nativo</li>
            <li className="text-gray-500">
              Ingl??s: Intermedi??rio. Leitura regular, conversa????o ruim
              (Estudando).
            </li>
          </ul>
        </div>
        <div className="block w-2/3">
          <div>
            <h2 className="text-lg">EXPERI??NCIA PROFISSIONAL</h2>
            <h3 className="">FRONTEND DEVELOPER</h3>
            <p className="mt-5 text-gray-600">Coruss - Projeto pessoal</p>
            <p className="text-sm">De Fevereiro 2022 at?? o momento</p>
            <ul className="text-gray-500">
              <li className="list-disc ml-5">
                Desenvolvimento de aplica????o web, ERP para gest??o de planos de
                sa??de.
              </li>
              <li>
                CRM, Administrativo, financeiro, dashboard, atendimento
                comercial.
              </li>
              <li className="text-black text-sm">
                Em desenvolvimento : NextJs, TypeScript, TailwindCss, Prisma,
                Git, Docker.{" "}
              </li>
              <li className="mt-3 ml-5 list-disc">
                {" "}
                Desenvolvimento de aplica????o web, mobile first, gerenciador de
                consultas e procedimentos.
              </li>
              <li className="text-black text-sm">
                Em desenvolvimento : NextJs, TypeScript, TailwindCss, Prisma,
                Git, Docker.{" "}
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="">CONSULTOR COMERCIAL</h3>
            <p className="text-sm">De 2020 at?? o momento</p>

            <p className="mt-5 text-gray-600">
              Aut??nomo - Consultor comercial B2B
            </p>
            <ul className="text-gray-500">
              <li className=" list-disc ml-5">
                Venda de planos de sa??de empresarial.
              </li>
              <li>
                Processo completo de vendas, prospec????o, atendimento, venda e
                p??s venda.
              </li>
              <li className="text-black text-sm">Em transi????o. </li>
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="">SUPERVISOR COMERCIAL</h3>
            <p className="text-sm">De 2016 a 2020</p>

            <p className="mt-5 text-gray-600">
              Allcross - Corretora de seguros
            </p>
            <ul className="text-gray-500">
              <li className=" list-disc ml-5">
                Supervis??o de equipe comercial.
              </li>
              <li>Treinamento, gest??o e supervis??o de equipe, palestras.</li>
              <li className="text-black text-sm">
                Equipe com mais de 100 consultores
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto p-5 max-w-5xl border-t-2 border-gray-500 pb-5">
        <h2 className="text-lg">EXPERI??NCIA ACAD??MICA</h2>
        <h4>Cursos Fullstack</h4>
        <ul className="list-disc text-gray-500 ml-5 mt-3">
          <li>HTML5 E CSS3 MODULO 1 - Curso em v??deo [40 horas]</li>
          <li>HTML5 E CSS3 MODULO 2 - Curso em v??deo [40 horas]</li>
          <li>JAVASCRIPT - Curso em v??deo [40 horas]</li>
          <li>GIT E GITHUB - Curso em v??deo [20 horas]</li>
          <li>LINUX - Curso em v??deo [40 horas]</li>
          <li>MYSQL - Curso em v??deo [40 horas]</li>
          <li>DISCOVERY - Rocketseat [40 horas]</li>
          <li>IGNITE - Rocketseat</li>
        </ul>
        <h2 className="mt-5">
          Ci??ncias Econ??micas - Faculdades integrads UNIP
        </h2>
        <p>De 2010 a 2013</p>
      </div>
    </div>
  );
}
