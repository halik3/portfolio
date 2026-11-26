export function Underline({ className = "" }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full ${className}`}>
      <path d="M2 15C50 5 150 5 198 12" stroke="#5b8a51" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function CircleDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute -inset-2 w-[110%] h-[120%] -z-10 ${className}`}>
      <path d="M10 25C15 10 85 10 90 25C95 40 15 45 10 25Z" stroke="#5b8a51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}