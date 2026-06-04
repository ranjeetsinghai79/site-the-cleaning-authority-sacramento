import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "The Cleaning Authority - Sacramento",
    tagline: "Sparkling Clean, Stress-Free Living",
    phone: "(916) 520-6570",
    phoneHref: "tel:+19165206570",
    email: "sacramento@thecleaningauthority.com",
    address: "2200 Professional Dr, Ste 200",
    city: "Roseville",
    serviceAreas: ["Sacramento", "Roseville", "Lincoln", "Carmichael", "Citrus Heights", "Rancho Cordova", "Arden-Arcade", "Folsom", "Antelope"],
    license: "Licensed & Insured",
    since: "2000", // Placeholder, as original data was 0
    google_rating: "4.8",
    review_count: "350", // Placeholder, as original data was null
    emergency: false,
    theme: "ember",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Regular, thorough cleaning for your home, keeping it fresh and tidy.", urgent: false },
    { icon: "home", title: "Apartment Cleaning", desc: "Tailored cleaning services designed specifically for apartment living spaces.", urgent: false },
    { icon: "truck", title: "Move In / Move Out Cleaning", desc: "Comprehensive cleaning to prepare your old or new home for moving.", urgent: false },
    { icon: "clock", title: "One-Time Cleans", desc: "Perfect for special occasions or when you need a deep clean without a recurring schedule.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Maintain a professional and hygienic workspace for your employees and clients.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "An intensive cleaning service targeting neglected areas for a truly spotless result.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Sacramento", stars: 5, text: "The Cleaning Authority transformed my home! After a long week, coming home to a spotless house is such a relief. Their team was incredibly thorough, especially in the kitchen and bathrooms, which always seem to be the toughest spots. Worth every penny for the peace of mind." },
    { name: "David L.", location: "Roseville", stars: 5, text: "I hired them for a move-out clean and they did an outstanding job. The apartment looked better than when I moved in! The landlord was very impressed, and I got my full security deposit back without any issues. Highly recommend their professional and efficient service." },
    { name: "Jessica P.", location: "Folsom", stars: 5, text: "I've been using The Cleaning Authority for bi-weekly house cleaning for over six months now, and they are consistently excellent. The Detail-Clean Rotation System really works, and my home always feels fresh and cared for. The staff is friendly and always on time." }
  ],

  trustBadges: [
    "Detail-Clean Rotation System®", "Eco-Friendly Cleaning", "Bonded & Insured", "Satisfaction Guaranteed", "Fully Trained Employees"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 } // Placeholder, as original data was 0
  ],

  reasons: [
    { icon: "sparkles", title: "Detail-Clean System", desc: "Our proven rotation system ensures every part of your home gets a deep clean." },
    { icon: "heart", title: "Eco-Friendly Products", desc: "We use environmentally responsible cleaning solutions for a healthier home." },
    { icon: "shield-check", title: "Bonded & Insured", desc: "Peace of mind knowing your home and our team are fully protected." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work; if you're not happy, we'll make it right." },
    { icon: "award", title: "Expertly Trained Staff", desc: "Our professional cleaners are thoroughly vetted and trained to the highest standards." },
    { icon: "clock", title: "Flexible Scheduling", desc: "Choose weekly, bi-weekly, or monthly services to fit your busy lifestyle." }
  ],

  formServiceOptions: ["House Cleaning", "Apartment Cleaning", "Move In / Move Out Cleaning", "One-Time Cleans", "Office Cleaning", "Deep Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!