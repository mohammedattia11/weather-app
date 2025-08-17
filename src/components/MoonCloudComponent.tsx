export default function MoonCloudComponent({size=120}) {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* Moon with gentle glow */}
        <div 
          className="absolute top-2 left-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg animate-pulse"
          style={{ 
            width: size * 0.45, 
            height: size * 0.45,
            boxShadow: '0 0 20px rgba(229, 231, 235, 0.8), inset -8px -8px 0 rgba(156, 163, 175, 0.3)',
            animationDuration: '4s'
          }}
        >
          {/* Moon craters */}
          <div 
            className="absolute bg-gray-400 rounded-full opacity-30"
            style={{ 
              width: '8px', 
              height: '8px', 
              top: '25%', 
              left: '30%' 
            }}
          />
          <div 
            className="absolute bg-gray-400 rounded-full opacity-30"
            style={{ 
              width: '6px', 
              height: '6px', 
              top: '50%', 
              right: '35%' 
            }}
          />
          <div 
            className="absolute bg-gray-400 rounded-full opacity-30"
            style={{ 
              width: '4px', 
              height: '4px', 
              bottom: '30%', 
              left: '40%' 
            }}
          />
        </div>
        
        {/* Front clouds with floating animation */}
        <div 
          className="absolute animate-bounce"
          style={{ 
            bottom: '20%',
            left: '5%',
            animationDuration: '3s',
            animationDelay: '0.5s'
          }}
        >
          <div 
            className="relative"
            style={{ width: size * 0.6, height: size * 0.35 }}
          >
            <div 
              className="absolute bg-gradient-to-br from-gray-50 to-gray-200 rounded-full shadow-md opacity-90"
              style={{ 
                width: size * 0.25, 
                height: size * 0.25, 
                left: '0%', 
                bottom: '0%' 
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-gray-50 to-gray-200 rounded-full shadow-md opacity-90"
              style={{ 
                width: size * 0.35, 
                height: size * 0.35, 
                left: '15%', 
                bottom: '5%' 
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-gray-50 to-gray-200 rounded-full shadow-md opacity-90"
              style={{ 
                width: size * 0.3, 
                height: size * 0.3, 
                right: '5%', 
                bottom: '0%' 
              }}
            />
          </div>
        </div>
        
        {/* Background clouds with different animation timing */}
        <div 
          className="absolute animate-bounce opacity-70"
          style={{ 
            top: '45%',
            right: '10%',
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        >
          <div 
            className="relative"
            style={{ width: size * 0.4, height: size * 0.25 }}
          >
            <div 
              className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-sm"
              style={{ 
                width: size * 0.15, 
                height: size * 0.15, 
                left: '0%', 
                bottom: '0%' 
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-sm"
              style={{ 
                width: size * 0.2, 
                height: size * 0.2, 
                left: '10%', 
                bottom: '5%' 
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-sm"
              style={{ 
                width: size * 0.18, 
                height: size * 0.18, 
                right: '0%', 
                bottom: '0%' 
              }}
            />
          </div>
        </div>
        
        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${10 + i * 15 + (i % 2) * 10}%`,
                top: `${15 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s'
              }}
            >
              <div className="w-1 h-1 bg-yellow-200 rounded-full opacity-80"></div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Gentle night glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-blue-100 via-transparent to-transparent opacity-20 rounded-full animate-pulse pointer-events-none"
          style={{
            animationDuration: '6s'
          }}
        />
      </div>
    </div>
  );
}
