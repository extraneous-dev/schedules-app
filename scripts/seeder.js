import {getDb} from "../index.js"
import faker from 'faker'
import { ordersTable, businessTable, menuTable } from '../src/db'
const db = getDb()

db.insert(menuTable).values({
    name: faker.food.dish(),
    price: faker.commerce.price({max: 50}),
    businessId: 1
})