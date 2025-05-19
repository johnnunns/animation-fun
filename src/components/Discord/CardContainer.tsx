const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="bg-card-top group rounded-2xl shadow-md overflow-hidden max-h-[400px] flex flex-col
      transition-transform duration-1000 ease-in-out
      hover:-translate-y-2"
  >
    {children}
  </div>
);

export default CardContainer;
