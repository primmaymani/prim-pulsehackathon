import { ReactNode } from "react";

export function PageHero({
  title,
  description,
  actions
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-8 rounded-[32px] bg-gradient-to-r from-[#FFF7E9] via-[#F6F3EA] to-[#E9F2F5] p-7 sm:p-10">
      <div className="max-w-3xl space-y-3">
        <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">{title}</h1>
        <p className="text-lg leading-8 text-slate-700">{description}</p>
        {actions ? <div className="pt-2">{actions}</div> : null}
      </div>
    </div>
  );
}
