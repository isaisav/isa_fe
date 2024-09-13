import { useRef } from "react"

export function ItemSize({ size, onClick }: { size: string, onClick: (s: string) => void }) {
  const r = useRef<HTMLDivElement>(null);
  const z = () => {
    r.current!.style.backgroundColor = "black";
    r.current!.style.color = "white";
    onClick(size)
  }
  return (
    <div className="w-8 h-8 p-2 border-black border-2 rounded-s flex justify-center items-center cursor-pointer" onClick={z} ref={r}>
      <span>{size}</span>
    </div>
  )
}
