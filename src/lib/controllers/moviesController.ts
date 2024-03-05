import { collection } from 'firebase/firestore';
import { db } from '../controller';

export const moviesCollection = collection(db, 'movies');
