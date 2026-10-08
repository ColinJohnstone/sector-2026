window.SECTOR=window.SECTOR||{days:{}};
window.SECTOR.days[2]={
 "n": 2,
 "eyebrow": "SecTor 2026 · Day 2 · Wed Oct 7 · MTCC Toronto · Keynote + Briefings",
 "h1": "The threat is <em>already</em> on the device.",
 "lead": "My notes from the keynote and briefings: mercenary spyware on phones, malware written by the AI model in your browser, Rowhammer on GPUs, and why proving a vulnerability is now harder than finding one.",
 "heroExtra": "<div class=\"trio\" aria-label=\"Three devices from Day 2\">\n  <a class=\"tn\" href=\"#k1\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-phone\"/></svg>Phone</span><b>Zero-click spyware</b><p>Pegasus infected phones without the owner clicking anything.</p></a>\n  <a class=\"tn\" href=\"#llm\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-browser\"/></svg>Browser</span><b>A model you didn't install</b><p>Chrome downloads Gemini Nano, and it can be made to write malware.</p></a>\n  <a class=\"tn\" href=\"#gpu\"><span class=\"yr\"><svg class=\"i\"><use href=\"#i-chip\"/></svg>GPU</span><b>Bit flips to root</b><p>Rowhammer on a GPU led all the way to a root shell on the host.</p></a>\n</div>",
 "howto": [
  [
   "2 MIN",
   "Read the brief",
   "#brief",
   "bolt"
  ],
  [
   "12 MIN",
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
 "official": "https://blackhat.com/sector/briefings/schedule/?day=wednesday",
 "searchHint": "Search notes, speakers or topics: Pegasus, Rowhammer, verifier…",
 "brief": {
  "lead": "Day 1 was about attacks moving at machine speed. Day 2 was about where they land: the phones, browsers and GPUs we already trust, and how hard it has become to prove what's real.",
  "ideas": [
   {
    "icon": "chip",
    "eyebrow": "Device",
    "title": "Your hardware is attack surface",
    "text": "Local AI models, GPUs and phones run code we never chose to trust, and each can be turned against us."
   },
   {
    "icon": "check",
    "eyebrow": "Proof",
    "title": "Finding is cheap, proving isn't",
    "text": "AI floods us with findings. Verification is the bottleneck, so build around the proof."
   },
   {
    "icon": "eye",
    "eyebrow": "People",
    "title": "Spyware targets people",
    "text": "Commercial spyware goes after journalists, lawyers and activists, and exposing it is what brings consequences."
   }
  ],
  "stats": [
   {
    "v": "29,439",
    "l": "Vulnerabilities Mythos found; 516 were patched",
    "from": "AI pentest pipeline",
    "src": "presented"
   },
   {
    "v": "82 / 629",
    "l": "Threat-intel reports that covered civil society",
    "from": "Keynote",
    "src": "presented"
   },
   {
    "v": "60%",
    "l": "Less analyst time after adding an independent verifier",
    "from": "AI pentest pipeline",
    "src": "presented"
   },
   {
    "v": "$20K",
    "l": "Reported cost to find a decades-old OpenBSD bug with Mythos",
    "from": "AI pentest pipeline",
    "src": "presented"
   }
  ],
  "quote": {
   "text": "These are the worst models that will ever run on your endpoint.",
   "by": "ATLAS-AI Lab @ Technion, Large Local Malware"
  },
  "afterQuote": "Local models only get more capable from here. Whatever they can be made to do today, they'll do better next year, so limiting what they can touch is worth doing now.",
  "agendaLabel": "The day at a glance · My path through five parallel tracks"
 },
 "sessionsHead": {
  "title": "The six sessions",
  "lead": "The keynote and briefings I picked. Each card separates what was presented from my own analysis, with statistics and their sources, an Identity Lens where it's relevant, and primary resources. Hover a concept to see its definition."
 },
 "takeaways": {
  "title": "Eight things to remember",
  "lead": "What I'm taking away from Day 2, with the sessions each idea came from.",
  "items": [
   {
    "icon": "browser",
    "title": "Local models help attackers live off the land",
    "text": "They're already installed, trusted and able to read files and write code. Attackers don't need to bring their own tools.",
    "sessions": [
     "llm"
    ]
   },
   {
    "icon": "shield",
    "title": "Scope what local AI can touch",
    "text": "Zero trust for models: only the files they're working on right now, and remove them where they aren't needed.",
    "sessions": [
     "llm"
    ]
   },
   {
    "icon": "check",
    "title": "Finding is cheap, proving is expensive",
    "text": "AI can produce thousands of findings. Verification is the bottleneck, and plausibility isn't proof.",
    "sessions": [
     "pen"
    ]
   },
   {
    "icon": "target",
    "title": "Buy the hunter, own the verifier",
    "text": "Discovery tools are a commodity. The step that proves a finding is where our own context and judgment matter.",
    "sessions": [
     "pen"
    ]
   },
   {
    "icon": "chip",
    "title": "Hardware isn't a safe boundary",
    "text": "Bit flips in GPU memory reached root on the host. Shared GPUs, ECC and driver patching deserve attention.",
    "sessions": [
     "gpu"
    ]
   },
   {
    "icon": "eye",
    "title": "Spyware is aimed at people",
    "text": "Journalists, lawyers and activists are prime targets, and public-interest research is often the first warning everyone else gets.",
    "sessions": [
     "k1"
    ]
   },
   {
    "icon": "key",
    "title": "AI gateways are a new trust boundary",
    "text": "An agent-facing gateway can become a confused deputy. One crafted tool call reached Key Vault secrets with the gateway's own identity.",
    "sessions": [
     "mcp"
    ]
   },
   {
    "icon": "book",
    "title": "Archived evidence can be rewritten",
    "text": "Seven of eight popular web archives let snapshots be altered after capture. Keep your own copy of anything you may need to prove.",
    "sessions": [
     "arc"
    ]
   }
  ],
  "quote": {
   "text": "AI is unpredictable. The proof isn't. We check the proof, not the AI.",
   "by": "Rahul Jaisinghani, BrowserStack"
  }
 },
 "enterprise": {
  "lead": "How I'd translate Day 2 into work for a security program. My own analysis, grounded in the sessions linked under each item.",
  "items": [
   {
    "title": "Inventory local AI on endpoints",
    "text": "Find which managed devices carry built-in models (browsers, operating systems, apps) and which applications call them.",
    "sessions": [
     "llm"
    ]
   },
   {
    "title": "Treat local AI as software with permissions",
    "text": "Scope what local models can read, watch for unusual local AI API calls and unexpected child processes from trusted apps, and add EDR rules against command-line use of browser debugging interfaces.",
    "sessions": [
     "llm"
    ]
   },
   {
    "title": "Automate discovery, verify findings",
    "text": "Let AI generate findings, but replay every one independently before engineers spend time on it. Build or own the verification step.",
    "sessions": [
     "pen"
    ]
   },
   {
    "title": "Give AI gateways least-privilege identities",
    "text": "Use separate identities per backend, audit what each can reach, and make sure authorization holds even when the caller is your own agent.",
    "sessions": [
     "mcp"
    ]
   },
   {
    "title": "Treat shared GPUs as a tenant boundary",
    "text": "Turn on ECC where supported, keep drivers patched, and isolate sensitive training and inference workloads from untrusted GPU code.",
    "sessions": [
     "gpu"
    ]
   },
   {
    "title": "Plan for state-grade threats to high-risk staff",
    "text": "Define what happens when someone receives a spyware threat notification: who they tell, which credentials and sessions get revoked, and how the device is handled.",
    "sessions": [
     "k1"
    ]
   },
   {
    "title": "Preserve your own evidence",
    "text": "Don't rely only on third-party web archives for anything you may need to prove later. Capture and hash your own copies.",
    "sessions": [
     "arc"
    ]
   }
  ]
 },
 "footer": {
  "title": "SecTor 2026 · Day 2 · Keynote & Briefings",
  "place": "Wednesday, October 7, 2026 · Metro Toronto Convention Centre · Keynote on the Main Stage, Hall F; briefings in Rooms 701A, 701B and 718AB"
 },
 "linkedin": {},
 "sessions": [
  {
   "id": "k1",
   "time": "9:00",
   "end": "10:00",
   "room": "Main Stage, Hall F",
   "url": "https://blackhat.com/sector/features/schedule/index.html#keynote-on-counterintelligence-for-civil-society-57538",
   "icon": "eye",
   "fmt": "Keynote",
   "short": "Counterintelligence for civil society",
   "sub": "Citizen Lab on mercenary spyware",
   "cats": [
    "endpoint",
    "offensive",
    "governance"
   ],
   "title": "Keynote: On Counterintelligence for Civil Society",
   "org": "Citizen Lab",
   "speakers": [
    [
     "Ron Deibert",
     "Director, The Citizen Lab, University of Toronto"
    ]
   ],
   "summary": "Mercenary spyware is aimed at journalists, activists and lawyers, and almost nobody's threat intel covers them.",
   "covered": [
    "It started with Ahmed Mansoor, a UAE human rights defender who received suspicious texts in 2016. Citizen Lab opened the links in a sandbox and captured NSO Group's Pegasus spyware and the iPhone zero-days it used. Apple shipped emergency iOS and macOS patches.",
    "NSO's CEO had said that if you aren't a criminal you have nothing to be afraid of. Deibert's lesson from the decade since: you should be afraid.",
    "Attribution is hard. You can usually tell where an attack came from but can only infer who ordered it. A Reuters investigation into Project Raven, a UAE hacking unit staffed by former US intelligence operatives, filled in the picture: former NSA analyst Lori Stroud became a whistleblower and confirmed Mansoor and British journalist Rori Donaghy were targets, down to the floor plan of where the operation ran.",
    "A later New York Times investigation found the same operation, run through the firm DarkMatter, had also targeted Citizen Lab itself.",
    "Saudi activist Loujain al-Hathloul, jailed after campaigning for women's right to drive, was hit with a zero-click Pegasus exploit: no interaction, any device. Citizen Lab's discovery led to another emergency Apple patch, and from 2021 Apple began sending threat notifications to users it believed were targeted.",
    "Those notifications keep surfacing cases: an Italian journalist infected with spyware from Israeli vendor Paragon, which led to investigations in Italy where the team testified, and last month Pegasus used against student protesters in Serbia.",
    "Citizen Lab is at the University of Toronto, takes no government direction and sells nothing. Deibert said only 82 of 629 commercial threat-intel reports covered targeted threats to civil society, because civil society isn't a paying client.",
    "The work is risky: no cover identities, no extraction plan, and the adversaries are governments. NSO Group pulled Citizen Lab into its US legal fight, costing about $250,000 in legal fees.",
    "Exposure brings consequences. In Spain, where 65 phones were confirmed hacked with Pegasus, the head of the intelligence agency was dismissed. A US judge found NSO liable for hacking WhatsApp. The US Treasury sanctioned Intellexa, maker of Predator, and its founder. Sandvine threatened to sue the university over a report on its deep packet inspection gear, was then added to the US Entity List and filed for bankruptcy protection. QuaDream shut down after a report Deibert called the final nail in the coffin.",
    "Abuse goes beyond politics. A UK court found Dubai's ruler used Pegasus against his ex-wife, her lawyers and her security team during a custody battle. In Mexico, Pegasus targeted the experts investigating the disappearance of 43 students. In Poland it was used against political opponents, and the former justice minister whose ministry's fund paid for it is now in the US while Poland seeks his extradition. Citizen Lab also found signs the Ontario Provincial Police may be a Paragon customer.",
    "After journalist Jamal Khashoggi's murder, Citizen Lab showed people close to him had spyware on their phones. Strangers then approached the team under false identities; one meeting became a sting that exposed an operative working for private intelligence firm Black Cube.",
    "Citizen Lab is also a disinformation target: Polish prime-time TV aired a diagram claiming it reported to Julian Assange and Russian intelligence, shortly after it published research on Russian espionage.",
    "Why now: Deibert pointed to two decades of decline in global freedom and argued democracy is more fragile than it feels. He was critical of the current US administration, its cuts to foreign aid and tech leaders aligning with it, and noted NSO's new executive chairman is David Friedman, Trump's former ambassador to Israel and former lawyer.",
    "Governments use these tools for transnational repression, tracking dissidents who fled abroad, in some cases ahead of physical attacks. His close: democracies depend on openness that adversaries exploit, polite advocacy isn't enough, and civil society needs its own counterintelligence."
   ],
   "learned": [
    "The exploit chains used against activists work on any unpatched phone. Civil-society targets are often where they're found first, and everyone benefits from the patch.",
    "Threat notifications from Apple, Google and others are a real signal. They deserve a response path, not a shrug.",
    "Public exposure works as a control: patches, sanctions, dismissals and company shutdowns followed the reports."
   ],
   "why": "Spyware sold to governments ends up aimed at journalists, lawyers and activists, and the same zero-click exploits work on anyone's phone. Most commercial threat intel ignores these targets, so research like Citizen Lab's is often the first warning the rest of us get, along with the emergency patches.",
   "concepts": [
    "mercenary",
    "zeroclick",
    "threatnotif",
    "transnational",
    "attribution",
    "lockdown",
    "phishres"
   ],
   "program": [
    "What counterintelligence looks like outside the spy-thriller image: Citizen Lab has practised it for 25 years in the public interest, not on behalf of states or companies.",
    "What the work involves in practice, the methods used and the risks.",
    "How it protects high-risk groups: journalists, human rights defenders, lawyers, activists, refugees and immigrants.",
    "How advances in AI are changing the threat landscape, and why the work matters more than ever."
   ],
   "ask": "If someone on our team got a state-sponsored threat notification on their phone, would they know who to tell?",
   "links": [
    {
     "u": "https://citizenlab.ca/2016/08/million-dollar-dissident-iphone-zero-day-nso-group-uae/",
     "t": "Citizen Lab: The Million Dollar Dissident",
     "d": "The 2016 report on Ahmed Mansoor and the first Pegasus iPhone zero-days.",
     "k": "Research"
    },
    {
     "u": "https://citizenlab.ca/2021/09/forcedentry-nso-group-imessage-zero-click-exploit-captured-in-the-wild/",
     "t": "Citizen Lab: FORCEDENTRY",
     "d": "The zero-click iMessage exploit captured in the wild in 2021.",
     "k": "Research"
    },
    {
     "u": "https://citizenlab.ca/research/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/",
     "t": "Citizen Lab: CatalanGate",
     "d": "The investigation into Pegasus and Candiru use in Spain.",
     "k": "Research"
    },
    {
     "u": "https://citizenlab.ca/2025/03/a-first-look-at-paragons-proliferating-spyware-operations/",
     "t": "Citizen Lab: Virtue or Vice?",
     "d": "A first look at Paragon's spyware, including the Italy cases and a possible Ontario customer.",
     "k": "Research"
    }
   ],
   "takeaway": "Commercial spyware is a real, everyday threat, and public-interest research is often what forces the patch, the sanction or the shutdown.",
   "chain": {
    "steps": [
     "Suspicious message or threat notification",
     "Forensics in a sandbox",
     "Exploit captured",
     "Vendor patches",
     "Public report",
     "Sanctions, lawsuits, firings"
    ],
    "note": "How a Citizen Lab case typically unfolds"
   },
   "stats": [
    {
     "v": "82 / 629",
     "l": "Commercial threat-intel reports that covered threats to civil society",
     "src": "presented"
    },
    {
     "v": "65",
     "l": "Phones confirmed hacked with Pegasus in Spain",
     "src": "presented"
    },
    {
     "v": "0",
     "l": "Clicks needed for a zero-click Pegasus infection",
     "src": {
      "t": "Citizen Lab: FORCEDENTRY",
      "u": "https://citizenlab.ca/2021/09/forcedentry-nso-group-imessage-zero-click-exploit-captured-in-the-wild/"
     }
    }
   ],
   "identity": {
    "points": [
     "A fully compromised phone undermines everything on it: authenticator apps, passkeys, SMS codes and session tokens. Strong authentication assumes a trustworthy device.",
     "For high-risk staff, phishing-resistant methods are necessary but not sufficient. Fast OS updates and features such as Apple's Lockdown Mode matter too.",
     "If an executive's phone receives a state-sponsored threat notification, which sessions and credentials would we revoke, and who decides?"
    ]
   }
  },
  {
   "id": "gpu",
   "time": "10:15",
   "end": "10:55",
   "room": "Room 701A",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=wednesday",
   "icon": "chip",
   "fmt": "Briefing",
   "short": "GPUBreach",
   "sub": "Rowhammer on GPUs, all the way to host root",
   "cats": [
    "hardware",
    "offensive",
    "ai"
   ],
   "title": "GPUBreach: Privilege Escalation Attacks on GPUs Using Rowhammer",
   "org": "University of Toronto",
   "speakers": [
    [
     "Gururaj Saileshwar",
     "Assistant Professor, University of Toronto"
    ],
    [
     "Chris S. Lin",
     "PhD Student, University of Toronto"
    ],
    [
     "Yuqin Yan",
     "PhD Student, University of Toronto"
    ],
    [
     "Guozhen Ding",
     "Master's Student, University of Toronto"
    ],
    [
     "Joyce Qu",
     "Undergraduate Student, University of Toronto"
    ],
    [
     "Joseph Zhu",
     "Machine Learning Engineer, Google"
    ],
    [
     "David Lie",
     "Professor & Canada Research Chair, University of Toronto"
    ]
   ],
   "summary": "Flipping bits in GPU memory can take an unprivileged program all the way to root on the host.",
   "covered": [
    "Rowhammer: memory stores bits as tiny charges. Hammering a row with rapid repeated access can leak charge into its neighbours and flip a 1 to a 0 or back. It's been known for a decade; in 2015 Mark Seaborn and Google Project Zero used it to gain kernel privileges and escape sandboxes on CPUs.",
    "Each memory generation (DDR4, DDR5) needs exponentially fewer accesses to cause a flip, so memory is getting more vulnerable, not less.",
    "The team showed GPUs flip too, on an NVIDIA RTX A6000. GPUs are what most local and hosted AI models run on.",
    "GPUBreach targets the GPU's page tables, which translate virtual to physical addresses. The hard part is getting a page table placed where bits can be flipped: page tables sit about 200 MB away from user data, and filling that region naively would take 256 GB.",
    "They shaped memory with standard CUDA allocations and unified virtual memory to create dense regions of small page tables (about 97% dense), then used a timing side channel to tell when a new page table was being allocated. No driver access or elevated privileges needed.",
    "It worked on A6000 driver versions from 2023 to 2026 and gave arbitrary read and write across GPU memory.",
    "With read access, an attacker can quietly copy another process's model weights or dump cryptographic keys, even keys that sit in GPU memory for only milliseconds. Keys can be located through shared libraries or by profiling how a victim's pages change.",
    "With write access, tampering with model weights is easy to catch with an integrity check, but tampering with the libraries the model uses degrades everything and is harder to spot.",
    "To reach the CPU: the GPU's aperture bits let page-table entries point at CPU memory. The IOMMU limits that to a small region, but the NVIDIA driver trusted data copied from the GPU without sanitizing it, which allowed a buffer overflow that overwrote driver pointers and gave a root shell on the host.",
    "It's a hardware problem, not just a GPU problem. Mitigation needs several layers: sanitize GPU-side input in the driver, isolate GPU page tables from data, and use ECC memory on GPUs. The researchers note ECC isn't foolproof and there's no known fix yet for desktop and laptop GPUs.",
    "The work was disclosed to NVIDIA, earned a Google bug bounty, and is published at gpubreach.ca."
   ],
   "learned": [
    "Hardware isolation between tenants is an assumption, not a guarantee. A bit flip turned a GPU into a path to the host.",
    "Because the attack starts from an unprivileged CUDA program, anyone who can run GPU code (a tenant, a notebook, a model-serving job) is in scope.",
    "The researchers' mitigations need hardware (ECC) and software (driver hardening) together. Neither alone is enough."
   ],
   "why": "GPUs now hold some of our most valuable data: model weights, and keys used by AI and other workloads. Shared GPU servers and cloud GPU instances assume one tenant's code can't read another's memory, and this research breaks that assumption.",
   "concepts": [
    "rowhammer",
    "pagetable",
    "ecc",
    "iommu",
    "gpu"
   ],
   "program": [
    "Rowhammer on NVIDIA GPUs turned into privilege escalation by reverse engineering how GPU page tables are allocated.",
    "An unprivileged CUDA kernel flips bits in page-table entries to gain arbitrary read and write to GPU memory.",
    "Demonstrated extracting cryptographic keys and model weights, then chaining a previously unknown NVIDIA driver memory-safety bug and malicious DMA to get root on the host.",
    "Mitigations: enable ECC on GPUs and harden drivers against malicious devices."
   ],
   "ask": "Where do we share GPUs between users or workloads, and is ECC turned on there?",
   "links": [
    {
     "u": "https://gpubreach.ca",
     "t": "GPUBreach",
     "d": "The project page: summary, FAQ, disclosure timeline and mitigations.",
     "k": "Project"
    },
    {
     "u": "https://gururaj-s.github.io/assets/pdf/SP26_GPUBreach.pdf",
     "t": "GPUBreach paper (IEEE S&P 2026)",
     "d": "The full research paper.",
     "k": "Paper"
    },
    {
     "u": "https://github.com/sith-lab/gpubreach",
     "t": "sith-lab/gpubreach on GitHub",
     "d": "The research code and artifact.",
     "k": "Code"
    },
    {
     "u": "https://nvidia.custhelp.com/app/answers/detail/a_id/5671",
     "t": "NVIDIA: Rowhammer security notice",
     "d": "NVIDIA's guidance on Rowhammer and GPU memory.",
     "k": "Advisory"
    },
    {
     "u": "https://projectzero.google/2015/03/exploiting-dram-rowhammer-bug-to-gain.html",
     "t": "Project Zero: Exploiting the DRAM Rowhammer bug",
     "d": "Mark Seaborn's 2015 write-up that first turned Rowhammer into kernel privileges.",
     "k": "Research"
    }
   ],
   "takeaway": "Hardware isn't a boundary we can take for granted. Wherever we run or share GPUs, ECC should be on, drivers patched, and multi-tenant use given a second look.",
   "chain": {
    "steps": [
     "Unprivileged CUDA program",
     "Hammer GPU memory",
     "Flip a page-table bit",
     "Read/write all GPU memory",
     "Steal keys & weights",
     "Abuse driver trust",
     "Root on host"
    ],
    "note": "GPUBreach, end to end"
   },
   "stats": [
    {
     "v": "~97%",
     "l": "Page-table density reached by shaping GPU memory",
     "src": "presented"
    },
    {
     "v": "4 years",
     "l": "Of A6000 driver releases shown vulnerable (2023–2026)",
     "src": "presented"
    },
    {
     "v": "0",
     "l": "Privileges needed to start: an unprivileged CUDA kernel",
     "src": "program"
    }
   ],
   "identity": {
    "points": [
     "Key material in GPU memory is exposed: keys could be dumped even when they were resident for milliseconds. Keep long-lived secrets off shared accelerators where possible.",
     "Root on the host puts every credential and token on that host in play, including the workload identities AI jobs use."
    ]
   }
  },
  {
   "id": "llm",
   "time": "11:10",
   "end": "11:50",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=wednesday",
   "icon": "browser",
   "fmt": "Briefing",
   "short": "Large Local Malware",
   "sub": "Your local LLM as a malware engine",
   "cats": [
    "ai",
    "endpoint",
    "offensive"
   ],
   "title": "Large Local Malware: Weaponizing Your Local LLM for Runtime Malware Generation",
   "org": "ATLAS-AI Lab @ Technion",
   "speakers": [
    [
     "Chaggai Heching",
     "AI Safety & Security Researcher, ATLAS-AI Lab @ Technion"
    ],
    [
     "Ori Levy",
     "AI Security Researcher, ATLAS-AI Lab @ Technion"
    ],
    [
     "Adar Peleg",
     "AI Security Researcher, ATLAS-AI Lab @ Technion"
    ]
   ],
   "summary": "The AI models vendors quietly install on our endpoints can be turned into a malware engine that lives off the land.",
   "covered": [
    "Chrome downloads a local model, Gemini Nano, onto many machines without the user switching anything on. Vendors are putting local models into operating systems, phones and apps, mostly without asking.",
    "Why vendors do it: it's cheap (it runs on your hardware, not theirs), fast, private and works offline, and it lets companies add AI features without building their own models. Example given: a site like Netflix could use the local model to answer questions about its catalogue right on your machine. Chrome's on-device internals page lets you query the model directly and tune its responses.",
    "Background: prompt injection, direct and indirect, is the most common attack on any model. Morris II showed a self-replicating worm spreading between AI email agents. IBM's DeepLocker kept malware dormant until an AI model recognized its intended target. Autonomous hacking agents are now used in real attacks, and APT28 has used LLMs as part of its attack chain.",
    "Small local models aren't good coders, but attackers can still use them: steal the weights and run their own inference, or reach the model through Chrome's DevTools Protocol from the command line. The guardrails were weak and easy to bypass.",
    "Where they shine is understanding context. The team built a harness that let the model decide which files to read and how much, and it built a detailed profile of the user. The researcher tried it on himself.",
    "Semantic triggers: instead of the simple checks traditional malware uses to decide when to run, the model decides based on what it understands about the machine and the person.",
    "Code merging: the model hid attack code inside a file the user already runs, chose where to insert each piece and obfuscated it well enough to avoid detection.",
    "The local model does the profiling, the deciding and the merging, so attackers weaponize your own data and tools. It's another living-off-the-land option, and it's hard to tell a legitimate AI action from an attacker's.",
    "Defences discussed: remove the local model where it isn't needed; add EDR rules for this behaviour, including blocking command-line use of Chrome's DevTools Protocol; and apply zero trust, scoping local models to only the files they're working on right now."
   ],
   "learned": [
    "Vendors are adding AI runtimes to endpoints faster than security teams are inventorying them.",
    "The model doesn't need to be good at coding to be dangerous. Understanding context (which files matter, when to act) is the valuable part for an attacker.",
    "Runtime-generated payloads move detection from “what is this file?” to “what is this process doing?”."
   ],
   "why": "Many endpoints may already carry a local model nobody approved, and it can read files and write code. Security tools are built to catch malicious files and known signatures; malware written on the device by a trusted app's model has neither, so detection has to watch behaviour instead.",
   "concepts": [
    "localmodel",
    "gemininano",
    "promptinjection",
    "semantictrigger",
    "lotl",
    "devtools",
    "llm",
    "passkey",
    "dbsc"
   ],
   "program": [
    "Malware generated at runtime by an on-device model such as Chrome's built-in AI, instead of being dropped as a file.",
    "The model first profiles the security tools running on the host, so the payload has no file for static scanners to find and no known signature.",
    "A demonstration of the full attack chain on a fully patched machine.",
    "Proposed detection: monitor suspicious local AI API calls, prompt-driven code generation and unexpected child processes from trusted applications."
   ],
   "ask": "Do we know which of our managed devices have a local AI model installed, and what it's allowed to read?",
   "links": [
    {
     "u": "https://developer.chrome.com/docs/ai/built-in",
     "t": "Chrome for Developers: Built-in AI",
     "d": "How Chrome's on-device models and AI APIs work, including Gemini Nano.",
     "k": "Docs"
    },
    {
     "u": "https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai",
     "t": "Google Threat Intelligence: Adversarial misuse of generative AI",
     "d": "How state-backed actors have used LLMs in their operations.",
     "k": "Threat research"
    },
    {
     "u": "https://arxiv.org/abs/2403.02817",
     "t": "Here Comes the AI Worm (Morris II)",
     "d": "The paper on self-replicating worms that spread between AI agents.",
     "k": "Paper"
    },
    {
     "u": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
     "t": "OWASP LLM01: Prompt Injection",
     "d": "Types, impacts and mitigations for prompt injection.",
     "k": "Standard"
    },
    {
     "u": "https://infocondb.org/con/black-hat/black-hat-usa-2018/deeplocker-concealing-targeted-attacks-with-ai-locksmithing",
     "t": "IBM DeepLocker (Black Hat USA 2018)",
     "d": "The talk that showed AI-triggered, targeted malware.",
     "k": "Talk"
    }
   ],
   "takeaway": "These are the worst models that will ever run on our endpoints. They'll only get more capable, so now is the time to find where local models exist and limit what they can touch.",
   "chain": {
    "steps": [
     "Local model already installed",
     "Attacker reaches the model",
     "Model profiles the user's files",
     "Semantic trigger picks the moment",
     "Code merged into a trusted file"
    ],
    "note": "The attack flow as described in the talk"
   },
   "identity": {
    "points": [
     "A local model runs with the signed-in user's access: their files, their browser data and anything their session can reach.",
     "Browser identity lives on the endpoint too. Session cookies and tokens are exactly what a profiling harness can find.",
     "Passkeys resist phishing, but a stolen session token can still be replayed. Device-bound sessions and short token lifetimes reduce what local malware can take."
    ]
   }
  },
  {
   "id": "pen",
   "time": "2:25",
   "end": "3:05",
   "room": "Room 701B",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=wednesday",
   "icon": "check",
   "fmt": "Briefing",
   "short": "AI pentest pipeline",
   "sub": "Verification is the new bottleneck",
   "cats": [
    "ai",
    "offensive"
   ],
   "title": "The Model Isn't the Bottleneck: Building an AI Pentest Pipeline When You're Not in Mythos",
   "org": "BrowserStack",
   "speakers": [
    [
     "Rahul Jaisinghani",
     "Lead Security Engineer, BrowserStack"
    ]
   ],
   "summary": "AI made finding vulnerabilities cheap. Proving they're real is now the slow, expensive part.",
   "covered": [
    "The old equation: a traditional pentest is roughly 5 days, 3 apps and 10,000 possible paths, with the tester constantly deciding where to look and what to abandon. Coverage = human capability × time.",
    "Attackers, bug bounty hunters, scanner vendors and the engineers writing our code all use AI now, so defenders should too. AI removed the time limit: Coverage = AI compute × human judgment.",
    "Every bottleneck you remove exposes the next one. Discovery and execution got fast, and the time moved to verification. Finding got cheap, proving didn't, and proof replaces reputation.",
    "The Mythos numbers, as presented: 29,439 vulnerabilities found, 6,123 reviewed, 516 patched. Human triage is the rate-limiting step. Firefox went from 2 to 181 vulnerabilities found, and an OpenBSD bug up to 27 years old took about 1,000 runs and $20,000 to find. The UK AI Security Institute saw the full attack chain succeed only 3 times in 10.",
    "The model is the engine and the harness is the body of the car, and their contribution is closer to 50/50 than people assume. With the same model but different tools, detection went from 5% to 30% to 45%.",
    "A vulnerability is a claim until it's proven, and plausibility isn't proof. Build the system around proof: the model is one box, and an independent verifier at the core re-proves every finding.",
    "Know whether you're testing production or a dev copy the AI spun up. Without real production context, you risk hallucinated vulnerabilities.",
    "The pipeline (below): a context layer with approved scope, repositories, architecture docs, a STRIDE or ATT&CK threat model and lessons from past engagements; a mapper that maps once; hunters that each own one vulnerability; a chain synthesizer; a pentest agent for recon, payload generation, a safety gate and exploit execution; then an independent verifier that replays every finding to a pass or fail before human review and a structured report.",
    "Agents share findings to sharpen each other's context, and signals track which tests actually ran versus which were simply blocked.",
    "Results after adding the verifier: 60% less analyst time, 100% of findings independently replayed, 90% lower cost per verified finding and 94% coverage, with 60% of findings rated high or critical.",
    "Pentesting is now a search-budget problem: exploit (go deep on known weaknesses) or explore (look for new attack surface)."
   ],
   "learned": [
    "The bottleneck moved; it didn't disappear. Human triage now limits how fast AI findings become fixes.",
    "Owning the verifier keeps judgment in-house. Scope, production context and the bar for proof are things a vendor can't set for you.",
    "Hallucinated vulnerabilities have a real cost. A pipeline without independent proof just moves noise from the scanner to the engineers."
   ],
   "why": "Whether we run AI testing ourselves or receive AI-generated findings from vendors and bug bounty programs, the volume will outrun our ability to triage. Unverified findings waste engineering time; a verification step is what turns AI output into work worth acting on.",
   "concepts": [
    "verifier",
    "harness",
    "mythos",
    "exploreexploit"
   ],
   "program": [
    "How to build an AI-assisted pentest pipeline without access to frontier models like Anthropic's Mythos.",
    "A four-agent white-box scanner, an eleven-subagent Claude Code plugin, an evaluation harness, and cost and accuracy metrics.",
    "An early phase with a false-positive rate around 70%, and the fixes that brought it down.",
    "The goal: have the AI prove that a specific suspected vulnerability is actually exploitable."
   ],
   "ask": "When an AI tool or a bug bounty report hands us a finding, how do we prove it's real before engineers spend time on it?",
   "links": [
    {
     "u": "https://www.anthropic.com/glasswing",
     "t": "Anthropic: Project Glasswing",
     "d": "The program behind the Mythos vulnerability numbers.",
     "k": "Program"
    },
    {
     "u": "https://www.anthropic.com/research/glasswing-initial-update",
     "t": "Anthropic: Project Glasswing, an initial update",
     "d": "Anthropic's published results. Public counts change over time and differ from the figures presented.",
     "k": "Research"
    },
    {
     "u": "https://red.anthropic.com/2026/mythos-preview/",
     "t": "Anthropic: Claude Mythos Preview's cybersecurity capabilities",
     "d": "Technical detail on what the model can and can't do.",
     "k": "Research"
    },
    {
     "u": "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities",
     "t": "UK AI Security Institute: Our evaluation of Claude Mythos Preview's cyber capabilities",
     "d": "The independent evaluation referenced in the talk.",
     "k": "Evaluation"
    }
   ],
   "takeaway": "“Buy the hunter, own the verifier.” Discovery tools will keep improving and are easy to buy. The proof step is where our own context and judgment matter.",
   "chain": {
    "steps": [
     "Context & scope",
     "Mapper",
     "Hunters",
     "Chain synthesizer",
     "Pentest agent",
     "Independent verifier",
     "Human review & report"
    ],
    "note": "The pipeline as presented"
   },
   "stats": [
    {
     "v": "29,439",
     "l": "Vulnerabilities Mythos found; 6,123 reviewed and 516 patched",
     "src": "presented"
    },
    {
     "v": "60%",
     "l": "Less analyst time once the independent verifier was added",
     "src": "presented"
    },
    {
     "v": "90%",
     "l": "Lower cost per verified finding",
     "src": "presented"
    },
    {
     "v": "3 in 10",
     "l": "Runs where the full attack chain succeeded in the UK AISI's testing",
     "src": "presented"
    }
   ],
   "identity": {
    "points": [
     "Identities are one of the pipeline's building blocks in my notes: hunters need test accounts at different privilege levels to find authorization bugs.",
     "Those test identities are real credentials. Scope them to the test environment, rotate them, and make sure an agent can't reuse them in production."
    ]
   }
  },
  {
   "id": "arc",
   "time": "3:25",
   "end": "4:05",
   "room": "Room 701A",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=wednesday#we-have-always-been-at-war-with-eastasia-attacks-against-web-archives-55132",
   "icon": "book",
   "fmt": "Briefing",
   "short": "Attacks on web archives",
   "sub": "Rewriting history in the Wayback Machine",
   "cats": [
    "offensive",
    "governance"
   ],
   "title": "“We Have Always Been at War With Eastasia”: Attacks Against Web Archives",
   "org": "TU Braunschweig",
   "speakers": [
    [
     "Robin Kirchner",
     "PhD Candidate, TU Braunschweig · Software Engineer, Google"
    ],
    [
     "Martin Johns",
     "Professor, TU Braunschweig"
    ]
   ],
   "summary": "A website can hide from web archives, or quietly change its archived snapshots long after they were captured.",
   "covered": [
    "Web archives are widely treated as a truthful record and are relied on in research, everyday reference and legal filings. The talk challenges that assumption with five attacks under two threat models.",
    "The evasive publisher: a site that hides from archives and selectively shows them different content than real visitors see.",
    "The anachronistic publisher: a site that exploits archiving flaws to change its snapshots long after they were captured.",
    "The researchers tested eight popular archives, including the Wayback Machine, Archive.today and Harvard Library's Perma.cc. All eight were vulnerable to multiple attacks, and in seven of them stored snapshots could be altered after the fact.",
    "The attacks proved hard to fix: archives were still vulnerable after several patches, a year after disclosure, and the presenters could still change their own snapshots at will.",
    "Because the manipulation happens client-side, it can be detected, and the talk covers how.",
    "The research is published as “The Power to Never Be Wrong: Evasions and Anachronistic Attacks Against Web Archives” (ACM CCS 2025)."
   ],
   "learned": [
    "Most people who cite archived pages, legal teams included, assume snapshot integrity. That assumption now needs a caveat.",
    "Because the manipulation is client-side and detectable, a practical defence exists: capture and preserve your own evidence with integrity checks."
   ],
   "why": "Archived pages get used as evidence in disputes, investigations, legal filings and research, and in our own work when we need to show what a site or vendor said at a point in time. If a site can change its own past, a snapshot on its own isn't proof.",
   "concepts": [
    "snapshot",
    "evasive",
    "anachronistic"
   ],
   "program": [
    "Technical background on how web archives capture and replay pages.",
    "Five new attacks across two threat models, presented before malicious actors start using them.",
    "Evidence that current archives fall short: sites can selectively hide and reliably alter snapshots after capture.",
    "How to detect the client-side manipulations."
   ],
   "ask": "When we rely on an archived web page as evidence, do we also keep our own copy from the time?",
   "links": [
    {
     "u": "https://www.securitee.org/files/kirchner_power_ccs2025.pdf",
     "t": "The Power to Never Be Wrong (ACM CCS 2025)",
     "d": "The full research paper behind the talk.",
     "k": "Paper"
    },
    {
     "u": "https://magazin.tu-braunschweig.de/en/pi-post/memories-at-risk/",
     "t": "TU Braunschweig: Web archives found open to tampering",
     "d": "A plain-language summary of the findings.",
     "k": "Summary"
    },
    {
     "u": "https://rewritinghistory.cs.washington.edu/",
     "t": "Rewriting History (University of Washington, 2017)",
     "d": "Earlier research on manipulating the archived web from the present.",
     "k": "Research"
    }
   ],
   "fromProgram": true,
   "stats": [
    {
     "v": "8",
     "l": "Popular web archives tested",
     "src": "program"
    },
    {
     "v": "7 of 8",
     "l": "Let stored snapshots be altered after capture",
     "src": {
      "t": "TU Braunschweig",
      "u": "https://magazin.tu-braunschweig.de/en/pi-post/memories-at-risk/"
     }
    },
    {
     "v": "1 year",
     "l": "After disclosure, archives were still vulnerable",
     "src": "program"
    }
   ]
  },
  {
   "id": "mcp",
   "time": "4:20",
   "end": "5:00",
   "room": "Room 718AB",
   "url": "https://blackhat.com/sector/briefings/schedule/?day=wednesday#secrets-breaking-azures-ai-gateway-through-the-model-context-protocol-55320",
   "icon": "key",
   "fmt": "Briefing",
   "short": "Breaking Azure's AI gateway",
   "sub": "One MCP tool call to Key Vault secrets",
   "cats": [
    "ai",
    "cloud",
    "identity",
    "offensive"
   ],
   "title": "../../secrets: Breaking Azure's AI Gateway Through the Model Context Protocol",
   "org": "BeyondTrust",
   "speakers": [
    [
     "Simon Maxwell-Stewart",
     "Staff Security Researcher, BeyondTrust"
    ]
   ],
   "summary": "A crafted argument in one MCP tool call could make Azure's API gateway fetch Key Vault secrets with its own credentials.",
   "covered": [
    "Azure API Management (APIM) added support for the Model Context Protocol, so REST APIs it manages can be exposed as tools AI agents call, from Copilot Studio and Microsoft 365 Copilot to third-party agents such as Claude.",
    "The researcher reverse engineered APIM's MCP handler and found it didn't properly validate tool arguments. A crafted path in an argument could redirect the call to a different API on the same gateway: cross-API server-side request forgery.",
    "The impact grows in Microsoft's “AI Hub Gateway” reference architecture, which puts Key Vault, Azure OpenAI, Storage, Azure Resource Manager and Service Bus behind one APIM instance, each authenticated with the gateway's managed identity.",
    "Because the redirected request comes from the gateway itself, its managed-identity policies fire and attach the gateway's credentials. A single MCP tool call with a crafted argument could read Key Vault secrets.",
    "The attack gets past IP filters and managed-identity isolation; the talk also covers which controls it doesn't defeat. The presenter argued Microsoft's own documentation steers customers toward the vulnerable setup.",
    "Indirect prompt injection makes it worse: the requirement changes from “the attacker needs a key” to “the attacker needs to put a string in front of an AI agent.”"
   ],
   "learned": [
    "Putting an AI front door on an API gateway changes who can reach internal APIs: now it's anything that can influence an agent's arguments.",
    "Reference architectures concentrate risk. One gateway identity with access to Key Vault, OpenAI, Storage and Resource Manager is a single point of compromise."
   ],
   "why": "Organizations are putting AI gateways in front of internal APIs so agents can call them. When the gateway's own identity can reach secrets, anything that can steer one tool call, including text an agent happens to read, can turn the gateway into a confused deputy.",
   "concepts": [
    "mcp",
    "confuseddeputy",
    "ssrf",
    "managedidentity",
    "promptinjection",
    "nhi"
   ],
   "program": [
    "A model of the confused deputy pattern in API Management and AI infrastructure, with a method others can replicate.",
    "How to audit APIM instances for this class of vulnerability, plus an updated hardening guide.",
    "A demonstration from a user's point of view, through an AI agent.",
    "How AI red teamers can extend prompt injection techniques to older APIM infrastructure."
   ],
   "ask": "If we expose internal APIs to AI agents through a gateway, what can the gateway's own identity reach?",
   "links": [
    {
     "u": "https://learn.microsoft.com/en-us/azure/api-management/secure-mcp-servers",
     "t": "Microsoft Learn: Secure access to MCP servers in API Management",
     "d": "Inbound and outbound authentication for MCP in APIM.",
     "k": "Docs"
    },
    {
     "u": "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-use-managed-service-identity",
     "t": "Microsoft Learn: Use managed identities in API Management",
     "d": "How the gateway's managed identity authenticates to backends.",
     "k": "Docs"
    },
    {
     "u": "https://modelcontextprotocol.io/specification/draft/basic/security_best_practices",
     "t": "MCP: Security best practices",
     "d": "The protocol's guidance on confused deputy, SSRF and scope minimization.",
     "k": "Spec"
    },
    {
     "u": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
     "t": "OWASP LLM01: Prompt Injection",
     "d": "Why a string in front of an agent can be enough.",
     "k": "Standard"
    }
   ],
   "fromProgram": true,
   "chain": {
    "steps": [
     "Crafted text reaches an AI agent",
     "Agent calls an MCP tool",
     "Path traversal in the argument",
     "Gateway calls an internal API",
     "Managed identity attaches credentials",
     "Key Vault secrets returned"
    ],
    "note": "The attack path as described in the program"
   },
   "stats": [
    {
     "v": "1",
     "l": "MCP tool call with a crafted argument needed to read Key Vault secrets",
     "src": "program"
    }
   ],
   "identity": {
    "points": [
     "The gateway's managed identity was the confused deputy: it authenticated the attacker's redirected request with its own credentials.",
     "Use separate identities per backend instead of one gateway identity for everything, and scope each to the minimum role.",
     "Prompt injection turns “who can call this API?” into “who can put text in front of an agent?”. Authorization has to hold even when the caller is your own agent.",
     "Audit what the gateway's identity can reach in Key Vault and Resource Manager. That's the blast radius of one bad tool call."
    ]
   }
  }
 ],
 "agenda": [
  [
   "8:00",
   "Breakfast",
   null,
   "coffee"
  ],
  "k1",
  "gpu",
  "llm",
  [
   "11:45",
   "Lunch",
   null,
   "coffee"
  ],
  "pen",
  [
   "3:05",
   "Refreshment break",
   null,
   "coffee"
  ],
  "arc",
  "mcp"
 ],
 "quiz": {
  "lead": "Fourteen questions drawn from the sessions. You'll see the answer and an explanation after each one, and a breakdown by topic at the end.",
  "items": [
   {
    "s": "k1",
    "q": "What did Citizen Lab capture from the texts sent to Ahmed Mansoor in 2016?",
    "o": [
     "Pegasus and the iPhone zero-days it used",
     "Predator and the Android exploits it used",
     "Graphite and the WhatsApp flaw it used",
     "FinFisher and the Windows bugs it used"
    ],
    "a": 0,
    "e": "NSO Group's Pegasus, with the iPhone zero-days that led to emergency Apple patches.",
    "cat": "endpoint"
   },
   {
    "s": "k1",
    "q": "How many of the 629 commercial threat-intel reports Deibert cited covered threats to civil society?",
    "o": [
     "82",
     "29",
     "157",
     "316"
    ],
    "a": 0,
    "e": "Only 82. Threat intel follows the customers who pay for it, and civil society isn't one.",
    "cat": "governance"
   },
   {
    "s": "k1",
    "q": "In which country was the intelligence chief dismissed after 65 phones were confirmed hacked with Pegasus?",
    "o": [
     "Spain",
     "Poland",
     "Italy",
     "Serbia"
    ],
    "a": 0,
    "e": "Spain. Poland, Italy and Serbia all came up too, for other cases.",
    "cat": "governance"
   },
   {
    "s": "gpu",
    "q": "What does GPUBreach flip bits in to gain arbitrary GPU memory access?",
    "o": [
     "Page-table entries",
     "Shader cache lines",
     "Model weight tensors",
     "Driver config files"
    ],
    "a": 0,
    "e": "Corrupting a page-table entry lets an unprivileged program read and write all GPU memory.",
    "cat": "hardware"
   },
   {
    "s": "gpu",
    "q": "What let GPUBreach get from the GPU to root on the host?",
    "o": [
     "A driver that trusted GPU data without checking it",
     "A shared CUDA library loaded with admin rights",
     "An IOMMU setting left disabled by default",
     "A firmware update channel with no signing"
    ],
    "a": 0,
    "e": "The NVIDIA driver copied data from the GPU without sanitizing it, allowing a buffer overflow. It worked even with the IOMMU on.",
    "cat": "hardware"
   },
   {
    "s": "gpu",
    "q": "Which mitigation did the researchers recommend for server and workstation GPUs?",
    "o": [
     "Turn on ECC memory",
     "Disable unified memory",
     "Pin older driver versions",
     "Lower GPU clock speeds"
    ],
    "a": 0,
    "e": "ECC helps, though it isn't foolproof, and there's no known fix yet for desktop and laptop GPUs.",
    "cat": "hardware"
   },
   {
    "s": "llm",
    "q": "Which local model does Chrome download onto many machines without the user opting in?",
    "o": [
     "Gemini Nano",
     "Gemma 2B",
     "Phi-3 Mini",
     "Llama 3.2 1B"
    ],
    "a": 0,
    "e": "Gemini Nano powers Chrome's built-in AI features.",
    "cat": "endpoint"
   },
   {
    "s": "llm",
    "q": "Which earlier attack kept malware dormant until an AI model recognized its intended target?",
    "o": [
     "IBM's DeepLocker",
     "Morris II",
     "FORCEDENTRY",
     "Project Raven"
    ],
    "a": 0,
    "e": "DeepLocker (2018). Morris II was the self-replicating AI email worm.",
    "cat": "ai"
   },
   {
    "s": "llm",
    "q": "Which EDR rule did the researchers suggest to cut off one route to Chrome's model?",
    "o": [
     "Block command-line use of the DevTools Protocol",
     "Block Chrome from reading the Downloads folder",
     "Block GPU acceleration inside the browser",
     "Block Google's model update servers outright"
    ],
    "a": 0,
    "e": "Attackers can reach the local model through the Chrome DevTools Protocol from the command line.",
    "cat": "endpoint"
   },
   {
    "s": "pen",
    "q": "Of the 29,439 vulnerabilities Mythos found, how many were patched, as presented?",
    "o": [
     "516",
     "6,123",
     "2,940",
     "181"
    ],
    "a": 0,
    "e": "516 patched and 6,123 reviewed. 181 was the Firefox count. Human triage is the bottleneck.",
    "cat": "ai"
   },
   {
    "s": "pen",
    "q": "What does “Buy the hunter, own the verifier” recommend?",
    "o": [
     "Buy discovery tools; keep proving findings in-house",
     "Buy verification tools; build discovery in-house",
     "Buy both from one vendor for consistent results",
     "Build both in-house to protect sensitive findings"
    ],
    "a": 0,
    "e": "Discovery is a commodity. The proof step is where your own context and judgment matter.",
    "cat": "ai"
   },
   {
    "s": "pen",
    "q": "With the same model but different tools on each run, what was the best detection rate?",
    "o": [
     "45%",
     "30%",
     "60%",
     "94%"
    ],
    "a": 0,
    "e": "Detection went from 5% to 30% to 45%. 60% and 94% were results after adding the verifier.",
    "cat": "ai"
   },
   {
    "s": "arc",
    "q": "In how many of the eight web archives tested could stored snapshots be altered after capture?",
    "o": [
     "Seven",
     "All eight",
     "Five",
     "Three"
    ],
    "a": 0,
    "e": "Seven of eight. All eight were vulnerable to at least some of the attacks.",
    "cat": "offensive"
   },
   {
    "s": "mcp",
    "q": "In the Azure API Management research, what attached credentials to the attacker's redirected request?",
    "o": [
     "The gateway's own managed identity",
     "The user's Copilot session token",
     "A Key Vault policy open to all users",
     "An API key stored in the MCP tool"
    ],
    "a": 0,
    "e": "The request came from the gateway itself, so its managed-identity policy fired: a confused deputy.",
    "cat": "identity"
   }
  ]
 }
};
