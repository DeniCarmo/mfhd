import { collection } from 'firebase/firestore';
import { db } from '../controller';

export const socialsCollection = collection(db, 'socials');
