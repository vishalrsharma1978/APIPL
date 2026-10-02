import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Gauge,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "./config/siteConfig";

const productImages = [
  { src: "/assets/rt-6901-front.jpeg", label: "Front view" },
  { src: "/assets/rt-6901-profile.jpeg", label: "Profile view" },
  { src: "/assets/rt-6901-top.jpeg", label: "Top view" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["01", "Company", "#company"], ["02", "Product", "#product"], ["03", "Capabilities", "#capabilities"], ["04", "Specifications", "#specifications"], ["05", "Contact", "#contact"]];

  return (
    <header className={open ? "header menu-open" : "header"}>
      <div className="header-brand">
        <a href="#home" className="brand" aria-label="APIPL home">
          <img src="/assets/apipl-logo.png" alt="APIPL" />
        </a>
      </div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        <span>{open ? "Close" : "Menu"}</span>{open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        <div className="nav-heading"><span>Explore APIPL</span><small>Navigation</small></div>
        <div className="nav-links">
          {links.map(([number, label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <small>{number}</small><span>{label}</span><ChevronRight />
            </a>
          ))}
        </div>
        <a className="nav-cta" href={createWhatsAppUrl("Hello APIPL, I would like to discuss the RT 6901 Insert.")} target="_blank" rel="noreferrer">
          <span>Start a project</span><strong>Get a quote</strong><MessageCircle size={18} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <img src="/assets/apipl-facility.jpeg" alt="APIPL manufacturing facility" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="eyebrow"><span /> Engineered for Indian Railways</div>
        <h1>Strength cast into<br /><em>every connection.</em></h1>
        <p>Precision railway inserts built for dependable fastening, dimensional consistency and industrial-scale supply.</p>
        <div className="hero-actions">
          <a className="button primary" href="#product">Explore the product <ArrowRight size={18} /></a>
          <a className="button ghost" href="#specifications">View specifications</a>
        </div>
      </div>
      <div className="hero-signature" aria-hidden="true">
        <span className="signature-ring"><strong>AP</strong><i>01</i></span>
        <p>Precision<br />in motion</p>
      </div>
      <div className="hero-stats">
        <div><strong>500</strong><span>N/mm² tensile strength</span></div>
        <div><strong>190</strong><span>BHN minimum hardness</span></div>
        <div><strong>15K</strong><span>units daily capacity</span></div>
      </div>
    </section>
  );
}

function CompanyProfile() {
  const { company } = siteConfig;
  return (
    <section className="section company-section" id="company">
      <div className="company-heading">
        <div>
          <span className="kicker">01 — Company profile</span>
          <h2>Powering progress<br />through precision.</h2>
        </div>
        <div className="company-summary">
          <p>{company.profile}</p>
          <a className="text-link" href="/APIPL COMPANY PROFILE.pdf" target="_blank" rel="noreferrer">
            Download company profile <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <div className="company-metrics">
        <article><strong>6,000</strong><span>MT casting capacity</span></article>
        <article><strong>1–40</strong><span>kg casting range</span></article>
        <article><strong>4.5 lakh</strong><span>inserts per month</span></article>
        <article><strong>RDSO</strong><span>approved plant</span></article>
      </div>
      <div className="company-story">
        <div className="company-image"><img src="/assets/apipl-facility.jpeg" alt="APIPL manufacturing plant" /></div>
        <div className="purpose-grid">
          <article><span>Vision</span><p>{company.vision}</p></article>
          <article><span>Mission</span><p>{company.mission}</p></article>
          <div className="company-facts">
            <p><strong>Founded</strong>{company.incorporated}</p>
            <p><strong>CIN</strong>{company.cin}</p>
            <p><strong>Directors</strong>{company.directors.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const [active, setActive] = useState(0);
  return (
    <section className="section product-section" id="product">
      <div className="section-heading">
        <div><span className="kicker">02 — Our product</span><h2>One component.<br />Critical performance.</h2></div>
        <p>{siteConfig.product.description}</p>
      </div>
      <div className="product-grid">
        <div className="product-visual">
          <div className="image-stage">
            <span className="image-label">{productImages[active].label}</span>
            <img src={productImages[active].src} alt={`RT 6901 insert ${productImages[active].label.toLowerCase()}`} />
          </div>
          <div className="image-switcher">
            {productImages.map((image, index) => (
              <button className={index === active ? "active" : ""} onClick={() => setActive(index)} key={image.src}>
                <img src={image.src} alt="" /><span>{image.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="product-copy">
          <span className="product-code">RT 6901</span>
          <h3>Railway Sleeper Insert</h3>
          <p>Embedded into concrete sleepers, the RT 6901 provides a robust anchoring point for rail fastening clips—transferring loads reliably across demanding track conditions.</p>
          <ul>
            {["SG Iron 500/7 construction", "Controlled dimensional tolerances", "High load-bearing integrity", "Production-ready at scale"].map(item => <li key={item}><Check size={17} />{item}</li>)}
          </ul>
          <a href={createWhatsAppUrl("Hello APIPL, please share a quotation for the RT 6901 Railway Sleeper Insert.")} target="_blank" rel="noreferrer" className="text-link">
            Request product quote <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { icon: ShieldCheck, title: "Material integrity", text: "SG Iron 500/7 delivers the ductility and strength required for safety-critical railway applications." },
    { icon: Gauge, title: "Process precision", text: "Controlled grinding and finishing maintain close dimensions and dependable fitment." },
    { icon: Zap, title: "Supply at scale", text: "High-volume capacity supports demanding infrastructure schedules and repeat requirements." },
  ];
  return (
    <section className="capabilities" id="capabilities">
      <div className="section capabilities-inner">
        <div className="capability-intro">
          <span className="kicker light">03 — Why APIPL</span>
          <h2>Built around<br />certainty.</h2>
          <p>From metallurgy to finishing, every stage is focused on repeatable, dependable product performance.</p>
        </div>
        <div className="capability-list">
          {items.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <span className="capability-number">0{index + 1}</span>
              <Icon />
              <div><h3>{title}</h3><p>{text}</p></div>
              <ChevronRight />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSignature() {
  const stages = [
    ["01", "Metallurgy", "Controlled material composition"],
    ["02", "Form", "Repeatable ARPA line moulding"],
    ["03", "Precision", "Grinding and dimensional control"],
    ["04", "Proof", "Inspection before dispatch"],
  ];

  return (
    <section className="process-signature" aria-label="APIPL manufacturing process">
      <div className="process-title">
        <span>THE APIPL PRECISION LOOP</span>
        <strong>Four disciplines.<br />One dependable result.</strong>
      </div>
      <div className="process-track">
        {stages.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <div><strong>{title}</strong><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Specifications() {
  return (
    <section className="section specs-section" id="specifications">
      <div className="specs-intro">
        <span className="kicker">04 — Technical data</span>
        <h2>Specified for<br />performance.</h2>
        <p>Technical parameters supplied for the RT 6901 insert.</p>
        <a className="button dark" href="/Product Photo & Technical Specifications.pdf" target="_blank">View original datasheet <ArrowRight size={17} /></a>
      </div>
      <div className="specs-table">
        {siteConfig.product.specifications.map(([label, value], index) => (
          <div className="spec-row" key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span><p>{label}</p><strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Chatbot() {
  const { chatbot } = siteConfig;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const complete = step >= chatbot.questions.length;

  const choose = (question, option) => {
    setAnswers(current => ({ ...current, [question.id]: option.value }));
    setStep(current => current + 1);
  };
  const reset = () => { setStep(0); setAnswers({}); };
  const summary = `Hello APIPL, I completed the website enquiry.%0A%0AInterest: ${answers.intent}%0AQuantity: ${answers.quantity}%0ATimeline: ${answers.timeline}%0A%0APlease help me with the next steps.`;

  return (
    <>
      <button className="chat-launcher" onClick={() => setOpen(!open)} aria-label="Open APIPL assistant">
        {open ? <X /> : <><MessageCircle /><span>Ask APIPL</span></>}
      </button>
      {open && <div className="chat-panel">
        <div className="chat-header">
          <div className="bot-avatar"><Bot /></div>
          <div><strong>APIPL Assistant</strong><span><i /> Online now</span></div>
          <button onClick={() => setOpen(false)}><X size={19} /></button>
        </div>
        <div className="chat-body">
          <div className="bot-message"><Sparkles size={15} /><p>{chatbot.greeting}</p></div>
          {!complete ? (
            <div className="chat-question">
              <p>{chatbot.questions[step].prompt}</p>
              <div className="chat-options">
                {chatbot.questions[step].options.map(option => (
                  <button key={option.value} onClick={() => choose(chatbot.questions[step], option)}>{option.label}<ChevronRight size={15} /></button>
                ))}
              </div>
            </div>
          ) : (
            <div className="chat-complete">
              <span><Check /></span><h4>Thanks—your enquiry is ready.</h4>
              <p>Continue on WhatsApp and our team will receive your requirements.</p>
              <a href={createWhatsAppUrl(decodeURIComponent(summary))} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Continue on WhatsApp</a>
              <button onClick={reset}>Start again</button>
            </div>
          )}
        </div>
        <div className="chat-footer">Guided by APIPL product data</div>
      </div>}
    </>
  );
}

function Contact() {
  const { company } = siteConfig;
  return (
    <section className="contact" id="contact">
      <div className="contact-intro">
        <span className="kicker light">Start a conversation</span>
        <h2>Building the next<br />rail project?</h2>
        <p>Tell us what you need. Our team is ready to discuss volumes, timelines and technical requirements.</p>
        <div className="contact-details">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}><Phone size={18} /><span>{company.phone}<small>{company.alternatePhone}</small></span></a>
          <a href={`mailto:${company.email}`}><Mail size={18} /><span>{company.email}</span></a>
          <div><MapPin size={18} /><span>Registered Office<small>{company.registeredOffice}</small></span></div>
          <div><MapPin size={18} /><span>Factory / Plant Address<small>{company.plantAddress}</small></span></div>
        </div>
      </div>
      <a href={createWhatsAppUrl("Hello APIPL, I have a requirement for RT 6901 railway inserts.")} target="_blank" rel="noreferrer" className="contact-circle">
        <span className="contact-icon"><img src="/assets/engineering-support.png" alt="" /></span>
        <span className="contact-action-copy">
          <small>Project enquiries</small>
          <strong>Talk to our team</strong>
          <em>Connect on WhatsApp</em>
        </span>
        <span className="contact-action-arrow"><ArrowRight /></span>
      </a>
      <div className="business-units">
        <span className="kicker light">Our other business units</span>
        <p>Our RDSO-approved operational plants are available at the following locations:</p>
        <div className="business-unit-grid">
          {company.otherBusinessUnits.map(unit => (
            <article key={unit.name} className="business-unit">
              <h3>{unit.name}</h3>
              <span className="business-unit-railway">({unit.railway})</span>
              <div className="business-unit-row"><MapPin size={16} /><span>{unit.address}</span></div>
              <a className="business-unit-row" href={`mailto:${unit.email}`}><Mail size={16} /><span>{unit.email}</span></a>
              <a className="business-unit-row" href={`tel:${unit.phone.replace(/\s/g, "")}`}><Phone size={16} /><span>{unit.phone}</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".section, .capability-list article, .contact").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header /><main><Hero /><CompanyProfile /><Product /><Capabilities /><ProcessSignature /><Specifications /><Contact /></main>
      <footer>
        <div className="footer-inner">
          <div className="brand footer-brand"><img src="/assets/apipl-logo.png" alt="APIPL" /></div>
          <p>{siteConfig.company.fullName}<br />Precision castings for stronger rail infrastructure.</p>
          <span>© {new Date().getFullYear()} APIPL. All rights reserved.</span>
        </div>
      </footer>
      <Chatbot />
    </>
  );
}

export default App;
