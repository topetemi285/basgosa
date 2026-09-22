'use client';

import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    ageGroup: 'U19 (Youth Academy)',
    position: 'Midfielder',
    phone: '',
    email: '',
    guardianName: '',
    address: 'Jos, Plateau State',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl p-6 sm:p-8">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-bkfa-lemon via-bkfa-orange to-bkfa-navy" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-bkfa-lemonDark/30 bg-bkfa-lemonBg px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-bkfa-lemonDark mb-2">
                BKFA Trials Intake • Jos
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-bkfa-navy">
                Register for <span className="text-bkfa-orange">Academy Trials</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Open to talented Male and Female footballers across Plateau State and Nigeria.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Victor Danladi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Gender / Team *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:border-bkfa-orange focus:outline-none"
                  >
                    <option value="Male">Male (Boys / Senior Men)</option>
                    <option value="Female">Female (Girls / Queens)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Squad Category *</label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:border-bkfa-orange focus:outline-none"
                  >
                    <option value="U15">U15 Junior Academy</option>
                    <option value="U17">U17 Youth Academy</option>
                    <option value="U19">U19 Elite Squad</option>
                    <option value="Senior">Senior First Team</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Primary Playing Position *</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:border-bkfa-orange focus:outline-none"
                  >
                    <option value="Goalkeeper">Goalkeeper (GK)</option>
                    <option value="Center Back">Center Back (CB)</option>
                    <option value="Fullback / Wingback">Fullback / Wingback (LB/RB)</option>
                    <option value="Defensive Midfielder">Defensive Midfielder (CDM)</option>
                    <option value="Central Midfielder">Central Midfielder (CM/CAM)</option>
                    <option value="Winger">Winger (LW/RW)</option>
                    <option value="Striker / Center Forward">Striker / Center Forward (ST/CF)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0803XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Residential City / State</label>
                <input
                  type="text"
                  placeholder="e.g. Jos, Plateau State"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Previous Club / Experience (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about previous youth clubs, school teams or standout accomplishments..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-bkfa-orange py-3 text-sm font-black uppercase tracking-wider text-white shadow-glowOrange hover:bg-bkfa-orangeDeep transition-all"
                >
                  Submit Trial Application
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bkfa-lemonBg border-2 border-bkfa-lemon text-bkfa-lemonDark text-3xl mb-4 font-bold">
              ✓
            </div>
            <h3 className="font-display text-2xl font-black text-bkfa-navy">Application Received!</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your trial registration for the <strong>{formData.gender} {formData.ageGroup}</strong> category has been logged with BKFA coaches in Jos.
            </p>
            <p className="mt-2 text-xs font-semibold text-bkfa-orange">
              Our scouting coordinator will reach out to you via phone ({formData.phone}) with your screening date and kit requirements at Science Day School Pitch, Cele Bridge, Jos.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-xl bg-bkfa-navy px-6 py-2.5 text-xs font-bold text-white hover:bg-bkfa-navyDeep"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
