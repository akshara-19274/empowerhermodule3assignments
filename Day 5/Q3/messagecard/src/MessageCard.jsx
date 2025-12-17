function MessageCard({ title, message }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "16px", 
      margin: "12px", 
      maxWidth: "300px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;