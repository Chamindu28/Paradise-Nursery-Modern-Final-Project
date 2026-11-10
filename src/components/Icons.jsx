
export function LeafIcon({ size = 24, strokeWidth = 1.8, className = '' }) {
  return (
    <svg className={className} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c-9 0-15.5 3.3-15.5 11.1a4.4 4.4 0 0 0 4.4 4.4C16.7 19.5 20 13 20 4Z" />
      <path d="M4 21c2.3-6.6 6.8-10.7 12.8-12.5" />
    </svg>
  );
}

export function BagIcon({ size = 22 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 8.5h15l1.2 12h-17l.8-12Z" />
      <path d="M8.5 9V6a3.5 3.5 0 0 1 7 0v3" />
    </svg>
  );
}

export function ArrowIcon({ size = 18, direction = 'right' }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={direction === 'left' ? { transform: 'rotate(180deg)' } : undefined}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function SearchIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="10.7" cy="10.7" r="6.5" /><path d="m15.7 15.7 5 5" />
    </svg>
  );
}

export function TrashIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 6.5h17M9 6.5V4h6v2.5M6 6.5l1 14h10l1-14M10 10.5v6M14 10.5v6" />
    </svg>
  );
}

export function CheckIcon({ size = 17 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.2 4.3L19 7" /></svg>;
}

export function SparkleIcon({ size = 21 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z" /></svg>;
}
