import { collection } from 'firebase/firestore';
import { db } from '../controller';

export const sectionsCollection = collection(db, 'sections');
