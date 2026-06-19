function Avatar({ accent, name, small = false }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <span className={`avatar ${small ? 'small' : ''}`} style={{ '--avatar-accent': accent }}>
      {initials}
    </span>
  )
}

export default Avatar
