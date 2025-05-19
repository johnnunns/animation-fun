interface CustomArtProps {
  children: React.ReactNode;
}

const CustomArt = ({ children }: CustomArtProps) => {
  return <div className="absolute inset-0 z-10 pointer-events-none">{children}</div>;
};

export default CustomArt;
