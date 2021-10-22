import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

export default function Form() {
  const [inputValue, setInputValue] = useState('');

  const FORM_STYLE = {
    margin: '1em',
  };

  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
  }

  async function submitHandler(event) {
    event.preventDefault();
    try {
      // await addDoc(collection(getFirestore(), 'test'), {
      await addDoc(collection(getFirestore(), getUserName()), {
        name: getUserName(),
        text: inputValue,
        profilePicUrl: getProfilePicUrl(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  function changeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} style={FORM_STYLE}>
      <input value={inputValue} onChange={changeHandler} type='text'></input>
      <button>submit</button>
    </form>
  );
}
