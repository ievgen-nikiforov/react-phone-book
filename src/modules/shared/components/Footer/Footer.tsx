import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import styles from './Footer.module.scss';

const REPO_URL = 'https://github.com/ievgen-nikiforov/react-phone-book';

const links = [
  { label: 'Github', href: REPO_URL },
  { label: 'Contacts', href: 'https://github.com/ievgen-nikiforov' },
  { label: 'Rights', href: `${REPO_URL}/blob/main/LICENSE` },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <Logo />

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.backToTop}>
        <span className={styles.backToTopLabel}>Back to top</span>
        <button
          type="button"
          className={styles.backToTopButton}
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <Icon name="chevron-up" />
        </button>
      </div>
    </div>
  </footer>
);
