import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('address.db')

export const init  = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(
                `CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    image TEXT NOT NULL,
                    address TEXT NOT NULL,
                    coords TEXT NOT NULL)`,
                                [],
                () =>  {resolve()},
                (_, err) => {reject(err)}
            )
        })
    })
    
    return promise
}