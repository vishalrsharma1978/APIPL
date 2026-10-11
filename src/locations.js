// Programmatic SEO location targets — Indian railway & industrial hubs.
// Each entry generates a unique static landing page at build time.

export const LOCATIONS = [
  { city: "Pune", state: "Maharashtra" },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Nagpur", state: "Maharashtra" },
  { city: "Nashik", state: "Maharashtra" },
  { city: "Ahmednagar", state: "Maharashtra" },
  { city: "Kolhapur", state: "Maharashtra" },
  { city: "Aurangabad", state: "Maharashtra" },
  { city: "Solapur", state: "Maharashtra" },
  { city: "Bhubaneswar", state: "Odisha" },
  { city: "Rourkela", state: "Odisha" },
  { city: "Sundargarh", state: "Odisha" },
  { city: "Cuttack", state: "Odisha" },
  { city: "Sambalpur", state: "Odisha" },
  { city: "Angul", state: "Odisha" },
  { city: "Raipur", state: "Chhattisgarh" },
  { city: "Bhilai", state: "Chhattisgarh" },
  { city: "Bilaspur", state: "Chhattisgarh" },
  { city: "Durg", state: "Chhattisgarh" },
  { city: "Kolkata", state: "West Bengal" },
  { city: "Durgapur", state: "West Bengal" },
  { city: "Asansol", state: "West Bengal" },
  { city: "Kharagpur", state: "West Bengal" },
  { city: "Haldia", state: "West Bengal" },
  { city: "Jamshedpur", state: "Jharkhand" },
  { city: "Ranchi", state: "Jharkhand" },
  { city: "Dhanbad", state: "Jharkhand" },
  { city: "Bokaro", state: "Jharkhand" },
  { city: "Patna", state: "Bihar" },
  { city: "Gaya", state: "Bihar" },
  { city: "Muzaffarpur", state: "Bihar" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Coimbatore", state: "Tamil Nadu" },
  { city: "Namakkal", state: "Tamil Nadu" },
  { city: "Salem", state: "Tamil Nadu" },
  { city: "Tiruchirappalli", state: "Tamil Nadu" },
  { city: "Madurai", state: "Tamil Nadu" },
  { city: "Erode", state: "Tamil Nadu" },
  { city: "Tirupur", state: "Tamil Nadu" },
  { city: "Bengaluru", state: "Karnataka" },
  { city: "Hubli", state: "Karnataka" },
  { city: "Belgaum", state: "Karnataka" },
  { city: "Mysuru", state: "Karnataka" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Warangal", state: "Telangana" },
  { city: "Mahbubnagar", state: "Telangana" },
  { city: "Visakhapatnam", state: "Andhra Pradesh" },
  { city: "Vijayawada", state: "Andhra Pradesh" },
  { city: "Guntur", state: "Andhra Pradesh" },
  { city: "Ahmedabad", state: "Gujarat" },
  { city: "Surat", state: "Gujarat" },
  { city: "Vadodara", state: "Gujarat" },
  { city: "Rajkot", state: "Gujarat" },
  { city: "Surendranagar", state: "Gujarat" },
  { city: "Bhavnagar", state: "Gujarat" },
  { city: "Jaipur", state: "Rajasthan" },
  { city: "Jodhpur", state: "Rajasthan" },
  { city: "Kota", state: "Rajasthan" },
  { city: "Udaipur", state: "Rajasthan" },
  { city: "Bhopal", state: "Madhya Pradesh" },
  { city: "Indore", state: "Madhya Pradesh" },
  { city: "Jabalpur", state: "Madhya Pradesh" },
  { city: "Gwalior", state: "Madhya Pradesh" },
  { city: "Lucknow", state: "Uttar Pradesh" },
  { city: "Kanpur", state: "Uttar Pradesh" },
  { city: "Agra", state: "Uttar Pradesh" },
  { city: "Varanasi", state: "Uttar Pradesh" },
  { city: "Gorakhpur", state: "Uttar Pradesh" },
  { city: "Jhansi", state: "Uttar Pradesh" },
  { city: "Ghaziabad", state: "Uttar Pradesh" },
  { city: "Noida", state: "Uttar Pradesh" },
  { city: "New Delhi", state: "Delhi" },
  { city: "Faridabad", state: "Haryana" },
  { city: "Gurugram", state: "Haryana" },
  { city: "Panipat", state: "Haryana" },
  { city: "Ludhiana", state: "Punjab" },
  { city: "Amritsar", state: "Punjab" },
  { city: "Jalandhar", state: "Punjab" },
  { city: "Chandigarh", state: "Chandigarh" },
  { city: "Guwahati", state: "Assam" },
  { city: "Dibrugarh", state: "Assam" },
  { city: "Thiruvananthapuram", state: "Kerala" },
  { city: "Kochi", state: "Kerala" },
  { city: "Kozhikode", state: "Kerala" },
  { city: "Dehradun", state: "Uttarakhand" },
  { city: "Haridwar", state: "Uttarakhand" },
  { city: "Jammu", state: "Jammu and Kashmir" },
];

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function locationSlug(location) {
  return `sgci-insert-manufacturer-in-${slugify(location.city)}`;
}

export function locationPath(location) {
  return `/${locationSlug(location)}/`;
}
