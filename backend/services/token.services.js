import jwt from "jsonwebtoken";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://josefina:josefina1998@proyecto.jxdpxfn.mongodb.net/");
const db = client.db("Nexosport");
const tokenCollection = db.collection("tokens");
const secretKey = process.env.JWT_SECRET || "defaultSecretKey";

async function connectToDatabase() {
    await client.connect();
}

async function createToken(account) {
    try {
        const token = jwt.sign(account, secretKey);
        await tokenCollection.insertOne({ token, account_id: account._id });
        return token;
    } catch (error) {
        throw new Error(`Error creating token: ${error.message}`);
    }
}

async function validateToken(token) {
    try {
        const payload = jwt.verify(token, secretKey);
        await connectToDatabase();
        const activeSession = await tokenCollection.findOne({ token, account_id: new ObjectId(payload._id) });

        if (!activeSession) return null;
        return payload;
    } catch (error) {
        return null;
    }
}

async function logOut(token) {
    try {
        await connectToDatabase();
        await tokenCollection.deleteOne({ token });
    } catch (error) {
        throw new Error(`Error logging out: ${error.message}`);
    }
}

async function closeConnection() {
    await client.close();
}

export {
    createToken,
    validateToken,
    logOut,
    connectToDatabase,
    closeConnection
};
