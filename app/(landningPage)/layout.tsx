import { Navbar } from "../../components//Navbar";
import { Footer } from "../../components//footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};
export default LandingPageLayout;
