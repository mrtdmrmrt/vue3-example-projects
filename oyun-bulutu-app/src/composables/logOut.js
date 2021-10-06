import { ref } from "vue";
import { authRef } from "../firebase/config";
const error = ref(null);

const logOut = async () => {
  error.value = null;
  try {
    await authRef.signOut();
    error.value = null;
  } catch (err) {
    error.value.value = "Çıkış Yapılamadı...";
  }
};

const anmLogout = () => {
  return { error, logOut };
};

export default anmLogout;
