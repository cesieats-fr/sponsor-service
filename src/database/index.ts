import { ISponsor } from 'cesieats-service-types/src/sponsor';
import mongoose, { Schema, model } from 'mongoose';

const sponsorSchema = new Schema<ISponsor>({
  idSponsor: { type: Number, required: true },
  idSponsored: { type: Number, required: true },
});

export const Sponsor = model<ISponsor>('Account', sponsorSchema);

export async function connectMongoose() {
  await mongoose.connect(`mongodb://${process.env.DB_URL}/`, {
    dbName: 'cesieats-service',
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
  });
  console.log('Connected to MongoDB ');
}
