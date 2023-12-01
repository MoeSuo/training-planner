import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  className?: string;
  value: string;

  rows:number,
  cols: number,
  maxLength: number
}

export default function Textarea({
  name,
  label,
  children,

  rows,
  cols,
  maxLength,
  ...rest
}: TextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="text-neutral-500">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        {...rest}
        className="relative w-full flex items-center text-sm text-slate-400 text-neutral-500 py-4 ring-1 ring-orange-500/70 shadow-sm py-2.5 pl-10 pr-3 hover:ring-orange-300"
      >{children}</textarea>
    </div>
  );
}
