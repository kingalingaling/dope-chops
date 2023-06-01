import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Login failed. Please check your credentials and try again.');
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Logout failed', error);
  }
};