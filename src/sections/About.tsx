import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Lightbulb, Users } from 'lucide-react';
import FotoPerfil from '../assets/img/foto-perfil.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desenvolvimento Full-Stack",
      description: "Experiência em Java/Spring Boot, Python, TypeScript e React"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Gestão de Dados",
      description: "Expertise em PostgreSQL e otimização de banco de dados"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Automação & Inovação",
      description: "Criação de soluções automatizadas que economizam tempo e reduzem erros"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ciclo Completo",
      description: "Da modelagem UML ao deploy e manutenção em produção"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.div
                className="rounded-full shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.img
                  src={FotoPerfil}
                  alt="Foto de Yohann Gusso"
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover block"
                  initial={{ opacity: 0, scale: 0.98, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </motion.div>

              <div className="text-center md:text-left max-w-2xl pt-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Yohann Gusso</strong> — Engenheiro de software interessado em desenvolvimento full-stack e machine learning. Sempre em busca de conhecimento sobre tecnologias que estão inovando o mercado.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Trabalho com stacks modernas (Java, Python, TypeScript, React) e foco em entregar soluções escaláveis, testáveis e com boa experiência de usuário.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                      <div className="text-blue-600">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;