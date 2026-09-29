import { useEffect, useRef } from "react";
import { useSite } from "../site";
import { EnquiryForm } from "./EnquiryForm";
import { CloseIcon } from "./Icons";

export function EnquireModal() {
  const { enquireOpen, enquireTopic, closeEnquire } = useSite();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enquireOpen) panelRef.current?.focus();
  }, [enquireOpen]);

  if (!enquireOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button type="button" aria-label="Close enquiry form" className="absolute inset-0 bg-navy/70" onClick={closeEnquire} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquire-title"
        tabIndex={-1}
        className="rise-in relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl outline-none"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">Admissions</p>
            <h2 id="enquire-title" className="mt-1 text-xl font-bold text-navy">
              Enquire now
            </h2>
          </div>
          <button
            type="button"
            onClick={closeEnquire}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-navy"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <EnquiryForm key={enquireTopic} topic={enquireTopic} />
      </div>
    </div>
  );
}
