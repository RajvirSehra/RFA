import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">RF</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Richmond Financial</h3>
                <p className="text-emerald-400 text-xs">Expert Advice</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing independent, expert financial advice to help you achieve your goals and secure your future.
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Facebook size={18} className="text-gray-400 hover:text-emerald-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Twitter size={18} className="text-gray-400 hover:text-emerald-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-emerald-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pensions</li>
              <li>Investments</li>
              <li>Mortgages</li>
              <li>Protection</li>
              <li>Business Solutions</li>
              <li>Estate Planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Richmond, London<br />United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:+442081234567" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  +44 20 8123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@richmond-financial.com" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  info@richmond-financial.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="lg:flex lg:justify-between lg:items-start space-y-6 lg:space-y-0">
            <div className="text-gray-500 text-xs leading-relaxed max-w-3xl">
              <p className="mb-2">
                <span className="font-semibold text-gray-400">Regulatory Information:</span> Richmond Financial Advice is authorised and regulated by the Financial Conduct Authority (FCA). FCA Register Number: 123456.
              </p>
              <p className="mb-2">
                The value of investments can go down as well as up and you may not get back the full amount invested. Past performance is not a reliable indicator of future performance. The Financial Conduct Authority does not regulate taxation advice, will writing, or some forms of mortgage advice.
              </p>
              <p>
                Richmond Financial Advice is entered on the FCA Register under reference 123456. You can check this on the FCA Register by visiting the FCA website www.fca.org.uk/register or by contacting the FCA on 0800 111 6768.
              </p>
            </div>

            <div className="text-gray-500 text-xs text-right flex-shrink-0">
              © {new Date().getFullYear()} Richmond Financial Advice.<br />All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
