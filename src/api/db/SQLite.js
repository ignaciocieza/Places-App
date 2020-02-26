import * as SQLite from 'expo-sqlite';


export const initSQLite = ( sqlStatement, title, imageUri, address, lat, lng ) => {

    const promise = new Promise((resolve, reject) => {       
        const db = SQLite.openDatabase('place.db');
        let auxSqlStatement;
        let auxArray;

        switch (sqlStatement) {
            case 'CREATE':
                auxSqlStatement = 'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL,imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL );'
                auxArray = [];
                break;
            case 'INSERT':
                auxSqlStatement = 'INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?) ;'
                auxArray = [title, imageUri, address, lat, lng];
                break;
            case 'SELECT':
                auxSqlStatement = 'SELECT * FROM places ;'
                auxArray = [];
                break;
            default:
                auxSqlStatement = null
                break;
        }

        db.transaction((tx) => tx.executeSql(auxSqlStatement,
            auxArray,
            (_, success) => resolve(success),
            (_, error) => reject(error),
        ));
    });
    return promise;
}