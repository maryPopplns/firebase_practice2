import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login(props) {
  function clickHandler() {
    props.onClick();
    (async function signIn() {
      // Sign in Firebase using popup auth and Google as the identity provider.
      var provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    })();
  }

  return <button onClick={clickHandler}>login</button>;
}
