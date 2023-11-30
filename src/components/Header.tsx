import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between border-b border-zinc-500 p-5">
      <menu className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </menu>
      <Link href="/add" className="border-b border-zinc-500 hover:border-white">Add New Note</Link>
    </div>
  )
}

export default Header