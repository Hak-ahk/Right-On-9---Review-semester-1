import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { CheckCircle, XCircle, Bot, AlertCircle } from 'lucide-react';
import { explainAnswer } from '../services/geminiService';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleOptionClick = (option: string) => {
    if (submitted) return;
    setSelectedOption(option);
    const correct = option === question.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;
    
    // Normalize string: remove extra spaces, case insensitive for basic check
    const normalizedInput = textInput.trim().toLowerCase().replace(/\s+/g, ' ');
    const normalizedAnswer = question.correctAnswer.trim().toLowerCase().replace(/\s+/g, ' ');
    
    // Simple containment check or exact match. 
    const correct = normalizedInput === normalizedAnswer || normalizedInput.includes(normalizedAnswer);
    
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const fetchExplanation = async () => {
    setLoadingAi(true);
    const userAnswer = selectedOption || textInput;
    const explanation = await explainAnswer(question, userAnswer);
    setAiExplanation(explanation);
    setLoadingAi(false);
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(__.*?__)/g);
    return parts.map((part, index) => {
      if (part.startsWith('__') && part.endsWith('__')) {
        return <u key={index} className="decoration-sky-500 underline-offset-4 decoration-2 font-semibold">{part.slice(2, -2)}</u>;
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
          {question.type.replace('_', ' ')}
        </span>
        {submitted && (
          <div className={`flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
            <span className="font-bold">{isCorrect ? 'Correct!' : 'Incorrect'}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-medium text-slate-800 mb-6 whitespace-pre-line leading-relaxed">
        {renderFormattedText(question.text)}
      </h3>

      {question.type === QuestionType.MULTIPLE_CHOICE || question.type === QuestionType.WORD_FORM || question.type === QuestionType.ERROR_RECOGNITION ? (
        <div className="space-y-3">
          {question.options?.map((option, idx) => {
            let btnClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 ";
            if (submitted) {
              if (option === question.correctAnswer) {
                btnClass += "bg-green-50 border-green-500 text-green-700 font-semibold";
              } else if (option === selectedOption) {
                btnClass += "bg-red-50 border-red-500 text-red-700";
              } else {
                btnClass += "bg-white border-slate-200 opacity-50";
              }
            } else {
              btnClass += "bg-white border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-slate-700";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                disabled={submitted}
                className={btnClass}
              >
                {renderFormattedText(option)}
              </button>
            );
          })}
        </div>
      ) : (
        <form onSubmit={handleTextSubmit} className="space-y-4">
           <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            disabled={submitted}
            placeholder="Type your answer here..."
            className={`w-full p-4 rounded-lg border focus:ring-2 focus:outline-none ${
              submitted 
                ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
            }`}
            rows={3}
          />
          {!submitted && (
            <button 
              type="submit"
              disabled={!textInput.trim()}
              className="bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Check Answer
            </button>
          )}
          {submitted && !isCorrect && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-semibold mb-1">Correct Answer:</p>
              <p className="text-slate-800">{question.correctAnswer}</p>
            </div>
          )}
        </form>
      )}

      {submitted && !isCorrect && (
        <div className="mt-6 border-t pt-4">
          {!aiExplanation ? (
            <button 
              onClick={fetchExplanation}
              disabled={loadingAi}
              className="flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm font-medium transition-colors"
            >
              <Bot size={18} />
              {loadingAi ? 'Asking AI Tutor...' : 'Explain why I was wrong'}
            </button>
          ) : (
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100 animate-fade-in">
              <div className="flex items-center gap-2 text-sky-700 font-semibold mb-2">
                <Bot size={18} />
                <span>AI Tutor Explanation</span>
              </div>
              <p className="text-sm text-sky-900 leading-relaxed whitespace-pre-wrap">
                {aiExplanation}
              </p>
            </div>
          )}
          {/* Show pre-canned explanation if available and AI not used yet */}
          {question.explanation && !aiExplanation && (
             <div className="mt-2 text-sm text-slate-500 italic">
               Hint: {question.explanation}
             </div>
          )}
        </div>
      )}
    </div>
  );
};