import Link from 'next/link'

const Sobre = () => {
    return (
        <div>
            <h1>Sobre</h1>
            <Link href='/'>
                <a>Voltar para Home</a>
            </Link>
        </div>
    )
}

export default Sobre;