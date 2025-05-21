const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-discord-purple-500 text-white text-sm font-bold py-3 px-4 rounded-lg mt-2 w-full hover:bg-discord-purple-700 cursor-pointer"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
