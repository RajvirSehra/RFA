import { Shield, Award, Users, CheckCircle } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    { icon: Shield, text: 'FCA Regulated' },
    { icon: Award, text: 'Chartered Advisers' },
    { icon: Users, text: '1000+ Clients Served' },
    { icon: CheckCircle, text: 'Independent Advice' },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all hover:scale-105"
            >
              <item.icon className="text-emerald-400" size={32} />
              <span className="text-gray-300 font-medium text-center text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
