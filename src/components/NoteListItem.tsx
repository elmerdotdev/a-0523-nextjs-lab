import Link from 'next/link'

const NoteListItem = () => {
  return (
    <div className="flex flex-col gap-1 p-5 border border-white">
      <h3 className="text-xl"></h3>
      <div className="capitalize italic"></div>
      <div className="flex gap-2 mt-2">
        <Link href={`/view`} className="border border-white px-2 py-1 rounded hover:bg-white hover:text-black">View Note</Link>
        <Link href={`/edit`} className="border border-white px-2 py-1 rounded hover:bg-white hover:text-black">Edit Note</Link>
        <button className="border border-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  )
}

export default NoteListItem