import * as mongoose from 'mongoose';

export const PublikacjaSchema = new mongoose.Schema({
    tytul: { type: String, required: true },
    streszczenie: { type: String, required: true },
    akceptacja: {type: Boolean, required: true},
});

export interface Publikacja extends mongoose.Document {
         id: string;
         tytul: string;
         streszczenie: string;
         akceptacja: boolean; 
}

//export default mongoose.model("Publikacja", PublikacjaSchema)