
// Master JS for State: MT - Persona: Wetland Conservationist
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 700;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const mt_index_section_immigrate_to_mato_grosso = document.getElementById('mt-index-section-immigrate-to-mato-grosso');
  if (mt_index_section_immigrate_to_mato_grosso) {
    gsap.fromTo('#mt-index-section-immigrate-to-mato-grosso', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_form_immigrate_to_mato_grosso = document.getElementById('mt-index-form-immigrate-to-mato-grosso');
  if (mt_index_form_immigrate_to_mato_grosso) {
    gsap.from('#mt-index-form-immigrate-to-mato-grosso input, #mt-index-form-immigrate-to-mato-grosso textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_state_vibe = document.getElementById('mt-index-section-state-vibe');
  if (mt_index_section_state_vibe) {
    gsap.fromTo('#mt-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_quick_facts_snapshot = document.getElementById('mt-index-section-quick-facts-snapshot');
  if (mt_index_section_quick_facts_snapshot) {
    gsap.fromTo('#mt-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_mato_grosso_map = document.getElementById('mt-index-section-mato-grosso-map');
  if (mt_index_section_mato_grosso_map) {
    gsap.fromTo('#mt-index-section-mato-grosso-map', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_cost_of_living_mato_grosso = document.getElementById('mt-index-section-cost-of-living-mato-grosso');
  if (mt_index_section_cost_of_living_mato_grosso) {
    gsap.fromTo('#mt-index-section-cost-of-living-mato-grosso', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_government_context = document.getElementById('mt-index-section-government-context');
  if (mt_index_section_government_context) {
    gsap.fromTo('#mt-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_hero_immigration_notes = document.getElementById('mt-index-hero-immigration-notes');
  if (mt_index_hero_immigration_notes) {
    gsap.fromTo('#mt-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_common_applicant_profiles = document.getElementById('mt-index-list-common-applicant-profiles');
  if (mt_index_list_common_applicant_profiles) {
    gsap.from('#mt-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_economic_drivers = document.getElementById('mt-index-list-economic-drivers');
  if (mt_index_list_economic_drivers) {
    gsap.from('#mt-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_demographics = document.getElementById('mt-index-section-demographics');
  if (mt_index_section_demographics) {
    gsap.fromTo('#mt-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_regional_challenges = document.getElementById('mt-index-section-regional-challenges');
  if (mt_index_section_regional_challenges) {
    gsap.fromTo('#mt-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_regional_opportunities = document.getElementById('mt-index-section-regional-opportunities');
  if (mt_index_section_regional_opportunities) {
    gsap.fromTo('#mt-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_culture_daily_life = document.getElementById('mt-index-section-culture-daily-life');
  if (mt_index_section_culture_daily_life) {
    gsap.fromTo('#mt-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_local_language_expressions = document.getElementById('mt-index-list-local-language-expressions');
  if (mt_index_list_local_language_expressions) {
    gsap.from('#mt-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_food_cuisine = document.getElementById('mt-index-list-food-cuisine');
  if (mt_index_list_food_cuisine) {
    gsap.from('#mt-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_festivals_traditions = document.getElementById('mt-index-list-festivals-traditions');
  if (mt_index_list_festivals_traditions) {
    gsap.from('#mt-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_music_artistic_expression = document.getElementById('mt-index-list-music-artistic-expression');
  if (mt_index_list_music_artistic_expression) {
    gsap.from('#mt-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_sports_recreation = document.getElementById('mt-index-list-sports-recreation');
  if (mt_index_list_sports_recreation) {
    gsap.from('#mt-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_landmarks_historical_sites = document.getElementById('mt-index-list-landmarks-historical-sites');
  if (mt_index_list_landmarks_historical_sites) {
    gsap.from('#mt-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_natural_features = document.getElementById('mt-index-list-natural-features');
  if (mt_index_list_natural_features) {
    gsap.from('#mt-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_parks_protected_areas = document.getElementById('mt-index-list-parks-protected-areas');
  if (mt_index_list_parks_protected_areas) {
    gsap.from('#mt-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_museums_cultural_institutions = document.getElementById('mt-index-list-museums-cultural-institutions');
  if (mt_index_list_museums_cultural_institutions) {
    gsap.from('#mt-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_image_gallery = document.getElementById('mt-index-section-image-gallery');
  if (mt_index_section_image_gallery) {
    gsap.fromTo('#mt-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_useful_government_links = document.getElementById('mt-index-section-useful-government-links');
  if (mt_index_section_useful_government_links) {
    gsap.fromTo('#mt-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_hero_federal_police_immigration_links = document.getElementById('mt-index-hero-federal-police-immigration-links');
  if (mt_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#mt-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_external_references = document.getElementById('mt-index-section-external-references');
  if (mt_index_section_external_references) {
    gsap.fromTo('#mt-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_immigration_services_overview = document.getElementById('mt-index-list-immigration-services-overview');
  if (mt_index_list_immigration_services_overview) {
    gsap.from('#mt-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section_why_immigrate_here = document.getElementById('mt-index-section-why-immigrate-here');
  if (mt_index_section_why_immigrate_here) {
    gsap.fromTo('#mt-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_travel_services = document.getElementById('mt-index-list-travel-services');
  if (mt_index_list_travel_services) {
    gsap.from('#mt-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_list_how_the_process_works = document.getElementById('mt-index-list-how-the-process-works');
  if (mt_index_list_how_the_process_works) {
    gsap.from('#mt-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_index_section__frequently_asked_questions_about_living_in_mato_grosso_ = document.getElementById('mt-index-section--frequently-asked-questions-about-living-in-mato-grosso-');
  if (mt_index_section__frequently_asked_questions_about_living_in_mato_grosso_) {
    gsap.fromTo('#mt-index-section--frequently-asked-questions-about-living-in-mato-grosso-', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_contactcta_section_get_started_in_mato_grosso = document.getElementById('mt-contactcta-section-get-started-in-mato-grosso');
  if (mt_contactcta_section_get_started_in_mato_grosso) {
    gsap.fromTo('#mt-contactcta-section-get-started-in-mato-grosso', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('mt-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (mt_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#mt-renouncingcitizenship-form-renounce-brazilian-citizenship input, #mt-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_quick_facts = document.getElementById('mt-renouncingcitizenship-list-quick-facts');
  if (mt_renouncingcitizenship_list_quick_facts) {
    gsap.from('#mt-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('mt-renouncingcitizenship-list-common-challenges-applicants-face');
  if (mt_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#mt-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('mt-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (mt_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#mt-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_renunciation_overview = document.getElementById('mt-renouncingcitizenship-section-renunciation-overview');
  if (mt_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#mt-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_form_who_is_this_for = document.getElementById('mt-renouncingcitizenship-form-who-is-this-for');
  if (mt_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#mt-renouncingcitizenship-form-who-is-this-for input, #mt-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_required_documents = document.getElementById('mt-renouncingcitizenship-list-required-documents');
  if (mt_renouncingcitizenship_list_required_documents) {
    gsap.from('#mt-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_process = document.getElementById('mt-renouncingcitizenship-list-process');
  if (mt_renouncingcitizenship_list_process) {
    gsap.from('#mt-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_timelines_deadlines = document.getElementById('mt-renouncingcitizenship-section-timelines-deadlines');
  if (mt_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#mt-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_fees_costs = document.getElementById('mt-renouncingcitizenship-section-fees-costs');
  if (mt_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#mt-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('mt-renouncingcitizenship-list-risks-common-mistakes');
  if (mt_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#mt-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('mt-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (mt_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_mato_grosso_specific_context = document.getElementById('mt-renouncingcitizenship-section-mato-grosso-specific-context');
  if (mt_renouncingcitizenship_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-renouncingcitizenship-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_what_our_clients_say = document.getElementById('mt-renouncingcitizenship-section-what-our-clients-say');
  if (mt_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#mt-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('mt-renouncingcitizenship-section-frequently-asked-questions');
  if (mt_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#mt-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_international_support = document.getElementById('mt-renouncingcitizenship-section-international-support');
  if (mt_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#mt-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_our_credentials = document.getElementById('mt-renouncingcitizenship-list-our-credentials');
  if (mt_renouncingcitizenship_list_our_credentials) {
    gsap.from('#mt-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_list_related_services = document.getElementById('mt-renouncingcitizenship-list-related-services');
  if (mt_renouncingcitizenship_list_related_services) {
    gsap.from('#mt-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('mt-renouncingcitizenship-section-youre-in-good-hands');
  if (mt_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#mt-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_renouncingcitizenship_section_21 = document.getElementById('mt-renouncingcitizenship-section-21');
  if (mt_renouncingcitizenship_section_21) {
    gsap.fromTo('#mt-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('mt-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (mt_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#mt-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #mt-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_quick_facts = document.getElementById('mt-provisional-list-quick-facts');
  if (mt_provisional_list_quick_facts) {
    gsap.from('#mt-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_common_challenges_applicants_face = document.getElementById('mt-provisional-list-common-challenges-applicants-face');
  if (mt_provisional_list_common_challenges_applicants_face) {
    gsap.from('#mt-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_how_we_solve_these_challenges = document.getElementById('mt-provisional-list-how-we-solve-these-challenges');
  if (mt_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#mt-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_naturalisation_overview = document.getElementById('mt-provisional-section-naturalisation-overview');
  if (mt_provisional_section_naturalisation_overview) {
    gsap.fromTo('#mt-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_form_who_is_this_naturalisation_for = document.getElementById('mt-provisional-form-who-is-this-naturalisation-for');
  if (mt_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#mt-provisional-form-who-is-this-naturalisation-for input, #mt-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_required_documents = document.getElementById('mt-provisional-list-required-documents');
  if (mt_provisional_list_required_documents) {
    gsap.from('#mt-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_application_process = document.getElementById('mt-provisional-list-application-process');
  if (mt_provisional_list_application_process) {
    gsap.from('#mt-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_timelines_deadlines = document.getElementById('mt-provisional-section-timelines-deadlines');
  if (mt_provisional_section_timelines_deadlines) {
    gsap.fromTo('#mt-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_fees_costs = document.getElementById('mt-provisional-section-fees-costs');
  if (mt_provisional_section_fees_costs) {
    gsap.fromTo('#mt-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_risks_common_mistakes = document.getElementById('mt-provisional-list-risks-common-mistakes');
  if (mt_provisional_list_risks_common_mistakes) {
    gsap.from('#mt-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_diy_vs_professional_assistance = document.getElementById('mt-provisional-section-diy-vs-professional-assistance');
  if (mt_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_mato_grosso_specific_context = document.getElementById('mt-provisional-section-mato-grosso-specific-context');
  if (mt_provisional_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-provisional-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_what_our_clients_say = document.getElementById('mt-provisional-section-what-our-clients-say');
  if (mt_provisional_section_what_our_clients_say) {
    gsap.fromTo('#mt-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_frequently_asked_questions = document.getElementById('mt-provisional-section-frequently-asked-questions');
  if (mt_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#mt-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_international_support = document.getElementById('mt-provisional-section-international-support');
  if (mt_provisional_section_international_support) {
    gsap.fromTo('#mt-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_our_credentials = document.getElementById('mt-provisional-list-our-credentials');
  if (mt_provisional_list_our_credentials) {
    gsap.from('#mt-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_list_related_services = document.getElementById('mt-provisional-list-related-services');
  if (mt_provisional_list_related_services) {
    gsap.from('#mt-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_youre_in_good_hands = document.getElementById('mt-provisional-section-youre-in-good-hands');
  if (mt_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#mt-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_provisional_section_21 = document.getElementById('mt-provisional-section-21');
  if (mt_provisional_section_21) {
    gsap.fromTo('#mt-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('mt-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (mt_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#mt-special-form-special-naturalisation-in-brazil-for-particular-cases input, #mt-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_quick_facts = document.getElementById('mt-special-list-quick-facts');
  if (mt_special_list_quick_facts) {
    gsap.from('#mt-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_common_challenges_applicants_face = document.getElementById('mt-special-list-common-challenges-applicants-face');
  if (mt_special_list_common_challenges_applicants_face) {
    gsap.from('#mt-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_how_we_solve_these_challenges = document.getElementById('mt-special-list-how-we-solve-these-challenges');
  if (mt_special_list_how_we_solve_these_challenges) {
    gsap.from('#mt-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_naturalisation_overview = document.getElementById('mt-special-section-naturalisation-overview');
  if (mt_special_section_naturalisation_overview) {
    gsap.fromTo('#mt-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_form_who_is_this_naturalisation_for = document.getElementById('mt-special-form-who-is-this-naturalisation-for');
  if (mt_special_form_who_is_this_naturalisation_for) {
    gsap.from('#mt-special-form-who-is-this-naturalisation-for input, #mt-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_required_documents = document.getElementById('mt-special-list-required-documents');
  if (mt_special_list_required_documents) {
    gsap.from('#mt-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_application_process = document.getElementById('mt-special-list-application-process');
  if (mt_special_list_application_process) {
    gsap.from('#mt-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_timelines_deadlines = document.getElementById('mt-special-section-timelines-deadlines');
  if (mt_special_section_timelines_deadlines) {
    gsap.fromTo('#mt-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_fees_costs = document.getElementById('mt-special-section-fees-costs');
  if (mt_special_section_fees_costs) {
    gsap.fromTo('#mt-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_risks_common_mistakes = document.getElementById('mt-special-list-risks-common-mistakes');
  if (mt_special_list_risks_common_mistakes) {
    gsap.from('#mt-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_diy_vs_professional_assistance = document.getElementById('mt-special-section-diy-vs-professional-assistance');
  if (mt_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_mato_grosso_specific_context = document.getElementById('mt-special-section-mato-grosso-specific-context');
  if (mt_special_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-special-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_what_our_clients_say = document.getElementById('mt-special-section-what-our-clients-say');
  if (mt_special_section_what_our_clients_say) {
    gsap.fromTo('#mt-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_frequently_asked_questions = document.getElementById('mt-special-section-frequently-asked-questions');
  if (mt_special_section_frequently_asked_questions) {
    gsap.fromTo('#mt-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_international_support = document.getElementById('mt-special-section-international-support');
  if (mt_special_section_international_support) {
    gsap.fromTo('#mt-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_our_credentials = document.getElementById('mt-special-list-our-credentials');
  if (mt_special_list_our_credentials) {
    gsap.from('#mt-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_list_related_services = document.getElementById('mt-special-list-related-services');
  if (mt_special_list_related_services) {
    gsap.from('#mt-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_youre_in_good_hands = document.getElementById('mt-special-section-youre-in-good-hands');
  if (mt_special_section_youre_in_good_hands) {
    gsap.fromTo('#mt-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_special_section_21 = document.getElementById('mt-special-section-21');
  if (mt_special_section_21) {
    gsap.fromTo('#mt-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('mt-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (mt_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#mt-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #mt-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_quick_facts = document.getElementById('mt-ordinary-list-quick-facts');
  if (mt_ordinary_list_quick_facts) {
    gsap.from('#mt-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_common_challenges_applicants_face = document.getElementById('mt-ordinary-list-common-challenges-applicants-face');
  if (mt_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#mt-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_how_we_solve_these_challenges = document.getElementById('mt-ordinary-list-how-we-solve-these-challenges');
  if (mt_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#mt-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_naturalisation_overview = document.getElementById('mt-ordinary-section-naturalisation-overview');
  if (mt_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#mt-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_form_who_is_this_naturalisation_for = document.getElementById('mt-ordinary-form-who-is-this-naturalisation-for');
  if (mt_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#mt-ordinary-form-who-is-this-naturalisation-for input, #mt-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_required_documents = document.getElementById('mt-ordinary-list-required-documents');
  if (mt_ordinary_list_required_documents) {
    gsap.from('#mt-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_application_process = document.getElementById('mt-ordinary-list-application-process');
  if (mt_ordinary_list_application_process) {
    gsap.from('#mt-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_timelines_deadlines = document.getElementById('mt-ordinary-section-timelines-deadlines');
  if (mt_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#mt-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_fees_costs = document.getElementById('mt-ordinary-section-fees-costs');
  if (mt_ordinary_section_fees_costs) {
    gsap.fromTo('#mt-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_risks_common_mistakes = document.getElementById('mt-ordinary-list-risks-common-mistakes');
  if (mt_ordinary_list_risks_common_mistakes) {
    gsap.from('#mt-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_diy_vs_professional_assistance = document.getElementById('mt-ordinary-section-diy-vs-professional-assistance');
  if (mt_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_mato_grosso_specific_context = document.getElementById('mt-ordinary-section-mato-grosso-specific-context');
  if (mt_ordinary_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-ordinary-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_what_our_clients_say = document.getElementById('mt-ordinary-section-what-our-clients-say');
  if (mt_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#mt-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_frequently_asked_questions = document.getElementById('mt-ordinary-section-frequently-asked-questions');
  if (mt_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#mt-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_international_support = document.getElementById('mt-ordinary-section-international-support');
  if (mt_ordinary_section_international_support) {
    gsap.fromTo('#mt-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_our_credentials = document.getElementById('mt-ordinary-list-our-credentials');
  if (mt_ordinary_list_our_credentials) {
    gsap.from('#mt-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_list_related_services = document.getElementById('mt-ordinary-list-related-services');
  if (mt_ordinary_list_related_services) {
    gsap.from('#mt-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_youre_in_good_hands = document.getElementById('mt-ordinary-section-youre-in-good-hands');
  if (mt_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#mt-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_ordinary_section_21 = document.getElementById('mt-ordinary-section-21');
  if (mt_ordinary_section_21) {
    gsap.fromTo('#mt-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('mt-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (mt_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#mt-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #mt-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_quick_facts = document.getElementById('mt-extraordinary-list-quick-facts');
  if (mt_extraordinary_list_quick_facts) {
    gsap.from('#mt-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_common_challenges_applicants_face = document.getElementById('mt-extraordinary-list-common-challenges-applicants-face');
  if (mt_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#mt-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_how_we_solve_these_challenges = document.getElementById('mt-extraordinary-list-how-we-solve-these-challenges');
  if (mt_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#mt-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_naturalisation_overview = document.getElementById('mt-extraordinary-section-naturalisation-overview');
  if (mt_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#mt-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('mt-extraordinary-form-who-is-this-naturalisation-for');
  if (mt_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#mt-extraordinary-form-who-is-this-naturalisation-for input, #mt-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_required_documents = document.getElementById('mt-extraordinary-list-required-documents');
  if (mt_extraordinary_list_required_documents) {
    gsap.from('#mt-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_application_process = document.getElementById('mt-extraordinary-list-application-process');
  if (mt_extraordinary_list_application_process) {
    gsap.from('#mt-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_timelines_deadlines = document.getElementById('mt-extraordinary-section-timelines-deadlines');
  if (mt_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#mt-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_fees_costs = document.getElementById('mt-extraordinary-section-fees-costs');
  if (mt_extraordinary_section_fees_costs) {
    gsap.fromTo('#mt-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_risks_common_mistakes = document.getElementById('mt-extraordinary-list-risks-common-mistakes');
  if (mt_extraordinary_list_risks_common_mistakes) {
    gsap.from('#mt-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_diy_vs_professional_assistance = document.getElementById('mt-extraordinary-section-diy-vs-professional-assistance');
  if (mt_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_mato_grosso_specific_context = document.getElementById('mt-extraordinary-section-mato-grosso-specific-context');
  if (mt_extraordinary_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-extraordinary-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_what_our_clients_say = document.getElementById('mt-extraordinary-section-what-our-clients-say');
  if (mt_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#mt-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_frequently_asked_questions = document.getElementById('mt-extraordinary-section-frequently-asked-questions');
  if (mt_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#mt-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_international_support = document.getElementById('mt-extraordinary-section-international-support');
  if (mt_extraordinary_section_international_support) {
    gsap.fromTo('#mt-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_our_credentials = document.getElementById('mt-extraordinary-list-our-credentials');
  if (mt_extraordinary_list_our_credentials) {
    gsap.from('#mt-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_list_related_services = document.getElementById('mt-extraordinary-list-related-services');
  if (mt_extraordinary_list_related_services) {
    gsap.from('#mt-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_youre_in_good_hands = document.getElementById('mt-extraordinary-section-youre-in-good-hands');
  if (mt_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#mt-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extraordinary_section_21 = document.getElementById('mt-extraordinary-section-21');
  if (mt_extraordinary_section_21) {
    gsap.fromTo('#mt-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('mt-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (mt_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#mt-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #mt-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_quick_facts = document.getElementById('mt-reacquisitioncitizenship-list-quick-facts');
  if (mt_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#mt-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('mt-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (mt_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#mt-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('mt-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (mt_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#mt-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('mt-reacquisitioncitizenship-section-reacquisition-overview');
  if (mt_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('mt-reacquisitioncitizenship-form-who-is-this-for');
  if (mt_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#mt-reacquisitioncitizenship-form-who-is-this-for input, #mt-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_required_documents = document.getElementById('mt-reacquisitioncitizenship-list-required-documents');
  if (mt_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#mt-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_process = document.getElementById('mt-reacquisitioncitizenship-list-process');
  if (mt_reacquisitioncitizenship_list_process) {
    gsap.from('#mt-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('mt-reacquisitioncitizenship-section-timelines-deadlines');
  if (mt_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_fees_costs = document.getElementById('mt-reacquisitioncitizenship-section-fees-costs');
  if (mt_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('mt-reacquisitioncitizenship-list-risks-common-mistakes');
  if (mt_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#mt-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('mt-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (mt_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_mato_grosso_specific_context = document.getElementById('mt-reacquisitioncitizenship-section-mato-grosso-specific-context');
  if (mt_reacquisitioncitizenship_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('mt-reacquisitioncitizenship-section-what-our-clients-say');
  if (mt_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('mt-reacquisitioncitizenship-section-frequently-asked-questions');
  if (mt_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_international_support = document.getElementById('mt-reacquisitioncitizenship-section-international-support');
  if (mt_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_our_credentials = document.getElementById('mt-reacquisitioncitizenship-list-our-credentials');
  if (mt_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#mt-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_list_related_services = document.getElementById('mt-reacquisitioncitizenship-list-related-services');
  if (mt_reacquisitioncitizenship_list_related_services) {
    gsap.from('#mt-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('mt-reacquisitioncitizenship-section-youre-in-good-hands');
  if (mt_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_reacquisitioncitizenship_section_21 = document.getElementById('mt-reacquisitioncitizenship-section-21');
  if (mt_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#mt-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('mt-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (mt_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#mt-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #mt-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_quick_facts = document.getElementById('mt-scientificresearch-list-quick-facts');
  if (mt_scientificresearch_list_quick_facts) {
    gsap.from('#mt-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_common_challenges_applicants_face = document.getElementById('mt-scientificresearch-list-common-challenges-applicants-face');
  if (mt_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#mt-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('mt-scientificresearch-list-how-we-solve-these-challenges');
  if (mt_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#mt-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_residency_overview = document.getElementById('mt-scientificresearch-section-residency-overview');
  if (mt_scientificresearch_section_residency_overview) {
    gsap.fromTo('#mt-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_form_who_is_this_residency_for = document.getElementById('mt-scientificresearch-form-who-is-this-residency-for');
  if (mt_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#mt-scientificresearch-form-who-is-this-residency-for input, #mt-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_required_documents = document.getElementById('mt-scientificresearch-list-required-documents');
  if (mt_scientificresearch_list_required_documents) {
    gsap.from('#mt-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_application_process = document.getElementById('mt-scientificresearch-list-application-process');
  if (mt_scientificresearch_list_application_process) {
    gsap.from('#mt-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_timelines_deadlines = document.getElementById('mt-scientificresearch-section-timelines-deadlines');
  if (mt_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#mt-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_fees_costs = document.getElementById('mt-scientificresearch-section-fees-costs');
  if (mt_scientificresearch_section_fees_costs) {
    gsap.fromTo('#mt-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_risks_common_mistakes = document.getElementById('mt-scientificresearch-list-risks-common-mistakes');
  if (mt_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#mt-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('mt-scientificresearch-section-diy-vs-professional-assistance');
  if (mt_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_mato_grosso_specific_context = document.getElementById('mt-scientificresearch-section-mato-grosso-specific-context');
  if (mt_scientificresearch_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-scientificresearch-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_what_our_clients_say = document.getElementById('mt-scientificresearch-section-what-our-clients-say');
  if (mt_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#mt-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_frequently_asked_questions = document.getElementById('mt-scientificresearch-section-frequently-asked-questions');
  if (mt_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#mt-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_international_support = document.getElementById('mt-scientificresearch-section-international-support');
  if (mt_scientificresearch_section_international_support) {
    gsap.fromTo('#mt-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_our_credentials = document.getElementById('mt-scientificresearch-list-our-credentials');
  if (mt_scientificresearch_list_our_credentials) {
    gsap.from('#mt-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_list_related_services = document.getElementById('mt-scientificresearch-list-related-services');
  if (mt_scientificresearch_list_related_services) {
    gsap.from('#mt-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_youre_in_good_hands = document.getElementById('mt-scientificresearch-section-youre-in-good-hands');
  if (mt_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#mt-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_scientificresearch_section_21 = document.getElementById('mt-scientificresearch-section-21');
  if (mt_scientificresearch_section_21) {
    gsap.fromTo('#mt-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_form_study_in_brazil_with_study_residency = document.getElementById('mt-study-form-study-in-brazil-with-study-residency');
  if (mt_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#mt-study-form-study-in-brazil-with-study-residency input, #mt-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_quick_facts = document.getElementById('mt-study-list-quick-facts');
  if (mt_study_list_quick_facts) {
    gsap.from('#mt-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_common_challenges_applicants_face = document.getElementById('mt-study-list-common-challenges-applicants-face');
  if (mt_study_list_common_challenges_applicants_face) {
    gsap.from('#mt-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_how_we_solve_these_challenges = document.getElementById('mt-study-list-how-we-solve-these-challenges');
  if (mt_study_list_how_we_solve_these_challenges) {
    gsap.from('#mt-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_residency_overview = document.getElementById('mt-study-section-residency-overview');
  if (mt_study_section_residency_overview) {
    gsap.fromTo('#mt-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_form_who_is_this_residency_for = document.getElementById('mt-study-form-who-is-this-residency-for');
  if (mt_study_form_who_is_this_residency_for) {
    gsap.from('#mt-study-form-who-is-this-residency-for input, #mt-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_required_documents = document.getElementById('mt-study-list-required-documents');
  if (mt_study_list_required_documents) {
    gsap.from('#mt-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_application_process = document.getElementById('mt-study-list-application-process');
  if (mt_study_list_application_process) {
    gsap.from('#mt-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_timelines_deadlines = document.getElementById('mt-study-section-timelines-deadlines');
  if (mt_study_section_timelines_deadlines) {
    gsap.fromTo('#mt-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_fees_costs = document.getElementById('mt-study-section-fees-costs');
  if (mt_study_section_fees_costs) {
    gsap.fromTo('#mt-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_risks_common_mistakes = document.getElementById('mt-study-list-risks-common-mistakes');
  if (mt_study_list_risks_common_mistakes) {
    gsap.from('#mt-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_diy_vs_professional_assistance = document.getElementById('mt-study-section-diy-vs-professional-assistance');
  if (mt_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_mato_grosso_specific_context = document.getElementById('mt-study-section-mato-grosso-specific-context');
  if (mt_study_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-study-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_what_our_clients_say = document.getElementById('mt-study-section-what-our-clients-say');
  if (mt_study_section_what_our_clients_say) {
    gsap.fromTo('#mt-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_frequently_asked_questions = document.getElementById('mt-study-section-frequently-asked-questions');
  if (mt_study_section_frequently_asked_questions) {
    gsap.fromTo('#mt-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_international_support = document.getElementById('mt-study-section-international-support');
  if (mt_study_section_international_support) {
    gsap.fromTo('#mt-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_our_credentials = document.getElementById('mt-study-list-our-credentials');
  if (mt_study_list_our_credentials) {
    gsap.from('#mt-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_list_related_services = document.getElementById('mt-study-list-related-services');
  if (mt_study_list_related_services) {
    gsap.from('#mt-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_youre_in_good_hands = document.getElementById('mt-study-section-youre-in-good-hands');
  if (mt_study_section_youre_in_good_hands) {
    gsap.fromTo('#mt-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_study_section_21 = document.getElementById('mt-study-section-21');
  if (mt_study_section_21) {
    gsap.fromTo('#mt-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('mt-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (mt_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#mt-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #mt-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_quick_facts = document.getElementById('mt-educationalexchange-list-quick-facts');
  if (mt_educationalexchange_list_quick_facts) {
    gsap.from('#mt-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_common_challenges_applicants_face = document.getElementById('mt-educationalexchange-list-common-challenges-applicants-face');
  if (mt_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#mt-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('mt-educationalexchange-list-how-we-solve-these-challenges');
  if (mt_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#mt-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_residency_overview = document.getElementById('mt-educationalexchange-section-residency-overview');
  if (mt_educationalexchange_section_residency_overview) {
    gsap.fromTo('#mt-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_form_who_is_this_residency_for = document.getElementById('mt-educationalexchange-form-who-is-this-residency-for');
  if (mt_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#mt-educationalexchange-form-who-is-this-residency-for input, #mt-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_required_documents = document.getElementById('mt-educationalexchange-list-required-documents');
  if (mt_educationalexchange_list_required_documents) {
    gsap.from('#mt-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_application_process = document.getElementById('mt-educationalexchange-list-application-process');
  if (mt_educationalexchange_list_application_process) {
    gsap.from('#mt-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_timelines_deadlines = document.getElementById('mt-educationalexchange-section-timelines-deadlines');
  if (mt_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#mt-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_fees_costs = document.getElementById('mt-educationalexchange-section-fees-costs');
  if (mt_educationalexchange_section_fees_costs) {
    gsap.fromTo('#mt-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_risks_common_mistakes = document.getElementById('mt-educationalexchange-list-risks-common-mistakes');
  if (mt_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#mt-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('mt-educationalexchange-section-diy-vs-professional-assistance');
  if (mt_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_mato_grosso_specific_context = document.getElementById('mt-educationalexchange-section-mato-grosso-specific-context');
  if (mt_educationalexchange_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-educationalexchange-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_what_our_clients_say = document.getElementById('mt-educationalexchange-section-what-our-clients-say');
  if (mt_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#mt-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_frequently_asked_questions = document.getElementById('mt-educationalexchange-section-frequently-asked-questions');
  if (mt_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#mt-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_international_support = document.getElementById('mt-educationalexchange-section-international-support');
  if (mt_educationalexchange_section_international_support) {
    gsap.fromTo('#mt-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_our_credentials = document.getElementById('mt-educationalexchange-list-our-credentials');
  if (mt_educationalexchange_list_our_credentials) {
    gsap.from('#mt-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_list_related_services = document.getElementById('mt-educationalexchange-list-related-services');
  if (mt_educationalexchange_list_related_services) {
    gsap.from('#mt-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_youre_in_good_hands = document.getElementById('mt-educationalexchange-section-youre-in-good-hands');
  if (mt_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#mt-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_educationalexchange_section_21 = document.getElementById('mt-educationalexchange-section-21');
  if (mt_educationalexchange_section_21) {
    gsap.fromTo('#mt-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('mt-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (mt_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#mt-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #mt-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_quick_facts = document.getElementById('mt-humanitarian-list-quick-facts');
  if (mt_humanitarian_list_quick_facts) {
    gsap.from('#mt-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_common_challenges_applicants_face = document.getElementById('mt-humanitarian-list-common-challenges-applicants-face');
  if (mt_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#mt-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_how_we_solve_these_challenges = document.getElementById('mt-humanitarian-list-how-we-solve-these-challenges');
  if (mt_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#mt-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_residency_overview = document.getElementById('mt-humanitarian-section-residency-overview');
  if (mt_humanitarian_section_residency_overview) {
    gsap.fromTo('#mt-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_form_who_is_this_residency_for = document.getElementById('mt-humanitarian-form-who-is-this-residency-for');
  if (mt_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#mt-humanitarian-form-who-is-this-residency-for input, #mt-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_required_documents = document.getElementById('mt-humanitarian-list-required-documents');
  if (mt_humanitarian_list_required_documents) {
    gsap.from('#mt-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_application_process = document.getElementById('mt-humanitarian-list-application-process');
  if (mt_humanitarian_list_application_process) {
    gsap.from('#mt-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_timelines_deadlines = document.getElementById('mt-humanitarian-section-timelines-deadlines');
  if (mt_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#mt-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_fees_costs = document.getElementById('mt-humanitarian-section-fees-costs');
  if (mt_humanitarian_section_fees_costs) {
    gsap.fromTo('#mt-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_risks_common_mistakes = document.getElementById('mt-humanitarian-list-risks-common-mistakes');
  if (mt_humanitarian_list_risks_common_mistakes) {
    gsap.from('#mt-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_diy_vs_professional_assistance = document.getElementById('mt-humanitarian-section-diy-vs-professional-assistance');
  if (mt_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_mato_grosso_specific_context = document.getElementById('mt-humanitarian-section-mato-grosso-specific-context');
  if (mt_humanitarian_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-humanitarian-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_what_our_clients_say = document.getElementById('mt-humanitarian-section-what-our-clients-say');
  if (mt_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#mt-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_frequently_asked_questions = document.getElementById('mt-humanitarian-section-frequently-asked-questions');
  if (mt_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#mt-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_international_support = document.getElementById('mt-humanitarian-section-international-support');
  if (mt_humanitarian_section_international_support) {
    gsap.fromTo('#mt-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_our_credentials = document.getElementById('mt-humanitarian-list-our-credentials');
  if (mt_humanitarian_list_our_credentials) {
    gsap.from('#mt-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_list_related_services = document.getElementById('mt-humanitarian-list-related-services');
  if (mt_humanitarian_list_related_services) {
    gsap.from('#mt-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_youre_in_good_hands = document.getElementById('mt-humanitarian-section-youre-in-good-hands');
  if (mt_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#mt-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_humanitarian_section_21 = document.getElementById('mt-humanitarian-section-21');
  if (mt_humanitarian_section_21) {
    gsap.fromTo('#mt-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('mt-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (mt_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#mt-digitalnomad-form-digital-nomad-residency-in-brazil input, #mt-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_quick_facts = document.getElementById('mt-digitalnomad-list-quick-facts');
  if (mt_digitalnomad_list_quick_facts) {
    gsap.from('#mt-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_common_challenges_applicants_face = document.getElementById('mt-digitalnomad-list-common-challenges-applicants-face');
  if (mt_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#mt-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('mt-digitalnomad-list-how-we-solve-these-challenges');
  if (mt_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#mt-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_residency_overview = document.getElementById('mt-digitalnomad-section-residency-overview');
  if (mt_digitalnomad_section_residency_overview) {
    gsap.fromTo('#mt-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_form_who_is_this_residency_for = document.getElementById('mt-digitalnomad-form-who-is-this-residency-for');
  if (mt_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#mt-digitalnomad-form-who-is-this-residency-for input, #mt-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_required_documents = document.getElementById('mt-digitalnomad-list-required-documents');
  if (mt_digitalnomad_list_required_documents) {
    gsap.from('#mt-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_application_process = document.getElementById('mt-digitalnomad-list-application-process');
  if (mt_digitalnomad_list_application_process) {
    gsap.from('#mt-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_timelines_deadlines = document.getElementById('mt-digitalnomad-section-timelines-deadlines');
  if (mt_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#mt-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_fees_costs = document.getElementById('mt-digitalnomad-section-fees-costs');
  if (mt_digitalnomad_section_fees_costs) {
    gsap.fromTo('#mt-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_risks_common_mistakes = document.getElementById('mt-digitalnomad-list-risks-common-mistakes');
  if (mt_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#mt-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('mt-digitalnomad-section-diy-vs-professional-assistance');
  if (mt_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_mato_grosso_specific_context = document.getElementById('mt-digitalnomad-section-mato-grosso-specific-context');
  if (mt_digitalnomad_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-digitalnomad-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_what_our_clients_say = document.getElementById('mt-digitalnomad-section-what-our-clients-say');
  if (mt_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#mt-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_frequently_asked_questions = document.getElementById('mt-digitalnomad-section-frequently-asked-questions');
  if (mt_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#mt-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_international_support = document.getElementById('mt-digitalnomad-section-international-support');
  if (mt_digitalnomad_section_international_support) {
    gsap.fromTo('#mt-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_our_credentials = document.getElementById('mt-digitalnomad-list-our-credentials');
  if (mt_digitalnomad_list_our_credentials) {
    gsap.from('#mt-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_list_related_services = document.getElementById('mt-digitalnomad-list-related-services');
  if (mt_digitalnomad_list_related_services) {
    gsap.from('#mt-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_youre_in_good_hands = document.getElementById('mt-digitalnomad-section-youre-in-good-hands');
  if (mt_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#mt-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_digitalnomad_section_21 = document.getElementById('mt-digitalnomad-section-21');
  if (mt_digitalnomad_section_21) {
    gsap.fromTo('#mt-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('mt-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (mt_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#mt-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #mt-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_quick_facts = document.getElementById('mt-familyreunion-list-quick-facts');
  if (mt_familyreunion_list_quick_facts) {
    gsap.from('#mt-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_common_challenges_applicants_face = document.getElementById('mt-familyreunion-list-common-challenges-applicants-face');
  if (mt_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#mt-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_how_we_solve_these_challenges = document.getElementById('mt-familyreunion-list-how-we-solve-these-challenges');
  if (mt_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#mt-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_residency_overview = document.getElementById('mt-familyreunion-section-residency-overview');
  if (mt_familyreunion_section_residency_overview) {
    gsap.fromTo('#mt-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_form_who_is_this_residency_for = document.getElementById('mt-familyreunion-form-who-is-this-residency-for');
  if (mt_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#mt-familyreunion-form-who-is-this-residency-for input, #mt-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_required_documents = document.getElementById('mt-familyreunion-list-required-documents');
  if (mt_familyreunion_list_required_documents) {
    gsap.from('#mt-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_application_process = document.getElementById('mt-familyreunion-list-application-process');
  if (mt_familyreunion_list_application_process) {
    gsap.from('#mt-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_timelines_deadlines = document.getElementById('mt-familyreunion-section-timelines-deadlines');
  if (mt_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#mt-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_fees_costs = document.getElementById('mt-familyreunion-section-fees-costs');
  if (mt_familyreunion_section_fees_costs) {
    gsap.fromTo('#mt-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_risks_common_mistakes = document.getElementById('mt-familyreunion-list-risks-common-mistakes');
  if (mt_familyreunion_list_risks_common_mistakes) {
    gsap.from('#mt-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_diy_vs_professional_assistance = document.getElementById('mt-familyreunion-section-diy-vs-professional-assistance');
  if (mt_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_mato_grosso_specific_context = document.getElementById('mt-familyreunion-section-mato-grosso-specific-context');
  if (mt_familyreunion_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-familyreunion-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_what_our_clients_say = document.getElementById('mt-familyreunion-section-what-our-clients-say');
  if (mt_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#mt-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_frequently_asked_questions = document.getElementById('mt-familyreunion-section-frequently-asked-questions');
  if (mt_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#mt-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_international_support = document.getElementById('mt-familyreunion-section-international-support');
  if (mt_familyreunion_section_international_support) {
    gsap.fromTo('#mt-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_our_credentials = document.getElementById('mt-familyreunion-list-our-credentials');
  if (mt_familyreunion_list_our_credentials) {
    gsap.from('#mt-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_list_related_services = document.getElementById('mt-familyreunion-list-related-services');
  if (mt_familyreunion_list_related_services) {
    gsap.from('#mt-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_youre_in_good_hands = document.getElementById('mt-familyreunion-section-youre-in-good-hands');
  if (mt_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#mt-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_familyreunion_section_21 = document.getElementById('mt-familyreunion-section-21');
  if (mt_familyreunion_section_21) {
    gsap.fromTo('#mt-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('mt-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (mt_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#mt-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #mt-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_quick_facts = document.getElementById('mt-mercosul-list-quick-facts');
  if (mt_mercosul_list_quick_facts) {
    gsap.from('#mt-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_common_challenges_applicants_face = document.getElementById('mt-mercosul-list-common-challenges-applicants-face');
  if (mt_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#mt-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_how_we_solve_these_challenges = document.getElementById('mt-mercosul-list-how-we-solve-these-challenges');
  if (mt_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#mt-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_residency_overview = document.getElementById('mt-mercosul-section-residency-overview');
  if (mt_mercosul_section_residency_overview) {
    gsap.fromTo('#mt-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_form_who_is_this_residency_for = document.getElementById('mt-mercosul-form-who-is-this-residency-for');
  if (mt_mercosul_form_who_is_this_residency_for) {
    gsap.from('#mt-mercosul-form-who-is-this-residency-for input, #mt-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_required_documents = document.getElementById('mt-mercosul-list-required-documents');
  if (mt_mercosul_list_required_documents) {
    gsap.from('#mt-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_application_process = document.getElementById('mt-mercosul-list-application-process');
  if (mt_mercosul_list_application_process) {
    gsap.from('#mt-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_timelines_deadlines = document.getElementById('mt-mercosul-section-timelines-deadlines');
  if (mt_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#mt-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_fees_costs = document.getElementById('mt-mercosul-section-fees-costs');
  if (mt_mercosul_section_fees_costs) {
    gsap.fromTo('#mt-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_risks_common_mistakes = document.getElementById('mt-mercosul-list-risks-common-mistakes');
  if (mt_mercosul_list_risks_common_mistakes) {
    gsap.from('#mt-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_diy_vs_professional_assistance = document.getElementById('mt-mercosul-section-diy-vs-professional-assistance');
  if (mt_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_mato_grosso_specific_context = document.getElementById('mt-mercosul-section-mato-grosso-specific-context');
  if (mt_mercosul_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-mercosul-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_what_our_clients_say = document.getElementById('mt-mercosul-section-what-our-clients-say');
  if (mt_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#mt-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_frequently_asked_questions = document.getElementById('mt-mercosul-section-frequently-asked-questions');
  if (mt_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#mt-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_international_support = document.getElementById('mt-mercosul-section-international-support');
  if (mt_mercosul_section_international_support) {
    gsap.fromTo('#mt-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_our_credentials = document.getElementById('mt-mercosul-list-our-credentials');
  if (mt_mercosul_list_our_credentials) {
    gsap.from('#mt-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_list_related_services = document.getElementById('mt-mercosul-list-related-services');
  if (mt_mercosul_list_related_services) {
    gsap.from('#mt-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_youre_in_good_hands = document.getElementById('mt-mercosul-section-youre-in-good-hands');
  if (mt_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#mt-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_mercosul_section_21 = document.getElementById('mt-mercosul-section-21');
  if (mt_mercosul_section_21) {
    gsap.fromTo('#mt-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('mt-retiree-form-retire-in-brazil-with-retiree-residency');
  if (mt_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#mt-retiree-form-retire-in-brazil-with-retiree-residency input, #mt-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_quick_facts = document.getElementById('mt-retiree-list-quick-facts');
  if (mt_retiree_list_quick_facts) {
    gsap.from('#mt-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_common_challenges_applicants_face = document.getElementById('mt-retiree-list-common-challenges-applicants-face');
  if (mt_retiree_list_common_challenges_applicants_face) {
    gsap.from('#mt-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_how_we_solve_these_challenges = document.getElementById('mt-retiree-list-how-we-solve-these-challenges');
  if (mt_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#mt-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_residency_overview = document.getElementById('mt-retiree-section-residency-overview');
  if (mt_retiree_section_residency_overview) {
    gsap.fromTo('#mt-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_form_who_is_this_residency_for = document.getElementById('mt-retiree-form-who-is-this-residency-for');
  if (mt_retiree_form_who_is_this_residency_for) {
    gsap.from('#mt-retiree-form-who-is-this-residency-for input, #mt-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_required_documents = document.getElementById('mt-retiree-list-required-documents');
  if (mt_retiree_list_required_documents) {
    gsap.from('#mt-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_application_process = document.getElementById('mt-retiree-list-application-process');
  if (mt_retiree_list_application_process) {
    gsap.from('#mt-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_timelines_deadlines = document.getElementById('mt-retiree-section-timelines-deadlines');
  if (mt_retiree_section_timelines_deadlines) {
    gsap.fromTo('#mt-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_fees_costs = document.getElementById('mt-retiree-section-fees-costs');
  if (mt_retiree_section_fees_costs) {
    gsap.fromTo('#mt-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_risks_common_mistakes = document.getElementById('mt-retiree-list-risks-common-mistakes');
  if (mt_retiree_list_risks_common_mistakes) {
    gsap.from('#mt-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_diy_vs_professional_assistance = document.getElementById('mt-retiree-section-diy-vs-professional-assistance');
  if (mt_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_mato_grosso_specific_context = document.getElementById('mt-retiree-section-mato-grosso-specific-context');
  if (mt_retiree_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-retiree-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_what_our_clients_say = document.getElementById('mt-retiree-section-what-our-clients-say');
  if (mt_retiree_section_what_our_clients_say) {
    gsap.fromTo('#mt-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_frequently_asked_questions = document.getElementById('mt-retiree-section-frequently-asked-questions');
  if (mt_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#mt-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_international_support = document.getElementById('mt-retiree-section-international-support');
  if (mt_retiree_section_international_support) {
    gsap.fromTo('#mt-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_our_credentials = document.getElementById('mt-retiree-list-our-credentials');
  if (mt_retiree_list_our_credentials) {
    gsap.from('#mt-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_list_related_services = document.getElementById('mt-retiree-list-related-services');
  if (mt_retiree_list_related_services) {
    gsap.from('#mt-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_youre_in_good_hands = document.getElementById('mt-retiree-section-youre-in-good-hands');
  if (mt_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#mt-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_retiree_section_21 = document.getElementById('mt-retiree-section-21');
  if (mt_retiree_section_21) {
    gsap.fromTo('#mt-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('mt-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (mt_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#mt-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #mt-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_quick_facts = document.getElementById('mt-volunteer-list-quick-facts');
  if (mt_volunteer_list_quick_facts) {
    gsap.from('#mt-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_common_challenges_applicants_face = document.getElementById('mt-volunteer-list-common-challenges-applicants-face');
  if (mt_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#mt-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_how_we_solve_these_challenges = document.getElementById('mt-volunteer-list-how-we-solve-these-challenges');
  if (mt_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#mt-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_residency_overview = document.getElementById('mt-volunteer-section-residency-overview');
  if (mt_volunteer_section_residency_overview) {
    gsap.fromTo('#mt-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_form_who_is_this_residency_for = document.getElementById('mt-volunteer-form-who-is-this-residency-for');
  if (mt_volunteer_form_who_is_this_residency_for) {
    gsap.from('#mt-volunteer-form-who-is-this-residency-for input, #mt-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_required_documents = document.getElementById('mt-volunteer-list-required-documents');
  if (mt_volunteer_list_required_documents) {
    gsap.from('#mt-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_application_process = document.getElementById('mt-volunteer-list-application-process');
  if (mt_volunteer_list_application_process) {
    gsap.from('#mt-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_timelines_deadlines = document.getElementById('mt-volunteer-section-timelines-deadlines');
  if (mt_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#mt-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_fees_costs = document.getElementById('mt-volunteer-section-fees-costs');
  if (mt_volunteer_section_fees_costs) {
    gsap.fromTo('#mt-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_risks_common_mistakes = document.getElementById('mt-volunteer-list-risks-common-mistakes');
  if (mt_volunteer_list_risks_common_mistakes) {
    gsap.from('#mt-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_diy_vs_professional_assistance = document.getElementById('mt-volunteer-section-diy-vs-professional-assistance');
  if (mt_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_mato_grosso_specific_context = document.getElementById('mt-volunteer-section-mato-grosso-specific-context');
  if (mt_volunteer_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-volunteer-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_what_our_clients_say = document.getElementById('mt-volunteer-section-what-our-clients-say');
  if (mt_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#mt-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_frequently_asked_questions = document.getElementById('mt-volunteer-section-frequently-asked-questions');
  if (mt_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#mt-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_international_support = document.getElementById('mt-volunteer-section-international-support');
  if (mt_volunteer_section_international_support) {
    gsap.fromTo('#mt-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_our_credentials = document.getElementById('mt-volunteer-list-our-credentials');
  if (mt_volunteer_list_our_credentials) {
    gsap.from('#mt-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_list_related_services = document.getElementById('mt-volunteer-list-related-services');
  if (mt_volunteer_list_related_services) {
    gsap.from('#mt-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_youre_in_good_hands = document.getElementById('mt-volunteer-section-youre-in-good-hands');
  if (mt_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#mt-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_volunteer_section_21 = document.getElementById('mt-volunteer-section-21');
  if (mt_volunteer_section_21) {
    gsap.fromTo('#mt-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('mt-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (mt_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#mt-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #mt-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_quick_facts = document.getElementById('mt-skilledworker-list-quick-facts');
  if (mt_skilledworker_list_quick_facts) {
    gsap.from('#mt-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_common_challenges_applicants_face = document.getElementById('mt-skilledworker-list-common-challenges-applicants-face');
  if (mt_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#mt-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_how_we_solve_these_challenges = document.getElementById('mt-skilledworker-list-how-we-solve-these-challenges');
  if (mt_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#mt-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_residency_overview = document.getElementById('mt-skilledworker-section-residency-overview');
  if (mt_skilledworker_section_residency_overview) {
    gsap.fromTo('#mt-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_form_who_is_this_residency_for = document.getElementById('mt-skilledworker-form-who-is-this-residency-for');
  if (mt_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#mt-skilledworker-form-who-is-this-residency-for input, #mt-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_required_documents = document.getElementById('mt-skilledworker-list-required-documents');
  if (mt_skilledworker_list_required_documents) {
    gsap.from('#mt-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_application_process = document.getElementById('mt-skilledworker-list-application-process');
  if (mt_skilledworker_list_application_process) {
    gsap.from('#mt-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_timelines_deadlines = document.getElementById('mt-skilledworker-section-timelines-deadlines');
  if (mt_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#mt-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_fees_costs = document.getElementById('mt-skilledworker-section-fees-costs');
  if (mt_skilledworker_section_fees_costs) {
    gsap.fromTo('#mt-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_risks_common_mistakes = document.getElementById('mt-skilledworker-list-risks-common-mistakes');
  if (mt_skilledworker_list_risks_common_mistakes) {
    gsap.from('#mt-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_diy_vs_professional_assistance = document.getElementById('mt-skilledworker-section-diy-vs-professional-assistance');
  if (mt_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_mato_grosso_specific_context = document.getElementById('mt-skilledworker-section-mato-grosso-specific-context');
  if (mt_skilledworker_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-skilledworker-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_what_our_clients_say = document.getElementById('mt-skilledworker-section-what-our-clients-say');
  if (mt_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#mt-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_frequently_asked_questions = document.getElementById('mt-skilledworker-section-frequently-asked-questions');
  if (mt_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#mt-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_international_support = document.getElementById('mt-skilledworker-section-international-support');
  if (mt_skilledworker_section_international_support) {
    gsap.fromTo('#mt-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_our_credentials = document.getElementById('mt-skilledworker-list-our-credentials');
  if (mt_skilledworker_list_our_credentials) {
    gsap.from('#mt-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_list_related_services = document.getElementById('mt-skilledworker-list-related-services');
  if (mt_skilledworker_list_related_services) {
    gsap.from('#mt-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_youre_in_good_hands = document.getElementById('mt-skilledworker-section-youre-in-good-hands');
  if (mt_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#mt-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_skilledworker_section_21 = document.getElementById('mt-skilledworker-section-21');
  if (mt_skilledworker_section_21) {
    gsap.fromTo('#mt-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('mt-religious-form-religious-residency-in-brazil-for-missions');
  if (mt_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#mt-religious-form-religious-residency-in-brazil-for-missions input, #mt-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_quick_facts = document.getElementById('mt-religious-list-quick-facts');
  if (mt_religious_list_quick_facts) {
    gsap.from('#mt-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_common_challenges_applicants_face = document.getElementById('mt-religious-list-common-challenges-applicants-face');
  if (mt_religious_list_common_challenges_applicants_face) {
    gsap.from('#mt-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_how_we_solve_these_challenges = document.getElementById('mt-religious-list-how-we-solve-these-challenges');
  if (mt_religious_list_how_we_solve_these_challenges) {
    gsap.from('#mt-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_residency_overview = document.getElementById('mt-religious-section-residency-overview');
  if (mt_religious_section_residency_overview) {
    gsap.fromTo('#mt-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_form_who_is_this_residency_for = document.getElementById('mt-religious-form-who-is-this-residency-for');
  if (mt_religious_form_who_is_this_residency_for) {
    gsap.from('#mt-religious-form-who-is-this-residency-for input, #mt-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_required_documents = document.getElementById('mt-religious-list-required-documents');
  if (mt_religious_list_required_documents) {
    gsap.from('#mt-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_application_process = document.getElementById('mt-religious-list-application-process');
  if (mt_religious_list_application_process) {
    gsap.from('#mt-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_timelines_deadlines = document.getElementById('mt-religious-section-timelines-deadlines');
  if (mt_religious_section_timelines_deadlines) {
    gsap.fromTo('#mt-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_fees_costs = document.getElementById('mt-religious-section-fees-costs');
  if (mt_religious_section_fees_costs) {
    gsap.fromTo('#mt-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_risks_common_mistakes = document.getElementById('mt-religious-list-risks-common-mistakes');
  if (mt_religious_list_risks_common_mistakes) {
    gsap.from('#mt-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_diy_vs_professional_assistance = document.getElementById('mt-religious-section-diy-vs-professional-assistance');
  if (mt_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_mato_grosso_specific_context = document.getElementById('mt-religious-section-mato-grosso-specific-context');
  if (mt_religious_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-religious-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_what_our_clients_say = document.getElementById('mt-religious-section-what-our-clients-say');
  if (mt_religious_section_what_our_clients_say) {
    gsap.fromTo('#mt-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_frequently_asked_questions = document.getElementById('mt-religious-section-frequently-asked-questions');
  if (mt_religious_section_frequently_asked_questions) {
    gsap.fromTo('#mt-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_international_support = document.getElementById('mt-religious-section-international-support');
  if (mt_religious_section_international_support) {
    gsap.fromTo('#mt-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_our_credentials = document.getElementById('mt-religious-list-our-credentials');
  if (mt_religious_list_our_credentials) {
    gsap.from('#mt-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_list_related_services = document.getElementById('mt-religious-list-related-services');
  if (mt_religious_list_related_services) {
    gsap.from('#mt-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_youre_in_good_hands = document.getElementById('mt-religious-section-youre-in-good-hands');
  if (mt_religious_section_youre_in_good_hands) {
    gsap.fromTo('#mt-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_religious_section_21 = document.getElementById('mt-religious-section-21');
  if (mt_religious_section_21) {
    gsap.fromTo('#mt-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('mt-investor-form-gain-residency-in-brazil-through-investment');
  if (mt_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#mt-investor-form-gain-residency-in-brazil-through-investment input, #mt-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_quick_facts = document.getElementById('mt-investor-list-quick-facts');
  if (mt_investor_list_quick_facts) {
    gsap.from('#mt-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_common_challenges_applicants_face = document.getElementById('mt-investor-list-common-challenges-applicants-face');
  if (mt_investor_list_common_challenges_applicants_face) {
    gsap.from('#mt-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_how_we_solve_these_challenges = document.getElementById('mt-investor-list-how-we-solve-these-challenges');
  if (mt_investor_list_how_we_solve_these_challenges) {
    gsap.from('#mt-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_residency_overview = document.getElementById('mt-investor-section-residency-overview');
  if (mt_investor_section_residency_overview) {
    gsap.fromTo('#mt-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_form_who_is_this_residency_for = document.getElementById('mt-investor-form-who-is-this-residency-for');
  if (mt_investor_form_who_is_this_residency_for) {
    gsap.from('#mt-investor-form-who-is-this-residency-for input, #mt-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_required_documents = document.getElementById('mt-investor-list-required-documents');
  if (mt_investor_list_required_documents) {
    gsap.from('#mt-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_application_process = document.getElementById('mt-investor-list-application-process');
  if (mt_investor_list_application_process) {
    gsap.from('#mt-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_timelines_deadlines = document.getElementById('mt-investor-section-timelines-deadlines');
  if (mt_investor_section_timelines_deadlines) {
    gsap.fromTo('#mt-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_fees_costs = document.getElementById('mt-investor-section-fees-costs');
  if (mt_investor_section_fees_costs) {
    gsap.fromTo('#mt-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_risks_common_mistakes = document.getElementById('mt-investor-list-risks-common-mistakes');
  if (mt_investor_list_risks_common_mistakes) {
    gsap.from('#mt-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_diy_vs_professional_assistance = document.getElementById('mt-investor-section-diy-vs-professional-assistance');
  if (mt_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_mato_grosso_specific_context = document.getElementById('mt-investor-section-mato-grosso-specific-context');
  if (mt_investor_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-investor-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_what_our_clients_say = document.getElementById('mt-investor-section-what-our-clients-say');
  if (mt_investor_section_what_our_clients_say) {
    gsap.fromTo('#mt-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_frequently_asked_questions = document.getElementById('mt-investor-section-frequently-asked-questions');
  if (mt_investor_section_frequently_asked_questions) {
    gsap.fromTo('#mt-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_international_support = document.getElementById('mt-investor-section-international-support');
  if (mt_investor_section_international_support) {
    gsap.fromTo('#mt-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_our_credentials = document.getElementById('mt-investor-list-our-credentials');
  if (mt_investor_list_our_credentials) {
    gsap.from('#mt-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_list_related_services = document.getElementById('mt-investor-list-related-services');
  if (mt_investor_list_related_services) {
    gsap.from('#mt-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_youre_in_good_hands = document.getElementById('mt-investor-section-youre-in-good-hands');
  if (mt_investor_section_youre_in_good_hands) {
    gsap.fromTo('#mt-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_investor_section_21 = document.getElementById('mt-investor-section-21');
  if (mt_investor_section_21) {
    gsap.fromTo('#mt-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('mt-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (mt_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#mt-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #mt-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_quick_facts = document.getElementById('mt-healthtreatment-list-quick-facts');
  if (mt_healthtreatment_list_quick_facts) {
    gsap.from('#mt-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_common_challenges_applicants_face = document.getElementById('mt-healthtreatment-list-common-challenges-applicants-face');
  if (mt_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#mt-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('mt-healthtreatment-list-how-we-solve-these-challenges');
  if (mt_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#mt-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_residency_overview = document.getElementById('mt-healthtreatment-section-residency-overview');
  if (mt_healthtreatment_section_residency_overview) {
    gsap.fromTo('#mt-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_form_who_is_this_residency_for = document.getElementById('mt-healthtreatment-form-who-is-this-residency-for');
  if (mt_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#mt-healthtreatment-form-who-is-this-residency-for input, #mt-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_required_documents = document.getElementById('mt-healthtreatment-list-required-documents');
  if (mt_healthtreatment_list_required_documents) {
    gsap.from('#mt-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_application_process = document.getElementById('mt-healthtreatment-list-application-process');
  if (mt_healthtreatment_list_application_process) {
    gsap.from('#mt-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_timelines_deadlines = document.getElementById('mt-healthtreatment-section-timelines-deadlines');
  if (mt_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#mt-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_fees_costs = document.getElementById('mt-healthtreatment-section-fees-costs');
  if (mt_healthtreatment_section_fees_costs) {
    gsap.fromTo('#mt-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_risks_common_mistakes = document.getElementById('mt-healthtreatment-list-risks-common-mistakes');
  if (mt_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#mt-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('mt-healthtreatment-section-diy-vs-professional-assistance');
  if (mt_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_mato_grosso_specific_context = document.getElementById('mt-healthtreatment-section-mato-grosso-specific-context');
  if (mt_healthtreatment_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-healthtreatment-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_what_our_clients_say = document.getElementById('mt-healthtreatment-section-what-our-clients-say');
  if (mt_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#mt-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_frequently_asked_questions = document.getElementById('mt-healthtreatment-section-frequently-asked-questions');
  if (mt_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#mt-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_international_support = document.getElementById('mt-healthtreatment-section-international-support');
  if (mt_healthtreatment_section_international_support) {
    gsap.fromTo('#mt-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_our_credentials = document.getElementById('mt-healthtreatment-list-our-credentials');
  if (mt_healthtreatment_list_our_credentials) {
    gsap.from('#mt-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_list_related_services = document.getElementById('mt-healthtreatment-list-related-services');
  if (mt_healthtreatment_list_related_services) {
    gsap.from('#mt-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_youre_in_good_hands = document.getElementById('mt-healthtreatment-section-youre-in-good-hands');
  if (mt_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#mt-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_healthtreatment_section_21 = document.getElementById('mt-healthtreatment-section-21');
  if (mt_healthtreatment_section_21) {
    gsap.fromTo('#mt-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('mt-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (mt_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#mt-cplp-form-residency-for-cplp-citizens-in-brazil input, #mt-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_quick_facts = document.getElementById('mt-cplp-list-quick-facts');
  if (mt_cplp_list_quick_facts) {
    gsap.from('#mt-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_common_challenges_applicants_face = document.getElementById('mt-cplp-list-common-challenges-applicants-face');
  if (mt_cplp_list_common_challenges_applicants_face) {
    gsap.from('#mt-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_how_we_solve_these_challenges = document.getElementById('mt-cplp-list-how-we-solve-these-challenges');
  if (mt_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#mt-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_residency_overview = document.getElementById('mt-cplp-section-residency-overview');
  if (mt_cplp_section_residency_overview) {
    gsap.fromTo('#mt-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_form_who_is_this_residency_for = document.getElementById('mt-cplp-form-who-is-this-residency-for');
  if (mt_cplp_form_who_is_this_residency_for) {
    gsap.from('#mt-cplp-form-who-is-this-residency-for input, #mt-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_required_documents = document.getElementById('mt-cplp-list-required-documents');
  if (mt_cplp_list_required_documents) {
    gsap.from('#mt-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_application_process = document.getElementById('mt-cplp-list-application-process');
  if (mt_cplp_list_application_process) {
    gsap.from('#mt-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_timelines_deadlines = document.getElementById('mt-cplp-section-timelines-deadlines');
  if (mt_cplp_section_timelines_deadlines) {
    gsap.fromTo('#mt-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_fees_costs = document.getElementById('mt-cplp-section-fees-costs');
  if (mt_cplp_section_fees_costs) {
    gsap.fromTo('#mt-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_risks_common_mistakes = document.getElementById('mt-cplp-list-risks-common-mistakes');
  if (mt_cplp_list_risks_common_mistakes) {
    gsap.from('#mt-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_diy_vs_professional_assistance = document.getElementById('mt-cplp-section-diy-vs-professional-assistance');
  if (mt_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_mato_grosso_specific_context = document.getElementById('mt-cplp-section-mato-grosso-specific-context');
  if (mt_cplp_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-cplp-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_what_our_clients_say = document.getElementById('mt-cplp-section-what-our-clients-say');
  if (mt_cplp_section_what_our_clients_say) {
    gsap.fromTo('#mt-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_frequently_asked_questions = document.getElementById('mt-cplp-section-frequently-asked-questions');
  if (mt_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#mt-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_international_support = document.getElementById('mt-cplp-section-international-support');
  if (mt_cplp_section_international_support) {
    gsap.fromTo('#mt-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_our_credentials = document.getElementById('mt-cplp-list-our-credentials');
  if (mt_cplp_list_our_credentials) {
    gsap.from('#mt-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_list_related_services = document.getElementById('mt-cplp-list-related-services');
  if (mt_cplp_list_related_services) {
    gsap.from('#mt-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_youre_in_good_hands = document.getElementById('mt-cplp-section-youre-in-good-hands');
  if (mt_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#mt-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_cplp_section_21 = document.getElementById('mt-cplp-section-21');
  if (mt_cplp_section_21) {
    gsap.fromTo('#mt-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('mt-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (mt_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#mt-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #mt-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_quick_facts = document.getElementById('mt-youthexchange-list-quick-facts');
  if (mt_youthexchange_list_quick_facts) {
    gsap.from('#mt-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_common_challenges_applicants_face = document.getElementById('mt-youthexchange-list-common-challenges-applicants-face');
  if (mt_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#mt-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_how_we_solve_these_challenges = document.getElementById('mt-youthexchange-list-how-we-solve-these-challenges');
  if (mt_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#mt-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_residency_overview = document.getElementById('mt-youthexchange-section-residency-overview');
  if (mt_youthexchange_section_residency_overview) {
    gsap.fromTo('#mt-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_form_who_is_this_residency_for = document.getElementById('mt-youthexchange-form-who-is-this-residency-for');
  if (mt_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#mt-youthexchange-form-who-is-this-residency-for input, #mt-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_required_documents = document.getElementById('mt-youthexchange-list-required-documents');
  if (mt_youthexchange_list_required_documents) {
    gsap.from('#mt-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_application_process = document.getElementById('mt-youthexchange-list-application-process');
  if (mt_youthexchange_list_application_process) {
    gsap.from('#mt-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_timelines_deadlines = document.getElementById('mt-youthexchange-section-timelines-deadlines');
  if (mt_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#mt-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_fees_costs = document.getElementById('mt-youthexchange-section-fees-costs');
  if (mt_youthexchange_section_fees_costs) {
    gsap.fromTo('#mt-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_risks_common_mistakes = document.getElementById('mt-youthexchange-list-risks-common-mistakes');
  if (mt_youthexchange_list_risks_common_mistakes) {
    gsap.from('#mt-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_diy_vs_professional_assistance = document.getElementById('mt-youthexchange-section-diy-vs-professional-assistance');
  if (mt_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_mato_grosso_specific_context = document.getElementById('mt-youthexchange-section-mato-grosso-specific-context');
  if (mt_youthexchange_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-youthexchange-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_what_our_clients_say = document.getElementById('mt-youthexchange-section-what-our-clients-say');
  if (mt_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#mt-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_frequently_asked_questions = document.getElementById('mt-youthexchange-section-frequently-asked-questions');
  if (mt_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#mt-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_international_support = document.getElementById('mt-youthexchange-section-international-support');
  if (mt_youthexchange_section_international_support) {
    gsap.fromTo('#mt-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_our_credentials = document.getElementById('mt-youthexchange-list-our-credentials');
  if (mt_youthexchange_list_our_credentials) {
    gsap.from('#mt-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_list_related_services = document.getElementById('mt-youthexchange-list-related-services');
  if (mt_youthexchange_list_related_services) {
    gsap.from('#mt-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_youre_in_good_hands = document.getElementById('mt-youthexchange-section-youre-in-good-hands');
  if (mt_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#mt-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_youthexchange_section_21 = document.getElementById('mt-youthexchange-section-21');
  if (mt_youthexchange_section_21) {
    gsap.fromTo('#mt-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('mt-work-form-work-and-reside-in-brazil-with-work-residency');
  if (mt_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#mt-work-form-work-and-reside-in-brazil-with-work-residency input, #mt-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_quick_facts = document.getElementById('mt-work-list-quick-facts');
  if (mt_work_list_quick_facts) {
    gsap.from('#mt-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_common_challenges_applicants_face = document.getElementById('mt-work-list-common-challenges-applicants-face');
  if (mt_work_list_common_challenges_applicants_face) {
    gsap.from('#mt-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_how_we_solve_these_challenges = document.getElementById('mt-work-list-how-we-solve-these-challenges');
  if (mt_work_list_how_we_solve_these_challenges) {
    gsap.from('#mt-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_residency_overview = document.getElementById('mt-work-section-residency-overview');
  if (mt_work_section_residency_overview) {
    gsap.fromTo('#mt-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_form_who_is_this_residency_for = document.getElementById('mt-work-form-who-is-this-residency-for');
  if (mt_work_form_who_is_this_residency_for) {
    gsap.from('#mt-work-form-who-is-this-residency-for input, #mt-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_required_documents = document.getElementById('mt-work-list-required-documents');
  if (mt_work_list_required_documents) {
    gsap.from('#mt-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_application_process = document.getElementById('mt-work-list-application-process');
  if (mt_work_list_application_process) {
    gsap.from('#mt-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_timelines_deadlines = document.getElementById('mt-work-section-timelines-deadlines');
  if (mt_work_section_timelines_deadlines) {
    gsap.fromTo('#mt-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_fees_costs = document.getElementById('mt-work-section-fees-costs');
  if (mt_work_section_fees_costs) {
    gsap.fromTo('#mt-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_risks_common_mistakes = document.getElementById('mt-work-list-risks-common-mistakes');
  if (mt_work_list_risks_common_mistakes) {
    gsap.from('#mt-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_diy_vs_professional_assistance = document.getElementById('mt-work-section-diy-vs-professional-assistance');
  if (mt_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_mato_grosso_specific_context = document.getElementById('mt-work-section-mato-grosso-specific-context');
  if (mt_work_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-work-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_what_our_clients_say = document.getElementById('mt-work-section-what-our-clients-say');
  if (mt_work_section_what_our_clients_say) {
    gsap.fromTo('#mt-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_frequently_asked_questions = document.getElementById('mt-work-section-frequently-asked-questions');
  if (mt_work_section_frequently_asked_questions) {
    gsap.fromTo('#mt-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_international_support = document.getElementById('mt-work-section-international-support');
  if (mt_work_section_international_support) {
    gsap.fromTo('#mt-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_our_credentials = document.getElementById('mt-work-list-our-credentials');
  if (mt_work_list_our_credentials) {
    gsap.from('#mt-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_list_related_services = document.getElementById('mt-work-list-related-services');
  if (mt_work_list_related_services) {
    gsap.from('#mt-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_youre_in_good_hands = document.getElementById('mt-work-section-youre-in-good-hands');
  if (mt_work_section_youre_in_good_hands) {
    gsap.fromTo('#mt-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_work_section_21 = document.getElementById('mt-work-section-21');
  if (mt_work_section_21) {
    gsap.fromTo('#mt-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('mt-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (mt_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#mt-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #mt-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_quick_facts = document.getElementById('mt-startup-list-quick-facts');
  if (mt_startup_list_quick_facts) {
    gsap.from('#mt-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_common_challenges_applicants_face = document.getElementById('mt-startup-list-common-challenges-applicants-face');
  if (mt_startup_list_common_challenges_applicants_face) {
    gsap.from('#mt-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_how_we_solve_these_challenges = document.getElementById('mt-startup-list-how-we-solve-these-challenges');
  if (mt_startup_list_how_we_solve_these_challenges) {
    gsap.from('#mt-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_visa_overview = document.getElementById('mt-startup-section-visa-overview');
  if (mt_startup_section_visa_overview) {
    gsap.fromTo('#mt-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_form_who_is_this_visa_for = document.getElementById('mt-startup-form-who-is-this-visa-for');
  if (mt_startup_form_who_is_this_visa_for) {
    gsap.from('#mt-startup-form-who-is-this-visa-for input, #mt-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_required_documents = document.getElementById('mt-startup-list-required-documents');
  if (mt_startup_list_required_documents) {
    gsap.from('#mt-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_application_process = document.getElementById('mt-startup-list-application-process');
  if (mt_startup_list_application_process) {
    gsap.from('#mt-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_timelines_deadlines = document.getElementById('mt-startup-section-timelines-deadlines');
  if (mt_startup_section_timelines_deadlines) {
    gsap.fromTo('#mt-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_fees_costs = document.getElementById('mt-startup-section-fees-costs');
  if (mt_startup_section_fees_costs) {
    gsap.fromTo('#mt-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_risks_common_mistakes = document.getElementById('mt-startup-list-risks-common-mistakes');
  if (mt_startup_list_risks_common_mistakes) {
    gsap.from('#mt-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_diy_vs_professional_assistance = document.getElementById('mt-startup-section-diy-vs-professional-assistance');
  if (mt_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_mato_grosso_specific_context = document.getElementById('mt-startup-section-mato-grosso-specific-context');
  if (mt_startup_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-startup-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_what_our_clients_say = document.getElementById('mt-startup-section-what-our-clients-say');
  if (mt_startup_section_what_our_clients_say) {
    gsap.fromTo('#mt-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_frequently_asked_questions = document.getElementById('mt-startup-section-frequently-asked-questions');
  if (mt_startup_section_frequently_asked_questions) {
    gsap.fromTo('#mt-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_international_support = document.getElementById('mt-startup-section-international-support');
  if (mt_startup_section_international_support) {
    gsap.fromTo('#mt-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_our_credentials = document.getElementById('mt-startup-list-our-credentials');
  if (mt_startup_list_our_credentials) {
    gsap.from('#mt-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_list_related_services = document.getElementById('mt-startup-list-related-services');
  if (mt_startup_list_related_services) {
    gsap.from('#mt-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_youre_in_good_hands = document.getElementById('mt-startup-section-youre-in-good-hands');
  if (mt_startup_section_youre_in_good_hands) {
    gsap.fromTo('#mt-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_startup_section_21 = document.getElementById('mt-startup-section-21');
  if (mt_startup_section_21) {
    gsap.fromTo('#mt-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('mt-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (mt_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#mt-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #mt-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_quick_facts = document.getElementById('mt-family-list-quick-facts');
  if (mt_family_list_quick_facts) {
    gsap.from('#mt-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_common_challenges_applicants_face = document.getElementById('mt-family-list-common-challenges-applicants-face');
  if (mt_family_list_common_challenges_applicants_face) {
    gsap.from('#mt-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_how_we_solve_these_challenges = document.getElementById('mt-family-list-how-we-solve-these-challenges');
  if (mt_family_list_how_we_solve_these_challenges) {
    gsap.from('#mt-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_visa_overview = document.getElementById('mt-family-section-visa-overview');
  if (mt_family_section_visa_overview) {
    gsap.fromTo('#mt-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_form_who_is_this_visa_for = document.getElementById('mt-family-form-who-is-this-visa-for');
  if (mt_family_form_who_is_this_visa_for) {
    gsap.from('#mt-family-form-who-is-this-visa-for input, #mt-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_required_documents = document.getElementById('mt-family-list-required-documents');
  if (mt_family_list_required_documents) {
    gsap.from('#mt-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_application_process = document.getElementById('mt-family-list-application-process');
  if (mt_family_list_application_process) {
    gsap.from('#mt-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_timelines_deadlines = document.getElementById('mt-family-section-timelines-deadlines');
  if (mt_family_section_timelines_deadlines) {
    gsap.fromTo('#mt-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_fees_costs = document.getElementById('mt-family-section-fees-costs');
  if (mt_family_section_fees_costs) {
    gsap.fromTo('#mt-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_risks_common_mistakes = document.getElementById('mt-family-list-risks-common-mistakes');
  if (mt_family_list_risks_common_mistakes) {
    gsap.from('#mt-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_diy_vs_professional_assistance = document.getElementById('mt-family-section-diy-vs-professional-assistance');
  if (mt_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_mato_grosso_specific_context = document.getElementById('mt-family-section-mato-grosso-specific-context');
  if (mt_family_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-family-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_what_our_clients_say = document.getElementById('mt-family-section-what-our-clients-say');
  if (mt_family_section_what_our_clients_say) {
    gsap.fromTo('#mt-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_frequently_asked_questions = document.getElementById('mt-family-section-frequently-asked-questions');
  if (mt_family_section_frequently_asked_questions) {
    gsap.fromTo('#mt-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_international_support = document.getElementById('mt-family-section-international-support');
  if (mt_family_section_international_support) {
    gsap.fromTo('#mt-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_our_credentials = document.getElementById('mt-family-list-our-credentials');
  if (mt_family_list_our_credentials) {
    gsap.from('#mt-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_list_related_services = document.getElementById('mt-family-list-related-services');
  if (mt_family_list_related_services) {
    gsap.from('#mt-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_youre_in_good_hands = document.getElementById('mt-family-section-youre-in-good-hands');
  if (mt_family_section_youre_in_good_hands) {
    gsap.fromTo('#mt-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_family_section_21 = document.getElementById('mt-family-section-21');
  if (mt_family_section_21) {
    gsap.fromTo('#mt-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('mt-sports-form-compete-in-brazil-with-the-sports-visa');
  if (mt_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#mt-sports-form-compete-in-brazil-with-the-sports-visa input, #mt-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_quick_facts = document.getElementById('mt-sports-list-quick-facts');
  if (mt_sports_list_quick_facts) {
    gsap.from('#mt-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_common_challenges_applicants_face = document.getElementById('mt-sports-list-common-challenges-applicants-face');
  if (mt_sports_list_common_challenges_applicants_face) {
    gsap.from('#mt-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_how_we_solve_these_challenges = document.getElementById('mt-sports-list-how-we-solve-these-challenges');
  if (mt_sports_list_how_we_solve_these_challenges) {
    gsap.from('#mt-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_visa_overview = document.getElementById('mt-sports-section-visa-overview');
  if (mt_sports_section_visa_overview) {
    gsap.fromTo('#mt-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_form_who_is_this_visa_for = document.getElementById('mt-sports-form-who-is-this-visa-for');
  if (mt_sports_form_who_is_this_visa_for) {
    gsap.from('#mt-sports-form-who-is-this-visa-for input, #mt-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_required_documents = document.getElementById('mt-sports-list-required-documents');
  if (mt_sports_list_required_documents) {
    gsap.from('#mt-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_application_process = document.getElementById('mt-sports-list-application-process');
  if (mt_sports_list_application_process) {
    gsap.from('#mt-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_timelines_deadlines = document.getElementById('mt-sports-section-timelines-deadlines');
  if (mt_sports_section_timelines_deadlines) {
    gsap.fromTo('#mt-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_fees_costs = document.getElementById('mt-sports-section-fees-costs');
  if (mt_sports_section_fees_costs) {
    gsap.fromTo('#mt-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_risks_common_mistakes = document.getElementById('mt-sports-list-risks-common-mistakes');
  if (mt_sports_list_risks_common_mistakes) {
    gsap.from('#mt-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_diy_vs_professional_assistance = document.getElementById('mt-sports-section-diy-vs-professional-assistance');
  if (mt_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_mato_grosso_specific_context = document.getElementById('mt-sports-section-mato-grosso-specific-context');
  if (mt_sports_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-sports-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_what_our_clients_say = document.getElementById('mt-sports-section-what-our-clients-say');
  if (mt_sports_section_what_our_clients_say) {
    gsap.fromTo('#mt-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_frequently_asked_questions = document.getElementById('mt-sports-section-frequently-asked-questions');
  if (mt_sports_section_frequently_asked_questions) {
    gsap.fromTo('#mt-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_international_support = document.getElementById('mt-sports-section-international-support');
  if (mt_sports_section_international_support) {
    gsap.fromTo('#mt-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_our_credentials = document.getElementById('mt-sports-list-our-credentials');
  if (mt_sports_list_our_credentials) {
    gsap.from('#mt-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_list_related_services = document.getElementById('mt-sports-list-related-services');
  if (mt_sports_list_related_services) {
    gsap.from('#mt-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_youre_in_good_hands = document.getElementById('mt-sports-section-youre-in-good-hands');
  if (mt_sports_section_youre_in_good_hands) {
    gsap.fromTo('#mt-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_sports_section_21 = document.getElementById('mt-sports-section-21');
  if (mt_sports_section_21) {
    gsap.fromTo('#mt-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('mt-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (mt_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#mt-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #mt-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_quick_facts = document.getElementById('mt-medical-list-quick-facts');
  if (mt_medical_list_quick_facts) {
    gsap.from('#mt-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_common_challenges_applicants_face = document.getElementById('mt-medical-list-common-challenges-applicants-face');
  if (mt_medical_list_common_challenges_applicants_face) {
    gsap.from('#mt-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_how_we_solve_these_challenges = document.getElementById('mt-medical-list-how-we-solve-these-challenges');
  if (mt_medical_list_how_we_solve_these_challenges) {
    gsap.from('#mt-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_visa_overview = document.getElementById('mt-medical-section-visa-overview');
  if (mt_medical_section_visa_overview) {
    gsap.fromTo('#mt-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_form_who_is_this_visa_for = document.getElementById('mt-medical-form-who-is-this-visa-for');
  if (mt_medical_form_who_is_this_visa_for) {
    gsap.from('#mt-medical-form-who-is-this-visa-for input, #mt-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_required_documents = document.getElementById('mt-medical-list-required-documents');
  if (mt_medical_list_required_documents) {
    gsap.from('#mt-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_application_process = document.getElementById('mt-medical-list-application-process');
  if (mt_medical_list_application_process) {
    gsap.from('#mt-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_timelines_deadlines = document.getElementById('mt-medical-section-timelines-deadlines');
  if (mt_medical_section_timelines_deadlines) {
    gsap.fromTo('#mt-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_fees_costs = document.getElementById('mt-medical-section-fees-costs');
  if (mt_medical_section_fees_costs) {
    gsap.fromTo('#mt-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_risks_common_mistakes = document.getElementById('mt-medical-list-risks-common-mistakes');
  if (mt_medical_list_risks_common_mistakes) {
    gsap.from('#mt-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_diy_vs_professional_assistance = document.getElementById('mt-medical-section-diy-vs-professional-assistance');
  if (mt_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_mato_grosso_specific_context = document.getElementById('mt-medical-section-mato-grosso-specific-context');
  if (mt_medical_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-medical-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_what_our_clients_say = document.getElementById('mt-medical-section-what-our-clients-say');
  if (mt_medical_section_what_our_clients_say) {
    gsap.fromTo('#mt-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_frequently_asked_questions = document.getElementById('mt-medical-section-frequently-asked-questions');
  if (mt_medical_section_frequently_asked_questions) {
    gsap.fromTo('#mt-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_international_support = document.getElementById('mt-medical-section-international-support');
  if (mt_medical_section_international_support) {
    gsap.fromTo('#mt-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_our_credentials = document.getElementById('mt-medical-list-our-credentials');
  if (mt_medical_list_our_credentials) {
    gsap.from('#mt-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_list_related_services = document.getElementById('mt-medical-list-related-services');
  if (mt_medical_list_related_services) {
    gsap.from('#mt-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_youre_in_good_hands = document.getElementById('mt-medical-section-youre-in-good-hands');
  if (mt_medical_section_youre_in_good_hands) {
    gsap.fromTo('#mt-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_medical_section_21 = document.getElementById('mt-medical-section-21');
  if (mt_medical_section_21) {
    gsap.fromTo('#mt-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('mt-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (mt_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#mt-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #mt-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_quick_facts = document.getElementById('mt-tourist-list-quick-facts');
  if (mt_tourist_list_quick_facts) {
    gsap.from('#mt-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_common_challenges_applicants_face = document.getElementById('mt-tourist-list-common-challenges-applicants-face');
  if (mt_tourist_list_common_challenges_applicants_face) {
    gsap.from('#mt-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_how_we_solve_these_challenges = document.getElementById('mt-tourist-list-how-we-solve-these-challenges');
  if (mt_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#mt-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_visa_overview = document.getElementById('mt-tourist-section-visa-overview');
  if (mt_tourist_section_visa_overview) {
    gsap.fromTo('#mt-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_form_who_is_this_visa_for = document.getElementById('mt-tourist-form-who-is-this-visa-for');
  if (mt_tourist_form_who_is_this_visa_for) {
    gsap.from('#mt-tourist-form-who-is-this-visa-for input, #mt-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_required_documents = document.getElementById('mt-tourist-list-required-documents');
  if (mt_tourist_list_required_documents) {
    gsap.from('#mt-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_application_process = document.getElementById('mt-tourist-list-application-process');
  if (mt_tourist_list_application_process) {
    gsap.from('#mt-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_timelines_deadlines = document.getElementById('mt-tourist-section-timelines-deadlines');
  if (mt_tourist_section_timelines_deadlines) {
    gsap.fromTo('#mt-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_fees_costs = document.getElementById('mt-tourist-section-fees-costs');
  if (mt_tourist_section_fees_costs) {
    gsap.fromTo('#mt-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_risks_common_mistakes = document.getElementById('mt-tourist-list-risks-common-mistakes');
  if (mt_tourist_list_risks_common_mistakes) {
    gsap.from('#mt-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_diy_vs_professional_assistance = document.getElementById('mt-tourist-section-diy-vs-professional-assistance');
  if (mt_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_mato_grosso_specific_context = document.getElementById('mt-tourist-section-mato-grosso-specific-context');
  if (mt_tourist_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-tourist-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_what_our_clients_say = document.getElementById('mt-tourist-section-what-our-clients-say');
  if (mt_tourist_section_what_our_clients_say) {
    gsap.fromTo('#mt-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_frequently_asked_questions = document.getElementById('mt-tourist-section-frequently-asked-questions');
  if (mt_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#mt-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_international_support = document.getElementById('mt-tourist-section-international-support');
  if (mt_tourist_section_international_support) {
    gsap.fromTo('#mt-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_our_credentials = document.getElementById('mt-tourist-list-our-credentials');
  if (mt_tourist_list_our_credentials) {
    gsap.from('#mt-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_list_related_services = document.getElementById('mt-tourist-list-related-services');
  if (mt_tourist_list_related_services) {
    gsap.from('#mt-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_youre_in_good_hands = document.getElementById('mt-tourist-section-youre-in-good-hands');
  if (mt_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#mt-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_tourist_section_21 = document.getElementById('mt-tourist-section-21');
  if (mt_tourist_section_21) {
    gsap.fromTo('#mt-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('mt-transit-form-transit-through-brazil-with-the-transit-visa');
  if (mt_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#mt-transit-form-transit-through-brazil-with-the-transit-visa input, #mt-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_quick_facts = document.getElementById('mt-transit-list-quick-facts');
  if (mt_transit_list_quick_facts) {
    gsap.from('#mt-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_common_challenges_applicants_face = document.getElementById('mt-transit-list-common-challenges-applicants-face');
  if (mt_transit_list_common_challenges_applicants_face) {
    gsap.from('#mt-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_how_we_solve_these_challenges = document.getElementById('mt-transit-list-how-we-solve-these-challenges');
  if (mt_transit_list_how_we_solve_these_challenges) {
    gsap.from('#mt-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_visa_overview = document.getElementById('mt-transit-section-visa-overview');
  if (mt_transit_section_visa_overview) {
    gsap.fromTo('#mt-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_form_who_is_this_visa_for = document.getElementById('mt-transit-form-who-is-this-visa-for');
  if (mt_transit_form_who_is_this_visa_for) {
    gsap.from('#mt-transit-form-who-is-this-visa-for input, #mt-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_required_documents = document.getElementById('mt-transit-list-required-documents');
  if (mt_transit_list_required_documents) {
    gsap.from('#mt-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_application_process = document.getElementById('mt-transit-list-application-process');
  if (mt_transit_list_application_process) {
    gsap.from('#mt-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_timelines_deadlines = document.getElementById('mt-transit-section-timelines-deadlines');
  if (mt_transit_section_timelines_deadlines) {
    gsap.fromTo('#mt-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_fees_costs = document.getElementById('mt-transit-section-fees-costs');
  if (mt_transit_section_fees_costs) {
    gsap.fromTo('#mt-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_risks_common_mistakes = document.getElementById('mt-transit-list-risks-common-mistakes');
  if (mt_transit_list_risks_common_mistakes) {
    gsap.from('#mt-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_diy_vs_professional_assistance = document.getElementById('mt-transit-section-diy-vs-professional-assistance');
  if (mt_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_mato_grosso_specific_context = document.getElementById('mt-transit-section-mato-grosso-specific-context');
  if (mt_transit_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-transit-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_what_our_clients_say = document.getElementById('mt-transit-section-what-our-clients-say');
  if (mt_transit_section_what_our_clients_say) {
    gsap.fromTo('#mt-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_frequently_asked_questions = document.getElementById('mt-transit-section-frequently-asked-questions');
  if (mt_transit_section_frequently_asked_questions) {
    gsap.fromTo('#mt-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_international_support = document.getElementById('mt-transit-section-international-support');
  if (mt_transit_section_international_support) {
    gsap.fromTo('#mt-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_our_credentials = document.getElementById('mt-transit-list-our-credentials');
  if (mt_transit_list_our_credentials) {
    gsap.from('#mt-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_list_related_services = document.getElementById('mt-transit-list-related-services');
  if (mt_transit_list_related_services) {
    gsap.from('#mt-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_youre_in_good_hands = document.getElementById('mt-transit-section-youre-in-good-hands');
  if (mt_transit_section_youre_in_good_hands) {
    gsap.fromTo('#mt-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_transit_section_21 = document.getElementById('mt-transit-section-21');
  if (mt_transit_section_21) {
    gsap.fromTo('#mt-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_form_study_in_brazil_with_the_student_visa = document.getElementById('mt-student-form-study-in-brazil-with-the-student-visa');
  if (mt_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#mt-student-form-study-in-brazil-with-the-student-visa input, #mt-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_quick_facts = document.getElementById('mt-student-list-quick-facts');
  if (mt_student_list_quick_facts) {
    gsap.from('#mt-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_common_challenges_applicants_face = document.getElementById('mt-student-list-common-challenges-applicants-face');
  if (mt_student_list_common_challenges_applicants_face) {
    gsap.from('#mt-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_how_we_solve_these_challenges = document.getElementById('mt-student-list-how-we-solve-these-challenges');
  if (mt_student_list_how_we_solve_these_challenges) {
    gsap.from('#mt-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_visa_overview = document.getElementById('mt-student-section-visa-overview');
  if (mt_student_section_visa_overview) {
    gsap.fromTo('#mt-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_form_who_is_this_visa_for = document.getElementById('mt-student-form-who-is-this-visa-for');
  if (mt_student_form_who_is_this_visa_for) {
    gsap.from('#mt-student-form-who-is-this-visa-for input, #mt-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_required_documents = document.getElementById('mt-student-list-required-documents');
  if (mt_student_list_required_documents) {
    gsap.from('#mt-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_application_process = document.getElementById('mt-student-list-application-process');
  if (mt_student_list_application_process) {
    gsap.from('#mt-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_timelines_deadlines = document.getElementById('mt-student-section-timelines-deadlines');
  if (mt_student_section_timelines_deadlines) {
    gsap.fromTo('#mt-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_fees_costs = document.getElementById('mt-student-section-fees-costs');
  if (mt_student_section_fees_costs) {
    gsap.fromTo('#mt-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_risks_common_mistakes = document.getElementById('mt-student-list-risks-common-mistakes');
  if (mt_student_list_risks_common_mistakes) {
    gsap.from('#mt-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_diy_vs_professional_assistance = document.getElementById('mt-student-section-diy-vs-professional-assistance');
  if (mt_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_mato_grosso_specific_context = document.getElementById('mt-student-section-mato-grosso-specific-context');
  if (mt_student_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-student-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_what_our_clients_say = document.getElementById('mt-student-section-what-our-clients-say');
  if (mt_student_section_what_our_clients_say) {
    gsap.fromTo('#mt-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_frequently_asked_questions = document.getElementById('mt-student-section-frequently-asked-questions');
  if (mt_student_section_frequently_asked_questions) {
    gsap.fromTo('#mt-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_international_support = document.getElementById('mt-student-section-international-support');
  if (mt_student_section_international_support) {
    gsap.fromTo('#mt-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_our_credentials = document.getElementById('mt-student-list-our-credentials');
  if (mt_student_list_our_credentials) {
    gsap.from('#mt-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_list_related_services = document.getElementById('mt-student-list-related-services');
  if (mt_student_list_related_services) {
    gsap.from('#mt-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_youre_in_good_hands = document.getElementById('mt-student-section-youre-in-good-hands');
  if (mt_student_section_youre_in_good_hands) {
    gsap.fromTo('#mt-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_student_section_21 = document.getElementById('mt-student-section-21');
  if (mt_student_section_21) {
    gsap.fromTo('#mt-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('mt-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (mt_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#mt-business-form-conduct-business-in-brazil-with-the-business-visa input, #mt-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_quick_facts = document.getElementById('mt-business-list-quick-facts');
  if (mt_business_list_quick_facts) {
    gsap.from('#mt-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_common_challenges_applicants_face = document.getElementById('mt-business-list-common-challenges-applicants-face');
  if (mt_business_list_common_challenges_applicants_face) {
    gsap.from('#mt-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_how_we_solve_these_challenges = document.getElementById('mt-business-list-how-we-solve-these-challenges');
  if (mt_business_list_how_we_solve_these_challenges) {
    gsap.from('#mt-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_visa_overview = document.getElementById('mt-business-section-visa-overview');
  if (mt_business_section_visa_overview) {
    gsap.fromTo('#mt-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_form_who_is_this_visa_for = document.getElementById('mt-business-form-who-is-this-visa-for');
  if (mt_business_form_who_is_this_visa_for) {
    gsap.from('#mt-business-form-who-is-this-visa-for input, #mt-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_required_documents = document.getElementById('mt-business-list-required-documents');
  if (mt_business_list_required_documents) {
    gsap.from('#mt-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_application_process = document.getElementById('mt-business-list-application-process');
  if (mt_business_list_application_process) {
    gsap.from('#mt-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_timelines_deadlines = document.getElementById('mt-business-section-timelines-deadlines');
  if (mt_business_section_timelines_deadlines) {
    gsap.fromTo('#mt-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_fees_costs = document.getElementById('mt-business-section-fees-costs');
  if (mt_business_section_fees_costs) {
    gsap.fromTo('#mt-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_risks_common_mistakes = document.getElementById('mt-business-list-risks-common-mistakes');
  if (mt_business_list_risks_common_mistakes) {
    gsap.from('#mt-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_diy_vs_professional_assistance = document.getElementById('mt-business-section-diy-vs-professional-assistance');
  if (mt_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_mato_grosso_specific_context = document.getElementById('mt-business-section-mato-grosso-specific-context');
  if (mt_business_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-business-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_what_our_clients_say = document.getElementById('mt-business-section-what-our-clients-say');
  if (mt_business_section_what_our_clients_say) {
    gsap.fromTo('#mt-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_frequently_asked_questions = document.getElementById('mt-business-section-frequently-asked-questions');
  if (mt_business_section_frequently_asked_questions) {
    gsap.fromTo('#mt-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_international_support = document.getElementById('mt-business-section-international-support');
  if (mt_business_section_international_support) {
    gsap.fromTo('#mt-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_our_credentials = document.getElementById('mt-business-list-our-credentials');
  if (mt_business_list_our_credentials) {
    gsap.from('#mt-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_list_related_services = document.getElementById('mt-business-list-related-services');
  if (mt_business_list_related_services) {
    gsap.from('#mt-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_youre_in_good_hands = document.getElementById('mt-business-section-youre-in-good-hands');
  if (mt_business_section_youre_in_good_hands) {
    gsap.fromTo('#mt-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_business_section_21 = document.getElementById('mt-business-section-21');
  if (mt_business_section_21) {
    gsap.fromTo('#mt-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('mt-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (mt_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#mt-research-form-conduct-research-in-brazil-with-the-research-visa input, #mt-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_quick_facts = document.getElementById('mt-research-list-quick-facts');
  if (mt_research_list_quick_facts) {
    gsap.from('#mt-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_common_challenges_applicants_face = document.getElementById('mt-research-list-common-challenges-applicants-face');
  if (mt_research_list_common_challenges_applicants_face) {
    gsap.from('#mt-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_how_we_solve_these_challenges = document.getElementById('mt-research-list-how-we-solve-these-challenges');
  if (mt_research_list_how_we_solve_these_challenges) {
    gsap.from('#mt-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_visa_overview = document.getElementById('mt-research-section-visa-overview');
  if (mt_research_section_visa_overview) {
    gsap.fromTo('#mt-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_form_who_is_this_visa_for = document.getElementById('mt-research-form-who-is-this-visa-for');
  if (mt_research_form_who_is_this_visa_for) {
    gsap.from('#mt-research-form-who-is-this-visa-for input, #mt-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_required_documents = document.getElementById('mt-research-list-required-documents');
  if (mt_research_list_required_documents) {
    gsap.from('#mt-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_application_process = document.getElementById('mt-research-list-application-process');
  if (mt_research_list_application_process) {
    gsap.from('#mt-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_timelines_deadlines = document.getElementById('mt-research-section-timelines-deadlines');
  if (mt_research_section_timelines_deadlines) {
    gsap.fromTo('#mt-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_fees_costs = document.getElementById('mt-research-section-fees-costs');
  if (mt_research_section_fees_costs) {
    gsap.fromTo('#mt-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_risks_common_mistakes = document.getElementById('mt-research-list-risks-common-mistakes');
  if (mt_research_list_risks_common_mistakes) {
    gsap.from('#mt-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_diy_vs_professional_assistance = document.getElementById('mt-research-section-diy-vs-professional-assistance');
  if (mt_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_mato_grosso_specific_context = document.getElementById('mt-research-section-mato-grosso-specific-context');
  if (mt_research_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-research-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_what_our_clients_say = document.getElementById('mt-research-section-what-our-clients-say');
  if (mt_research_section_what_our_clients_say) {
    gsap.fromTo('#mt-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_frequently_asked_questions = document.getElementById('mt-research-section-frequently-asked-questions');
  if (mt_research_section_frequently_asked_questions) {
    gsap.fromTo('#mt-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_international_support = document.getElementById('mt-research-section-international-support');
  if (mt_research_section_international_support) {
    gsap.fromTo('#mt-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_our_credentials = document.getElementById('mt-research-list-our-credentials');
  if (mt_research_list_our_credentials) {
    gsap.from('#mt-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_list_related_services = document.getElementById('mt-research-list-related-services');
  if (mt_research_list_related_services) {
    gsap.from('#mt-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_youre_in_good_hands = document.getElementById('mt-research-section-youre-in-good-hands');
  if (mt_research_section_youre_in_good_hands) {
    gsap.fromTo('#mt-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_research_section_21 = document.getElementById('mt-research-section-21');
  if (mt_research_section_21) {
    gsap.fromTo('#mt-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('mt-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (mt_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#mt-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #mt-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_quick_facts = document.getElementById('mt-diplomatic-list-quick-facts');
  if (mt_diplomatic_list_quick_facts) {
    gsap.from('#mt-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_common_challenges_applicants_face = document.getElementById('mt-diplomatic-list-common-challenges-applicants-face');
  if (mt_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#mt-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_how_we_solve_these_challenges = document.getElementById('mt-diplomatic-list-how-we-solve-these-challenges');
  if (mt_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#mt-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_visa_overview = document.getElementById('mt-diplomatic-section-visa-overview');
  if (mt_diplomatic_section_visa_overview) {
    gsap.fromTo('#mt-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_form_who_is_this_visa_for = document.getElementById('mt-diplomatic-form-who-is-this-visa-for');
  if (mt_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#mt-diplomatic-form-who-is-this-visa-for input, #mt-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_required_documents = document.getElementById('mt-diplomatic-list-required-documents');
  if (mt_diplomatic_list_required_documents) {
    gsap.from('#mt-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_application_process = document.getElementById('mt-diplomatic-list-application-process');
  if (mt_diplomatic_list_application_process) {
    gsap.from('#mt-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_timelines_deadlines = document.getElementById('mt-diplomatic-section-timelines-deadlines');
  if (mt_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#mt-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_fees_costs = document.getElementById('mt-diplomatic-section-fees-costs');
  if (mt_diplomatic_section_fees_costs) {
    gsap.fromTo('#mt-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_risks_common_mistakes = document.getElementById('mt-diplomatic-list-risks-common-mistakes');
  if (mt_diplomatic_list_risks_common_mistakes) {
    gsap.from('#mt-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_diy_vs_professional_assistance = document.getElementById('mt-diplomatic-section-diy-vs-professional-assistance');
  if (mt_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_mato_grosso_specific_context = document.getElementById('mt-diplomatic-section-mato-grosso-specific-context');
  if (mt_diplomatic_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-diplomatic-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_what_our_clients_say = document.getElementById('mt-diplomatic-section-what-our-clients-say');
  if (mt_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#mt-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_frequently_asked_questions = document.getElementById('mt-diplomatic-section-frequently-asked-questions');
  if (mt_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#mt-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_international_support = document.getElementById('mt-diplomatic-section-international-support');
  if (mt_diplomatic_section_international_support) {
    gsap.fromTo('#mt-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_our_credentials = document.getElementById('mt-diplomatic-list-our-credentials');
  if (mt_diplomatic_list_our_credentials) {
    gsap.from('#mt-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_list_related_services = document.getElementById('mt-diplomatic-list-related-services');
  if (mt_diplomatic_list_related_services) {
    gsap.from('#mt-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_youre_in_good_hands = document.getElementById('mt-diplomatic-section-youre-in-good-hands');
  if (mt_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#mt-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_diplomatic_section_21 = document.getElementById('mt-diplomatic-section-21');
  if (mt_diplomatic_section_21) {
    gsap.fromTo('#mt-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('mt-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (mt_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#mt-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #mt-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_quick_facts = document.getElementById('mt-journalist-list-quick-facts');
  if (mt_journalist_list_quick_facts) {
    gsap.from('#mt-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_common_challenges_applicants_face = document.getElementById('mt-journalist-list-common-challenges-applicants-face');
  if (mt_journalist_list_common_challenges_applicants_face) {
    gsap.from('#mt-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_how_we_solve_these_challenges = document.getElementById('mt-journalist-list-how-we-solve-these-challenges');
  if (mt_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#mt-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_visa_overview = document.getElementById('mt-journalist-section-visa-overview');
  if (mt_journalist_section_visa_overview) {
    gsap.fromTo('#mt-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_form_who_is_this_visa_for = document.getElementById('mt-journalist-form-who-is-this-visa-for');
  if (mt_journalist_form_who_is_this_visa_for) {
    gsap.from('#mt-journalist-form-who-is-this-visa-for input, #mt-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_required_documents = document.getElementById('mt-journalist-list-required-documents');
  if (mt_journalist_list_required_documents) {
    gsap.from('#mt-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_application_process = document.getElementById('mt-journalist-list-application-process');
  if (mt_journalist_list_application_process) {
    gsap.from('#mt-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_timelines_deadlines = document.getElementById('mt-journalist-section-timelines-deadlines');
  if (mt_journalist_section_timelines_deadlines) {
    gsap.fromTo('#mt-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_fees_costs = document.getElementById('mt-journalist-section-fees-costs');
  if (mt_journalist_section_fees_costs) {
    gsap.fromTo('#mt-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_risks_common_mistakes = document.getElementById('mt-journalist-list-risks-common-mistakes');
  if (mt_journalist_list_risks_common_mistakes) {
    gsap.from('#mt-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_diy_vs_professional_assistance = document.getElementById('mt-journalist-section-diy-vs-professional-assistance');
  if (mt_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_mato_grosso_specific_context = document.getElementById('mt-journalist-section-mato-grosso-specific-context');
  if (mt_journalist_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-journalist-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_what_our_clients_say = document.getElementById('mt-journalist-section-what-our-clients-say');
  if (mt_journalist_section_what_our_clients_say) {
    gsap.fromTo('#mt-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_frequently_asked_questions = document.getElementById('mt-journalist-section-frequently-asked-questions');
  if (mt_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#mt-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_international_support = document.getElementById('mt-journalist-section-international-support');
  if (mt_journalist_section_international_support) {
    gsap.fromTo('#mt-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_our_credentials = document.getElementById('mt-journalist-list-our-credentials');
  if (mt_journalist_list_our_credentials) {
    gsap.from('#mt-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_list_related_services = document.getElementById('mt-journalist-list-related-services');
  if (mt_journalist_list_related_services) {
    gsap.from('#mt-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_youre_in_good_hands = document.getElementById('mt-journalist-section-youre-in-good-hands');
  if (mt_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#mt-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_journalist_section_21 = document.getElementById('mt-journalist-section-21');
  if (mt_journalist_section_21) {
    gsap.fromTo('#mt-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('mt-fines-form-resolve-immigration-fines-in-brazil');
  if (mt_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#mt-fines-form-resolve-immigration-fines-in-brazil input, #mt-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_quick_facts = document.getElementById('mt-fines-list-quick-facts');
  if (mt_fines_list_quick_facts) {
    gsap.from('#mt-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_common_challenges_applicants_face = document.getElementById('mt-fines-list-common-challenges-applicants-face');
  if (mt_fines_list_common_challenges_applicants_face) {
    gsap.from('#mt-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_how_we_solve_these_challenges = document.getElementById('mt-fines-list-how-we-solve-these-challenges');
  if (mt_fines_list_how_we_solve_these_challenges) {
    gsap.from('#mt-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_service_overview = document.getElementById('mt-fines-section-service-overview');
  if (mt_fines_section_service_overview) {
    gsap.fromTo('#mt-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_form_who_is_this_service_for = document.getElementById('mt-fines-form-who-is-this-service-for');
  if (mt_fines_form_who_is_this_service_for) {
    gsap.from('#mt-fines-form-who-is-this-service-for input, #mt-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_required_documents = document.getElementById('mt-fines-list-required-documents');
  if (mt_fines_list_required_documents) {
    gsap.from('#mt-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_process = document.getElementById('mt-fines-list-process');
  if (mt_fines_list_process) {
    gsap.from('#mt-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_timelines_deadlines = document.getElementById('mt-fines-section-timelines-deadlines');
  if (mt_fines_section_timelines_deadlines) {
    gsap.fromTo('#mt-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_fees_costs = document.getElementById('mt-fines-section-fees-costs');
  if (mt_fines_section_fees_costs) {
    gsap.fromTo('#mt-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_risks_common_mistakes = document.getElementById('mt-fines-list-risks-common-mistakes');
  if (mt_fines_list_risks_common_mistakes) {
    gsap.from('#mt-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_diy_vs_professional_assistance = document.getElementById('mt-fines-section-diy-vs-professional-assistance');
  if (mt_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_mato_grosso_specific_context = document.getElementById('mt-fines-section-mato-grosso-specific-context');
  if (mt_fines_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-fines-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_what_our_clients_say = document.getElementById('mt-fines-section-what-our-clients-say');
  if (mt_fines_section_what_our_clients_say) {
    gsap.fromTo('#mt-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_frequently_asked_questions = document.getElementById('mt-fines-section-frequently-asked-questions');
  if (mt_fines_section_frequently_asked_questions) {
    gsap.fromTo('#mt-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_international_support = document.getElementById('mt-fines-section-international-support');
  if (mt_fines_section_international_support) {
    gsap.fromTo('#mt-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_our_credentials = document.getElementById('mt-fines-list-our-credentials');
  if (mt_fines_list_our_credentials) {
    gsap.from('#mt-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_list_related_services = document.getElementById('mt-fines-list-related-services');
  if (mt_fines_list_related_services) {
    gsap.from('#mt-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_youre_in_good_hands = document.getElementById('mt-fines-section-youre-in-good-hands');
  if (mt_fines_section_youre_in_good_hands) {
    gsap.fromTo('#mt-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_fines_section_21 = document.getElementById('mt-fines-section-21');
  if (mt_fines_section_21) {
    gsap.fromTo('#mt-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_form_deportation_assistance_in_brazil = document.getElementById('mt-deportation-form-deportation-assistance-in-brazil');
  if (mt_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#mt-deportation-form-deportation-assistance-in-brazil input, #mt-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_quick_facts = document.getElementById('mt-deportation-list-quick-facts');
  if (mt_deportation_list_quick_facts) {
    gsap.from('#mt-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_common_challenges_applicants_face = document.getElementById('mt-deportation-list-common-challenges-applicants-face');
  if (mt_deportation_list_common_challenges_applicants_face) {
    gsap.from('#mt-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_how_we_solve_these_challenges = document.getElementById('mt-deportation-list-how-we-solve-these-challenges');
  if (mt_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#mt-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_service_overview = document.getElementById('mt-deportation-section-service-overview');
  if (mt_deportation_section_service_overview) {
    gsap.fromTo('#mt-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_form_who_is_this_service_for = document.getElementById('mt-deportation-form-who-is-this-service-for');
  if (mt_deportation_form_who_is_this_service_for) {
    gsap.from('#mt-deportation-form-who-is-this-service-for input, #mt-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_required_documents = document.getElementById('mt-deportation-list-required-documents');
  if (mt_deportation_list_required_documents) {
    gsap.from('#mt-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_process = document.getElementById('mt-deportation-list-process');
  if (mt_deportation_list_process) {
    gsap.from('#mt-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_timelines_deadlines = document.getElementById('mt-deportation-section-timelines-deadlines');
  if (mt_deportation_section_timelines_deadlines) {
    gsap.fromTo('#mt-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_fees_costs = document.getElementById('mt-deportation-section-fees-costs');
  if (mt_deportation_section_fees_costs) {
    gsap.fromTo('#mt-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_risks_common_mistakes = document.getElementById('mt-deportation-list-risks-common-mistakes');
  if (mt_deportation_list_risks_common_mistakes) {
    gsap.from('#mt-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_diy_vs_professional_assistance = document.getElementById('mt-deportation-section-diy-vs-professional-assistance');
  if (mt_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_mato_grosso_specific_context = document.getElementById('mt-deportation-section-mato-grosso-specific-context');
  if (mt_deportation_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-deportation-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_what_our_clients_say = document.getElementById('mt-deportation-section-what-our-clients-say');
  if (mt_deportation_section_what_our_clients_say) {
    gsap.fromTo('#mt-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_frequently_asked_questions = document.getElementById('mt-deportation-section-frequently-asked-questions');
  if (mt_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#mt-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_international_support = document.getElementById('mt-deportation-section-international-support');
  if (mt_deportation_section_international_support) {
    gsap.fromTo('#mt-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_our_credentials = document.getElementById('mt-deportation-list-our-credentials');
  if (mt_deportation_list_our_credentials) {
    gsap.from('#mt-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_list_related_services = document.getElementById('mt-deportation-list-related-services');
  if (mt_deportation_list_related_services) {
    gsap.from('#mt-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_youre_in_good_hands = document.getElementById('mt-deportation-section-youre-in-good-hands');
  if (mt_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#mt-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_deportation_section_21 = document.getElementById('mt-deportation-section-21');
  if (mt_deportation_section_21) {
    gsap.fromTo('#mt-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('mt-translation-form-sworn-document-translation-services-in-brazil');
  if (mt_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#mt-translation-form-sworn-document-translation-services-in-brazil input, #mt-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_quick_facts = document.getElementById('mt-translation-list-quick-facts');
  if (mt_translation_list_quick_facts) {
    gsap.from('#mt-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_common_challenges_applicants_face = document.getElementById('mt-translation-list-common-challenges-applicants-face');
  if (mt_translation_list_common_challenges_applicants_face) {
    gsap.from('#mt-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_how_we_solve_these_challenges = document.getElementById('mt-translation-list-how-we-solve-these-challenges');
  if (mt_translation_list_how_we_solve_these_challenges) {
    gsap.from('#mt-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_service_overview = document.getElementById('mt-translation-section-service-overview');
  if (mt_translation_section_service_overview) {
    gsap.fromTo('#mt-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_form_who_is_this_service_for = document.getElementById('mt-translation-form-who-is-this-service-for');
  if (mt_translation_form_who_is_this_service_for) {
    gsap.from('#mt-translation-form-who-is-this-service-for input, #mt-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_required_documents = document.getElementById('mt-translation-list-required-documents');
  if (mt_translation_list_required_documents) {
    gsap.from('#mt-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_process = document.getElementById('mt-translation-list-process');
  if (mt_translation_list_process) {
    gsap.from('#mt-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_timelines_deadlines = document.getElementById('mt-translation-section-timelines-deadlines');
  if (mt_translation_section_timelines_deadlines) {
    gsap.fromTo('#mt-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_fees_costs = document.getElementById('mt-translation-section-fees-costs');
  if (mt_translation_section_fees_costs) {
    gsap.fromTo('#mt-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_risks_common_mistakes = document.getElementById('mt-translation-list-risks-common-mistakes');
  if (mt_translation_list_risks_common_mistakes) {
    gsap.from('#mt-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_diy_vs_professional_assistance = document.getElementById('mt-translation-section-diy-vs-professional-assistance');
  if (mt_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_mato_grosso_specific_context = document.getElementById('mt-translation-section-mato-grosso-specific-context');
  if (mt_translation_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-translation-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_what_our_clients_say = document.getElementById('mt-translation-section-what-our-clients-say');
  if (mt_translation_section_what_our_clients_say) {
    gsap.fromTo('#mt-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_frequently_asked_questions = document.getElementById('mt-translation-section-frequently-asked-questions');
  if (mt_translation_section_frequently_asked_questions) {
    gsap.fromTo('#mt-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_international_support = document.getElementById('mt-translation-section-international-support');
  if (mt_translation_section_international_support) {
    gsap.fromTo('#mt-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_our_credentials = document.getElementById('mt-translation-list-our-credentials');
  if (mt_translation_list_our_credentials) {
    gsap.from('#mt-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_list_related_services = document.getElementById('mt-translation-list-related-services');
  if (mt_translation_list_related_services) {
    gsap.from('#mt-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_youre_in_good_hands = document.getElementById('mt-translation-section-youre-in-good-hands');
  if (mt_translation_section_youre_in_good_hands) {
    gsap.fromTo('#mt-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_translation_section_21 = document.getElementById('mt-translation-section-21');
  if (mt_translation_section_21) {
    gsap.fromTo('#mt-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('mt-expulsion-form-expulsion-assistance-in-brazil');
  if (mt_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#mt-expulsion-form-expulsion-assistance-in-brazil input, #mt-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_quick_facts = document.getElementById('mt-expulsion-list-quick-facts');
  if (mt_expulsion_list_quick_facts) {
    gsap.from('#mt-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_common_challenges_applicants_face = document.getElementById('mt-expulsion-list-common-challenges-applicants-face');
  if (mt_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#mt-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_how_we_solve_these_challenges = document.getElementById('mt-expulsion-list-how-we-solve-these-challenges');
  if (mt_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#mt-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_service_overview = document.getElementById('mt-expulsion-section-service-overview');
  if (mt_expulsion_section_service_overview) {
    gsap.fromTo('#mt-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_form_who_is_this_service_for = document.getElementById('mt-expulsion-form-who-is-this-service-for');
  if (mt_expulsion_form_who_is_this_service_for) {
    gsap.from('#mt-expulsion-form-who-is-this-service-for input, #mt-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_required_documents = document.getElementById('mt-expulsion-list-required-documents');
  if (mt_expulsion_list_required_documents) {
    gsap.from('#mt-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_process = document.getElementById('mt-expulsion-list-process');
  if (mt_expulsion_list_process) {
    gsap.from('#mt-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_timelines_deadlines = document.getElementById('mt-expulsion-section-timelines-deadlines');
  if (mt_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#mt-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_fees_costs = document.getElementById('mt-expulsion-section-fees-costs');
  if (mt_expulsion_section_fees_costs) {
    gsap.fromTo('#mt-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_risks_common_mistakes = document.getElementById('mt-expulsion-list-risks-common-mistakes');
  if (mt_expulsion_list_risks_common_mistakes) {
    gsap.from('#mt-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_diy_vs_professional_assistance = document.getElementById('mt-expulsion-section-diy-vs-professional-assistance');
  if (mt_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_mato_grosso_specific_context = document.getElementById('mt-expulsion-section-mato-grosso-specific-context');
  if (mt_expulsion_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-expulsion-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_what_our_clients_say = document.getElementById('mt-expulsion-section-what-our-clients-say');
  if (mt_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#mt-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_frequently_asked_questions = document.getElementById('mt-expulsion-section-frequently-asked-questions');
  if (mt_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#mt-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_international_support = document.getElementById('mt-expulsion-section-international-support');
  if (mt_expulsion_section_international_support) {
    gsap.fromTo('#mt-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_our_credentials = document.getElementById('mt-expulsion-list-our-credentials');
  if (mt_expulsion_list_our_credentials) {
    gsap.from('#mt-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_list_related_services = document.getElementById('mt-expulsion-list-related-services');
  if (mt_expulsion_list_related_services) {
    gsap.from('#mt-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_youre_in_good_hands = document.getElementById('mt-expulsion-section-youre-in-good-hands');
  if (mt_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#mt-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_expulsion_section_21 = document.getElementById('mt-expulsion-section-21');
  if (mt_expulsion_section_21) {
    gsap.fromTo('#mt-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('mt-appeals-form-appeal-immigration-denials-in-brazil');
  if (mt_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#mt-appeals-form-appeal-immigration-denials-in-brazil input, #mt-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_quick_facts = document.getElementById('mt-appeals-list-quick-facts');
  if (mt_appeals_list_quick_facts) {
    gsap.from('#mt-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_common_challenges_applicants_face = document.getElementById('mt-appeals-list-common-challenges-applicants-face');
  if (mt_appeals_list_common_challenges_applicants_face) {
    gsap.from('#mt-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_how_we_solve_these_challenges = document.getElementById('mt-appeals-list-how-we-solve-these-challenges');
  if (mt_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#mt-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_service_overview = document.getElementById('mt-appeals-section-service-overview');
  if (mt_appeals_section_service_overview) {
    gsap.fromTo('#mt-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_form_who_is_this_service_for = document.getElementById('mt-appeals-form-who-is-this-service-for');
  if (mt_appeals_form_who_is_this_service_for) {
    gsap.from('#mt-appeals-form-who-is-this-service-for input, #mt-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_required_documents = document.getElementById('mt-appeals-list-required-documents');
  if (mt_appeals_list_required_documents) {
    gsap.from('#mt-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_appeal_process = document.getElementById('mt-appeals-list-appeal-process');
  if (mt_appeals_list_appeal_process) {
    gsap.from('#mt-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_timelines_deadlines = document.getElementById('mt-appeals-section-timelines-deadlines');
  if (mt_appeals_section_timelines_deadlines) {
    gsap.fromTo('#mt-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_fees_costs = document.getElementById('mt-appeals-section-fees-costs');
  if (mt_appeals_section_fees_costs) {
    gsap.fromTo('#mt-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_risks_common_mistakes = document.getElementById('mt-appeals-list-risks-common-mistakes');
  if (mt_appeals_list_risks_common_mistakes) {
    gsap.from('#mt-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_diy_vs_professional_assistance = document.getElementById('mt-appeals-section-diy-vs-professional-assistance');
  if (mt_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_mato_grosso_specific_context = document.getElementById('mt-appeals-section-mato-grosso-specific-context');
  if (mt_appeals_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-appeals-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_what_our_clients_say = document.getElementById('mt-appeals-section-what-our-clients-say');
  if (mt_appeals_section_what_our_clients_say) {
    gsap.fromTo('#mt-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_frequently_asked_questions = document.getElementById('mt-appeals-section-frequently-asked-questions');
  if (mt_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#mt-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_international_support = document.getElementById('mt-appeals-section-international-support');
  if (mt_appeals_section_international_support) {
    gsap.fromTo('#mt-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_our_credentials = document.getElementById('mt-appeals-list-our-credentials');
  if (mt_appeals_list_our_credentials) {
    gsap.from('#mt-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_list_related_services = document.getElementById('mt-appeals-list-related-services');
  if (mt_appeals_list_related_services) {
    gsap.from('#mt-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_youre_in_good_hands = document.getElementById('mt-appeals-section-youre-in-good-hands');
  if (mt_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#mt-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_appeals_section_21 = document.getElementById('mt-appeals-section-21');
  if (mt_appeals_section_21) {
    gsap.fromTo('#mt-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('mt-consular-form-consular-services-in-brazil-for-citizens');
  if (mt_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#mt-consular-form-consular-services-in-brazil-for-citizens input, #mt-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_quick_facts = document.getElementById('mt-consular-list-quick-facts');
  if (mt_consular_list_quick_facts) {
    gsap.from('#mt-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_common_challenges_applicants_face = document.getElementById('mt-consular-list-common-challenges-applicants-face');
  if (mt_consular_list_common_challenges_applicants_face) {
    gsap.from('#mt-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_how_we_solve_these_challenges = document.getElementById('mt-consular-list-how-we-solve-these-challenges');
  if (mt_consular_list_how_we_solve_these_challenges) {
    gsap.from('#mt-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_service_overview = document.getElementById('mt-consular-section-service-overview');
  if (mt_consular_section_service_overview) {
    gsap.fromTo('#mt-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_form_who_is_this_service_for = document.getElementById('mt-consular-form-who-is-this-service-for');
  if (mt_consular_form_who_is_this_service_for) {
    gsap.from('#mt-consular-form-who-is-this-service-for input, #mt-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_required_documents = document.getElementById('mt-consular-list-required-documents');
  if (mt_consular_list_required_documents) {
    gsap.from('#mt-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_process = document.getElementById('mt-consular-list-process');
  if (mt_consular_list_process) {
    gsap.from('#mt-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_timelines_deadlines = document.getElementById('mt-consular-section-timelines-deadlines');
  if (mt_consular_section_timelines_deadlines) {
    gsap.fromTo('#mt-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_fees_costs = document.getElementById('mt-consular-section-fees-costs');
  if (mt_consular_section_fees_costs) {
    gsap.fromTo('#mt-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_risks_common_mistakes = document.getElementById('mt-consular-list-risks-common-mistakes');
  if (mt_consular_list_risks_common_mistakes) {
    gsap.from('#mt-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_diy_vs_professional_assistance = document.getElementById('mt-consular-section-diy-vs-professional-assistance');
  if (mt_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_mato_grosso_specific_context = document.getElementById('mt-consular-section-mato-grosso-specific-context');
  if (mt_consular_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-consular-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_what_our_clients_say = document.getElementById('mt-consular-section-what-our-clients-say');
  if (mt_consular_section_what_our_clients_say) {
    gsap.fromTo('#mt-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_frequently_asked_questions = document.getElementById('mt-consular-section-frequently-asked-questions');
  if (mt_consular_section_frequently_asked_questions) {
    gsap.fromTo('#mt-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_international_support = document.getElementById('mt-consular-section-international-support');
  if (mt_consular_section_international_support) {
    gsap.fromTo('#mt-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_our_credentials = document.getElementById('mt-consular-list-our-credentials');
  if (mt_consular_list_our_credentials) {
    gsap.from('#mt-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_list_related_services = document.getElementById('mt-consular-list-related-services');
  if (mt_consular_list_related_services) {
    gsap.from('#mt-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_youre_in_good_hands = document.getElementById('mt-consular-section-youre-in-good-hands');
  if (mt_consular_section_youre_in_good_hands) {
    gsap.fromTo('#mt-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_consular_section_21 = document.getElementById('mt-consular-section-21');
  if (mt_consular_section_21) {
    gsap.fromTo('#mt-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('mt-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (mt_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#mt-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #mt-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_quick_facts = document.getElementById('mt-criminalrecords-list-quick-facts');
  if (mt_criminalrecords_list_quick_facts) {
    gsap.from('#mt-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_common_challenges_applicants_face = document.getElementById('mt-criminalrecords-list-common-challenges-applicants-face');
  if (mt_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#mt-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('mt-criminalrecords-list-how-we-solve-these-challenges');
  if (mt_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#mt-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_service_overview = document.getElementById('mt-criminalrecords-section-service-overview');
  if (mt_criminalrecords_section_service_overview) {
    gsap.fromTo('#mt-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_form_who_is_this_service_for = document.getElementById('mt-criminalrecords-form-who-is-this-service-for');
  if (mt_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#mt-criminalrecords-form-who-is-this-service-for input, #mt-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_required_documents = document.getElementById('mt-criminalrecords-list-required-documents');
  if (mt_criminalrecords_list_required_documents) {
    gsap.from('#mt-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_process = document.getElementById('mt-criminalrecords-list-process');
  if (mt_criminalrecords_list_process) {
    gsap.from('#mt-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_timelines_deadlines = document.getElementById('mt-criminalrecords-section-timelines-deadlines');
  if (mt_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#mt-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_fees_costs = document.getElementById('mt-criminalrecords-section-fees-costs');
  if (mt_criminalrecords_section_fees_costs) {
    gsap.fromTo('#mt-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_risks_common_mistakes = document.getElementById('mt-criminalrecords-list-risks-common-mistakes');
  if (mt_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#mt-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('mt-criminalrecords-section-diy-vs-professional-assistance');
  if (mt_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_mato_grosso_specific_context = document.getElementById('mt-criminalrecords-section-mato-grosso-specific-context');
  if (mt_criminalrecords_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-criminalrecords-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_what_our_clients_say = document.getElementById('mt-criminalrecords-section-what-our-clients-say');
  if (mt_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#mt-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_frequently_asked_questions = document.getElementById('mt-criminalrecords-section-frequently-asked-questions');
  if (mt_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#mt-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_international_support = document.getElementById('mt-criminalrecords-section-international-support');
  if (mt_criminalrecords_section_international_support) {
    gsap.fromTo('#mt-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_our_credentials = document.getElementById('mt-criminalrecords-list-our-credentials');
  if (mt_criminalrecords_list_our_credentials) {
    gsap.from('#mt-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_list_related_services = document.getElementById('mt-criminalrecords-list-related-services');
  if (mt_criminalrecords_list_related_services) {
    gsap.from('#mt-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_youre_in_good_hands = document.getElementById('mt-criminalrecords-section-youre-in-good-hands');
  if (mt_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#mt-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_criminalrecords_section_21 = document.getElementById('mt-criminalrecords-section-21');
  if (mt_criminalrecords_section_21) {
    gsap.fromTo('#mt-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_form_extradition_assistance_in_brazil = document.getElementById('mt-extradition-form-extradition-assistance-in-brazil');
  if (mt_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#mt-extradition-form-extradition-assistance-in-brazil input, #mt-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_quick_facts = document.getElementById('mt-extradition-list-quick-facts');
  if (mt_extradition_list_quick_facts) {
    gsap.from('#mt-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_common_challenges_applicants_face = document.getElementById('mt-extradition-list-common-challenges-applicants-face');
  if (mt_extradition_list_common_challenges_applicants_face) {
    gsap.from('#mt-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_how_we_solve_these_challenges = document.getElementById('mt-extradition-list-how-we-solve-these-challenges');
  if (mt_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#mt-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_service_overview = document.getElementById('mt-extradition-section-service-overview');
  if (mt_extradition_section_service_overview) {
    gsap.fromTo('#mt-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_form_who_is_this_service_for = document.getElementById('mt-extradition-form-who-is-this-service-for');
  if (mt_extradition_form_who_is_this_service_for) {
    gsap.from('#mt-extradition-form-who-is-this-service-for input, #mt-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_required_documents = document.getElementById('mt-extradition-list-required-documents');
  if (mt_extradition_list_required_documents) {
    gsap.from('#mt-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_process = document.getElementById('mt-extradition-list-process');
  if (mt_extradition_list_process) {
    gsap.from('#mt-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_timelines_deadlines = document.getElementById('mt-extradition-section-timelines-deadlines');
  if (mt_extradition_section_timelines_deadlines) {
    gsap.fromTo('#mt-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_fees_costs = document.getElementById('mt-extradition-section-fees-costs');
  if (mt_extradition_section_fees_costs) {
    gsap.fromTo('#mt-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_risks_common_mistakes = document.getElementById('mt-extradition-list-risks-common-mistakes');
  if (mt_extradition_list_risks_common_mistakes) {
    gsap.from('#mt-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_diy_vs_professional_assistance = document.getElementById('mt-extradition-section-diy-vs-professional-assistance');
  if (mt_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_mato_grosso_specific_context = document.getElementById('mt-extradition-section-mato-grosso-specific-context');
  if (mt_extradition_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-extradition-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_what_our_clients_say = document.getElementById('mt-extradition-section-what-our-clients-say');
  if (mt_extradition_section_what_our_clients_say) {
    gsap.fromTo('#mt-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_frequently_asked_questions = document.getElementById('mt-extradition-section-frequently-asked-questions');
  if (mt_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#mt-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_international_support = document.getElementById('mt-extradition-section-international-support');
  if (mt_extradition_section_international_support) {
    gsap.fromTo('#mt-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_our_credentials = document.getElementById('mt-extradition-list-our-credentials');
  if (mt_extradition_list_our_credentials) {
    gsap.from('#mt-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_list_related_services = document.getElementById('mt-extradition-list-related-services');
  if (mt_extradition_list_related_services) {
    gsap.from('#mt-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_youre_in_good_hands = document.getElementById('mt-extradition-section-youre-in-good-hands');
  if (mt_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#mt-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_extradition_section_21 = document.getElementById('mt-extradition-section-21');
  if (mt_extradition_section_21) {
    gsap.fromTo('#mt-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_form_discover_the_north_amazon_and_beyond = document.getElementById('mt-north-form-discover-the-north-amazon-and-beyond');
  if (mt_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#mt-north-form-discover-the-north-amazon-and-beyond input, #mt-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_quick_facts = document.getElementById('mt-north-list-quick-facts');
  if (mt_north_list_quick_facts) {
    gsap.from('#mt-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_common_challenges_applicants_face = document.getElementById('mt-north-list-common-challenges-applicants-face');
  if (mt_north_list_common_challenges_applicants_face) {
    gsap.from('#mt-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_how_we_solve_these_challenges = document.getElementById('mt-north-list-how-we-solve-these-challenges');
  if (mt_north_list_how_we_solve_these_challenges) {
    gsap.from('#mt-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_trip_overview = document.getElementById('mt-north-section-trip-overview');
  if (mt_north_section_trip_overview) {
    gsap.fromTo('#mt-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_form_who_is_this_trip_for = document.getElementById('mt-north-form-who-is-this-trip-for');
  if (mt_north_form_who_is_this_trip_for) {
    gsap.from('#mt-north-form-who-is-this-trip-for input, #mt-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_required_documents = document.getElementById('mt-north-list-required-documents');
  if (mt_north_list_required_documents) {
    gsap.from('#mt-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_booking_process = document.getElementById('mt-north-list-booking-process');
  if (mt_north_list_booking_process) {
    gsap.from('#mt-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_timelines_deadlines = document.getElementById('mt-north-section-timelines-deadlines');
  if (mt_north_section_timelines_deadlines) {
    gsap.fromTo('#mt-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_fees_costs = document.getElementById('mt-north-section-fees-costs');
  if (mt_north_section_fees_costs) {
    gsap.fromTo('#mt-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_risks_common_mistakes = document.getElementById('mt-north-list-risks-common-mistakes');
  if (mt_north_list_risks_common_mistakes) {
    gsap.from('#mt-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_diy_vs_professional_assistance = document.getElementById('mt-north-section-diy-vs-professional-assistance');
  if (mt_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_mato_grosso_specific_context = document.getElementById('mt-north-section-mato-grosso-specific-context');
  if (mt_north_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-north-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_what_our_clients_say = document.getElementById('mt-north-section-what-our-clients-say');
  if (mt_north_section_what_our_clients_say) {
    gsap.fromTo('#mt-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_frequently_asked_questions = document.getElementById('mt-north-section-frequently-asked-questions');
  if (mt_north_section_frequently_asked_questions) {
    gsap.fromTo('#mt-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_international_support = document.getElementById('mt-north-section-international-support');
  if (mt_north_section_international_support) {
    gsap.fromTo('#mt-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_our_credentials = document.getElementById('mt-north-list-our-credentials');
  if (mt_north_list_our_credentials) {
    gsap.from('#mt-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_list_related_services = document.getElementById('mt-north-list-related-services');
  if (mt_north_list_related_services) {
    gsap.from('#mt-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_youre_in_good_hands = document.getElementById('mt-north-section-youre-in-good-hands');
  if (mt_north_section_youre_in_good_hands) {
    gsap.fromTo('#mt-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_north_section_21 = document.getElementById('mt-north-section-21');
  if (mt_north_section_21) {
    gsap.fromTo('#mt-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('mt-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (mt_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#mt-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #mt-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_quick_facts = document.getElementById('mt-centralwest-list-quick-facts');
  if (mt_centralwest_list_quick_facts) {
    gsap.from('#mt-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_common_challenges_applicants_face = document.getElementById('mt-centralwest-list-common-challenges-applicants-face');
  if (mt_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#mt-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_how_we_solve_these_challenges = document.getElementById('mt-centralwest-list-how-we-solve-these-challenges');
  if (mt_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#mt-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_trip_overview = document.getElementById('mt-centralwest-section-trip-overview');
  if (mt_centralwest_section_trip_overview) {
    gsap.fromTo('#mt-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_form_who_is_this_trip_for = document.getElementById('mt-centralwest-form-who-is-this-trip-for');
  if (mt_centralwest_form_who_is_this_trip_for) {
    gsap.from('#mt-centralwest-form-who-is-this-trip-for input, #mt-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_required_documents = document.getElementById('mt-centralwest-list-required-documents');
  if (mt_centralwest_list_required_documents) {
    gsap.from('#mt-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_booking_process = document.getElementById('mt-centralwest-list-booking-process');
  if (mt_centralwest_list_booking_process) {
    gsap.from('#mt-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_timelines_deadlines = document.getElementById('mt-centralwest-section-timelines-deadlines');
  if (mt_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#mt-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_fees_costs = document.getElementById('mt-centralwest-section-fees-costs');
  if (mt_centralwest_section_fees_costs) {
    gsap.fromTo('#mt-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_risks_common_mistakes = document.getElementById('mt-centralwest-list-risks-common-mistakes');
  if (mt_centralwest_list_risks_common_mistakes) {
    gsap.from('#mt-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_diy_vs_professional_assistance = document.getElementById('mt-centralwest-section-diy-vs-professional-assistance');
  if (mt_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_mato_grosso_specific_context = document.getElementById('mt-centralwest-section-mato-grosso-specific-context');
  if (mt_centralwest_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-centralwest-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_what_our_clients_say = document.getElementById('mt-centralwest-section-what-our-clients-say');
  if (mt_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#mt-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_frequently_asked_questions = document.getElementById('mt-centralwest-section-frequently-asked-questions');
  if (mt_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#mt-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_international_support = document.getElementById('mt-centralwest-section-international-support');
  if (mt_centralwest_section_international_support) {
    gsap.fromTo('#mt-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_our_credentials = document.getElementById('mt-centralwest-list-our-credentials');
  if (mt_centralwest_list_our_credentials) {
    gsap.from('#mt-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_list_related_services = document.getElementById('mt-centralwest-list-related-services');
  if (mt_centralwest_list_related_services) {
    gsap.from('#mt-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_youre_in_good_hands = document.getElementById('mt-centralwest-section-youre-in-good-hands');
  if (mt_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#mt-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_centralwest_section_21 = document.getElementById('mt-centralwest-section-21');
  if (mt_centralwest_section_21) {
    gsap.fromTo('#mt-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('mt-southeast-form-dynamic-southeast-cities-and-history');
  if (mt_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#mt-southeast-form-dynamic-southeast-cities-and-history input, #mt-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_quick_facts = document.getElementById('mt-southeast-list-quick-facts');
  if (mt_southeast_list_quick_facts) {
    gsap.from('#mt-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_common_challenges_applicants_face = document.getElementById('mt-southeast-list-common-challenges-applicants-face');
  if (mt_southeast_list_common_challenges_applicants_face) {
    gsap.from('#mt-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_how_we_solve_these_challenges = document.getElementById('mt-southeast-list-how-we-solve-these-challenges');
  if (mt_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#mt-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_trip_overview = document.getElementById('mt-southeast-section-trip-overview');
  if (mt_southeast_section_trip_overview) {
    gsap.fromTo('#mt-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_form_who_is_this_trip_for = document.getElementById('mt-southeast-form-who-is-this-trip-for');
  if (mt_southeast_form_who_is_this_trip_for) {
    gsap.from('#mt-southeast-form-who-is-this-trip-for input, #mt-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_required_documents = document.getElementById('mt-southeast-list-required-documents');
  if (mt_southeast_list_required_documents) {
    gsap.from('#mt-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_booking_process = document.getElementById('mt-southeast-list-booking-process');
  if (mt_southeast_list_booking_process) {
    gsap.from('#mt-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_timelines_deadlines = document.getElementById('mt-southeast-section-timelines-deadlines');
  if (mt_southeast_section_timelines_deadlines) {
    gsap.fromTo('#mt-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_fees_costs = document.getElementById('mt-southeast-section-fees-costs');
  if (mt_southeast_section_fees_costs) {
    gsap.fromTo('#mt-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_risks_common_mistakes = document.getElementById('mt-southeast-list-risks-common-mistakes');
  if (mt_southeast_list_risks_common_mistakes) {
    gsap.from('#mt-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_diy_vs_professional_assistance = document.getElementById('mt-southeast-section-diy-vs-professional-assistance');
  if (mt_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_mato_grosso_specific_context = document.getElementById('mt-southeast-section-mato-grosso-specific-context');
  if (mt_southeast_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-southeast-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_what_our_clients_say = document.getElementById('mt-southeast-section-what-our-clients-say');
  if (mt_southeast_section_what_our_clients_say) {
    gsap.fromTo('#mt-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_frequently_asked_questions = document.getElementById('mt-southeast-section-frequently-asked-questions');
  if (mt_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#mt-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_international_support = document.getElementById('mt-southeast-section-international-support');
  if (mt_southeast_section_international_support) {
    gsap.fromTo('#mt-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_our_credentials = document.getElementById('mt-southeast-list-our-credentials');
  if (mt_southeast_list_our_credentials) {
    gsap.from('#mt-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_list_related_services = document.getElementById('mt-southeast-list-related-services');
  if (mt_southeast_list_related_services) {
    gsap.from('#mt-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_youre_in_good_hands = document.getElementById('mt-southeast-section-youre-in-good-hands');
  if (mt_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#mt-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_southeast_section_21 = document.getElementById('mt-southeast-section-21');
  if (mt_southeast_section_21) {
    gsap.fromTo('#mt-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('mt-northeast-form-vibrant-northeast-beaches-and-culture');
  if (mt_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#mt-northeast-form-vibrant-northeast-beaches-and-culture input, #mt-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_quick_facts = document.getElementById('mt-northeast-list-quick-facts');
  if (mt_northeast_list_quick_facts) {
    gsap.from('#mt-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_common_challenges_applicants_face = document.getElementById('mt-northeast-list-common-challenges-applicants-face');
  if (mt_northeast_list_common_challenges_applicants_face) {
    gsap.from('#mt-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_how_we_solve_these_challenges = document.getElementById('mt-northeast-list-how-we-solve-these-challenges');
  if (mt_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#mt-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_trip_overview = document.getElementById('mt-northeast-section-trip-overview');
  if (mt_northeast_section_trip_overview) {
    gsap.fromTo('#mt-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_form_who_is_this_trip_for = document.getElementById('mt-northeast-form-who-is-this-trip-for');
  if (mt_northeast_form_who_is_this_trip_for) {
    gsap.from('#mt-northeast-form-who-is-this-trip-for input, #mt-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_required_documents = document.getElementById('mt-northeast-list-required-documents');
  if (mt_northeast_list_required_documents) {
    gsap.from('#mt-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_booking_process = document.getElementById('mt-northeast-list-booking-process');
  if (mt_northeast_list_booking_process) {
    gsap.from('#mt-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_timelines_deadlines = document.getElementById('mt-northeast-section-timelines-deadlines');
  if (mt_northeast_section_timelines_deadlines) {
    gsap.fromTo('#mt-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_fees_costs = document.getElementById('mt-northeast-section-fees-costs');
  if (mt_northeast_section_fees_costs) {
    gsap.fromTo('#mt-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_risks_common_mistakes = document.getElementById('mt-northeast-list-risks-common-mistakes');
  if (mt_northeast_list_risks_common_mistakes) {
    gsap.from('#mt-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_diy_vs_professional_assistance = document.getElementById('mt-northeast-section-diy-vs-professional-assistance');
  if (mt_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_mato_grosso_specific_context = document.getElementById('mt-northeast-section-mato-grosso-specific-context');
  if (mt_northeast_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-northeast-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_what_our_clients_say = document.getElementById('mt-northeast-section-what-our-clients-say');
  if (mt_northeast_section_what_our_clients_say) {
    gsap.fromTo('#mt-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_frequently_asked_questions = document.getElementById('mt-northeast-section-frequently-asked-questions');
  if (mt_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#mt-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_international_support = document.getElementById('mt-northeast-section-international-support');
  if (mt_northeast_section_international_support) {
    gsap.fromTo('#mt-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_our_credentials = document.getElementById('mt-northeast-list-our-credentials');
  if (mt_northeast_list_our_credentials) {
    gsap.from('#mt-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_list_related_services = document.getElementById('mt-northeast-list-related-services');
  if (mt_northeast_list_related_services) {
    gsap.from('#mt-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_youre_in_good_hands = document.getElementById('mt-northeast-section-youre-in-good-hands');
  if (mt_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#mt-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_northeast_section_21 = document.getElementById('mt-northeast-section-21');
  if (mt_northeast_section_21) {
    gsap.fromTo('#mt-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_form_charming_south_wine_and_gauchos = document.getElementById('mt-south-form-charming-south-wine-and-gauchos');
  if (mt_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#mt-south-form-charming-south-wine-and-gauchos input, #mt-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_quick_facts = document.getElementById('mt-south-list-quick-facts');
  if (mt_south_list_quick_facts) {
    gsap.from('#mt-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_common_challenges_applicants_face = document.getElementById('mt-south-list-common-challenges-applicants-face');
  if (mt_south_list_common_challenges_applicants_face) {
    gsap.from('#mt-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_how_we_solve_these_challenges = document.getElementById('mt-south-list-how-we-solve-these-challenges');
  if (mt_south_list_how_we_solve_these_challenges) {
    gsap.from('#mt-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_trip_overview = document.getElementById('mt-south-section-trip-overview');
  if (mt_south_section_trip_overview) {
    gsap.fromTo('#mt-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_form_who_is_this_trip_for = document.getElementById('mt-south-form-who-is-this-trip-for');
  if (mt_south_form_who_is_this_trip_for) {
    gsap.from('#mt-south-form-who-is-this-trip-for input, #mt-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_required_documents = document.getElementById('mt-south-list-required-documents');
  if (mt_south_list_required_documents) {
    gsap.from('#mt-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_booking_process = document.getElementById('mt-south-list-booking-process');
  if (mt_south_list_booking_process) {
    gsap.from('#mt-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_timelines_deadlines = document.getElementById('mt-south-section-timelines-deadlines');
  if (mt_south_section_timelines_deadlines) {
    gsap.fromTo('#mt-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_fees_costs = document.getElementById('mt-south-section-fees-costs');
  if (mt_south_section_fees_costs) {
    gsap.fromTo('#mt-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_risks_common_mistakes = document.getElementById('mt-south-list-risks-common-mistakes');
  if (mt_south_list_risks_common_mistakes) {
    gsap.from('#mt-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_diy_vs_professional_assistance = document.getElementById('mt-south-section-diy-vs-professional-assistance');
  if (mt_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mt-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_mato_grosso_specific_context = document.getElementById('mt-south-section-mato-grosso-specific-context');
  if (mt_south_section_mato_grosso_specific_context) {
    gsap.fromTo('#mt-south-section-mato-grosso-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_what_our_clients_say = document.getElementById('mt-south-section-what-our-clients-say');
  if (mt_south_section_what_our_clients_say) {
    gsap.fromTo('#mt-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_frequently_asked_questions = document.getElementById('mt-south-section-frequently-asked-questions');
  if (mt_south_section_frequently_asked_questions) {
    gsap.fromTo('#mt-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_international_support = document.getElementById('mt-south-section-international-support');
  if (mt_south_section_international_support) {
    gsap.fromTo('#mt-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_our_credentials = document.getElementById('mt-south-list-our-credentials');
  if (mt_south_list_our_credentials) {
    gsap.from('#mt-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_list_related_services = document.getElementById('mt-south-list-related-services');
  if (mt_south_list_related_services) {
    gsap.from('#mt-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_youre_in_good_hands = document.getElementById('mt-south-section-youre-in-good-hands');
  if (mt_south_section_youre_in_good_hands) {
    gsap.fromTo('#mt-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

  const mt_south_section_21 = document.getElementById('mt-south-section-21');
  if (mt_south_section_21) {
    gsap.fromTo('#mt-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'easeInOutBack'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
