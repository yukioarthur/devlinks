export default function LinkButton({ label, href }) {
  return <a className="link-button" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
}
