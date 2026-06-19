import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faPhone,
  faUsers,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar'

function ChatPanel({ activeRoom, message, messages, onBack, onMessageChange, onSendMessage }) {
  return (
    <section className="chat-panel">
      <ChatHeader activeRoom={activeRoom} onBack={onBack} />
      <div className="messages" aria-live="polite">
        <div className="date-pill">Today</div>
        {messages.map((chatMessage) => (
          <MessageBubble key={chatMessage.id} message={chatMessage} />
        ))}
      </div>
      <form className="composer" onSubmit={onSendMessage}>
        <button className="icon-button" type="button" title="Attach file">
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        <input
          aria-label="Type a message"
          onChange={(event) => onMessageChange(event.target.value)}
          placeholder={`Message ${activeRoom.name}`}
          value={message}
        />
        <button className="icon-button" type="button" title="Record voice">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button className="send-button" type="submit" title="Send message">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </section>
  )
}

function ChatHeader({ activeRoom, onBack }) {
  return (
    <header className="chat-header">
      <button className="back-button" onClick={onBack} type="button">
        Back
      </button>
      <Avatar accent={activeRoom.accent} name={activeRoom.name} />
      <div className="chat-title">
        <strong>{activeRoom.name}</strong>
        <span>
          <FontAwesomeIcon icon={faUsers} /> {activeRoom.members} members - {activeRoom.status}
        </span>
      </div>
      <div className="chat-actions">
        <button className="icon-button" type="button" title="Start call">
          <FontAwesomeIcon icon={faPhone} />
        </button>
        <button className="icon-button" type="button" title="Start video">
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button className="icon-button" type="button" title="More options">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </header>
  )
}

function MessageBubble({ message }) {
  return (
    <article className={`message ${message.mine ? 'mine' : ''}`}>
      {!message.mine && <Avatar accent={message.color} name={message.author} small />}
      <div className="message-content">
        <span className="message-author">{message.author}</span>
        <p>{message.body}</p>
        <time>{message.time}</time>
      </div>
    </article>
  )
}

export default ChatPanel
