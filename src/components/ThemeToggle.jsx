export default function ThemeToggle({ theme, onToggle }) {
  const light = theme === 'light'

  return (
    <button className="theme-control" type="button" aria-label="Modo claro" aria-pressed={light} onClick={onToggle}>
      <span className="theme-track" aria-hidden="true" />
      <span className="theme-thumb" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {light ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>
            : <path d="M20.5 14A8.5 8.5 0 1 1 10 3.5 7 7 0 0 0 20.5 14ZM17 3v4m-2-2h4" />}
        </svg>
      </span>
    </button>
  )
}
