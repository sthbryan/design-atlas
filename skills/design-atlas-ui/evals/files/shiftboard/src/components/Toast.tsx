import { useEffect } from "react";

type ToastProps = {
  message: string;
  kind: "info" | "error";
  onUndo?: () => void;
  onClose: () => void;
};

export function Toast({ message, kind, onUndo, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className={`toast toast-${kind}`}>
      <span>{message}</span>
      {onUndo && <button onClick={onUndo}>Undo</button>}
    </div>
  );
}
