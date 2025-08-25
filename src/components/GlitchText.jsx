const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? (isLight ? "-5px 0 #0FA3B1" : "-5px 0 red") : "none",
    "--before-shadow": enableShadows ? (isLight ? "5px 0 #9CAF88" : "5px 0 cyan") : "none",
  };

  const baseClasses =
    `${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0FA3B1] to-[#9CAF88]' : 'text-white'} text-[clamp(2rem,10vw,8rem)] font-black relative mx-auto select-none cursor-pointer`;

  const pseudoClasses = !enableOnHover
    ? 
      `after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:${isLight ? 'text-[#4a4a4a]' : 'text-white'} after:${isLight ? 'bg-[#fff5f2]' : 'bg-[#060010]'} after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after ` +
      `before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:${isLight ? 'text-[#4a4a4a]' : 'text-white'} before:${isLight ? 'bg-[#fff5f2]' : 'bg-[#060010]'} before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before`
    : 
      `after:content-[''] after:absolute after:top-0 after:left-[10px] after:${isLight ? 'text-[#4a4a4a]' : 'text-white'} after:${isLight ? 'bg-[#fff5f2]' : 'bg-[#060010]'} after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 ` +
      `before:content-[''] before:absolute before:top-0 before:left-[-10px] before:${isLight ? 'text-[#4a4a4a]' : 'text-white'} before:${isLight ? 'bg-[#fff5f2]' : 'bg-[#060010]'} before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 ` +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before";

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  );
};

export default GlitchText; 