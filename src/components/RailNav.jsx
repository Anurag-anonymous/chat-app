import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { navItems } from '../data/chatData'

function RailNav({ activeTab, onTabChange }) {
  return (
    <aside className="rail" aria-label="Primary">
      <div className="brand-mark">C</div>
      <nav className="rail-nav">
        {navItems.map((item) => (
          <button
            className={`rail-button ${activeTab === item.id ? 'is-active' : ''}`}
            key={item.id}
            onClick={() => onTabChange(item.id)}
            type="button"
            title={item.label}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <button className="rail-button logout" type="button" title="Logout">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span>Logout</span>
      </button>
    </aside>
  )
}

export default RailNav
