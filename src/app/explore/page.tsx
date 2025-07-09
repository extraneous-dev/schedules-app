import { usersTable } from "@/db/schema"
import { db } from "../../.."

export default async function Explore() {
    // await db.insert(usersTable).values({name: "AAA", age: 11, email: "assas@gmail.com"})
    const data = await db.select().from(usersTable);
    return(
        <div>
            <h1>Explore</h1>
            {JSON.stringify(data)}
        </div>
    )
}