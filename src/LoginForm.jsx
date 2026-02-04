function LoginForm({ username, setUsername, password, setPassword, onLogin, error }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center",
        animation: "fadeIn 1s ease-in"
      }}
    >
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: error ? "1px solid red" : "1px solid #ccc"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: error ? "1px solid red" : "1px solid #ccc"
        }}
      />

      <button
        onClick={onLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: "#667eea",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Login
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>{error}</p>
      )}
    </div>
  );
}

export default LoginForm;
