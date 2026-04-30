# Couzens Bakery & Coffee Lounge — Website

**Module:** Designing for the User Experience (4FTC1343)  
**Assignment:** Coursework Assignment 2 — Front End UI  
**Student ID:** sy25aap  

---

## Live Website

🌐 **[View Live Site on GitHub Pages](https://sy25aap.github.io/DUXA2/)**

---

## Table of Contents

- [Design](#design)
- [Development](#development)
- [Testing](#testing)
- [Attribution](#attribution)

---

## Design

### Aims and Objectives

The aim of this project is to build a responsive, accessible website for **Couzens Bakery and Coffee Lounge** — a small bakery and café with branches in Hatfield and Harlow. Currently the business has no dedicated website and relies on social media (Facebook) and third-party listings (TripAdvisor).

The website solves the following business problems:
- No central place for customers to find the menu, prices and opening hours
- No allergy information available online
- No way to order cakes or contact the business online
- Third-party sites may show outdated information

### User Stories

**James — First Time Visitor**
> "As a first-time visitor, I want to be able to view the current menu and their prices on my phone so I can decide if I would like to go to Couzens beforehand."

- James needs the website to be mobile responsive
- James needs to find opening hours easily
- James needs to see an updated menu with prices

**Sophie — Returning Visitor**
> "As a returning visitor, I want to be able to have a website that I can use with the tab key, which displays their current specials and if certain products contain nuts."

- Sophie needs full keyboard/tab navigation
- Sophie needs allergen information on menu items
- Sophie needs to see weekly specials clearly labelled

**Margret — Accessibility-Dependent Regular**
> "As an accessibility-dependent regular, I want to be able to order and message online for the cakes and help with an option for larger text, so I don't have to order in person and ask the server."

- Margret needs an online cake order form
- Margret needs a vehicle assistance request option
- Margret needs adjustable text size controls

### Revised Wireframes and Justification

Based on Assignment 1 feedback, the following changes were made to the original wireframes:

**Homepage**
- Added an accessibility toolbar at the top of every page with A− / A / A+ font size controls. This directly addresses Margret's need for larger text without relying on browser zoom.
- Added hero badges highlighting key features (star rating, vegan options, custom cakes) to immediately inform first-time visitors like James.

**Menu Page**
- Added a colour-coded allergen badge system (nuts, dairy, gluten, vegan) on every menu item. Previously wireframes only showed item names and prices. This directly addresses Sophie's frustration about not knowing which items contain nuts.
- Added filter buttons so users can quickly show only specials, vegan items, or specific categories. This addresses Sophie's need to find specials easily.

**Find Us Page**
- Split into two clear branch cards (Hatfield and Harlow) with separate opening hours tables. Original wireframes had one combined section which was confusing.
- Added embedded Google Maps and direct directions links for both branches. This addresses James's need to find the location before visiting.
- Added a contact form so customers can send messages without needing to call.

**Order Page**
- Added a dedicated cake order page with a vehicle assistance checkbox, directly addressing Margret's user story. This feature did not exist in the original wireframes.
- Added clear size and price options so customers know costs upfront.

---

## Development

### Tools and Technologies

- **HTML5** — semantic markup with ARIA roles and labels throughout
- **CSS3** — custom properties (variables), CSS Grid, Flexbox, media queries
- **JavaScript (vanilla)** — navigation toggle, menu filter, font size controls, form validation
- **Google Fonts** — Playfair Display, Lora, Raleway
- **GitHub Pages** — deployment platform
- **GitHub** — version control

### Pages Built

| Page | File | Description |
|------|------|-------------|
| Homepage | index.html | Hero, features grid, branch info |
| Menu | menu.html | Full menu with allergen badges and filter |
| Find Us | info.html | Opening hours, maps, contact form |
| Order | order.html | Cake order form with accessibility options |

### Key Design Decisions

**Colour Scheme** — Warm browns, cream and gold were chosen to reflect the bakery's warm, artisan brand identity. CSS variables make the palette consistent and easy to update.

**Typography** — Playfair Display for headings gives an elegant, bakery feel. Lora for body text is highly readable. Raleway for UI elements (buttons, labels) provides a clean contrast.

**Accessibility First** — Every page includes a skip link, ARIA labels on all interactive elements, focus-visible outlines, sufficient colour contrast, alt text descriptions, and keyboard-navigable navigation. The font size toolbar on every page directly supports users like Margret.

**Responsive Design** — CSS Grid with auto-fill and minmax() creates fluid layouts. Three breakpoints (900px, 700px, 480px) ensure the site works on all screen sizes including mobile for users like James.

### Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| Navigation collapsing on mobile | JavaScript toggle with aria-expanded attribute for accessibility |
| Menu items needing multiple filters | Added data-tags attributes to each item so JS can filter by category |
| Form submission without a backend | Used JavaScript preventDefault() with client-side validation and success message |
| Google Maps embedding | Used Google Maps Embed API with iframe and title attribute for accessibility |

### Screenshots

> Add screenshots of your live site here after deployment. Go to your deployed site, press F12, toggle device toolbar to show mobile view, take screenshots of each page.

---

## Testing

### Manual Testing

| User Story | Test | Expected Result | Pass/Fail |
|------------|------|-----------------|-----------|
| James — Mobile access | Open site on mobile screen size | All content visible, no horizontal scroll | Pass |
| James — Opening hours | Click Find Us in nav | Opening hours table visible for both branches | Pass |
| James — Menu with prices | Click Menu in nav | All items show with prices | Pass |
| Sophie — Tab navigation | Press Tab key through homepage | Every element receives focus in logical order | Pass |
| Sophie — Allergen info | Open menu page | Every item shows relevant allergen badges | Pass |
| Sophie — Specials | Click ★ Specials filter button | Only special items shown | Pass |
| Margret — Font size | Click A+ button | Text increases across the whole page | Pass |
| Margret — Order form | Fill and submit order form | Success message appears | Pass |
| Margret — Vehicle assist | Tick vehicle assistance checkbox | Checkbox selectable and labelled | Pass |
| All users — Navigation | Click all nav links | Correct pages load, no broken links | Pass |
| All users — External links | Click Facebook / TripAdvisor links | Open in new tab | Pass |
| All users — Mobile nav | Click hamburger on mobile | Menu opens and closes correctly | Pass |

### Bugs Found and Fixed

| Bug | Fix |
|-----|-----|
| Nav menu staying open after clicking a link on mobile | Added event listener to close menu on link click |
| Form submitting with empty fields | Added required attributes and JS validation with red border feedback |
| Font size controls not persisting across pages | Each page initialises at 16px — noted as a known limitation |

### Known Unresolved Issues

- Font size preference does not persist between pages as there is no localStorage. Users must re-adjust on each page. This would be resolved with a backend or localStorage in future.
- Google Maps embed coordinates are approximate as the exact embed URLs require a registered API key.

### Automated Testing

#### W3C HTML Validation
> Validate each page at https://validator.w3.org and paste screenshots here after deployment.

#### W3C CSS Validation
> Validate css/style.css at https://jigsaw.w3.org/css-validator and paste screenshot here.

#### Google Lighthouse Results
> Run Lighthouse in Chrome DevTools on your deployed site and paste results here.  
> Target scores: Performance 80+, Accessibility 90+, Best Practices 90+, SEO 80+

---

## Attribution

| Source | Used For | Location in Code |
|--------|----------|-----------------|
| Google Fonts (fonts.googleapis.com) | Playfair Display, Lora, Raleway fonts | All HTML files, `<head>` |
| Google Maps Embed API | Location maps on Find Us page | info.html, map-container iframes |
| CSS reset pattern (box-sizing border-box) | Base reset styles | css/style.css, line 1 |

**All other code is written by the student.**  
AI-assisted content was used for website text content only (menu descriptions, page copy). All HTML, CSS and JavaScript was written by the student. AI use is noted in code comments.

---

*Last updated: April 2026*
