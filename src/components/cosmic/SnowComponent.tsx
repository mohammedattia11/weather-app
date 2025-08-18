const SnowComponent = ({ size = 120, isNight = false }) => {
  const cloudGradient = isNight
    ? "from-gray-600 to-gray-800"
    : "from-gray-200 to-gray-400";

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Snow cloud */}
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
          <div
            className={`absolute bg-gradient-to-br ${cloudGradient} rounded-full shadow-lg`}
            style={{
              width: size * 0.3,
              height: size * 0.3,
              left: "5%",
              bottom: "0%",
            }}
          />
          <div
            className={`absolute bg-gradient-to-br ${cloudGradient} rounded-full shadow-lg`}
            style={{
              width: size * 0.4,
              height: size * 0.4,
              left: "20%",
              bottom: "8%",
            }}
          />
          <div
            className={`absolute bg-gradient-to-br ${cloudGradient} rounded-full shadow-lg`}
            style={{
              width: size * 0.45,
              height: size * 0.45,
              left: "25%",
              bottom: "0%",
            }}
          />
          <div
            className={`absolute bg-gradient-to-br ${cloudGradient} rounded-full shadow-lg`}
            style={{
              width: size * 0.25,
              height: size * 0.25,
              right: "10%",
              bottom: "5%",
            }}
          />
        </div>

        {/* Falling snowflakes */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: size,
            height: size * 0.6,
            top: "40%",
            left: "0%",
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white opacity-80"
              style={{
                left: `${15 + i * 6}%`,
                top: "0%",
                fontSize: `${8 + (i % 3) * 2}px`,
                animation: `snowDrop 2s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        {isNight && (
          <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-900 opacity-20" />
        )}
      </div>

      {/* CSS Animation for dropping snow */}
      <style>{`
        @keyframes snowDrop {
          0% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(${size * 0.6}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default SnowComponent;
