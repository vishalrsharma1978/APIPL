import React from "react";
import { ArrowRight, Check, Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "./config/siteConfig";
import { LOCATIONS, locationPath } from "./locations";

export default function LocationPage({ location }) {
  const { city, state } = location;
  const { company, product } = siteConfig;

  // Internal links: same-state locations first, then a few others.
  const sameState = LOCATIONS.filter(
    (l) => l.state === state && l.city !== city,
  );
  const others = LOCATIONS.filter((l) => l.state !== state).slice(0, 12);
  const related = [...sameState, ...others].slice(0, 14);

  return (
    <div className="location-page">
      <header className="header location-header">
        <div className="header-brand">
          <a href="/" className="brand" aria-label="APIPL home">
            <img src="/assets/apipl-logo.png" alt="APIPL" />
          </a>
        </div>
        <a
          className="button primary location-cta"
          href={createWhatsAppUrl(
            `Hello APIPL, I am looking for SGCI / railway sleeper inserts in ${city}, ${state}.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Get a quote <ArrowRight size={16} />
        </a>
      </header>

      <main>
        <section className="section loc-hero">
          <span className="kicker">Railway Sleeper Inserts · {state}</span>
          <h1>
            SGCI &amp; Railway Sleeper Insert Manufacturer in {city}
          </h1>
          <p className="loc-lead">
            APIPL (Aashi Powertech India Private Limited) is an RDSO-approved
            manufacturer and supplier of high-strength SGCI railway sleeper
            inserts serving {city} and the wider {state} region. Our flagship
            RT 6901 SG Iron (SGCI) insert is engineered for concrete railway
            sleepers, delivering dependable track fastening, dimensional
            consistency and industrial-scale supply for rail infrastructure
            projects in and around {city}.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#enquiry">
              Request a quotation <ArrowRight size={18} />
            </a>
            <a className="button ghost" href="#specs">
              View specifications
            </a>
          </div>
        </section>

        <section className="section loc-content">
          <h2>
            Precision SGCI Inserts for Railway Projects in {city}, {state}
          </h2>
          <p>{product.overview}</p>

          <div className="product-detail-grid">
            <article>
              <h3>Why buyers in {city} choose APIPL</h3>
              <ul>
                {product.benefits.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Applications across {state}</h3>
              <ul>
                {product.applications.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section specs-section loc-specs" id="specs">
          <div className="specs-intro">
            <span className="kicker">Technical data</span>
            <h2>RT 6901 insert specifications</h2>
            <p>
              Technical parameters for the RT 6901 railway sleeper insert
              supplied to customers in {city} and across {state}.
            </p>
          </div>
          <div className="specs-table">
            {product.specifications.map(([label, value], index) => (
              <div className="spec-row" key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{label}</p>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section loc-faq">
          <h2>Railway sleeper inserts in {city} — FAQs</h2>
          <div className="faq-list">
            <article className="faq-item open">
              <div className="faq-question">
                <h3>Do you supply railway sleeper inserts in {city}?</h3>
              </div>
              <p className="faq-answer">
                Yes. APIPL manufactures and supplies RT 6901 SGCI railway
                sleeper inserts to railway contractors, sleeper plants and
                infrastructure projects in {city} and throughout {state}, with
                a capacity of up to 15,000 inserts per day.
              </p>
            </article>
            <article className="faq-item open">
              <div className="faq-question">
                <h3>Are APIPL inserts RDSO-approved?</h3>
              </div>
              <p className="faq-answer">
                Yes. APIPL operates an RDSO-approved plant producing SG Iron
                500/7 (SGCI) inserts with 500 N/mm² minimum tensile strength
                and 190 BHN minimum hardness, suitable for Indian Railways
                concrete sleeper applications near {city}.
              </p>
            </article>
            <article className="faq-item open">
              <div className="faq-question">
                <h3>Can you handle bulk orders for {state}?</h3>
              </div>
              <p className="faq-answer">
                Absolutely. With 6,000 MT annual casting capacity and 450,000
                inserts per month, APIPL reliably supplies bulk and repeat
                orders for large railway projects in {city} and across {state}.
              </p>
            </article>
          </div>
        </section>

        <section className="section loc-enquiry" id="enquiry">
          <div className="contact-details loc-contact">
            <h2>Get SGCI inserts in {city}</h2>
            <p>
              Contact APIPL for quotations, technical data and bulk supply of
              railway sleeper inserts in {city}, {state}.
            </p>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <Phone size={18} />
              <span>
                {company.phone}
                <small>{company.alternatePhone}</small>
              </span>
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail size={18} />
              <span>{company.email}</span>
            </a>
            <div>
              <MapPin size={18} />
              <span>
                Registered Office<small>{company.registeredOffice}</small>
              </span>
            </div>
            <a
              className="button primary"
              href={createWhatsAppUrl(
                `Hello APIPL, please share a quotation for RT 6901 railway sleeper inserts in ${city}, ${state}.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="section loc-links">
          <h2>SGCI insert manufacturer — other locations</h2>
          <p>
            APIPL supplies railway sleeper inserts across India. Explore our
            service areas:
          </p>
          <div className="loc-link-grid">
            {related.map((l) => (
              <a key={l.city} href={locationPath(l)}>
                <span>
                  SGCI inserts in {l.city}
                  <small>{l.state}</small>
                </span>
                <ChevronRight size={16} />
              </a>
            ))}
            <a href="/" className="loc-link-home">
              <span>
                All products &amp; company
                <small>APIPL home</small>
              </span>
              <ChevronRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="brand footer-brand">
            <img src="/assets/apipl-logo.png" alt="APIPL" />
          </div>
          <p>
            {company.fullName} — RDSO-approved manufacturer of railway sleeper
            inserts and SG iron / ductile iron castings. Serving {city},{" "}
            {state} and all of India.
          </p>
        </div>
      </footer>
    </div>
  );
}
