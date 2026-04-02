import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = {
    weekday: [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30'
    ],
    saturday: ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30']
  };

  const getAvailableTimeSlots = () => {
    if (!formData.date) return [];

    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 0) return [];
    if (dayOfWeek === 6) return timeSlots.saturday;
    return timeSlots.weekday;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#121212]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 backdrop-blur-sm">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-emerald-400" size={40} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Consultation Requested</h3>
            <p className="text-gray-300 text-lg">
              Thank you for choosing Richmond Financial Advice. We will contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#121212] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step towards financial clarity. No obligation, no pressure - just expert advice tailored to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-400 text-sm">
                    Available Monday-Friday 9:00 AM - 5:00 PM and Saturday 9:30 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">30-Minute Discovery Call</h3>
                  <p className="text-gray-400 text-sm">
                    A complimentary session to understand your needs and explore how we can help
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20">
              <h3 className="text-white font-semibold mb-3">What to Expect:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Discussion of your financial goals and priorities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Overview of our services and how we can assist</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>No obligation - just honest, expert advice</span>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="+44 7700 900000"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {formData.date && (
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <Clock size={16} className="inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  >
                    <option value="">Select a time</option>
                    {getAvailableTimeSlots().map((slot) => (
                      <option key={slot} value={slot} className="bg-[#121212]">
                        {slot}
                      </option>
                    ))}
                  </select>
                  {getAvailableTimeSlots().length === 0 && (
                    <p className="text-amber-400 text-sm mt-2">
                      We are closed on Sundays. Please select a different date.
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  How can we help? (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Tell us about your financial goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                Request Consultation
              </button>

              <p className="text-gray-500 text-xs text-center">
                By submitting this form, you agree to be contacted by Richmond Financial Advice regarding your consultation request.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
