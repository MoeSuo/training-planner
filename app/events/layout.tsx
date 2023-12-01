import { Navbar } from "../../components//Navbar";
import { Footer } from "../../components/footer";

const EventsPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 md:w-8/12 w-full md:m-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default EventsPageLayout;
