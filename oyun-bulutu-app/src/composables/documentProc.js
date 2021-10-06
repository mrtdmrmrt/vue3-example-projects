import { ref } from "vue";
import { firestoreRef } from "../firebase/config";

const documentProc = (collection) => {
  const err = ref(null);
  const addDoc = async (doc) => {
    err.value = null;

    try {
      const res = await firestoreRef.collection(collection).add(doc);
      return res;
    } catch (error) {
      err.value = "Belge Eklenemedi...";
    }
  };
  const deleteDoc = async (id) => {
    const err = null;
    try {
      const res = await firestoreRef.collection(collection).doc(id).delete();
      return res;
    } catch (error) {
      err.value = "Belge Silinemedi...";
    }
  };
  return { err, addDoc, deleteDoc };
};
export default documentProc;
