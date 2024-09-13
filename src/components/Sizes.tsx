import { useEffect, useState } from "react"
import { Size } from "~/types";

export function Sizes() {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [newSize, setNewSize] = useState("");

  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const _fetch = async () => {
      const data = await fetch("http://localhost:8080/size/all", { method: "GET" });
      const djson = await data.json();
      setSizes(djson);
    }
    _fetch()
  }, []);

  console.log(sizes)
  return (
    <div className="pl-5">
      <label htmlFor="addSize">Add size</label>
      <input className="border-2 border-black mx-2" type="newSize" id="addSize" value={newSize} onChange={e => setNewSize(e.target.value)} />
      <button className="border-2 border-black" onClick={async () => {
        await fetch(`http://localhost:8080/size/add`, { method: "POST", body: newSize });
        setSizes([
          ...sizes,
          { id: Math.floor(Math.random() * 999), name: newSize }
        ])
        setNewSize("")
      }}>Add new size</button>
      <br />
      <label htmlFor="updateSizeName">Update size</label>
      <input className="border-2 border-black" type="text" name="oldName" id="oldName" placeholder="Old name" value={oldName} onChange={e => setOldName(e.target.value)} />
      <input className="border-2 border-black" type="text" name="newName" id="newName" placeholder="New name" value={newName} onChange={e => setNewName(e.target.value)} />
      <button className="border-2 border-black" onClick={async () => {
        await fetch(`http://localhost:8080/size/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            oldName,
            newName
          })
        });
        setSizes(sizes.filter(i => i.name !== oldName))
        setSizes([
          ...sizes,
          { id: Math.floor(Math.random() * 999), name: newName }
        ])
      }}>Update</button>


      <p>Available sizes: </p>
      {
        sizes?.map(e => {
          return (
            <div className="flex gap-2">
              <p key={e.name}>{e.name}</p>
              <button className="border-2 border-black" onClick={async () => {
                await fetch(`http://localhost:8080/size/delete/${e.id}`, { method: "DELETE" });
                setSizes(sizes.filter(s => s.id !== e.id))
              }}>Delete</button>
            </div>
          )
        })
      }
    </div >
  )
}
