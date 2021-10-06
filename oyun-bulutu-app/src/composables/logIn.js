import { ref } from "vue";
import { authRef } from "../firebase/config";
const error = ref(null);

const login = async () => {
  error.value = null;
  try {
    const res = await authRef.signInAnonymously();
    error.value = null;
    return res;
  } catch (err) {
    error.value.value = "Giriş Yapılamadı...";
  }
};

const anmLogin = () => {
  return { error, login };
};

export default anmLogin;
