import UserItem from "./UserItem";
// import "./sidebar.css";

const users = [
  { id: 1, name: "Rahul", lastMsg: "Hello admin", unread: 2, online: true },
  { id: 2, name: "Ankit", lastMsg: "Need help", unread: 0, online: false },
];

const UserList = ({ onSelectUser }) => {
  return (
    <div className="user-list">
      <h3>Chats</h3>
      {users.map((u) => (
        <UserItem key={u.id} user={u} onClick={onSelectUser} />
      ))}
    </div>
  );
};

export default UserList;
