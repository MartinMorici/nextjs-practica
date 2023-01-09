import Link from 'next/link'

const index = () => {
  return (
    <div>
        <h1>Empezando con NextJS</h1>
        <nav>
            <ul>
                <li><Link href='/news/noticia1'>Noticia 1</Link></li>
                <li><Link href='/news/noticia2'>Noticia 2</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default index