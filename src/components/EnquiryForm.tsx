import { useState, type FormEvent } from "react";

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export function EnquiryForm({ topic }: { topic: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^[0-9+\-\s]{10,16}$/.test(phone)) {
      setError("Please enter a phone number.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
        <p className="font-semibold">This preview does not send enquiries to the college.</p>
        <p className="mt-2">
          To reach the admission office about “{topic}”, email{" "}
          <a className="font-semibold underline" href="mailto:admissionbpl@patelcollege.com">
            admissionbpl@patelcollege.com
          </a>{" "}
          or call{" "}
          <a className="font-semibold underline" href="tel:+917552896281">
            +91-755-2896281
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson">{topic}</p>
      <label className="block text-sm font-medium text-navy">
        Full name
        <input className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label className="block text-sm font-medium text-navy">
        Email
        <input
          className={fieldClass}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        Phone
        <input
          className={fieldClass}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          inputMode="tel"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        Message
        <textarea
          className={`${fieldClass} min-h-24 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      {error ? <p className="text-sm font-medium text-crimson">{error}</p> : null}
      <button
        type="submit"
        className="w-full rounded-lg bg-crimson px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-rose-800"
      >
        Submit enquiry
      </button>
      <p className="text-xs leading-5 text-slate-500">
        Preview only. Nothing is stored or emailed from this page.
      </p>
    </form>
  );
}
