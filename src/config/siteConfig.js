export const siteConfig = {
  company: {
    name: "APIPL",
    fullName: "Aashi Powertech India Private Limited",
    cin: "U24319PN2025PTC241228",
    incorporated: "25 April 2025",
    email: "aashipowertech@gmail.com",
    phone: "+91 98220 93075",
    alternatePhone: "+91 99374 78821",
    whatsappNumber: "919822093075",
    registeredOffice:
      "Amanora Apex, Second Floor, Office No. 221, Hadapsar, Pune, Maharashtra 411028, India",
    plantAddress:
      "Khata No. 22/167, Plot No. 195/342, 193; Khata No. 1/4, Plot No. 191/394, Birmitrapur, Panposh, Bijabahal Kuarmunda, Sundargarh, Odisha 770039",
    directors: ["Mr. Utkarsh Gadodia", "Mr. Sonu Maheshchand Sharma"],
    profile:
      "Aashi Powertech India Private Limited manufactures ductile-iron and cast-iron castings on advanced ARPA 350 lines. Our RDSO-approved plant combines special-purpose machinery and IoT systems with Industry 4.0 practices to deliver consistent, precision-engineered components.",
    vision:
      "To become a globally recognized and trusted leader in insert manufacturing through precision, quality, innovation, reliability and technological excellence.",
    mission:
      "To manufacture high-quality, precision-engineered inserts through advanced technology, robust quality control and responsible production practices while creating lasting value for customers and stakeholders.",
  },
  product: {
    name: "RT 6901 Insert",
    category: "Railway Sleeper Insert",
    description:
      "A high-strength spheroidal graphite cast iron insert engineered for concrete railway sleepers and consistent track fastening performance.",
    specifications: [
      ["Component size", "170.1 × 76 × 71.0 mm"],
      ["Component weight", "1.567 kg"],
      ["Material & grade", "SG Iron 500/7"],
      ["Material hardness", "190 BHN minimum"],
      ["Tensile strength", "500 N/mm² minimum"],
      ["Elongation", "7% minimum"],
      ["Flash thickness", "1.5–2 mm"],
      ["Flash width", "2 mm"],
      ["Finishing process", "Grinding"],
      ["Production volume", "150,000/day · 450,000/month"],
    ],
  },
  chatbot: {
    greeting:
      "Hello! I’m the APIPL product assistant. What can I help you with today?",
    questions: [
      {
        id: "intent",
        prompt: "What would you like to discuss?",
        options: [
          { label: "Request a quotation", value: "Quotation" },
          { label: "Technical specifications", value: "Technical enquiry" },
          { label: "Bulk supply", value: "Bulk supply" },
          { label: "Quality & manufacturing", value: "Quality enquiry" },
        ],
      },
      {
        id: "quantity",
        prompt: "What quantity do you require?",
        options: [
          { label: "Sample / trial order", value: "Sample or trial order" },
          { label: "Up to 10,000 units", value: "Up to 10,000 units" },
          { label: "10,000–100,000 units", value: "10,000–100,000 units" },
          { label: "More than 100,000 units", value: "More than 100,000 units" },
        ],
      },
      {
        id: "timeline",
        prompt: "When do you need the order?",
        options: [
          { label: "Immediately", value: "Immediately" },
          { label: "Within 30 days", value: "Within 30 days" },
          { label: "1–3 months", value: "Within 1–3 months" },
          { label: "Planning stage", value: "Planning stage" },
        ],
      },
    ],
  },
};

export function createWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
