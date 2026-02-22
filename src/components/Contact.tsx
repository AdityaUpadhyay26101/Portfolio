import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-600 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and development.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:adityaupadhyay@example.com"
                className="flex items-center space-x-3 text-slate-700 hover:text-teal-600 transition-colors"
              >
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail size={20} className="text-teal-600" />
                </div>
                <span className="font-medium">adityaupadhyay@example.com</span>
              </a>

              <a
                href="https://github.com/adityaupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-700 hover:text-teal-600 transition-colors"
              >
                <div className="bg-slate-100 p-3 rounded-full">
                  <Github size={20} className="text-slate-700" />
                </div>
                <span className="font-medium">github.com/adityaupadhyay</span>
              </a>

              <a
                href="https://linkedin.com/in/adityaupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-700 hover:text-teal-600 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Linkedin size={20} className="text-blue-600" />
                </div>
                <span className="font-medium">linkedin.com/in/adityaupadhyay</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
