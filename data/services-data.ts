import { ServiceItem } from '@/types/service'

export const services: ServiceItem[] = [
  {
    title: 'Marine Surveys & General Superintendence',
    details: [
      'Loading & Discharging Supervision',
      'Project Cargo Supervision',
      'Draft Surveys & Dispute Investigation',
      'On/Off-Hire Bunker & Condition Surveys',
      'Bunker Quantity Disputes',
      'Cargo Hatch Sealing',
      'Vessel Condition & Damage Assessment',
      'MO32 Container Vessel Inspections',
      'Container, Flat Rack & Reefer Surveys',
    ],
  },
  {
    title: 'P&I Survey & Casualty Response',
    details: [
      'Marine Casualty & Incident Investigation',
      'Cargo Damage & Shortage Claims',
      'Draft Survey Dispute Analysis',
      'Bunker Quantity & Quality Investigations',
      'Hatch Cover Integrity Inspections',
      'Terminal & Stevedore Damage Investigations',
      'Pre-Purchase & Condition Surveys',
    ],
  },
  {
    title: 'Bulk Commodities & Mining Logistics',
    details: [
      'Port Captaincy',
      'Moisture Monitoring & TML Oversight',
      'Liquefaction Risk Mitigation',
      'Draft Survey Verification',
      'Hold Fitness Advisory',
      'Loading Optimisation',
    ],
  },
  {
    title: 'Tanker, Terminal & Offshore Operations',
    details: [
      'Tanker Incident Investigation',
      'Assistant Mooring Master',
      'STS – POAC',
      'Cargo Sampling',
      'Expeditor Services',
    ],
  },
  {
    title: 'Audit, Safety & Regulatory Compliance',
    details: [
      "Lloyd's Register Certified Auditors",
      'ISM, ISPS, MARPOL, STCW, MLC Audits',
      'Navigational & Operational Risk Audits',
      'PSC-Style Inspections (IMO Res. 1052, AMSA Checklist 36)',
      'AMSA, USCG & Paris MoU Readiness',
    ],
  },
  {
    title: 'Container & Specialised Cargo Inspections',
    details: [
      'Project Cargo & Heavy Lift',
      'Container, Flat Rack & Reefer Inspections',
      'Damage & Structural Condition Surveys',
      'MO32 Inspections',
    ],
  },
  {
    title: 'Grain & Agricultural Cargo Services',
    details: [
      'Grain Loading Supervision (Australian Standards)',
      'Charterer-Focused Loading Optimisation',
      'Cargo Hold Fitness Advisory',
      'FTL Hold Cleanliness Inspections',
      'Authorised Officer (A.O.) Bulk Grain Inspection',
      'Grain & Woodchip Sampling',
    ],
  },
]

export const operationalProcess = [
  { step: '01', title: 'Engagement', desc: 'Scope & parameters definition.' },
  { step: '02', title: 'Assessment', desc: 'Rigorous on-site investigation.' },
  { step: '03', title: 'Reporting', desc: 'Evidence-based documentation.' },
  { step: '04', title: 'Advisory', desc: 'Ongoing technical support.' },
]