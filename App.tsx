import React, { useState, useMemo } from 'react';
import { UNITS } from './data';
import { Flashcard } from './components/Flashcard';
import { QuizCard } from './components/QuizCard';
import { BookOpen, GraduationCap, PenTool, Layout, ChevronRight, Menu, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

enum Tab {
  VOCAB = 'vocabulary',
  GRAMMAR = 'grammar',
  PRACTICE = 'practice'
}

function App() {
  const [currentUnitId, setCurrentUnitId] = useState(UNITS[0].id);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.VOCAB);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizKey, setQuizKey] = useState(0); // Force re-render quiz on reset

  const currentUnit = UNITS.find(u => u.id === currentUnitId) || UNITS[0];

  const handleUnitChange = (id: number) => {
    setCurrentUnitId(id);
    resetQuiz();
    setCurrentQuestionIndex(0);
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
    setQuizKey(prev => prev + 1);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentUnit.practice.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Helper to render text with **bold** parsing
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="font-bold text-sky-700">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  // Render Logic
  const renderContent = () => {
    switch (activeTab) {
      case Tab.VOCAB:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentUnit.vocab.map((item, idx) => (
                <Flashcard key={idx} item={item} />
              ))}
            </div>
          </div>
        );

      case Tab.GRAMMAR:
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            {currentUnit.grammar.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-sky-100 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-4 border-b border-sky-600">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <div className="p-6 prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  {section.content.split('\n').map((line, i) => {
                    const trimmedLine = line.trim();
                    if (!trimmedLine) return <div key={i} className="h-2"></div>;

                    // Header-like lines (all bold or starts with strong emphasis)
                    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length < 50) {
                        return <h4 key={i} className="text-lg font-bold text-sky-900 mt-4 mb-2">{renderFormattedText(line)}</h4>
                    }

                    // List items
                    if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
                        return (
                          <div key={i} className="flex gap-3 mb-2 ml-2">
                             <span className="text-sky-500 font-bold mt-1">•</span>
                             <div className="flex-1">{renderFormattedText(trimmedLine.replace(/^[•-]\s*/, ''))}</div>
                          </div>
                        )
                    }

                    return <p key={i} className="mb-2">{renderFormattedText(line)}</p>
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case Tab.PRACTICE:
        if (quizComplete) {
          const percentage = Math.round((score / currentUnit.practice.length) * 100);
          return (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-sky-100 p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 text-yellow-600">
                <Trophy size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
              <p className="text-slate-500 mb-8">You scored {score} out of {currentUnit.practice.length}</p>
              
              <div className="w-full bg-slate-100 rounded-full h-4 mb-8">
                <div 
                  className={`h-4 rounded-full transition-all duration-1000 ${percentage >= 70 ? 'bg-green-500' : 'bg-orange-500'}`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <button 
                onClick={resetQuiz}
                className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          );
        }

        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-slate-500 text-sm font-medium mb-2">
               <span>Question {currentQuestionIndex + 1} of {currentUnit.practice.length}</span>
               <span>Score: {score}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-sky-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestionIndex) / currentUnit.practice.length) * 100}%` }}
                ></div>
            </div>

            <QuizCard 
                key={`${quizKey}-${currentQuestionIndex}`} // Force remount on question change to reset state
                question={currentUnit.practice[currentQuestionIndex]} 
                onAnswer={handleAnswer} 
            />

            <div className="flex justify-between pt-4">
                <button 
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors"
                >
                    <ArrowLeft size={18} /> Previous
                </button>
                <button 
                    onClick={nextQuestion}
                    className="flex items-center gap-2 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-sm font-medium"
                >
                   {currentQuestionIndex === currentUnit.practice.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={18} />
                </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-64 absolute z-20 h-full'} transition-transform duration-300 bg-sky-600 text-white flex flex-col md:relative md:translate-x-0 shadow-xl border-r border-sky-500`}>
        <div className="p-6 border-b border-sky-500/50">
          <h1 className="text-xl font-bold tracking-tight text-white">Right On 9</h1>
          <p className="text-sky-100 text-xs mt-1 uppercase tracking-wider">Term 1 Review</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {UNITS.map(unit => (
            <button
              key={unit.id}
              onClick={() => handleUnitChange(unit.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentUnitId === unit.id 
                  ? 'bg-white text-sky-700 shadow-md' 
                  : 'text-sky-50 hover:bg-sky-500 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{unit.title}</span>
                {currentUnitId === unit.id && <ChevronRight size={16} />}
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 bg-sky-700 text-xs text-sky-200 text-center">
          <p>Prep Master v1.0</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-6 justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md">
               <Menu size={20} />
             </button>
             <h2 className="text-lg font-semibold text-slate-800 truncate">{currentUnit.title}</h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
             {[
               { id: Tab.VOCAB, icon: BookOpen, label: 'Vocabulary' },
               { id: Tab.GRAMMAR, icon: Layout, label: 'Grammar' },
               { id: Tab.PRACTICE, icon: PenTool, label: 'Practice' },
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => {
                   setActiveTab(tab.id);
                   if (tab.id === Tab.PRACTICE) resetQuiz();
                 }}
                 className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id 
                    ? 'bg-white text-sky-600 shadow-sm ring-1 ring-black/5' 
                    : 'text-slate-500 hover:text-slate-700'
                 }`}
               >
                 <tab.icon size={16} />
                 {tab.label}
               </button>
             ))}
          </div>
        </header>

        {/* Mobile Tabs */}
        <div className="sm:hidden flex border-b border-slate-200 bg-white">
           {[
               { id: Tab.VOCAB, icon: BookOpen, label: 'Vocab' },
               { id: Tab.GRAMMAR, icon: Layout, label: 'Grammar' },
               { id: Tab.PRACTICE, icon: PenTool, label: 'Quiz' },
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => {
                   setActiveTab(tab.id);
                   if (tab.id === Tab.PRACTICE) resetQuiz();
                 }}
                 className={`flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium border-b-2 transition-colors ${
                    activeTab === tab.id 
                    ? 'border-sky-500 text-sky-600 bg-sky-50/50' 
                    : 'border-transparent text-slate-500'
                 }`}
               >
                 <tab.icon size={18} className="mb-1" />
                 {tab.label}
               </button>
             ))}
        </div>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-sky-50/30">
            {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;