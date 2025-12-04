import "./Notifications.css"

// type Props = {}

const Notifications = () => {
  return (
     <div>
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <p className="text-muted-foreground">Activity, mentions and alerts.</p>
      <div className="notification-list">
        <div className="notification-item">New message from Tailwinder</div>
        <div className="notification-item">Your post was liked by Tailwinder</div>  
        <div className="notification-item">New follower: Tailwinder</div>
      </div>
    </div>
  )
}

export default Notifications