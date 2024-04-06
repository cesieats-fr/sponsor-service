import { ISponsor } from 'cesieats-service-types/src/sponsor';
import mongoose, { Schema, model } from 'mongoose';

const sponsorSchema = new Schema<ISponsor>({
  idSponsor: { type: Number, required: true },
  idSponsorised: { type: Number, required: true },
});

export const Sponsor = model<ISponsor>('Account', sponsorSchema);

export const connectMongoose = () => {
  mongoose
    .connect('mongodb://192.168.2.30:32000/', {
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