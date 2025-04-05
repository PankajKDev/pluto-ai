function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <main className="root-container flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}

export default layout;
