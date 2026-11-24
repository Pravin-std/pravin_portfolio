import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { useLenis } from '@/components/SmoothScroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

const WELCOME_LINES = [
  'INITIALIZING PRAVIN.DEV...',
  'SYSTEM READY.',
  'Welcome, visitor. Explore my digital workspace.',
  "Type 'help' to discover available commands.",
];

const SUGGESTED_COMMANDS = ['help', 'about', 'projects', 'skills', 'recognition', 'contact', 'whoami', 'clear'];

/**
 * INTERACTIVE DEVELOPER TERMINAL SECTION
 *
 * Visual Direction:
 * - Pure black / dark editorial background (#090909) with hairline technical borders.
 * - Monospace terminal typography (IBM Plex Mono).
 * - Red accent (#E53935 / #ef3333) status indicator and cursor.
 * - Real command parser, input history (Up/Down arrow navigation), tab completion, and smooth scrolling.
 */
export const TerminalSection: React.FC = () => {
  const { scrollTo } = useLenis();
  const prefersReducedMotion = useReducedMotion();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Initial welcome sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom when new history items are added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, welcomeVisible]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) {
      // Empty enter -> push empty command line
      setHistory((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          command: '',
          output: null,
        },
      ]);
      return;
    }

    const cmdLower = trimmed.toLowerCase();

    // Update command history for Up/Down arrow navigation
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let responseOutput: React.ReactNode = null;

    switch (cmdLower) {
      case 'help':
        responseOutput = (
          <div className="space-y-1.5 text-xs sm:text-[13px] text-[#F5F5F5]/90">
            <p className="text-[#E53935] font-semibold tracking-wider pb-1">
              AVAILABLE SYSTEM COMMANDS:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-4 gap-y-1 font-mono text-[11px] sm:text-xs">
              <span className="sm:col-span-3 text-[#E53935] font-semibold">about</span>
              <span className="sm:col-span-9 text-[#888888]">— Show developer introduction</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">projects</span>
              <span className="sm:col-span-9 text-[#888888]">— Navigate to Projects section</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">skills</span>
              <span className="sm:col-span-9 text-[#888888]">— Display technical skills &amp; stack</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">recognition</span>
              <span className="sm:col-span-9 text-[#888888]">— Navigate to Recognition &amp; Awards</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">contact</span>
              <span className="sm:col-span-9 text-[#888888]">— Navigate to Contact Terminal</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">whoami</span>
              <span className="sm:col-span-9 text-[#888888]">— Display developer profile &amp; status</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">clear</span>
              <span className="sm:col-span-9 text-[#888888]">— Clear terminal output history</span>

              <span className="sm:col-span-3 text-[#E53935] font-semibold">help</span>
              <span className="sm:col-span-9 text-[#888888]">— Display this commands manual</span>
            </div>
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="space-y-2 text-xs sm:text-[13px] text-[#888888] leading-relaxed">
            <p className="text-[#F5F5F5] font-semibold">
              PRAVIN K // DEVELOPER INTRODUCTION
            </p>
            <p>
              I am an <span className="text-[#F5F5F5] font-medium">Artificial Intelligence &amp; Data Science</span> graduate based in <span className="text-[#F5F5F5]">Salem, Tamil Nadu, India</span>.
            </p>
            <p>
              Driven by a deep curiosity for how software behaves under the hood, I engineer full-stack web applications, optimize analytical workflows, and build functional digital products with clean execution.
            </p>
            <div className="pt-2 flex items-center gap-3 text-[11px] font-mono">
              <span className="text-[#E53935]">ACADEMICS:</span>
              <span className="text-[#F5F5F5]">B.Tech in AI &amp; DS (CGPA 8.2 / 10)</span>
              <span className="text-[rgba(245,245,245,0.2)]">|</span>
              <span className="text-[#888888]">Sri Shanmugha College of Engineering and Technology</span>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('#about', { offset: -64 })}
              className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E53935] hover:underline uppercase tracking-wider"
            >
              <span>[ Scroll to 02 / THE TECHNICAL DOSSIER ↓ ]</span>
            </button>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2 text-xs sm:text-[13px]">
            <div className="flex items-center gap-2 text-[#E53935] font-semibold">
              <CheckCircle2 size={13} className="text-[#E53935]" />
              <span>NAVIGATING TO SELECTED WORKS / PROJECTS SECTION...</span>
            </div>
            <p className="text-[#888888] text-xs">
              Directing viewport to 03 / SELECTED WORKS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-[#888888]">
              <span className="text-[#F5F5F5]">01. RouteX (Live Bus Transit Platform)</span>
              <span className="text-[#F5F5F5]">02. LeetCode Tracker (DSA Practice)</span>
              <span className="text-[#F5F5F5]">03. Prompt Improver (Chrome Extension)</span>
              <span className="text-[#F5F5F5]">04. E-Commerce Engine (Catalog &amp; Cart)</span>
            </div>
          </div>
        );
        setTimeout(() => {
          scrollTo('#projects', { offset: -64 });
        }, 300);
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-3 text-xs sm:text-[13px]">
            <p className="text-[#F5F5F5] font-semibold">
              PRAVIN.K // TECHNICAL ARSENAL
            </p>
            <div className="space-y-2 font-mono text-[11px] sm:text-xs">
              <div>
                <span className="text-[#E53935] font-semibold">[01] LANGUAGES: </span>
                <span className="text-[#F5F5F5]">Java, Python, C, JavaScript (ES6+)</span>
              </div>
              <div>
                <span className="text-[#E53935] font-semibold">[02] FRONTEND:  </span>
                <span className="text-[#F5F5F5]">React, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div>
                <span className="text-[#E53935] font-semibold">[03] DATABASE:  </span>
                <span className="text-[#F5F5F5]">PostgreSQL, SQL, Supabase (Auth &amp; Database)</span>
              </div>
              <div>
                <span className="text-[#E53935] font-semibold">[04] TOOLS:     </span>
                <span className="text-[#F5F5F5]">Git, GitHub, Linux, Ubuntu Workstation, VS Code</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('#stack', { offset: -64 })}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E53935] hover:underline uppercase tracking-wider"
            >
              <span>[ Scroll to 04 / TECHNICAL ARSENAL ↓ ]</span>
            </button>
          </div>
        );
        break;

      case 'recognition':
        responseOutput = (
          <div className="space-y-2 text-xs sm:text-[13px]">
            <div className="flex items-center gap-2 text-[#E53935] font-semibold">
              <CheckCircle2 size={13} className="text-[#E53935]" />
              <span>NAVIGATING TO RECOGNITION &amp; CREDENTIALS...</span>
            </div>
            <p className="text-[#888888] text-xs">
              Directing viewport to 05 / RECOGNITION.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-[#888888] pt-1">
              <p className="text-[#C88A4B] font-semibold">★ Bronze Innovator — ZeAI Soft MadeInIndia 2026 Hackathon</p>
              <p className="text-[#F5F5F5]">✔ AWS — Introduction to Generative AI</p>
              <p className="text-[#F5F5F5]">✔ NPTEL — Programming in Java</p>
              <p className="text-[#F5F5F5]">✔ NPTEL — Cloud Computing</p>
            </div>
          </div>
        );
        setTimeout(() => {
          scrollTo('#recognition', { offset: -64 });
        }, 300);
        break;

      case 'contact':
        responseOutput = (
          <div className="space-y-2 text-xs sm:text-[13px]">
            <div className="flex items-center gap-2 text-[#E53935] font-semibold">
              <CheckCircle2 size={13} className="text-[#E53935]" />
              <span>NAVIGATING TO CONTACT TERMINAL...</span>
            </div>
            <p className="text-[#888888] text-xs">
              Directing viewport to 06 / CONTACT TERMINAL.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-[#888888] pt-1">
              <p><span className="text-[#E53935]">EMAIL:</span> <span className="text-[#F5F5F5]">pravinkaliyappan004@gmail.com</span></p>
              <p><span className="text-[#E53935]">PHONE:</span> <span className="text-[#F5F5F5]">+91 97912 00483</span></p>
              <p><span className="text-[#E53935]">LOCATION:</span> <span className="text-[#F5F5F5]">Salem, Tamil Nadu, India (11.6643° N, 78.1460° E)</span></p>
            </div>
          </div>
        );
        setTimeout(() => {
          scrollTo('#contact', { offset: -64 });
        }, 300);
        break;

      case 'whoami':
        responseOutput = (
          <div className="space-y-2 text-xs sm:text-[13px] text-[#888888] font-mono leading-relaxed">
            <p className="text-[#F5F5F5] font-semibold">
              SYSTEM IDENTITY DOSSIER
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-2 gap-y-1 text-[11px] sm:text-xs">
              <span className="sm:col-span-3 text-[#E53935]">NAME:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">Pravin K</span>

              <span className="sm:col-span-3 text-[#E53935]">ROLE:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">Software Developer &amp; AI/DS Engineer</span>

              <span className="sm:col-span-3 text-[#E53935]">LOCATION:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">Salem, Tamil Nadu, India (11.6643° N, 78.1460° E)</span>

              <span className="sm:col-span-3 text-[#E53935]">DEGREE:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">B.Tech in AI &amp; Data Science (CGPA: 8.2 / 10)</span>

              <span className="sm:col-span-3 text-[#E53935]">COLLEGE:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">Sri Shanmugha College of Engineering and Technology</span>

              <span className="sm:col-span-3 text-[#E53935]">GITHUB:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">https://github.com/Pravin-std</span>

              <span className="sm:col-span-3 text-[#E53935]">LINKEDIN:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">https://linkedin.com/in/pravin-k-437250294</span>

              <span className="sm:col-span-3 text-[#E53935]">STATUS:</span>
              <span className="sm:col-span-9 text-[#F5F5F5]">Open for software engineering opportunities</span>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        responseOutput = (
          <div className="text-xs sm:text-[13px] text-[#888888] space-y-1">
            <p>
              <span className="text-[#E53935]">zsh: command not found: </span>
              <span className="text-[#F5F5F5]">{trimmed}</span>
            </p>
            <p className="text-[11px] text-[#888888]">
              Type <span className="text-[#E53935] font-semibold">'help'</span> to view available system commands.
            </p>
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        command: trimmed,
        output: responseOutput,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (!inputVal.trim()) return;
      const match = SUGGESTED_COMMANDS.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleChipClick = (cmd: string) => {
    setInputVal('');
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <section
      id="terminal"
      aria-label="Interactive Developer Terminal"
      className="relative py-20 md:py-28 bg-transparent text-[#F5F5F5] border-fine-t select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15" aria-hidden="true">
        <div className="editorial-container h-full border-fine-l border-fine-r flex justify-between">
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
          <div className="border-fine-r h-full w-1/4 hidden md:block" />
        </div>
      </div>

      <div className="editorial-container relative z-10">
        {/* Section Technical Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 sm:mb-12 border-fine-b label-tech">
          <div className="flex items-center gap-3">
            <span className="text-[#E53935] font-semibold flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-[#E53935]" aria-hidden="true" />
              CONSOLE // 01
            </span>
            <span className="text-[rgba(245,245,245,0.2)]">/</span>
            <span className="text-[#F5F5F5]">INTERACTIVE DEVELOPER TERMINAL</span>
          </div>

          <div className="flex items-center gap-4 text-[#888888] font-mono text-[11px]">
            <span className="hidden sm:inline flex items-center gap-1.5">
              <Compass size={12} className="text-[#E53935]" aria-hidden="true" />
              11.6643° N, 78.1460° E
            </span>
            <span className="text-[#F5F5F5] border border-[rgba(245,245,245,0.15)] px-2 py-0.5">
              SALEM, IN
            </span>
          </div>
        </div>

        {/* Terminal Window Container */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleTerminalClick}
          className="relative border border-[rgba(245,245,245,0.12)] bg-[#111111]/90 shadow-2xl transition-all duration-300 hover:border-[#E53935]/40 focus-within:border-[#E53935]/60 focus-within:shadow-[0_0_35px_-5px_rgba(229,57,53,0.14)] cursor-text group"
        >
          {/* Red Technical Corner Registration Marks */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E53935]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E53935]" aria-hidden="true" />

          {/* Terminal Window Titlebar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[rgba(245,245,245,0.10)] bg-[#0c0c0c] select-none font-mono text-xs">
            {/* Left: Window Controls + Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53935]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgba(245,245,245,0.2)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgba(245,245,245,0.2)]" />
              </div>
              <span className="text-[#F5F5F5] font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5">
                PRAVIN_TERMINAL
                <span className="text-[10px] text-[#888888] font-normal hidden sm:inline">// zsh</span>
              </span>
            </div>

            {/* Center: System Status */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#888888]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" aria-hidden="true" />
              <span className="text-[#F5F5F5] font-medium">SYSTEM STATUS: ONLINE</span>
            </div>

            {/* Right: Location & Clear Trigger */}
            <div className="flex items-center gap-3 text-[11px] text-[#888888]">
              <span className="hidden md:inline">LOCATION: SALEM, INDIA</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                className="px-2 py-0.5 border border-[rgba(245,245,245,0.15)] hover:border-[#E53935] hover:text-[#E53935] text-[10px] uppercase tracking-wider transition-colors"
                title="Clear terminal screen (Ctrl+L)"
              >
                CLEAR
              </button>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div
            ref={terminalBodyRef}
            role="log"
            aria-live="polite"
            className="p-4 sm:p-6 lg:p-8 min-h-[340px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm space-y-4"
          >
            {/* Welcome Sequence Animation */}
            {welcomeVisible && (
              <div className="space-y-1 text-[#888888] pb-3 border-b border-[rgba(245,245,245,0.06)]">
                {WELCOME_LINES.map((line, idx) => (
                  <motion.p
                    key={line}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : idx * 0.12,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={idx === 1 ? 'text-[#E53935] font-semibold' : idx === 3 ? 'text-[#F5F5F5]' : ''}
                  >
                    {idx === 0 && <span className="text-[#888888] mr-2">›</span>}
                    {idx === 1 && <span className="text-[#E53935] mr-2">✔</span>}
                    {idx === 2 && <span className="text-[#888888] mr-2">›</span>}
                    {idx === 3 && <span className="text-[#E53935] mr-2">💡</span>}
                    {line}
                  </motion.p>
                ))}
              </div>
            )}

            {/* Rendered Command History */}
            {history.map((item) => (
              <div key={item.id} className="space-y-2">
                {/* Command Line Echo */}
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="text-[#E53935] font-semibold">pravin</span>
                  <span className="text-[#888888]">@</span>
                  <span className="text-[#F5F5F5]">terminal</span>
                  <span className="text-[#888888]">:~$</span>
                  <span className="text-[#F5F5F5] font-semibold">{item.command}</span>
                </div>

                {/* Output */}
                {item.output && <div className="pl-2 sm:pl-4 border-l border-[rgba(245,245,245,0.08)] py-1">{item.output}</div>}
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#E53935] font-semibold flex-shrink-0">pravin</span>
              <span className="text-[#888888] flex-shrink-0">@</span>
              <span className="text-[#F5F5F5] flex-shrink-0">terminal</span>
              <span className="text-[#888888] flex-shrink-0">:~$</span>

              <div className="relative flex-1 flex items-center min-w-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-label="Terminal command prompt"
                  className="w-full bg-transparent text-[#F5F5F5] font-mono text-xs sm:text-sm focus:outline-none focus:ring-0 border-none p-0 tracking-wide"
                  placeholder="type 'help' or any command..."
                />

                {/* Blinking Red Cursor */}
                <span
                  className="inline-block w-2 h-4 bg-[#E53935] animate-pulse ml-1 flex-shrink-0"
                  aria-hidden="true"
                />
              </div>

              {/* Submit CTA icon */}
              <button
                type="button"
                onClick={() => {
                  executeCommand(inputVal);
                  setInputVal('');
                  inputRef.current?.focus();
                }}
                className="hidden sm:inline-flex items-center text-[10px] text-[#888888] hover:text-[#E53935] px-1.5 py-0.5 border border-[rgba(245,245,245,0.1)] transition-colors"
                title="Execute command (Enter)"
              >
                <span>EXEC</span>
                <CornerDownLeft size={10} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Interactive Command Suggestion Chips Footer */}
          <div className="px-4 sm:px-6 py-3 border-t border-[rgba(245,245,245,0.08)] bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#888888]">
              <Sparkles size={11} className="text-[#E53935]" aria-hidden="true" />
              <span className="hidden sm:inline">QUICK COMMANDS:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {SUGGESTED_COMMANDS.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChipClick(cmd);
                  }}
                  className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#181818] border border-[rgba(245,245,245,0.12)] text-[#F5F5F5] hover:border-[#E53935] hover:text-[#E53935] transition-all duration-150 active:scale-95"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
