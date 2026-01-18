const UserItem = ({ user, onClick }) => {
  return (
    <div className="user-item" onClick={() => onClick(user)}>
      <div className={`avatar ${user.online ? "online" : ""}`}></div>

      <div className="user-info">
        <h4>{user.name}</h4>
        <p>{user.lastMsg}</p>
      </div>

      {user.unread > 0 && (
        <span className="badge">{user.unread}</span>
      )}
    </div>
  );
};

export default UserItem;
