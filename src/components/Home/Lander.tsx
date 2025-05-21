import WelcomeLogo from './WelcomeLogo';
import { motion } from 'motion/react';
import Headshot from '../../images/headshot.png';

const introLines = [
  "I'm John.",
  `I've been a front-end developer for ~${new Date().getFullYear() - 2017} years.`,
  '(Full-stack capable)',
  'Just exploring some animations I enjoy.',
];

const introVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1,
      ease: 'easeOut',
    },
  }),
};

const Lander = () => {
  return (
    <div className="flex items-center justify-center gap-8 h-full flex-wrap">
      <div>
        <WelcomeLogo />
        <div className="mt-4 space-y-2">
          {introLines.map((line, i) => (
            <motion.p
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={introVariants}
              className="text-white sm:text-xl font-light"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="rounded-full overflow-hidden w-72 h-72 shadow-lg border-4 border-white"
      >
        <img src={Headshot} alt="Avatar" width={128} height={128} className="object-cover w-full h-full" />
      </motion.div>
    </div>
  );
};

export default Lander;
