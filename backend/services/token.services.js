import jwt from "jsonwebtoken";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");


const db = client.db("AH20232CP1")

const tokenCollection = db.collection("tokens")

async function createToken(account){
   const token = jwt.sign(account, "secret key")

await client.connect()

await tokenCollection.insertOne({token, account_id: account._id})

  return token;
}

async function validateToken(token) {
    try {
        const payload = jwt.verify(token, "secret key");
        await client.connect()
        const activeSession = await tokenCollection.findOne({token, account_id: new ObjectId(payload._id)})

        if (!activeSession) return null;

        return payload;
        
    } catch (error) {
        return null;
    }
}

async function logOut(token) {
    await client.connect()

    await tokenCollection.deleteOne({token})
}

export {
    createToken,
    validateToken,
    logOut
}