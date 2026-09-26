import "./button.css";

export function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
