import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inputElementRef = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElementRef) return;

    inputElementRef.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElementRef}
    />
  );
}
