import { PiggyBank, TrendingUp, Home, Shield, Briefcase, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: PiggyBank,
      title: 'Pensions',
      description: 'Maximize your retirement savings with expert pension planning. Whether workplace, personal, or SIPP, we ensure your future is secure.',
    },
    {
      icon: TrendingUp,
      title: 'Investments',
      description: 'Build wealth through tax-efficient investment strategies. ISAs, bonds, and portfolios tailored to your risk profile and goals.',
    },
    {
      icon: Home,
      title: 'Mortgages',
      description: 'Find the perfect mortgage solution for your home. First-time buyers, remortgaging, or buy-to-let - we secure competitive rates.',
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'Safeguard what matters most. Life insurance, critical illness, and income protection for complete peace of mind.',
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      description: 'Comprehensive financial services for businesses. From employee benefits to key person insurance and succession planning.',
    },
    {
      icon: Heart,
      title: 'Estate Planning',
      description: 'Protect your legacy and minimize inheritance tax. Trusts, wills, and estate planning strategies for your family future.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#121212] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Holistic financial planning across all areas of your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all">
                <service.icon className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
