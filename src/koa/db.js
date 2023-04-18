import path from 'path'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
console.log('Opened connection to `data/sqlitedb`.')

export const db = await open({
	filename: path.join(process.cwd(), 'data/sqlitedb'),
	driver: sqlite3.Database,
})
