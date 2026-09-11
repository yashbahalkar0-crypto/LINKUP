function createLinkUpApplicationForm() {
  // Create a new form
  var form = FormApp.create('LinkUp Navi Mumbai — Membership Application');
  
  form.setDescription(
    'LinkUp curates tables of 3 to 5 verified individuals for deep, focused conversations ' +
    'over coffee across Navi Mumbai (Vashi, Belapur, Seawoods, Kharghar).\n\n' +
    'Please answer thoughtfully — we hand-review every submission to ensure great chemistry at the table.'
  );
  
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);

  // ----------------------------------------------------
  // SECTION 1: Identity & Verification
  // ----------------------------------------------------
  form.addSectionHeaderItem().setTitle('Section 1: Identity & Verification');

  // Full Name
  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  // WhatsApp Number
  form.addTextItem()
    .setTitle('WhatsApp Number (with country code)')
    .setHelpText('e.g. +91 98765 43210 (Used for invite coordination)')
    .setRequired(true);

  // Age
  form.addTextItem()
    .setTitle('Age')
    .setHelpText('Must be 18+')
    .setRequired(true);

  // Profession / Role
  form.addTextItem()
    .setTitle('Current Profession / Role & Organization')
    .setHelpText('e.g. UX Designer at Studio, Founder at Biotech, Architect, Graduate Student')
    .setRequired(true);

  // LinkedIn or Profile
  form.addTextItem()
    .setTitle('LinkedIn URL or Public Portfolio / Social Profile')
    .setHelpText('Used strictly by our curation team to verify identity and professional background')
    .setRequired(true);

  // ----------------------------------------------------
  // SECTION 2: Conversation Themes
  // ----------------------------------------------------
  form.addSectionHeaderItem().setTitle('Section 2: Conversation Anchor');

  var themeItem = form.addCheckboxItem();
  themeItem.setTitle('Which conversation themes excite you most?')
    .setHelpText('Select 1 to 2 themes you would love to spend 2 hours discussing')
    .setRequired(true)
    .setChoiceValues([
      'Philosophy & Ethics (Consciousness, modern morality, life design)',
      'Books, Essays & Long-form (Literature, non-fiction, thought pieces)',
      'Design, Art & Architecture (Craft, spatial aesthetics, culture)',
      'Science, Tech & The Future (Emerging tech, physics, AI impacts)',
      'Startups, Builders & Creative Independence (Zero-to-one, side pursuits)',
      'Psychology & Human Behavior (Habits, human dynamics, decision making)'
    ]);

  // ----------------------------------------------------
  // SECTION 3: Thoughtfulness & Chemistry Check
  // ----------------------------------------------------
  form.addSectionHeaderItem().setTitle('Section 3: Thoughtfulness & Chemistry');

  form.addParagraphTextItem()
    .setTitle("What is an idea, question, or book you've been pondering recently?")
    .setHelpText('Please write 2 to 4 sentences. Quality and sincerity matter most.')
    .setRequired(true);

  var valueItem = form.addMultipleChoiceItem();
  valueItem.setTitle('What do you value most in a good conversation?')
    .setRequired(true)
    .setChoiceValues([
      'Depth and intellectual curiosity',
      'Differing viewpoints challenged respectfully',
      'Creative inspiration and shared ideas',
      'Authentic life reflections without posturing'
    ]);

  // ----------------------------------------------------
  // SECTION 4: Location & Availability
  // ----------------------------------------------------
  form.addSectionHeaderItem().setTitle('Section 4: Location & Availability');

  var locationItem = form.addCheckboxItem();
  locationItem.setTitle('Preferred Navi Mumbai Hub(s)')
    .setHelpText('Select all hubs you can comfortably travel to')
    .setRequired(true)
    .setChoiceValues([
      'Vashi (Palm Beach Road)',
      'CBD Belapur',
      'Seawoods (Grand Central / Nerul)',
      'Kharghar (Central Park area)'
    ]);

  var timeItem = form.addCheckboxItem();
  timeItem.setTitle('Preferred Meetup Slot(s)')
    .setRequired(true)
    .setChoiceValues([
      'Saturday Morning (10:30 AM – 12:30 PM)',
      'Saturday Late Afternoon (4:30 PM – 6:30 PM)',
      'Sunday Morning (10:30 AM – 12:30 PM)',
      'Sunday Late Afternoon (4:30 PM – 6:30 PM)'
    ]);

  // ----------------------------------------------------
  // SECTION 5: Community Agreement
  // ----------------------------------------------------
  form.addSectionHeaderItem().setTitle('Section 5: Community Agreement');

  var agreeItem = form.addCheckboxItem();
  agreeItem.setTitle('LinkUp Values Agreement')
    .setRequired(true)
    .setChoiceValues([
      'I agree to arrive on time, respect everyone at the table, keep conversations confidential, and refrain from commercial pitching or unsolicited networking.'
    ]);

  // Log Form URLs
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Short URL: ' + form.getShortUrl());
  Logger.log('Edit URL: ' + form.getEditUrl());
}
