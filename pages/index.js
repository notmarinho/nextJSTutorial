import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href='/sobre'>
                <a>Acessar página sobre</a>
            </Link>
        </div>
    )
}

export default Home;