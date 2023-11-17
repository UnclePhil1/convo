import { MongoClient } from 'mongodb';

let cachedDb = null;

class MongoQuery {
  constructor(collectionName) {
    this.collectionName = collectionName
  }

  async connectToDatabase() {
    if (cachedDb) {
      return cachedDb;
    }
  
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    const db = client.db('test');
    cachedDb = db;
    return db;
  }
  
  
  async getCollection() {
    const db = await this.connectToDatabase();
    return db.collection(this.collectionName);
  }

  async createRecord(record) {
    const collection = await this.getCollection();
    record.createdAt = new Date();
    record.updatedAt = new Date();
    const result = await collection.insertOne(record);
    return result.insertedId;
  }

  async createManyRecords(records) {
    const collection = await this.getCollection();
    const createdAt = new Date();
    const updatedAt = new Date();
    const recordsWithTimestamp = records.map((record) => ({
      ...record,
      createdAt,
      updatedAt,
    }));
    const result = await collection.insertMany(recordsWithTimestamp);
    return result.insertedIds;
  }

  async updateRecord(filter, update) {
    const collection = await this.getCollection();
    update.$set = update.$set || {};
    update.$set.updatedAt = new Date();
    const updatedDocument = await collection.findOneAndUpdate(filter, update, {new: true});
  }

  async updateManyRecords(filter, update) {
    const collection = await this.getCollection();
    update.$set = update.$set || {};
    update.$set.updatedAt = new Date();
    return await collection.updateMany(filter, update);
  }

  async deleteRecord(filter) {
    const collection = await this.getCollection();
    return await collection.deleteOne(filter);
  }

  async deleteManyRecords(filter) {
    const collection = await this.getCollection();
    return await collection.deleteMany(filter);
  }

  async findRecords(filter, page = 1, size = 10) {
    const skipAmount = (parseInt(page) - 1) * size;
    const collection = await this.getCollection();
    const cursor = collection.find(filter).skip(skipAmount).limit(parseInt(size));
    return await cursor.toArray();
  }

  async findRecord(filter) {
    const collection = await this.getCollection();
    return collection.findOne(filter);
  }

  async findRecordsAndPopulate(filter, fieldToPopulate) {
    const collection = await this.getCollection();
    const record = await collection.findOne(filter);

    if (!record) {
      return null;
    }

    const populatedRecord = await collection.aggregate([
      {
        $match: filter,
      },
      {
        $lookup: {
          from: fieldToPopulate.collection,
          localField: fieldToPopulate.localField,
          foreignField: fieldToPopulate.foreignField,
          as: fieldToPopulate.as,
        },
      },
    ]).toArray();

    return populatedRecord;
  }

}


const usersCollection = new MongoQuery("users");



export { usersCollection };