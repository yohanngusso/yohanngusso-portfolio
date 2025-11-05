import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Desenvolvedor de Software Freelancer",
      company: "Freelancer",
      period: "Mar 2025 - Presente",
      location: "Curitiba, Paraná, Brasil · Remota",
      duration: "8 meses",
      description: "Desenvolvimento de soluções completas para clientes diversos, desde startups até empresas estabelecidas.",
      achievements: [
        "Engenharia de Requisitos e Modelagem UML: Traduzo regras de negócio em especificações técnicas e diagramas (Casos de Uso, Classes, Sequência) que servem como base para um desenvolvimento sólido.",
        "Arquitetura e Desenvolvimento Full-Stack: Implemento soluções utilizando uma stack moderna (Java, Python, TypeScript, React) e garanto a qualidade do código com Testes Unitários.",
        "Automação com Python: Desenvolvo scripts para automatizar tarefas manuais e rotinas repetitivas — como extração de dados de PDFs com Camelot, transformação com Pandas e geração automática de relatórios em Excel, além de integrações com APIs.",
        "Arquitetura de Soluções Sob Medida: Defino a arquitetura tecnológica ideal para cada projeto, seja utilizando bancos de dados relacionais (PostgreSQL/MySQL) para sistemas complexos ou plataformas como Supabase/Firebase para acelerar o desenvolvimento (MVP) e otimizar custos.",
        "Ciclo de Vida Completo: Sou responsável pelo deploy, implementação em produção e pela manutenção evolutiva das aplicações, garantindo suporte pós-entrega."
      ],
      isActive: true
    }
  ];

  const additionalInfo = [
    {
      title: "Clube de Programação - INFNET",
      description: "Membro do Clube de Programação da INFNET — resolvo desafios (LeetCode) e estudo aplicações de ML/IA",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Pesquisa em Visão Computacional & DL",
      description: "Pesquisas em visão computacional e deep learning; Estudos na evolução e origem das LLMs",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Prototipagem & UI",
      description: "Prototipagem e design de interfaces para aplicações web e mobile (wireframes e protótipos interativos)",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trajetória focada em desenvolvimento full-stack e soluções inovadoras
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {/* Timeline dot */}
              <div className={`absolute left-6 top-8 w-4 h-4 rounded-full ${exp.isActive ? 'bg-blue-600' : 'bg-gray-400'} border-4 border-white shadow-lg`}></div>
              
              <div className="ml-20 pb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-medium mb-2">
                        {exp.company}
                      </p>
                    </div>
                    {exp.isActive && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Atual
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Principais Responsabilidades:
                    </h4>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 + achIndex * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Outras Atividades
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <div className="text-blue-600">
                    {info.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {info.title}
                </h4>
                <p className="text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;