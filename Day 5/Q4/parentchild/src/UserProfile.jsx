import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Akshara",
    age: 22
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;