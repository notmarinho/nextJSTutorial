import { useState } from 'react'

const Home = () => {
    return (
        <div>
            <h2>Home 3</h2>
            <Contador />
        </div>
    )
}

const Contador = () => {
    const [contador, setContador] = useState(0)

    function adicionarContador() {
        setContador(previewState => previewState + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;