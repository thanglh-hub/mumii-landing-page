interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  textColor?: string;
}

function Logo({ size = 'md', showText = true, className = '', textColor = 'text-black' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10', 
    lg: 'w-14 h-14'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-white rounded-full p-1.5 shadow-lg">
        <img 
          src="/images/logo_removal_backgroud.png" 
          alt="MUMII Logo" 
          className={`${sizeClasses[size]} object-contain`}
          style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))' }}
        />
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-black tracking-wide ${textColor}`}>
          MUMII
        </span>
      )}
    </div>
  );
}

export default Logo;
