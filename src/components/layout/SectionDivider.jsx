import { motion } from 'framer-motion';

/**
 * Torn paper divider between sections — gives the "notebook page turn" feel.
 * Variants: 'tear', 'fold', 'stitch'
 */
const SectionDivider = ({ variant = 'tear' }) => {
  if (variant === 'tear') {
    return (
      <div className="relative w-full h-8 overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,16 Q25,4 50,14 T100,10 T150,18 T200,8 T250,16 T300,6 T350,14 T400,10 T450,18 T500,8 T550,16 T600,12 T650,18 T700,6 T750,14 T800,10 T850,18 T900,8 T950,16 T1000,12 T1050,18 T1100,6 T1150,14 T1200,10"
            stroke="var(--paper-burnt)"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
        {/* Shadow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--paper-burnt)] to-transparent opacity-15"></div>
      </div>
    );
  }

  if (variant === 'stitch') {
    return (
      <div className="relative w-full flex items-center justify-center py-4 select-none pointer-events-none" aria-hidden="true">
        <div
          className="w-full max-w-4xl h-px mx-auto"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to right,
              var(--pencil-color) 0px,
              var(--pencil-color) 8px,
              transparent 8px,
              transparent 16px
            )`,
            opacity: 0.12,
          }}
        ></div>
      </div>
    );
  }

  // variant === 'fold'
  return (
    <motion.div
      className="relative w-full h-6 select-none pointer-events-none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--paper-burnt)] to-transparent opacity-20"></div>
    </motion.div>
  );
};

export default SectionDivider;
