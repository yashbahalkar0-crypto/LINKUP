# LinkUp — Google Form Application Template & Setup Guide

This document contains the exact field-by-field layout to create your official **LinkUp Navi Mumbai** application Google Form.

---

## 🚀 Quick Setup (2 Minutes)

1. Go to [forms.google.com](https://forms.google.com) and click **Blank form (+)**.
2. Title the form: **LinkUp Navi Mumbai — Membership Application**
3. Form Description:
   > *"LinkUp curates curated tables of 3 to 5 verified individuals for deep, focused conversations over coffee across Navi Mumbai (Vashi, Belapur, Seawoods, Kharghar). Please answer thoughtfully — we hand-review every submission to ensure great chemistry at the table."*

---

## 📋 Form Questions & Field Structure

### Section 1: Basic Identity & Verification
| Field Name | Type | Options / Validation | Required? |
|---|---|---|---|
| **Full Name** | Short answer | Text | **Yes** |
| **WhatsApp Number** | Short answer | Number / Text (e.g. +91 98765 43210) | **Yes** |
| **Email Address** | Short answer | Valid email address | **Yes** |
| **Age** | Short answer | Number (18+) | **Yes** |
| **Current Profession / Role & Company** | Short answer | Text (e.g., "Product Designer at Startup" or "Architect") | **Yes** |
| **LinkedIn or Public Social Profile** | Short answer | URL (used strictly for identity verification) | **Yes** |

---

### Section 2: Preferred Conversation Theme
> *"Each table has a curated anchor theme to avoid superficial small talk."*

| Field Name | Type | Options | Required? |
|---|---|---|---|
| **Which conversation themes excite you most?** | Checkboxes (Select 1-2) | 1. **Philosophy & Ethics** (Consciousness, modern morality, life design)<br>2. **Books, Essays & Long-form** (Literature, non-fiction, thought pieces)<br>3. **Design, Art & Architecture** (Craft, spatial aesthetics, culture)<br>4. **Science, Tech & The Future** (Emerging tech, physics, AI impacts)<br>5. **Startups, Builders & Creative Independence** (Zero-to-one, side pursuits)<br>6. **Psychology & Human Behavior** (Habits, human dynamics, decision making) | **Yes** |

---

### Section 3: Thoughtfulness & Chemistry Check
> *"This helps us match table companions with complementary viewpoints."*

| Field Name | Type | Guidance / Options | Required? |
|---|---|---|---|
| **What is an idea, question, or book you've been pondering recently?** | Paragraph | Minimum 2-3 sentences. (Quality matters over length!) | **Yes** |
| **What do you value most in a good conversation?** | Multiple Choice | • Depth and intellectual curiosity<br>• Differing viewpoints challenged respectfully<br>• Creative inspiration and shared ideas<br>• Authentic life reflections without posturing | **Yes** |

---

### Section 4: Location & Availability
| Field Name | Type | Options | Required? |
|---|---|---|---|
| **Preferred Navi Mumbai Hub(s)** | Checkboxes | [ ] Vashi (Palm Beach Road)<br>[ ] Belapur / CBD<br>[ ] Seawoods (Grand Central / Nerul)<br>[ ] Kharghar (Central Park area) | **Yes** |
| **Preferred Meetup Times** | Checkboxes | [ ] Saturday Morning (10:30 AM – 12:30 PM)<br>[ ] Saturday Late Afternoon (4:30 PM – 6:30 PM)<br>[ ] Sunday Morning (10:30 AM – 12:30 PM)<br>[ ] Sunday Late Afternoon (4:30 PM – 6:30 PM) | **Yes** |

---

### Section 5: Community Agreement
| Field Name | Type | Text / Checkbox | Required? |
|---|---|---|---|
| **LinkUp Values Agreement** | Checkboxes | [ ] **I agree** to arrive on time, respect everyone at the table, keep conversations confidential, and maintain a no-pitching/no-networking posture. | **Yes** |

---

## 🔗 How to Connect Your Form to the Website

Once your form is created:
1. In Google Forms, click **Send** (top right) → Click the **Link icon (🔗)** → Check **Shorten URL** → Click **Copy**.
   - Example: `https://forms.gle/xYz12345Abc`
2. Open [`js/shared.js`](file:///c:/Users/My%20Document/Desktop/linkup/js/shared.js) in your project.
3. At Line 10, replace:
   ```javascript
   const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID";
   ```
   with your copied URL:
   ```javascript
   const GOOGLE_FORM_URL = "https://forms.gle/xYz12345Abc";
   ```
4. Save the file! Every **"Apply for Next Table"**, **"Apply for an Invitation"**, and **"Join a Table"** button on every page will now open your Google Form automatically.
