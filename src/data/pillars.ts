export const PILLAR_ORDER = [
  "ai-isa",
  "lead-qualification",
  "social-media-agent",
  "fsbo-hunter",
  "realtor-seo",
  "cma-agent",
  "listing-campaigns",
  "open-house-scheduler",
] as const;

export type PillarSlug = (typeof PILLAR_ORDER)[number];

export type Pillar = {
  slug: PillarSlug;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lede: string;
  problem: { headline: string; body: string; bullets: string[] };
  howItWorks: { step: string; title: string; body: string }[];
  weekOne: { title: string; body: string }[];
  includes: string[];
  notIncluded: string[];
  whoFor: string[];
  whoNotFor: string[];
  proofs: { stat: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
  related: PillarSlug[];
  offer: "essential" | "pro" | "both";
  applyQuery: string;
  closing: string;
};

export const pillars: Record<PillarSlug, Pillar> = {
  "ai-isa": {
    slug: "ai-isa",
    navLabel: "AI ISA",
    title: "AI ISA for Realtors: 60-Second Speed to Lead, Done For You | GlydAI",
    description:
      "GlydAI is a fully managed AI ISA that answers realtor leads in under 60 seconds, 24/7, across calls, text, social, and MLS. No new dashboard to learn.",
    h1: "An AI ISA that answers in 60 seconds — you never log in",
    eyebrow: "Essential",
    lede: "Most agents respond in hours. By then the lead has booked with someone else. GlydAI’s AI ISA replies in under 60 seconds on every channel, qualifies the conversation, and only puts hot leads on your phone. We build it, we run it, we report it. You do not get another dashboard.",
    problem: {
      headline: "Your leads are dying in the inbox",
      body: "Speed to lead is not a slogan. It is the difference between an appointment and a ghost. Portal leads, listing inquiries, and after-hours texts all expect an answer now. You cannot sit on the phone 24/7, and a $4k–$6k/month human ISA is a second payroll you may not want. The result is the thing 90% of clients already complain about: the agent never called back.",
      bullets: [
        "Zillow, Realtor.com, and MLS inquiries sitting two hours or more",
        "Nights, weekends, and holidays with nobody covering the phone",
        "Hiring an ISA is expensive, slow to train, and turns over",
        "You already know the serious buyers went to whoever texted first",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "We connect the sources you already have",
        body: "Onboarding is us, not you. We plug into the lead sources you already pay for — portals, website forms, MLS inquiries, social DMs — and your CRM if you have one. Follow Up Boss, kvCORE, HubSpot, Lofty, Chime, Wise Agent, LionDesk. You do not learn a new login. If a source needs an API or a forwarding number, we handle the setup on the implementation call.",
      },
      {
        step: "02",
        title: "The ISA answers in under 60 seconds, every channel",
        body: "Calls, SMS, social, and MLS-originated leads get a human-sounding reply in under a minute, 24/7. The first message is not a generic “Thanks for your inquiry!” It references the property or the form they just submitted, asks one useful question, and keeps the thread moving. After-hours is the point. Sunday night listing alerts should not wait until Monday standup.",
      },
      {
        step: "03",
        title: "Qualification happens inside the conversation",
        body: "While they are still in the thread, we run BART — Budget, Authority, Reason, Timeline. The lead does not fill a 12-field form. They have a conversation. Hot leads are flagged in real time. Warm and cold leads stay in the CRM with a reason code so you are not guessing why they went quiet.",
      },
      {
        step: "04",
        title: "Hot leads transfer to you instantly",
        body: "When someone is ready to tour, list, or talk money, the ISA does not “create a task for later.” It transfers. You get the context: what they asked, what they can do, when they want to move. You walk into the call already briefed. Everyone else stays in nurture so the conversation is not dead just because they were not ready this week.",
      },
      {
        step: "05",
        title: "You get the report. You do not run the system.",
        body: "Once a month you receive speed-to-lead, conversations started, qualification mix, and appointments set. That is the only “login” we want you to have — a report. If something is off, we fix the scripts and the routing. You stay on appointments, not on a blinking dashboard.",
      },
    ],
    weekOne: [
      {
        title: "Days 1–2: sources and voice",
        body: "We inventory every place a lead can enter — portals, site, ads, social, MLS. We capture how you actually talk: phrases you like, phrases you refuse, how you handle price, how you handle “just browsing.” The ISA should sound like your office, not a national call center.",
      },
      {
        title: "Days 3–5: live on a slice of traffic",
        body: "We do not flip every source on day one. We turn on one or two high-volume channels, watch the first conversations, and tighten the opening lines. You approve the voice. Then we expand to the rest of the stack.",
      },
      {
        title: "By day 7: under 60 seconds is the default",
        body: "The goal of week one is not a perfect novel of scripts. It is this: a new lead gets a useful reply in under a minute, including at 9pm. That is the jump from “I’ll get to it after this showing” to a system that does not sleep.",
      },
    ],
    includes: [
      "24/7 coverage on calls, text, social, and MLS-originated leads",
      "Sub-60-second first response as the operating standard",
      "BART qualification inside the thread",
      "Instant hot-lead transfer to you",
      "CRM writeback for the tools you already use",
      "Monthly speed, conversation, and appointment report",
      "Fully built and managed — no extra logins for you",
    ],
    notIncluded: [
      "Buying Zillow or Realtor.com leads for you",
      "A dashboard you are expected to live in",
      "A guaranteed number of closings",
      "Replacing a human ISA you already like for in-person listing appointments",
    ],
    whoFor: [
      "Agents and teams taking 20+ inbound leads a month and losing them to slow follow-up",
      "Solo producers who cannot justify a full-time ISA salary",
      "Teams that need nights and weekends covered without another hire",
      "Anyone whose CRM is a graveyard of “new lead” tasks from last Tuesday",
    ],
    whoNotFor: [
      "Agents with almost no inbound who actually need farm content and SEO first",
      "Teams that want to micromanage every AI sentence from a software UI",
      "Anyone outside the United States",
    ],
    proofs: [
      {
        stat: "<60s",
        label: "First response",
        note: "The operating standard we install, including nights and weekends.",
      },
      {
        stat: "+230.1%",
        label: "Qualified leads",
        note: "From GlydAI book of business after speed-to-lead and qualification were installed.",
      },
      {
        stat: "24/7",
        label: "Coverage",
        note: "The ISA does not take public holidays. You still can.",
      },
    ],
    faqs: [
      {
        q: "How fast is “under 60 seconds” in practice?",
        a: "The first reply on a new inbound — SMS, call handling, or social — is designed to fire in under a minute, including after hours. That is the standard we manage to. If a source is delayed because of the portal itself, we tell you. We do not pretend a Zillow email that arrives 20 minutes late was answered in 12 seconds.",
      },
      {
        q: "Will it sound robotic?",
        a: "Not if we do the voice work in week one. We write from how you actually talk, not from a national real-estate template. You approve the tone. If a thread feels off, we change the script — you do not log in to prompt an AI.",
      },
      {
        q: "Which CRMs do you work with?",
        a: "Follow Up Boss, kvCORE, HubSpot, Lofty, Chime, Wise Agent, LionDesk, and similar. If you are on something obscure, we say so on the application call instead of promising a fake integration.",
      },
      {
        q: "Do I still need a human ISA?",
        a: "Some teams keep a human for listing appointments and high-touch seller work, and let the AI cover inbound speed. Many solos replace the hire they were about to make. We will tell you which side you are on after we see your lead volume.",
      },
      {
        q: "What if the lead wants to talk to a person right now?",
        a: "That is a hot transfer. The ISA’s job is to get you on the phone with context, not to trap a serious buyer in a chatbot.",
      },
      {
        q: "Is this Essential or Pro?",
        a: "AI ISA is in Essential and is included when you are on Pro. You do not buy it as a separate login.",
      },
    ],
    related: ["lead-qualification", "fsbo-hunter", "open-house-scheduler"],
    offer: "essential",
    applyQuery: "service=ai-isa",
    closing:
      "If inbound is already coming in and dying on the vine, this is the first system to install. Apply and we will tell you in 24 hours if the volume is a fit.",
  },

  "lead-qualification": {
    slug: "lead-qualification",
    navLabel: "Lead Qualification",
    title: "BART Lead Qualification for Realtors | GlydAI",
    description:
      "We qualify inbound realtor leads with BART, transfer hot buyers and sellers instantly, and drop cold leads into a CRM nurture sequence we build for you.",
    h1: "Only talk to leads that can actually close",
    eyebrow: "Essential",
    lede: "Tire-kickers are why you hate your phone. GlydAI runs BART on every inbound conversation — Budget, Authority, Reason, Timeline. Hot leads hit your cell. Everyone else goes into a nurture sequence we write and run, inside the CRM you already have.",
    problem: {
      headline: "You are treating every name like a listing appointment",
      body: "Portal lead and “serious client” are not the same species. High cost per lead plus a low close rate is the treadmill: 92% of agents stay busy and still go broke. The miss is not “more leads.” It is that almost nobody in the inbox has budget, authority, a real reason, and a timeline — and you are spending evenings finding that out the hard way.",
      bullets: [
        "Most inbound names are browsing, underqualified, or not the decision maker",
        "Agents still call everyone, then burn out and stop calling anyone",
        "Cold leads get deleted instead of nurtured, so you pay for them twice later",
        "There is no shared definition of “hot” across your team",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "Inbound hits the AI ISA first",
        body: "Qualification does not start in a spreadsheet. It starts in the same 60-second conversation that answered the lead. The ISA is already in the thread. BART is how that thread is steered, not a second product you bolt on.",
      },
      {
        step: "02",
        title: "BART, in plain language",
        body: "Budget: can they do this price range, and with what financing reality. Authority: are we talking to the person who can say yes, or their cousin. Reason: why this move, why this neighborhood, why now — the “love language” of the deal. Timeline: this month, this quarter, or “someday.” We ask this as conversation, not as an interrogation form.",
      },
      {
        step: "03",
        title: "Hot, warm, or cold — scored in the thread",
        body: "Hot means they can transact and they have a reason to talk to you this week. Those transfer. Warm means real, but not this week — they stay in a shorter nurture. Cold means not transactable now. Cold is not “delete.” Cold is a tagged CRM record plus a sequence so you are not paying Zillow for the same human again in nine months with no memory.",
      },
      {
        step: "04",
        title: "Hot leads come to you with a briefing",
        body: "You get the transfer and the notes: budget signal, who they are, why they reached out, when they want to move, which property or farm triggered it. You do not start the call with “So what are you looking for?” You start with the thing they already told us.",
      },
      {
        step: "05",
        title: "We build the nurture. You do not have to.",
        body: "Cold and warm leads enter a sequence we write for your voice and your market — SMS and email, not a 47-email drip from 2019. It lives in your CRM. Monthly reporting shows how many conversations were hot vs parked, and how many parked leads came back. That is the conversion work most teams skip while they keep buying more names.",
      },
    ],
    weekOne: [
      {
        title: "Define “hot” with you, not a generic rubric",
        body: "A luxury listing agent in Dallas and a first-time-buyer agent in Indianapolis do not share a BART threshold. Week one is us writing your version: price floors, financing rules, geographic fences, and what “ready” means in your world.",
      },
      {
        title: "Stand up the nurture, not just the score",
        body: "A score without a sequence is how cold leads still die. We build the parked-lead path in the same week so nothing qualified-as-cold falls on the floor.",
      },
      {
        title: "Watch the first 20 conversations together",
        body: "We review real threads, not a demo. If BART is too aggressive, we loosen it. If you are still getting tire-kickers on your cell, we tighten it. That loop is the product.",
      },
    ],
    includes: [
      "BART scripts written for your market and price band",
      "Live scoring: hot / warm / cold",
      "Instant transfer of hot leads with notes",
      "CRM writeback and reason codes",
      "Nurture sequence we write and run",
      "Monthly qualification mix in your report",
    ],
    notIncluded: [
      "Replacing your CRM",
      "Promising that every portal lead becomes a closing",
      "Letting a bot argue with an angry client — those escalate to you",
    ],
    whoFor: [
      "Agents drowning in portal leads who cannot tell who is real",
      "Teams wasting senior agent time on tire-kickers",
      "Anyone whose cost per lead only looks high because conversion is untreated",
    ],
    whoNotFor: [
      "Teams that already have a trained human ISA they trust for qualification and only need after-hours coverage",
      "Agents who want every lead called by them personally, no exceptions",
    ],
    proofs: [
      {
        stat: "BART",
        label: "Qualification method",
        note: "Budget, Authority, Reason, Timeline — asked in conversation, not a form.",
      },
      {
        stat: "+230.1%",
        label: "Qualified leads",
        note: "GlydAI book of business after we stopped treating every name as an appointment.",
      },
      {
        stat: "+30.9%",
        label: "GCI",
        note: "Same book of business. Fewer wasted conversations, more closable ones.",
      },
    ],
    faqs: [
      {
        q: "What is BART?",
        a: "BART is how we qualify a real estate lead without a 12-field form. Budget — can they transact in this range. Authority — are we speaking to the decision maker. Reason — why this move, this property, this moment. Timeline — when. Hot means those four line up enough to put a human on the phone. Everything else is nurtured, not ghosted.",
      },
      {
        q: "What counts as a hot lead?",
        a: "Your definition, written in week one. Typical hot: they can do the price, they are the decision maker or have them in the thread, they have a real trigger, and they want to talk this week. We do not use a national default that sends you every “maybe in two years” inquiry.",
      },
      {
        q: "Can I change the questions?",
        a: "Yes. The scripts are yours. If you do not work VA loans, if you will not take a listing under a certain price, if you only farm three zip codes — that goes into BART. You tell us in English. We do not make you edit a flow chart.",
      },
      {
        q: "Where do cold leads go?",
        a: "Into your CRM with a reason code, then into a nurture sequence we build. “Not now” is not “not ever.” Deleting them is how you keep paying for the same people.",
      },
      {
        q: "Will this annoy serious buyers?",
        a: "BART is three or four natural questions inside a helpful thread, not a gate. Serious buyers like being taken seriously. They do not like waiting two hours and then getting a “just circling back!” text.",
      },
    ],
    related: ["ai-isa", "listing-campaigns", "cma-agent"],
    offer: "essential",
    applyQuery: "service=lead-qualification",
    closing:
      "If your calendar is full of maybes, qualification is the bottleneck — not lead gen. Apply and we will look at your mix.",
  },

  "social-media-agent": {
    slug: "social-media-agent",
    navLabel: "Social Media Agent",
    title: "Social Media Agent for Realtors: #1 in Your Farm Area | GlydAI",
    description:
      "We research your ICP and farm area, write trust-building scripts, and distribute content so you become the agent people already know when they are ready to sell.",
    h1: "Become the agent your farm already trusts",
    eyebrow: "Essential",
    lede: "Posting listings into the void is not a strategy. GlydAI researches your ICP and farm, writes credibility scripts, and runs distribution across channels so you show up as the local authority — not another 30-day social experiment you abandon when listings get busy.",
    problem: {
      headline: "You are invisible in the only places your farm still scrolls",
      body: "Buyers and sellers decide who feels established long before they fill out a Zillow form. If your farm never sees you, you are renting that trust from a portal. Most agents post when they remember, copy a national caption, and wonder why nobody from their three zip codes ever reaches out. The average agent is 54. They do not want a content studio. They want the farm to already know their name.",
      bullets: [
        "Inconsistent posting that dies the week escrow gets heavy",
        "Content that could have been written for any city in America",
        "No ICP — you are talking to “everyone interested in real estate”",
        "Leads from social that nobody answers for six hours",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "Farm and ICP research, first",
        body: "We do not start with “30 reels.” We start with who actually lives, buys, and lists in your farm: price band, dominant property type, turnover, what people complain about locally (insurance, HOAs, new builds, iBuyers). That research is what makes the next 90 days of content sound like it could only be you in that neighborhood.",
      },
      {
        step: "02",
        title: "Trust and credibility scripts",
        body: "The scripts are not dance audio. They are the sentences a 58-year-old listing client would believe: how you talk about pricing, how you talk about days on market, how you talk about the last time a seller waited too long. Written in your voice. You are not asked to become an influencer.",
      },
      {
        step: "03",
        title: "A calendar we run",
        body: "We operate the calendar. You are not staring at a content tool on Sunday night with the Sunday scaries. If we need a face-to-camera clip, we ask for a specific, short take. If you do not want to be on camera, we build authority without forcing it. The system is designed for working agents, not full-time creators.",
      },
      {
        step: "04",
        title: "Distribution on the channels that matter in that farm",
        body: "Not every farm lives on the same app. We pick the mix from how your ICP actually behaves — often Facebook and Instagram for your age of client, sometimes YouTube or email for listing-side trust — and we distribute there. “All channels” does not mean we spam every network with the same listing photo.",
      },
      {
        step: "05",
        title: "Leads go into the ISA, not into DMs you forget",
        body: "When someone replies, the AI ISA is the speed layer. Social without 60-second follow-up is just brand advertising. We connect the two so a comment at 8pm does not wait until you are done with Thursday’s showing.",
      },
    ],
    weekOne: [
      {
        title: "ICP one-pager for the farm",
        body: "Who they are, what they search, what they fear, which streets and complexes actually turn. This is the document the rest of the content hangs on.",
      },
      {
        title: "Script library v1",
        body: "A set of trust scripts you can live with. You strike anything that does not sound like you. We would rather ship 12 true pieces than 40 generic ones.",
      },
      {
        title: "First distribution live",
        body: "By the end of week one something is actually publishing on the channels we agreed, and inbound replies have a place to go.",
      },
    ],
    includes: [
      "ICP and farm-area research",
      "Trust and credibility script library in your voice",
      "Managed content calendar",
      "Distribution on the channels that matter locally",
      "Handoff into the AI ISA for replies",
      "Monthly content and inquiry reporting",
    ],
    notIncluded: [
      "A requirement that you film every day",
      "Paid ads budget (we can scope it; it is not automatic)",
      "Making you a full-time creator",
    ],
    whoFor: [
      "Geographic farmers who need inbound that is not rented from a portal",
      "Agents who know they “should post” and have not, for six months",
      "Teams that want a consistent local presence without hiring a social manager",
    ],
    whoNotFor: [
      "People who want a DIY content studio and a new app to live in",
      "Agents with no farm and no willingness to pick one",
    ],
    proofs: [
      {
        stat: "Farm",
        label: "First, then content",
        note: "ICP research before a single caption. That is why it does not sound national.",
      },
      {
        stat: "24/7",
        label: "Reply layer",
        note: "Social inquiries route into the same AI ISA that covers portals.",
      },
      {
        stat: "+230.1%",
        label: "Qualified leads",
        note: "GlydAI book of business across the stack, including farm-content capture.",
      },
    ],
    faqs: [
      {
        q: "Do I have to be on camera?",
        a: "No. Camera helps some farms. It is not a requirement. We will tell you if your market expects face-to-camera. If you refuse, we build around stills, listings, voice, and written authority. We do not run a program that dies because you hate Reels.",
      },
      {
        q: "Which platforms?",
        a: "Whatever your ICP actually uses in that farm. We do not pick TikTok because a guru said so. Many of our agents’ clients still live on Facebook and Instagram. We say that out loud.",
      },
      {
        q: "How fast until leads?",
        a: "Social is not a 7-day SLA the way speed-to-lead is. You should see consistent presence in weeks, and conversations as the farm starts recognizing you. Anyone promising 30 listing appointments from Reels in 14 days is selling a course.",
      },
      {
        q: "Does this replace listing content?",
        a: "No. Listing Campaign AI (Pro) is the 72-hour blast when you take a listing. This page is the always-on farm authority so you get the listing in the first place.",
      },
      {
        q: "Can it sound like me?",
        a: "That is the entire week-one job. If a script could have been written for an agent in another state, it does not ship.",
      },
    ],
    related: ["realtor-seo", "ai-isa", "listing-campaigns"],
    offer: "essential",
    applyQuery: "service=social-media-agent",
    closing:
      "If your farm would not recognize your name on a yard sign, start here. Apply — we only take US agents with a real geography to own.",
  },

  "fsbo-hunter": {
    slug: "fsbo-hunter",
    navLabel: "FSBO Hunter",
    title: "FSBO Hunter for Realtors: Personalized Outreach + CMA | GlydAI",
    description:
      "Hyper-personalized FSBO outreach in your farm. You approve in one click. We send the text and a print-ready CMA automatically. Requires MLS API access.",
    h1: "FSBO outreach that does not sound like every other agent",
    eyebrow: "Essential · MLS required",
    lede: "FSBOs ignore templates. GlydAI researches each owner, writes a one-to-one pitch, attaches a hyper-personalized CMA PDF, and sends it on the channel you choose — after you one-click approve. This requires MLS API access. If your MLS will not grant it, we will tell you on the application call instead of pretending.",
    problem: {
      headline: "You are sending the same “thinking of listing?” text as everyone else",
      body: "For-sale-by-owner is not a numbers game of 400 identical SMS. Owners can smell a mail-merge. Most agents try twice, feel rejected, and go back to buying portal leads. The ones who win show up with a real opinion of the property — a CMA that looks like work — and they do it without spending Sunday night in PowerPoint.",
      bullets: [
        "Generic FSBO scripts with a first name mail-merged in",
        "No CMA attached, so there is no reason to reply",
        "Agents quit after two attempts",
        "Compliance anxiety about texts they did not really read",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "We confirm MLS API access before we promise anything",
        body: "This system is marked MLS-gated for a reason. Without API access we cannot build the property-level CMA and the farm list the way this is designed. If your board, brokerage, or MLS will not allow it, we say no. That honesty is cheaper than a failed onboarding.",
      },
      {
        step: "02",
        title: "Farm FSBO list, researched",
        body: "We work your geography, not the entire metro. Each owner gets research: the property, the likely motivation, what has been sitting, what sold next door. This is the opposite of a skip-traced dump of 2,000 names.",
      },
      {
        step: "03",
        title: "A one-to-one pitch plus a CMA PDF",
        body: "The message references their house, not “your property at this address.” The CMA is print-ready and hyper-personalized — the same family of PDF as the CMA Agent. You are not attaching a Zillow screenshot.",
      },
      {
        step: "04",
        title: "You approve in one click. Then it sends.",
        body: "Nothing goes to an owner until you approve. One click. Then we send on the channel you chose — typically SMS — and we log it. You stay in control of your name and your license. We stay in control of the production.",
      },
      {
        step: "05",
        title: "Follow-up that is not you resetting a reminder",
        body: "FSBO is a sequence, not a single brave text. Approved follow-ups go out on a cadence. Replies can hit the AI ISA so a “maybe we should talk” at 8pm does not wait until Monday.",
      },
    ],
    weekOne: [
      {
        title: "MLS and compliance gate",
        body: "We verify API access, brokerage policy, and how you want to handle TCPA / consent for your state. If we cannot operate cleanly, we stop here.",
      },
      {
        title: "First farm slice, not the whole county",
        body: "We build a tight list, write the first batch of pitches, generate the CMAs, and you approve them. You see the quality before we scale the volume.",
      },
      {
        title: "Send path live",
        body: "Channel, logging, and reply handling connected. By the end of the week, approved messages can actually leave.",
      },
    ],
    includes: [
      "MLS-connected farm FSBO research (where API access exists)",
      "Hyper-personalized pitch copy",
      "Print-ready CMA PDF with each outreach",
      "One-click approval before send",
      "Send on the chosen channel plus logged follow-up",
      "Reply handling into the ISA",
    ],
    notIncluded: [
      "Operating without MLS API access",
      "A guaranteed number of listings",
      "Expired listing outreach unless we scope it separately",
      "Sending anything you have not approved",
    ],
    whoFor: [
      "Farmers who want listings without spending more on portals",
      "Agents willing to click approve, not agents who want fully unsupervised blasting",
      "Producers who already know FSBOs in their farm are being ignored with junk texts",
    ],
    whoNotFor: [
      "Agents whose MLS or broker will not grant API access",
      "Anyone looking for a spray-and-pray skip-trace tool",
    ],
    proofs: [
      {
        stat: "1-click",
        label: "Approval",
        note: "Nothing sends under your name until you approve it.",
      },
      {
        stat: "CMA",
        label: "Attached, not promised",
        note: "Print-ready PDF with the outreach. That is the reason they reply.",
      },
      {
        stat: "MLS",
        label: "API gated",
        note: "We will decline the work rather than fake it.",
      },
    ],
    faqs: [
      {
        q: "What is MLS API access?",
        a: "Permission for a system to read listing and comparable data from your MLS programmatically, not by you screenshotting. Some boards grant it to vendors, some do not, some only through the brokerage. We check this before we take the work.",
      },
      {
        q: "Do I approve every message?",
        a: "Yes. That is the product. One click, then send. If you ever want a looser rule, that is a conversation — the default is you stay in the loop.",
      },
      {
        q: "Is this TCPA compliant?",
        a: "We operate inside a compliance process we agree with you and your broker in week one: who you may contact, how, and with what record. Rules differ by state. We do not run a “just text everyone” mode.",
      },
      {
        q: "Where does the CMA data come from?",
        a: "From the MLS connection that made the page possible, plus the same CMA pipeline we use on the CMA Agent. It is not a Zillow printout with your logo stuck on top.",
      },
      {
        q: "Do you do expireds too?",
        a: "Not by default. Expired and withdrawn outreach can be scoped. It has a different tone and a different compliance picture. Ask on the application call.",
      },
    ],
    related: ["cma-agent", "ai-isa", "lead-qualification"],
    offer: "essential",
    applyQuery: "service=fsbo-hunter",
    closing:
      "If your MLS will grant access and you are willing to one-click approve, this is the FSBO system. If not, we will say so in 24 hours.",
  },

  "realtor-seo": {
    slug: "realtor-seo",
    navLabel: "Realtor SEO",
    title: "Realtor SEO Agent: Rank #1 in Your City | GlydAI",
    description:
      "AI-researched, human-written SEO for realtors. We build and manage the pages that rank you in your city so lead flow is not rented from Zillow.",
    h1: "Own search in your city. Stop renting leads.",
    eyebrow: "Pro",
    lede: "Zillow owns listing search. You can still own “best realtor in [city],” neighborhood guides, and seller queries. GlydAI researches with AI, writes with humans, and manages the pages. This is the Pro SEO Agent — not a plugin, not a 50-page AI dump, not a guaranteed #1 overnight.",
    problem: {
      headline: "You are on a treadmill you do not own",
      body: "Most agents spend the year buying names they do not keep. When the portal bill pauses, the lead flow pauses. SEO is the opposite asset: pages on a site you control, compounding in one city. The industry made this look like “post three blogs a week.” That is how you get thin content nobody ranks and nobody trusts. We do not do that.",
      bullets: [
        "High portal CPL with nothing to show when you stop paying",
        "AI blogs that read like they were written for 40 cities at once",
        "A website that is a business card, not a lead path",
        "No one owning the map of queries in your farm",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "City and farm keyword map",
        body: "We map what people actually type when they want an agent, a seller consult, a neighborhood, or a listing conversation in your geography. Not 10,000 doorway pages. A short inventory of pages that can win — and that you can actually be the answer to.",
      },
      {
        step: "02",
        title: "Page inventory, on purpose",
        body: "Each URL has a job: city authority, neighborhood, seller guide, comparison, listing-side intent. If we cannot say what unique data or local proof goes on that URL, it does not get built. Quality over volume is how this survives algorithm updates.",
      },
      {
        step: "03",
        title: "AI-researched, human-written",
        body: "Research is AI-assisted. The sentences a client reads are written by a human who has the map, your voice, and the local facts. That sentence is the whole differentiator versus every mill promising 60 posts a month.",
      },
      {
        step: "04",
        title: "Technical and internal links on your site",
        body: "Titles, metas, headings, internal links, sitemap, the boring things that make pages eligible to rank. We need access to your site. If you will not give access, this is not the offer — paid ads might be.",
      },
      {
        step: "05",
        title: "Managed, reported, not abandoned",
        body: "SEO that is not refreshed dies. We manage the set, watch Search Console, and put rankings and organic inquiries in the monthly report. Zip-code exclusivity, if you want it, is a sales conversation — we do not publish a public map of taken zips for competitors to scrape.",
      },
    ],
    weekOne: [
      {
        title: "Access and baseline",
        body: "Site access, Search Console, analytics, current rankings. If the site is broken, we say so before we write a word.",
      },
      {
        title: "The map, not the articles",
        body: "You approve the URL inventory and the first city/farm priorities. This is where we kill bad ideas like 500 neighborhood doorway pages.",
      },
      {
        title: "First pages into production",
        body: "Writing starts on the highest-intent URLs. You will see human drafts, not a bulk AI paste for “approval.”",
      },
    ],
    includes: [
      "Keyword and farm map for your city",
      "Human-written pages from AI research",
      "On-page technical and internal linking",
      "Ongoing management",
      "Monthly ranking and organic inquiry reporting",
    ],
    notIncluded: [
      "A guarantee that you will sit at #1 for every query",
      "Ranking “on Zillow”",
      "Link schemes or PBNs",
      "A 10,000-page AI city mill",
    ],
    whoFor: [
      "Agents and teams at a level where a 6–12 month asset makes sense (Pro)",
      "Producers tired of renting every conversation from a portal",
      "Anyone who will give us the website and tell the truth about their farm",
    ],
    whoNotFor: [
      "Agents who want overnight #1 or they cancel",
      "Anyone who will not give site access",
      "Brokers looking for a mass-generated page for every agent in the office without local proof",
    ],
    proofs: [
      {
        stat: "Human",
        label: "Written",
        note: "AI for research. Humans for the page. That is the line we will not cross.",
      },
      {
        stat: "+30.9%",
        label: "GCI",
        note: "GlydAI book of business across the full stack, including organic capture.",
      },
      {
        stat: "Pro",
        label: "Offer",
        note: "SEO Agent lives in Pro because it is a managed asset, not a blog plugin.",
      },
    ],
    faqs: [
      {
        q: "How long until I rank?",
        a: "Useful movement is usually months, not days. New sites and competitive metros take longer. Anyone selling #1 in 14 days is selling you a problem with Google later. We will show you the competitive picture on the application call.",
      },
      {
        q: "Is it AI-written or human-written?",
        a: "Human-written. AI helps research. If a paragraph could have been generated for any city by swapping the name, it does not publish.",
      },
      {
        q: "Do you need my website?",
        a: "Yes. This is not a Medium blog with your face on it. If your site cannot be edited, we talk about that before we take the work.",
      },
      {
        q: "How is this different from paid ads?",
        a: "Ads stop when you stop paying. SEO is slower and then cheaper per conversation if we win the queries. Most serious teams do not treat them as enemies. This page is the compounding layer.",
      },
      {
        q: "What about zip-code exclusivity?",
        a: "Available as a Pro conversation. We do not publish a public directory of which zips are taken. That becomes a scrape target and a thin-page farm.",
      },
      {
        q: "Do you guarantee #1?",
        a: "No. “Rank #1 in your city” is the job we work. It is not a contractual placement. Markets, history, and the site you bring us all matter.",
      },
    ],
    related: ["social-media-agent", "listing-campaigns", "cma-agent"],
    offer: "pro",
    applyQuery: "service=realtor-seo",
    closing:
      "If you want lead flow that still exists when the portal bill is paused, this is the Pro system. Apply — we only take US agents we can actually rank for a real city.",
  },

  "cma-agent": {
    slug: "cma-agent",
    navLabel: "CMA Agent",
    title: "CMA Agent for Realtors: Print-Ready, Hyper-Personalized PDFs | GlydAI",
    description:
      "Drop the address. Get a print-ready, hyper-personalized CMA PDF — used in listing appointments and FSBO outreach. Built and managed by GlydAI.",
    h1: "CMAs that look like a listing presentation, not a spreadsheet",
    eyebrow: "Pro",
    lede: "A CMA is how you win the listing. GlydAI’s are hyper-personalized, print-ready PDFs — comps, narrative, your brand — so you can walk into the appointment or send it with FSBO outreach without building slides at 11pm. This is Pro, and it is the same CMA family that powers FSBO Hunter.",
    problem: {
      headline: "Your CMA is either late, ugly, or both",
      body: "Sellers compare you to the agent who showed up with a document that looked like work. Many CMAs are a spreadsheet export, a portal printout, or something assembled after the kids are asleep. Appraisal issues already delay a chunk of transactions. Walking in with a weak number and a weaker story is how you lose the listing before the sign goes up.",
      bullets: [
        "Hours per CMA for a document that still looks generic",
        "No narrative — just comps on a page",
        "FSBO outreach with nothing attached worth opening",
        "Brand that disappears the moment you export from the MLS",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "Brand and farm defaults",
        body: "We load your identity: logo, colors, how you talk about value, which farm rules matter (HOAs, flood, new construction, luxury). The PDF should look like your office produced it, not a vendor demo.",
      },
      {
        step: "02",
        title: "Address in",
        body: "You drop the subject property. We are not asking you to operate a CMA workstation. The point of a managed agent is that production is on us after the address exists.",
      },
      {
        step: "03",
        title: "Comps plus a narrative",
        body: "Comps are the floor. The page that wins the listing is the story: why these comps, what the seller’s property actually is, what the market will and will not do. Hyper-personalized means the PDF could not be reused on the house next door without being wrong.",
      },
      {
        step: "04",
        title: "Print-ready PDF, not a web preview",
        body: "It has to survive a kitchen-table printout and a listing appointment packet. Layout, type, and charts are designed for paper as well as email.",
      },
      {
        step: "05",
        title: "Used by FSBO Hunter and listing pitches",
        body: "The CMA Agent is not a toy PDF. It is the document attached to FSBO outreach and the document you carry into a listing presentation. One pipeline, two uses, no double work.",
      },
    ],
    weekOne: [
      {
        title: "Brand kit and sample",
        body: "We take your current “best CMA” and your brand. You get a sample PDF on a real address in your farm. You mark it up. That markup is the template.",
      },
      {
        title: "Data path",
        body: "We confirm how comps come in for your market (including MLS where required). If we cannot produce a CMA you would sign your name to, we do not pretend.",
      },
      {
        title: "Production on",
        body: "After the sample is approved, new addresses can run through the same pipeline.",
      },
    ],
    includes: [
      "Branded, print-ready CMA PDF template",
      "Hyper-personalized comps and narrative",
      "Production on dropped addresses",
      "Use inside FSBO Hunter and listing appointments",
    ],
    notIncluded: [
      "A licensed appraisal",
      "A replacement for your legal CMA disclosure if your broker requires a specific form — we work with that, we do not override it",
      "Guaranteed list prices that “win against the market”",
    ],
    whoFor: [
      "Listing-side agents who still build CMAs by hand",
      "Farmers using FSBO Hunter who need the PDF to be real",
      "Teams that want one branded standard instead of five different ugly exports",
    ],
    whoNotFor: [
      "Agents whose broker mandates a CMA tool they already love and will not replace",
      "Anyone who wants this as a consumer-facing “what is my home worth” widget for fun traffic",
    ],
    proofs: [
      {
        stat: "PDF",
        label: "Print-ready",
        note: "Designed for the kitchen table, not just a screen.",
      },
      {
        stat: "2 uses",
        label: "Listing + FSBO",
        note: "Same pipeline. No double production.",
      },
      {
        stat: "Pro",
        label: "Included",
        note: "CMA Agent is part of the Pro stack.",
      },
    ],
    faqs: [
      {
        q: "Where does the data come from?",
        a: "Your market’s listing data path — MLS where we have access, plus the subject details you provide. We do not scrape a consumer portal and call it a CMA.",
      },
      {
        q: "How personalized is it?",
        a: "Enough that the next-door house would need a different narrative. If a page is just the city name swapped, it does not ship. That is the same quality bar we use on SEO pages.",
      },
      {
        q: "What is the turnaround?",
        a: "After week-one template lock, production is measured in hours for a normal address, not days. We set the exact expectation on the implementation call based on your volume.",
      },
      {
        q: "Can I edit it?",
        a: "Yes. You should be able to override a comp or a sentence before it goes in front of a seller. You are the licensee in the room.",
      },
      {
        q: "Is this tied to FSBO Hunter?",
        a: "It can stand alone for listing appointments. Combined with FSBO Hunter, the same PDF is what makes outreach worth opening.",
      },
    ],
    related: ["fsbo-hunter", "listing-campaigns", "realtor-seo"],
    offer: "pro",
    applyQuery: "service=cma-agent",
    closing:
      "If your listing presentations still start in a spreadsheet, apply for Pro and we will show you a sample on a real address in your farm.",
  },

  "listing-campaigns": {
    slug: "listing-campaigns",
    navLabel: "Listing Campaigns",
    title: "Listing Campaign AI: Flyers, Social, Email from the Agreement | GlydAI",
    description:
      "Drop the listing agreement. We create open house flyers, social campaigns, and email blasts into your nurture sequence — automatically.",
    h1: "Sign the listing. The campaign should already be running.",
    eyebrow: "Pro",
    lede: "The first 72 hours after a listing agreement decide whether you get a bidding war or a price cut. Drop the signed agreement. GlydAI produces open house flyers, social, and email to your nurture list. You do not open Canva. You do not invent a campaign at 11pm because the seller asked what you are doing for them.",
    problem: {
      headline: "Listing launches are still a scramble",
      body: "Sellers judge you on marketing they can see. If the flyer is late, the social is a single MLS photo, and the email list never got the blast, they feel it. You already did the hard part — you won the listing. Then the campaign is chaos because every asset is handmade, every time, while you are also doing showings.",
      bullets: [
        "Canva at midnight after the listing appointment",
        "Open houses with no real promotion",
        "Email list sitting unused",
        "Sellers comparing your marketing to the last agent’s promises",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "Drop the signed agreement",
        body: "That file is the trigger. We pull property facts, dates, and anything the agreement already knows. You should not retype the address into five tools.",
      },
      {
        step: "02",
        title: "Facts and photos in one place",
        body: "We assemble what the campaign needs: beds, story, position in the farm, photos you already have. Missing photo sets get flagged instead of shipping a blank flyer.",
      },
      {
        step: "03",
        title: "Flyers and social kit",
        body: "Open house flyers and a social set that matches your brand — not a template with the gold bar slightly wrong. Copy is written for that house, that farm, that weekend.",
      },
      {
        step: "04",
        title: "Email blast into nurture",
        body: "Your sphere and parked leads should hear about a new listing from you, not from the MLS email they already ignore. We blast the list you actually own, in your voice.",
      },
      {
        step: "05",
        title: "Hand off to the scheduler",
        body: "Dates on the agreement feed Open House Scheduler. Reminders to you and the client are a different system on purpose: campaigns get people interested, reminders get them there.",
      },
    ],
    weekOne: [
      {
        title: "Brand and sample listing",
        body: "We take one past or current listing and produce the full kit as the quality bar. You mark up flyer, social, and email before anything is automated.",
      },
      {
        title: "Agreement intake",
        body: "How you send the file, what we extract, what we always ask you to confirm (times, disclaimers, broker required lines).",
      },
      {
        title: "Nurture list connected",
        body: "Email does not go to a mystery audience. We connect the list that is actually yours.",
      },
    ],
    includes: [
      "Intake from the signed listing agreement",
      "Open house flyers",
      "Social campaign kit",
      "Email blast to your nurture / sphere",
      "Listing copy in your brand",
      "Handoff into Open House Scheduler",
    ],
    notIncluded: [
      "Paid media budget (boosting is extra unless scoped)",
      "Print-shop mailing fulfillment unless we scope it",
      "Staging, photography, or drone",
    ],
    whoFor: [
      "Listing agents whose sellers expect a marketing plan they can see",
      "Teams tired of rebuilding the same kit for every new sign",
      "Producers who already have a sphere worth emailing",
    ],
    whoNotFor: [
      "Agents with no listings and no sphere who actually need farm SEO and social first",
      "Brokers who want a public IDX brochure mill for 200 agents with no brand control",
    ],
    proofs: [
      {
        stat: "72h",
        label: "Launch window",
        note: "The campaign is designed for the first hours after the agreement, not “sometime this month.”",
      },
      {
        stat: "3 assets",
        label: "Flyer, social, email",
        note: "One intake. Three seller-visible outputs.",
      },
      {
        stat: "Pro",
        label: "Stack",
        note: "Listing Campaign AI ships with Pro, next to CMA and scheduling.",
      },
    ],
    faqs: [
      {
        q: "What file do I send?",
        a: "The signed listing agreement is the default trigger. If your broker uses a packet, we will tell you exactly which PDF in week one.",
      },
      {
        q: "How fast is the kit?",
        a: "After the template is locked, a normal listing kit is a same-day / next-day production, not a two-week design project. Volume spikes get an honest queue on the report.",
      },
      {
        q: "What about brand guidelines?",
        a: "We lock them in the sample week. Broker-required logos, fair housing lines, and office disclaimers go in the template so you are not remembering them at 11pm.",
      },
      {
        q: "Does this include the open house reminders?",
        a: "Promotion is this page. Reminders are Open House Scheduler. They are meant to run together. You can use this without the scheduler; you should not.",
      },
      {
        q: "Can the seller see proof?",
        a: "Yes. That is half the point. You should be able to show flyers, posts, and the email as the marketing you promised in the listing appointment.",
      },
    ],
    related: ["open-house-scheduler", "cma-agent", "social-media-agent"],
    offer: "pro",
    applyQuery: "service=listing-campaigns",
    closing:
      "If you already win listings and then scramble, this is the 72-hour system. Apply for Pro and bring a recent agreement as the sample.",
  },

  "open-house-scheduler": {
    slug: "open-house-scheduler",
    navLabel: "Open House Scheduler",
    title: "Open House Scheduler + Reminder Agent for Realtors | GlydAI",
    description:
      "Drop the signed agreement. We pull the timeline and text reminders to you and the client so show-up rates actually go up.",
    h1: "Open houses that people actually show up to",
    eyebrow: "Pro",
    lede: "You already do the open house. The miss is the reminder stack. GlydAI pulls dates from the signed agreement and texts you and the client on a timeline — no new calendar app, no “sorry we forgot” the morning of. Scheduling AI is Pro, and it is built to sit next to Listing Campaigns.",
    problem: {
      headline: "The open house is on the calendar. Nobody is on the doorstep.",
      body: "Show-up is a reminder problem more often than a marketing problem. Sellers think you went quiet. Buyers meant to come and then did not. You meant to text the list and then had three back-to-back appointments. The profession already demands nights and weekends. Forgetting a reminder is how a working weekend becomes an empty house and a tense seller.",
      bullets: [
        "Low show-up on otherwise decent listings",
        "Manual reminders that slip on busy listing weekends",
        "Clients who feel uninformed between agreement and open house",
        "No log of who was reminded when — just a gut feeling",
      ],
    },
    howItWorks: [
      {
        step: "01",
        title: "Drop the signed agreement",
        body: "Same intake idea as Listing Campaigns. The agreement already has dates, or we extract a timeline and confirm it with you once. You should not be rebuilding the event in a new SaaS.",
      },
      {
        step: "02",
        title: "AI pulls the listing-to-open-house timeline",
        body: "Photos due, copy due, flyer out, social out, reminder sequence, day-of. We turn that into a schedule instead of a sticky note.",
      },
      {
        step: "03",
        title: "Reminders to you and the client",
        body: "Sellers get a professional cadence so they are not texting “are we still doing Saturday?” Agents get the operational pings so the house is actually staffed and the packet is actually there. Two audiences, two tones.",
      },
      {
        step: "04",
        title: "SMS, not another app",
        body: "The people you work with already live in text. We do not make a seller download your scheduling product. You do not get a new dashboard to babysit. If email is required by the broker, we can add it — text is the default because it is what gets read on a Saturday morning.",
      },
      {
        step: "05",
        title: "Logged in the monthly report",
        body: "Reminders sent, confirmations, no-shows you told us about. Over a quarter you can see whether show-up is actually moving. That is the only way this is more than a nicer calendar.",
      },
    ],
    weekOne: [
      {
        title: "Timeline template for your business",
        body: "Your open houses are not all Sunday 1–3. We write the cadence you actually run, including weekday evenings if that is your market.",
      },
      {
        title: "Consent and numbers",
        body: "Which numbers we text, how clients opt in, what your broker allows. This is not a grey-area blaster.",
      },
      {
        title: "First live listing",
        body: "We run the reminder stack on one real open house with you watching. Then we turn it into the default.",
      },
    ],
    includes: [
      "Timeline parsed from the signed agreement",
      "SMS reminder cadence to agent and client",
      "Day-of operational pings",
      "Logging in the monthly report",
      "Works with Listing Campaign AI",
    ],
    notIncluded: [
      "A public consumer booking website unless we scope it",
      "Staffing the open house",
      "Guaranteed show-up counts — we raise rates, we do not control traffic and weather",
    ],
    whoFor: [
      "Listing agents who run real open houses and are tired of empty rooms",
      "Teams that drop balls on weekends because the calendar is human memory",
      "Anyone already using Listing Campaigns who needs the second half",
    ],
    whoNotFor: [
      "Agents who do not hold open houses",
      "People looking for a consumer-facing showing marketplace like a portal",
    ],
    proofs: [
      {
        stat: "SMS",
        label: "Default channel",
        note: "Read on Saturday morning. No new app for the seller.",
      },
      {
        stat: "2 audiences",
        label: "You + client",
        note: "Operational pings for you. Professional cadence for them.",
      },
      {
        stat: "+30.9%",
        label: "GCI",
        note: "GlydAI book of business on the full Pro stack, including listing ops.",
      },
    ],
    faqs: [
      {
        q: "SMS or email?",
        a: "SMS is the default because it gets read. Email is available when a broker or client requires it. We do not make this a push-notification product.",
      },
      {
        q: "What about opt-in and compliance?",
        a: "Clients you are already in a listing relationship with are a different picture than cold FSBO outreach. We set the rules with you and your broker in week one and we log what we send.",
      },
      {
        q: "Multiple open houses on one listing?",
        a: "Yes. The timeline can carry a first, second, and broker preview. You confirm the dates; we run the cadence.",
      },
      {
        q: "Does this work without Listing Campaigns?",
        a: "Yes. You can run reminders without the flyer kit. Together they are the 72-hour listing launch. Separate they are still useful.",
      },
      {
        q: "Will you text people at 10pm?",
        a: "Not by default. Quiet hours are part of the cadence. After-hours is for the ISA on new leads, not for nagging a seller at night.",
      },
    ],
    related: ["listing-campaigns", "ai-isa", "lead-qualification"],
    offer: "pro",
    applyQuery: "service=open-house-scheduler",
    closing:
      "If open houses are already on your calendar and show-up is a coin flip, this is the reminder layer. Apply for Pro.",
  },
};

export const pillarList: Pillar[] = PILLAR_ORDER.map((slug) => pillars[slug]);

export function getPillar(slug: string): Pillar | undefined {
  return pillars[slug as PillarSlug];
}

export function getRelated(pillar: Pillar): Pillar[] {
  return pillar.related.map((slug) => pillars[slug]);
}
