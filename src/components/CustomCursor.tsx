import { useState, useEffect } from 'react';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('hover-card') ||
        target.classList.contains('hover-button') ||
        target.classList.contains('hover-phone') ||
        target.classList.contains('hover-scale') ||
        target.classList.contains('hover-bounce')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-100 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        {/* Neo Brutalism Cursor */}
        <div
          className={`w-6 h-6 border-4 border-black transition-all duration-200 ${
            isHovering
              ? 'bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-45'
              : isClicking
              ? 'bg-red-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12'
              : 'bg-orange-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-0'
          }`}
        />
      </div>

      {/* Cursor Trail */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      >
        <div
          className={`w-4 h-4 border-2 border-black transition-all duration-300 ${
            isHovering
              ? 'bg-pink-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12 opacity-60'
              : isClicking
              ? 'bg-green-400 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rotate-6 opacity-80'
              : 'bg-blue-400 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rotate-0 opacity-40'
          }`}
        />
      </div>

      {/* Cursor Ring */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      >
        <div
          className={`w-10 h-10 border-2 border-black transition-all duration-500 ${
            isHovering
              ? 'bg-transparent shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-45 opacity-30'
              : isClicking
              ? 'bg-transparent shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12 opacity-50'
              : 'bg-transparent shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rotate-0 opacity-20'
          }`}
        />
      </div>

    </>
  );
}

export default CustomCursor;
