import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../public/IMG/assets/logo.png';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

const Footer: React.FC = () => {
  const footerLinks: { [key: string]: FooterLink[] } = {
    platform: [
      { label: 'Sobre', href: '#' },
      { label: 'Cursos', href: '#' },
      { label: 'Instrutores', href: '#' },
      { label: 'Comunidade', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Documentação', href: '#' },
      { label: 'Tutoriais', href: '#' },
      { label: 'API', href: '#' },
    ],
    support: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    legal: [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Privacidade', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Licenças', href: '#' },
    ],
  };

  

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="logo site" className={styles.logo} />
              <span className={styles.footerLogoText}>DevStream</span>
            </div>
            <p className={styles.footerTagline}>
              A melhor plataforma para aprender desenvolvimento de software.
              Cursos práticos, projetos reais e comunidade ativa.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Plataforma</h3>
              <ul className={styles.footerList}>
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Recursos</h3>
              <ul className={styles.footerList}>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Suporte</h3>
              <ul className={styles.footerList}>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Legal</h3>
              <ul className={styles.footerList}>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.footerNewsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3 className={styles.newsletterTitle}>📬 Fique por dentro</h3>
              <p className={styles.newsletterDescription}>
                Receba novos cursos e conteúdos exclusivos diretamente no seu email
              </p>
            </div>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="seu@email.com"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
           © 2024 DevStream. Projeto 100% ficticio apenas pra fins de estudoss
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;