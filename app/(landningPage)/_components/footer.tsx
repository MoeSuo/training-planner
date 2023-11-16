import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-slate-100 justify-between  px-4 ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
      </div>
    </div>
  );
};
