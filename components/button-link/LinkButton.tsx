import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LinkButton({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

) {
  return (
  <div className="group relative z-10 text-slate-600">
  <span className="flex items-center">
  </span>
  <Link href={href}
  className={clsx('bg-orange-500/70 py-4 px-8 hover:bg-orange-300/80')}>{children}
  <span className="absolute z-20 " />
  </Link>
  </div>)
}
