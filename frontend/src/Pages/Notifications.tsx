import "./Notifications.css"

type Notification = {
  id: number
  title: string
  subtitle?: string
  time: string
  unread?: boolean
}

const sampleNotifications: Notification[] = [
  { id: 1, title: "New message from Tailwinder", subtitle: "Hey — are you free to chat?", time: "2h", unread: true },
  { id: 2, title: "Your post was liked", subtitle: "Tailwinder liked your post", time: "1d" },
  { id: 3, title: "New follower", subtitle: "Tailwinder started following you", time: "3d" },
]

const Notifications = () => {
  return (
    <div className="notifications-page">
      <header className="notifications-header">
        <div>
          <h2 className="notifications-title">Notifications</h2>
          <p className="notifications-subtitle">Activity, mentions and alerts.</p>
        </div>
      </header>

      <div className="notifications-list">
        {sampleNotifications.length === 0 && (
          <div className="notifications-empty">No notifications.</div>
        )}

        {sampleNotifications.map(n => (
          <article key={n.id} className={`notification-card ${n.unread ? "unread" : ""}`}>
            <div className="notification-avatar">{n.title.charAt(0)}</div>
            <div className="notification-body">
              <div className="notification-title">{n.title}</div>
              {n.subtitle && <div className="notification-subtitle">{n.subtitle}</div>}
            </div>
            <div className="notification-meta">
              <time className="notification-time">{n.time}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Notifications