// Simple content loader for phase 1 automation

async function loadContent() {
  try {
    const res = await fetch('/data/homepage.json');
    const data = await res.json();

    // Hero content
    const headline = document.querySelector('[data-content="hero.headline"]');
    if (headline) headline.innerText = data.hero.headline;

    const lead = document.querySelector('[data-content="hero.lead"]');
    if (lead) lead.innerText = data.hero.lead;

    const primaryBtn = document.querySelector('[data-link="hero.primaryCta"]');
    if (primaryBtn) {
      primaryBtn.innerText = data.hero.primaryCta.label;
      primaryBtn.href = data.hero.primaryCta.href;
    }

    const secondaryBtn = document.querySelector('[data-link="hero.secondaryCta"]');
    if (secondaryBtn) {
      secondaryBtn.innerText = data.hero.secondaryCta.label;
      secondaryBtn.href = data.hero.secondaryCta.href;
    }

    // Trust pills
    const pills = document.querySelectorAll('[data-content="trust.pill"]');
    pills.forEach((el, i) => {
      if (data.trustPills[i]) el.innerText = data.trustPills[i];
    });

  } catch (err) {
    console.error('Content load error:', err);
  }
}

window.addEventListener('DOMContentLoaded', loadContent);
