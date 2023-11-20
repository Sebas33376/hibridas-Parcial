import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net"
);

const db = client.db("AH20232CP1");

const profileCollection = db.collection("profiles");

async function addProfile(account, profile) {
  const completeProfile = {
    ...profile,
    userName: account.userName,
    _id: new ObjectId(account._id),
  };

  await client.connect();

  const exist = await profileCollection.findOne({ userName: account.userName });

  if (exist) {
    throw new Error("Perfil existente");
  }

  await profileCollection.insertOne(completeProfile);
}

async function getProfile(id) {
  await client.connect();

  const profile = await profileCollection.findOne({ _id: new ObjectId(id) });
  if (!profile) {
    throw new Error("El perfil no existe");
  }
  return profile;
}

export { addProfile, getProfile };
