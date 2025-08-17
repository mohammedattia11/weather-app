function SunComponent({ size = 120 }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative animate-spin"
        style={{
          width: size,
          height: size,
          animationDuration: "20s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-80"
              style={{
                width: "4px",
                height: size * 0.25,
                left: "50%",
                top: "50%",
                transformOrigin: "50% 50%",
                transform: `translate(-50%, -50%) rotate(${
                  i * 45
                }deg) translateY(-${size * 0.4}px)`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"
          style={{
            width: size * 0.6,
            height: size * 0.6,
            boxShadow: "0 0 30px rgba(255, 193, 7, 0.6)",
            animationDuration: "2s",
          }}
        />
      </div>
    </div>
  );
}
export default SunComponent;
