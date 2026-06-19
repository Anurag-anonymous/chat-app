import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { settings } from '../data/chatData'
import Avatar from './Avatar'

function RoomPanel({ activeRoomId, activeTab, filteredRooms, onQueryChange, onSelectRoom, query, rooms }) {
  return (
    <section className="room-panel">
      <header className="panel-topbar">
        <button className="soft-button" type="button">
          Edit
        </button>
        <label className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            aria-label="Search rooms"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search rooms..."
            type="search"
            value={query}
          />
        </label>
      </header>

      {activeTab === 'chats' && (
        <ChatList
          activeRoomId={activeRoomId}
          filteredRooms={filteredRooms}
          onSelectRoom={onSelectRoom}
        />
      )}

      {activeTab === 'rooms' && <RoomsOverview rooms={rooms} onSelectRoom={onSelectRoom} />}

      {activeTab === 'settings' && <SettingsPanel />}
    </section>
  )
}

function ChatList({ activeRoomId, filteredRooms, onSelectRoom }) {
  return (
    <div className="chat-list">
      <div className="section-heading">
        <div>
          <p>Workspace</p>
          <h1>Chats</h1>
        </div>
        <button className="icon-button compact" type="button" title="Create room">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>

      <div className="room-list">
        {filteredRooms.map((room) => (
          <RoomCard
            isSelected={activeRoomId === room.id}
            key={room.id}
            onSelectRoom={onSelectRoom}
            room={room}
          />
        ))}
      </div>
    </div>
  )
}

function RoomCard({ isSelected, onSelectRoom, room }) {
  return (
    <button
      className={`room-card ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onSelectRoom(room.id)}
      type="button"
    >
      <Avatar accent={room.accent} name={room.name} />
      <span className="room-copy">
        <strong>{room.name}</strong>
        <span>{room.preview}</span>
      </span>
      <span className="room-meta">
        <small>{room.time}</small>
        {room.unread > 0 ? <b>{room.unread}</b> : <i />}
      </span>
    </button>
  )
}

function RoomsOverview({ rooms: availableRooms, onSelectRoom }) {
  return (
    <div className="utility-panel">
      <div className="section-heading">
        <div>
          <p>Manage</p>
          <h1>Rooms</h1>
        </div>
      </div>
      <div className="room-grid">
        {availableRooms.map((room) => (
          <button className="mini-room" key={room.id} onClick={() => onSelectRoom(room.id)} type="button">
            <Avatar accent={room.accent} name={room.name} />
            <strong>{room.name}</strong>
            <span>{room.members} members</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function SettingsPanel() {
  return (
    <div className="utility-panel">
      <div className="section-heading">
        <div>
          <p>Account</p>
          <h1>Settings</h1>
        </div>
      </div>
      <div className="settings-list">
        {settings.map((setting) => (
          <article className="setting-row" key={setting.title}>
            <span>
              <FontAwesomeIcon icon={setting.icon} />
            </span>
            <div>
              <strong>{setting.title}</strong>
              <p>{setting.text}</p>
            </div>
            <FontAwesomeIcon icon={faCheck} />
          </article>
        ))}
      </div>
    </div>
  )
}

export default RoomPanel
