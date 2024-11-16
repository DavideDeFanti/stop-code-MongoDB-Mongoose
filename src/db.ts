import mongoose from "mongoose";
import { Posts } from "./models/categoria";

export const insertPost = async (titolo: string, contenuto: string, autore: string, dataCreazione: Date) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "blogPosts" });

        const newPost = new Posts()
        newPost.titolo = titolo;
        newPost.contenuto = contenuto;
        newPost.autore = autore;
        newPost.dataCreazione = dataCreazione;

        return await newPost.save();

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const getPosts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "blogPosts" });
        return await Posts.find();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const updatePost = async (id: string, titolo: string, contenuto: string, autore: string, dataModifica: Date) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "blogPosts" });

        return await Posts.findByIdAndUpdate(id, { titolo, contenuto, autore, dataModifica }, { new: true });
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const deletePost = async (id: string) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "blogPosts" });
        return await Posts.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}