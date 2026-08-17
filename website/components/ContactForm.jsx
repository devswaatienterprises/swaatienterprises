'use client';

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input
          type="tel"
          placeholder="Phone Number *"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
          required
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
          required
        />
      </div>

      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white resize-none mb-6"
      ></textarea>

      <button type="submit" className="btn-primary text-white px-8 py-4 rounded-lg font-semibold">
        Submit Enquiry
      </button>
    </form>
  );
}
