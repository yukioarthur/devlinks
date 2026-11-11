import { useEffect, useState } from 'react'
import Profile from './components/Profile.jsx'
import LinkButton from './components/LinkButton.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import avatar from './assets/avatar.jpg'
import { links, socialLinks } from './data/links.js'

const themeKey = 'devlinks:theme'

function readTheme() {
  try {
    return localStorage.getItem(themeKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function App() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(themeKey, theme)
    } catch {
      // A interface continua funcionando quando o navegador bloqueia o storage.
    }
  }, [theme])

  function toggleTheme() {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="container" aria-label="DevLinks de Arthur Yukio">
      <Profile avatar={avatar} name="Arthur Yukio" />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <nav aria-label="Links principais">
        <ul className="link-list">
          {links.map(link => <li key={link.id}><LinkButton {...link} /></li>)}
        </ul>
      </nav>
      <SocialLinks links={socialLinks} />
      <footer>Feito com <span aria-label="amor">♥</span> por Arthur Yukio</footer>
    </main>
  )
}
