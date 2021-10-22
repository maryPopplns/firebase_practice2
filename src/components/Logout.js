import { getAuth, signOut } from 'firebase/auth';

export default function Logout(props) {
  function clickHandler() {
    props.onClick();
    signOut(getAuth());
  }
  return <button onClick={clickHandler}>logout</button>;
}
