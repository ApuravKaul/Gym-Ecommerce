import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxyWwceK71kQDYbXnxtMyDjJiIyqWguyo",
  authDomain: "apuravgymcommerce.firebaseapp.com",
  projectId: "apuravgymcommerce",
  storageBucket: "apuravgymcommerce.appspot.com",
  messagingSenderId: "387543259511",
  appId: "1:387543259511:web:2e6814c49b2d8ee77ae972",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://apuravgymcommerce.appspot.com");
