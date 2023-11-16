const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100">
      {/* TODO: Navbar */}
      <main>{children}</main>
      {/* TODO: Footer */}
    </div>
  );
};
export default LandingPageLayout;
