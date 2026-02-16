import {
  BookOpen,
  Users,
  Target,
  Smile,
  Gamepad2,
  ChefHat,
  GraduationCap,
  Heart,
  Sparkles,
  Users2,
  Trophy,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
export type advantagesType = (typeof advantages)[0];

export const advantages = [
  {
    icon: BookOpen,
    title: "Aprendizado Interativo",
    description:
      "Aulas dinâmicas e participativas que mantêm o aluno engajado do início ao fim.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Para Todas as Idades",
    description:
      "Cursos para Kids, Teens e Adults, com metodologia adaptada para cada fase da vida.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smile,
    title: "Sala Infantil Personalizada",
    description:
      "Ambiente preparado especialmente para o público infantil, tornando o aprendizado mais leve e divertido.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Playroom Educativo",
    description:
      "Momentos lúdicos com jogos e atividades que estimulam o inglês de forma natural.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: ChefHat,
    title: "Cozinha Experimental",
    description:
      "Aprenda inglês praticando receitas e vivenciando situações reais do dia a dia.",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: GraduationCap,
    title: "Professores Experientes",
    description:
      "Equipe qualificada e preparada para desenvolver o máximo potencial de cada aluno.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Ensino Personalizado",
    description:
      "Metodologia focada no seu perfil e estilo de aprendizagem para resultados mais rápidos.",
    color: "from-teal-500 to-green-600",
  },
];

export const stats = [
  { number: "2023", label: "Fundada com Amor" },
  { number: "150+", label: "Alunos pelo Mundo" },
  { number: "5", label: "Professores Dedicados" },
  { number: "100%", label: "Paixão e Propósito" },
];

export const values = [
  {
    icon: Heart,
    title: "Amor pelo Ensino",
    description:
      "Cada aula é preparada com dedicação e carinho, pensando no sucesso de cada aluno.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Coragem e Inovação",
    description:
      "Nascemos da coragem de sonhar grande e da vontade de fazer diferente.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users2,
    title: "Conexão Global",
    description:
      "Conectamos pessoas do mundo inteiro através do inglês, online e presencial.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Sonhos Grandes",
    description:
      "Este é só o começo. Temos sonhos enormes e faremos o impossível para conquistá-los.",
    color: "from-purple-500 to-indigo-500",
  },
];

export const locationInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "R. 7, 1489 - Santa Cruz",
    subcontent: "Rio Claro - SP, 13500-200",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 7h às 20h",
    subcontent: "Finais de semana: Fechado",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    content: "(19) 99604-2420",
    subcontent: "Entre em contato agora mesmo",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@hilo.com.br",
    subcontent: "Respondemos em até 24h",
    color: "from-purple-500 to-indigo-500",
  },
];

export const faqs = [
  {
    question: "Quais serviços oferecemos?",
    answer:
      "Além das aulas de inglês para crianças, jovens e adultos, também oferecemos aulas corporativas e serviços de tradução. Atendemos presencialmente em Rio Claro-SP e online para todo o mundo.",
  },
  {
    question: "Como funcionam as aulas online?",
    answer:
      "As aulas online são ao vivo via plataforma de videoconferência, com interação em tempo real com o professor. Você recebe todo o material didático digital e tem acesso a exercícios e conteúdos complementares. As aulas têm a mesma qualidade e eficiência das presenciais.",
  },
  {
    question: "Qual a duração dos cursos?",
    answer:
      "A duração varia de acordo com o nível e objetivos do aluno. Oferecemos desde cursos intensivos de 6 meses até programas completos de 2-3 anos. Fazemos uma avaliação inicial para criar um plano de estudos personalizado para você.",
  },
  {
    question: "Preciso ter conhecimento prévio de inglês?",
    answer:
      "Não! Temos turmas para todos os níveis, desde iniciantes absolutos (nunca estudaram inglês) até avançados que buscam aperfeiçoamento e fluência. Realizamos um teste de nivelamento gratuito para colocá-lo na turma ideal.",
  },
  {
    question: "Qual a metodologia de ensino da Hilo?",
    answer:
      "Nossa metodologia é comunicativa e focada em situações reais. Priorizamos a conversação desde o primeiro dia, com atividades práticas, dinâmicas e imersivas. Combinamos o melhor da pedagogia tradicional com recursos tecnológicos modernos.",
  },
  {
    question: "Quantos alunos tem por turma?",
    answer:
      "Trabalhamos com turmas reduzidas de no máximo 8-10 alunos para garantir atenção individualizada. Também oferecemos aulas particulares (one-to-one) para quem busca um aprendizado ainda mais personalizado e acelerado.",
  },
  {
    question: "Vocês oferecem certificado?",
    answer:
      "Sim! Ao concluir cada nível, você recebe um certificado de conclusão da Hilo Language School. Para certificações internacionais (como TOEFL, IELTS), oferecemos cursos preparatórios específicos.",
  },
  {
    question: "Como funciona a aula experimental?",
    answer:
      "Oferecemos uma aula experimental gratuita para você conhecer nossa metodologia, estrutura e professores. Você pode agendar pelo WhatsApp ou visitando nossa sede. Não há compromisso, é apenas para você sentir se nossa escola é a escolha certa para você!",
  },
  {
    question: "Qual o investimento?",
    answer:
      "Os valores variam de acordo com a modalidade (presencial ou online), tipo de curso (em grupo ou individual) e carga horária. Entre em contato conosco para receber uma proposta personalizada. Oferecemos planos mensais e pacotes com descontos.",
  },
  {
    question: "Como faço para me matricular?",
    answer:
      "É simples! Entre em contato via WhatsApp (19) 99604-2420, agende uma visita ou aula experimental, faça o teste de nivelamento e escolha o melhor plano para você. Nossa equipe te acompanha em todo o processo!",
  },
];
