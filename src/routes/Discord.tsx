import Cards from '../components/Discord/Cards';

const Discord = () => {
  return (
    <div>
      <div className="text-3xl text-center font-bold text-white mb-5">Discord Cards</div>
      <div className="text-center text-white mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          I wanted to create some of the more complex and interesting animated components of Discord. These are found in
          the Discord Shop. Hover to see animations. WCAG compliant.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Discord;
