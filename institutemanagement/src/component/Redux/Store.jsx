import { configureStore } from '@reduxjs/toolkit'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import React from 'react'
import Reducer from './Reducer'


export const store = configureStore({
    reducer: {
        users: Reducer
    }
})

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>
// )