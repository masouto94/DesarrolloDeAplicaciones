import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('address.db')

export const sqlStatementMapper = async (dbInstance, sqlStatement, sqlArgs=[]) => {
    const sqlPromise = new Promise((resolve,reject) => {
        dbInstance.transaction((transaction) => {
            transaction.executeSql(
                sqlStatement,
                sqlArgs,
                (trans, result) => { 
                    console.log(trans)
                    resolve(result)
                },
                (trans, error) => { 
                    console.log(trans)
                    reject(error)}
            )
        })
    })
    return sqlPromise
}

export const populateMock = async (user,photo,email) => {
    return sqlStatementMapper(db,
        'INSERT INTO profile(user_name, profile_picture , email) VALUES (?,?,?)',
        [user,photo,email])

}


export const  init  = async () => {
    return sqlStatementMapper(
        db,
        `CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY NOT NULL,
            user_name TEXT NOT NULL,
            profile_picture TEXT NOT NULL,
            email TEXT NOT NULL)`
    )

}

export const select = async () => {
    
    return sqlStatementMapper(db, 'SELECT * from profile')
}