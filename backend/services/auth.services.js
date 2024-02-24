import { MongoClient } from "mongodb"
import bcrypt from "bcrypt"

const client = new MongoClient("mongodb+srv://josefina:josefina1998@proyecto.jxdpxfn.mongodb.net/");

const db = client.db("Nexosport");

const colectionUser = db.collection("users");


async function addAccount(account) {

    await client.connect()

    const exist = await colectionUser.findOne({ userName: account.userName })

    if (exist) {
        throw new Error("La cuenta ya existe")
    }

    const newAccount = { ...account }

    newAccount.password = await bcrypt.hash(account.password, 10)

    await colectionUser.insertOne(newAccount)
}

async function login(account) {
    try {
        await client.connect()

        const exist = await colectionUser.findOne({ userName: account.userName })

        if (!exist) {
            throw new Error("El usuario no se encontro")
        }

        const isMatch = await bcrypt.compare(account.password, exist.password)

        if (!isMatch) {
            throw new Error("Contraseña invalida")
        }

        return { ...exist, password: undefined }


    } catch (error) {
        console.log(error)

    }

}


export {
    addAccount,
    login

}