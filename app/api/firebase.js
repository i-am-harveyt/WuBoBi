import { initializeApp } from "firebase/app";
import {
  child,
  get,
  getDatabase,
  ref,
  set,
  goOnline,
  goOffline,
} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function POSTForum(id, name) {
  const db = getDatabase(app);
  const dbRef = ref(db);
  let snapshot = null;
  try {
    goOnline(db);
    snapshot = await get(child(dbRef, `forums/${id}`));
    goOffline(db);
  } catch (error) {
    goOffline(db);
    alert(`error: ${error}`);
  }
  if (!snapshot.exists()) await write_data(id, name);
  return snapshot.exists();
}

async function write_data(id, name) {
  const db = getDatabase(app);
  goOnline(db);
  await set(ref(db, `forums/${id}`), {
    id: id,
    name: name,
  });
  goOffline(db);
}

export async function login(id) {
  const db = getDatabase(app);
  const dbRef = ref(db);
  try {
    goOnline(db);
    const snapshot = await get(child(dbRef, `forums/${id}`));
    goOffline(db);
    console.log(snapshot.exists());
    return snapshot.exists();
  } catch (error) {
    alert(`error: ${error}`);
    goOffline(db);
    return;
  }
}

export async function GETPost(id) {
  const db = getDatabase(app);
  const dbRef = ref(db);
  try {
    goOnline(db);
    const snapshot = await get(child(dbRef, `forums/${id}/posts`));
    goOffline(db);
    if (!snapshot.exists()) return snapshot.exists();
    return snapshot.exportVal();
  } catch (error) {
    goOffline(db);
    alert(`error: ${error}`);
    return;
  }
}

export async function POSTPost(forumId, messageId, name, message) {
  const db = getDatabase(app);
  goOnline(db);
  await set(ref(db, `forums/${forumId}/posts/${messageId}`), {
    id: messageId,
    name: name,
    message: message,
    time: Date.now(),
  });
  goOffline(db);
}
