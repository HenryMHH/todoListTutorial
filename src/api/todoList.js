import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export async function getList() {
  const col = collection(db, 'todoList');
  const list = await getDocs(col);
  const newArray = list.docs.map((item) => ({ id: item.id, ...item.data() }));

  return newArray;
}

export async function addItem(message) {
  const col = collection(db, 'todoList');
  const result = await addDoc(col, { message: message });
  return result.id;
}

/**
 * setDoc <= { merge: true }
 *
 * 如果你有加{ merge: true }，則更新時，會比對資料內容，只更新或新增你當前的資料
 *
 * 如果你沒有加{ merge: true }，直接覆蓋該ID的資料
 *
 */
