import Navbar from "@/components/shared/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Navbar />
      <main className="root-container">{children}</main>
    </div>
  );
}

export default layout;
