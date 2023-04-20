import { LoremIpsum } from "lorem-ipsum";
import sqlite3 from "sqlite3";

const SQlite3 = sqlite3.verbose(); //tworzenie kopii
const db = new SQlite3.Database("post.db");

const query = (command, method = "all") => {
  return new Promise((resolve, reject) => {
    db[method](command, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const createPostsIfEmpty = async () => {
  const existingPosts = await query("SELECT * FROM posts");
  if (existingPosts.length === 0) {
    const lorem = new LoremIpsum();
    for (let i = 0; i < 100; i++) {
      const tags = [...Array(5)].map(() => lorem.generateWords(1));
      await query(
        `INSERT INTO posts VALUES ("${new Date().toISOString()}", "${lorem.generateWords(
          5
        )}", 
        "${lorem.generateSentences(5)}", "${lorem.generateWords(
          1
        )}", "${tags.join(",")}")`,
        "run"
      );
    }
  }
};

db.serialize(async () => {
  await query(
    "CREATE TABLE IF NOT EXISTS posts (date TEXT, title TEXT, content TEXT, author TEXT,tags TEXT)",
    "run"
  );
  await createPostsIfEmpty();
  const posts = await query("SELECT * FROM posts");
  console.log(posts);
});
