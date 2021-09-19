// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqPOA0sIiuYZH0i0TtiDrgzeM5B8CBGWs',
  authDomain: 'todoist-f0e08.firebaseapp.com',
  projectId: 'todoist-f0e08',
  storageBucket: 'todoist-f0e08.appspot.com',
  messagingSenderId: '474300970346',
  appId: '1:474300970346:web:8258a1d5fc6ab38f6de113',
  measurementId: 'G-N5H2G2HFS3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of projects from your database
export const getProject = async () => {
  const projectsCol = collection(db, 'projects');
  // console.log('projectCol =  ', projectsCol.firestore);
  const projectSnapshot = await getDocs(projectsCol);
  const projectList = projectSnapshot.docs.map((doc) => doc.data());
  return projectList;
};
