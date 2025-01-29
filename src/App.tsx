import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useLazyQuery, gql } from '@apollo/client';
import { useApolloClient } from '@apollo/client'

import './App.css'






const GET_APPS = gql`

    query MyQuery {
    projects {
        edges {
        node {
            id
        }
        }
    }
    }

`;




function DisplayProjects(token: string) {

    const [
        getApps,
        { loading, data }
    ] = useLazyQuery(GET_APPS);



    if (loading) return <p>Loading...</p>;


    console.log(token);
    console.log(data);

    return (

        <div >
            <p>
                HEYYY
            </p>

            <div>
                <button onClick={x => getApps()}>
                    HEY!!
                </button>
            </div>
        </div>

    );

}




function App() {





    const [count, setCount] = useState(0)
    const [token, setToken] = useState('')


    const onTokenChange = (token: string) => {
        setToken(token)
        localStorage.setItem('personal-access-token', token)
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <DisplayProjects />
            <input
                type="text"
                onChange={(x) => onTokenChange(x.target.value)}
                placeholder={'API TOKEN'}
                className="text-box"
            />
        </>
    )
}

export default App
