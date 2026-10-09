window.SECTOR=window.SECTOR||{days:{}};
window.SECTOR.days[3]={
 "n": 3,
 "eyebrow": "SecTor 2026 · Day 3 · Thu Oct 8 · MTCC Toronto · Keynote + Briefings",
 "h1": "The real question is who gets to <em>decide</em>.",
 "lead": "My notes from the final day: agents that turn a small request into a big change, military robots with one password for the whole fleet, AI running both sides of a purple team, data stolen today for a quantum computer tomorrow, and ransomware hosted where nobody can seize it.",
 "heroExtra": "<div class=\"trio\" aria-label=\"Three decisions from Day 3\">\n  <a class=\"tn\" href=\"#k3\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-bot\"/></svg>Agent</span><b>A request became a decision</b><p>Temporary access for one person ended with an admin console open to the internet.</p></a>\n  <a class=\"tn\" href=\"#bot\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-target\"/></svg>Robot</span><b>One password, every robot</b><p>Every PackBot shared the same SSH and web root password.</p></a>\n  <a class=\"tn\" href=\"#pq\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-key\"/></svg>Data</span><b>Stolen now, read later</b><p>Encrypted traffic collected today waits for a quantum computer.</p></a>\n</div>",
 "howto": [
  [
   "2 MIN",
   "Read the brief",
   "#brief",
   "bolt"
  ],
  [
   "10 MIN",
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
 "official": "https://blackhat.com/sector/briefings/schedule/?day=thursday",
 "searchHint": "Search notes, speakers or topics: PackBot, purple team, ML-KEM, canister…",
 "brief": {
  "lead": "Day 1 was about speed and Day 2 was about where attacks land. Day 3 was about control: who is allowed to decide, delegate and act, and what happens when that authority quietly grows, outlives its purpose or can't be taken back.",
  "ideas": [
   {
    "icon": "scale",
    "eyebrow": "Authority",
    "title": "Scope must survive every handoff",
    "text": "Agents turn requests into plans and plans into changes. Check each change against what was actually asked for."
   },
   {
    "icon": "layers",
    "eyebrow": "Debt",
    "title": "Old decisions keep shipping",
    "text": "A robot built in 2021 still ran Python 2.5 with one shared password, and cryptography chosen years ago is being harvested today."
   },
   {
    "icon": "users",
    "eyebrow": "Practice",
    "title": "Agents make purple teaming affordable",
    "text": "Open-source labs let red and blue agents run the loop most teams never had the time or budget for."
   }
  ],
  "stats": [
   {
    "v": "~3 min",
    "l": "For Claude Sonnet 4.5 to solve an easy CTF",
    "from": "Agentic purple teaming",
    "src": "presented"
   },
   {
    "v": "6",
    "l": "CVEs from the PackBot and FirstLook research, one scored 10",
    "from": "Hacking the PackBot",
    "src": "presented"
   },
   {
    "v": "20 min",
    "l": "Access window in the keynote's corrected agent flow",
    "from": "Keynote",
    "src": "presented"
   },
   {
    "v": "2035",
    "l": "Canada's deadline to move all federal systems to post-quantum cryptography",
    "from": "Harvest now, decrypt later",
    "src": {
     "t": "Canadian Centre for Cyber Security",
     "u": "https://cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001"
    }
   }
  ],
  "quote": {
   "text": "It's not about what the AI agent can do, but what it is authorized to cause.",
   "by": "Helen Oakley, keynote"
  },
  "afterQuote": "Every session came back to the same design question: where is authority granted, and does anything check it at the moment of action?",
  "agendaLabel": "The day at a glance · My path through the final day"
 },
 "sessionsHead": {
  "title": "The five sessions",
  "lead": "The keynote and briefings I'm highlighting from Day 3. Each card separates what was presented from my own analysis, with statistics and their sources, an Identity Lens where it's relevant, and primary resources. Hover a concept to see its definition."
 },
 "takeaways": {
  "title": "Eight things to remember",
  "lead": "What I'm taking away from Day 3, with the sessions each idea came from.",
  "items": [
   {
    "icon": "scale",
    "title": "Treat agent plans as requests, not permissions",
    "text": "The model can suggest an action; something else has to decide whether it's allowed, at the point where it becomes a change.",
    "sessions": [
     "k3"
    ]
   },
   {
    "icon": "key",
    "title": "Scope has to survive every handoff",
    "text": "Narrow tasks pick up broad reach when a service identity does the work. Carry the requester's limits all the way to the action.",
    "sessions": [
     "k3"
    ]
   },
   {
    "icon": "clock",
    "title": "Revoke the effect, not just the access",
    "text": "An expiring credential means nothing if the door it opened stays open. Time-boxed access needs a check that the change is undone.",
    "sessions": [
     "k3"
    ]
   },
   {
    "icon": "users",
    "title": "Agents make purple teaming affordable",
    "text": "Red and blue agents in an open-source lab make the attack, detect and fix loop cheap enough to run regularly. Close the loop by re-running the attack.",
    "sessions": [
     "purple"
    ]
   },
   {
    "icon": "check",
    "title": "Verify what agents claim",
    "text": "False claims of success and unsupported conclusions showed up on both red and blue agents. Check the outcome, not the summary.",
    "sessions": [
     "purple",
     "k3"
    ]
   },
   {
    "icon": "target",
    "title": "Shared passwords turn one bug into a fleet",
    "text": "One SSH password across every PackBot made device identity meaningless. Long-lived devices need per-device credentials and authenticated control traffic.",
    "sessions": [
     "bot"
    ]
   },
   {
    "icon": "layers",
    "title": "Tech debt is a security debt",
    "text": "Software frozen at purchase and cryptography chosen years ago both come due. Plan upgrade paths and crypto agility from day one.",
    "sessions": [
     "bot",
     "pq"
    ]
   },
   {
    "icon": "coins",
    "title": "Don't count on takedowns",
    "text": "Ransomware portals on a blockchain can't be seized like a server. Response plans should assume the extortion infrastructure stays online.",
    "sessions": [
     "cry0"
    ]
   }
  ],
  "quote": {
   "text": "If you have a key that expires and opens the door, but when the key expires the door is still open, then the problem is never really solved.",
   "by": "Helen Oakley, keynote"
  }
 },
 "enterprise": {
  "lead": "How I'd translate Day 3 into work for a security program. My own analysis, grounded in the sessions linked under each item.",
  "items": [
   {
    "title": "Put a policy check between agent plans and production changes",
    "text": "Compare each proposed change with the original request and block anything out of scope before it runs, not after.",
    "sessions": [
     "k3"
    ]
   },
   {
    "title": "Give agent workflows task-scoped, expiring authority",
    "text": "Replace broad service accounts with credentials scoped to the task and its time window, and confirm the resulting changes are reversed when it ends.",
    "sessions": [
     "k3"
    ]
   },
   {
    "title": "Roll out agents on a 30/60/90-day plan",
    "text": "Contain dangerous paths first, review approved and denied actions against what really changed, then expand only with evidence.",
    "sessions": [
     "k3"
    ]
   },
   {
    "title": "Ask vendors how their agents are bounded",
    "text": "Add questions to third-party reviews: what can the vendor's agent change, who approves out-of-scope actions, and where does our data go?",
    "sessions": [
     "k3"
    ]
   },
   {
    "title": "Stand up an agentic purple team lab",
    "text": "Use an open-source range to watch AI attackers against our detection stack, and re-run each attack to prove fixes work.",
    "sessions": [
     "purple"
    ]
   },
   {
    "title": "Build a cryptographic inventory and tier data by shelf life",
    "text": "Find where RSA and elliptic-curve cryptography run, including vendor products and identity systems, and prioritize data that must stay secret longest.",
    "sessions": [
     "pq"
    ]
   },
   {
    "title": "Audit long-lived devices for shared credentials",
    "text": "OT, IoT and specialized equipment: look for fleet-wide passwords, unauthenticated control protocols and software with no upgrade path.",
    "sessions": [
     "bot"
    ]
   },
   {
    "title": "Update ransomware playbooks for unseizable infrastructure",
    "text": "Assume the attacker's portal stays online, preserve canister and gateway identifiers as evidence, and lean on backups and response readiness.",
    "sessions": [
     "cry0"
    ]
   }
  ]
 },
 "footer": {
  "title": "SecTor 2026 · Day 3 · Keynote & Briefings",
  "place": "Thursday, October 8, 2026 · Metro Toronto Convention Centre · Keynote on the Main Stage, Hall F; briefings in Rooms 801A, 718AB, 701A and 701B"
 },
 "linkedin": {
  "Helen Oakley": "https://www.linkedin.com/in/helen-oakley/",
  "Brad Edwards": "https://www.linkedin.com/in/bradley-edwards-dev/",
  "Patrick Kiley": "https://www.linkedin.com/in/patkiley/",
  "Christine Dewhurst": "https://www.linkedin.com/in/christine-dewhurst-262867a9/",
  "Trecia Knight": "https://www.linkedin.com/in/trecia-knight/",
  "Tammy Harper": "https://www.linkedin.com/in/tammycti/"
 },
 "sessions": [
  {
   "id": "k3",
   "time": "9:00",
   "end": "10:00",
   "room": "Main Stage, Hall F, Level 800",
   "url": "https://blackhat.com/sector/features/schedule/index.html#keynote-who-gets-to-decide-security-in-the-agentic-enterprise-57617",
   "icon": "scale",
   "fmt": "Keynote",
   "short": "Who gets to decide?",
   "sub": "Security in the agentic enterprise",
   "cats": [
    "ai",
    "identity",
    "governance"
   ],
   "title": "Keynote: Who Gets to Decide? Security in the Agentic Enterprise",
   "org": "Helen Oakley",
   "speakers": [
    [
     "Helen Oakley",
     "Strategic Advisor, AI & Cybersecurity"
    ]
   ],
   "summary": "An agent can turn a narrow request into a broad change with no attacker involved, so authority has to be checked at every handoff.",
   "covered": [
    "Agentic AI no longer feels new, but the rate of change is huge. The worst part is how quickly control can be lost without any malicious intervention.",
    "The Alice scenario: Alice gets a customer ticket and asks the team's AI agent to investigate it and give her temporary access to the app. The agent interprets the request, makes a plan, connects to the services it needs and acts. The admin console ends up publicly reachable. No attacker was involved, just a misconfiguration and a decision the agent made.",
    "The request became a decision. Alice asked for access, but the workflow changed who could reach the service: the audience went from Alice to the entire internet, and temporary access became public exposure.",
    "The chat doesn't always show what happened in the background, and the agent's summary can be vague or leave out what it actually changed.",
    "Why the change was allowed: the trigger (Alice asked for temporary access), the authority (the service identity could change network rules), the control failure (the executor never checked the requested limits) and the outcome (the admin console became public). The model can suggest actions, but it should never be the thing deciding what is allowed.",
    "There are several ways into the same path: the requester's account can be compromised, the ticket can be poisoned with malicious content, or a connector (an upstream or downstream system the task depends on) can be malicious. Every route has to face the same task limits.",
    "As the flow executes, a narrow task receives broad reach: service permissions stand in for task authority, and the original limits disappear downstream. Every handoff must preserve the authorized limits.",
    "Real examples: Replit's agent deleted production data in 2025 and recovery depended on a rollback being available; Invariant Labs showed a coding assistant with legitimate access to a private repository acting on a prompt-injected request and exposing private content publicly; Unit 42 deployed a malicious test agent in its own cloud environment and showed that identity and credentials established at the workload level can be abused when something malicious comes from above.",
    "Back to Alice: check the proposed change against the original request before anything changes, and block it if it's out of scope. Grant Alice bounded access (for example 20 minutes) that expires, and make sure the path follows the approved support process. “If you have a key that expires and opens the door, but when the key expires the door is still open, the problem is never really solved.”",
    "Purchase orders already work this way: a manager approves one laptop, and if the order suddenly says 50, it goes back for approval. Agents need the same check.",
    "Avoid approval fatigue. A mechanic who finds new work calls before doing it; an agent should ask before any action outside its scope, while still letting people get their jobs done.",
    "Foundations that already exist: identity and authorization, least privilege and scoped access. Design around the OWASP Top 10 for Agentic Applications, especially tool misuse and identity and privilege abuse. What's emerging: authority across handoffs, enforcement at every boundary and evidence of the actual effect. No single component guarantees the full path, so defence in depth still applies.",
    "Who owns the consequence? The business or service owner defines the acceptable scope and validates it; engineering and platform teams make it enforceable.",
    "A 30/60/90-day approach: at 30 days, map the most critical flows, what they can change and who owns them, and contain known dangerous paths. At 60 days, review approved and denied requests and why they happened, confirm that failures leave the system unchanged, and don't take the agent's final summary at face value. At 90 days, expand scope only with evidence from thoroughly tested workflows, and confirm results hold across environments with a working fallback.",
    "A denied operation must produce no downstream change. Useful work succeeds, out-of-scope work is blocked, and revocation and recovery are proven.",
    "Agents are part of the supply chain and act on our behalf, often through vendor workflows we can't see. Ask vendors what happens when something goes wrong and where the data goes.",
    "Three things to remember: know the reach (trace what the workflow can change), enforce the limits (keep every action inside the approved scope), and own the outcome (name the owner and expand with evidence)."
   ],
   "chain": {
    "steps": [
     "“Give me temporary access”",
     "Agent plans the change",
     "Service identity edits network rules",
     "No check against the request",
     "Admin console on the internet"
    ],
    "note": "The Alice scenario, as walked through in the keynote"
   },
   "stats": [
    {
     "v": "20 min",
     "l": "Bounded access window in the corrected Alice flow",
     "src": "presented"
    },
    {
     "v": "30/60/90",
     "l": "Day plan for rolling out agentic workflows with evidence",
     "src": "presented"
    },
    {
     "v": "10",
     "l": "Risks in the OWASP Top 10 for Agentic Applications",
     "src": {
      "t": "OWASP GenAI Security Project",
      "u": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026"
     }
    }
   ],
   "learned": [
    "The failure in the Alice story isn't the model, it's the executor. The place to enforce scope is the point where a plan becomes a production change.",
    "Service identities quietly become the agent's authority. If an agent runs as a broadly scoped service account, every request it handles inherits that reach.",
    "“Temporary” has to apply to the effect, not just the credential. Expiring Alice's token does nothing if the firewall rule it created stays open.",
    "The 60-day step is the one most likely to be skipped: checking what actually changed rather than trusting the agent's summary of what it did."
   ],
   "why": "Every organization rolling out agents will hit the Alice problem: a helpful agent with a broad service identity making a change nobody asked for. It doesn't need an attacker, so it won't show up as an incident until something is exposed.",
   "identity": {
    "points": [
     "The requester's authority and the agent's authority are different things. Carry the requester's scope (who, what, how long) through to the action instead of letting the service account decide.",
     "Just-in-time access should be revoked together with its effects. Pair every time-boxed grant with a check that the resources it opened are closed again.",
     "Agent service identities need the same least-privilege review as admin accounts: an identity that can edit network rules can make anything public."
    ]
   },
   "concepts": [
    "scopedauth",
    "delegation",
    "jit",
    "leastpriv",
    "humanloop",
    "promptinjection",
    "owaspagentic",
    "blastradius"
   ],
   "program": [
    "Agentic AI changes how authority moves through enterprise systems: the requester, the agent deciding how to achieve the outcome, the tools carrying out each step and the credentials exercising privilege may all be different actors.",
    "As agents plan, delegate, approve and act across cloud, SaaS and operational environments, traditional identity and authorization assumptions no longer map cleanly.",
    "The question is no longer simply who or what has access, but who is allowed to decide, delegate and act, and how far that authority should extend.",
    "A framework for finding where authority is created, transferred and amplified, and for designing controls that constrain delegation, separate reasoning from execution, preserve provenance and enforce policy at the point of action."
   ],
   "takeaway": "Treat what an agent proposes as a request, not a permission. Check it against what was actually asked for, at the point of action.",
   "ask": "If one of our agents ran as its service account today, what's the biggest change it could make without anyone approving it?",
   "links": [
    {
     "u": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026",
     "t": "OWASP Top 10 for Agentic Applications (2026)",
     "d": "The risk list the keynote recommended designing around, including tool misuse and identity and privilege abuse.",
     "k": "Framework"
    },
    {
     "u": "https://invariantlabs.ai/blog/mcp-github-vulnerability",
     "t": "Invariant Labs: GitHub MCP exploited to reach private repositories",
     "d": "A malicious issue in a public repository hijacks an agent into leaking private repository data.",
     "k": "Research"
    },
    {
     "u": "https://unit42.paloaltonetworks.com/double-agents-vertex-ai/",
     "t": "Unit 42: Double Agents, security blind spots in Vertex AI",
     "d": "A malicious agent abuses overly broad default service-agent permissions to steal credentials and read data.",
     "k": "Research"
    },
    {
     "u": "https://x.com/amasad/status/1946986468586721478",
     "t": "Replit CEO on the agent that deleted production data",
     "d": "Primary statement on the July 2025 incident and the dev/prod separation Replit added afterwards.",
     "k": "Incident"
    },
    {
     "u": "https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/",
     "t": "The Register: Replit agent deleted a user's production database",
     "d": "News coverage of the same incident and how it unfolded.",
     "k": "Incident"
    }
   ]
  },
  {
   "id": "purple",
   "time": "10:15",
   "end": "10:55",
   "room": "Room 801A",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=thursday#practical-open-source-agentic-purple-teaming-55445",
   "icon": "users",
   "fmt": "Briefing",
   "short": "Agentic purple teaming",
   "sub": "Red and blue agents in an open-source lab",
   "cats": [
    "ai",
    "offensive"
   ],
   "title": "Practical Open Source Agentic Purple Teaming",
   "org": "Palo Alto Networks",
   "speakers": [
    [
     "Brad Edwards",
     "Domain Consultant, SecOps Transformation, Palo Alto Networks"
    ]
   ],
   "summary": "AI agents can now run both sides of a purple team exercise, which makes an expensive practice affordable for teams that never had the time or budget.",
   "covered": [
    "Can AI agents even hack? Claude Sonnet 4.5 took about three minutes to solve an easy CTF. Agents hack at roughly the level of a junior tester just past the OSCP; the difference is the speed and the scope of what they can cover.",
    "Purple teaming is hard to stand up: there usually isn't enough funding or support. “It's what you blue people do when you realized red was a sexier colour.”",
    "Definition used: a purple team exercise is a full-knowledge security assessment where attendees collaborate to attack, detect and respond.",
    "Purple teaming with AI: agents operate security tools and interpret the results, red and blue tasks share telemetry and feedback, the work covers emulation, investigation and detection development, and humans define the objectives, access and approval boundaries. It's cheaper and not as good as the real thing, but it makes the practice far more accessible.",
    "Agent roles: threat research and exercise preparation; red (adversary emulation, directly or through tools); blue (investigation, detection engineering and response); coordination (task handoffs and shared state); and evaluation (checking actions and outcomes).",
    "Coordination comes in tiers: agents work separately with a human relaying results; agents share documents under human oversight; agents communicate live under human oversight; and full YOLO (“hack and fix this stuff and I'll come back later”), which you probably shouldn't do.",
    "Red tools: Caldera with MCP, PentestGPT, Strix, and Kali with a coding agent. Harnesses become less useful as models improve: models need less help but more guardrails.",
    "Blue tools: Tracecat, MCP servers for tools like Wazuh and MISP, and the corporate stack's APIs (SIEM, EDR, SOAR).",
    "Purple tools: PurpleCrew (coordinated red, blue and IT operations agents built on CrewAI, with Caldera, Sentinel and Terraform integrations, by Erik Van Buggenhout and Jeroen Vandeleur), Ares (red and blue agents with investigation and evaluation) and APTL, now LilRAE.",
    "The lab: a fictional company (“Tech Vault”) with web, database, Samba, Active Directory, DNS, mail and file services; a Kali box; a SOC stack of Wazuh, Suricata, MISP, TheHive, Cortex and Shuffle; and MCP servers for every tool. Telemetry and run records let you review experiments. Assign a red agent and watch how the purple agent handles it to learn the process.",
    "Always ask for consent, and always close the loop: verify a remediation by running the attack again.",
    "Red-side challenges: repeated actions and lost context, rabbit holes, scope drift, noisy or unrepresentative behaviour, tool errors and false claims of success, refusals, and cost.",
    "Blue-side challenges: missing asset, user and investigation context (which added context can help with), not understanding the environment the way people do, incomplete or delayed telemetry, unsupported incident conclusions, response actions with unintended effects, and cost.",
    "Research findings: agents skip verification and repeat tool calls, generated detection rules are often brittle, synthetic APT behaviour can drift from the requested profile, and research environments are too clean. If a lab is set up like a CTF with only what the agent needs, how do you know how it will act in a noisy network? Where is all the blue-agent research?",
    "The distance between a PhD researcher and everyone else is very small right now. It's easy to contribute and be seen in this field: you can make an impact."
   ],
   "stats": [
    {
     "v": "~3 min",
     "l": "For Claude Sonnet 4.5 to solve an easy CTF",
     "src": "presented"
    },
    {
     "v": "76.5%",
     "l": "Of Cybench CTF challenges Sonnet 4.5 solved with 10 attempts",
     "src": {
      "t": "Anthropic",
      "u": "https://www.anthropic.com/research/building-ai-cyber-defenders"
     }
    }
   ],
   "learned": [
    "The value isn't that agents are great attackers; it's that they make the full attack-detect-fix loop cheap enough to run regularly.",
    "Blue agents are the weaker side today. Most of the hard problems listed (missing context, delayed telemetry, unsupported conclusions) are about our environments, not the models.",
    "False claims of success show up on both sides, which is the same lesson as Day 2's pentest pipeline: verify the outcome independently."
   ],
   "why": "Most organizations run red team engagements rarely and purple team exercises almost never. An open-source lab with agents on both sides gives security teams a way to practise detection and response continuously, and to see how AI attackers actually behave before meeting one.",
   "identity": {
    "points": [
     "The MCP boundary decides what each agent can reach. Give red and blue agents separate, scoped credentials so a misbehaving agent can't touch the other side's tooling.",
     "Scope drift is an authority problem: write the engagement scope into what the agent is permitted to do, not only into its prompt."
    ]
   },
   "concepts": [
    "purpleteam",
    "adversaryemu",
    "mcp",
    "harness",
    "soar",
    "siem"
   ],
   "program": [
    "AI agents can drive both sides of an engagement: running Kali, querying SIEMs, pushing detections, firing SOAR workflows, opening cases and reverse-engineering payloads.",
    "The hard part isn't the model; it's an honest environment where agents operate against a realistic enterprise target with a real defensive stack pushing back.",
    "APTL (Advanced Purple Team Lab) brings up a fictional company (Active Directory, web, database, file share, DNS, mail), a Kali red-team box, a malware-analysis container and a full SOC stack (Wazuh, Suricata, MISP, TheHive and Cortex, Shuffle), with MCP servers giving agents access to every layer.",
    "A live agent-on-agent engagement from initial access through detection, containment and case closure; how the MCP boundary shapes credentials and blast radius; the telemetry archive for comparing runs; and the honest limits of the lab."
   ],
   "takeaway": "Agents finally make purple teaming affordable. Start small in a lab, keep a human setting the boundaries, and always re-run the attack to prove the fix works.",
   "ask": "When did we last re-run an attack to prove a detection or fix actually worked?",
   "links": [
    {
     "u": "https://github.com/Brad-Edwards/aptl",
     "t": "APTL: SOC-in-a-box for AI purple teaming",
     "d": "The speaker's open-source lab used in the talk.",
     "k": "Tool"
    },
    {
     "u": "https://github.com/OpenRAE/lilrae",
     "t": "LilRAE (OpenRAE)",
     "d": "The successor to APTL for building sandboxes and cyber ranges.",
     "k": "Tool"
    },
    {
     "u": "https://github.com/Vjeroen/PurpleCrew",
     "t": "PurpleCrew",
     "d": "CrewAI-based red, blue and IT operations agents with Caldera, Sentinel and Terraform integrations.",
     "k": "Tool"
    },
    {
     "u": "https://github.com/dreadnode/ares",
     "t": "Ares (Dreadnode)",
     "d": "LLM-driven red and blue agents attacking and defending live infrastructure.",
     "k": "Tool"
    },
    {
     "u": "https://github.com/usestrix/strix",
     "t": "Strix",
     "d": "Open-source AI penetration testing agents.",
     "k": "Tool"
    },
    {
     "u": "https://github.com/TracecatHQ/tracecat",
     "t": "Tracecat",
     "d": "Open-source security automation platform for teams and AI agents.",
     "k": "Tool"
    },
    {
     "u": "https://www.anthropic.com/research/building-ai-cyber-defenders",
     "t": "Anthropic: Building AI for cyber defenders",
     "d": "Sonnet 4.5's CTF and vulnerability benchmark results.",
     "k": "Research"
    }
   ]
  },
  {
   "id": "bot",
   "time": "11:10",
   "end": "11:50",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=thursday#render-safe-reverse-engineering-the-packbot-and-firstlook-tactical-robotics-ecosystem-54978",
   "icon": "target",
   "fmt": "Briefing",
   "short": "Hacking the PackBot",
   "sub": "Military robots and 20 years of tech debt",
   "cats": [
    "hardware",
    "offensive",
    "identity"
   ],
   "title": "Render Safe: Reverse Engineering the PackBot and FirstLook Tactical Robotics Ecosystem",
   "org": "Google/Mandiant",
   "speakers": [
    [
     "Patrick Kiley",
     "Principal Red Team Consultant, Google/Mandiant"
    ]
   ],
   "summary": "Bomb-disposal robots built over 20 years shared one password and ran Python 2.5, and security by obscurity only delayed finding out.",
   "covered": [
    "iRobot history: research with DARPA started in 1998; PackBots were used at the World Trade Center in 2001; the PackBot 510 launched in 2007; the throwable FirstLook robot in 2011; and Endeavor Robotics was created in 2016.",
    "PackBots started appearing in surplus stores. The speaker obtained a 510 with a 2021 date; the original platform dates to 2008.",
    "He paid far too much for a FirstLook, but it gave access to the controller hardware and an MPU5 radio, the missing pieces that opened up new avenues of research.",
    "Inside the PackBot: five stacked layers of electronics covering power, main motors, Ethernet and FPGAs, video and USB hubs, PCI and a system control board.",
    "Six 45-pin accessory ports carry 24 V power, ground, USB, Ethernet, RS-422 and analog video. Every port has the same pinout but connects to different transceivers.",
    "Accessories include radios and sensors (toxic gas, gamma and neutron, chemical weapons detection), cameras, manipulators and disablement devices that use an embedded firing circuit.",
    "The EOD StrongArm is a higher-torque version of the original three-joint arm, strong enough to break itself, with a main camera and three more. Its wiring runs along the length of the arm rather than through the joints, over an Ethernet cable with only four of its eight pins used.",
    "FirstLook runs on 32-bit ARM, with the system-on-chip sitting underneath the memory module, a layout the speaker had seen only once before.",
    "Controllers evolved from a large brick to a heavy-duty laptop and then a rugged tablet, plus a Logitech gamepad. He pulled the APK from the rugged tablet and ported it to a modern Android 14 tablet.",
    "Issues found during the research went through the usual reporting channels and resulted in six CVEs, one with a score of 10.",
    "The software: a Linux 2.6 kernel, operator control unit (OCU) software versions 5.x and 6.2, and Python 2.5 scripts still running in a robot built in 2021.",
    "An SSH server on TCP 22 used the same password on every PackBot. The robot also held metadata describing everything about itself. A web server on port 80 had the same problem: a root user with the shared password.",
    "An exploit allowed any file on the device to be read, including source code. The same problems affected two robots on different architectures (ARM and x86).",
    "Control traffic uses JAUS (Joint Architecture for Unmanned Systems), where a single packet can carry multiple messages. “OpenJAUS” isn't really open source: you have to request it and pay a fee.",
    "Several PackBot versions used unencrypted wireless modules, so requests and data could be seen in plain text. Newer PackBots use Wave Relay, a mesh radio system on MPU5 radios, as a walled garden.",
    "Lessons: defence in depth; don't rely on a single external technology (like the radio) to protect everything; authenticate and encrypt control traffic; implement a root of trust with dm-verity and LUKS; and treat tech debt as a real issue. Twenty-year-old CPUs, Linux and language stacks were repeated across platforms. Security through obscurity can delay analysis, but not prevent it."
   ],
   "chain": {
    "steps": [
     "Plain-text radio link",
     "Shared SSH / web root password",
     "Read any file on the robot",
     "Source code and robot metadata",
     "Control traffic over JAUS"
    ],
    "note": "The attack surface as described in the talk"
   },
   "stats": [
    {
     "v": "6",
     "l": "CVEs from the research, one scored 10",
     "src": "presented"
    },
    {
     "v": "2.5",
     "l": "Python version still running core scripts on a robot built in 2021",
     "src": "presented"
    },
    {
     "v": "10.0",
     "l": "CVSS 4.0 score for the unauthenticated path traversal (CVE-2026-55393)",
     "src": {
      "t": "OpenCVE",
      "u": "https://app.opencve.io/cve/CVE-2026-55393"
     }
    }
   ],
   "learned": [
    "A password shared across a fleet is one credential, not many. Compromise one device, or one controller, and you have them all.",
    "The radio was treated as the security boundary. When the control protocol itself has no authentication, whoever reaches the link controls the robot.",
    "Long-lived devices freeze their software at purchase. The same pattern applies to building systems, medical devices and branch hardware in our own environments."
   ],
   "why": "Organizations run equipment for decades: OT, IoT, physical security and specialized devices. This talk shows what happens when a platform's hardware evolves but its software, credentials and protocols don't, and why obscurity and physical isolation are not controls.",
   "identity": {
    "points": [
     "One SSH password and one web root password across every robot means device identity doesn't exist. Each device needs its own credential, ideally hardware-backed.",
     "Control traffic without authentication trusts anyone on the radio link. Commands should be authenticated per operator and per device, not just carried over an encrypted pipe."
    ]
   },
   "concepts": [
    "eod",
    "techdebt",
    "sharedcred",
    "jaus",
    "manet",
    "pathtraversal",
    "rootoftrust",
    "dmverity",
    "secobscurity"
   ],
   "program": [
    "A deep technical analysis of the architecture, attack surface and 25-year evolution of iRobot's PackBot, originally developed by the creators of the Roomba.",
    "Beneath the ruggedized exterior: legacy open-source software, commercial off-the-shelf hardware and significant technical debt, with the software stack largely static and relying on Python 2.5 in second-generation and later models.",
    "A hardware teardown and software deep dive of the Intel-based PackBot and its throwable ARM-based counterpart, the FirstLook, mapping the attack surface across operator control units, radio links and the shared software ecosystem.",
    "Takeaways: security by obscurity is a failed strategy; methods for auditing robotics and IoT command and control; and the cascading risk of legacy technical debt in long-lifecycle devices."
   ],
   "takeaway": "Obscurity and an expensive radio aren't security. Long-lived devices need per-device credentials, authenticated control traffic and an upgrade path from day one.",
   "ask": "Which of our long-lived devices share a password across the whole fleet?",
   "links": [
    {
     "u": "https://i.blackhat.com/BH-USA-26/Presentations/BHUS26-Kiley-Render_Safe-Slides.pdf",
     "t": "Render Safe slides (Black Hat USA 2026)",
     "d": "Slides from the earlier version of this research by Patrick Kiley and Emily Astranova.",
     "k": "Slides"
    },
    {
     "u": "https://app.opencve.io/cve/CVE-2026-55393",
     "t": "CVE-2026-55393: path traversal in Aware2 (PackBot, FirstLook)",
     "d": "Unauthenticated file read of configuration and security parameters, CVSS 4.0 score 10.0.",
     "k": "Advisory"
    },
    {
     "u": "https://app.opencve.io/cve/CVE-2026-55395",
     "t": "CVE-2026-55395: hardcoded passwords",
     "d": "Hardcoded credentials let an attacker reconfigure the robots.",
     "k": "Advisory"
    },
    {
     "u": "https://app.opencve.io/cve/CVE-2026-55396",
     "t": "CVE-2026-55396: unencrypted control traffic",
     "d": "Operator control unit and robot talk over UDP without encryption or integrity checks.",
     "k": "Advisory"
    },
    {
     "u": "https://github.com/mandiant/Vulnerability-Disclosures",
     "t": "Mandiant vulnerability disclosures",
     "d": "Mandiant's public advisory repository, referenced by the CVE records.",
     "k": "Advisory"
    },
    {
     "u": "https://saemobilus.sae.org/content/AS5669",
     "t": "SAE AS5669: JAUS Transport Specification",
     "d": "The standard behind the robots' control messages.",
     "k": "Standard"
    }
   ]
  },
  {
   "id": "pq",
   "time": "2:25",
   "end": "3:05",
   "room": "Room 701A",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=thursday#harvest-now-decrypt-later-why-your-data-is-already-being-stolen-and-what-you-can-do-about-it-55184",
   "icon": "key",
   "fmt": "Briefing",
   "short": "Harvest now, decrypt later",
   "sub": "Post-quantum readiness without a PhD",
   "cats": [
    "governance",
    "identity"
   ],
   "title": "Harvest Now, Decrypt Later: Why Your Data Is Already Being Stolen and What You Can Do About It",
   "org": "NSC Tech · Knight Aegis Consulting",
   "speakers": [
    [
     "Christine Dewhurst",
     "Partner, NSC Tech"
    ],
    [
     "Trecia Knight",
     "Founder & Principal Consultant, Knight Aegis Consulting"
    ]
   ],
   "summary": "Encrypted data is being collected now to decrypt once quantum computers can, so the first step is knowing where vulnerable cryptography runs.",
   "fromProgram": true,
   "covered": [
    "Harvest Now, Decrypt Later (HNDL) is an active, documented adversary strategy: collect encrypted data today and decrypt it once a sufficiently powerful quantum computer exists. Actors with long-horizon intelligence objectives are already doing it.",
    "Anything with a long confidentiality shelf life is already a target: financial records, health data, government communications and intellectual property. If it matters in ten years, it matters now.",
    "RSA, ECC and Diffie-Hellman are all broken by a sufficiently powerful quantum computer. The talk walks through 13 real-life use cases to build an inventory of where they run.",
    "NIST finalized its first post-quantum cryptography standards in 2024. The question is no longer whether to act, but whether to act before the window closes.",
    "Crypto agility is the real goal: systems that can change cryptographic primitives without re-engineering everything. Organizations that treat this as a one-time migration will do it twice.",
    "A four-step readiness framework: cryptographic inventory; risk tiering by data sensitivity and longevity; vendor and dependency mapping; and migration sequencing.",
    "Where programs consistently fail: third-party and supply-chain cryptographic dependencies you can't see, legacy systems that can't be patched, and the gap between policy and implementation.",
    "The single biggest barrier to readiness is the absence of a cryptographic inventory. Vulnerable algorithms run in your own systems, your vendors' systems and embedded dependencies."
   ],
   "stats": [
    {
     "v": "2024",
     "l": "NIST finalized the first post-quantum standards (FIPS 203, 204, 205)",
     "src": {
      "t": "NIST",
      "u": "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards"
     }
    },
    {
     "v": "13",
     "l": "Real-life use cases walked through to build a crypto inventory",
     "src": "program"
    },
    {
     "v": "2035",
     "l": "Government of Canada deadline to migrate all systems; high-priority ones by 2031",
     "src": {
      "t": "Canadian Centre for Cyber Security",
      "u": "https://cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001"
     }
    }
   ],
   "learned": [
    "For a bank, the data with the longest shelf life (mortgages, customer identity, account history) is exactly what HNDL targets, so it belongs in the first migration tier.",
    "The inventory is the hard part because so much cryptography sits inside vendor products and libraries. Vendor questionnaires need a post-quantum section now.",
    "Crypto agility matters more than picking the right algorithm: the standards and parameters will keep changing."
   ],
   "why": "Data stolen today can't be un-stolen. Anything sent over RSA or elliptic-curve key exchange in recent years should be assumed collected, and regulators and governments have already set migration timelines measured in a few years, not decades.",
   "identity": {
    "points": [
     "HNDL is about confidentiality: a recorded login can't be replayed later. Authentication has a different deadline: signature algorithms (FIDO2 passkeys commonly use ECDSA) must move to post-quantum options before a quantum computer can forge them.",
     "Add certificate authorities, token-signing keys, SAML and OIDC signing, and authenticator algorithms to the crypto inventory, with the vendor responsible for each."
    ]
   },
   "concepts": [
    "hndl",
    "pqc",
    "crqc",
    "mlkem",
    "cryptoagility",
    "cryptoinventory"
   ],
   "program": [
    "The threat model: what HNDL looks like in practice, who is executing it, and what data is most at risk.",
    "The cryptographic exposure map: where RSA, ECC and Diffie-Hellman run in the organization right now, through 13 real-life use cases.",
    "The crypto-agility imperative, and a practical four-step PQC readiness assessment any practitioner can run.",
    "Where organizations consistently fail, and how to bring leadership to the table on a problem that has no visible breach."
   ],
   "takeaway": "Assume anything sent over RSA or ECC in recent years has already been collected. Start the cryptographic inventory now, tier data by how long it must stay secret, and build for crypto agility.",
   "ask": "Could we list today every system and vendor product that uses RSA or elliptic-curve cryptography?",
   "links": [
    {
     "u": "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards",
     "t": "NIST releases first 3 finalized post-quantum standards",
     "d": "FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA), August 2024.",
     "k": "Standard"
    },
    {
     "u": "https://csrc.nist.gov/pubs/ir/8547/ipd",
     "t": "NIST IR 8547 (draft): Transition to post-quantum standards",
     "d": "Proposes deprecating quantum-vulnerable algorithms after 2030 and disallowing them after 2035.",
     "k": "Guidance"
    },
    {
     "u": "https://cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001",
     "t": "Canadian Centre for Cyber Security: PQC migration roadmap (ITSM.40.001)",
     "d": "Government of Canada timeline: plans by April 2026, high-priority systems by 2031, all by 2035.",
     "k": "Guidance"
    },
    {
     "u": "https://cisa.gov/resources-tools/resources/quantum-readiness-migration-post-quantum-cryptography",
     "t": "CISA, NSA and NIST: Quantum-Readiness factsheet",
     "d": "How to build a roadmap, a cryptographic inventory and vendor engagement.",
     "k": "Guidance"
    }
   ]
  },
  {
   "id": "cry0",
   "time": "3:20",
   "end": "4:00",
   "room": "Room 701B",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=thursday#unseizable-extortion-cry0s-use-of-the-icp-blockchain-55148",
   "icon": "coins",
   "fmt": "Briefing",
   "short": "Unseizable extortion",
   "sub": "Ransomware portals on the ICP blockchain",
   "cats": [
    "offensive",
    "governance"
   ],
   "title": "Unseizable Extortion: cry0's Use of the ICP Blockchain",
   "org": "Flare",
   "speakers": [
    [
     "Tammy Harper",
     "Senior Threat Intelligence Researcher, Flare"
    ]
   ],
   "summary": "A ransomware group moved its negotiation and payment portals onto a blockchain, so seizing a server is no longer how you take them down.",
   "fromProgram": true,
   "covered": [
    "Ransomware negotiation portals have traditionally run as Tor hidden services or on bulletproof hosting. Both are resilient, but still depend on hosting providers, so they can be seized and disrupted.",
    "cry0 has begun deploying victim negotiation and payment portals on the Internet Computer Protocol (ICP) using WebAssembly-based canisters. Instead of renting servers, operators deploy application logic into a distributed execution environment replicated across a decentralized node network.",
    "Because canisters run deterministic Wasm code with persistent replicated state and web-accessible interfaces, they behave like consensus-governed application runtimes rather than static hosting.",
    "The talk reconstructs cry0's use of ICP for victim-facing infrastructure, then analyzes what the model enables: embedded negotiation workflows, automated payment validation, resilient portal replication and large-scale encrypted data hosting.",
    "When extortion control planes run inside consensus-replicated environments, seizure becomes a protocol and governance challenge rather than a hosting problem.",
    "It closes with a defender-focused framework: how to recognize and preserve blockchain-hosted ransomware infrastructure, a hunting workflow that tracks canisters instead of servers, and what “unseizable” really means and where disruption is still possible."
   ],
   "learned": [
    "Incident response plans often assume law enforcement or a provider can take infrastructure down. For blockchain-hosted portals, plan as if the portal stays up.",
    "Evidence preservation changes too: record canister identifiers and gateway domains, not just IP addresses.",
    "If the business has no need to reach ICP gateway domains, alerting on that traffic from corporate endpoints is cheap and may catch related abuse."
   ],
   "why": "Takedowns have been one of the few levers that disrupt ransomware groups. Infrastructure that can't be seized shifts more of the burden onto victims' own preparation: backups, response plans and threat intelligence.",
   "concepts": [
    "raas",
    "icp",
    "canister",
    "bulletproof"
   ],
   "program": [
    "Why Tor and bulletproof hosting are still vulnerable to seizure, and how cry0 moved negotiation and payment portals onto ICP canisters.",
    "A technical analysis of the observed on-chain portal deployment and the architectural properties that enable it.",
    "How the shift alters the disruption model for ransomware infrastructure.",
    "A defender framework for identifying, tracking and responding to blockchain-hosted ransomware infrastructure."
   ],
   "takeaway": "Don't build a ransomware plan around the portal disappearing. Prepare to respond while the extortion infrastructure stays online, and track it by canister, not by server.",
   "ask": "Does our ransomware playbook assume someone can take the attacker's infrastructure offline?",
   "links": [
    {
     "u": "https://flare.io/learn/resources/blog/cry0-raas-ransomware-blockchain-extortion",
     "t": "Flare: Cry0, a new RaaS with blockchain-based extortion",
     "d": "The speaker's January 2026 write-up on cry0's emergence and its decentralized extortion claims.",
     "k": "Research"
    },
    {
     "u": "https://www.ransomware.live/group/cry0",
     "t": "Ransomware.live: cry0 group profile",
     "d": "Tracker entry describing the group's ICP-based negotiation infrastructure.",
     "k": "Tracker"
    },
    {
     "u": "https://www.threatlocker.com/blog/supply-chain-attack-security-scanner-compromise-leads-to-widespread-infostealer-and-ransomware-pivot",
     "t": "ThreatLocker: CanisterWorm uses an ICP canister for command and control",
     "d": "A different actor using the same blockchain for C2, showing the technique spreading.",
     "k": "Research"
    }
   ]
  }
 ],
 "agenda": [
  [
   "8:00",
   "Breakfast",
   null,
   "coffee"
  ],
  "k3",
  "purple",
  "bot",
  [
   "11:50",
   "Lunch",
   null,
   "coffee"
  ],
  [
   "2:05",
   "Refreshment break",
   null,
   "coffee"
  ],
  "pq",
  "cry0"
 ],
 "quiz": {
  "lead": "Thirteen questions drawn from the sessions. You'll see the answer and an explanation after each one, and a breakdown by topic at the end.",
  "items": [
   {
    "s": "k3",
    "cat": "identity",
    "q": "In the keynote's Alice scenario, what let a request for temporary access become a public admin console?",
    "o": [
     "The service identity could edit network rules unchecked",
     "Alice's account had been phished before she sent the request",
     "A firewall vendor pushed a faulty rule update overnight",
     "The agent was jailbroken through text hidden in the ticket"
    ],
    "a": 0,
    "e": "No attacker was involved. The agent's service identity had the authority to change network rules, and the executor never checked the change against Alice's request."
   },
   {
    "s": "k3",
    "cat": "governance",
    "q": "What does the keynote's car mechanic analogy say an agent should do?",
    "o": [
     "Ask before doing any work outside the approved scope",
     "Finish the whole job first, then report what changed",
     "Only work while a person watches every single step",
     "Refuse any task it hasn't successfully done before"
    ],
    "a": 0,
    "e": "A mechanic who finds new work calls you first. Agents should ask before out-of-scope actions without creating approval fatigue for everything else."
   },
   {
    "s": "k3",
    "cat": "governance",
    "q": "In the keynote's 30/60/90-day plan, what happens at 90 days?",
    "o": [
     "Scope expands, but only with evidence from tested flows",
     "Human approvals are removed from every agent workflow",
     "The first risk assessment of critical flows is started",
     "Agents take over access reviews from the identity team"
    ],
    "a": 0,
    "e": "Expansion is earned with evidence: thoroughly tested workflows, consistent results across environments and a working fallback."
   },
   {
    "s": "k3",
    "cat": "identity",
    "q": "What's the point of the keynote's line about a key that expires but leaves the door open?",
    "o": [
     "Expiring access must also undo what that access opened",
     "Keys should expire faster than the work they authorize",
     "No door should open without two separate keys present",
     "Short-lived keys remove the need for any monitoring"
    ],
    "a": 0,
    "e": "Time-boxed access only helps if its effects are reversed too. Expiring Alice's credential doesn't close a firewall rule the agent created."
   },
   {
    "s": "purple",
    "cat": "ai",
    "q": "At what level did the purple teaming talk place today's AI agents as hackers?",
    "o": [
     "About a junior tester just past the OSCP",
     "About a senior red teamer with ten years' work",
     "Below someone running public exploit scripts",
     "On par with nation-state exploit developers"
    ],
    "a": 0,
    "e": "Roughly post-OSCP junior level. What's different is the speed and the scope they can cover; Sonnet 4.5 solved an easy CTF in about three minutes."
   },
   {
    "s": "purple",
    "cat": "ai",
    "q": "In a purple team exercise, what does closing the loop mean?",
    "o": [
     "Re-running the attack to prove the fix actually works",
     "Sending the final report to the executive leadership",
     "Letting the blue agent block the red agent's address",
     "Tearing the lab down as soon as the exercise ends"
    ],
    "a": 0,
    "e": "Because it's purple, the remediation is verified by attacking again, not assumed from the fix being deployed."
   },
   {
    "s": "purple",
    "cat": "governance",
    "q": "Which level of agent coordination did the speaker joke you probably shouldn't use?",
    "o": [
     "Agents run freely while you come back later",
     "Agents work apart and a person relays results",
     "Agents share documents under human oversight",
     "Agents talk live while a person oversees them"
    ],
    "a": 0,
    "e": "“Hack and fix this stuff and I'll come back later” is the full-YOLO tier. The others keep a human in the loop at different levels."
   },
   {
    "s": "purple",
    "cat": "ai",
    "q": "Which problem did the talk say affects both red and blue agents?",
    "o": [
     "Claiming success or reaching conclusions without support",
     "Refusing to run any tool that needs administrator rights",
     "Being unable to read logs written in a structured format",
     "Losing access whenever the MCP server is restarted"
    ],
    "a": 0,
    "e": "Red agents make false claims of success and blue agents reach unsupported incident conclusions. Both need their outcomes verified."
   },
   {
    "s": "bot",
    "cat": "identity",
    "q": "What made SSH access to the PackBots so serious?",
    "o": [
     "Every PackBot used the same SSH password",
     "SSH listened on a hidden, non-standard port",
     "Keys rotated only when robots were serviced",
     "Only the radio vendor knew the SSH password"
    ],
    "a": 0,
    "e": "A single shared password across the fleet means compromising one robot or controller compromises them all. The web server had the same shared root password."
   },
   {
    "s": "bot",
    "cat": "hardware",
    "q": "What were the PackBot's core scripts still running on, in a robot dated 2021?",
    "o": [
     "Python 2.5 on a Linux 2.6 kernel",
     "Python 3.9 on a Linux 5.10 kernel",
     "Java 8 on a hardened real-time OS",
     "Node.js 12 on a Linux 4.4 kernel"
    ],
    "a": 0,
    "e": "The software stack stayed largely static for two decades while the hardware evolved, which is the tech debt the talk centred on."
   },
   {
    "s": "bot",
    "cat": "offensive",
    "q": "What did the most severe web server flaw on the robots allow?",
    "o": [
     "Reading any file on the device, source code included",
     "Flashing new firmware to robots over the mesh radio",
     "Disabling the robot's embedded firing circuit remotely",
     "Tracking the operator's tablet location over Bluetooth"
    ],
    "a": 0,
    "e": "An unauthenticated path traversal allowed arbitrary file reads, including source code and configuration. It affected both the x86 PackBot and the ARM FirstLook."
   },
   {
    "s": "pq",
    "cat": "governance",
    "q": "Why is harvest now, decrypt later a problem today rather than in the future?",
    "o": [
     "Data captured now can be read once quantum computers can",
     "Quantum computers can already break AES-256 in real time",
     "Attackers can forge today's signatures with quantum chips",
     "The new post-quantum algorithms have already been broken"
    ],
    "a": 0,
    "e": "Adversaries collect encrypted traffic now and wait. Anything that must stay secret for years is already exposed if it travelled over RSA or ECC."
   },
   {
    "s": "cry0",
    "cat": "offensive",
    "q": "Why are cry0's negotiation portals so hard to take down?",
    "o": [
     "They run as canisters on a decentralized blockchain",
     "They hide behind rotating residential proxy networks",
     "They're hosted by a sanctioned bulletproof provider",
     "They exist only inside victims' own email accounts"
    ],
    "a": 0,
    "e": "The portals are WebAssembly canisters on the Internet Computer Protocol, replicated across a decentralized network, so seizure becomes a protocol and governance problem."
   }
  ]
 },
 "people": {
  "Helen Oakley": {
   "co": "AI & cybersecurity advisor"
  },
  "Brad Edwards": {
   "co": "Palo Alto Networks",
   "site": "https://www.paloaltonetworks.com"
  },
  "Patrick Kiley": {
   "co": "Google/Mandiant",
   "site": "https://cloud.google.com/security/mandiant"
  },
  "Christine Dewhurst": {
   "co": "NSC Tech"
  },
  "Trecia Knight": {
   "co": "Knight Aegis Consulting"
  },
  "Tammy Harper": {
   "co": "Flare",
   "site": "https://flare.io"
  }
 }
};
/* Audio recaps (MP3s in this folder), generated with the open-source Kokoro voice model. */
window.SECTOR.days[3].audio=[
 {
  "key": "recap",
  "label": "Quick recap",
  "note": "About 2 min · one narrator",
  "src": "recap.mp3",
  "dur": 119,
  "transcript": [
   "This is the Day 3 recap from Colin Johnstone's SecTor 2026 notes. The final day was about control, and one question ran through it: who gets to decide?",
   "Helen Oakley's keynote described a helpful AI agent asked to grant one person temporary access, which ended up making a much broader change than anyone intended. No attacker was involved. Her point was that an agent's plan should be treated as a request, not a permission, and checked against what was actually asked for before anything changes.",
   "She also stressed that temporary access has to undo whatever it opened, and that agent autonomy should grow only with evidence. Her closing line: it's not about what the AI agent can do, but what it is authorized to cause.",
   "Brad Edwards of Palo Alto Networks showed how open-source labs let AI agents play both attacker and defender in purple team exercises. It makes regular practice affordable for teams that never had the budget, as long as people set the boundaries and every fix is re-tested.",
   "Patrick Kiley of Mandiant looked at long-lived robotics platforms and showed how old software and shared passwords persist for decades. His lessons were about defence in depth, unique credentials per device, and planning an upgrade path from day one.",
   "Two more briefings looked ahead. One explained harvest now, decrypt later: encrypted data collected today could be read once quantum computers mature, so organizations should start a cryptographic inventory now. The other covered ransomware groups hosting infrastructure in places that are hard to take down, which means response plans can't rely on takedowns.",
   "Colin's takeaway from Day 3: authority is the new perimeter. Decide who and what is allowed to act, check it at the moment of action, and keep the evidence.",
   "The full notes, sources and a quiz are on the Day 3 page."
  ]
 },
 {
  "key": "deep",
  "label": "Deep dive",
  "note": "About 3 min · session by session",
  "src": "deep-dive.mp3",
  "dur": 209,
  "transcript": [
   "This is the Day 3 deep dive from Colin Johnstone's SecTor 2026 notes. The final day was about control, and one question ran through every session: who gets to decide?",
   "Helen Oakley's keynote looked at authority in the agentic enterprise. Her example: a person asks an AI agent for temporary access to an application. The agent plans the work, uses a service identity with broad permissions, and makes a much bigger change than anyone requested. No attacker was involved. The lesson is that the person asking, the agent planning, and the identity carrying out the work are different actors, and each handoff can quietly widen what's allowed.",
   "Her recommendations were practical. Treat an agent's plan as a request, not a permission, and check each change against the original request at the point of action. Make temporary access expire together with whatever it opened. Roll out agents over thirty, sixty and ninety days, expanding only with evidence. And ask vendors how their own agents are bounded. Her closing line: it's not about what the AI agent can do, but what it is authorized to cause.",
   "Brad Edwards of Palo Alto Networks showed agentic purple teaming. Open-source labs now let AI agents play both attacker and defender against a realistic test company with a real security monitoring stack, so teams can practise detection and response without a big budget. He was candid about the limits: agents lose context, drift out of scope and sometimes claim success they didn't achieve, so people set the boundaries and every fix is re-tested.",
   "Patrick Kiley of Mandiant presented research on long-lived robotics platforms used for bomb disposal. Over two decades the hardware evolved, but much of the software, passwords and protocols stayed the same, and he worked with the vendor through coordinated disclosure. His lessons apply far beyond robots: defence in depth, unique credentials per device, authenticated and encrypted control traffic, and an upgrade path planned from day one. Security through obscurity only delays analysis.",
   "Christine Dewhurst and Trecia Knight explained harvest now, decrypt later. Encrypted data collected today could be read once quantum computers mature, so anything that must stay confidential for years is already at risk. NIST finalized its first post-quantum standards in 2024, and Canada's federal roadmap targets full migration by 2035. Their first step is a cryptographic inventory, followed by tiering data by sensitivity and lifespan, mapping vendors, and building crypto agility.",
   "Tammy Harper of Flare covered a ransomware group that hosts its negotiation portals on a blockchain network, which makes traditional takedowns much harder. Her advice for defenders was to recognize and track this kind of infrastructure, and not to build response plans that depend on someone taking it offline.",
   "Colin's enterprise takeaways from Day 3: put a policy check between agent plans and production changes. Give agent workflows task-scoped, expiring authority. Start a cryptographic inventory that includes identity systems. Audit long-lived devices for shared passwords. And make sure ransomware playbooks don't rely on takedowns.",
   "That's the Day 3 deep dive. The full notes, sources and quiz are on the Day 3 page."
  ]
 },
 {
  "key": "chat",
  "label": "Conversation",
  "note": "About 2 min · two voices",
  "src": "conversation.mp3",
  "dur": 120,
  "transcript": [
   [
    1,
    "Welcome to the final SecTor 2026 recap from Colin Johnstone's notes. This is Day 3."
   ],
   [
    2,
    "And the question that ran through the whole day was: who gets to decide?"
   ],
   [
    1,
    "That came straight from the keynote."
   ],
   [
    2,
    "Helen Oakley described an AI agent asked to give one person temporary access, which ended up making a much broader change than anyone intended. No attacker involved. Just an agent using a powerful service identity with nothing checking the change against the request."
   ],
   [
    1,
    "So what's the fix?"
   ],
   [
    2,
    "Treat what an agent proposes as a request, not a permission. Check it at the point of action. And make temporary access undo whatever it opened. Her line was: it's not about what the agent can do, but what it is authorized to cause."
   ],
   [
    1,
    "There was a more hopeful AI talk too."
   ],
   [
    2,
    "Brad Edwards showed open-source labs where AI agents play both attacker and defender. It makes purple team practice affordable, as long as people set the boundaries and re-test every fix."
   ],
   [
    1,
    "And then robots."
   ],
   [
    2,
    "Patrick Kiley of Mandiant looked at bomb-disposal robots that kept old software and shared passwords for years. The lesson applies to any long-lived device: unique credentials, authenticated control traffic and a real upgrade path."
   ],
   [
    1,
    "The afternoon looked further ahead."
   ],
   [
    2,
    "One talk on harvest now, decrypt later: data stolen today could be read by future quantum computers, so start a cryptographic inventory now. And one on ransomware hosted where it's hard to take down, so response plans can't rely on takedowns."
   ],
   [
    1,
    "Colin's bottom line for Day 3?"
   ],
   [
    2,
    "Authority is the new perimeter. Decide who and what may act, check it at the moment of action, and keep the evidence. Thanks for listening, and the full notes are on the Day 3 page."
   ]
  ]
 }
];
