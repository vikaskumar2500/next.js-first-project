// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://vikas:meetups@cluster0.hkt90qy.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups'); 
    const result = await meetupsCollection.insertOne(data);
    
    client.close();
    res.status(201).json({message:'Meetup inserted!'});

  }
}
