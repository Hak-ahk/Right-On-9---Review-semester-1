export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  WRITING = 'WRITING',
  ERROR_RECOGNITION = 'ERROR_RECOGNITION',
  WORD_FORM = 'WORD_FORM'
}

export interface VocabItem {
  word: string;
  transcription: string;
  definition: string;
  type?: string; // n, v, adj
}

export interface GrammarSection {
  title: string;
  content: string; // Markdown supported
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQ
  correctAnswer: string; // For MCQ or Writing (exact match)
  explanation?: string; // Optional pre-canned explanation
}

export interface UnitData {
  id: number;
  title: string;
  vocab: VocabItem[];
  grammar: GrammarSection[];
  practice: Question[];
}