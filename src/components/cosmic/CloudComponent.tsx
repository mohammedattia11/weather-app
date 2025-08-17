const CloudComponent = ({ size = 120 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative animate-bounce"
        style={{
          width: size,
          height: size * 0.6,
          animationDuration: "3s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      >
        {/* Main cloud body */}
        <div className="absolute inset-0 flex items-end justify-center">
          {/* Cloud circles creating fluffy appearance */}
          <div
            className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-md"
            style={{
              width: size * 0.4,
              height: size * 0.4,
              left: "10%",
              bottom: "0%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-md"
            style={{
              width: size * 0.5,
              height: size * 0.5,
              left: "25%",
              bottom: "10%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-md"
            style={{
              width: size * 0.6,
              height: size * 0.6,
              left: "20%",
              bottom: "0%",
            }}
          />
          <div
            className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-md"
            style={{
              width: size * 0.35,
              height: size * 0.35,
              right: "15%",
              bottom: "5%",
            }}
          />
        </div>

        {/* Subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CloudComponent;
