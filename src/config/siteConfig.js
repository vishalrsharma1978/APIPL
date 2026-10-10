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
    otherBusinessUnits: [
      {
        name: "SUPERTECH RAIL INFRA-PROJECTS PVT. LTD.",
        railway: "Under Central Railway",
        address:
          "Survey No. 908/1/2, Near-Ganesha Village Road, Kasthi Rly Station, Kasthi, Taluka - Shrigonda, Dist. Ahmednagar - 414701 MH.",
        email: "supertechrail@gmail.com",
        phone: "+91 98220 93075",
        website: "https://supertechrailinfra.com",
      },
      {
        name: "RAGHAVENDRA RAIL LINES PVT. LTD.",
        railway: "Under South Central Railway",
        address:
          "Survey No. 32 & 33 Bodjanampet Village - Grampanchayat, Balanagar Mandal, Bodajanampet, Mehbubnagar, Telanagana - 509202",
        email: "raghavendraraillines@gmail.com",
        phone: "+91 98220 93075",
        website: "https://rrlpl.com",
      },
      {
        name: "PARAMOUNT RAIL INFRA PVT. LTD.",
        railway: "Under Western Railway",
        address:
          "Survey No. 266/4, Village – Godavari, Near- Digsar Railway Station, Taluka - Muli, Dist. Surendranagar - 363510 Gujrat.",
        email: "csppripl@gmail.com",
        phone: "+91 98220 93075",
        website: "https://paramountrailinfra.com",
      },
    ],
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
      ["Production volume", "15,000/day · 450,000/month"],
    ],
    overview:
      "The RT 6901 railway sleeper insert from APIPL is a high-strength precision casting engineered for concrete railway sleepers. Manufactured from SG Iron 500/7 (spheroidal graphite cast iron), it delivers a minimum tensile strength of 500 N/mm² and 190 BHN hardness, providing a dependable anchoring point for rail fastening clips. Cast on advanced ARPA 350 lines with controlled grinding and dimensional checks, every insert supports stronger, safer and longer-lasting rail infrastructure.",
    benefits: [
      "Enhanced track stability and rail safety under heavy, repeated loads",
      "Long service life with low maintenance cost across demanding conditions",
      "Consistent quality backed by rigorous dimensional and material checks",
      "Scalable supply — up to 15,000 inserts/day for large railway projects",
    ],
    applications: [
      "Railway sleeper reinforcement and concrete sleeper fastening",
      "Heavy-duty rail track installation and renewal",
      "Rail infrastructure modernization and capacity-expansion projects",
    ],
  },
  faqs: [
    {
      q: "What is a railway sleeper insert?",
      a: "A railway sleeper insert is a cast component embedded into concrete sleepers that provides a strong, durable anchoring point for rail fastening clips. It transfers track loads reliably and keeps the rail securely fastened under heavy, repeated traffic.",
    },
    {
      q: "What material are APIPL railway sleeper inserts made from?",
      a: "APIPL's RT 6901 insert is manufactured from SG Iron 500/7 (spheroidal graphite cast iron / SGCI), delivering high ductility and strength for safety-critical railway applications.",
    },
    {
      q: "What are the tensile strength and hardness of the RT 6901 insert?",
      a: "The RT 6901 railway sleeper insert offers a minimum tensile strength of 500 N/mm², a minimum hardness of 190 BHN and minimum 7% elongation, produced under strict dimensional control.",
    },
    {
      q: "What is APIPL's production capacity for railway inserts?",
      a: "APIPL manufactures railway sleeper inserts at up to 15,000 units per day and 450,000 units per month on advanced ARPA 350 casting lines, enabling reliable supply for large-scale rail infrastructure projects.",
    },
    {
      q: "Is APIPL an RDSO-approved manufacturer?",
      a: "Yes. APIPL (Aashi Powertech India Private Limited) operates an RDSO-approved plant combining special-purpose machinery, IoT systems and Industry 4.0 practices to deliver consistent, precision-engineered railway components.",
    },
    {
      q: "Can APIPL handle bulk and repeat orders?",
      a: "Yes. With 6,000 MT annual casting capacity and 450,000 inserts per month, APIPL can reliably supply bulk and repeat orders for railway projects without compromising quality.",
    },
  ],
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
