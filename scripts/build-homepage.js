// Build script: generate index.html from template + data
const fs = require('fs');

const template = fs.readFileSync('templates/homepage.template.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data/homepage.json', 'utf-8'));

let output = template;

function replace(path, value) {
  const key = `{{${path}}}`;
  output = output.replaceAll(key, value || '');
}

// Meta (hardcoded minimal for now)
replace('meta.title', 'Megan Graham for Elkhart County Clerk');
replace('meta.description', data.hero.lead);
replace('meta.ogTitle', 'Megan Graham for Elkhart County Clerk');
replace('meta.ogDescription', data.hero.headline);
replace('meta.ogImage', 'images/hero-home.png');

// Hero
replace('hero.kicker', data.hero.kicker);
replace('hero.headlineHtml', data.hero.headline.replace(/\n/g,'<br/>'));
replace('hero.lead', data.hero.lead);
replace('hero.primaryCta.label', data.hero.primaryCta.label);
replace('hero.primaryCta.href', data.hero.primaryCta.href);
replace('hero.secondaryCta.label', data.hero.secondaryCta.label);
replace('hero.secondaryCta.href', data.hero.secondaryCta.href);
replace('hero.image', 'images/hero-home.png');

// Trust pills
replace('trustPills.0', data.trustPills[0]);
replace('trustPills.1', data.trustPills[1]);
replace('trustPills.2', data.trustPills[2]);

// Why race matters
replace('whyRaceMatters.label', data.whyRaceMatters.label);
replace('whyRaceMatters.title', data.whyRaceMatters.title);
replace('whyRaceMatters.body', data.whyRaceMatters.body);
replace('whyRaceMatters.body2', data.whyRaceMatters.body2);

// Priorities
replace('priorities.0.title', data.priorities[0].title);
replace('priorities.0.body', data.priorities[0].body);
replace('priorities.1.title', data.priorities[1].title);
replace('priorities.1.body', data.priorities[1].body);
replace('priorities.2.title', data.priorities[2].title);
replace('priorities.2.body', data.priorities[2].body);

fs.writeFileSync('index.generated.html', output);
console.log('Homepage built: index.generated.html');
