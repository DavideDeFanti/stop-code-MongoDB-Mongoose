import { config } from "dotenv";
config();

import * as db from "./db";

// inserimento di un post
// db.insertPost("Viaggio in america", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.", "Mario Rossi", new Date());

// visualizzazione di tutti i post
// db.getPosts().then(risultato => console.log(risultato));

// aggiornamento di un post
// db.updatePost("6738a39d87011bd27080b379", "Aggiornamento viaggio in america", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.", "Mario Rossi", new Date());

// cancellazione di un post
// db.deletePost("6738a39d87011bd27080b379");
