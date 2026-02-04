function Dashboard({ username, onLogout }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center",
        animation: "fadeIn 1s ease-in"
      }}
    >
      <h2 style={{ color: "#333" }}>{`Welcome back, ${username}! 🎉`}</h2>
      <p style={{ marginBottom: "20px" }}>You are successfully logged in!</p>
      <button
        onClick={onLogout}
        style={{
          padding: "10px 20px",
          background: "#764ba2",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;



