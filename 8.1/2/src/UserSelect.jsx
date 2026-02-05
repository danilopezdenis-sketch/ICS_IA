import { useAuth } from "./AuthContext";

export const UserSelect = () => {
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <select
      value={currentUser.name}
      onChange={(e) => setCurrentUser({ name: e.target.value })}
      style={{ marginTop: "1rem", padding: "0.3rem", borderRadius: "4px" }}
    >
      <option>Ana</option>
      <option>Luis</option>
      <option>Invitado</option>
    </select>
  );
};
