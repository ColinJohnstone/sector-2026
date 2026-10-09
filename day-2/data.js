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
  "lead": "Day 1 was about attacks moving at machine speed. Day 2 was about where they land: the phones, browsers and GPUs people already trust, and how hard it has become to prove what's real.",
  "ideas": [
   {
    "icon": "chip",
    "eyebrow": "Device",
    "title": "Your hardware is attack surface",
    "text": "Local AI models, GPUs and phones run code users never chose to trust, and the research showed how each can be turned against them."
   },
   {
    "icon": "check",
    "eyebrow": "Proof",
    "title": "Finding is cheap, proving isn't",
    "text": "AI floods teams with findings. Verification is now the bottleneck, so the pipeline presented was built around the proof."
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
  "afterQuote": "Local models only get more capable from here. Whatever they can be made to do today, they'll do better next year.",
  "agendaLabel": "The day at a glance · My path through five parallel tracks"
 },
 "sessionsHead": {
  "title": "The six sessions",
  "lead": "The keynote and briefings I picked. Each card separates what was presented from my own observations, with statistics and their sources and primary resources. Hover a concept to see its definition."
 },
 "takeaways": {
  "title": "Eight things to remember",
  "lead": "What stood out from Day 2, with the sessions each idea came from.",
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
    "title": "The researchers' answer: scope local AI",
    "text": "Zero trust for models, as they put it: access to only the files they're working on right now, and removed where they aren't needed.",
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
    "text": "Rahul Jaisinghani's motto: discovery tools are a commodity, and the step that proves a finding is where context and judgment matter.",
    "sessions": [
     "pen"
    ]
   },
   {
    "icon": "chip",
    "title": "Hardware isn't a safe boundary",
    "text": "Bit flips in GPU memory reached root on the host. The researchers pointed to ECC, driver hardening and isolating GPU page tables.",
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
    "text": "Seven of eight popular web archives let snapshots be altered after capture, and the attacks still worked a year after disclosure.",
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
 "footer": {
  "title": "SecTor 2026 · Day 2 · Keynote & Briefings",
  "place": "Wednesday, October 7, 2026 · Metro Toronto Convention Centre · Keynote on the Main Stage, Hall F; briefings in Rooms 701A, 701B and 718AB"
 },
 "linkedin": {
  "Ron Deibert": "https://www.linkedin.com/in/ronald-deibert-8b93171/",
  "Chaggai Heching": "https://www.linkedin.com/in/chaggai-heching/",
  "Ori Levy": "https://www.linkedin.com/in/ori-levy-a48236235/",
  "Adar Peleg": "https://www.linkedin.com/in/adarpeleg/",
  "Rahul Jaisinghani": "https://www.linkedin.com/in/rahul-jaisinghani/",
  "Gururaj Saileshwar": "https://www.linkedin.com/in/gururaj-saileshwar-080a4526/",
  "Chris S. Lin": "https://www.linkedin.com/in/shaopeng-lin/",
  "Guozhen Ding": "https://www.linkedin.com/in/guozhen-ding/",
  "David Lie": "https://www.linkedin.com/in/david-lie-a1b4563/",
  "Robin Kirchner": "https://www.linkedin.com/in/robin-kirchner-3073971a3/",
  "Martin Johns": "https://www.linkedin.com/in/martinjohns/",
  "Simon Maxwell-Stewart": "https://www.linkedin.com/in/simon-maxwell-stewart-46b848a2/"
 },
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
    "The thread through every case was that civil-society targets are often where spyware is found first, and the emergency patches that follow protect everyone's phones.",
    "Deibert's statistic stood out: only 82 of 629 commercial threat-intel reports covered targeted threats to civil society, because civil society isn't a paying client.",
    "Public exposure carried consequences: patches, sanctions, a dismissal, a court ruling and company shutdowns followed the reports."
   ],
   "why": "It was a very different opening from Day 1. Instead of cloud and AI, it was about people, and it set up the day's theme: the threat is already on the device, in this case the phone in someone's pocket.",
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
   ]
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
    "Rowhammer has been known for a decade, but each memory generation needs fewer accesses to flip a bit, so it's getting worse rather than going away.",
    "The clever part was the memory shaping: standard CUDA allocations arranged so page tables land where bits can be flipped, with no special privileges.",
    "The mitigations the researchers described need hardware and software together (ECC, driver hardening, isolating GPU page tables), and they noted there's no known fix yet for desktop and laptop GPUs."
   ],
   "why": "GPUs are what most local and hosted AI models run on, so this connected directly to the Large Local Malware talk that followed: both were about hardware and software already on the device and already trusted.",
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
   "takeaway": "Hardware isolation turned out to be an assumption, not a guarantee: flipped bits took an unprivileged program all the way to root on the host.",
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
   ]
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
   "summary": "The AI models vendors quietly install on endpoints can be turned into a malware engine that lives off the land.",
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
    "I hadn't realized how many machines already carry a local model nobody opted into. Chrome's Gemini Nano was the example.",
    "The model doesn't need to be good at coding to be dangerous. Its strength is understanding context: which files matter and when to act.",
    "Runtime-generated payloads shift detection from “what is this file?” to “what is this process doing?”."
   ],
   "why": "It paired naturally with GPUBreach, since both talks were about technology already installed and trusted. It also echoed Day 1's living-off-the-land theme, with the model itself as the tool.",
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
   "takeaway": "“These are the worst models that will ever run on your endpoint.” Whatever local models can be made to do today, they'll do better next year.",
   "chain": {
    "steps": [
     "Local model already installed",
     "Attacker reaches the model",
     "Model profiles the user's files",
     "Semantic trigger picks the moment",
     "Code merged into a trusted file"
    ],
    "note": "The attack flow as described in the talk"
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
    "The harness mattered as much as the model: with the same model and different tools, detection went from 5% to 30% to 45%.",
    "Hallucinated vulnerabilities have a real cost, which is why the independent verifier sat at the core of the pipeline."
   ],
   "why": "It reframed Day 1's economics. If finding vulnerabilities is cheap, the scarce thing is proof. The same lesson came back on Day 3, when the purple teaming talk described agents falsely claiming success.",
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
   "takeaway": "“Buy the hunter, own the verifier.” Discovery tools keep improving; the proof step is where context and judgment matter.",
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
   ]
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
    "I had always treated archived pages as a reliable record. Finding that seven of eight popular archives allowed snapshots to be altered after capture changed that.",
    "The attacks were still working a year after disclosure, despite several patches.",
    "Because the manipulation happens client-side, it can be detected, which the talk also covered."
   ],
   "why": "It fit the day's theme of proving what's real. The pentest talk was about proving a vulnerability exists; this one was about proving what a website said at a point in time.",
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
    "Putting an AI front door on an API gateway changed who could reach internal APIs: now it's anything that can influence an agent's arguments.",
    "The reference architecture concentrated the risk. One gateway identity with access to Key Vault, OpenAI, Storage and Resource Manager made a single tool call very powerful.",
    "The line that stayed with me: the requirement changes from “the attacker needs a key” to “the attacker needs to put a string in front of an AI agent.”"
   ],
   "why": "It was the clearest example of the conference's agent identity theme on Day 2. Day 1 asked what identity an agent acts through; this talk showed a gateway's own identity becoming the confused deputy.",
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
 },
 "people": {
  "Ron Deibert": {
   "co": "The Citizen Lab",
   "site": "https://citizenlab.ca"
  },
  "Chaggai Heching": {
   "co": "ATLAS-AI Lab, Technion",
   "site": "https://www.technion.ac.il"
  },
  "Ori Levy": {
   "co": "ATLAS-AI Lab, Technion",
   "site": "https://www.technion.ac.il"
  },
  "Adar Peleg": {
   "co": "ATLAS-AI Lab, Technion",
   "site": "https://www.technion.ac.il"
  },
  "Rahul Jaisinghani": {
   "co": "BrowserStack",
   "site": "https://www.browserstack.com"
  },
  "Gururaj Saileshwar": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "Chris S. Lin": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "Yuqin Yan": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "Guozhen Ding": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "Joyce Qu": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "David Lie": {
   "co": "University of Toronto",
   "site": "https://www.utoronto.ca"
  },
  "Joseph Zhu": {
   "co": "Google"
  },
  "Robin Kirchner": {
   "co": "TU Braunschweig",
   "site": "https://www.tu-braunschweig.de"
  },
  "Martin Johns": {
   "co": "TU Braunschweig",
   "site": "https://www.tu-braunschweig.de"
  },
  "Simon Maxwell-Stewart": {
   "co": "BeyondTrust",
   "site": "https://www.beyondtrust.com"
  }
 },
 "audio": [
  {
   "key": "recap",
   "label": "Quick recap",
   "note": "About 2 min · one narrator",
   "src": "recap.mp3?v=20261008j",
   "dur": 92,
   "transcript": [
    "This is the Day 2 recap from Colin Johnstone's SecTor 2026 notes. If Day 1 was about speed, Day 2 was about where risk lands. The headline: the threat is already on the device.",
    "Ron Deibert of the Citizen Lab opened with the human side. Commercial spyware is aimed at journalists, lawyers and activists, and public-interest research is often what leads to the patch, the sanction or the shutdown that protects everyone else.",
    "Several talks looked at technology people already trust. Researchers from the Technion showed how the small AI models now built into browsers can be misused, and a University of Toronto team showed that hardware isolation on shared GPUs can't be taken for granted.",
    "BrowserStack's talk flipped the AI story around. AI has made finding potential vulnerabilities cheap, but confirming which ones are real is now the slow, expensive part. Their motto: buy the hunter, own the verifier.",
    "Two more briefings rounded out the day: one showing that archived web pages can be altered after capture, and one showing how an AI gateway's own identity could be turned against it.",
    "Colin's takeaway from Day 2: the newest attack surface is the technology already in everyday use, from browsers and GPUs to the phones in people's pockets, and proving what's real is becoming as important as finding it.",
    "The full notes, sources and a quiz are on the Day 2 page."
   ]
  },
  {
   "key": "deep",
   "label": "Deep dive",
   "note": "About 3 min · session by session",
   "src": "deep-dive.mp3?v=20261008j",
   "dur": 169,
   "transcript": [
    "This is the Day 2 deep dive from Colin Johnstone's SecTor 2026 notes. Day 2 was keynote and briefings, and the theme was that the threat is already on the device.",
    "Ron Deibert, director of the Citizen Lab at the University of Toronto, opened with counterintelligence for civil society. Commercial spyware has been used against journalists, lawyers, activists and their families, often without the target clicking anything. Citizen Lab's public research has repeatedly led to emergency patches from phone makers, sanctions and company shutdowns. One statistic stood out: only 82 of 629 commercial threat intelligence reports covered threats to civil society.",
    "Researchers from the ATLAS-AI Lab at the Technion looked at the small AI models now built into browsers and operating systems, often installed without users opting in. Their research showed these models can be misused like any other software with access to a user's files. Their advice: remove local models where they aren't needed, watch for unusual use of them, and scope what they can reach. Their memorable line: these are the worst models that will ever run on your endpoint.",
    "A University of Toronto team led by Gururaj Saileshwar presented GPU Breach. Their research showed that the memory isolation usually assumed on GPUs can't be taken for granted, especially on shared hardware. Their recommended mitigations were error-correcting memory, patched drivers, and careful thought about sharing GPUs between workloads. The work was responsibly disclosed to NVIDIA.",
    "Rahul Jaisinghani of BrowserStack talked about AI-assisted penetration testing. AI has made finding potential vulnerabilities cheap, but confirming which ones are real is now the slow and expensive part. Adding an independent verifier that re-proves every finding cut analyst time significantly in his team's pipeline. His motto: buy the hunter, own the verifier.",
    "Two more briefings rounded out the day. Researchers from TU Braunschweig showed that web archive snapshots can't always be treated as proof of what a site said, so keep your own evidence. And Simon Maxwell-Stewart of BeyondTrust showed why gateways that let AI agents call internal services need narrowly scoped identities for each backend.",
    "Colin's takeaway from Day 2: the newest attack surface is the technology people already trust, from browsers and GPUs to the phones in their pockets, and proving what's real is becoming as important as finding it.",
    "That's the Day 2 deep dive. The full notes, sources and quiz are on the Day 2 page."
   ]
  },
  {
   "key": "chat",
   "label": "Conversation",
   "note": "About 2 min · two voices",
   "src": "conversation.mp3?v=20261008j",
   "dur": 106,
   "transcript": [
    [
     1,
     "Welcome back to the SecTor 2026 recap from Colin Johnstone's notes. This is Day 2."
    ],
    [
     2,
     "If Day 1 was about speed, Day 2 was about where risk lands. The headline: the threat is already on the device."
    ],
    [
     1,
     "The keynote was a bit different from a typical security talk."
    ],
    [
     2,
     "It was. Ron Deibert of the Citizen Lab talked about commercial spyware aimed at journalists, lawyers and activists. Their public research has led to emergency patches, sanctions and even company shutdowns, which protects everyone else too."
    ],
    [
     1,
     "Then a lot of the day was about technology people already trust."
    ],
    [
     2,
     "Right. One team from the Technion looked at the small AI models now built into browsers and operating systems. Their warning stuck with Colin: these are the worst models that will ever run on your endpoint. They'll only get more capable."
    ],
    [
     1,
     "What did the researchers suggest?"
    ],
    [
     2,
     "Remove them where they aren't needed, watch for unusual use, and scope what they can reach. And a University of Toronto team showed that memory isolation on shared GPUs can't be taken for granted either."
    ],
    [
     1,
     "There was also a twist on AI for defenders."
    ],
    [
     2,
     "BrowserStack's talk. AI makes finding potential vulnerabilities cheap, but proving which ones are real is now the bottleneck. Their motto was: buy the hunter, own the verifier."
    ],
    [
     1,
     "Colin's bottom line for Day 2?"
    ],
    [
     2,
     "The newest attack surface is the stuff people already trust: browsers, GPUs, AI gateways and phones. And proving what's real is becoming as important as finding it. The full notes are on the Day 2 page."
    ]
   ]
  }
 ]
};
