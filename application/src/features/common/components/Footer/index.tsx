const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="text-text sticky top-[100vh] w-full bg-primary h-[40px] flex justify-center items-center">
      © {year} Aiful Digital Department
    </footer>
  );
};
