export default function Profile({ avatar, name }) {
  return (
    <header className="profile">
      <img src={avatar} alt={`Foto de ${name}`} width="112" height="112" />
      <h1>{name}</h1>
    </header>
  )
}
