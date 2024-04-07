import { ISponsor } from 'cesieats-service-types/src/sponsor';
import mongoose, { Schema, model } from 'mongoose';

const sponsorSchema = new Schema<ISponsor>({
  idSponsor: { type: Number, required: true },
  idSponsored: { type: Number, required: true },
});

export const Sponsor = model<ISponsor>('Account', sponsorSchema);

export const connectMongoose = () => {
  console.log(`connexion: mongodb://${process.env.DB_URL}/`);
  console.log(`user: ${process.env.DB_USERNAME}`);
  console.log(`password: ${process.env.DB_PASSWORD}`);
  mongoose
    .connect(`mongodb://${process.env.DB_URL}/`, {
      dbName: 'cesieats-service',
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
    })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(err);
    });
};