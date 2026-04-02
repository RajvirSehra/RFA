import { Target, Users, Award, TrendingUp, Shield, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Every client is unique. We take time to understand your goals, circumstances, and aspirations to create a personalized financial roadmap.',
    },
    {
      icon: Users,
      title: 'Independent Advice',
      description: 'Not tied to any provider, we search the entire market to find the best solutions for you - not commissions for us.',
    },
    {
      icon: Award,
      title: 'Chartered Experts',
      description: 'Our team holds the highest professional qualifications in financial planning, ensuring gold-standard advice you can trust.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 18 years of helping clients achieve their financial goals. From first homes to comfortable retirements, we deliver results.',
    },
    {
      icon: Shield,
      title: 'Fully Regulated',
      description: 'Authorized and regulated by the FCA. Your interests are protected at every stage of your financial journey with us.',
    },
    {
      icon: Heart,
      title: 'Long-Term Partnership',
      description: 'We are not here for quick transactions. We build lasting relationships, supporting you through every life stage and financial decision.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Richmond Financial?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference that expert, independent financial advice can make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                  <reason.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 backdrop-blur-sm">
            <p className="text-gray-300 text-lg max-w-2xl">
              <span className="font-semibold text-emerald-400">Richmond Financial Advice</span> is committed to providing clear, honest, and comprehensive financial guidance. We believe in empowering our clients with knowledge and confidence to make informed decisions about their financial future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
