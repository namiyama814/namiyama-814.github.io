import type { ReactNode } from 'react';

type SectionLabelProps = {
  number: string;
  children: ReactNode;
};

export function SectionLabel({ number, children }: SectionLabelProps) {
  return <p className="m-0 font-sans text-[11px] font-medium tracking-[0.18em]">{number} / {children}</p>;
}

export function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
