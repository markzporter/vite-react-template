import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const link = new HttpLink({ uri: 'https://backboard.railway.com/graphql/v2', });



const setAuthorizationLink = setContext((request, previousContext) => ({
    headers: {
      ...previousContext.headers,
      authorization: `Bearer ${ localStorage.getItem('auth_token') }`
    }}));
 


  const client = new ApolloClient({
    link: setAuthorizationLink.concat(link),
    cache: new InMemoryCache()
  });




ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
)
