import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  className?: string;
  value: string
}

export default function Select({ name, label,children, ...rest }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="text-neutral-500">
        {label}
      </label>
      <select
        name={name}
        {...rest}
        id={name}
        className="relative w-full flex items-center text-sm text-slate-400 text-neutral-500 py-4 ring-1 ring-orange-500/70 shadow-sm py-2.5 pl-10 pr-3 hover:ring-orange-300"
      >{children}</select>
    </div>
  );
}
