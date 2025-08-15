interface CardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  delay?: string;
}

export default function Card({ title, description, icon, gradient, delay = "0" }: CardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
      style={{ animationDelay: delay }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Icon */}
      <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Hover Effect Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  );
}