import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Navbar />
      <main className="root-container">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
