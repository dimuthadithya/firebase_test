import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export default logout;
