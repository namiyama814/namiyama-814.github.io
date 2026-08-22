type IconProps = {
  className?: string;
};

export function ArrowUpRightIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
