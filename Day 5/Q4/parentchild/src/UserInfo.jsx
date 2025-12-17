function UserInfo({ name, age }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "12px", 
      margin: "10px", 
      maxWidth: "250px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;