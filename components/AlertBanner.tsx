import { AlertTriangle, Mail, Phone } from "lucide-react";
import { patientContext } from "@/data/mock-data";

export function AlertBanner({ message }: { message: string }) {
  return (
    <div className="rounded-[24px] border border-rose-200 bg-rose-50 p-5 text-rose-900 shadow-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-6 w-6 flex-none text-rose-600" />
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-rose-700">Safety alert</p>
          <p className="mt-2 text-lg leading-8">{message}</p>
          <div className="mt-4 space-y-2 rounded-[20px] bg-white/80 p-4 text-base text-slate-700">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-rose-700" />
              <span>Emergency contact: {patientContext.emergencyContact}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-rose-700" />
              <span>Care team: {patientContext.careTeamContact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
