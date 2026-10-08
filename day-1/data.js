window.SECTOR=window.SECTOR||{days:{}};
window.SECTOR.days[1]={
 "n": 1,
 "eyebrow": "SecTor 2026 · Day 1 · Tue Oct 6 · MTCC Toronto · AI x Cloud Security Summit",
 "h1": "AI changed the <em>speed</em> of the attack.",
 "lead": "My notes from ten sessions on nation-state tradecraft, autonomous agents, cloud hardening, deception, security economics and the question of who owns an AI system. Get the gist in two minutes, then test yourself.",
 "heroExtra": "<div class=\"thenNow\" aria-label=\"Then and now, from the opening keynote\">\n  <div class=\"tn\"><span class=\"yr\">2010 · Stuxnet</span><b>~$300M + 4 zero-days</b><p>Two governments to reach a Siemens S7 controller.</p></div>\n  <div class=\"arrow\" aria-hidden=\"true\"><svg class=\"i\"><use href=\"#i-arrow\"/></svg></div>\n  <div class=\"tn now\"><span class=\"yr\">2026 · Same S7 family</span><b>AI-written Python</b><p>Five US agencies warned of unattributed attacks using scripts an AI model wrote.</p></div>\n</div>\n<p class=\"src-line\"><span class=\"src\"><svg class=\"i\"><use href=\"#i-ext\"/></svg>Figures from the official keynote abstract. The 2026 warning: <a href=\"https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-231a\" target=\"_blank\" rel=\"noopener\">CISA AA26-231A</a></span></p>",
 "howto": [
  [
   "2 MIN",
   "Read the brief",
   "#brief",
   "bolt"
  ],
  [
   "15 MIN",
   "Go through the sessions",
   "#sessions",
   "note"
  ],
  [
   "5 MIN",
   "Take the quiz",
   "#quiz",
   "q"
  ]
 ],
 "official": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
 "searchHint": "Search notes, speakers or topics: canary, SSRF, agent identity…",
 "brief": {
  "lead": "AI security is turning out to be less a new category of security and more what happens when existing cloud and security problems start happening at machine speed.",
  "ideas": [
   {
    "icon": "bolt",
    "eyebrow": "Speed",
    "title": "Minutes, not days",
    "text": "Reconnaissance, privilege escalation and data access that took hours or days can now run end to end in minutes."
   },
   {
    "icon": "badge",
    "eyebrow": "Identity",
    "title": "Agents nobody tracks",
    "text": "We're deploying more agents without a mature way to inventory, identify and govern them."
   },
   {
    "icon": "layers",
    "eyebrow": "Fundamentals",
    "title": "Basics matter more",
    "text": "Segmentation, least privilege, isolation, logging and blast-radius reduction are possibly more important than ever."
   }
  ],
  "stats": [
   {
    "v": "~13 min",
    "l": "Average time from a low-privileged cloud key to admin",
    "from": "Tracebit",
    "src": "presented"
   },
   {
    "v": "99.4%",
    "l": "AI attacks caught before the first critical action",
    "from": "Tracebit",
    "src": "presented"
   },
   {
    "v": "~$500",
    "l": "Cost of a full agent-driven intrusion demo",
    "from": "RedWraith demo, Zscaler",
    "src": "presented"
   },
   {
    "v": "~3 min",
    "l": "For an autonomous chain's critical steps",
    "from": "Cloud hardening, Native",
    "src": "presented"
   }
  ],
  "quote": {
   "text": "You are not defending against China: you are defending against $250 a month.",
   "by": "Matt Johansen, Founder & CEO, Vulnerable U"
  },
  "afterQuote": "That line summed up the day. The worry isn't only whether a nation-state has advanced capability. Much of that capability is now cheap and available to anyone.",
  "agendaLabel": "The day at a glance · Room 718AB"
 },
 "sessionsHead": {
  "title": "The ten sessions",
  "lead": "Each card separates what the speakers presented from my own analysis, with key statistics and their sources, an Identity Lens where it's relevant, and primary resources. Hover a concept to see its definition."
 },
 "takeaways": {
  "title": "Seven things to remember",
  "lead": "The ideas that kept coming back across the day, with the sessions they came from.",
  "items": [
   {
    "icon": "bolt",
    "title": "Speed is the real change",
    "text": "AI doesn't invent every technique. It makes existing ones faster, cheaper and easier to chain together, often finishing before a person has read the first alert.",
    "sessions": [
     "s1",
     "s2",
     "s5"
    ]
   },
   {
    "icon": "layers",
    "title": "Fundamentals matter more",
    "text": "Segmentation, identity, least privilege, isolation and smaller blast radius kept coming up because AI makes weak architecture easier to exploit.",
    "sessions": [
     "s2",
     "s4"
    ]
   },
   {
    "icon": "badge",
    "title": "Agents need identity",
    "text": "With thousands or millions of agents, we need to know what each one is, what it can access, who owns it and how to switch it off.",
    "sessions": [
     "s3",
     "s7",
     "s10"
    ]
   },
   {
    "icon": "radar",
    "title": "Deception gets interesting",
    "text": "Canaries and decoys work unusually well when the attacker is autonomous and explores everything. In Tracebit's tests they fired before the first critical action in 99.4% of runs.",
    "sessions": [
     "s5"
    ]
   },
   {
    "icon": "coins",
    "title": "Security economics are changing",
    "text": "Falling model costs make continuous testing realistic for attackers and defenders alike. A full intrusion demo cost about $500.",
    "sessions": [
     "s6",
     "s4"
    ]
   },
   {
    "icon": "shield",
    "title": "Patching can't be the whole plan",
    "text": "When discovery to exploitation is measured in hours, reduce what's reachable and what a breach can touch, and treat patch speed as one control among several.",
    "sessions": [
     "s4",
     "s1"
    ]
   },
   {
    "icon": "scale",
    "title": "Governance can't be an afterthought",
    "text": "The technology is moving faster than ownership models. Who owns an autonomous system, and who can switch it off, is a security question.",
    "sessions": [
     "s8",
     "s10",
     "s7"
    ]
   }
  ],
  "quote": {
   "text": "The day wasn't about “AI security” as a separate thing. It was about cloud, identity and software security operating at AI speed.",
   "by": ""
  }
 },
 "enterprise": {
  "lead": "How I'd translate Day 1 into work for a security program. My own analysis, grounded in the sessions linked under each item.",
  "items": [
   {
    "title": "Inventory AI agents and models",
    "text": "Build a registry of the agents, models and AI tools in use, including shadow AI, with an accountable owner for each. Everything else depends on it.",
    "sessions": [
     "s3",
     "s7"
    ]
   },
   {
    "title": "Treat agents as identities",
    "text": "Give each agent its own credential, permissions scoped to its task, an audit trail that separates agent from human actions, and a tested way to revoke it.",
    "sessions": [
     "s3",
     "s10"
    ]
   },
   {
    "title": "Reduce blast radius",
    "text": "Separate production from non-production, apply least privilege, and block destructive actions by default for any automation or agent.",
    "sessions": [
     "s2",
     "s4"
    ]
   },
   {
    "title": "Harden workload credentials",
    "text": "Require IMDSv2 or equivalent, remove long-lived keys, scope workload roles tightly, and alert when credentials are used from unexpected places.",
    "sessions": [
     "s2",
     "s5"
    ]
   },
   {
    "title": "Plant canaries in the cloud",
    "text": "Decoy keys and resources give an early, high-confidence signal against autonomous attackers. Pre-approve the response so it fires inside the ten-minute window.",
    "sessions": [
     "s5"
    ]
   },
   {
    "title": "Test continuously and map attack paths",
    "text": "Use supervised AI red teaming against exposed paths instead of relying on an annual pentest, and prioritize the fixes that break the most chains.",
    "sessions": [
     "s6",
     "s9"
    ]
   },
   {
    "title": "Assume attacks outrun human response",
    "text": "Automate containment for high-confidence signals and keep people in the loop for irreversible actions.",
    "sessions": [
     "s2",
     "s7"
    ]
   }
  ]
 },
 "footer": {
  "title": "SecTor 2026 · Day 1 · AI x Cloud Security Summit",
  "place": "Tuesday, October 6, 2026 · Metro Toronto Convention Centre, Room 718AB · Emcee: Francis Odum, SACR"
 },
 "linkedin": {
  "Matt Johansen": "https://www.linkedin.com/in/matthewjohansen/",
  "Gal Ordo": "https://www.linkedin.com/in/galordo/",
  "Eric Broda": "https://www.linkedin.com/in/ericbroda/",
  "Rachel Clark": "https://www.linkedin.com/in/rachellaurenclark/",
  "Brian Deitch": "https://www.linkedin.com/in/cloud-god/",
  "Alessandro Brucato": "https://www.linkedin.com/in/alessandro-brucato/",
  "Yigael Berger": "https://www.linkedin.com/in/yigaelberger/",
  "Helen Oakley": "https://www.linkedin.com/in/helen-oakley/",
  "Francis Odum": "https://www.linkedin.com/in/francis-odum-0a8673100/",
  "Ian Paterson": "https://www.linkedin.com/in/ianlpaterson/",
  "Guillaume Ross": "https://www.linkedin.com/in/guillaumeross/",
  "Kunal Modasiya": "https://www.linkedin.com/in/kunalmodasiya/",
  "Jay Thurston": "https://www.linkedin.com/in/jay-thurston-365566/",
  "Fernando Tucci": "https://www.linkedin.com/in/jftucci24/",
  "Ryoji Betchaku": "https://www.linkedin.com/in/ryoji-betchaku/",
  "Ali Dehghantanha": "https://www.linkedin.com/in/alide/",
  "Iain Paterson": "https://www.linkedin.com/in/iainpaterson/",
  "Olivera Zatezalo": "https://www.linkedin.com/in/oliverazatezalo/"
 },
 "sessions": [
  {
   "id": "s1",
   "time": "9:10",
   "end": "9:35",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "globe",
   "fmt": "Keynote",
   "short": "Nation-state capability",
   "sub": "Cheap, scalable offensive AI",
   "cats": [
    "ai",
    "offensive"
   ],
   "title": "The Commoditization of the Nation-State Hacker",
   "org": "Vulnerable U",
   "speakers": [
    [
     "Matt Johansen",
     "Founder & CEO, Vulnerable U"
    ]
   ],
   "summary": "Capabilities we associate with nation-state attackers are becoming cheap and easy to access.",
   "covered": [
    "Open-weight models can be used for offensive work without the restrictions some frontier models have.",
    "Anthropic's threat intelligence reporting this year and the Hugging Face incident, where a very large swarm of agents operated at a scale no human team could match, show how serious AI-enabled activity has become.",
    "The vulnerability lifecycle is compressing: bugs are found, exploited and chained much faster. Project Glasswing and a two-hour remediation SLA for new CVEs came up as the direction of travel.",
    "If anyone can write code and use AI to make fixes, fast fixing can create a new wave of bugs. Attackers may already be exploiting a flaw before it is public.",
    "Putting an agent in a sandbox doesn't make it safe. A guardrails.md file is not a security architecture; segmentation and normal controls still stop small weaknesses being chained.",
    "Tools like Nmap were always broadly available. Getting defenders the best AI tools quickly may beat keeping them behind a velvet rope."
   ],
   "learned": [
    "The things that used to separate nation-state operators from everyone else (budget, specialist teams, custom tooling) are eroding. Intent and persistence now matter more than money.",
    "Speed hits patching first. If exploitation follows disclosure within hours, monthly or even weekly patch cycles leave a long exposure window.",
    "Agent sandboxes and guardrail prompts are useful, but they aren't security boundaries. Segmentation, least privilege and egress limits are still what stop small weaknesses being chained."
   ],
   "why": "The question shifts from who has the capability to who has the intent. Any motivated attacker with a subscription can now run tradecraft that used to need a funded team, so assumptions about an unsophisticated attacker need revisiting.",
   "concepts": [
    "openweight",
    "machinespeed",
    "segmentation"
   ],
   "program": [
    "Opened with a contrast: Stuxnet in 2010 needed two governments, an estimated $300M and four zero-days to reach a Siemens S7 controller. In August 2026, five US agencies warned of an unattributed actor going after the same S7 family with Python scripts an AI model wrote.",
    "Documented AI-powered attacks, cases of AI lab agents going rogue, and what open-weight models can do offensively once guardrails are removed.",
    "Which security controls held up against these attacks and which failed.",
    "Practical recommendations teams can act on the following Monday."
   ],
   "ask": "If an attacker could chain three of our minor findings together in minutes, which three would they pick?",
   "links": [
    {
     "u": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-231a",
     "t": "CISA AA26-231A: Defending Against an Active Threat to Siemens S7 Series PLCs",
     "d": "The August 2026 joint advisory behind the keynote's opening contrast with Stuxnet.",
     "k": "Advisory"
    },
    {
     "u": "https://www.anthropic.com/glasswing",
     "t": "Anthropic: Project Glasswing",
     "d": "The program using frontier AI to find vulnerabilities in critical software.",
     "k": "Program"
    },
    {
     "u": "https://www.anthropic.com/research/glasswing-initial-update",
     "t": "Anthropic: Project Glasswing, an initial update",
     "d": "Anthropic's first published results from the program.",
     "k": "Research"
    },
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access",
     "t": "Google Threat Intelligence: Adversaries leverage AI for vulnerability exploitation and initial access",
     "d": "Threat research on how attackers are using AI across the intrusion lifecycle.",
     "k": "Threat research"
    },
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai",
     "t": "GTIG AI Threat Tracker: From prompting to autonomy",
     "d": "How adversary use of AI is moving from prompting to autonomous workflows.",
     "k": "Threat research"
    }
   ],
   "takeaway": "“Nation-state” is becoming less about secret capability and more about intent, patience, compute and access to cheap tools.",
   "stats": [
    {
     "v": "~$300M",
     "l": "Estimated cost of Stuxnet in 2010, which also needed four zero-days",
     "src": "program"
    },
    {
     "v": "2 h",
     "l": "Remediation SLA for new CVEs discussed alongside Project Glasswing",
     "src": "presented"
    }
   ]
  },
  {
   "id": "s2",
   "time": "9:40",
   "end": "10:05",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "cloud",
   "fmt": "Sponsored talk",
   "short": "Cloud hardening",
   "sub": "Architecture becomes the control plane",
   "cats": [
    "cloud",
    "identity",
    "ai"
   ],
   "title": "Back to the Fundamentals: Cloud Hardening in the Age of AI",
   "org": "Native",
   "speakers": [
    [
     "Gal Ordo",
     "Co-Founder & CPO, Native"
    ]
   ],
   "summary": "AI security is cloud security, and the attack now moves faster than detection.",
   "covered": [
    "Detection and response worked when attackers needed time to move. An autonomous chain that finishes its key steps in about three minutes outruns a slower detection process.",
    "The Zealot attack chain (below). No single technique was new; what stood out was how quickly an agent connected the steps.",
    "Agents can take actions their user didn't expect, including destructive changes in production when they hold those permissions. The Hugging Face incident came up again here.",
    "The answer was architecture rather than another AI-specific control: separate prod and non-prod, reduce internet exposure, enforce strong identity and permission boundaries, and block destructive agent actions by default."
   ],
   "learned": [
    "Almost every step in the Zealot chain is an old technique. What's new is that an agent connects them without pausing, so the gaps between alerts disappear.",
    "Detection-led programs assume dwell time. When a chain finishes before the first alert is triaged, the architecture has to deny the path instead.",
    "Agent permissions are standing permissions. Whatever an agent can do in production, anyone who can steer it can do too."
   ],
   "why": "When response time is longer than attack time, detection becomes a forensic tool rather than a defence. The controls that still work are the ones already in place before the attack starts.",
   "concepts": [
    "ssrf",
    "imds",
    "blastradius",
    "leastpriv",
    "machinespeed",
    "workloadidentity",
    "imdsv2",
    "privesc"
   ],
   "program": [
    "Nearly every enterprise AI system runs on cloud compute, reads cloud data and acts through a cloud identity.",
    "AI-driven attackers discover, exploit and move laterally at machine speed, often finishing before a human responds to the first alert.",
    "AI workloads are non-deterministic: agents decide at runtime, inherit standing permissions and find unintended paths through the architecture.",
    "Argued for security by design at the infrastructure level so exploit paths don't exist, with a model for when to prevent versus contain and how to sequence a 2027 hardening program."
   ],
   "ask": "Which of our agents or service identities could make a destructive change in production today?",
   "links": [
    {
     "u": "https://unit42.paloaltonetworks.com/autonomous-ai-cloud-attacks/",
     "t": "Unit 42: Zealot, autonomous AI cloud attacks",
     "d": "Palo Alto Networks' research on the Zealot proof of concept and its attack chain.",
     "k": "Research"
    },
    {
     "u": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-metadata-transition-to-version-2.html",
     "t": "AWS: Transition to IMDSv2",
     "d": "How to require session tokens for the EC2 metadata service and block the classic SSRF path.",
     "k": "Docs"
    },
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/ai-assisted-vulnerability-management",
     "t": "Mandiant: A blueprint for AI-assisted vulnerability management",
     "d": "Guidance on combining AI speed with deterministic controls and human validation.",
     "k": "Guidance"
    },
    {
     "u": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
     "t": "OWASP Top 10 for Agentic Applications (2026)",
     "d": "Risk taxonomy for agents that plan, act and use tools.",
     "k": "Standard"
    }
   ],
   "takeaway": "If the attack moves faster than your detection and response, prevention and blast-radius reduction have to do more of the work.",
   "chain": {
    "steps": [
     "Reconnaissance",
     "SSRF + metadata service",
     "Credential theft",
     "Cloud enumeration",
     "Privilege escalation",
     "Data exfiltration"
    ],
    "note": "Zealot attack chain, as walked through in the session"
   },
   "stats": [
    {
     "v": "~3 min",
     "l": "For an autonomous chain to complete its critical steps",
     "src": "presented"
    }
   ],
   "identity": {
    "points": [
     "SSRF against the metadata service is a credential-theft attack: the prize is the workload's temporary cloud credentials. On AWS, enforcing IMDSv2 closes the classic path.",
     "Workload identities often carry broader standing permissions than any person. Scope each workload role to what that service needs, and alert when its credentials are used from somewhere unexpected.",
     "Cloud privilege escalation is usually an IAM problem. Review who can attach policies, pass roles or create access keys.",
     "For every AI agent in production: which identity does it act through, and can that identity make destructive changes?"
    ]
   }
  },
  {
   "id": "s3",
   "time": "10:10",
   "end": "10:35",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "badge",
   "fmt": "Fireside chat",
   "short": "Agent identity",
   "sub": "Trust and governance at scale",
   "cats": [
    "ai",
    "identity",
    "governance"
   ],
   "title": "Securing Autonomous Agents: Identity, Trust, and Control at Scale",
   "org": "Broda Group / SKADI",
   "speakers": [
    [
     "Eric Broda",
     "President, Broda Group Software"
    ],
    [
     "Rachel Clark",
     "CEO & Founder, SKADI Cyber Defense"
    ]
   ],
   "summary": "Agents are multiplying faster than our ability to inventory and govern them.",
   "covered": [
    "Organizations may soon run thousands or millions of agents, with no reliable way to inventory which ones are operating.",
    "Agent-to-agent interactions could be a source of better detection.",
    "Govern agents the way we govern people: identity, trust, standards and accountability need to exist before something can scale safely.",
    "The toaster analogy: standards are why you can trust a toaster not to burn your house down. Agents need a consistent way to define what they may do and under what conditions."
   ],
   "learned": [
    "Agents are a new kind of non-human identity, but they're less predictable than service accounts: they choose actions at runtime and call other agents.",
    "An agent registry comes first. You can't scope, monitor or revoke what you haven't inventoried.",
    "Agent-to-agent traffic is both a new trust boundary and a new place to observe behaviour."
   ],
   "why": "An agent holding credentials is an identity. If it isn't inventoried, it can't be reviewed, revoked or traced when something goes wrong. It's the orphaned service account problem at a much larger scale.",
   "concepts": [
    "agentidentity",
    "leastpriv",
    "accountability",
    "nhi",
    "aiagent"
   ],
   "program": [
    "Agents run continuously, touch many systems at once, decide independently and talk to other agents at machine speed, which strains identity models built for people.",
    "Requirements: each agent uniquely identifiable, its actions traceable, a well-defined agent registry, and clear ownership for governance at scale.",
    "Grounded in real deployments and the risks seen in them.",
    "Aimed to give a blueprint for balancing innovation and control as agents become active participants in enterprise operations."
   ],
   "ask": "Could we list every agent or automation that holds credentials in our environment, and who owns each one?",
   "links": [
    {
     "u": "https://cloudsecurityalliance.org/artifacts/securing-autonomous-ai-agents",
     "t": "Cloud Security Alliance: Securing Autonomous AI Agents",
     "d": "Survey research on agent identity, IAM readiness, discovery and oversight.",
     "k": "Report"
    },
    {
     "u": "https://cloudsecurityalliance.org/artifacts/identity-and-access-gaps-in-the-age-of-autonomous-ai",
     "t": "Cloud Security Alliance: Identity and Access Gaps in the Age of Autonomous AI",
     "d": "Where current IAM practice falls short for autonomous agents.",
     "k": "Report"
    },
    {
     "u": "https://cloudsecurityalliance.org/blog/2026/07/27/beyond-human-identity-a-runtime-governance-model-for-autonomous-ai-agents-in-the-enterprise-cloud",
     "t": "CSA: Beyond Human Identity",
     "d": "A runtime governance model for agents as cloud principals.",
     "k": "Guidance"
    },
    {
     "u": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
     "t": "OWASP Top 10 for Agentic Applications (2026)",
     "d": "Risks and mitigations for agents that plan, act and use tools.",
     "k": "Standard"
    }
   ],
   "takeaway": "We need an actual identity and governance layer for agents, not another AI policy document.",
   "identity": {
    "intro": "Questions I'd want answered before any agent reaches production:",
    "points": [
     "What authenticates the agent? It should have its own credential, not a shared API key or a borrowed human login.",
     "Whose authority does it act under: its own, a user's delegated authority, or both? Can the logs tell them apart?",
     "What permissions does it get, and are they scoped to the task and time-bound?",
     "Who owns it, and who approves changes to what it can reach?",
     "How is it revoked, and how quickly does revocation take effect everywhere it has access?",
     "Can every action be traced to the agent, the person who triggered it and the policy that allowed it?",
     "How do downstream systems tell a person from an autonomous agent?"
    ]
   }
  },
  {
   "id": "s4",
   "time": "10:40",
   "end": "11:05",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "shield",
   "fmt": "Sponsored talk",
   "short": "Zero Trust",
   "sub": "Reduce attack surface and blast radius",
   "cats": [
    "cloud",
    "offensive",
    "identity"
   ],
   "title": "Dark by Default: Operational Zero Trust for Threats",
   "org": "Zscaler",
   "speakers": [
    [
     "Brian Deitch",
     "VP & CTO in Residence, Zscaler"
    ]
   ],
   "summary": "You will never patch fast enough, so be hard to reach and small when hit.",
   "covered": [
    "The volume of critical vulnerabilities is huge, and automated attackers can go from discovery to exploitation in minutes. “Find and patch everything immediately” isn't a workable strategy.",
    "Reduce opportunity and impact instead: minimize attack surface, segment important systems, use Zero Trust access, isolate risky browsing, manage AI assets, prioritize vulnerabilities continuously and test adversarially on an ongoing basis.",
    "The RedWraith demo used multiple agents in parallel for different attack stages and eventually reached credentials and developer tooling that could exfiltrate secrets.",
    "The point wasn't that every attacker will follow that exact process. It was how little cost and human involvement it took."
   ],
   "learned": [
    "The economics flip the patching race. If a full intrusion costs about as much as a laptop, attackers can afford to try everything, everywhere.",
    "“Dark by default” is attack-surface reduction expressed through identity: an app isn't reachable at all until the user and device are verified.",
    "Developer tooling and secrets were the RedWraith prize. Developer endpoints and CI credentials deserve production-grade protection."
   ],
   "why": "When a full intrusion costs less than a laptop and starts with one prompt, attacker volume goes up and patch-first strategies fall further behind. Reducing what is reachable scales; patching faster doesn't.",
   "concepts": [
    "zerotrust",
    "attacksurface",
    "segmentation",
    "blastradius"
   ],
   "program": [
    "Autonomous phishing, AI-assisted cloud exploit chains and nation-state tradecraft need controls that work at machine speed without hurting operational flexibility.",
    "How to run “dark by default” environments with identity-centric, per-application Zero Trust.",
    "Where cloud visibility is strong, where blind spots remain, and how incident responsibility is shared with cloud and SaaS providers.",
    "Patterns for trustworthy automation in AI-era systems."
   ],
   "ask": "What do we expose to the internet that doesn't need to be there?",
   "links": [
    {
     "u": "https://www.cisa.gov/zero-trust-maturity-model",
     "t": "CISA: Zero Trust Maturity Model",
     "d": "The reference model for moving from perimeter trust to continuous verification.",
     "k": "Guidance"
    },
    {
     "u": "https://www.cisa.gov/sites/default/files/2025-07/ZT-Microsegmentation-Guidance-Part-One_508c.pdf",
     "t": "CISA: Microsegmentation in Zero Trust (Part One)",
     "d": "Practical guidance on segmenting systems to contain a breach.",
     "k": "Guidance"
    },
    {
     "u": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
     "t": "CISA: Known Exploited Vulnerabilities catalog",
     "d": "Prioritization data for vulnerabilities with confirmed exploitation.",
     "k": "Data"
    }
   ],
   "takeaway": "“Dark by default” makes sense because assuming you can patch everything fast enough is becoming less realistic.",
   "chain": {
    "steps": [
     "Reconnaissance",
     "Exploitation",
     "Intrusion",
     "Exfiltration"
    ],
    "note": "RedWraith stages, each run by its own agent in parallel"
   },
   "stats": [
    {
     "v": "~27 h",
     "l": "First human prompt to exfiltration in the RedWraith demo",
     "src": "presented"
    },
    {
     "v": "~$500",
     "l": "Reported cost of the whole RedWraith run",
     "src": "presented"
    },
    {
     "v": "1",
     "l": "Human prompt needed to start it",
     "src": "presented"
    }
   ],
   "identity": {
    "points": [
     "Per-application access tied to verified user and device identity removes the network path an agent would otherwise scan.",
     "Secrets in developer tooling were the end of the chain. Short-lived credentials and secret scanning shrink what's worth stealing.",
     "Continuous verification matters more when one stolen session can be reused by automation at machine speed."
    ]
   }
  },
  {
   "id": "s5",
   "time": "11:35",
   "end": "12:00",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "radar",
   "fmt": "Talk",
   "short": "Deception",
   "sub": "Canaries against autonomous attackers",
   "cats": [
    "cloud",
    "offensive"
   ],
   "title": "Deceiving the Threat: Detecting and Disrupting AI Attackers in the Cloud",
   "org": "Tracebit",
   "speakers": [
    [
     "Alessandro Brucato",
     "Security Researcher, Tracebit"
    ]
   ],
   "summary": "AI attackers explore everything, which makes them easy to catch with canaries.",
   "covered": [
    "Tracebit tested multiple frontier models across many runs in a realistic cloud environment, measuring privilege escalation, persistence, code execution, lateral movement, reconnaissance and exfiltration.",
    "Canaries were often touched during enumeration, before the agent had picked its final target. That leaves a short but useful window: first canary hit in the first couple of minutes, first critical action about ten minutes later.",
    "When the attacker knew deception was in use, its success rate dropped significantly. Decoy environments and accounts feed the agent meaningless data while alerting defenders.",
    "Context bombs: injected content that made specific models stop rather than continue the attack. Models reacted differently, so it isn't universal."
   ],
   "learned": [
    "An agent's thoroughness is exploitable. People skip things that look odd; agents enumerate everything, so a well-placed decoy gets touched early.",
    "The ten-minute window only helps if the response is automated or pre-approved. A canary alert waiting in a queue arrives after the critical action.",
    "Context bombs are promising but depend on the model. I'd treat them as a bonus layer, not a defence to rely on."
   ],
   "why": "Breadth is the AI attacker's strength and its weakness. A cautious human might skip an odd-looking resource; an agent enumerating everything trips the wire early, which turns cheap decoys into high-signal alerts.",
   "concepts": [
    "canary",
    "deception",
    "contextbomb"
   ],
   "program": [
    "A benchmark of 11 frontier models across more than 1,000 autonomous attack runs in AWS, scored on reconnaissance, privilege escalation, lateral movement, exfiltration and persistence.",
    "How cloud canaries change agent behaviour, making agents more cautious and slowing their progress.",
    "How fast AI attackers move, and the response window that leaves defenders.",
    "Concrete ways to detect and disrupt AI attacks in the cloud."
   ],
   "ask": "Where would a canary credential or decoy resource give us the earliest warning?",
   "links": [
    {
     "u": "https://agentic.tracebit.com/context-bombs/",
     "t": "Tracebit Research: Context bombs (working paper, July 2026)",
     "d": "The research behind the session: canaries and context bombs against autonomous AI attackers.",
     "k": "Research"
    },
    {
     "u": "https://tracebit.com/blog/context-bombs-stopping-ai-attackers-in-their-tracks",
     "t": "Tracebit: Context bombs, stopping AI attackers in their tracks",
     "d": "A shorter write-up of the findings.",
     "k": "Research"
    },
    {
     "u": "https://attack.mitre.org/matrices/enterprise/cloud/",
     "t": "MITRE ATT&CK: Cloud matrix",
     "d": "The cloud techniques an autonomous attacker chains together.",
     "k": "Framework"
    }
   ],
   "takeaway": "Deception becomes more valuable against AI attackers because they explore far more of the environment than a human normally would.",
   "stats": [
    {
     "v": "~13 min",
     "l": "Average time from a low-privileged cloud key to admin",
     "src": "presented"
    },
    {
     "v": "99.4%",
     "l": "Runs detected before the first critical action",
     "src": "presented"
    },
    {
     "v": "~10 min",
     "l": "Gap between the first canary hit and the first critical action",
     "src": "presented"
    },
    {
     "v": "11 / 1,000+",
     "l": "Frontier models tested across autonomous AWS attack runs",
     "src": "program"
    }
   ],
   "identity": {
    "points": [
     "Canary credentials are fake identities: access keys or accounts with no legitimate use, so any attempt to authenticate with them is a high-confidence signal.",
     "The attacks started from a low-privileged key. Removing long-lived keys and tightening role scope shortens the path to admin."
    ]
   }
  },
  {
   "id": "s6",
   "time": "12:05",
   "end": "12:30",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "coins",
   "fmt": "Sponsored talk",
   "short": "Security economics",
   "sub": "Falling model costs change the math",
   "cats": [
    "cloud",
    "ai"
   ],
   "title": "The AI Shift: Rethinking the Economics of Cloud Security",
   "org": "Sweet Security",
   "speakers": [
    [
     "Yigael Berger",
     "Chief AI Officer, Sweet Security"
    ]
   ],
   "summary": "When finding a vulnerability costs almost nothing, testing becomes continuous for both sides.",
   "covered": [
    "Models have crossed a threshold where they can find vulnerabilities in real code, and running them keeps getting cheaper.",
    "The cost of finding a vulnerability in proprietary code trends toward zero when an attacker can rerun agents against a target again and again.",
    "Finding and exploiting are different problems, but a vulnerable path on an exposed surface becomes much more likely to be found eventually.",
    "Supervised AI red teaming moves from an occasional assessment to something that can run continuously.",
    "The same economics help defenders: AI can triage alerts, investigate and cut noise, and fill part of the cloud and AI knowledge gap on short-staffed teams."
   ],
   "learned": [
    "I disagreed with one point: the speaker suggested attackers have only improved slightly with AI. I think the numbers game still favours them. Defenders have to be right every time; an attacker needs one path.",
    "Cheaper discovery changes the attacker's math more than the defender's: one success pays for thousands of failed attempts.",
    "Vulnerability counts and alert volume become vanity metrics. Exploitability of exposed paths and time to fix are what matter.",
    "If AI red teaming is cheap, an annual pentest is a snapshot of an environment that changes daily."
   ],
   "why": "Many security decisions quietly assume attacks are expensive. If cost per attempt approaches zero, low-probability paths get found, and testing on an annual cycle leaves long gaps attackers can fill.",
   "concepts": [
    "continuousred",
    "attacksurface",
    "machinespeed"
   ],
   "program": [
    "Cloud security assumed humans initiated actions and defenders had time to investigate. Autonomous agents and automated attackers change that.",
    "Raw alert volume and vulnerability counts matter less; exploitability, speed of fix and stopping attacks before impact matter more.",
    "Which traditional metrics change in the AI era and which become more important.",
    "Continuous validation, prioritized remediation and enforcement based on runtime context as the way defenders regain the advantage."
   ],
   "ask": "If we could run an AI red team against our environment every week, what would we point it at first?",
   "links": [
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/vulnerability-discovery-and-exploitation-trends-in-the-ai-era",
     "t": "Google Threat Intelligence: Vulnerability discovery and exploitation trends in the AI era",
     "d": "Data on how AI is changing the economics of finding and exploiting bugs.",
     "k": "Threat research"
    },
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/staying-ahead-of-adversarial-ai-through-agentic-source-code-review",
     "t": "Mandiant: Agentic source code review",
     "d": "Multi-agent vulnerability discovery with expert validation.",
     "k": "Research"
    },
    {
     "u": "https://www.sweet.security/blog/securing-the-agentic-era-building-your-2026-ai-security-program",
     "t": "Sweet Security: Securing the agentic era",
     "d": "The speaker's company on building a 2026 AI security program.",
     "k": "Vendor"
    },
    {
     "u": "https://www.sweet.security/blog/how-to-secure-ai-agents-when-prompts-become-code",
     "t": "Sweet Security: How to secure AI agents in production",
     "d": "Why agentic workflows shift security toward runtime control.",
     "k": "Vendor"
    }
   ],
   "takeaway": "The interesting question isn't “is AI making attacks better?” It's “what happens when the cost of running an attack approaches zero?”"
  },
  {
   "id": "s7",
   "time": "1:50",
   "end": "2:25",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "mic",
   "fmt": "Live forum",
   "short": "Industry forum",
   "sub": "Detection, governance, shadow AI",
   "cats": [
    "ai",
    "governance",
    "identity"
   ],
   "title": "The State of AI & Cloud Security: A Live Audience Forum",
   "org": "Audience forum",
   "speakers": [
    [
     "Matt Johansen",
     "Founder & CEO, Vulnerable U"
    ],
    [
     "Helen Oakley",
     "Strategic Advisor, AI & Cybersecurity"
    ],
    [
     "Francis Odum",
     "Founder & Chief Researcher, SACR"
    ],
    [
     "Ian Paterson",
     "CEO, Plurilock"
    ]
   ],
   "summary": "Detection and response is the top priority; governance is the thing most likely to be overlooked.",
   "covered": [
    "Top priority for the next twelve months: detection and response. Governance is becoming more important but is still easy to overlook.",
    "Main concerns: data exposure, autonomous agents and shadow AI. Shadow AI is hard because organizations don't have a complete inventory of the software and models people use.",
    "Agent visibility: we can see a user, server or endpoint, but it's much harder to see what an autonomous agent is doing across a cloud environment and what it can affect.",
    "Canada-specific question: should organizations send data and inference to US-based AI providers, especially as regulation develops?",
    "Avoid locking into one model; the technology changes too quickly. Once basic controls are in place, experiment with more autonomous security operations, with traditional controls containing failures."
   ],
   "learned": [
    "Inventory came up again and again: shadow AI, agent registries and unknown models are the same visibility problem.",
    "For a Canadian organization, where data and inference are processed is part of the AI risk decision, not just a procurement detail.",
    "Autonomy in the SOC should be earned: start with triage and enrichment, and keep containment behind controls that can absorb a bad decision."
   ],
   "why": "The forum's concerns line up with the morning talks: visibility into what AI is in use, and controls strong enough to contain an agent's mistakes. Data residency adds a regulatory angle that Canadian organizations can't ignore.",
   "concepts": [
    "shadowai",
    "agentidentity",
    "autonomoussoc"
   ],
   "program": [
    "Live polling and open audience discussion rather than prepared talks.",
    "Questions many organizations still face: governance, identity, visibility, runtime protection, AI agents and operational risk.",
    "The biggest challenges and opportunities where AI and cloud security meet, from leaders dealing with them day to day."
   ],
   "ask": "Do we know which AI tools and models people in our area are already using?",
   "links": [
    {
     "u": "https://orca.security/wp-content/uploads/2026/07/2026-State-of-AI-Security-Report.pdf",
     "t": "Orca Security: 2026 State of AI Security Report",
     "d": "Telemetry on AI packages, exposed credentials and agent frameworks in production clouds.",
     "k": "Report"
    },
    {
     "u": "https://cloudsecurityalliance.org/articles/2026-state-of-ai-security-ai-is-in-production-security-isn-t",
     "t": "CSA: AI is in production, security isn't",
     "d": "Analysis of the 2026 State of AI Security findings.",
     "k": "Analysis"
    },
    {
     "u": "https://www.nist.gov/itl/ai-risk-management-framework",
     "t": "NIST AI Risk Management Framework",
     "d": "The reference framework for governing and managing AI risk.",
     "k": "Framework"
    }
   ],
   "takeaway": "Autonomous SOC capabilities are coming, but the controls underneath them need to mature first.",
   "identity": {
    "points": [
     "Agent visibility is an identity problem. If agents use shared or human credentials, the logs can't show what an agent did versus a person.",
     "Shadow AI often arrives through OAuth consent grants and personal API keys, so reviewing app consents is a practical place to start."
    ]
   }
  },
  {
   "id": "s8",
   "time": "2:50",
   "end": "3:30",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "fork",
   "fmt": "Panel",
   "short": "2027 playbook",
   "sub": "Where leaders disagree",
   "cats": [
    "ai",
    "governance"
   ],
   "title": "The AI Security Playbook for 2027: Where Security Leaders Disagree",
   "org": "Panel",
   "speakers": [
    [
     "Guillaume Ross",
     "Moderator · Startup CISO, Caffeine Security"
    ],
    [
     "Kunal Modasiya",
     "SVP Product & Growth, Qualys"
    ],
    [
     "Gal Ordo",
     "Co-Founder & CPO, Native"
    ],
    [
     "Jay Thurston",
     "Chief Trust Officer, Thales"
    ],
    [
     "Fernando Tucci",
     "Senior Product Manager, TrendAI"
    ]
   ],
   "summary": "There is no settled AI security playbook yet, and the panel was designed to show it.",
   "covered": [
    "Focus: where security leaders disagree about what an AI security program should look like heading into 2027.",
    "Themes: the practical security implications of agentic AI, how much autonomy to allow, and where to invest as adoption accelerates.",
    "Organizations are making different decisions about autonomy, governance, runtime controls, model choice and how much human involvement stays in the loop."
   ],
   "learned": [
    "The disagreement is the finding. With no consensus playbook, copying another organization's AI security program is risky.",
    "The most important design decision is where people stay in the loop. That should be set by impact and reversibility, not by what's technically possible."
   ],
   "why": "Expect peers and vendors to give conflicting advice. Decisions about autonomy and human oversight need to fit our own risk appetite rather than be copied from someone else's program.",
   "concepts": [
    "humanloop",
    "autonomoussoc",
    "agentidentity"
   ],
   "program": [
    "Built for disagreement: candid debate to expose assumptions and raise better questions rather than land on one answer.",
    "How AI speeds up pipeline automation and data engineering, and how agentic operations spread across accounts, regions and services.",
    "Visibility gaps, pressure-testing failure modes, and an executive-approved strategy that defines shared incident responsibility in cloud terms.",
    "Promised outputs: a cloud control map for AI workloads, a multi-cloud resilience checklist, and a trust model that combines cloud IAM with behaviour, context and policy."
   ],
   "ask": "Which AI-driven actions would we never allow without a human approving them?",
   "links": [
    {
     "u": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
     "t": "OWASP Top 10 for Agentic Applications (2026)",
     "d": "A shared baseline for agentic AI risk when organizations disagree on the rest.",
     "k": "Standard"
    },
    {
     "u": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
     "t": "NIST AI 600-1: Generative AI Profile",
     "d": "Risks and suggested actions for generative AI across its lifecycle.",
     "k": "Framework"
    },
    {
     "u": "https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-agent-governance-framework-gap-20260403/",
     "t": "CSA research note: The AI agent governance gap",
     "d": "What CISOs need now as agent adoption outpaces governance.",
     "k": "Research"
    }
   ],
   "identity": {
    "points": [
     "The program's “modern trust model” combines cloud IAM with behaviour, context and policy, which amounts to continuous authorization for workloads and agents.",
     "Shared incident responsibility in cloud terms starts with knowing which identities and keys are yours and which belong to the provider."
    ]
   }
  },
  {
   "id": "s9",
   "time": "3:35",
   "end": "4:00",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "graph",
   "fmt": "Talk",
   "short": "Executive threat action",
   "sub": "Turning techniques into decisions",
   "cats": [
    "offensive",
    "governance",
    "cloud"
   ],
   "title": "Graph the Threat: Turning Nation-State Techniques into Executive Action",
   "org": "Wiz",
   "speakers": [
    [
     "Ryoji Betchaku",
     "Staff Solutions Engineer, Wiz"
    ]
   ],
   "summary": "Threat intelligence only helps leadership when it's tied to our own exposure.",
   "covered": [
    "Taking nation-state techniques and translating them into something executives can use to make decisions.",
    "Threat intelligence easily becomes a list of techniques with no clear connection to business risk.",
    "The real challenge is what those techniques mean for an organization's own exposure, priorities and investment decisions."
   ],
   "learned": [
    "Executives don't need a technique list. They need to see which chains reach the most important assets, and which single fix breaks the most chains.",
    "Graphing identities, permissions and data flows turns threat intelligence into a prioritized fix list."
   ],
   "why": "This ties back to the opening keynote. If nation-state techniques are now available to anyone, leaders need to see which of them actually reach our critical assets, not a generic threat list.",
   "concepts": [
    "attackpath",
    "identitychain",
    "lotc"
   ],
   "program": [
    "Nation-state operations abuse identities, cloud-native services and harmless-looking data flows to move quickly and quietly.",
    "Control checklists and static risk registers rarely show how these techniques chain together in a specific environment.",
    "A method for mapping techniques such as identity chaining, living off the cloud and covert egress into analysis a security team can act on.",
    "A way to prioritize the fixes that break real attack chains, with measurable certainty."
   ],
   "ask": "Could we show leadership the attack path from an exposed system to our most important data?",
   "links": [
    {
     "u": "https://attack.mitre.org/matrices/enterprise/cloud/",
     "t": "MITRE ATT&CK: Cloud matrix",
     "d": "The techniques that chain together in cloud attack paths.",
     "k": "Framework"
    },
    {
     "u": "https://www.cisa.gov/resources-tools/resources/identifying-and-mitigating-living-land-techniques",
     "t": "CISA: Identifying and mitigating living off the land techniques",
     "d": "Joint guidance on detecting attackers who use legitimate tools and services.",
     "k": "Guidance"
    },
    {
     "u": "https://www.wiz.io/academy/detection-and-response/attack-path-analysis",
     "t": "Wiz: What is attack path analysis?",
     "d": "The speaker's company explains the graph approach to attack paths.",
     "k": "Vendor"
    },
    {
     "u": "https://www.wiz.io/blog/runtime-signals-in-security-graph",
     "t": "Wiz: Uncovering hidden attack paths using runtime signals",
     "d": "How runtime data changes which attack paths are real.",
     "k": "Vendor"
    }
   ],
   "identity": {
    "points": [
     "Identity chaining is the backbone of most cloud attack paths: each hop is a credential or role that grants the next.",
     "Mapping who can assume what, and from where, is the identity team's contribution to attack-path analysis."
    ]
   }
  },
  {
   "id": "s10",
   "time": "4:05",
   "end": "4:35",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/summit-sessions/schedule/index.html?track[]=ai-x-cloud-security-summit",
   "icon": "scale",
   "fmt": "Dual-topic talk",
   "short": "AI accountability",
   "sub": "Resilience, ownership and trust",
   "cats": [
    "ai",
    "governance",
    "identity"
   ],
   "title": "Building Resilient AI Systems / Who Owns the AI?",
   "org": "Closing panel",
   "speakers": [
    [
     "Ali Dehghantanha",
     "Professor & Canada Research Chair, University of Guelph"
    ],
    [
     "Iain Paterson",
     "CISO, Well Health Technologies"
    ],
    [
     "Olivera Zatezalo",
     "CISO & VP Cyber and IT Security, Ontario Power Generation"
    ]
   ],
   "summary": "Autonomous AI needs a clear owner before something goes wrong, not after.",
   "covered": [
    "Part one: lessons from AI systems that failed in production.",
    "Part two: who actually owns an AI system when it's autonomous and something goes wrong?",
    "The candidates multiply quickly: the team that built the model, the team that deployed the agent, the business owner who approved the use case, the security team, or the model vendor.",
    "AI systems need clear ownership and governance before autonomy scales beyond what people can realistically supervise."
   ],
   "learned": [
    "If nobody answers the ownership question beforehand, it gets answered during the incident, which is the worst time.",
    "AI systems degrade and drift rather than crash, so monitoring has to watch behaviour over time, not just uptime."
   ],
   "why": "Without a named owner, nobody is accountable for reviewing an agent's permissions, responding when it misbehaves, or deciding to switch it off. That gap is where incidents grow.",
   "concepts": [
    "accountability",
    "drift",
    "humanloop"
   ],
   "program": [
    "AI systems don't fail like traditional software. They degrade, drift and misbehave in ways that show up only under real-world pressure.",
    "Lessons from production incidents on designing for failure from day one.",
    "A governance blueprint covering model ownership, decision rights and accountability, treating trust as an operational outcome.",
    "Practical guidance: continuous monitoring for drift and misuse, red teaming, safety cases, and incident response that keeps autonomy in line with risk."
   ],
   "ask": "For each AI system we run, is there one named person who can turn it off?",
   "links": [
    {
     "u": "https://www.nist.gov/itl/ai-risk-management-framework",
     "t": "NIST AI Risk Management Framework",
     "d": "Assigning responsibility and managing trustworthy AI across its lifecycle.",
     "k": "Framework"
    },
    {
     "u": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
     "t": "NIST AI 600-1: Generative AI Profile",
     "d": "Governance, monitoring and incident actions for generative AI.",
     "k": "Framework"
    },
    {
     "u": "https://cloudsecurityalliance.org/blog/2026/07/27/beyond-human-identity-a-runtime-governance-model-for-autonomous-ai-agents-in-the-enterprise-cloud",
     "t": "CSA: Beyond Human Identity",
     "d": "Connects agent identity, authorization and accountability.",
     "k": "Guidance"
    }
   ],
   "takeaway": "“Who owns the AI?” isn't just a governance question. It becomes a security question as soon as the system can make decisions and take actions on its own.",
   "identity": {
    "points": [
     "Every autonomous system needs an accountable owner recorded alongside its identity, the same way service accounts should.",
     "Revocation is the real test of ownership: who can switch it off, and how quickly does that take effect everywhere?"
    ]
   }
  }
 ],
 "agenda": [
  [
   "8:00",
   "Coffee & tea networking",
   null,
   "coffee"
  ],
  [
   "9:00",
   "Welcome & opening remarks",
   "Francis Odum, SACR (emcee)",
   "flag"
  ],
  "s1",
  "s2",
  "s3",
  "s4",
  [
   "11:05",
   "Morning networking break",
   null,
   "coffee"
  ],
  "s5",
  "s6",
  [
   "12:30",
   "Lunch",
   null,
   "coffee"
  ],
  "s7",
  [
   "2:30",
   "Afternoon networking break",
   null,
   "coffee"
  ],
  "s8",
  "s9",
  "s10",
  [
   "4:35",
   "Closing remarks",
   "Francis Odum, SACR (emcee)",
   "flag"
  ],
  [
   "4:45",
   "Networking reception",
   "Level 700 pre-function space",
   "users"
  ]
 ],
 "quiz": {
  "lead": "Twelve questions drawn from the sessions. You'll see the answer and an explanation after each one, and a breakdown by topic at the end.",
  "items": [
   {
    "s": "s1",
    "q": "In Matt Johansen's line that summed up the day, what are defenders really up against?",
    "o": [
     "Capability that costs about $250 a month",
     "Capability that costs about $2,500 a month",
     "A swarm of agents run by one government",
     "Zero-days that sell for over $1 million"
    ],
    "a": 0,
    "e": "Nation-state-level capability is now cheap. The threat is intent plus an inexpensive subscription.",
    "cat": "offensive"
   },
   {
    "s": "s1",
    "q": "What two-hour target came up alongside Project Glasswing?",
    "o": [
     "A remediation SLA for newly released CVEs",
     "A detection SLA for agent-driven intrusions",
     "A response SLA for leaked cloud credentials",
     "A review SLA for AI-written pull requests"
    ],
    "a": 0,
    "e": "The direction of travel: once AI finds and chains bugs this fast, fixes need to land within hours.",
    "cat": "offensive"
   },
   {
    "s": "s1",
    "q": "Why did Johansen bring up Nmap?",
    "o": [
     "Defenders gain most when strong tools are widely available",
     "Most AI agents start their reconnaissance with Nmap",
     "Nmap was the first scanner rebuilt as an AI agent",
     "Restricting Nmap worked, so AI should be restricted too"
    ],
    "a": 0,
    "e": "Offensive tools were always public. Getting defenders the best AI tools quickly may beat keeping them behind a velvet rope.",
    "cat": "offensive"
   },
   {
    "s": "s2",
    "q": "In the Zealot attack chain, which step came right after SSRF against the metadata service?",
    "o": [
     "Credential theft",
     "Cloud enumeration",
     "Privilege escalation",
     "Data exfiltration"
    ],
    "a": 0,
    "e": "Reconnaissance, SSRF to the metadata service, credential theft, enumeration, privilege escalation, exfiltration.",
    "cat": "cloud"
   },
   {
    "s": "s2",
    "q": "Roughly how long did an autonomous chain need for its critical steps in the cloud hardening talk?",
    "o": [
     "About 3 minutes",
     "About 13 minutes",
     "About 2 hours",
     "About 27 hours"
    ],
    "a": 0,
    "e": "Three minutes. 13 minutes was Tracebit's average time to admin, and 27 hours was the RedWraith demo.",
    "cat": "cloud"
   },
   {
    "s": "s3",
    "q": "What was the toaster analogy used to argue?",
    "o": [
     "Agents need standards defining what they may safely do",
     "Agents should each do one narrow job and nothing more",
     "Agents should be switched off whenever they sit idle",
     "Agents need physical isolation like home appliances"
    ],
    "a": 0,
    "e": "Safety standards are why you trust a toaster. Agents need an equivalent way to define what they're allowed to do.",
    "cat": "identity"
   },
   {
    "s": "s4",
    "q": "The RedWraith demo went from first prompt to exfiltration in roughly how long, at what cost?",
    "o": [
     "27 hours, about $500",
     "13 minutes, about $250",
     "3 minutes, about $50",
     "2 days, about $5,000"
    ],
    "a": 0,
    "e": "About 27 hours and $500, with one human prompt to start it.",
    "cat": "offensive"
   },
   {
    "s": "s5",
    "q": "In Tracebit's tests, attacks were caught before the first critical action in what share of runs?",
    "o": [
     "99.4%",
     "92.0%",
     "78.5%",
     "64.2%"
    ],
    "a": 0,
    "e": "Agents touched canaries early, often during enumeration, before choosing a target.",
    "cat": "cloud"
   },
   {
    "s": "s5",
    "q": "What did a “context bomb” do in Tracebit's research?",
    "o": [
     "Made some models stop the attack",
     "Flooded the attacker's context window",
     "Fed the attacker fake admin keys",
     "Alerted defenders when a canary was read"
    ],
    "a": 0,
    "e": "Injected content made specific models halt. Different models reacted differently, so it isn't universal.",
    "cat": "ai"
   },
   {
    "s": "s6",
    "q": "On which point did my notes disagree with the economics talk?",
    "o": [
     "That attackers have only improved slightly with AI",
     "That AI red teaming can now run continuously",
     "That the cost of running models keeps falling",
     "That AI can help defenders triage alerts"
    ],
    "a": 0,
    "e": "Defenders have to be right every time; an attacker needs one path. The numbers game still favours attackers.",
    "cat": "ai"
   },
   {
    "s": "s7",
    "q": "In the audience forum, what was named the top priority for the next 12 months?",
    "o": [
     "Detection and response",
     "Governance",
     "Shadow AI discovery",
     "Model selection"
    ],
    "a": 0,
    "e": "Detection and response ranked first. Governance was called out as important but easy to overlook.",
    "cat": "governance"
   },
   {
    "s": "s10",
    "q": "Which of these was NOT raised as a possible owner of an autonomous AI system?",
    "o": [
     "The company's external auditors",
     "The team that deployed the agent",
     "The business owner who approved it",
     "The vendor that provides the model"
    ],
    "a": 0,
    "e": "The candidates were the model builders, the deploying team, the approving business owner, security, and the vendor.",
    "cat": "governance"
   }
  ]
 }
};
/* Speaker organisations: name -> {co, site, loc}. LinkedIn profiles live in "linkedin" above. */
window.SECTOR.days[1].people={
 "Matt Johansen": {
  "co": "Vulnerable U",
  "loc": "Austin, TX"
 },
 "Gal Ordo": {
  "co": "Native",
  "site": "https://native.security"
 },
 "Eric Broda": {
  "co": "Broda Group Software"
 },
 "Rachel Clark": {
  "co": "SKADI Cyber Defense"
 },
 "Brian Deitch": {
  "co": "Zscaler",
  "site": "https://www.zscaler.com"
 },
 "Alessandro Brucato": {
  "co": "Tracebit",
  "site": "https://tracebit.com"
 },
 "Yigael Berger": {
  "co": "Sweet Security",
  "site": "https://www.sweet.security"
 },
 "Helen Oakley": {
  "co": "AI security"
 },
 "Francis Odum": {
  "co": "Software Analyst Cyber Research",
  "site": "https://substack.com/@softwareanalyst"
 },
 "Ian Paterson": {
  "co": "Plurilock",
  "site": "https://plurilock.com"
 },
 "Guillaume Ross": {
  "co": "Caffeine Security",
  "loc": "Montreal, QC"
 },
 "Kunal Modasiya": {
  "co": "Qualys",
  "site": "https://www.qualys.com"
 },
 "Jay Thurston": {
  "co": "Thales",
  "site": "https://www.thalesgroup.com"
 },
 "Fernando Tucci": {
  "co": "Trend Micro",
  "site": "https://www.trendmicro.com"
 },
 "Ryoji Betchaku": {
  "co": "Wiz",
  "site": "https://www.wiz.io",
  "loc": "Canada"
 },
 "Ali Dehghantanha": {
  "co": "University of Guelph",
  "site": "https://www.uoguelph.ca",
  "loc": "Guelph, ON"
 },
 "Iain Paterson": {
  "co": "WELL Health Technologies",
  "site": "https://well.company"
 },
 "Olivera Zatezalo": {
  "co": "Ontario Power Generation",
  "site": "https://www.opg.com"
 }
};
/* Audio recap: recap.mp3 in this folder, generated with the open-source Kokoro voice model. */
window.SECTOR.days[1].audio={
 "src": "recap.mp3",
 "dur": 103,
 "transcript": [
  "This is the Day 1 recap from Colin Johnstone's SecTor 2026 notes. Day 1 was the AI x Cloud Security Summit, and the theme was simple: AI changed the speed of the attack.",
  "The opening keynote, from Matt Johansen of Vulnerable U, framed it with a contrast. Capabilities that once needed a government budget are now available to almost anyone. His line summed up the day: you are not defending against China, you are defending against 250 dollars a month.",
  "The cloud sessions made the same point. Speakers showed that the techniques themselves weren't new. What changed is how quickly automated tools can string them together, often faster than a team can read the first alert. That's why the advice kept returning to prevention and reducing blast radius, not just detection.",
  "There was good news too. Tracebit showed that deception works unusually well against automated attackers. Because they explore everything, decoy credentials and canaries get touched early, giving defenders a reliable warning.",
  "The other big thread was identity for AI agents. Organizations may soon run thousands of them, often without a reliable inventory. The panels kept asking the same questions: what is each agent, what can it reach, who owns it, and how do you switch it off?",
  "Colin's takeaway from Day 1: AI isn't inventing a new class of problems. It's making the old ones faster and cheaper. That puts the weight back on fundamentals: segmentation, least privilege, strong identity and a smaller blast radius.",
  "The full notes, sources and a quiz are on the Day 1 page."
 ]
};
