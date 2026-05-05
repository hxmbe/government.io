// TopicStudy.jsx — Topic overview screen with content for all ~50 AP Gov topics

// ── UNIT OVERVIEW COMPONENT ────────────────────────────────────
const UnitOverview = ({ unitId, onNavigatePractice, onNavigateTopic, dark }) => {
  const UNIT_SUMMARIES = {
    1: {
      title: "Foundations of American Democracy",
      overview: "Unit 1 explores the philosophical and constitutional foundations of American government. You'll learn about Enlightenment ideas, the structure of the Constitution, federalism, and how power is distributed between the national and state governments.",
      learningObjectives: [
        "Understand the philosophical foundations of American democracy (natural rights, social contract, popular sovereignty)",
        "Know the key documents (Declaration, Constitution, Federalist Papers) and their arguments",
        "Explain separation of powers, checks and balances, and judicial review",
        "Analyze federalism and the division of power between national and state governments"
      ]
    },
    2: {
      title: "Interactions Among Branches",
      overview: "Unit 2 examines how the three branches of government interact through checks and balances. You'll study Congress's structure and powers, the presidency's formal and informal authority, the federal courts, and how bureaucracy implements policy.",
      learningObjectives: [
        "Know Congress's bicameral structure, powers, and internal procedures (committees, filibusters, legislative process)",
        "Understand presidential powers and how Congress checks executive authority",
        "Explain the federal judiciary's structure and the power of judicial review",
        "Analyze how the bureaucracy implements laws and the limits on its authority"
      ]
    },
    3: {
      title: "Civil Liberties & Civil Rights",
      overview: "Unit 3 focuses on individual freedoms and protections. You'll learn about the Bill of Rights, selective incorporation, landmark Supreme Court cases, and the civil rights movement. The unit emphasizes the tension between individual liberty and government authority.",
      learningObjectives: [
        "Know the Bill of Rights and how the Fourteenth Amendment incorporates its protections against states",
        "Understand freedom of speech, press, religion, and the Second Amendment",
        "Learn about due process, equal protection, and civil rights protections",
        "Analyze landmark cases (Brown, Tinker, Miranda, Obergefell) and their significance"
      ]
    },
    4: {
      title: "American Political Ideologies",
      overview: "Unit 4 explores how Americans form political beliefs and participate in the political system. You'll examine political socialization, public opinion polling, ideology, and how beliefs translate into political behavior.",
      learningObjectives: [
        "Understand how citizens develop political attitudes (family, media, education, events)",
        "Learn to interpret public opinion polling and its limitations",
        "Know the ideological spectrum (liberal, conservative, libertarian) and how ideology affects policy positions",
        "Analyze the relationship between ideology, party affiliation, and voting behavior"
      ]
    },
    5: {
      title: "Political Participation",
      overview: "Unit 5 examines how citizens engage with the political system. You'll study voting rights, political parties, interest groups, elections, campaign finance, and the media's role in shaping politics and democracy.",
      learningObjectives: [
        "Know voting rights history and understand factors that affect voter turnout",
        "Learn why the U.S. has a two-party system and how parties have changed over time",
        "Understand how interest groups influence policy and the limits on their power",
        "Analyze how campaigns, campaign finance, and media shape electoral outcomes"
      ]
    }
  };

  const UNITS = [
    { id: 1, title: "Foundations of American Democracy", topics: ["1.1 Ideals of Democracy","1.2 Types of Democracy","1.3 Government Power & Rights","1.4 Articles of Confederation","1.5 Ratification","1.6 Principles of Gov't","1.7 States & Federal Gov't","1.8 Constitutional Federalism","1.9 Federalism in Action"] },
    { id: 2, title: "Interactions Among Branches", topics: ["2.1 Congress","2.2 Powers of Congress","2.3 Congressional Behavior","2.4 Roles of the President","2.5 Checks on Presidency","2.6 Expansion of Exec. Power","2.7 Presidential Communication","2.8 The Judicial Branch","2.9 Legitimacy of Courts","2.10 Court in Action","2.11 Checks on Judiciary","2.12 The Bureaucracy","2.13 Rule-Making Authority","2.14 Accountability"] },
    { id: 3, title: "Civil Liberties & Civil Rights", topics: ["3.1 The Bill of Rights","3.2 Freedom of Religion","3.3 Freedom of Speech","3.4 Freedom of the Press","3.5 Second Amendment","3.6 Amendments & Order","3.7 Selective Incorporation","3.10 Social Movements","3.11 Gov't Responses","3.12 Minority & Majority Rights","3.13 Affirmative Action"] },
    { id: 4, title: "American Political Ideologies", topics: ["4.1 American Attitudes","4.2 Political Socialization","4.3 Changes in Ideology","4.4 Political Events & Ideology","4.5 Measuring Public Opinion","4.6 Limits of Polls","4.7 Ideologies of Parties","4.8 Ideology & Policy Making","4.9 Ideology & Economic Policy","4.10 Social Policy"] },
    { id: 5, title: "Political Participation", topics: ["5.1 Voting Rights","5.2 Voter Turnout","5.3 Political Parties","5.4 How Parties Change","5.5 Third Parties","5.6 Interest Groups","5.7 Groups Influencing Policy","5.8 Electing the President","5.9 Congressional Elections","5.10 Modern Campaigns","5.11 Campaign Finance","5.12 The Media","5.13 Media & Democratic Debate"] },
  ];

  const unit = UNITS.find(u => u.id === unitId);
  const summary = UNIT_SUMMARIES[unitId];
  if (!unit || !summary) return null;
  
  const bg    = dark ? '#0D1421' : '#F8F9FB';
  const card  = dark ? '#111B2B' : '#fff';
  const bord  = dark ? '#1E2D42' : '#EEF0F4';
  const textP = dark ? '#E8ECF0' : '#1A2030';
  const textM = dark ? '#9BA5B2' : '#9BA5B2';

  return (
    <div style={{ padding:'28px 32px', overflowY:'auto', flex:1, background:bg }}>
      <div style={{marginBottom:28}}>
        <button onClick={()=>{if(window.history.back) window.history.back();}}
          style={{fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:12,fontWeight:600,color:'var(--theme-accent)',background:'none',border:'none',cursor:'pointer',marginBottom:16,display:'flex',alignItems:'center',gap:6}}>
          ← Back
        </button>
        <h1 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:'2rem',fontWeight:700,color:textP,marginBottom:8}}>Unit {unitId}: {summary.title}</h1>
        <p style={{fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:14.5,color:textM,lineHeight:1.7,maxWidth:700,marginBottom:20}}>{summary.overview}</p>
        
        <button onClick={()=>onNavigatePractice(`Unit ${unitId}`)}
          style={{fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,fontWeight:700,padding:'11px 28px',borderRadius:8,border:'none',background:'var(--theme-accent)',color:'#fff',cursor:'pointer',marginBottom:32,transition:'opacity 150ms'}}>
          ▶ Start Unit {unitId} Practice
        </button>
      </div>

      <div style={{marginBottom:32}}>
        <h3 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:'1.25rem',fontWeight:700,color:textP,marginBottom:16}}>Learning Objectives</h3>
        <div style={{background:card,borderRadius:10,border:`1px solid ${bord}`,padding:'20px 24px'}}>
          {summary.learningObjectives.map((obj,i)=>(
            <div key={i} style={{display:'flex',gap:14,marginBottom:i<summary.learningObjectives.length-1?12:0,fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,lineHeight:1.6,color:textP}}>
              <span style={{color:'var(--theme-accent)',fontWeight:700,flexShrink:0}}>✓</span>
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:'1.25rem',fontWeight:700,color:textP,marginBottom:16}}>Topics in This Unit</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))',gap:12}}>
          {unit.topics.map(topic=>(
            <button key={topic} onClick={()=>onNavigateTopic(topic,unitId)}
              style={{textAlign:'left',background:card,border:`1px solid ${bord}`,borderRadius:9,padding:'16px 18px',cursor:'pointer',transition:'all 150ms',fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,fontWeight:600,color:textP}}>
              {topic}
              <div style={{fontSize:11,fontWeight:400,color:textM,marginTop:6}}>Learn key concepts & cases</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const TOPIC_CONTENT = {
  // ── UNIT 1 ──────────────────────────────────────────────────
  "1.1 Ideals of Democracy": {
    unit: 1, title: "Ideals of Democracy",
    essentialQ: "How are democratic ideals reflected in the Declaration of Independence and the U.S. Constitution?",
    overview: "Topic 1.1 explores the philosophical foundations of American democracy, tracing how Enlightenment ideas — particularly from John Locke, Montesquieu, and Rousseau — shaped the Declaration of Independence and later the Constitution. The topic emphasizes the tension between the ideal of popular sovereignty and the practical limits placed on direct democracy by the Founders.",
    keyConcepts: [
      { heading: "Natural Rights", body: "Locke argued that all people possess natural rights to life, liberty, and property. Jefferson adapted this in the Declaration as 'life, liberty, and the pursuit of happiness.' These rights are pre-political — they exist before government." },
      { heading: "Social Contract", body: "Government derives its legitimacy from the consent of the governed. When government fails to protect rights, the people have the right to alter or abolish it — the philosophical basis for the American Revolution." },
      { heading: "Popular Sovereignty", body: "Political authority rests with the people. In the U.S. system, citizens express sovereignty through elections, not direct governance — a key distinction between direct and representative democracy." },
      { heading: "Limited Government", body: "Government power is bounded by law. The Constitution creates a government of enumerated powers — Congress, the president, and courts can only do what the Constitution authorizes." },
      { heading: "Enlightenment Influences", body: "Montesquieu's separation of powers (Spirit of the Laws, 1748), Locke's Two Treatises of Government (1689), and Rousseau's social contract theory all directly influenced American founding documents." },
    ],
    keyTerms: ["Natural rights", "Social contract", "Popular sovereignty", "Limited government", "Consent of the governed", "Unalienable rights"],
    foundDocs: ["The Declaration of Independence"],
    scotusCases: [],
    apTip: "AP essays frequently ask how the Declaration reflects Enlightenment ideas. Know Locke's natural rights theory and how it was adapted by Jefferson. Be ready to explain the tension between democratic ideals and early American exclusions (slavery, women's suffrage).",
  },
  "1.2 Types of Democracy": {
    unit: 1, title: "Types of Democracy",
    essentialQ: "How are models of representative democracy visible in U.S. institutions, policies, events, and debates?",
    overview: "This topic distinguishes three models of democracy that political scientists use to understand American politics: participatory, pluralist, and elite democracy. Each model makes different predictions about who actually holds power and how policy is made. Real American politics draws on elements of all three.",
    keyConcepts: [
      { heading: "Participatory Democracy", body: "Emphasizes broad, direct citizen engagement. Sees low voter turnout and civic disengagement as threats to democracy. Town hall meetings, ballot initiatives, and referenda are participatory mechanisms." },
      { heading: "Pluralist Democracy", body: "Power is distributed among many competing interest groups. No single group dominates — policy emerges from the negotiation and compromise among organized interests. Madison's Federalist No. 10 anticipates this model." },
      { heading: "Elite Democracy", body: "A small, wealthy, educated elite holds most real political power. Elections provide symbolic legitimacy but policy is controlled by corporate leaders, major donors, and the politically connected." },
      { heading: "Which Model Fits America?", body: "AP Gov asks students to evaluate evidence for each model. High levels of inequality, lobbying influence, and low turnout support elite theory. Diverse interest groups and competitive elections support pluralism. Direct democracy mechanisms support participatory theory." },
    ],
    keyTerms: ["Participatory democracy", "Pluralist democracy", "Elite democracy", "Direct democracy", "Representative democracy", "Interest group"],
    foundDocs: ["Federalist No. 10"],
    scotusCases: [],
    apTip: "Be prepared to use specific evidence to support or refute each model of democracy. A common AP prompt asks: 'Which model best describes American democracy?' — you need data or examples, not just definitions.",
  },
  "1.3 Government Power & Rights": {
    unit: 1, title: "Government Power and Individual Rights",
    essentialQ: "How are Federalist and Anti-Federalist views on central government and democracy reflected in America's foundational documents?",
    overview: "This topic contrasts the Federalist and Anti-Federalist positions on the proper scope of national government power. Federalists (Hamilton, Madison, Jay) argued for a strong central government as the best protector of rights. Anti-Federalists (Brutus, Patrick Henry) feared that concentrated power would destroy liberty and state sovereignty.",
    keyConcepts: [
      { heading: "Federalist Position", body: "A large republic with a strong national government best controls factions (Federalist No. 10) and prevents tyranny through structural checks (Federalist No. 51). Energy in the executive is essential to good government (Federalist No. 70)." },
      { heading: "Anti-Federalist Position", body: "Brutus No. 1 argues the Necessary and Proper Clause and Supremacy Clause give Congress unlimited power; a large republic cannot represent diverse citizens; and the Constitution needs a Bill of Rights to protect individual liberties." },
      { heading: "The Bill of Rights Compromise", body: "The promise to add a Bill of Rights was crucial to ratification. Anti-Federalists won this key concession — the first ten amendments directly address their fears about individual liberty and state power." },
      { heading: "Ongoing Tension", body: "The Federalist/Anti-Federalist debate is not historical — it echoes in every debate about federal vs. state power, civil liberties vs. national security, and the scope of congressional authority." },
    ],
    keyTerms: ["Federalists", "Anti-Federalists", "Bill of Rights", "Faction", "Tyranny", "Enumerated powers", "Necessary and Proper Clause"],
    foundDocs: ["Federalist No. 10", "Federalist No. 51", "Brutus No. 1"],
    scotusCases: [],
    apTip: "The AP exam requires direct engagement with Federalist No. 10, No. 51, and Brutus No. 1. Know each document's central argument and be able to compare Federalist and Anti-Federalist positions on specific constitutional provisions.",
  },
  "1.4 Articles of Confederation": {
    unit: 1, title: "Challenges of the Articles of Confederation",
    essentialQ: "How did the provisions of the Articles of Confederation lead to debates over granting more powers to the federal government?",
    overview: "The Articles of Confederation (1781–1789) were America's first governing document. They created a weak central government deliberately, out of fear of repeating British tyranny. But the government's inability to tax, regulate commerce, or enforce its laws created a crisis that led directly to the Constitutional Convention.",
    keyConcepts: [
      { heading: "Structure Under the Articles", body: "A unicameral Congress with one vote per state. No president, no national courts. Congress could request money from states but could not compel payment. Amendments required unanimous state approval." },
      { heading: "Key Weaknesses", body: "Congress could not levy taxes (had to beg states for funds), regulate interstate or foreign commerce, enforce its laws, or maintain a standing army. Massive war debt went unpaid. The currency was worthless." },
      { heading: "Shays' Rebellion (1786)", body: "Massachusetts farmers, facing debt and foreclosure, rose up against the state government. The national government could not suppress the rebellion. This alarmed the Founders and catalyzed support for a stronger national government." },
      { heading: "Path to Philadelphia", body: "The Annapolis Convention (1786) called for a broader convention to revise the Articles. The Constitutional Convention (1787) instead scrapped them entirely and drafted a new constitution." },
    ],
    keyTerms: ["Articles of Confederation", "Unicameral legislature", "Shays' Rebellion", "Unanimous consent", "Sovereignty", "Constitutional Convention"],
    foundDocs: ["Articles of Confederation"],
    scotusCases: [],
    apTip: "Know the specific weaknesses of the Articles and be able to link each weakness to a specific provision of the Constitution that addressed it. The Articles/Constitution comparison is a classic AP question.",
  },
  "1.5 Ratification": {
    unit: 1, title: "Ratification of the U.S. Constitution",
    essentialQ: "What was the impact of political negotiation and compromise at the Constitutional Convention on the constitutional system?",
    overview: "The Constitutional Convention produced several major compromises that shaped the Constitution's structure. Ratification then required a fierce political battle between Federalists and Anti-Federalists across the states, ultimately producing the Bill of Rights as a condition of support.",
    keyConcepts: [
      { heading: "Great Compromise (Connecticut Compromise)", body: "Resolved the dispute between large and small states: a bicameral Congress with population-based representation in the House and equal state representation (2 senators) in the Senate." },
      { heading: "Three-Fifths Compromise", body: "Enslaved people counted as 3/5 of a person for apportionment of House seats and direct taxes. Gave Southern states more political power but avoided the question of slavery's legitimacy." },
      { heading: "Commerce and Slave Trade Compromise", body: "Congress could regulate commerce but could not ban the slave trade until 1808 and could not tax exports. A concession to Southern agricultural states." },
      { heading: "The Amendment Process", body: "Article V: amendments proposed by 2/3 of both houses of Congress or a convention called by 2/3 of states; ratified by 3/4 of states. High threshold ensures constitutional stability." },
    ],
    keyTerms: ["Great Compromise", "Three-Fifths Compromise", "Ratification", "Federalists", "Anti-Federalists", "Amendment process", "Supermajority"],
    foundDocs: ["The Constitution of the United States"],
    scotusCases: [],
    apTip: "Know all three major compromises, their purpose, and their impact. The amendment process (Article V) is frequently tested — know both paths to proposal and both paths to ratification.",
  },
  "1.6 Principles of Gov't": {
    unit: 1, title: "Principles of American Government",
    essentialQ: "What do the principles of separation of powers and checks and balances mean for the U.S. political system?",
    overview: "The Constitution divides governmental authority into three distinct branches — legislative, executive, judicial — each with defined powers and the ability to check the others. This structure, drawn from Montesquieu, was designed to prevent tyranny by ensuring no single person or institution could accumulate unchecked power.",
    keyConcepts: [
      { heading: "Separation of Powers", body: "Legislative (Article I): makes law. Executive (Article II): enforces law. Judicial (Article III): interprets law. Each has distinct functions and cannot perform the others' core duties." },
      { heading: "Checks and Balances", body: "Each branch has tools to limit the others. Congress: override vetoes, impeachment, confirmation, appropriations. President: veto, pardon, appointment, commander in chief. Courts: judicial review." },
      { heading: "Federalist No. 51", body: "Madison argues that the constitutional structure itself — not just elections — prevents tyranny. 'Ambition must be made to counteract ambition.' Gives each branch the means and motivation to resist others." },
      { heading: "Judicial Review", body: "Not in the Constitution — established by Marbury v. Madison (1803). The Supreme Court's power to declare laws or executive actions unconstitutional. The ultimate check on legislative and executive overreach." },
    ],
    keyTerms: ["Separation of powers", "Checks and balances", "Judicial review", "Veto", "Override", "Bicameralism", "Impeachment"],
    foundDocs: ["Federalist No. 51", "The Constitution of the United States"],
    scotusCases: ["Marbury v. Madison"],
    apTip: "Separation of powers and checks and balances are tested constantly. Know specific examples of each branch checking the others. Know Federalist No. 51's argument about why structure matters.",
  },
  "1.7 States & Federal Gov't": {
    unit: 1, title: "Relationship Between States and the Federal Government",
    essentialQ: "How do the needs of society affect the allocation of power between national and state governments?",
    overview: "Federalism divides governmental power between national and state governments. The Constitution establishes this division through enumerated powers, the Supremacy Clause, the Necessary and Proper Clause, and the Tenth Amendment. Over time, the balance of power has shifted significantly toward the national government.",
    keyConcepts: [
      { heading: "Types of Powers", body: "Enumerated (expressed) powers: listed in Article I §8. Implied powers: from the Necessary and Proper Clause. Reserved powers: 10th Amendment — kept by states. Concurrent powers: shared (taxation, courts, roads)." },
      { heading: "Supremacy Clause", body: "Article VI: federal law is the 'supreme law of the land.' When state and federal law conflict, federal law wins (preemption). States cannot nullify federal laws." },
      { heading: "Federal Grant Programs", body: "Categorical grants: specific purpose, many strings attached. Block grants: broad purpose, more flexibility. Formula grants: distributed by formula (population, need). Grants shift power to the national government." },
      { heading: "Unfunded Mandates", body: "Federal requirements imposed on states without funding to comply. States resent these as federal overreach. The Unfunded Mandates Reform Act (1995) requires cost estimates for new mandates." },
    ],
    keyTerms: ["Federalism", "Enumerated powers", "Reserved powers", "Concurrent powers", "Supremacy Clause", "Categorical grant", "Block grant", "Unfunded mandate", "Devolution"],
    foundDocs: ["The Constitution of the United States"],
    scotusCases: [],
    apTip: "Know all the types of powers and be able to give examples of each. Federal grants are a key federalism mechanism — know the difference between categorical and block grants and what they mean for state autonomy.",
  },
  "1.8 Constitutional Federalism": {
    unit: 1, title: "Constitutional Interpretations of Federalism",
    essentialQ: "How has the balance of power between national and state governments been interpreted over time?",
    overview: "The Supreme Court has been the key arbiter of federal-state power boundaries. Key decisions have alternately expanded national power (McCulloch v. Maryland, 1819; Gonzales v. Raich, 2005) and reasserted state authority (United States v. Lopez, 1995; New York v. United States, 1992).",
    keyConcepts: [
      { heading: "McCulloch v. Maryland (1819)", body: "Marshall's Court upheld the national bank (implied powers from N&P Clause) and ruled states cannot tax federal instruments (Supremacy Clause). Nationalized interpretation of federal power." },
      { heading: "United States v. Lopez (1995)", body: "Rehnquist Court struck down the Gun-Free School Zones Act — carrying a gun near a school is not economic activity affecting interstate commerce. First Commerce Clause limit in 60 years." },
      { heading: "Dual Federalism ('Layer Cake')", body: "National and state governments operate in separate, distinct spheres. Each is supreme within its domain. Dominant from founding through 1930s New Deal era." },
      { heading: "Cooperative Federalism ('Marble Cake')", body: "National and state governments share functions and cooperate across policy areas. Dominant from New Deal onward — federal grants fund state-administered programs (Medicaid, highways, education)." },
    ],
    keyTerms: ["Dual federalism", "Cooperative federalism", "Commerce Clause", "Necessary and Proper Clause", "Preemption", "Nullification", "Intergovernmental relations"],
    foundDocs: ["The Constitution of the United States"],
    scotusCases: ["McCulloch v. Maryland", "United States v. Lopez"],
    apTip: "Both McCulloch v. Maryland and United States v. Lopez are required SCOTUS cases — know the facts, ruling, and significance of each. Be able to use them as evidence in essays about federalism.",
  },
  "1.9 Federalism in Action": {
    unit: 1, title: "Federalism in Action",
    essentialQ: "How does the distribution of powers impact policymaking across federal, state, and local levels?",
    overview: "Federalism in practice means that most major domestic policies involve both national and state governments. Education, healthcare, transportation, and criminal justice are all 'shared' policy areas where federal money, mandates, and rules shape what states do — but states retain significant implementation discretion.",
    keyConcepts: [
      { heading: "Shared Policymaking", body: "Most domestic policy areas involve federal-state partnerships. The federal government sets standards and provides funding; states administer programs and adapt them to local conditions." },
      { heading: "Education Policy Example", body: "The federal government provides ~10% of K-12 funding through programs like Title I (ESSA). It sets requirements (assessment, accountability) in exchange for funding. States control curriculum, standards, and local funding." },
      { heading: "Medicaid as Cooperative Federalism", body: "Medicaid is jointly funded (federal government contributes 50-75%) and administered by states, which have discretion over eligibility and benefits within federal minimums. ACA expanded it — states chose whether to accept expansion." },
      { heading: "Political Participation and Federalism", body: "Federalism creates 50+ laboratories of democracy. States experiment with policies (marijuana, same-sex marriage, minimum wage) before national adoption. Citizens can influence policy at multiple levels." },
    ],
    keyTerms: ["Laboratories of democracy", "Preemption", "Federal mandates", "Intergovernmental grants", "Medicaid", "ESSA", "Policy diffusion"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Use specific policy examples (Medicaid, education, marijuana) to illustrate federalism in action. The AP exam rewards students who can move beyond definitions to concrete policy applications.",
  },

  // ── UNIT 2 ──────────────────────────────────────────────────
  "2.1 Congress": {
    unit: 2, title: "Congress: Senate and House of Representatives",
    essentialQ: "What are the structures, powers, and functions of each chamber of Congress?",
    overview: "Article I of the Constitution establishes a bicameral (two-chamber) Congress. The Senate and House were designed with different constituencies, terms, sizes, and powers — reflecting Founders' concerns about balancing popular representation with deliberation and state equality.",
    keyConcepts: [
      { heading: "House of Representatives", body: "435 members; 2-year terms; seats apportioned by state population (reapportioned every 10 years after census). More responsive to public opinion. Revenue bills must originate here. Power of impeachment." },
      { heading: "Senate", body: "100 members; 6-year terms; 2 per state regardless of population (equal state representation). More deliberative body. Confirms treaties (2/3), confirms presidential appointments, tries impeachments." },
      { heading: "17th Amendment", body: "Ratified 1913 — provided for direct popular election of senators (previously chosen by state legislatures). Made the Senate more responsive to voters and reduced corruption." },
      { heading: "Congressional Leadership", body: "House: Speaker of the House (most powerful; sets agenda, controls floor). Senate: Majority Leader (manages floor schedule, sets agenda). Party whips enforce party discipline." },
    ],
    keyTerms: ["Bicameralism", "Apportionment", "Speaker of the House", "Majority Leader", "Reapportionment", "Enumerated powers", "Advice and consent"],
    foundDocs: ["The Constitution of the United States"],
    scotusCases: [],
    apTip: "Know the key differences between House and Senate: term lengths, sizes, special powers (revenue bills, impeachment vs. treaty ratification, confirmation). The 17th Amendment is frequently tested.",
  },
  "2.2 Powers of Congress": {
    unit: 2, title: "Structures, Powers, and Functions of Congress",
    essentialQ: "How do the structures, powers, and functions of Congress affect the policymaking process?",
    overview: "Congress's power flows from Article I §8 enumerated powers, implied powers from the Necessary and Proper Clause, and additional powers in later amendments. Internal structures — committees, rules, procedures — shape how legislation moves and what gets enacted.",
    keyConcepts: [
      { heading: "The Committee System", body: "Most congressional work happens in committees (standing, select, conference, joint). Committees hold hearings, mark up bills, and control what reaches the floor. Chairs hold enormous power — they set the agenda." },
      { heading: "The Legislative Process", body: "Bill introduction → committee referral → committee markup → floor debate → vote → conference committee (if versions differ) → presidential action (sign, veto, pocket veto)." },
      { heading: "House Rules vs. Senate Procedures", body: "House: Rules Committee controls floor debate (time limits, amendments). Senate: unlimited debate; filibuster can block votes; cloture requires 60 votes; unanimous consent agreements common." },
      { heading: "Pork Barrel & Earmarks", body: "Legislators direct federal spending to their districts (pork barrel) through earmarks — specific funding provisions. Criticized as wasteful; Congress banned earmarks 2011–2021, then partially restored them." },
    ],
    keyTerms: ["Standing committee", "Markup", "Filibuster", "Cloture", "Earmark", "Pork barrel", "Logrolling", "Conference committee", "Pocket veto"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the full legislative process step by step, and know the specific procedural differences between the House and Senate. Filibuster and cloture are very frequently tested.",
  },
  "2.3 Congressional Behavior": {
    unit: 2, title: "Congressional Behavior",
    essentialQ: "How is congressional behavior influenced by election processes, partisanship, and divided government?",
    overview: "Congressional behavior — how members vote, what positions they take, how they spend their time — is shaped by three competing roles: delegate (represent constituents' views), trustee (use own judgment for the public good), and partisan (follow party leadership). Increasing polarization has strengthened partisanship as a behavioral driver.",
    keyConcepts: [
      { heading: "Delegate vs. Trustee Model", body: "Delegate: representatives should vote as their constituents want. Trustee: representatives should use their own judgment. Edmund Burke coined 'trustee.' Most members blend both depending on issue salience." },
      { heading: "Gerrymandering", body: "Drawing district boundaries to advantage one party. Partisan gerrymandering makes seats safer and reduces competition. Racial gerrymandering to dilute minority votes is unconstitutional (Shaw v. Reno)." },
      { heading: "Incumbent Advantage", body: "Incumbents win reelection at rates of 90%+ in the House. Advantages include name recognition, franking privilege, staff resources, and the ability to deliver constituency services (casework)." },
      { heading: "Divided Government", body: "When the president and congressional majority are from different parties. Tends to produce gridlock on major legislation, more vetoes, and greater reliance on executive orders. Common in modern era." },
    ],
    keyTerms: ["Delegate model", "Trustee model", "Partisan", "Gerrymandering", "Incumbent", "Divided government", "Casework", "Franking privilege"],
    foundDocs: [],
    scotusCases: ["Baker v. Carr", "Shaw v. Reno"],
    apTip: "Baker v. Carr and Shaw v. Reno are required cases — know them cold. Gerrymandering and incumbency advantage are classic AP topics. Be able to explain why incumbents rarely lose.",
  },
  "2.4 Roles of the President": {
    unit: 2, title: "Roles of the President",
    essentialQ: "What are the formal and informal powers of the president, and how has the executive branch grown?",
    overview: "The president holds multiple constitutional roles simultaneously: chief executive, commander in chief, chief diplomat, chief legislator, and head of state. Informal powers — the bully pulpit, executive agreements, and political leadership — have expanded presidential influence far beyond what Article II explicitly grants.",
    keyConcepts: [
      { heading: "Formal (Constitutional) Powers", body: "Commander in Chief of armed forces; veto legislation; grant pardons; negotiate treaties (with Senate approval); make appointments (with Senate confirmation); deliver State of the Union; call Congress into special session." },
      { heading: "Executive Orders", body: "Presidential directives that manage executive branch operations with the force of law. Do not require congressional approval. Can be overturned by Congress (legislation) or the courts. Examples: FDR's Japanese internment, Truman's desegregation of the military." },
      { heading: "The Veto Power", body: "President can veto any bill passed by Congress. Congress can override with 2/3 vote in both chambers — rarely achieved. Pocket veto: if Congress adjourns within 10 days of presenting a bill, unsigned bill dies." },
      { heading: "Commander in Chief", body: "Presidents have broad authority over military operations. War Powers Resolution (1973) requires notification of Congress within 48 hours of deploying troops; limits deployments to 60 days without authorization. Presidents have often challenged this." },
    ],
    keyTerms: ["Executive order", "Veto", "Pocket veto", "Commander in Chief", "Signing statement", "Treaty power", "Pardon power", "War Powers Resolution"],
    foundDocs: ["The Constitution of the United States"],
    scotusCases: [],
    apTip: "Know the difference between formal and informal presidential powers. Executive orders, the veto, and the War Powers Resolution are all high-frequency AP topics.",
  },
  "2.5 Checks on Presidency": {
    unit: 2, title: "Checks on the Presidency",
    essentialQ: "How does Congress check executive power, and what limits exist on presidential authority?",
    overview: "The Constitution creates multiple mechanisms for Congress and the courts to check presidential power. Despite the growth of executive power in the 20th century, Congress retains the power of the purse, the power to declare war, the confirmation power, and the ultimate check of impeachment.",
    keyConcepts: [
      { heading: "Congressional Checks", body: "Override vetoes (2/3); control appropriations (power of the purse); confirm appointments and treaties; declare war; impeach and remove; investigate executive branch through oversight hearings." },
      { heading: "Impeachment Process", body: "House impeaches (simple majority — formal accusation). Senate tries and convicts (2/3 required for removal). Only three presidents impeached: Andrew Johnson (1868), Clinton (1998), Trump (2019, 2021). None removed by Senate." },
      { heading: "Judicial Checks", body: "Courts can strike down executive actions as unconstitutional (Youngstown Sheet & Tube Co. v. Sawyer, 1952 — Truman's steel seizure). Courts also limit executive privilege (United States v. Nixon, 1974)." },
      { heading: "Senate Confirmation", body: "The Senate must confirm all major presidential appointments: cabinet secretaries, federal judges (including Supreme Court), ambassadors, and other principal officers. Can be used to shape executive branch composition." },
    ],
    keyTerms: ["Impeachment", "Power of the purse", "Override", "Confirmation", "War Powers Resolution", "Executive privilege", "Oversight"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the impeachment process precisely: House impeaches, Senate tries, 2/3 to remove. Know the difference between impeachment (charged) and removal (convicted). All three modern impeachments resulted in acquittal.",
  },
  "2.6 Expansion of Exec. Power": {
    unit: 2, title: "Expansion of Presidential Power",
    essentialQ: "How and why has presidential power expanded beyond what the Constitution explicitly grants?",
    overview: "The modern presidency is dramatically more powerful than what the Founders envisioned. This expansion stems from national crises (Civil War, Great Depression, WWII, 9/11), congressional delegation of authority, and presidents' aggressive interpretation of Article II powers.",
    keyConcepts: [
      { heading: "Stewardship Theory", body: "Theodore Roosevelt argued the president may do anything not expressly forbidden by the Constitution. This expansive view contrasts with the Whig theory (president can only do what is explicitly authorized)." },
      { heading: "Executive Agreements", body: "Agreements with foreign governments that do not require Senate ratification. Used far more frequently than formal treaties. Have the force of law domestically but can be reversed by the next president." },
      { heading: "National Security and Crisis Powers", body: "Wars and crises have consistently expanded presidential power. Lincoln suspended habeas corpus; FDR interned Japanese Americans; Bush created military tribunals after 9/11. Congress often ratifies these expansions afterward." },
      { heading: "22nd Amendment", body: "Ratified 1951 — limited presidents to two terms. Passed in reaction to FDR's four terms. Creates a 'lame duck' dynamic in second terms as presidential influence wanes." },
    ],
    keyTerms: ["Stewardship theory", "Executive agreement", "Executive privilege", "Signing statement", "Lame duck", "22nd Amendment", "Imperial presidency"],
    foundDocs: [],
    scotusCases: [],
    apTip: "The expansion of executive power is a core AP theme. Be able to give specific examples of how presidential power has grown and identify which tools presidents use to expand their authority.",
  },
  "2.7 Presidential Communication": {
    unit: 2, title: "Presidential Communication",
    essentialQ: "How does the president use communication to exercise power and shape the political agenda?",
    overview: "The modern presidency is as much a communication operation as a governing one. Presidents use the bully pulpit, press conferences, social media, the State of the Union, and direct appeals to the public to build support, pressure Congress, and shape the policy agenda.",
    keyConcepts: [
      { heading: "The Bully Pulpit", body: "Theodore Roosevelt's term for the presidency as a platform to promote an agenda. The president is the nation's most prominent communicator — able to command media attention and shape public debate more than any other figure." },
      { heading: "Going Public", body: "Presidents increasingly bypass Congress and appeal directly to the public to pressure legislators. Reagan mastered this; Trump used Twitter. 'Going public' works best when the president is popular and the issue is salient." },
      { heading: "State of the Union", body: "Annual address to Congress (Article II §3). Sets the legislative agenda; major speeches occasion for agenda-setting and political theater. Modern SOTUs are elaborate media events." },
      { heading: "Media Relations", body: "Press conferences, press secretaries, communications staff, and social media all shape how presidents communicate. Media can constrain presidents (investigative journalism) or amplify their message." },
    ],
    keyTerms: ["Bully pulpit", "Going public", "State of the Union", "Agenda-setting", "Press secretary", "Media relations", "Honeymoon period"],
    foundDocs: [],
    scotusCases: [],
    apTip: "The bully pulpit and 'going public' strategy are classic AP topics. Know how presidents use communication as a political tool and understand the limits of this approach (works best when president is popular).",
  },
  "2.8 The Judicial Branch": {
    unit: 2, title: "The Judicial Branch",
    essentialQ: "What is the structure and function of the federal judiciary, and how did judicial review develop?",
    overview: "Article III establishes the Supreme Court and authorizes Congress to create inferior federal courts. The federal judiciary has three levels: district courts (trial courts), courts of appeals (circuit courts), and the Supreme Court. Judicial review — the power to declare laws unconstitutional — was established in Marbury v. Madison (1803).",
    keyConcepts: [
      { heading: "Federal Court Structure", body: "94 district courts (trial level) → 13 courts of appeals (circuit courts, intermediate appellate) → Supreme Court (9 justices; final word on federal law and the Constitution)." },
      { heading: "Judicial Review", body: "Established in Marbury v. Madison (1803). Not in the Constitution — Marshall derived it from Article III and the Supremacy Clause. Allows courts to strike down acts of Congress, the executive, and state laws as unconstitutional." },
      { heading: "Supreme Court Case Selection", body: "Writ of certiorari: Court agrees to hear a case (Rule of Four — 4 justices must agree). Court receives ~7,000-8,000 petitions per year; accepts ~1%. Cases with conflicting circuit court rulings are top priority." },
      { heading: "Stare Decisis", body: "Courts follow precedent — prior decisions on the same legal question. Provides stability and predictability. Can be overturned (Plessy → Brown; Roe → Dobbs) but overturning major precedent is rare and controversial." },
    ],
    keyTerms: ["Judicial review", "Writ of certiorari", "Stare decisis", "Precedent", "Original jurisdiction", "Appellate jurisdiction", "Rule of Four", "District court", "Circuit court"],
    foundDocs: [],
    scotusCases: ["Marbury v. Madison"],
    apTip: "Marbury v. Madison is the single most important SCOTUS case — know it precisely. Understand writ of certiorari and stare decisis. The AP frequently tests the structure of the federal court system.",
  },
  "2.9 Legitimacy of Courts": {
    unit: 2, title: "Legitimacy of the Judicial Branch",
    essentialQ: "How does the Supreme Court maintain its legitimacy and independence in a democratic system?",
    overview: "The federal judiciary is the only unelected branch of the national government. Its legitimacy rests on the rule of law, adherence to precedent, and public acceptance of its authority — not on electoral accountability. Debates about judicial activism vs. restraint go to the heart of the Court's proper role in a democracy.",
    keyConcepts: [
      { heading: "Judicial Independence", body: "Federal judges have life tenure ('good behavior') and protected salaries. These features insulate judges from political pressure and short-term public opinion — critical to impartial adjudication." },
      { heading: "Judicial Activism", body: "A philosophy in which judges are willing to overturn precedent and interpret the Constitution broadly to address contemporary issues. Critics argue this is 'legislating from the bench.'" },
      { heading: "Judicial Restraint", body: "A philosophy in which judges defer to elected branches and are reluctant to overturn precedent. Sees judges as applying, not making, law. Associated with textualism and originalism." },
      { heading: "The 'Counter-Majoritarian Difficulty'", body: "Unelected judges can overturn laws passed by elected majorities. Defenders argue this protects minority rights; critics argue it's anti-democratic. This tension is unresolved in American constitutional thought." },
    ],
    keyTerms: ["Life tenure", "Judicial independence", "Judicial activism", "Judicial restraint", "Originalism", "Textualism", "Living Constitution", "Judicial legitimacy"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the difference between judicial activism and restraint, and be able to give examples of each. The AP frequently asks students to evaluate whether specific decisions represent activism or restraint.",
  },
  "2.10 Court in Action": {
    unit: 2, title: "The Court in Action",
    essentialQ: "How does the Supreme Court decide cases, and what factors influence its decisions?",
    overview: "The Supreme Court's decision-making process involves accepting cases via certiorari, receiving written briefs from parties and amicus curiae filers, hearing oral arguments, conferencing, and writing opinions. Justices are influenced by constitutional text, precedent, ideology, and strategic considerations.",
    keyConcepts: [
      { heading: "The Certiorari Process", body: "Parties petition for cert; law clerks screen petitions; justices vote (Rule of Four). Court prioritizes circuit splits, major constitutional questions, and cases involving the federal government." },
      { heading: "Oral Arguments", body: "Each side gets 30 minutes to argue before all nine justices. Justices pepper attorneys with questions. Oral argument rarely changes outcomes but can refine the Court's reasoning." },
      { heading: "Amicus Curiae Briefs", body: "'Friend of the court' briefs from interested third parties (interest groups, states, businesses). Allow the Court to hear broader perspectives. Interest groups use amicus briefs as a key lobbying tool." },
      { heading: "Writing Opinions", body: "Majority opinion (binding precedent); concurring opinions (agree with outcome, different reasoning); dissenting opinions (disagree). The majority opinion is what the Court 'holds' — the legal rule going forward." },
    ],
    keyTerms: ["Amicus curiae", "Oral argument", "Majority opinion", "Concurring opinion", "Dissenting opinion", "Law clerk", "Conference", "Writ of certiorari"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the difference between majority, concurring, and dissenting opinions. Only the majority opinion creates binding precedent. Amicus curiae is a key term — interest groups file them to influence Court decisions.",
  },
  "2.11 Checks on Judiciary": {
    unit: 2, title: "Checks on the Judicial Branch",
    essentialQ: "How do Congress, the president, and public opinion check the power of the federal courts?",
    overview: "Though the judiciary is the 'least dangerous branch' (Hamilton, Federalist No. 78), it is not unchecked. Congress can amend the Constitution to override decisions, change court jurisdiction, and control budgets. The president nominates all federal judges. Public opinion constrains judicial legitimacy over time.",
    keyConcepts: [
      { heading: "Constitutional Amendments", body: "Congress and states can override Supreme Court decisions by amending the Constitution. The 11th Amendment overruled Chisholm v. Georgia; the 14th overruled Dred Scott; the 26th overruled Oregon v. Mitchell." },
      { heading: "Senate Confirmation", body: "Presidential nominees for all federal judgeships must be confirmed by the Senate. Confirmation battles (Bork 1987, Kavanaugh 2018, Jackson 2022) show the political stakes of judicial appointments." },
      { heading: "Congressional Jurisdiction Stripping", body: "Article III allows Congress to limit the Supreme Court's appellate jurisdiction. Rarely used but a theoretical check — Congress could remove certain topics from Court's reach." },
      { heading: "Court-Packing Threat", body: "FDR's 1937 court-packing plan proposed adding justices to reverse New Deal rulings. Though defeated, it may have influenced the 'switch in time that saved nine.' Periodic proposals resurface when the Court is ideologically contentious." },
    ],
    keyTerms: ["Constitutional amendment", "Senate confirmation", "Jurisdiction stripping", "Court-packing", "Judicial appointments", "Senatorial courtesy", "Recess appointment"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Focus on the three main checks: constitutional amendments (Congress + states), presidential nomination, and Senate confirmation. The AP may ask students to evaluate whether these checks are sufficient to constrain the Court.",
  },
  "2.12 The Bureaucracy": {
    unit: 2, title: "The Federal Bureaucracy",
    essentialQ: "What is the federal bureaucracy, and what roles does it play in the policymaking process?",
    overview: "The federal bureaucracy — sometimes called the 'fourth branch' — consists of 2+ million civilian employees organized into departments, agencies, commissions, and corporations. It implements laws passed by Congress, issues regulations, and delivers government services. Though unelected, the bureaucracy shapes policy profoundly.",
    keyConcepts: [
      { heading: "Types of Agencies", body: "Cabinet departments (State, Defense, Education); independent agencies (EPA, NASA); regulatory commissions (FCC, SEC — bipartisan, quasi-legislative); government corporations (USPS, Amtrak)." },
      { heading: "Bureaucratic Functions", body: "Implementation: translating law into action. Rule-making: issuing binding regulations through the notice-and-comment process. Adjudication: resolving disputes. Service delivery: Social Security checks, national parks." },
      { heading: "Iron Triangle", body: "Stable, mutually beneficial relationship: congressional committee (legislation, oversight, funding) ↔ federal agency (implementation, expertise) ↔ interest group (support, revolving door, campaign contributions)." },
      { heading: "Issue Networks", body: "Loose, informal networks of policy experts, advocates, journalists, academics, and officials who interact on a policy issue. More fluid and open than iron triangles. Better describes many modern policy areas." },
    ],
    keyTerms: ["Bureaucracy", "Cabinet", "Independent agency", "Regulatory commission", "Iron triangle", "Issue network", "Rule-making", "Implementation", "Revolving door"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Iron triangle vs. issue network is a classic AP distinction. Be able to diagram an iron triangle for a specific policy area (e.g., defense: Armed Services Committee ↔ Pentagon ↔ defense contractors).",
  },
  "2.13 Rule-Making Authority": {
    unit: 2, title: "Bureaucratic Rule-Making and Discretion",
    essentialQ: "How does the bureaucracy exercise discretion in implementing laws and issuing regulations?",
    overview: "When Congress passes legislation, it often leaves significant details to agencies to fill in through rule-making. This delegation of legislative authority gives agencies — and the career officials who staff them — substantial policymaking power. Critics argue this creates accountability gaps in a democratic system.",
    keyConcepts: [
      { heading: "Delegation of Authority", body: "Congress passes broad laws (Clean Air Act, ADA) and delegates authority to agencies (EPA, DOJ) to write detailed regulations. Agencies have subject-matter expertise Congress lacks." },
      { heading: "The Rule-Making Process", body: "Proposed rule published in Federal Register → public comment period → agency reviews comments → final rule published. Final rules have the force of law. Parties can challenge rules in court." },
      { heading: "Bureaucratic Discretion", body: "Street-level bureaucrats (teachers, police, welfare caseworkers) implement policy with considerable discretion. Their decisions are the policy as experienced by citizens. Hard to monitor or control." },
      { heading: "Congressional Oversight", body: "Congress uses hearings, investigations, the budget process, and agency inspectors general to oversee bureaucratic behavior. The Government Accountability Office (GAO) audits agencies. Oversight is imperfect but essential." },
    ],
    keyTerms: ["Delegation", "Federal Register", "Rule-making", "Notice-and-comment", "Street-level bureaucrat", "Discretion", "Congressional oversight", "Inspector general"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Focus on why Congress delegates (expertise, efficiency) and why this creates accountability problems (who controls unelected bureaucrats?). Congressional oversight mechanisms are important to know.",
  },
  "2.14 Accountability": {
    unit: 2, title: "Accountability of the Federal Bureaucracy",
    essentialQ: "How are government agencies held accountable for their performance and conduct?",
    overview: "Bureaucratic accountability is a central challenge of democratic governance. Multiple mechanisms exist to hold agencies accountable: presidential control (appointments, executive orders), congressional oversight, judicial review, and transparency requirements (Freedom of Information Act). No single mechanism is fully effective.",
    keyConcepts: [
      { heading: "Presidential Control", body: "Presidents appoint (with Senate confirmation) department heads and set agency priorities through executive orders and budget proposals. Senior executive service provides a corps of managers responsive to presidential direction." },
      { heading: "Congressional Oversight", body: "Hearings, investigations, the annual appropriations process, and sunset provisions (agencies must be reauthorized) give Congress leverage over agencies. The Legislative Veto (INS v. Chadha, 1983 — ruled unconstitutional) was another tool." },
      { heading: "Judicial Review of Agency Action", body: "Courts review whether agency rules are consistent with the authorizing statute (Chevron deference — courts traditionally defer to agency interpretation of ambiguous statutes; recently weakened in Loper Bright, 2024)." },
      { heading: "Transparency and Whistleblowers", body: "Freedom of Information Act (FOIA) allows citizens to request agency documents. Whistleblower protection laws encourage employees to report wrongdoing without retaliation." },
    ],
    keyTerms: ["Accountability", "Congressional oversight", "Whistleblower", "FOIA", "Sunset provision", "Chevron deference", "Inspector general", "Senior Executive Service"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Be able to describe at least three mechanisms for holding the bureaucracy accountable and explain the limitations of each. This is a common FRQ topic.",
  },

  // ── UNIT 3 ──────────────────────────────────────────────────
  "3.1 The Bill of Rights": {
    unit: 3, title: "The Bill of Rights",
    essentialQ: "How does the Bill of Rights protect individual liberties from government action?",
    overview: "The first ten amendments — the Bill of Rights — were ratified in 1791, fulfilling the Federalists' promise to Anti-Federalists. They protect individual rights from federal government action. Originally applied only to the federal government; the 14th Amendment's Due Process Clause has been used to incorporate most protections against state governments.",
    keyConcepts: [
      { heading: "Origins of the Bill of Rights", body: "Demanded by Anti-Federalists as a condition of ratification. James Madison drafted 12 amendments; 10 were ratified. Reflects fears about unchecked federal power trampling individual liberty." },
      { heading: "The First Amendment", body: "Five freedoms: religion (Establishment and Free Exercise clauses), speech, press, assembly, petition. The bedrock of American civil liberties — most litigated and most debated." },
      { heading: "Fourth–Eighth Amendments: Procedural Rights", body: "Protect the accused in criminal proceedings: unreasonable searches (4th), self-incrimination and double jeopardy (5th), speedy trial and counsel (6th), civil jury (7th), cruel punishment (8th)." },
      { heading: "9th and 10th Amendments", body: "9th: rights not listed are retained by the people (basis for privacy rights). 10th: powers not delegated to the federal government are reserved to states or the people (federalism anchor)." },
    ],
    keyTerms: ["Bill of Rights", "Civil liberties", "Due process", "Selective incorporation", "First Amendment", "Fourth Amendment", "Eighth Amendment"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know all 10 amendments and their main protections. Focus especially on the 1st (free speech, religion), 4th (search and seizure), 5th (self-incrimination), 6th (counsel), and 14th (incorporation).",
  },
  "3.2 Freedom of Religion": {
    unit: 3, title: "Freedom of Religion",
    essentialQ: "How has the Supreme Court interpreted the Establishment Clause and Free Exercise Clause?",
    overview: "The First Amendment contains two religion clauses: the Establishment Clause ('Congress shall make no law respecting an establishment of religion') and the Free Exercise Clause ('or prohibiting the free exercise thereof'). These clauses sometimes conflict — protecting religion from government interference while preventing government from promoting religion.",
    keyConcepts: [
      { heading: "Establishment Clause", body: "Government cannot establish an official religion, favor one religion over another, or excessively entangle with religion. Lemon test (1971): law must have secular purpose, neutral effect, no excessive entanglement." },
      { heading: "Engel v. Vitale (1962)", body: "State-sponsored prayer in public school violates Establishment Clause — even if voluntary and nondenominational. Incorporated against states. School prayer remains prohibited." },
      { heading: "Free Exercise Clause", body: "Government cannot prohibit religious practice. However, conduct motivated by religion (not the belief itself) can be regulated if the law is generally applicable and religiously neutral (Employment Division v. Smith, 1990)." },
      { heading: "Tension Between Clauses", body: "When does government accommodation of religion become establishment? When does regulation of religious conduct infringe free exercise? These tensions produce ongoing litigation (Masterpiece Cakeshop, 303 Creative)." },
    ],
    keyTerms: ["Establishment Clause", "Free Exercise Clause", "Lemon test", "Wall of separation", "Accommodation", "Neutrality", "Religious freedom"],
    foundDocs: [],
    scotusCases: ["Engel v. Vitale"],
    apTip: "Engel v. Vitale is a required case. Know the facts, ruling, and the specific clause it interpreted. Be clear on the difference between the Establishment and Free Exercise clauses.",
  },
  "3.3 Freedom of Speech": {
    unit: 3, title: "Freedom of Speech",
    essentialQ: "How has the Supreme Court balanced free speech against government interests in order and security?",
    overview: "The First Amendment's speech protections are among the broadest in the world but are not absolute. The Supreme Court has developed different standards for different categories of speech: political speech gets the strongest protection; 'unprotected' categories (true threats, incitement, obscenity) can be regulated.",
    keyConcepts: [
      { heading: "Clear and Present Danger Test", body: "Schenck v. United States (1919): speech may be restricted if it creates a clear and present danger of illegal action. The famous 'falsely shouting fire in a crowded theater' analogy. Later modified by Brandenburg v. Ohio (1969)." },
      { heading: "Brandenburg Standard", body: "Current rule: government can only restrict speech that is directed to inciting imminent lawless action AND is likely to produce that action. Much more speech-protective than Schenck." },
      { heading: "Symbolic Speech", body: "Tinker v. Des Moines (1969): wearing armbands is protected symbolic speech. Texas v. Johnson (1989): flag burning is protected. The government cannot ban expression simply because it's offensive." },
      { heading: "Unprotected Speech Categories", body: "True threats, 'fighting words' (Chaplinsky v. New Hampshire), incitement to imminent lawless action (Brandenburg), obscenity, defamation, commercial fraud. These categories receive no First Amendment protection." },
    ],
    keyTerms: ["Clear and present danger", "Brandenburg test", "Symbolic speech", "Fighting words", "Prior restraint", "Incitement", "Defamation", "Libel", "Slander"],
    foundDocs: [],
    scotusCases: ["Schenck v. United States", "Tinker v. Des Moines"],
    apTip: "Both Schenck and Tinker are required cases. Know how the clear-and-present-danger test from Schenck differs from the Brandenburg incitement test. Symbolic speech is a key concept.",
  },
  "3.4 Freedom of the Press": {
    unit: 3, title: "Freedom of the Press",
    essentialQ: "What protections does the First Amendment provide to the press, and what are their limits?",
    overview: "The press clause of the First Amendment protects publications from government censorship. The strongest protection is against prior restraint — stopping publication before it occurs. Courts have generally allowed the government to punish publications after the fact only in narrow circumstances.",
    keyConcepts: [
      { heading: "Prior Restraint", body: "Government action preventing speech or publication before it occurs. Presumed unconstitutional. The burden is on the government to justify prior restraint — a very high standard." },
      { heading: "New York Times v. United States (1971)", body: "Pentagon Papers case. Nixon administration sought to stop publication. Court ruled 6-3 that the government failed to meet its heavy burden. Publication was protected. Reinforced near-absolute prohibition on prior restraint." },
      { heading: "Libel and Defamation", body: "The press can be held liable after publication for false statements of fact. New York Times v. Sullivan (1964): public officials must prove 'actual malice' (knowing falsity or reckless disregard for truth) to win defamation suits." },
      { heading: "Shield Laws and Reporter's Privilege", body: "Some states protect journalists from revealing sources. No federal shield law. Courts have ruled reporters can be compelled to testify in criminal cases (Branzburg v. Hayes, 1972)." },
    ],
    keyTerms: ["Prior restraint", "Freedom of press", "Libel", "Actual malice", "Shield law", "Pentagon Papers", "Press freedom"],
    foundDocs: [],
    scotusCases: ["New York Times v. United States"],
    apTip: "NYT v. United States is a required case focused on prior restraint. Know the Pentagon Papers context, the government's argument, and why the Court rejected it. Prior restraint is the key concept.",
  },
  "3.5 Second Amendment": {
    unit: 3, title: "The Second Amendment",
    essentialQ: "How has the Supreme Court interpreted the right to keep and bear arms?",
    overview: "The Second Amendment's meaning was debated for over two centuries. In District of Columbia v. Heller (2008), the Court ruled for the first time that the Second Amendment protects an individual right to possess firearms for self-defense — not just in connection with militia service. McDonald v. Chicago (2010) incorporated this right against states.",
    keyConcepts: [
      { heading: "Text and History", body: "'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.' The prefatory militia clause's relationship to the operative rights clause was the key dispute." },
      { heading: "D.C. v. Heller (2008)", body: "The Second Amendment protects an individual right to possess firearms for traditionally lawful purposes (self-defense in the home). D.C.'s handgun ban was unconstitutional. Scalia wrote the majority; Stevens dissented." },
      { heading: "McDonald v. Chicago (2010)", body: "Incorporated the Second Amendment through the 14th Amendment's Due Process Clause. State and local governments cannot ban handguns for self-defense. Extended Heller nationwide." },
      { heading: "Remaining Questions", body: "Even after Heller and McDonald, many regulations remain permissible: background checks, prohibitions on felons, limits on concealed carry. New York State Rifle & Pistol Association v. Bruen (2022) struck down 'may-issue' concealed carry licensing." },
    ],
    keyTerms: ["Second Amendment", "Right to bear arms", "Militia", "Individual rights", "Incorporation", "Gun control", "Heller decision"],
    foundDocs: [],
    scotusCases: ["McDonald v. Chicago"],
    apTip: "Know the 2nd Amendment debate: collective rights (militia) vs. individual rights (Heller). McDonald v. Chicago incorporated the right against states. These cases show the selective incorporation process in action.",
  },
  "3.6 Amendments & Order": {
    unit: 3, title: "Amendments and Due Process of Law",
    essentialQ: "How do the 4th, 5th, 6th, and 8th Amendments protect the accused in criminal proceedings?",
    overview: "The Fourth through Eighth Amendments create a framework of procedural rights for individuals in the criminal justice system. These 'due process' protections reflect the Founders' deep suspicion of government power and their commitment to limiting arbitrary government action against individuals.",
    keyConcepts: [
      { heading: "Fourth Amendment: Search and Seizure", body: "Protects against unreasonable searches and seizures. Requires warrants based on probable cause. Exclusionary rule: illegally obtained evidence cannot be used in court (Mapp v. Ohio, 1961)." },
      { heading: "Fifth Amendment: Self-Incrimination", body: "Cannot be compelled to be a witness against oneself. Miranda v. Arizona (1966): police must inform suspects of rights (to remain silent, to counsel) before custodial interrogation. Grand jury required for serious federal crimes." },
      { heading: "Sixth Amendment: Right to Counsel", body: "Gideon v. Wainwright (1963): states must provide attorneys to defendants who cannot afford them. Right to speedy trial, public trial, and impartial jury are also guaranteed." },
      { heading: "Eighth Amendment: Punishment", body: "Prohibits cruel and unusual punishment and excessive bail or fines. Courts have used this to regulate the death penalty (prohibited for juveniles, the intellectually disabled) and prison conditions." },
    ],
    keyTerms: ["Probable cause", "Exclusionary rule", "Miranda rights", "Double jeopardy", "Self-incrimination", "Right to counsel", "Cruel and unusual punishment", "Due process"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the specific protections in each amendment (4th through 8th) and the key SCOTUS cases enforcing them. The exclusionary rule (4th) and Miranda rights (5th/6th) are high-frequency AP topics.",
  },
  "3.7 Selective Incorporation": {
    unit: 3, title: "Selective Incorporation",
    essentialQ: "How has selective incorporation expanded civil liberties protections against state governments?",
    overview: "Originally, the Bill of Rights applied only to the federal government (Barron v. Baltimore, 1833). After the Civil War, the 14th Amendment's Due Process and Equal Protection clauses gave courts the tools to apply Bill of Rights protections to states. The Supreme Court has done this selectively — one right at a time — through a process called selective incorporation.",
    keyConcepts: [
      { heading: "Barron v. Baltimore (1833)", body: "Chief Justice Marshall ruled that the Bill of Rights applies only to the federal government, not the states. This ruling was the law for 80+ years." },
      { heading: "14th Amendment as Vehicle", body: "The Due Process Clause of the 14th Amendment ('nor shall any State deprive any person of life, liberty, or property without due process') has been interpreted to incorporate most Bill of Rights guarantees against states." },
      { heading: "Selective Incorporation Process", body: "The Court incorporates rights one at a time, case by case, when they are deemed 'fundamental to ordered liberty' or 'deeply rooted in the nation's history and traditions.' Not all rights have been incorporated." },
      { heading: "Key Incorporation Cases", body: "Gitlow v. New York (1925) — 1st Amendment speech; Mapp v. Ohio (1961) — 4th Amendment exclusionary rule; Gideon v. Wainwright (1963) — 6th Amendment counsel; McDonald v. Chicago (2010) — 2nd Amendment." },
    ],
    keyTerms: ["Selective incorporation", "14th Amendment", "Due Process Clause", "Fundamental rights", "Barron v. Baltimore", "Total incorporation", "Ordered liberty"],
    foundDocs: [],
    scotusCases: ["Gideon v. Wainwright"],
    apTip: "Selective incorporation is a core concept that connects Unit 1 (federalism), Unit 2 (judiciary), and Unit 3 (civil liberties). Know the 14th Amendment's role and be able to name at least 3 rights that have been incorporated with the relevant cases.",
  },
  "3.10 Social Movements": {
    unit: 3, title: "Social Movements and Civil Rights",
    essentialQ: "How have social movements expanded civil rights and civil liberties in American history?",
    overview: "Civil rights — equal treatment under law — have been expanded through a combination of social movements, litigation, and legislation. The Civil Rights Movement of the 1950s-60s is the paradigm case, but similar dynamics have shaped women's rights, LGBTQ+ rights, disability rights, and other movements.",
    keyConcepts: [
      { heading: "The Civil Rights Movement", body: "Used legal strategies (NAACP litigation), nonviolent direct action (sit-ins, marches), and political pressure to end legal segregation. Brown v. Board (1954), Civil Rights Act (1964), and Voting Rights Act (1965) were the legislative results." },
      { heading: "Brown v. Board of Education (1954)", body: "Overturned Plessy v. Ferguson's 'separate but equal' doctrine. Desegregated public schools. Catalyzed the Civil Rights Movement. Warren Court's unanimous decision showed strategic consensus-building." },
      { heading: "Civil Disobedience", body: "MLK's Letter from Birmingham Jail articulates the moral and legal basis for civil disobedience. Nonviolent resistance to unjust laws — accepting legal penalty — forces society to confront injustice." },
      { heading: "Women's Rights Movement", body: "Seneca Falls Convention (1848); 19th Amendment (1920); ERA movement; Title IX (1972). NOW, EEOC enforcement. Reproductive rights litigation (Roe v. Wade, 1973; Dobbs v. Jackson, 2022)." },
    ],
    keyTerms: ["Civil rights", "Civil disobedience", "Segregation", "Integration", "NAACP", "Brown v. Board", "Civil Rights Act", "Voting Rights Act", "Women's suffrage"],
    foundDocs: ["Letter from Birmingham Jail"],
    scotusCases: ["Brown v. Board of Education"],
    apTip: "Brown v. Board of Education is a required case — know the parties, constitutional basis (Equal Protection), and overturned precedent (Plessy). Letter from Birmingham Jail is a required document — know King's argument about just vs. unjust laws.",
  },
  "3.11 Gov't Responses": {
    unit: 3, title: "Government Responses to Social Movements",
    essentialQ: "How has the government responded to demands for expanded civil rights?",
    overview: "Government responses to civil rights demands have ranged from resistance (massive resistance to desegregation) to major legislative achievements (Civil Rights Act, Voting Rights Act) to judicial protection (Warren Court decisions). The interplay between social movement pressure and government response is central to American civil rights history.",
    keyConcepts: [
      { heading: "Civil Rights Act of 1964", body: "Prohibited discrimination based on race, color, religion, sex, or national origin in employment and public accommodations. Created the EEOC to enforce employment provisions. One of the most transformative pieces of legislation in American history." },
      { heading: "Voting Rights Act of 1965", body: "Banned discriminatory voting practices (literacy tests, poll tests). Required federal oversight of elections in jurisdictions with history of discrimination (preclearance). Dramatically increased Black voter registration." },
      { heading: "Equal Protection Clause Applications", body: "14th Amendment's Equal Protection Clause has been the constitutional basis for expanding civil rights protections to women (gender), LGBTQ+ individuals (Obergefell), and other groups beyond race." },
      { heading: "Ongoing Debates", body: "Shelby County v. Holder (2013) weakened VRA preclearance. Affirmative action in education (SFFA v. Harvard, 2023 — struck down race-conscious admissions). Civil rights law continues to evolve." },
    ],
    keyTerms: ["Civil Rights Act", "Voting Rights Act", "EEOC", "Preclearance", "Equal Protection Clause", "Affirmative action", "Discrimination"],
    foundDocs: [],
    scotusCases: ["Brown v. Board of Education"],
    apTip: "Know the Civil Rights Act (1964) and Voting Rights Act (1965) — what they prohibited, how they were enforced, and their impact. These are fundamental to understanding how government responded to the Civil Rights Movement.",
  },
  "3.12 Minority & Majority Rights": {
    unit: 3, title: "Minority Rights and Majority Rule",
    essentialQ: "How does the Constitution balance the rights of minorities with the will of the majority?",
    overview: "Democratic theory faces a fundamental tension: majority rule can threaten minority rights. The Constitution addresses this through countermajoritarian institutions — the federal courts, the Senate, the amendment process, and the Bill of Rights itself — that protect minorities from oppressive majorities.",
    keyConcepts: [
      { heading: "Counter-Majoritarian Institutions", body: "The Supreme Court (unelected), Senate equal representation (small states can block majority will), Bill of Rights (removes certain issues from majority vote), and the supermajority amendment requirement all protect minorities." },
      { heading: "LGBTQ+ Rights", body: "Lawrence v. Texas (2003): struck down sodomy laws. United States v. Windsor (2013): DOMA unconstitutional. Obergefell v. Hodges (2015): same-sex marriage is a fundamental right under the 14th Amendment." },
      { heading: "Strict Scrutiny", body: "The highest level of judicial review. Applied to laws that classify by race, national origin, or (increasingly) sex. Government must show a compelling interest and that the law is narrowly tailored. Very hard for government to satisfy." },
      { heading: "Affirmative Action", body: "Policies using race or sex to benefit underrepresented groups. Contested as both helping minorities and potentially discriminating against others. SFFA v. Harvard (2023) effectively ended race-conscious college admissions." },
    ],
    keyTerms: ["Majority rule", "Minority rights", "Strict scrutiny", "Equal protection", "Affirmative action", "Counter-majoritarian", "Fundamental rights", "Obergefell"],
    foundDocs: [],
    scotusCases: ["Obergefell v. Hodges"],
    apTip: "The tension between majority rule and minority rights is a central AP Gov theme. Know the three tiers of judicial review (rational basis, intermediate scrutiny, strict scrutiny) and when each applies.",
  },
  "3.13 Affirmative Action": {
    unit: 3, title: "Affirmative Action",
    essentialQ: "How has the Supreme Court addressed affirmative action in education and employment?",
    overview: "Affirmative action — policies that consider race, sex, or other characteristics to benefit underrepresented groups — has been one of the most legally and politically contested civil rights issues. The Supreme Court has permitted some forms while striking down others, and recently ended race-conscious college admissions entirely.",
    keyConcepts: [
      { heading: "Regents v. Bakke (1978)", body: "UC Davis medical school's rigid quota system was unconstitutional. But Justice Powell's controlling opinion held that race could be used as one factor among many in admissions to achieve 'diversity.' Split decision, complex legacy." },
      { heading: "Grutter v. Bollinger (2003)", body: "University of Michigan Law School's holistic, individualized race-conscious admissions was constitutional. O'Connor's majority anticipated affirmative action would no longer be needed in 25 years." },
      { heading: "SFFA v. Harvard & UNC (2023)", body: "Roberts Court ruled 6-3 that race-conscious admissions at Harvard and UNC violated the Equal Protection Clause. Effectively ended race-conscious affirmative action in college admissions nationwide." },
      { heading: "Employment Affirmative Action", body: "Executive Order 11246 (1965) requires federal contractors to take affirmative steps in hiring. Title VII prohibits employment discrimination. Courts have allowed affirmative action in employment with less restrictive scrutiny than education." },
    ],
    keyTerms: ["Affirmative action", "Diversity rationale", "Quota", "Strict scrutiny", "Equal Protection Clause", "Race-conscious", "Bakke", "Grutter"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the evolution of affirmative action doctrine from Bakke (1978) through Grutter (2003) to SFFA (2023). The AP may ask students to trace how the Court's position has changed over time.",
  },

  // ── UNIT 4 ──────────────────────────────────────────────────
  "4.1 American Attitudes": {
    unit: 4, title: "American Political Culture",
    essentialQ: "What core values define American political culture, and how do they shape political debates?",
    overview: "Despite deep political divisions, Americans share a core political culture built around liberty, equality, individualism, democracy, and rule of law. These values shape how Americans approach political issues — even when they disagree about specific policies. Understanding American political culture is essential to understanding American politics.",
    keyConcepts: [
      { heading: "Core Values", body: "Liberty (freedom from government interference), equality (equal opportunity, if not outcome), individualism (personal responsibility), democracy (popular sovereignty), and rule of law (government bound by law)." },
      { heading: "Equality of Opportunity vs. Outcome", body: "Most Americans favor equality of opportunity (everyone gets a fair shot) over equality of outcome (equalizing results). This distinction explains opposition to redistributive policies and support for merit-based systems." },
      { heading: "Limited Government", body: "Deep skepticism of government power is a defining American value. Americans are more likely than citizens of other democracies to believe government is too big, taxes too high, and individuals should be self-reliant." },
      { heading: "Tensions in American Values", body: "Values often conflict: liberty vs. equality (free markets vs. redistribution); individualism vs. community (gun rights vs. public safety); democracy vs. rule of law (majority rule vs. minority rights)." },
    ],
    keyTerms: ["Political culture", "Liberty", "Equality of opportunity", "Individualism", "Rule of law", "Popular sovereignty", "Civic virtue"],
    foundDocs: ["The Declaration of Independence"],
    scotusCases: [],
    apTip: "American political culture questions often appear as the first part of an AP FRQ asking students to describe or compare American values. Know the core values and be ready to explain tensions between them.",
  },
  "4.2 Political Socialization": {
    unit: 4, title: "Political Socialization",
    essentialQ: "How do people develop their political beliefs and party identification?",
    overview: "Political socialization is the process by which individuals acquire political beliefs, values, and party identification. It begins in childhood and continues throughout life. The most influential agents are family, school, peer groups, media, and major life events. Political socialization explains both stability and change in American politics.",
    keyConcepts: [
      { heading: "Family", body: "The most influential agent of political socialization. Children adopt parental party identification more often than not. Political discussions at home and modeling of civic behavior (voting, discussing politics) strongly influence children." },
      { heading: "Schools and Civic Education", body: "Schools transmit democratic values, civic knowledge, and patriotism. Pledge of Allegiance, civics classes, student government — all socialize students into the political system. Quality of civic education varies widely." },
      { heading: "Peer Groups and Social Identity", body: "As children mature, peers become more influential. College tends to liberalize students. Religious communities, racial/ethnic identity, and social class all shape political views." },
      { heading: "Media and Major Events", body: "Media shapes political knowledge and attitudes. Major events (9/11, Great Recession, COVID) can rapidly shift public opinion and political identity. The Vietnam War, Civil Rights Movement, and Watergate reshaped a generation." },
    ],
    keyTerms: ["Political socialization", "Party identification", "Agents of socialization", "Political efficacy", "Civic education", "Opinion leaders", "Generational effect"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the agents of political socialization in order of influence: family (most), then school, peers, media, major events. The AP may ask students to explain why party identification tends to be stable over a lifetime.",
  },
  "4.3 Changes in Ideology": {
    unit: 4, title: "Changes in Ideology and Policy",
    essentialQ: "How do political ideologies evolve over time in response to changing conditions?",
    overview: "Political ideologies are not static. What it means to be liberal or conservative has changed dramatically over American history — and even in recent decades. Party coalitions shift, issues realign voters, and major events force ideological reconsideration.",
    keyConcepts: [
      { heading: "The New Deal Coalition", body: "FDR built a Democratic coalition of Southern whites, labor unions, northern cities, Catholics, and African Americans. This coalition defined American politics from 1932–1968 before fragmenting over civil rights and the culture wars." },
      { heading: "The Conservative Revolution", body: "Reagan's 1980 victory marked the rise of modern conservatism: smaller government, lower taxes, deregulation, strong defense, and social conservatism. The GOP coalition shifted to the South, rural areas, and evangelical Christians." },
      { heading: "Partisan Sorting", body: "Since the 1970s, Americans have 'sorted' into parties that more consistently match their ideology. Democrats became more uniformly liberal; Republicans more uniformly conservative. Moderates in both parties have declined." },
      { heading: "Contemporary Ideological Shifts", body: "Working-class whites have shifted toward Republicans; college-educated whites toward Democrats. Economic populism, nationalism, and social issues have scrambled traditional ideological alignments." },
    ],
    keyTerms: ["Realignment", "Party coalition", "Partisan sorting", "New Deal", "Reagan Revolution", "Culture war", "Ideological polarization"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Understand the major party realignments: the New Deal coalition, the Southern realignment (Civil Rights era), and the Reagan Revolution. These explain why party coalitions look the way they do today.",
  },
  "4.5 Measuring Public Opinion": {
    unit: 4, title: "Measuring and Interpreting Public Opinion",
    essentialQ: "How is public opinion measured, and what are the limitations of polling?",
    overview: "Public opinion is measured primarily through surveys and polls. Scientific polling uses random sampling, carefully worded questions, and statistical analysis to estimate the views of large populations from small samples. Understanding polling methodology is essential to critically evaluating poll results.",
    keyConcepts: [
      { heading: "Random Sampling", body: "Every member of the population must have an equal chance of being selected. A properly drawn random sample of ~1,000 can accurately represent the views of 300 million Americans within ±3 percentage points." },
      { heading: "Margin of Error", body: "The range within which the true population parameter is likely to fall. A ±3% margin means reported results could be 3 points higher or lower. Critical for interpreting close results." },
      { heading: "Question Wording Effects", body: "How a question is worded dramatically affects responses. Leading questions, loaded language, and question order can all bias results. Good polls use neutral, balanced language." },
      { heading: "Push Polls", body: "Not true polls — they use questions designed to plant negative information about a candidate ('Would you vote for X if you knew he...?'). Used to manipulate opinion, not measure it." },
    ],
    keyTerms: ["Random sample", "Margin of error", "Sampling bias", "Push poll", "Benchmark poll", "Tracking poll", "Exit poll", "Public opinion"],
    foundDocs: [],
    scotusCases: [],
    apTip: "AP Quantitative Analysis questions often involve interpreting polling data. Know margin of error, random sampling, and question-wording effects. Be able to identify flaws in poll methodology.",
  },
  "4.6 Limits of Polls": {
    unit: 4, title: "Limits of Polling",
    essentialQ: "Why can public opinion polls be unreliable or misleading?",
    overview: "Even well-conducted polls have significant limitations. Methodological problems, the instability of public opinion, the gap between expressed attitudes and actual behavior, and the influence of polls on politics all limit what polls can tell us.",
    keyConcepts: [
      { heading: "Sampling Problems", body: "Non-random or unrepresentative samples (Literary Digest 1936 — predicted Landon over FDR based on car owners and phone subscribers — wealthier than average). Online polls, opt-in polls, and push polls are all non-random." },
      { heading: "Response Bias", body: "Social desirability effect: people give answers they think the interviewer wants to hear. Acquiescence bias: tendency to agree with statements regardless of content. These biases systematically skew results." },
      { heading: "Opinion Instability", body: "Many citizens have 'non-attitudes' — unstable, barely-formed views on complex policy questions. Polls can create false impression of stable, considered public preferences on issues citizens barely think about." },
      { heading: "Bandwagon and Spiral of Silence", body: "Polls can influence opinion: bandwagon effect (people follow the winner) and spiral of silence (people with minority views hide them). Published polls can become self-fulfilling or self-defeating prophecies." },
    ],
    keyTerms: ["Sampling bias", "Non-attitude", "Social desirability", "Acquiescence bias", "Bandwagon effect", "Spiral of silence", "Literary Digest"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the specific ways polls can be unreliable: sampling bias, question wording, non-attitudes, and social desirability. The AP frequently includes a question about poll limitations in the Quantitative Analysis FRQ.",
  },
  "4.7 Ideologies of Parties": {
    unit: 4, title: "Ideologies of Political Parties",
    essentialQ: "How do the Democratic and Republican parties differ in their core ideological commitments?",
    overview: "The two major American parties have distinct but evolving ideological profiles. Democrats lean liberal: favoring government intervention in the economy, expanded civil rights, environmental regulation, and social programs. Republicans lean conservative: favoring free markets, limited government, traditional values, and a strong national defense.",
    keyConcepts: [
      { heading: "Liberal (Democratic) Positions", body: "Expansive government role in reducing inequality; progressive taxation; expanded social safety net; environmental regulation; expanded civil rights (LGBTQ+, racial equity); gun control; multilateral foreign policy." },
      { heading: "Conservative (Republican) Positions", body: "Limited government, lower taxes, deregulation; free-market solutions to social problems; traditional values; strong military and unilateral action; Second Amendment rights; restrictions on immigration." },
      { heading: "Libertarian Ideology", body: "Favors maximum individual freedom in both economic and social spheres. Small government across the board: low taxes, free markets, and social freedom (drugs, abortion). Draws from both left and right." },
      { heading: "The Ideological Spectrum", body: "Far left → liberal → moderate → conservative → far right. Most Americans cluster near the center but the distribution has become more bimodal (fewer moderates) as polarization has increased." },
    ],
    keyTerms: ["Liberalism", "Conservatism", "Libertarianism", "Socialism", "Progressivism", "Populism", "Ideology", "Bipartisanship", "Polarization"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know where Democrats and Republicans stand on major issue areas: economic policy, social issues, foreign policy, and the role of government. Be able to explain the libertarian position as distinct from both major parties.",
  },
  "4.8 Ideology & Policy Making": {
    unit: 4, title: "Ideology and Policy Making",
    essentialQ: "How does political ideology influence the policymaking process?",
    overview: "Political ideology shapes what problems governments prioritize, what solutions they consider, and what trade-offs they accept. Ideological conflict is a key driver of gridlock, partisan polarization, and policy change in American politics.",
    keyConcepts: [
      { heading: "Ideology and Agenda-Setting", body: "Ideology determines what problems are defined as public problems requiring government action. Conservatives may see unemployment as a natural market outcome; liberals as a policy failure requiring intervention." },
      { heading: "Ideology and Policy Instruments", body: "Liberals tend to favor regulation, direct government programs, and redistribution. Conservatives tend to favor tax incentives, market mechanisms, and block grants to states with fewer conditions." },
      { heading: "Ideological Polarization and Gridlock", body: "As the parties have become more ideologically distinct and partisan, bipartisan compromise has become harder. Divided government, the filibuster, and primary elections that reward ideological purity all contribute to gridlock." },
      { heading: "Think Tanks and Policy Ideas", body: "Ideologically aligned think tanks (Brookings — center-left; Heritage Foundation — conservative; Cato Institute — libertarian) develop and promote policy ideas. They form part of the broader issue network around each policy area." },
    ],
    keyTerms: ["Agenda-setting", "Policy instrument", "Gridlock", "Think tank", "Polarization", "Divided government", "Policy window", "Issue framing"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Understand the link between ideology and preferred policy instruments. The AP may ask students to explain why ideological polarization leads to gridlock — use specific institutional mechanisms (filibuster, divided government).",
  },
  "4.9 Ideology & Economic Policy": {
    unit: 4, title: "Ideology and Economic Policy",
    essentialQ: "How do different ideologies approach fiscal and monetary policy?",
    overview: "Economic policy debates are among the most ideologically charged in American politics. Key disputes concern the proper role of government in the economy, the trade-offs between growth and equality, and the best tools for managing business cycles.",
    keyConcepts: [
      { heading: "Fiscal Policy", body: "Government use of taxing and spending to influence the economy. Congress and the president control fiscal policy. Keynesian: increase spending in recessions (deficit spending). Supply-side: cut taxes to spur investment." },
      { heading: "Monetary Policy", body: "Control of the money supply and interest rates. Managed by the Federal Reserve (independent agency). Raises rates to fight inflation; lowers rates to stimulate growth. Not controlled by elected officials — by design." },
      { heading: "Supply-Side Economics", body: "Associated with Reagan and the Republican Party. Tax cuts (especially for upper incomes and businesses) stimulate investment, economic growth, and ultimately increase tax revenue ('Laffer Curve'). Critics say it mainly benefits the wealthy." },
      { heading: "The Federal Budget", body: "Congress passes annual appropriations bills. Mandatory spending (Social Security, Medicare, Medicaid) is ~65% of the budget — grows automatically. Discretionary spending (defense, education) is subject to annual appropriations." },
    ],
    keyTerms: ["Fiscal policy", "Monetary policy", "Keynesian economics", "Supply-side economics", "Federal Reserve", "Budget deficit", "National debt", "Appropriations", "Entitlements"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the difference between fiscal policy (Congress + president) and monetary policy (Federal Reserve). Know the difference between Keynesian and supply-side approaches. The Federal Reserve's independence is a key institutional feature.",
  },
  "4.10 Social Policy": {
    unit: 4, title: "Ideology and Social Policy",
    essentialQ: "How does ideology shape debates over social policy in the United States?",
    overview: "Social policy covers programs that provide benefits to individuals: Social Security, Medicare, Medicaid, welfare, education, and healthcare. These programs are the most expensive part of the federal budget and the most ideologically contested — reflecting fundamental disagreements about the role of government in ensuring well-being.",
    keyConcepts: [
      { heading: "Social Insurance Programs", body: "Programs that most workers pay into and receive benefits from (Social Security, Medicare). Broad public support because they benefit the middle class. Called 'entitlements' because eligibility is based on prior contributions." },
      { heading: "Means-Tested Programs", body: "Programs for which eligibility is based on income or need (Medicaid, SNAP, TANF). More controversial politically because they are seen as benefiting the poor at others' expense. Subject to more ideological conflict." },
      { heading: "Ideological Divide on Social Policy", body: "Liberals: government has a responsibility to provide a safety net, reduce poverty, and ensure access to healthcare and education. Conservatives: individual responsibility, market solutions, and targeted relief for the truly needy." },
      { heading: "The ACA (Obamacare)", body: "2010 Affordable Care Act — expanded Medicaid, created insurance exchanges, mandated coverage. Deeply polarizing: Democrats see it as expanding access; Republicans as government overreach. Survived multiple repeal attempts and SCOTUS challenges." },
    ],
    keyTerms: ["Social Security", "Medicare", "Medicaid", "SNAP", "TANF", "Entitlement", "Means-tested", "Safety net", "ACA"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Distinguish between social insurance (Social Security, Medicare — contributory, universal) and means-tested programs (Medicaid, SNAP — needs-based). Know why mandatory spending (entitlements) is hard to cut.",
  },

  // ── UNIT 5 ──────────────────────────────────────────────────
  "5.1 Voting Rights": {
    unit: 5, title: "Voting Rights and Models of Voting",
    essentialQ: "How have voting rights evolved, and what factors affect who votes?",
    overview: "The right to vote has been progressively expanded over American history through constitutional amendments (15th, 19th, 24th, 26th), legislation (Voting Rights Act of 1965), and court decisions. Despite this expansion, voter turnout in the U.S. remains lower than in most other democracies.",
    keyConcepts: [
      { heading: "Expansion of Suffrage", body: "1870: 15th Amendment (race). 1920: 19th Amendment (sex). 1961: 23rd Amendment (D.C. gets electoral votes). 1964: 24th Amendment (poll taxes abolished). 1971: 26th Amendment (age 18). VRA 1965: banned literacy tests." },
      { heading: "Barriers to Voting", body: "Historical: literacy tests, poll taxes, grandfather clauses, white primaries, violence. Contemporary: voter ID laws, limited polling places, felon disenfranchisement, registration requirements." },
      { heading: "Electoral College", body: "Indirect election of the president: 538 electors allocated to states by congressional representation + D.C. Winner-take-all in 48 states. 270 needed to win. Can produce popular/electoral vote split (2000, 2016)." },
      { heading: "Motor Voter Act (1993)", body: "National Voter Registration Act requires states to offer voter registration when obtaining a driver's license, by mail, and at public assistance offices. Significantly expanded voter rolls." },
    ],
    keyTerms: ["Suffrage", "15th Amendment", "19th Amendment", "24th Amendment", "26th Amendment", "Electoral College", "Motor Voter Act", "Voter ID", "Disenfranchisement"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the constitutional amendments that expanded voting rights and what each addressed. Know how the Electoral College works and why it can diverge from the popular vote.",
  },
  "5.2 Voter Turnout": {
    unit: 5, title: "Voter Turnout",
    essentialQ: "What factors explain variation in voter turnout, and how does the U.S. compare internationally?",
    overview: "American voter turnout is consistently lower than in other comparable democracies. Turnout in presidential elections is typically 55-65% of eligible voters; midterms attract 35-50%. Turnout varies significantly by age, income, education, race, and state registration laws.",
    keyConcepts: [
      { heading: "Predictors of Turnout", body: "Higher income, education, and age all strongly predict higher turnout. Married, churchgoing citizens vote more. Strong party identification increases turnout. Efficacy (belief that your vote matters) is critical." },
      { heading: "Registration Requirements", body: "Unlike most democracies, Americans must actively register to vote. Registration closes (in most states) before Election Day. This creates a barrier that suppresses turnout — same-day registration increases participation." },
      { heading: "The Voting Gap", body: "Youth (18-29) vote at much lower rates than seniors (60+). Income gap: top income quintile votes at ~2x the rate of the bottom quintile. These gaps mean some voices are systematically underrepresented." },
      { heading: "International Comparison", body: "U.S. turnout (55-65%) is lower than Australia (90%), Sweden (85%), Germany (76%). Reasons: lack of automatic registration, two-party system limiting competition, cultural factors, Election Day not a holiday." },
    ],
    keyTerms: ["Voter turnout", "Political efficacy", "Registration", "Same-day registration", "Voter suppression", "Rational ignorance", "Midterm elections"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the demographic predictors of turnout (age, income, education). Be able to explain the rational ignorance argument: when the cost of voting (time, information) exceeds the perceived benefit, rational citizens don't vote.",
  },
  "5.3 Political Parties": {
    unit: 5, title: "Political Parties",
    essentialQ: "What functions do political parties serve in American democracy?",
    overview: "Political parties are organizations that nominate candidates, mobilize voters, and organize government. They serve as information shortcuts for voters, coordinate legislative activity in Congress, and link citizens to their government. American parties are organized at the national, state, and local levels.",
    keyConcepts: [
      { heading: "Functions of Parties", body: "Nominate candidates, mobilize and educate voters, organize government (majority party sets the agenda in Congress), coordinate political activity, provide voting cues to citizens." },
      { heading: "Party Organization", body: "National committees (DNC, RNC): set party platform, manage national conventions, raise money. State parties: manage primaries, elect party officials. Local parties: voter registration drives, GOTV." },
      { heading: "Responsible Party Government", body: "Ideal model: parties offer clear ideological alternatives, voters choose based on platforms, winning party implements its program, and voters hold the party accountable at next election. American parties historically fell short of this ideal." },
      { heading: "Party Platforms", body: "Platforms state the party's policy positions. They represent the preferences of the party's most activist members (often more extreme than average voter). Candidates may deviate from the platform once elected." },
    ],
    keyTerms: ["Political party", "Party platform", "National committee", "DNC", "RNC", "Party identification", "Responsible party government", "Party loyalty"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the three functions of parties: in the electorate (voter cues, mobilization), in government (organizing Congress, setting agenda), and as organization (nominating candidates, raising money).",
  },
  "5.4 How Parties Change": {
    unit: 5, title: "How Parties Change",
    essentialQ: "What are party realignments, and what causes them?",
    overview: "Party coalitions change over time through processes of realignment (sudden, sharp shifts in party coalitions), dealignment (weakening of party ties overall), and gradual secular realignment. Understanding these processes explains why the modern Republican and Democratic parties look so different from their 19th-century predecessors.",
    keyConcepts: [
      { heading: "Critical/Realigning Elections", body: "Elections that produce lasting, durable shifts in party coalitions. Classic examples: 1860 (Lincoln and the rise of the Republican Party), 1932 (FDR and the New Deal coalition), 1980 (Reagan and the conservative realignment)." },
      { heading: "The Southern Realignment", body: "Solidly Democratic South shifted to solidly Republican beginning in 1964 (Goldwater), accelerating through 1968-1980. Civil Rights legislation drove white Southern conservatives into the Republican Party." },
      { heading: "Dealignment", body: "Decline in overall party loyalty and identification. Rise of independent voters (now 30-40% of electorate). Ticket-splitting. Voters increasingly identify as 'lean Republican' or 'lean Democrat' rather than strong partisans." },
      { heading: "Primary Elections and Party Change", body: "As primaries have replaced smoke-filled rooms for candidate selection, the parties' most ideological voters have gained power. This has driven both parties away from the center — a key cause of polarization." },
    ],
    keyTerms: ["Realignment", "Dealignment", "Critical election", "Party coalition", "Secular realignment", "Southern strategy", "Party sorting", "Ticket-splitting"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the major realignments and what caused them. The Southern realignment is especially important — it explains the modern partisan map. Dealignment explains the rise of independents.",
  },
  "5.5 Third Parties": {
    unit: 5, title: "Third Parties",
    essentialQ: "Why do third parties struggle in the American electoral system?",
    overview: "The United States has maintained a two-party system for most of its history. Third parties face severe structural barriers: winner-take-all elections, ballot access laws, exclusion from debates, and lack of campaign financing. Yet third parties have influenced American politics by introducing new issues and challenging major parties.",
    keyConcepts: [
      { heading: "Duverger's Law", body: "Winner-take-all (plurality) electoral systems tend toward two parties. Third parties rarely win seats even with significant vote shares — voters abandon them strategically ('wasted vote' problem)." },
      { heading: "Structural Barriers", body: "Ballot access requirements (thousands of signatures), campaign finance rules (no public financing for parties below 5%), exclusion from presidential debates (15% threshold), and the Electoral College all disadvantage third parties." },
      { heading: "Third Party Impact", body: "Third parties can act as 'spoilers' (Nader 2000 — arguably cost Gore Florida). They introduce new issues that major parties later adopt (Progressives: women's suffrage, direct election of senators). They reflect voter dissatisfaction." },
      { heading: "Historical Examples", body: "Bull Moose Party (TR, 1912), Dixiecrats (Thurmond, 1948), Reform Party (Perot, 1992 — 19% of popular vote, 0 electoral votes), Green Party (Nader, 2000), Libertarian Party (Johnson, 2016)." },
    ],
    keyTerms: ["Third party", "Duverger's Law", "Winner-take-all", "Plurality", "Spoiler effect", "Proportional representation", "Ballot access", "Electoral College"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know Duverger's Law and the structural reasons why third parties fail in the U.S. Be able to explain why a third party with 19% of the popular vote (Perot, 1992) can win zero electoral votes.",
  },
  "5.6 Interest Groups": {
    unit: 5, title: "Interest Groups",
    essentialQ: "How do interest groups influence the policymaking process?",
    overview: "Interest groups are organized groups of people who share a common concern and seek to influence public policy without directly running candidates for office. They are a key feature of pluralist democracy. Interest groups use lobbying, campaign contributions, litigation, and grassroots mobilization to advance their agendas.",
    keyConcepts: [
      { heading: "Types of Interest Groups", body: "Economic groups (business associations, labor unions, trade associations); single-issue groups (NRA, NARAL); public interest groups (Sierra Club, ACLU); government lobbies (cities, states lobbying Congress)." },
      { heading: "Lobbying", body: "Direct contact with government officials to influence policy. Lobbyists provide information, draft legislation, testify at hearings, and build relationships. The 'revolving door' — former officials become lobbyists — is a major concern." },
      { heading: "Campaign Contributions", body: "PACs can donate up to $5,000 per candidate per election. Super PACs can spend unlimited amounts independently. 501(c)(4) 'social welfare' organizations can spend on politics without disclosing donors ('dark money')." },
      { heading: "Grassroots Mobilization", body: "Interest groups mobilize their members to contact elected officials, vote, and participate in rallies. Effective groups can flood congressional offices with calls and emails. 'Astroturfing' is fake grassroots activity." },
    ],
    keyTerms: ["Interest group", "Lobbying", "PAC", "Super PAC", "Revolving door", "Grassroots", "Astroturfing", "501(c)(4)", "Dark money", "Free rider problem"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the difference between lobbying (direct contact), PAC contributions (money to campaigns), and grassroots mobilization (activating members). The free rider problem explains why interest groups form — and why some don't.",
  },
  "5.7 Groups Influencing Policy": {
    unit: 5, title: "How Groups Influence Policy",
    essentialQ: "Which types of interest groups are most effective, and how do they achieve their policy goals?",
    overview: "Interest group effectiveness depends on resources (money, membership, expertise), access to decision-makers, and strategic choices about which tactics to use. Business groups tend to have advantages in resources; citizen groups in numbers. The theory of collective action explains why some interests organize better than others.",
    keyConcepts: [
      { heading: "Collective Action Problem", body: "Why would rational individuals join an interest group if they benefit from the group's successes whether or not they join? Most people free-ride. Groups overcome this with selective incentives (member benefits), social pressure, or coercion." },
      { heading: "Organizational Resources", body: "Money (campaign contributions, lobbying staff), membership (voters, volunteers), expertise and information (what regulators and legislators need), and access (connections to decision-makers) determine group effectiveness." },
      { heading: "Iron Triangle Revisited", body: "Subsystem of congressional committee + agency + interest group shapes policy in specialized areas. All three benefit from the relationship: stability, expertise, and favorable policy. Outsiders struggle to break in." },
      { heading: "Litigation Strategy", body: "Groups like the ACLU, NAACP Legal Defense Fund, and Pacific Legal Foundation bring carefully chosen test cases to establish legal precedents. Judicial strategy can produce policy change when legislative channels are blocked." },
    ],
    keyTerms: ["Collective action problem", "Free rider", "Selective incentive", "Organizational resources", "Iron triangle", "Litigation strategy", "Access", "Insider vs. outsider tactics"],
    foundDocs: [],
    scotusCases: [],
    apTip: "The collective action problem and free rider problem are key AP concepts explaining interest group formation. Know the iron triangle and be able to give a specific example. Litigation strategy shows how groups use courts when Congress fails them.",
  },
  "5.8 Electing the President": {
    unit: 5, title: "Presidential Elections",
    essentialQ: "How does the presidential election process work, and how has it evolved?",
    overview: "Presidential elections involve a two-stage process: winning the party nomination (through primaries and caucuses leading to a national convention) and then winning the general election (through the Electoral College). The modern system looks very different from what the Founders designed.",
    keyConcepts: [
      { heading: "The Nomination Process", body: "Primary elections (voters choose delegates) and caucuses (party meetings). Delegates are bound (or loosely bound) to vote for the winner at the national convention. Iowa caucuses and New Hampshire primary historically first." },
      { heading: "National Conventions", body: "Once the site of real deliberation; now largely staged media events ratifying the primary winner. Conventions formally nominate president and VP, adopt the party platform, and energize party supporters." },
      { heading: "The Electoral College", body: "538 total electors. Each state gets electors = senators (2) + House members. Winner-take-all in 48 states. 270 needed to win. If no majority: House chooses president (state delegation = 1 vote). Faithless electors rare but legal." },
      { heading: "Swing States", body: "States that could go to either party. Campaign resources (time, money) concentrated here. Safe states (reliably red or blue) are largely ignored. Critics argue this distorts presidential campaigns and governance." },
    ],
    keyTerms: ["Primary election", "Caucus", "National convention", "Electoral College", "Faithless elector", "Swing state", "Winner-take-all", "Pledged delegates", "Superdelegate"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know how the Electoral College works in detail — 538 electors, winner-take-all, 270 to win, House contingency. Know the nomination process from primary/caucus through convention. Swing states explain campaign strategy.",
  },
  "5.9 Congressional Elections": {
    unit: 5, title: "Congressional Elections",
    essentialQ: "What factors determine the outcomes of congressional elections?",
    overview: "Congressional elections are shaped by incumbency advantage, redistricting, national political environment, candidate quality, and money. The House is typically less competitive than the Senate due to gerrymandering and incumbency. The president's party usually loses seats in midterm elections.",
    keyConcepts: [
      { heading: "Incumbency Advantage", body: "House incumbents win 90%+ of the time they seek reelection. Advantages: name recognition, franking privilege, campaign finance advantages, ability to deliver for the district, 'home style' visits." },
      { heading: "The Midterm Pattern", body: "The president's party typically loses House and Senate seats in midterm elections. Explanations: low turnout advantages the opposition, surge and decline (coattails from presidential year fade), and voters use midterms to express disapproval of the president." },
      { heading: "Money in Congressional Elections", body: "Challengers must raise enough to become visible ($500,000+ minimum for a competitive House race). Incumbents almost always outraise challengers. PAC money flows heavily to incumbents — safe investments." },
      { heading: "Redistricting and Safe Seats", body: "Congressional districts are redrawn every 10 years after the census. Partisan gerrymandering creates safe seats, reducing competition and encouraging ideological extremism as members primarily face primary threats from their base." },
    ],
    keyTerms: ["Incumbent", "Midterm election", "Coattail effect", "Safe seat", "Marginal seat", "Redistricting", "Gerrymandering", "Campaign finance", "GOTV"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Incumbency advantage is a foundational concept — know WHY incumbents win so often. The midterm pattern is reliably tested. Be able to explain how redistricting affects congressional competition and polarization.",
  },
  "5.10 Modern Campaigns": {
    unit: 5, title: "Modern Political Campaigns",
    essentialQ: "How have modern campaigns changed, and what role does technology play?",
    overview: "Modern campaigns are expensive, media-driven, professionalized operations. The candidate-centered era replaced party-dominated campaigns beginning in the 1960s-70s. Television, then cable, then social media have successively transformed how candidates communicate with voters.",
    keyConcepts: [
      { heading: "Candidate-Centered Campaigns", body: "Candidates build their own campaign organizations independent of parties. They raise their own money, hire their own consultants, and develop their own messages. Parties provide support but don't control campaigns." },
      { heading: "The Permanent Campaign", body: "Modern presidents govern in permanent campaign mode — polling, messaging, and political calculation never stop. The line between governing and campaigning has blurred completely." },
      { heading: "Digital Campaigning", body: "Social media, email, and targeted digital advertising have transformed voter contact. Cambridge Analytica controversy (2016): psychographic targeting using Facebook data. Viral content and memes replace traditional media as primary information channel." },
      { heading: "Negative Advertising", body: "Attack ads are more memorable and effective than positive ads. They depress turnout (especially among the opponent's supporters). 'Daisy ad' (1964), 'Willie Horton' (1988), and Swift Boat Veterans (2004) are famous examples." },
    ],
    keyTerms: ["Candidate-centered campaign", "Permanent campaign", "Negative advertising", "Digital campaigning", "Microtargeting", "Ground game", "Opposition research", "Political consultant"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the shift from party-centered to candidate-centered campaigns and why it happened. Digital campaigning and microtargeting are contemporary developments the AP increasingly tests.",
  },
  "5.11 Campaign Finance": {
    unit: 5, title: "Campaign Finance",
    essentialQ: "How is political campaigning financed, and how have court decisions shaped campaign finance law?",
    overview: "Campaign finance is one of the most contested areas of American politics and law. The Supreme Court has treated political spending as protected speech, striking down many regulations. Citizens United (2010) opened the door to unlimited outside spending and transformed the campaign finance landscape.",
    keyConcepts: [
      { heading: "FECA and the FEC", body: "Federal Election Campaign Act (1971, amended 1974): established contribution limits, disclosure requirements, and public financing for presidential campaigns. Created the Federal Election Commission to enforce the law." },
      { heading: "Buckley v. Valeo (1976)", body: "Supreme Court ruled that campaign spending is a form of protected speech. Contribution limits OK (prevent corruption); independent expenditure limits unconstitutional. This ruling set the stage for Citizens United." },
      { heading: "Citizens United v. FEC (2010)", body: "Corporations and unions have the same First Amendment rights as individuals. Government cannot restrict their independent political spending. Led directly to Super PACs, which can raise and spend unlimited funds." },
      { heading: "Dark Money", body: "Politically active 501(c)(4) organizations can spend unlimited amounts on elections without disclosing donors. Allows unlimited outside spending with no accountability. Grown dramatically since Citizens United." },
    ],
    keyTerms: ["FEC", "FECA", "Hard money", "Soft money", "PAC", "Super PAC", "Dark money", "Citizens United", "Buckley v. Valeo", "Campaign finance reform", "McCutcheon v. FEC"],
    foundDocs: [],
    scotusCases: ["Citizens United v. FEC"],
    apTip: "Citizens United is a required case. Know the facts, ruling (corporate spending = protected speech), and impact (Super PACs). Be able to explain the dark money problem and why reformers find it difficult to fix.",
  },
  "5.12 The Media": {
    unit: 5, title: "The Media",
    essentialQ: "How has the media evolved, and what roles does it play in American politics?",
    overview: "The mass media — newspapers, television, radio, and now digital media — play a central role in American democracy. They inform citizens, set the political agenda, scrutinize government (watchdog function), and frame political issues. The media landscape has been transformed by cable news, the internet, and social media.",
    keyConcepts: [
      { heading: "Agenda-Setting", body: "Media doesn't tell us what to think — it tells us what to think about. Issues that receive prominent coverage become salient to the public and to policymakers. The media's power to set the agenda is substantial." },
      { heading: "Framing", body: "How the media frames an issue shapes how audiences interpret it. Crime story framed as individual failure vs. systemic problem produces different policy preferences. Framing is a subtle but powerful influence." },
      { heading: "Priming", body: "Media coverage of certain issues makes those issues more prominent in how voters evaluate politicians. If the economy gets extensive coverage, voters evaluate the president primarily on economic performance." },
      { heading: "Media Fragmentation", body: "Cable news, social media, and online news have fragmented the media landscape. Partisan outlets (Fox News, MSNBC) serve ideologically homogeneous audiences. Filter bubbles and echo chambers reinforce existing beliefs." },
    ],
    keyTerms: ["Agenda-setting", "Framing", "Priming", "Watchdog function", "Filter bubble", "Echo chamber", "Media bias", "Horse race journalism", "Social media"],
    foundDocs: [],
    scotusCases: [],
    apTip: "Know the three key media effects: agenda-setting (what to think about), framing (how to think about it), and priming (which issues are used to evaluate politicians). These are classic AP FRQ topics.",
  },
  "5.13 Media & Democratic Debate": {
    unit: 5, title: "Media and Democratic Debate",
    essentialQ: "How does the media's role affect the quality of democratic deliberation?",
    overview: "A free press is essential to democracy — it informs citizens, exposes corruption, and facilitates public debate. But critics argue that commercial pressures, partisan bias, and the structure of social media undermine the media's democratic functions, contributing to misinformation, polarization, and civic disengagement.",
    keyConcepts: [
      { heading: "The Watchdog Function", body: "Investigative journalism exposes government corruption, abuse of power, and policy failures. Watergate, Pentagon Papers, and Abu Ghraib were broken by journalists. First Amendment protections are essential to this function." },
      { heading: "Horse Race Coverage", body: "Media focuses on who's winning rather than policy substance. Poll results, campaign strategy, and controversy get more coverage than issue positions. This may contribute to voter cynicism and low information." },
      { heading: "Misinformation and Social Media", body: "Social media platforms allow misinformation to spread rapidly. Algorithmic amplification of outrage-inducing content, foreign disinformation campaigns (Russia 2016), and declining trust in mainstream media create a chaotic information environment." },
      { heading: "Media Consolidation", body: "Ownership of major media outlets has consolidated into a small number of large corporations. Critics worry this limits diversity of viewpoints; supporters argue the internet provides unlimited alternative voices." },
    ],
    keyTerms: ["Watchdog journalism", "Horse race coverage", "Misinformation", "Disinformation", "Media consolidation", "Social media algorithm", "Media trust", "Civic journalism"],
    foundDocs: [],
    scotusCases: [],
    apTip: "The media's democratic functions (informing, scrutinizing, facilitating debate) and dysfunctions (misinformation, polarization, horse race) are both important AP topics. Know the difference between disinformation (intentionally false) and misinformation (unintentionally false).",
  },
};

// ── TOPIC STUDY COMPONENT ─────────────────────────────────────
const TopicStudyScreen = ({ topicKey, onNavigatePractice, onBack, dark = false }) => {
  const topic = TOPIC_KEY_MAP[topicKey] || TOPIC_CONTENT[topicKey];
  const [expandedConcept, setExpandedConcept] = React.useState(null);
  const d = dark;
  const card  = d ? '#111B2B' : '#fff';
  const bord  = d ? '#1E2D42' : '#EEF0F4';
  const textP = d ? '#E8ECF0' : '#1A2030';
  const textS = d ? '#C8D4E0' : '#2B3748';
  const textSm= d ? '#A0AEC0' : '#404E60';
  const mainBg= d ? '#0D1421' : '#F8F9FB';

  if (!topic) {
    return (
      <div style={{ padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.2rem', color: '#9BA5B2', marginBottom: 12 }}>No content yet for this topic</div>
        <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: '#BFC6D0' }}>Content for this topic is coming soon.</p>
      </div>
    );
  }

  const unitColors = { 1:'#1B2A4A', 2:'#2D5D8B', 3:'#B22234', 4:'#C9A84C', 5:'#2A7A4B' };
  const accent = unitColors[topic.unit] || '#1B2A4A';

  return (
    <div style={{ padding: '28px 32px', overflowY: 'auto', flex: 1, background: mainBg }}>
      {/* Back button */}
      <button onClick={onBack} style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, fontWeight: 600, color: '#9BA5B2', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 5, padding: 0 }}>
        ← Back to {topicKey}
      </button>

      {/* Header */}
      <div style={{ background: accent, borderRadius: 10, padding: '24px 28px', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
          Unit {topic.unit} · {topicKey}
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.6rem', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 12 }}>{topic.title}</h2>
        <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, borderLeft: '3px solid rgba(255,255,255,0.3)', paddingLeft: 14, maxWidth: 560 }}>
          {topic.essentialQ}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>
        {/* Left column */}
        <div>
          {/* Overview */}
          <div style={{ background: card, borderRadius: 9, border: `1px solid ${bord}`, padding: '18px 20px', marginBottom: 16 }}>
            <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 10 }}>Overview</div>
            <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 14, color: textS, lineHeight: 1.7 }}>{topic.overview}</p>
          </div>

          {/* Key Concepts */}
          <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 10 }}>Key Concepts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            {topic.keyConcepts.map((concept, i) => {
              const isOpen = expandedConcept === i;
              return (
                <div key={i} onClick={() => setExpandedConcept(isOpen ? null : i)}
                  style={{ background: card, borderRadius: 8, border: `1.5px solid ${isOpen ? accent : bord}`, padding: '13px 16px', cursor: 'pointer', transition: 'all 150ms' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 700, color: isOpen ? accent : textP }}>{concept.heading}</div>
                    <span style={{ fontSize: 16, color: '#BFC6D0', lineHeight: 1, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>▾</span>
                  </div>
                  {isOpen && (
                    <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, color: textSm, lineHeight: 1.65, marginTop: 10, paddingTop: 10, borderTop: `1px solid ${bord}` }}>
                      {concept.body}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* AP Exam Tip */}
          <div style={{ background: d ? 'rgba(201,168,76,0.1)' : '#EBF2F9', borderRadius: 9, padding: '14px 18px', borderLeft: `4px solid ${d ? '#C9A84C' : '#2D5D8B'}` }}>
            <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: d ? '#C9A84C' : '#2D5D8B', marginBottom: 6 }}>AP Exam Tip</div>
            <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: d ? '#C8D4E0' : '#1B2A4A', lineHeight: 1.6 }}>{topic.apTip}</p>
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          {/* Key Terms */}
          <div style={{ background: card, borderRadius: 9, border: `1px solid ${bord}`, padding: '16px 18px', marginBottom: 12 }}>
            <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 10 }}>Key Terms</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {topic.keyTerms.map(term => (
                <span key={term} style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11.5, fontWeight: 500, padding: '3px 10px', borderRadius: 9999, background: d ? 'rgba(201,168,76,0.12)' : '#F5F0E8', color: textS, border: `1px solid ${accent}33` }}>{term}</span>
              ))}
            </div>
          </div>

          {/* Foundational Docs */}
          {topic.foundDocs.length > 0 && (
            <div style={{ background: card, borderRadius: 9, border: `1px solid ${bord}`, padding: '16px 18px', marginBottom: 12 }}>
              <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 10 }}>Required Documents</div>
              {topic.foundDocs.map(doc => (
                <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: `1px solid ${bord}` }}>
                  <span style={{ color: '#C9A84C', fontSize: 12 }}>✦</span>
                  <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12.5, color: textS, fontWeight: 500 }}>{doc}</span>
                </div>
              ))}
            </div>
          )}

          {/* SCOTUS Cases */}
          {topic.scotusCases.length > 0 && (
            <div style={{ background: card, borderRadius: 9, border: `1px solid ${bord}`, padding: '16px 18px', marginBottom: 12 }}>
              <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 10 }}>Required SCOTUS Cases</div>
              {topic.scotusCases.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: `1px solid ${bord}` }}>
                  <span style={{ color: '#B22234', fontSize: 12 }}>⚖</span>
                  <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12.5, color: textS, fontStyle: 'italic' }}>{c}</span>
                </div>
              ))}
            </div>
          )}

          {/* Practice button */}
          <button onClick={() => onNavigatePractice(topicKey)}
            style={{ width: '100%', fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 700, padding: '11px', borderRadius: 8, border: 'none', background: accent, color: '#fff', cursor: 'pointer' }}>
            Practice Questions →
          </button>
        </div>
      </div>
    </div>
  );
};

// Map from sidebar label to content key (handles edge cases)
const TOPIC_KEY_MAP = {};
Object.keys(TOPIC_CONTENT).forEach(k => { TOPIC_KEY_MAP[k] = TOPIC_CONTENT[k]; });

Object.assign(window, { UnitOverview, TopicStudyScreen, TOPIC_CONTENT, TOPIC_KEY_MAP });
