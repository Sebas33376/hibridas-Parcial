import { MongoClient, ObjectId } from "mongodb"
import bcrypt from "bcrypt"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1");

const colectionUser = db.collection("users");


async function addAccount(account) {

    await client.connect()

    const exist = await colectionUser.findOne({ userName: account.userName })

    if (exist) {
        throw new Error("La cuenta ya existe")
    }

    const newAccount = {...account}

    newAccount.password = await bcrypt.hash(account.password, 10)

    await colectionUser.insertOne(newAccount)
}

async function login(account) {

    await client.connect()

    const exist = await colectionUser.findOne({ userName: account.userName })

    if (!exist) {
        throw new Error("No se pudo logear")
    }

    const isMatch = await bcrypt.compare(account.password, exist.password)

    if (!isMatch) {
        throw new Error("No se pudo logear")
    }

    return { ...exist, password: undefined }
}


export {
    addAccount,
    login

}