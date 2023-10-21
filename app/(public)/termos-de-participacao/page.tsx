import { Footer } from "@/components/base/footer";
import { SeparatorBase } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Políticas de Cookies - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Cookies() {
  return (
    <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
      <article className="container">
        <Link
          href="/comunidade"
          className="group mb-5 flex cursor-pointer items-center gap-2  text-sm text-gray-200 transition-colors hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />{" "}
          <span className="max-[360px]:hidden">Voltar para a comunidade</span>
        </Link>
        <h1 className="mb-2 text-xl font-bold">
          Termos de Participação da Comunidade Professor Criativo
        </h1>
        <SeparatorBase className="bg-gray-500" />
        <section className="my-4  flex flex-col gap-4">
          <h2 className="text-sm md:text-base">1. CONCEITO DE COMUNIDADE</h2>

          <p className="text-sm md:text-base">
            A Comunidade é uma tribo que busca, acima de tudo, se ajudar com
            base nos valores supremos da integridade e respeito. Qualquer
            atividade que desvirtue esses princípios básicos está sujeita à
            revisão pela moderação. Precisamos nos unir para criar um ambiente
            acolhedor. Vamos tratar todos com respeito. Discussões saudáveis são
            naturais, mas seja gentil e educado(a). Todos devem se sentir
            seguros. O bullying de qualquer tipo não é permitido, e comentários
            degradantes sobre raça, religião, cultura, orientação sexual, gênero
            ou identidade não serão tolerados.
          </p>
          <h2 className="text-sm md:text-base">2. AQUI É O LOCAL OFICIAL</h2>
          <p className="text-sm md:text-base">
            Não é permitido criar grupos paralelos. Todas as discussões precisam
            acontecer dentro da Comunidade para que todos possam se beneficiar
            com a troca de ideias. Por isso, toda mensagem que tenha o intuito
            de criar grupos ou de chamar as pessoas para conversas privadas está
            sujeita à revisão.
          </p>
          <h2 className="text-sm md:text-base">3. AUTOPROMOÇÃO</h2>
          <p className="text-sm md:text-base">
            Não será permitida qualquer forma de promoção individual e/ou
            comercial, sendo o perfil administrador o único responsável por
            possíveis publicações de divulgação de serviços ou produtos aqui.
          </p>
          <h2 className="text-sm md:text-base">
            4. FAÇA BOAS PERGUNTAS PARA A COMUNIDADE
          </h2>
          <p className="text-sm md:text-base">
            Seja assertivo nas suas perguntas! Quanto mais objetivo, mais gente
            vai conseguir ajudar. Se ainda assim sua pergunta não for
            respondida, você pode nos contatar pelo e-mail
            contato@mundoprof.com.br.
          </p>
          <h2 className="text-sm md:text-base">5. CONFIDENCIALIDADE</h2>
          <p className="text-sm md:text-base">
            O que acontece no grupo fica no grupo. Respeite a privacidade de
            todos os membros, mantendo sigilo e confidencialidade sobre as
            informações trocadas aqui.
          </p>
          <h2 className="text-sm md:text-base">6. COMPARTILHAMENTOS</h2>
          <p className="text-sm md:text-base">
            Não poste suas aulas, tutoriais, Zoom, Live, Hangout sobre qualquer
            tema aqui na comunidade. Caso você queira compartilhar algum
            material desse tipo, entre em contato com o e-mail
            contato@mundoprof.com.br.
          </p>
          <h2 className="text-sm md:text-base">
            7. ACESSO PESSOAL E INTRANSFERÍVEL
          </h2>
          <p className="text-sm md:text-base">
            O acesso à comunidade é pessoal e intransferível. O compartilhamento
            de (atividades) PDF’s, de vídeos, das aulas da Comunidade, ou de
            qualquer conteúdo que está aqui é considerado pirataria e estará
            passível de todas as providências jurídicas cabíveis, com a
            consequente expulsão da Comunidade. Inclui-se nesta linha de
            entendimento o compartilhamento dos dados de acesso à área exclusiva
            de membros.
          </p>
          <h2 className="text-sm md:text-base">8. RECLAMAÇÕES E SUPORTE</h2>
          <p className="text-sm md:text-base">
            A comunidade é um ambiente de energias positivas e de
            engrandecimento de todos, portanto não aceitamos reclamações ou
            suporte de qualquer ordem aqui. Se tiver alguma dúvida, sugestão de
            melhoria, reclamação ou necessidade de suporte, pode enviar para:
            contato@mundoprof.com.br.
          </p>
          <h2 className="text-sm md:text-base">
            9. PRESENÇA DA PROFª ANA E DO TIME Professor Criativo NA COMUNIDADE
          </h2>
          <p className="text-sm md:text-base">
            Tanto o Profª quanto todo o time PMP também fazem parte da
            comunidade, somos membros como você. Procuramos ser os membros mais
            presentes aqui na Comunidade, mas isso não significa que estejamos a
            todo momento disponíveis para responder 100% das suas dúvidas. Conte
            com seus parceiros da comunidade, é a força do grupo todo que vai te
            levar para o próximo nível.
          </p>
          <h2 className="text-sm md:text-base">
            10. POLÍTICA OU CAUSAS SOCIAIS
          </h2>
          <p className="text-sm md:text-base">
            A Comunidade não é o lugar para você discutir assuntos de cunho
            político ou mesmo sobre causas sociais. Longe de desprezar a
            importância de tais discussões, mas esse não é o foco principal do
            grupo. Portanto, não serão admitidas postagens que promovam (de
            maneira direta ou indireta) partidos políticos, Organizações Não
            Governamentais (ONGs), grupos de apoio, entidades ou instituições,
            campanhas sociais, vaquinhas ou qualquer atividade de crowdfunding e
            afins.
          </p>
          <h2 className="text-sm md:text-base">11. RENOVAÇÕES</h2>
          <p className="text-sm md:text-base">
            Você já sabe, mas não custa lembrar: seu membership tem um período
            de validade a partir da sua entrada e, depois desse período, é
            preciso renovar para continuar a ter acesso à Comunidade Professor
            Criativo. Ao participar do grupo você concorda com todos os termos
            acima, demonstrando ciência de que o descumprimento de uma ou mais
            regras pode ocasionar o afastamento e até a exclusão da Comunidade
            Mundo Prof. A moderação se reserva o direito de moderar, excluir ou
            banir qualquer mensagem ou participante sem aviso prévio. Se o
            participante desrespeitar alguma regra será notificado
            individualmente. A qualquer momento, conforme a necessidade, essas
            regras poderão ser alteradas para melhor desempenho e bem estar dos
            participantes da comunidade, havendo, nesses casos, a publicação das
            novas regras. Se ainda tem alguma dúvida, conte sempre com a gente
            para ajudar dentro do grupo, da sala de aula e fora dela. Um abraço!
          </p>
        </section>
      </article>
      <Footer />
    </section>
  );
}
