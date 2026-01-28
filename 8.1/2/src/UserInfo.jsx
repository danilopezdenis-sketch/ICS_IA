import { useAuth } from "./AuthContext";

export const UserInfo = () => {
  const { currentUser } = useAuth();

  return (
    <div style={{
      position: "absolute",
      top: "1rem",
      right: "1rem",
      padding: "0.5rem 1rem",
      background: "#2563eb",
      color: "#fff",
      borderRadius: "4px"
    }}>
      Usuario: {currentUser.name}
    </div>
  );
};
