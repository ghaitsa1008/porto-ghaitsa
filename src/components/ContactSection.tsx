import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  lang: 'en' | 'id';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('kesyafaghaitsa@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'id' ? 'Nama wajib diisi' : 'Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = lang === 'id' ? 'Email wajib diisi' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = lang === 'id' ? 'Format email tidak valid' : 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      errs.subject = lang === 'id' ? 'Subjek wajib diisi' : 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = lang === 'id' ? 'Pesan minimal 10 karakter' : 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 bg-white dark:bg-[#18191d]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {lang === 'id' ? 'HUBUNGI SAYA' : 'GET IN TOUCH'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
            {lang === 'id' ? 'Mari Kolaborasi untuk Proyek Anda' : 'Let\'s collaborate on your next project'}
          </h2>
        </motion.div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-neutral-600 dark:text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Tertarik mendiskusikan proyek baru, eksplorasi desain, atau ingin menyapa? Silakan hubungi saya melalui formulir ini atau kanal kontak langsung berikut.'
                : 'Have a project in mind, want to inquire about availability, or simply want to say hello? Drop a line and I’ll get back to you within 24 hours.'}
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="p-5 bg-neutral-50 dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2c98f0]/10 text-[#2c98f0] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      {lang === 'id' ? 'Surel Resmi' : 'Direct Email'}
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                      jackson.ford@example.com
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 bg-neutral-50 dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    {lang === 'id' ? 'Lokasi Studio' : 'Studio Location'}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Cilacap, Jawa Tengah, Indonesia
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 bg-neutral-50 dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    {lang === 'id' ? 'Telepon' : 'Telephone'}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5 font-mono">
                    +1 (234) 567-8900
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-neutral-50 dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-6">
                {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}
              </h3>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Terima kasih! Pesan Anda telah terkirim dengan sukses. Saya akan segera membalas.'
                        : 'Thank you! Your message has been sent successfully. I will be in touch shortly.'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      {lang === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#2c98f0] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      {lang === 'id' ? 'Alamat Email' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#2c98f0] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-500">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    {lang === 'id' ? 'Subjek Proyek' : 'Subject'} *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="New Website & Brand Direction"
                    className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#2c98f0] transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                    }`}
                  />
                  {errors.subject && <span className="text-[11px] text-red-500">{errors.subject}</span>}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    {lang === 'id' ? 'Pesan & Rincian Kebutuhan' : 'Message'} *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'id' ? 'Jelaskan visi proyek, jadwal target, atau pertanyaan Anda...' : 'Tell me about your project goals, timeline, and scope...'}
                    className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#2c98f0] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-red-500">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{lang === 'id' ? 'MENGIRIM...' : 'SENDING...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'id' ? 'KIRIM PESAN' : 'SEND MESSAGE'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
