const CardContainer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="bg-card-top group rounded-2xl shadow-md overflow-hidden max-h-[400px] flex flex-col
      transition-transform duration-1000 ease-in-out
      hover:-translate-y-2"
    {...props}
  >
    {props.children}
  </div>
);

export default CardContainer;
