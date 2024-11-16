import mongoose from "mongoose";

interface IPosts {
    titolo: string;
    contenuto: string;
    autore: string;
    dataCreazione: Date;
    dataModifica?: Date;
}

const PostsSchema = new mongoose.Schema<IPosts>({
    titolo: { type: String, required: true },
    contenuto: { type: String, required: true },
    autore: { type: String, required: true },
    dataCreazione: { type: Date, default: Date.now() },
    dataModifica: { type: Date, default: Date.now() },
})

export const Posts = mongoose.model<IPosts>('Posts', PostsSchema);