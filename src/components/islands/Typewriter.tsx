import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  customClass?: string;
  repeat?: boolean; 
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  showCursor?: boolean;
  cursorChar?: string;
  cursorCharClass?: string;
  fadeIn?: boolean;
  multiline?: boolean;
};

export default function Typewriter({
  words,
  customClass = "",
  repeat = true,
  typingSpeed = 70,
  deletingSpeed = 45,
  pauseMs = 1200,
  showCursor = true,
  cursorChar = "|",
  cursorCharClass = "ml-1 inline-block animate-pulse font-normal text-primary",
  fadeIn = false,
  multiline = false,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!fadeIn) return;

    setIsVisible(false);
    const id = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, [wordIndex, fadeIn]);

  useEffect(() => {
    if (!words?.length || done) return;

    const currentWord = words[wordIndex] ?? "";

    const timeout = window.setTimeout(() => {
      if (!repeat) {
  
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
          return;
        }

        if (wordIndex < words.length - 1) {
          if (multiline) {
            setCompletedWords((prev) => [...prev, currentWord]);
          }
          setWordIndex((prev) => prev + 1);
          setText("");
          return;
        }

        if (multiline) {
          setCompletedWords((prev) => [...prev, currentWord]);
          setText("");
        }
        setDone(true);
        return;
      }

      // Modo loop infinito: escribe y borra
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, !repeat
      ? (text.length < currentWord.length ? typingSpeed : pauseMs)
      : (isDeleting ? deletingSpeed : (text.length === currentWord.length ? pauseMs : typingSpeed))
    );

    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, text, isDeleting, repeat, typingSpeed, deletingSpeed, pauseMs, done]);

  if (multiline) {
    return (
      <p className={`text-center whitespace-pre-line flex justify-center items-center ${customClass}`} aria-live="polite">
        {completedWords.map((line, idx) => (
          <span key={`${line}-${idx}`} className="block">
            {line}
          </span>
        ))}
        {!done && (
          <span
            className={`transition-opacity duration-300 flex items-center ${
              fadeIn ? (isVisible ? "opacity-100" : "opacity-0") : "opacity-100"
            }`}
          >
            {text}
          </span>
        )}
        {showCursor && <span className={`animate-pulse inline-block align-baseline ${cursorCharClass}`}>{cursorChar}</span>}
      </p>
    );
  }

  return (
    <>
    
    <p className={`text-center ${customClass}`} aria-live="polite">
      <span
        className={`transition-opacity duration-300 inline ${
          fadeIn ? (isVisible ? "opacity-100" : "opacity-0") : "opacity-100"
        }`}
      >
        {text}
      </span>
      {showCursor && <span className={`animate-pulse inline-block align-baseline ${cursorCharClass}`}>{cursorChar}</span>}
    </p>
    </>
  );
}
