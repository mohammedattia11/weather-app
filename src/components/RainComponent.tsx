const RainComponent = ({ size = 120 }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Dark rain cloud */}
        <div
          className="relative animate-pulse"
          style={{
            width: size * 0.8,
            height: size * 0.4,
            top: "10%",
            left: "10%",
            animationDuration: "3s",
          }}
        >
          {/* Cloud circles for stormy appearance */}
          <div
            className="absolute bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg"
            style={{
              width: size * 0.3,
              height: size * 0.3,
              left: "5%",
              bottom: "0%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg"
            style={{
              width: size * 0.4,
              height: size * 0.4,
              left: "20%",
              bottom: "10%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg"
            style={{
              width: size * 0.5,
              height: size * 0.5,
              left: "15%",
              bottom: "0%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-lg"
            style={{
              width: size * 0.25,
              height: size * 0.25,
              right: "10%",
              bottom: "5%",
            }}
          />
        </div>

        {/* Falling raindrops */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-blue-300 to-blue-500 rounded-full opacity-70"
              style={{
                width: "3px",
                height: "12px",
                left: `${15 + i * 6}%`,
                top: "45%",
                animation: `fall 1.5s linear infinite`,
                animationDelay: `${i * 0.1}s`,
                borderRadius: "0 0 50% 50%",
              }}
            />
          ))}
        </div>

        {/* Lightning effect (subtle flash) */}
        <div
          className="absolute inset-0 bg-yellow-200 opacity-0 rounded-full animate-ping pointer-events-none"
          style={{
            animationDuration: "4s",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* CSS Animation for falling rain */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(${size * 0.6}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default RainComponent;
