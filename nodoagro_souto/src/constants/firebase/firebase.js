export const API_URL = "https://nodo-agro-default-rtdb.firebaseio.com"

export const API_SIGN_UP_KEY = "AIzaSyDsJgUc9TaOCIXEu0x6yHtPpAOn8WvU-cU"

import { getDatabase } from "firebase/database"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDsJgUc9TaOCIXEu0x6yHtPpAOn8WvU-cU",
    authDomain: "nodo-agro.firebaseapp.com",
    databaseURL: "https://nodo-agro-default-rtdb.firebaseio.com",
    projectId: "nodo-agro",
    storageBucket: "nodo-agro.appspot.com",
    messagingSenderId: "290150501486",
    appId: "1:290150501486:web:305520e50bbc282c9a2a7f",
    measurementId: "G-ZQ9JZ42478"
}

export const firebaseApp = initializeApp(firebaseConfig)
export const database = getDatabase(firebaseApp)
