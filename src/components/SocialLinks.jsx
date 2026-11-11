// Desenhos vetoriais locais: não dependem de fontes de ícones ou de CDN.
const paths = {
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  youtube: <><path d="M21 7c-.2-1.2-1-2-2.2-2.2a45 45 0 0 0-13.6 0C4 5 3.2 5.8 3 7a27 27 0 0 0 0 10c.2 1.2 1 2 2.2 2.2a45 45 0 0 0 13.6 0c1.2-.2 2-1 2.2-2.2a27 27 0 0 0 0-10Z" fill="currentColor" stroke="none" /><path d="m10 8 6 4-6 4Z" fill="var(--page-bg)" stroke="none" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="1" fill="currentColor" stroke="none" /><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" stroke="var(--page-bg)" strokeWidth="2" /><circle cx="7" cy="7" r="1.2" fill="var(--page-bg)" stroke="none" /></>,
  github: <><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9c0-1.1-.4-1.8-.8-2.2 2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 6c.1-.3.6-1.8-.1-3.7 0 0-1.1-.4-3.8 1.4a13 13 0 0 0-6.8 0C5.1 1.9 4 2.3 4 2.3 3.3 4.2 3.8 5.7 3.9 6a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6-.4.4-.8 1.1-.8 2.2V22" /></>,
}

export default function SocialLinks({ links }) {
  return (
    <nav className="social-links" aria-label="Redes e recursos">
      {links.map(({ id, label, href, icon }) => (
        <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[icon]}</svg>
        </a>
      ))}
    </nav>
  )
}
