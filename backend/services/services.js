import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://josefina:josefina1998@proyecto.jxdpxfn.mongodb.net/");

const db = client.db("Nexosport")

const colectionTeam = db.collection("teams");

async function getTeams(filters) {

    const filter = { state: { $ne: false } };

    if (filters.section) {
        filter.section = filters.section
    }

    return colectionTeam.find(filter).toArray();
}

async function getTeamById(id) {
    return colectionTeam.findOne({ _id: new ObjectId(id) });
}

async function createTeam(team) {
    const newTeam = await colectionTeam.insertOne(team);
    return newTeam;
}

async function replaceTeam(id, team) {
    const replaced = await colectionTeam.replaceOne({ _id: new ObjectId(id) }, team);
    return replaced;
}

async function editTeam(id, team) {
    const edited = await colectionTeam.updateOne({ _id: new ObjectId(id) }, { $set: team });
    return edited;
}

async function deletTeam(id) {
    const deleted = await colectionTeam.updateOne({ _id: new ObjectId(id) }, { $set: { state: false } });
    return deleted;
}

async function getHistory(id) {

    return colectionTeam.find({$or: [{organizer_id: id}, {joined: id}]}).toArray();
}

export {
    getTeams,
    getTeamById,
    createTeam,
    replaceTeam,
    editTeam,
    deletTeam,
    getHistory
}