import React, { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    className?: string
    
}

export default function Input({name, label, ...rest}: InputProps) {
    return(
        <div>
            <label htmlFor={name} className="text-neutral-500">{label}</label>
            <input id={name} {...rest} className="relative w-full flex items-center text-sm text-slate-400 text-neutral-500 py-4 ring-1 ring-orange-500/70 shadow-sm py-2.5 pl-10 pr-3 hover:ring-orange-300"></input>
        </div>
    )
}