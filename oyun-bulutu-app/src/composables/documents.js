import { ref } from "vue";
import { firestoreRef } from "../firebase/config";

const getDocuments = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = firestoreRef.collection(collection);

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];

      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log("err->", err);
      documents.value = null;
      error.value = "Verilere Erişilemedi...";
    }
  );
  return { error, documents };
};
export default getDocuments;
