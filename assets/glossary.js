window.GLOSSARY={
"aaguid": [
"AAGUID",
"Authenticator Attestation GUID: an identifier for the make and model of a passkey or FIDO2 authenticator, used to allow or block specific authenticators.",
"key"
],
"accountability": [
"AI ownership",
"A named owner who answers for an AI system's decisions, actions and failures, set before the system runs autonomously.",
"scale"
],
"adversaryemu": [
"Adversary emulation",
"Reproducing a real threat actor's known techniques in a controlled way to test whether defences detect and stop them.",
"target"
],
"agentidentity": [
"Agent identity",
"Treating each AI agent as an identity with an owner, scoped permissions, its own credentials and an audit trail.",
"badge"
],
"aiagent": [
"AI agent",
"Software that uses a language model to plan and take actions, such as calling tools and APIs, with limited human direction.",
"bot"
],
"anachronistic": [
"Anachronistic attack",
"Changing what an archived snapshot shows long after it was captured.",
"retry"
],
"attackchain": [
"Attack chain",
"The sequence of steps an attacker strings together, from initial access to their objective. AI compresses the time between steps.",
"fork"
],
"attackpath": [
"Attack path",
"The chain of steps and relationships an attacker could use to reach a valuable asset. Graphing them links techniques to business impact.",
"graph"
],
"attacksurface": [
"Attack surface",
"Everything an attacker can reach and interact with: exposed services, identities, APIs and code paths.",
"target"
],
"attribution": [
"Attribution",
"Working out who is behind an attack. Researchers can often trace where an attack came from but can only infer who ordered it.",
"q"
],
"autonomoussoc": [
"Autonomous SOC",
"Security operations where AI agents triage, investigate and possibly respond with limited human involvement.",
"bot"
],
"blastradius": [
"Blast radius",
"How much damage one compromised identity, system or agent can do. The goal is to keep it small.",
"spark"
],
"bulletproof": [
"Bulletproof hosting",
"Hosting providers that ignore abuse complaints and law-enforcement requests, traditionally used by criminals for resilient infrastructure.",
"shield"
],
"canary": [
"Canary",
"A fake credential, file or resource with no legitimate use. Any touch is a high-confidence alert.",
"radar"
],
"canister": [
"Canister",
"A program deployed on the Internet Computer: WebAssembly code with its own stored state, replicated across nodes and reachable from the web.",
"layers"
],
"confuseddeputy": [
"Confused deputy",
"A trusted component tricked into using its own privileges on an attacker's behalf.",
"shield"
],
"contextbomb": [
"Context bomb",
"Content planted where an AI attacker will read it, designed to make the model halt or derail. Results vary by model.",
"bolt"
],
"continuousred": [
"Continuous red teaming",
"Using AI to test your own environment repeatedly and cheaply, instead of in occasional engagements.",
"retry"
],
"crqc": [
"Quantum computer threat to RSA and ECC",
"A future cryptographically relevant quantum computer could break RSA, elliptic-curve and Diffie-Hellman cryptography, which protect most traffic and logins today.",
"chip"
],
"cryptoagility": [
"Crypto agility",
"Designing systems so cryptographic algorithms can be swapped without re-engineering everything.",
"retry"
],
"cryptoinventory": [
"Cryptographic inventory",
"A list of where each cryptographic algorithm, key and certificate is used, including inside vendor products and dependencies.",
"list"
],
"cwpp": [
"CWPP",
"Cloud workload protection platform: tooling that secures VMs, containers and serverless workloads at runtime.",
"shield"
],
"dbsc": [
"Device-bound session credentials",
"Tying a browser session to a key held on the device, so a stolen session cookie can't be replayed from somewhere else.",
"browser"
],
"deception": [
"Deception",
"Decoy accounts, environments and data that waste an attacker's effort and reveal its presence.",
"layers"
],
"delegation": [
"Delegated authority",
"Authority passed from a person to an agent and on to tools and service accounts. Each handoff can quietly widen what's allowed unless the original limits travel with it.",
"fork"
],
"devtools": [
"Chrome DevTools Protocol",
"A debugging interface for controlling Chrome from other programs. The researchers used it to reach Chrome's local model from the command line.",
"browser"
],
"dmverity": [
"dm-verity and LUKS",
"Linux features that verify a disk's integrity at boot (dm-verity) and encrypt its contents (LUKS), so stolen or modified storage can't be trusted silently.",
"layers"
],
"drift": [
"Model drift",
"An AI system's behaviour gradually changing in production as data, usage or context shifts, without any code change.",
"chart"
],
"ecc": [
"ECC memory",
"Error-correcting code memory that detects and fixes some bit flips. It helps against Rowhammer but isn't foolproof.",
"check"
],
"edr": [
"EDR",
"Endpoint detection and response: security software that watches device behaviour to spot and stop attacks.",
"shield"
],
"eod": [
"EOD robot",
"An explosive ordnance disposal robot, driven remotely to inspect and disable bombs. The PackBot is one of the earliest and most widely used.",
"target"
],
"evasive": [
"Evasive publisher",
"A website that detects archive crawlers and hides from them or shows them different content.",
"eye"
],
"exploreexploit": [
"Explore vs. exploit",
"The choice between spending testing budget going deeper on known weaknesses or searching for new attack surface.",
"fork"
],
"gemininano": [
"Gemini Nano",
"Google's small on-device model, which Chrome can download to power its built-in AI features.",
"browser"
],
"gpu": [
"GPU",
"Graphics processing unit: the accelerator most AI models run on. Its memory can hold model weights and cryptographic keys.",
"chip"
],
"harness": [
"Harness",
"The tools, prompts and code wrapped around a model that let it act: reading files, running tests, calling APIs.",
"layers"
],
"hndl": [
"Harvest now, decrypt later",
"Collecting encrypted data today so it can be decrypted once a powerful enough quantum computer exists.",
"clock"
],
"humanloop": [
"Human in the loop",
"A design where a person reviews or approves an AI system's consequential actions.",
"users"
],
"icp": [
"Internet Computer Protocol (ICP)",
"A blockchain network that runs application code and serves web content directly from a decentralized set of nodes.",
"globe"
],
"identitychain": [
"Identity chaining",
"Using one compromised identity's access to obtain the next, hopping between users, roles and services toward a target.",
"key"
],
"imds": [
"Metadata service (IMDS)",
"An internal cloud endpoint that gives a virtual machine its configuration and temporary credentials. A classic SSRF target.",
"cloud"
],
"imdsv2": [
"IMDSv2",
"Version 2 of AWS's instance metadata service. It requires a session token, which blocks the classic SSRF credential-theft path.",
"cloud"
],
"iommu": [
"IOMMU",
"Hardware that limits which parts of system memory a device such as a GPU can reach.",
"shield"
],
"jaus": [
"JAUS",
"Joint Architecture for Unmanned Systems: a messaging standard (SAE AS5669) for controlling robots and unmanned vehicles.",
"fork"
],
"jit": [
"Just-in-time access",
"Access granted for a specific task and a short time window, then removed automatically, along with anything it opened.",
"clock"
],
"leastpriv": [
"Least privilege",
"Giving each user, service or agent only the permissions its task needs.",
"key"
],
"llm": [
"LLM",
"Large language model: a model trained on large amounts of text to generate and understand language and code.",
"bot"
],
"localmodel": [
"Local model (SLM)",
"A small language model that runs on the device itself instead of in the cloud.",
"chip"
],
"lockdown": [
"Lockdown Mode",
"An Apple setting for people at high risk of targeted spyware that sharply reduces the device's attack surface.",
"phone"
],
"lotc": [
"Living off the cloud",
"Attacking with a cloud provider's own legitimate services and APIs so activity blends in with normal operations.",
"cloud"
],
"lotl": [
"Living off the land",
"Attacking with tools already present on the system, so the activity blends in with normal use.",
"layers"
],
"machinespeed": [
"Machine speed",
"Attack steps run by software continuously and in parallel, measured in minutes rather than days.",
"bolt"
],
"managedidentity": [
"Managed identity",
"An Azure identity assigned to a service so it can reach other resources without stored credentials.",
"key"
],
"manet": [
"Mesh radio (MANET)",
"A mobile ad-hoc network where radios relay traffic for each other with no central node, such as Wave Relay on MPU5 radios.",
"radar"
],
"mcp": [
"Model Context Protocol (MCP)",
"An open standard that lets AI agents discover and call tools and data sources.",
"bot"
],
"mercenary": [
"Mercenary spyware",
"Commercial surveillance tools sold to governments, such as NSO Group's Pegasus, Intellexa's Predator and Paragon's Graphite.",
"eye"
],
"mlkem": [
"ML-KEM",
"The NIST post-quantum key-exchange standard (FIPS 203), the main replacement for RSA and elliptic-curve key exchange.",
"key"
],
"mythos": [
"Claude Mythos Preview",
"Anthropic's model used in Project Glasswing to find vulnerabilities in critical software. It isn't publicly available.",
"bot"
],
"nhi": [
"Non-human identity",
"Any identity used by software rather than a person: service accounts, API keys, workload identities and AI agents.",
"badge"
],
"openweight": [
"Open-weight model",
"A model whose weights are published, so anyone can run and modify it outside the provider's usage controls.",
"layers"
],
"owaspagentic": [
"OWASP Top 10 for Agentic Applications",
"OWASP's 2026 list of the most important risks in autonomous AI agents, such as tool misuse and identity and privilege abuse.",
"list"
],
"pagetable": [
"Page table",
"The structure that maps the virtual addresses a program uses to physical memory. Corrupting one can expose memory you shouldn't reach.",
"layers"
],
"passkey": [
"Passkey",
"A phishing-resistant FIDO2 credential. The private key stays on the user's device or password manager and is unlocked with a biometric or PIN.",
"finger"
],
"pathtraversal": [
"Path traversal",
"A flaw where crafted file paths (like ../) let an attacker read or write files outside the folder an application meant to expose.",
"x"
],
"phishres": [
"Phishing-resistant MFA",
"Authentication that a fake site can't relay, such as passkeys or smart cards, because the credential is bound to the real website.",
"finger"
],
"pqc": [
"Post-quantum cryptography",
"Encryption and signature algorithms designed to resist attacks from quantum computers, such as the NIST standards finalized in 2024.",
"key"
],
"privesc": [
"Privilege escalation",
"Gaining permissions beyond what an account was granted, often by abusing misconfigured roles or a vulnerability.",
"up"
],
"promptinjection": [
"Prompt injection",
"Text that hijacks a model's instructions, either typed directly or hidden in content the model reads.",
"target"
],
"purpleteam": [
"Purple teaming",
"A full-knowledge exercise where attackers (red) and defenders (blue) work together to attack, detect, respond and verify the fix.",
"users"
],
"raas": [
"Ransomware as a service",
"A model where ransomware developers rent their malware and infrastructure to affiliates in exchange for a share of ransoms.",
"coins"
],
"rootoftrust": [
"Root of trust",
"A hardware-protected starting point a device uses to verify that its firmware and software haven't been tampered with.",
"shield"
],
"rowhammer": [
"Rowhammer",
"Repeatedly accessing a row of memory so electrical charge leaks and flips bits in neighbouring rows.",
"chip"
],
"runtimesec": [
"Runtime security",
"Monitoring and controlling what workloads actually do while they run, rather than only scanning them beforehand.",
"radar"
],
"sbom": [
"SBOM",
"Software bill of materials: an inventory of the components inside a piece of software. AI BOMs extend the idea to models and datasets.",
"list"
],
"scopedauth": [
"Task-scoped authority",
"Limiting what an agent may change to what the original request actually asked for, checked again at the moment the change is made.",
"scale"
],
"secobscurity": [
"Security through obscurity",
"Relying on secret designs, proprietary connectors or physical isolation instead of real controls. It slows analysis but doesn't prevent it.",
"eye"
],
"segmentation": [
"Segmentation",
"Splitting networks and environments so a compromise in one zone can't freely reach another.",
"layers"
],
"semantictrigger": [
"Semantic trigger",
"Malware that decides when to act based on what a model understands about the target, instead of a fixed check.",
"bolt"
],
"shadowai": [
"Shadow AI",
"AI tools, models and agents used without the organization's knowledge or approval.",
"bot"
],
"sharedcred": [
"Shared or hardcoded credentials",
"The same password built into every device of a type. Learning it once gives access to the whole fleet.",
"key"
],
"siem": [
"SIEM",
"Security information and event management: the system that collects, searches and alerts on logs from across an organization.",
"search"
],
"snapshot": [
"Web archive snapshot",
"A saved copy of a web page at a point in time, kept by services like the Wayback Machine.",
"book"
],
"soar": [
"SOAR",
"Security orchestration, automation and response: tools that run response playbooks automatically, such as isolating a host or opening a case.",
"bolt"
],
"ssrf": [
"SSRF",
"Server-side request forgery: tricking a server into making requests for the attacker, often to internal-only services.",
"target"
],
"techdebt": [
"Technical debt",
"Old software, hardware and design choices kept in place because replacing them is hard. In long-lived devices it becomes security debt.",
"layers"
],
"tee": [
"TEE",
"Trusted execution environment: a hardware-isolated area of a processor that protects code and data from the rest of the system, including the OS.",
"chip"
],
"threatnotif": [
"Threat notification",
"An alert Apple, Google and others send when they believe a user was targeted by state-sponsored spyware.",
"phone"
],
"transnational": [
"Transnational repression",
"Governments reaching across borders to watch, threaten or harm dissidents who have left the country.",
"globe"
],
"verifier": [
"Independent verifier",
"A separate step that replays each AI finding to prove it's real before a person acts on it.",
"check"
],
"workloadidentity": [
"Workload identity",
"The identity a cloud workload (VM, container or function) uses to call other services, ideally with short-lived, automatically issued credentials.",
"cloud"
],
"zeroclick": [
"Zero-click exploit",
"An attack that compromises a device without the target clicking or opening anything.",
"phone"
],
"zerotrust": [
"Zero Trust",
"Giving each user, app or model only the access it needs right now, and verifying every request.",
"shield"
]
};
