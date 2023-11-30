import prisma from '@/db'
import NoteListItem from './NoteListItem'

const NoteList = async () => {
  const notes = await prisma.note.findMany()

  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {notes.map(note => (
        <NoteListItem key={note.id} {...note}/>
      ))}
    </div>
  )
}

export default NoteList