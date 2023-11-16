import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100">
      {/* TODO: Navbar */}
      <Navbar />
      <main>{children}</main>
      {/* TODO: Footer */}
      <Footer />
    </div>
  );
};
export default LandingPageLayout;
