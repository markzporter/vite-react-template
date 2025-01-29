import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const link = new HttpLink({
    uri: 'https://backboard.railway.com/graphql/v2',
    fetchOptions: {
        mode: "no-cors",
    },
});



// const authLink = new ApolloLink((operation, forward) => {
//     // Retrieve the authorization token from local storage.
//     //const token = localStorage.getItem('auth_token');
//     const token = '3b874926-f8ab-4bb8-bad1-2818751268d7';
//     // Use the setContext method to set the HTTP headers.
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : 'HELP'
//       }
//     });
  
//     // Call the next link in the middleware chain.
//     return forward(operation);
//   });


// const setAuthorizationLink = setContext((_, { headers }) => ({
//     headers: {
//         ...headers,
//         Authorization: `Bearer ${localStorage.getItem('auth_token')}`
//     }
// }));



const client = new ApolloClient({
    //link: authLink.concat(link),
    uri: 'https://backboard.railway.com/graphql/v2',
    headers: {
        authorization: `Bearer: 81335197-ccd2-484a-bf80-2edb17cdbcee`
    },
    cache: new InMemoryCache()
});





ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
)
