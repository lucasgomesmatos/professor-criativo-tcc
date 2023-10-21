import { Footer } from "@/components/base/footer";
import { SeparatorBase } from "@/components/ui/separator";

export const metadata = {
  title: "Políticas de Cookies - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Cookies() {
  return (
    <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
      <article className="container">
        <h1 className="mb-2 text-xl font-bold">1 . Políticas de Cookies</h1>
        <SeparatorBase className="bg-gray-500" />
        <section className="mt-4  flex flex-col gap-4">
          <p>
            Este documento possui a finalidade de estabelecer alguns parâmetros
            para tratamento de dados que incluem, não taxativamente, a recepção,
            transmissão, compartilhamento, armazenamento, acesso, comunicação,
            modificação ou transferência das informações coletadas de nossos{" "}
            <b>USUÁRIOS</b>, além de registrar toda e qualquer atividade
            realizada dentro da plataforma, de acordo com a legislação
            aplicável.
          </p>

          <p>
            O <strong>USUÁRIO</strong> confere sua livre e expressa concordância
            perante este instrumento ao aceitar essa{" "}
            <strong>POLÍTICA DE COOKIES</strong> e a{" "}
            <strong>POLÍTICA DE PRIVACIDADE</strong>.
          </p>
        </section>
        <section className="mt-4  flex flex-col gap-4">
          <h2 className="text-base font-bold">1 . Glossário</h2>
          <SeparatorBase className="bg-gray-500" />
          <p>
            1.1 – Para melhorar o desempenho e sua experiência em nosso site,
            utilizamos cookies, devendo ser consideradas as seguintes definições
            acerca desta Política: COOKIES – São arquivos de texto criados pelo
            site e armazenados no dispositivo que acessa a plataforma.
            (notebooks, tablets, smartphones, etc.). Quando a condição de
            “permissão” estiver habilitada, o armazenamento de cookies ocorrerá
            de forma automática. Estes pequenos pacotes de dados visam
            identificar e coletar as informações do USUÁRIO para aprimorar os
            serviços do nosso site.
            <ul className="m-4 flex list-disc flex-col gap-4">
              <li>
                DADOS: Conjunto de informações anônimas (ou dados anonimizados)
                e pessoais.
              </li>
              <li>
                DADOS ANONIMIZADOS: Informações isoladas que não permite a
                identificação do USUÁRIO. Incluem a coleta de gênero,
                localização, idade, etc.
              </li>
              <li>
                DADOS PESSOAIS: Informações da pessoa natural identificada por
                meio do sistema. Incluem nome, endereço, telefone, redes
                sociais, etc.{" "}
              </li>
              <li>
                HIPERLINKS: Um link clicável que pode aparecer no site ou estar
                disposto em algum conteúdo, que direciona o USUÁRIO para outra
                página na plataforma ou site externo, seja parceiro ou não.
              </li>
              <li>
                NAVEGAÇÃO: Ato de interagir, pesquisar, adquirir ou consumir
                algum material ou conteúdo em nossa plataforma, site ou
                aplicativo.
              </li>
              <li>
                USUÁRIO: Visitantes do site que acessem independente do meio a
                nossa plataforma, site ou aplicativo. Deverá, necessariamente,
                ter capacidade legal para aceitar os termos e condições da
                presente Política de Cookies e demais documentos legais da
                plataforma.
              </li>
            </ul>
            Havendo dúvidas acerca de qualquer termo ou palavra empregada nesta
            Política de Cookies, o VISITANTE/ USUÁRIO poderá entrar em contato
            com a plataforma através dos nossos canais de comunicação.
          </p>
        </section>
        <section className="mt-4  flex flex-col gap-4">
          <h2 className="text-base font-bold">2 . Coleta de dados</h2>
          <SeparatorBase className="bg-gray-500" />
          <p className="">
            2.1 – A coleta de informações e dados de nossos USUÁRIOS ocorre na
            medida em que ele nos fornece, por meio de acesso e uso no site,
            clicks em hiperlinks, interação nos aplicativos e serviços do site,
            suas preferências e referências.
            <span>2.2 – Os dados serão coletados:</span>
            <ul className="m-4 flex list-disc flex-col gap-4">
              <li>
                Quando o USUÁRIO inserir ou submeter voluntariamente suas
                informações na nossa plataforma ou acessar algum serviço
                oferecido pelo site, também poderá ocorrer por meio da interação
                e navegação com o conteúdo exposto no website.
              </li>
              <li>
                Quando o USUÁRIO inserir ou submeter voluntariamente dados de
                terceiros no nosso site, uma vez declarada a autorização da
                utilização desses dados perante o site.
              </li>
              <li>
                Por meio de parceiros que tenham sido autorizados pelos nossos
                USUÁRIOS a compartilharem seus dados conosco.
              </li>
            </ul>
            <span>
              2.3 – As informações coletadas podem incluir, não se limitando, os
              seguintes dados:
            </span>
            <ul className="m-4 flex list-disc flex-col gap-4">
              <li>nome;</li>
              <li>gênero;</li>
              <li>endereço (por meio da geolocalização);</li>
              <li>endereço de IP;</li>
              <li>endereço de e-mail;</li>
              <li>dados bancários (cartões de crédito, por exemplo.);</li>
              <li>números de documentos (CPF, Carteira de Identidade, etc.)</li>
              <li>data de nascimento;</li>
              <li>informações de pagamento;</li>
              <li>agenda de contatos;</li>
              <li>dados biométricos;</li>
              <li>links, hiperlinks e serviços clicados, etc.</li>
            </ul>
          </p>
        </section>
      </article>
      <Footer />
    </section>
  );
}
