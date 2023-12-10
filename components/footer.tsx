import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-white justify-between  p-4 ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-8/12 justify-between">
        <Logo />
      </div>
    </div>
  );
};
