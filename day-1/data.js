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
    "text": "Organizations may soon run thousands of agents, without a mature way to inventory, identify and govern them."
   },
   {
    "icon": "layers",
    "eyebrow": "Fundamentals",
    "title": "Back to basics",
    "text": "Segmentation, least privilege, isolation, logging and blast-radius reduction came up in session after session."
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
  "lead": "Each card separates what the speakers presented from my own observations, with key statistics and their sources and primary resources. Hover a concept to see its definition."
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
    "title": "Fundamentals kept coming up",
    "text": "Segmentation, identity, least privilege, isolation and smaller blast radius kept coming up because AI makes weak architecture easier to exploit.",
    "sessions": [
     "s2",
     "s4"
    ]
   },
   {
    "icon": "badge",
    "title": "Agents need identity",
    "text": "With thousands or millions of agents coming, speakers kept asking what each one is, what it can access, who owns it and how to switch it off.",
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
    "title": "Patching isn't the whole plan",
    "text": "When discovery to exploitation is measured in hours, speakers argued for reducing what's reachable and what a breach can touch, with patch speed as one control among several.",
    "sessions": [
     "s4",
     "s1"
    ]
   },
   {
    "icon": "scale",
    "title": "Governance came up late, and often",
    "text": "The technology is moving faster than ownership models. Several panels treated who owns an autonomous system, and who can switch it off, as a security question.",
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
    "The shift Johansen described is from capability to intent. Budget, specialist teams and custom tooling used to separate nation-state operators from everyone else, and that gap is closing.",
    "His point about fast fixing stuck with me: if anyone can use AI to write fixes, the fixes themselves can become the next wave of bugs.",
    "The sandbox line was blunt: a guardrails.md file isn't a security architecture. Some version of that idea came back in almost every Day 1 session."
   ],
   "why": "This keynote set the frame for the whole summit. Native's three-minute chain, the roughly $500 RedWraith intrusion and Tracebit's 13-minute path to admin were all versions of the same idea: familiar techniques, much cheaper and faster.",
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
    "Almost every step in the Zealot chain is an old technique. What made it notable was that an agent connected them without pausing, so the gaps between alerts disappeared.",
    "Ordo's argument was that detection-led approaches assume dwell time, and a chain that finishes its key steps in about three minutes doesn't leave much.",
    "His answer wasn't another AI product. It was architecture: separation, less internet exposure, strong identity boundaries and blocking destructive agent actions by default."
   ],
   "why": "It made the keynote concrete. Johansen described cheap capability in general terms; Ordo showed what it looks like inside a cloud environment, step by step. The Hugging Face incident came up in both talks.",
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
   "takeaway": "The talk's core point: when an attack moves faster than detection and response, prevention and blast-radius reduction end up carrying more of the weight.",
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
   ]
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
   "summary": "Agents are multiplying faster than anyone's ability to inventory and govern them.",
   "covered": [
    "Organizations may soon run thousands or millions of agents, with no reliable way to inventory which ones are operating.",
    "Agent-to-agent interactions could be a source of better detection.",
    "Govern agents the way we govern people: identity, trust, standards and accountability need to exist before something can scale safely.",
    "The toaster analogy: standards are why you can trust a toaster not to burn your house down. Agents need a consistent way to define what they may do and under what conditions."
   ],
   "learned": [
    "Broda and Clark framed agents as a new kind of non-human identity, less predictable than service accounts because they choose actions at runtime and call other agents.",
    "The toaster analogy landed well: standards are why people trust appliances, and agents don't have an equivalent yet.",
    "An interesting twist: agent-to-agent traffic was presented as a possible source of better detection, not only a new risk."
   ],
   "why": "Inventory and ownership of agents became one of the day's running threads. The audience forum raised agent visibility, and the closing panel came back to who owns an agent when something goes wrong.",
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
   "takeaway": "The session's ask was for a real identity and governance layer for agents, not another AI policy document."
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
    "Deitch flipped the patching race: with this many critical vulnerabilities and minutes from discovery to exploitation, “find and patch everything immediately” stops being a workable plan.",
    "“Dark by default” is attack-surface reduction expressed through identity: an app isn't reachable at all until the user and device are verified.",
    "The most striking part of the RedWraith demo wasn't the technique. It was how little cost and human involvement it took to reach credentials and developer tooling."
   ],
   "why": "This was the second talk of the morning where the answer to faster attacks was “be harder to reach and smaller when hit” rather than “detect faster”, echoing Native's architecture-first argument.",
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
   "takeaway": "The case for “dark by default” rests on an assumption the speaker challenged directly: that anyone can patch fast enough.",
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
   ]
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
    "An agent's thoroughness can be turned against it. People skip things that look odd; agents enumerate everything, so decoys get touched early.",
    "The timing was the striking part: first canary hit within the first couple of minutes, and the first critical action about ten minutes later.",
    "Context bombs were one of the more surprising ideas of the day, though they worked differently on different models, so they aren't universal."
   ],
   "why": "It was the most optimistic talk on Day 1. The other sessions described AI speed as an attacker advantage; Tracebit showed a case where the same behaviour gives defenders an early signal.",
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
   "takeaway": "Deception looks more valuable against AI attackers, because they explore far more of an environment than a human normally would.",
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
   ]
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
    "I disagreed with one point: the speaker suggested attackers have only improved slightly with AI. My view is that the numbers game still favours them, since an attacker needs only one path.",
    "Cheaper discovery changes the attacker's math the most: one success pays for thousands of failed attempts.",
    "The economics cut both ways in the talk. AI that finds bugs cheaply can also triage alerts and fill knowledge gaps on short-staffed teams."
   ],
   "why": "It added the economic layer to the day. The RedWraith demo's roughly $500 price tag and Johansen's “$250 a month” line point to the same thing Berger described: the cost per attempt heading toward zero.",
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
    "Detection and response came out as the room's top priority, with governance the thing most likely to be overlooked.",
    "Inventory came up again and again: shadow AI, agent registries and unknown models were all described as the same visibility problem.",
    "The Canada-specific question about sending data and inference to US-based AI providers showed data residency was clearly on people's minds."
   ],
   "why": "The forum was a useful check on the morning talks. The concerns raised from the floor (data exposure, autonomous agents, shadow AI) matched the themes speakers had been presenting all day.",
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
   "takeaway": "The room's view: more autonomous security operations are coming, once basic controls are in place to contain their failures."
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
    "The disagreement was the finding. The panel was built to show that there isn't a consensus AI security playbook yet.",
    "Autonomy was a recurring point of difference: how much to allow, and how much human involvement stays in the loop."
   ],
   "why": "After a morning of speakers who largely agreed on the problem, this panel showed how differently practitioners are answering it, across governance, runtime controls, model choice and human oversight.",
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
   ]
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
   "summary": "Threat intelligence only helps leadership when it's tied to an organization's own exposure.",
   "covered": [
    "Taking nation-state techniques and translating them into something executives can use to make decisions.",
    "Threat intelligence easily becomes a list of techniques with no clear connection to business risk.",
    "The real challenge is what those techniques mean for an organization's own exposure, priorities and investment decisions."
   ],
   "learned": [
    "Betchaku's starting point was that threat intelligence easily becomes a list of techniques with no clear connection to business risk.",
    "The approach was to map techniques like identity chaining, living off the cloud and covert egress onto a specific environment, so it's clear which chains reach what."
   ],
   "why": "It closed a loop with the opening keynote. If nation-state techniques are now available to anyone, the next question is how to show which of them actually matter to the people making decisions.",
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
   ]
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
    "The ownership question had no easy answer: the model builder, the deploying team, the business owner, the security team and the vendor were all candidates.",
    "AI systems tend to degrade and drift rather than crash, which makes failures harder to notice."
   ],
   "why": "It was a fitting close. Agent ownership had come up in the agent identity talk and the audience forum, and this panel ended the day on it as an open question.",
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
   "takeaway": "“Who owns the AI?” stops being only a governance question once a system can make decisions and take actions on its own."
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
 },
 "people": {
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
 },
 "audio": [
  {
   "key": "recap",
   "label": "Quick recap",
   "note": "About 2 min · one narrator",
   "src": "recap.mp3?v=20261008j",
   "dur": 99,
   "transcript": [
    "This is the Day 1 recap from Colin Johnstone's SecTor 2026 notes. Day 1 was the AI x Cloud Security Summit, and the theme was simple: AI changed the speed of the attack.",
    "The opening keynote, from Matt Johansen of Vulnerable U, framed it with a contrast. Capabilities that once needed a government budget are now available to almost anyone. His line summed up the day: you are not defending against China, you are defending against 250 dollars a month.",
    "The cloud sessions made the same point. Speakers showed that the techniques themselves weren't new. What changed is how quickly automated tools can string them together, often faster than a team can read the first alert. Several speakers answered with architecture rather than faster detection: less exposure and a smaller blast radius.",
    "There was good news too. Tracebit showed that deception works unusually well against automated attackers. Because they explore everything, decoy credentials and canaries get touched early.",
    "The other big thread was identity for AI agents. Organizations may soon run thousands of them, often without a reliable inventory. The panels kept asking the same questions: what is each agent, what can it reach, who owns it, and how do you switch it off?",
    "Colin's takeaway from Day 1: AI isn't inventing a new class of problems. It's making the old ones faster and cheaper, and the conversations kept coming back to fundamentals, agent identity and ownership.",
    "The full notes, sources and a quiz are on the Day 1 page."
   ]
  },
  {
   "key": "deep",
   "label": "Deep dive",
   "note": "About 3 min · session by session",
   "src": "deep-dive.mp3?v=20261008j",
   "dur": 195,
   "transcript": [
    "This is the Day 1 deep dive from Colin Johnstone's SecTor 2026 notes. Day 1 was the AI x Cloud Security Summit. We'll go through it session by session, then finish with the main takeaway.",
    "Matt Johansen of Vulnerable U opened the day. His argument was that the capabilities we associate with nation-state attackers are getting cheap and easy to access. Budget, specialist teams and custom tooling used to separate governments from everyone else. That gap is closing, so intent and persistence matter more than money. He also described the vulnerability lifecycle compressing, with bugs found, exploited and chained much faster than before.",
    "Gal Ordo of Native argued that AI security is really cloud security. Automated attacks now connect familiar weaknesses faster than many detection processes can respond. His answer wasn't another AI-specific product. It was architecture: separate production from everything else, reduce internet exposure, enforce strong identity boundaries, and block destructive automated actions by default.",
    "Eric Broda and Rachel Clark focused on agents as identities. Organizations may soon run thousands or even millions of agents, with no reliable way to inventory them. Their analogy was a toaster: you trust it because of standards. Agents need the same thing, a consistent way to define what each one may do, who owns it, and how it's switched off.",
    "Brian Deitch of Zscaler made the case for being dark by default. You will never patch fast enough, so make applications unreachable until the user and device are verified, segment what matters, and keep the blast radius small.",
    "Alessandro Brucato of Tracebit brought the most encouraging result of the day. Automated attackers explore everything, so decoy credentials and canary resources get touched early. In their testing, attacks were detected before the first critical action in nearly every run.",
    "Yigael Berger of Sweet Security looked at economics. When finding a weakness costs almost nothing, testing becomes continuous for both attackers and defenders, and the same economics can help defenders triage alerts and fill skills gaps.",
    "The afternoon panels were about priorities and ownership. The audience forum ranked detection and response as the top priority for the year, with governance the most likely to be overlooked. The 2027 playbook panel was built for disagreement, and showed there's no settled AI security playbook to copy yet. Ryoji Betchaku of Wiz showed how to turn threat intelligence into something executives can act on, by tying it to an organization's own exposure. And the closing panel asked who actually owns an AI system when it acts on its own.",
    "Colin's takeaway from Day 1: AI isn't inventing a new class of attacks. It's making familiar ones faster, cheaper and easier to chain together, and the conversations kept coming back to fundamentals, agent identity and ownership.",
    "That's the Day 1 deep dive. The full notes, sources and quiz are on the Day 1 page."
   ]
  },
  {
   "key": "chat",
   "label": "Conversation",
   "note": "About 2 min · two voices",
   "src": "conversation.mp3?v=20261008j",
   "dur": 118,
   "transcript": [
    [
     1,
     "Welcome to the SecTor 2026 recap, built from Colin Johnstone's conference notes. This is Day 1, the AI x Cloud Security Summit."
    ],
    [
     2,
     "And the theme fits in one sentence: AI changed the speed of the attack."
    ],
    [
     1,
     "What does that actually mean, though? Is AI inventing new kinds of attacks?"
    ],
    [
     2,
     "Mostly not. Speaker after speaker made the same point. The weaknesses are familiar. What's new is how quickly automated tools can string them together, often faster than a team can read the first alert."
    ],
    [
     1,
     "The opening keynote had a great line about that."
    ],
    [
     2,
     "Matt Johansen of Vulnerable U said: you are not defending against China, you are defending against 250 dollars a month. Capabilities that used to need a government budget are now within almost anyone's reach."
    ],
    [
     1,
     "So if attackers are faster, what did people say actually works?"
    ],
    [
     2,
     "The fundamentals, honestly. Segmentation, least privilege, strong identity and a smaller blast radius. Zscaler's talk called it being dark by default: apps aren't reachable until the user and device are verified."
    ],
    [
     1,
     "There was some good news too, right?"
    ],
    [
     2,
     "Deception. Tracebit showed that automated attackers explore everything, so decoy credentials and canaries get touched early. It's one of the few areas where AI attackers make defenders' lives easier."
    ],
    [
     1,
     "And the big open question was agents themselves."
    ],
    [
     2,
     "Exactly. Organizations may soon run thousands of AI agents, and the panels kept asking what each one is, what it can reach, who owns it and how it gets switched off."
    ],
    [
     1,
     "Colin's bottom line for Day 1?"
    ],
    [
     2,
     "AI isn't creating a new class of problems. It's compressing the time, cost and expertise needed to exploit the ones we already have. The full notes and a quiz are on the Day 1 page."
    ]
   ]
  }
 ]
};
