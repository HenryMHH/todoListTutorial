import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
  doc,
  updateDoc
} from "firebase/firestore";

// initialized db
import { db } from "../firebase";

/**
 * firebase v9 document操作的參考文章:
 * https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/
 */

export async function getList() {
  const col = collection(db, "todoList"); // 從initialized db中，建立你要操作的collection reference
  const list = await getDocs(col); // 從這個collection中取回"所有"document

  // 將取回的docs整理成我們需要的格式，其中item.data() 是每一個element的資料
  // 而item.id是該document的key，這個key是由firebase自動產生的
  const newArray = list.docs.map((item) => ({ id: item.id, ...item.data() }));

  return newArray;
}

export async function addItem(message) {
  const col = collection(db, "todoList");
  const result = await addDoc(col, { message: message });
  return result.id;
}

export async function deleteItem(id) {
  const docRef = doc(db, "todoList", `${id}`);
  const result = await deleteDoc(docRef);
  return result;
}

export async function updateItem(id,newContent) {
  const docRef = doc(db, "todoList", `${id}`);
  const result = await setDoc(docRef,newContent);
  return result;
}

/**
 * setDoc <= { merge: true }
 *
 * 如果你有加{ merge: true }，則更新時，會比對資料內容，只更新或新增你當前的資料
 *
 * 如果你沒有加{ merge: true }，直接覆蓋該ID的資料
 *
 */
