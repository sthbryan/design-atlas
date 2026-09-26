import { useState } from "react";

export function LocationMenu({ locations }: { locations: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu-root">
      <button className="menu-trigger" aria-expanded={open} onClick={() => setOpen(!open)}>
        Location
      </button>
      {open && (
        <ul className="menu" role="menu">
          {locations.map((l) => (
            <li key={l} role="menuitem" className="menu-item">
              {l}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
