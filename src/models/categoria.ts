import mongoose from "mongoose";

interface ICategoria {
    titolo: string;
    contenuto: string;
    autore: string;
    dataCreazione: Date;
    dataModifica?: Date;
}

const categoriaSchema = new mongoose.Schema<ICategoria>({
    titolo: { type: String, required: true },
    contenuto: { type: String, required: true },
    autore: { type: String, required: true },
    dataCreazione: { type: Date, default: Date.now() },
    dataModifica: { type: Date, default: Date.now() },
})

export const Categoria = mongoose.model<ICategoria>('Categoria', categoriaSchema);