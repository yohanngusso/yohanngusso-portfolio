import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactElement } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Projetos placeholder com base na experiência
  type Project = {
    title: string;
    description: string;
    technologies: string[];
    category: string;
    icon: ReactElement;
    status: string;
    features: string[];
    repo?: string;
    liveUrl?: string;
  };

  const projects: Project[] = [
    {
      title: "Sistema de Automação de Relatórios",
      description: "Solução Python para extração automática de dados de PDFs usando Pytesseract, transformação com Pandas e geração de relatórios Excel.",
      technologies: ["Python", "Pandas", "Pytesseract", "Excel"],
      category: "Automação",
      icon: <Database className="w-6 h-6" />,
      status: "Dev v1.0.0",
      repo: "https://github.com/yohanngusso/automacao-relatorio/tree/dev",
      features: [
        "Extração automática de dados de PDFs",
        "Transformação e limpeza de dados",
        "Geração de relatórios automatizados"
      ]
    },
    {
      title: "Sistema Bancário",
      description: "Construção de uma API RESTful para um sistema bancário utilizando Java 17 e Spring Boot 3, com endpoints para operações CRUD de contas, transferências e consultas de extrato.",
      technologies: ["Spring Boot", "Java", "API RESTful", "Swagger", "PostgreSQL", "Cloud", "Docker"],
      category: "Web Application",
      icon: <Code className="w-6 h-6" />,
      status: "Em Desenvolvimento",
      repo: "https://github.com/yohanngusso/baking-api-spring/tree/dev",
      features: [
        "Operações CRUD de contas bancárias",
        "Modelagem e gerenciamento do banco de dados PostgreSQL",
        "Sistema de transferências seguro",
        "Consultas de extrato e histórico",
        "Documentação completa com Swagger"
      ]
    },
    {
      title: "App Mobile de Produtividade",
      description: "Aplicativo React Native para gestão de tarefas e produtividade pessoal com sincronização em tempo real.",
      technologies: ["React Native", "TypeScript", "Expo"],
      category: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      status: "Em Breve",
      features: [
        "Interface intuitiva e responsiva",
        "Sincronização em tempo real",
        "Notificações push",
        "Modo offline"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Desenvolvimento":
        return "bg-yellow-100 text-yellow-800";
      case "Concluído":
        return "bg-green-100 text-green-800";
      case "Em Breve":
        return "bg-blue-100 text-blue-800";
      case "Planejado":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluções inovadoras desenvolvidas com tecnologias modernas e foco na experiência do usuário
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <div className="text-blue-600">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Principais Funcionalidades:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* Botão principal: se houver liveUrl use link, senão botão desabilitado 'Em Breve' */}
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Demo
                    </motion.a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4" />
                      Em Breve
                    </motion.button>
                  )}

                  {/* Botão GitHub: se project.repo existir, renderiza <a> ativo; caso contrário, mostra botão desabilitado */}
                  {project.repo ? (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 text-gray-600" />
                    </motion.a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interessado em colaborar?
            </h3>
            <p className="text-gray-600 mb-6">
              Estou sempre aberto a novos projetos e oportunidades de desenvolvimento. 
              Vamos criar algo incrível juntos!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Entre em Contato
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;