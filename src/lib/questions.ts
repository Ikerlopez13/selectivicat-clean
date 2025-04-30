import { Question } from '@/types/questions';
import matematiques from '@/data/matematiques.json';

export async function getMatematiquesList(): Promise<Question[]> {
  return matematiques as Question[];
} 