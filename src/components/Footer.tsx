import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/yohanngusso",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yohanngusso",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:yohann.gusso@hotmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Yohann Gusso</h3>
              <p className="text-gray-400">
                Engenheiro de Software & Desenvolvedor Full-Stack
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras. 
              Especializado em desenvolvimento full-stack e automação de processos.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400 text-sm">
                📍 Curitiba, Paraná, Brasil
              </p>
              <p className="text-gray-400 text-sm">
                📧 yohann.gusso@hotmail.com
              </p>
              <p className="text-gray-400 text-sm">
                🟢 Disponível para novos projetos
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Yohann Gusso. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              Feito por Yohann Gusso
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;