import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('address.db')

export const sqlStatementMapper = async (dbInstance, sqlStatement, sqlArgs=[]) => {
    const sqlPromise = new Promise((resolve,reject) => {
        dbInstance.transaction((transaction) => {
            transaction.executeSql(
                sqlStatement,
                sqlArgs,
                (trans, result) => {
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

export const  init  = async () => {
    return sqlStatementMapper(
        db,
        `CREATE TABLE IF NOT EXISTS profiles (id INTEGER PRIMARY KEY NOT NULL,
            user_name TEXT NOT NULL,
            profile_picture TEXT NOT NULL,
            email TEXT NOT NULL)`
    )

}

export const selectAllResults =  (table, query='') => {
    return sqlStatementMapper(db, `SELECT * FROM ${table} ${query}`)
}

export const queryResults = (cols, table, query = '') => {
    return sqlStatementMapper(db, `SELECT ${cols} FROM ${table} ${query}`)
}

export const countRows = async (table, expression='*') => {
    return sqlStatementMapper(
        db,
        `SELECT COUNT(${expression}) FROM ${table}`
        )
}
export const truncateTable = async (table) => {

    return sqlStatementMapper(db,
        `DELETE FROM ${table};
         VACUUM`)
}

export const insertProfile = async (user_name, profile_picture, email) => {
    return sqlStatementMapper(
        db,
        'INSERT INTO profiles (user_name, profile_picture, email) VALUES(?,?,?)',
        [user_name, profile_picture, email]
    )

}
export const populateMock = async (user,photo,email) => {
    return sqlStatementMapper(db,
        'INSERT INTO profiles (user_name, profile_picture , email) VALUES (?,?,?)',
        [user,photo,email])

}


