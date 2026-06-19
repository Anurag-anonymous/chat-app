import { useMemo, useState } from 'react'
import ChatPanel from './components/ChatPanel'
import RailNav from './components/RailNav'
import RoomPanel from './components/RoomPanel'
import { messagesByRoom, rooms } from './data/chatData'
import './components/universal.css'

function App() {
  const [activeTab, setActiveTab] = useState('chats')
  const [activeRoomId, setActiveRoomId] = useState(rooms[0].id)
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState('')
  const [sentMessages, setSentMessages] = useState({})
  const [mobileChatOpen, setMobileChatOpen] = useState(false)

  const activeRoom = rooms.find((room) => room.id === activeRoomId) ?? rooms[0]

  const filteredRooms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return rooms

    return rooms.filter((room) =>
      [room.name, room.topic, room.preview].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    )
  }, [query])

  const visibleMessages = [
    ...(messagesByRoom[activeRoom.id] ?? []),
    ...(sentMessages[activeRoom.id] ?? []),
  ]

  const sendMessage = (event) => {
    event.preventDefault()
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    const newMessage = {
      id: Date.now(),
      author: 'You',
      body: trimmedMessage,
      time: 'Just now',
      mine: true,
      color: '#61c6ff',
    }

    setSentMessages((current) => ({
      ...current,
      [activeRoom.id]: [...(current[activeRoom.id] ?? []), newMessage],
    }))
    setMessage('')
  }

  const selectRoom = (roomId) => {
    setActiveRoomId(roomId)
    setActiveTab('chats')
    setMobileChatOpen(true)
  }

  return (
    <main className={`app-shell ${mobileChatOpen ? 'chat-open' : ''}`}>
      <RailNav activeTab={activeTab} onTabChange={setActiveTab} />
      <RoomPanel
        activeRoomId={activeRoom.id}
        activeTab={activeTab}
        filteredRooms={filteredRooms}
        onQueryChange={setQuery}
        onSelectRoom={selectRoom}
        query={query}
        rooms={rooms}
      />
      <ChatPanel
        activeRoom={activeRoom}
        message={message}
        messages={visibleMessages}
        onBack={() => setMobileChatOpen(false)}
        onMessageChange={setMessage}
        onSendMessage={sendMessage}
      />
    </main>
  )
}

export default App
