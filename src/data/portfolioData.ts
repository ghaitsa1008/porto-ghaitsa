export interface Slide {
  id: number;
  kicker: string;
  kickerId: string;
  title: string;
  titleId: string;
  subtitle: string;
  subtitleId: string;
  description: string;
  descriptionId: string;
  ctaText: string;
  ctaTextId: string;
  secondaryCtaText: string;
  secondaryCtaTextId: string;
}

export interface Service {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  iconName: string;
  color: string;
  tags: string[];
  details: string;
  detailsId: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'design' | 'frontend' | 'tools' | 'architecture';
  color: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  roleId: string;
  company: string;
  description: string;
  descriptionId: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'branding' | 'uiux';
  categoryLabel: string;
  image: string;
  year: string;
  client: string;
  description: string;
  descriptionId: string;
  role: string;
  roleId: string;
  deliverables: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  titleId: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  summaryId: string;
  content: string[];
  contentId: string[];
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    kicker: "CREATIVE TECHNOLOGIST & DESIGNER",
    kickerId: "KREATOR TEKNOLOGI & DESAINER",
    title: "I am a Designer",
    titleId: "Saya seorang Desainer",
    subtitle: "Crafting digital experiences with purpose, elegance, and fluid motion.",
    subtitleId: "Merancang pengalaman digital dengan estetika elegan dan transisi fluida.",
    description: "Specializing in minimal UI/UX, expressive digital brands, and high-performance interactive web applications.",
    descriptionId: "Spesialisasi dalam UI/UX minimalis, identitas brand digital, dan web app berkinerja tinggi.",
    ctaText: "VIEW PORTFOLIO",
    ctaTextId: "LIHAT PORTOFOLIO",
    secondaryCtaText: "DOWNLOAD CV",
    secondaryCtaTextId: "UNDUH CV"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design Systems',
    titleId: 'Desain UI/UX & Sistem',
    description: 'Bespoke design systems, responsive wireframes, design tokens, and tested user journey flows.',
    descriptionId: 'Sistem desain terkurasi, wireframe responsif, token desain, dan alur pengalaman pengguna teruji.',
    iconName: 'Layout',
    color: '#2563eb',
    tags: ['Figma', 'Atomic Design', 'Usability Testing'],
    details: 'End-to-end user research, information architecture, multi-platform component libraries, and interactive high-fidelity prototypes validated with real users.',
    detailsId: 'Riset pengguna mendalam, arsitektur informasi, pustaka komponen multi-platform, dan purwarupa interaktif presisi tinggi.'
  },
  {
    id: 'webdev',
    title: 'Modern Web Engineering',
    titleId: 'Rekayasa Web Modern',
    description: 'Clean, accessible, high-performance web applications built with React, TypeScript, and modern standards.',
    descriptionId: 'Aplikasi web bersih, aksesibel, dan berkecepatan tinggi dibangun dengan React, TypeScript, dan standar modern.',
    iconName: 'Code2',
    color: '#059669',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS'],
    details: 'Ultra-fast load times, SEO-optimized semantic markup, full WCAG 2.1 accessibility compliance, and robust API integrations.',
    detailsId: 'Waktu muat instan, markup semantik teroptimasi SEO, kepatuhan aksesibilitas penuh, dan integrasi API yang solid.'
  },
  {
    id: 'motion',
    title: 'Motion & Animation',
    titleId: 'Desain Gerak & Animasi',
    description: 'Cinematic micro-interactions, anime page transitions, and silky choreographed kinetic typography.',
    descriptionId: 'Mikro-interaksi sinematik, transisi halaman animasi, dan kinetika tipografi yang dinamis.',
    iconName: 'Sparkles',
    color: '#d97706',
    tags: ['Motion / Framer', 'CSS3 Shaders', 'SVG Physics'],
    details: 'Physics-based animation curves, scroll-linked interactions, layout transitions, and high-performance compositor-only rendering.',
    detailsId: 'Kurva fisika animasi mulus, interaksi berbasis scroll, transisi layout elastis, dan performa 60fps tanpa lag.'
  },
  {
    id: 'branding',
    title: 'Editorial & Brand Identity',
    titleId: 'Identitas Brand & Editorial',
    description: 'Distinctive typography curation, editorial art direction, packaging, and digital brand guidelines.',
    descriptionId: 'Kurasi tipografi berkarakter, arahan seni editorial, packaging, dan panduan identitas brand digital.',
    iconName: 'Palette',
    color: '#dc2626',
    tags: ['Brand Identity', 'Print & Digital', 'Art Direction'],
    details: 'Crafting unforgettable identities from logo marks to digital visual guidelines that convey authority and timeless taste.',
    detailsId: 'Menciptakan identitas visual yang khas mulai dari logo mark hingga guideline digital yang berwibawa dan berkelas.'
  },
  {
    id: 'mobile',
    title: 'Mobile App Interfaces',
    titleId: 'Antarmuka Aplikasi Mobile',
    description: 'Intuitive iOS & Android app ergonomics, haptic feedback design, and native touch patterns.',
    descriptionId: 'Ergonomi aplikasi iOS & Android intuitif, desain haptic feedback, dan pola sentuhan native responsif.',
    iconName: 'Smartphone',
    color: '#7c3aed',
    tags: ['iOS Guidelines', 'Material You', 'Cross-Platform'],
    details: 'Thumb-friendly one-handed navigation, gesture transitions, offline state resilience, and unified design token architectures.',
    detailsId: 'Navigasi ramah satu tangan, transisi gestur halus, ketahanan status offline, dan arsitektur token desain terpadu.'
  },
  {
    id: 'consulting',
    title: 'Strategy & Architecture',
    titleId: 'Strategi & Konsultasi',
    description: 'Technical audits, frontend modernization roadmap, performance optimization, and creative direction.',
    descriptionId: 'Audit teknis, peta jalan modernisasi frontend, optimasi performa web, dan arahan kreatif produk.',
    iconName: 'Compass',
    color: '#0891b2',
    tags: ['Performance Audit', 'Tech Strategy', 'Design Ops'],
    details: 'Strategic consulting for startups and enterprises seeking to modernize their legacy UI tech stacks and improve conversion rates.',
    detailsId: 'Konsultasi strategis untuk perusahaan dan startup dalam meremajakan sistem UI lama serta melipatgandakan retensi pengguna.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'UI/UX Architecture & Figma', percentage: 95, category: 'design', color: '#2563eb' },
  { name: 'Motion Design & Kinetic Transitions', percentage: 92, category: 'design', color: '#d97706' },
  { name: 'React 19, TypeScript & Next.js', percentage: 94, category: 'frontend', color: '#059669' },
  { name: 'Tailwind CSS & Design Tokens', percentage: 96, category: 'frontend', color: '#0891b2' },
  { name: 'HTML5 Semantic & Canvas 2D', percentage: 98, category: 'frontend', color: '#dc2626' },
  { name: 'Node.js & REST / GraphQL APIs', percentage: 84, category: 'architecture', color: '#7c3aed' },
  { name: 'Performance Optimization & Core Web Vitals', percentage: 90, category: 'architecture', color: '#4f46e5' },
  { name: 'Git Workflow & CI/CD Tooling', percentage: 88, category: 'tools', color: '#475569' }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: 'exp-1',
    year: '2023 - Present',
    role: 'Lead UI/UX Designer & Technologist',
    roleId: 'Lead Desainer UI/UX & Technologist',
    company: 'Atelier Motion Lab',
    description: 'Spearheaded design systems and interactive motion frameworks for high-profile clients across fintech, luxury fashion, and enterprise SaaS.',
    descriptionId: 'Memimpin sistem desain dan framework animasi interaktif untuk klien fintech, industri fashion premium, dan SaaS global.',
    skills: ['Figma', 'React', 'Motion', 'Design Tokens']
  },
  {
    id: 'exp-2',
    year: '2020 - 2023',
    role: 'Senior Product Designer',
    roleId: 'Desainer Produk Senior',
    company: 'Vanguard Digital Studios',
    description: 'Designed core features for multi-million user mobile apps, executed end-to-end usability sprints, and mentored junior frontend engineers.',
    descriptionId: 'Merancang fitur utama aplikasi mobile dengan jutaan pengguna aktif, memimpin sprint kegunaan, dan membimbing tim pengembang.',
    skills: ['Product Strategy', 'UI Systems', 'User Research']
  },
  {
    id: 'exp-3',
    year: '2018 - 2020',
    role: 'Frontend UI Engineer',
    roleId: 'Insinyur Frontend UI',
    company: 'Studio Pixel & Co',
    description: 'Created dynamic, micro-interaction rich marketing landing pages, interactive 3D simulations, and custom component libraries.',
    descriptionId: 'Membangun landing page kaya mikro-interaksi, simulasi interaktif, dan pustaka komponen web kustom.',
    skills: ['JavaScript', 'CSS3 Animations', 'Vue/React']
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 'edu-1',
    year: '2023 - Present',
    role: 'Undergraduate in Computer Science & Informatics',
    roleId: 'S1 Teknik Informatika / Sistem Komputer',
    company: 'Universitas Komputama Cilacap',
    description: 'Pursuing computer science studies with a strong specialization in human-computer interaction, frontend development, and modern motion user interfaces.',
    descriptionId: 'Mahasiswa aktif menempuh studi ilmu komputer dengan fokus pada rekayasa web modern, perancangan sistem UI/UX, dan teknologi interaksi pengguna.',
    skills: ['Web Engineering', 'UI/UX Design', 'Database Systems', 'HCI']
  },
  {
    id: 'edu-2',
    year: '2020 - 2023',
    role: 'Diploma in Information Technology & Multimedia',
    roleId: 'Pendidikan Menengah Kejuruan Rekayasa Komputer & Multimedia',
    company: 'Vocational Institute of Technology',
    description: 'Focused on digital multimedia, software fundamentals, graphic design, and responsive web foundations.',
    descriptionId: 'Fokus pada dasar rekayasa perangkat lunak, multimedia interaktif, desain grafis, dan pengembangan web responsif.',
    skills: ['Web Foundations', 'Graphic Design', 'Algorithms']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'forma',
    title: 'Forma Monograph & Editorial Identity',
    category: 'branding',
    categoryLabel: 'Editorial & Branding',
    image: '/src/assets/images/portfolio_minimal_branding_1792928708477.jpg',
    year: '2026',
    client: 'Forma Publishing House',
    description: 'An architectural monograph and branding suite exploring raw brutalism, concrete textures, and tactile typography for a contemporary art publication.',
    descriptionId: 'Monograf arsitektur dan identitas visual yang mengeksplorasi estetika brutalism, tekstur beton, dan tipografi taktil untuk publikasi seni rupa kontemporer.',
    role: 'Art Director & Brand Designer',
    roleId: 'Direktur Seni & Desainer Brand',
    deliverables: ['Custom Typography', 'Hardcover Editorial Book', 'Stationery System', 'Digital Lookbook'],
    liveUrl: '#',
    featured: true
  },
  {
    id: 'valor',
    title: 'Valor Luxury Wealth & Experiences Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile App & UI',
    image: '/src/assets/images/portfolio_mobile_app_1792928708972.jpg',
    year: '2025',
    client: 'Valor Private Holdings',
    description: 'A dark-mode luxury wealth management app combining portfolio analytics, concierge jet bookings, private dining access, and bespoke biometric security.',
    descriptionId: 'Aplikasi manajemen kekayaan premium mode gelap yang memadukan analitik portofolio, pemesanan jet pribadi, reservasi santapan mewah, dan otentikasi biometrik.',
    role: 'Lead UI/UX Architect',
    roleId: 'Arsitek UI/UX Utama',
    deliverables: ['Mobile Ergonomics', 'High-Frequency Charts', 'Design System', 'Interactive Prototypes'],
    liveUrl: '#',
    featured: true
  },
  {
    id: 'noir-portrait',
    title: 'Winter Monologue - Film & Editorial Direction',
    category: 'uiux',
    categoryLabel: 'Editorial Direction',
    image: '/src/assets/images/hero_ghaitsa_unikom_1792929900332.jpg',
    year: '2025',
    client: 'Nordic Visual Review',
    description: 'High-contrast black-and-white fashion editorial and digital showreel exploring minimal silhouettes, winter textures, and contemplative character storytelling.',
    descriptionId: 'Karya editorial fashion hitam-putih kontras tinggi dan showreel digital yang mengeksplorasi siluet minimalis serta narasi visual puitis.',
    role: 'Creative Director & Photographer',
    roleId: 'Direktur Kreatif & Fotografer',
    deliverables: ['Editorial Stills', 'Kinetic Teaser', 'Digital Exhibition Gallery'],
    liveUrl: '#',
    featured: true
  },
  {
    id: 'colorlib-classic',
    title: 'Ghaitsa Kesyafa Syahlarana Portfolio Experience',
    category: 'web',
    categoryLabel: 'Web Experience',
    image: '/public/assets/aistudio/IMG_1913_70c7a48d.webp',
    year: '2024',
    client: 'Open Source Community',
    description: 'A tribute and modernized rebuild of the iconic Jackson Ford portfolio template, elevating it with smooth React motion transitions, dark mode, and responsive modular architecture.',
    descriptionId: 'Penghormatan dan rekonstruksi modern dari template portofolio klasik Jackson Ford, disempurnakan dengan transisi animasi React yang halus dan sistem modular.',
    role: 'Full-Stack UI Engineer',
    roleId: 'Pengembang UI Full-Stack',
    deliverables: ['React 19 Architecture', 'Motion Animations', 'Tailwind CSS V4', 'Mobile Drawer'],
    liveUrl: '#',
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'micro-animations',
    title: 'The Psychology of Micro-Animations in Modern Web Interfaces',
    titleId: 'Psikologi Mikro-Animasi pada Antarmuka Web Modern',
    date: 'March 14, 2026',
    readTime: '5 min read',
    category: 'Interaction Design',
    summary: 'Why intentional motion eases cognitive friction, communicates state continuity, and elevates utilitarian apps into memorable digital products.',
    summaryId: 'Mengapa animasi terarah meredakan gesekan kognitif, mengkomunikasikan kontinuitas status, dan menyulap aplikasi fungsional menjadi produk digital berkesan.',
    content: [
      'Animation in digital software is frequently misunderstood as mere decoration. However, when applied with mathematical restraint and biological easing curves, animation acts as the central nervous system of an interface.',
      'Our visual cortex relies on physical continuity. When a card expands seamlessly into a modal rather than abruptly popping into existence, our brain does not have to re-parse the visual hierarchy from scratch.',
      'By honoring the 200ms latency budget and using compositor-only CSS transforms, developers can create applications that feel as physical and responsive as well-machined analog instruments.'
    ],
    contentId: [
      'Animasi dalam perangkat lunak digital sering kali disalahpahami sekadar hiasan. Namun, jika diterapkan dengan perhitungan matang dan kurva fisika yang luwes, animasi berfungsi selayaknya sistem saraf antarmuka.',
      'Korteks visual manusia mengandalkan kontinuitas fisik. Ketika sebuah kartu berekspansi mulus menjadi modal daripada tiba-tiba muncul tanpa transisi, otak kita tidak perlu memproses ulang hierarki visual dari nol.',
      'Dengan mematuhi batas latensi 200ms dan memanfaatkan akselerasi GPU, kita dapat merancang web yang terasa begitu responsif dan memuaskan disentuh.'
    ]
  },
  {
    id: 'editorial-typography',
    title: 'Balancing Serif Elegance with Geometric Sans Rigor',
    titleId: 'Menyeimbangkan Keanggunan Serif dengan Ketegasan Sans Geometris',
    date: 'February 28, 2026',
    readTime: '4 min read',
    category: 'Typography',
    summary: 'A deep dive into combining editorial display faces like Playfair with utilitarian workhorse fonts like Plus Jakarta Sans.',
    summaryId: 'Panduan mendalam memadukan tipografi display berkarakter seperti Playfair dengan kepraktisan Plus Jakarta Sans.',
    content: [
      'Contrast is the soul of typographic resonance. Pairing a high-contrast editorial serif headline with a crisp geometric sans-serif body text yields an aura of timeless literary authority coupled with digital precision.',
      'The critical rule is maintaining spatial hierarchy: allow the serif to breathe at large sizes (clamp 2.5rem to 4rem) while keeping body paragraphs at a comfortable measure between 65 and 75 characters.',
      'Always avoid unnecessary text decorations, badges, or pill enclosures that distract from the pure rhythm of the letterforms.'
    ],
    contentId: [
      'Kontras adalah jiwa resonansi tipografi. Memadukan judul serif editorial berkarakter tinggi dengan teks isi sans-serif geometris yang bersih menghadirkan wibawa sastra abadi berpadu presisi digital.',
      'Aturan kuncinya adalah menjaga hierarki spasial: beri ruang bernapas pada font serif dalam ukuran besar, sementara paragraf isi tetap berada pada proporsi baca nyaman antara 65 hingga 75 karakter.',
      'Hindari dekorasi berlebihan atau badge bertumpuk yang mengaburkan keindahan alami bentuk huruf.'
    ]
  },
  {
    id: 'frontend-craft',
    title: 'Building Resilient Interfaces That Age Like Fine Furniture',
    titleId: 'Membangun Antarmuka Tangguh yang Bertahan Lintas Waktu',
    date: 'January 19, 2026',
    readTime: '6 min read',
    category: 'Engineering',
    summary: 'Reflections on avoiding ephemeral aesthetic fads in favor of crisp spatial math, WCAG standards, and rock-solid architectural simplicity.',
    summaryId: 'Refleksi menjauhi tren visual sesaat demi mengedepankan proporsi spasial presisi, standar aksesibilitas, dan kesederhanaan arsitektur.',
    content: [
      'Trends come and go every quarter: skeuomorphism yielded to flat design, which yielded to neumorphism and glassmorphism. But human ergonomics and typographic legibility remain constant invariants.',
      'When code is modular, semantic, and decoupled from noisy external dependencies, software remains fast, maintainable, and delightful for years.',
      'True craft in modern web engineering lies not in how much you can cram into a viewport, but in how much noise you can ruthlessly eliminate while maximizing utility.'
    ],
    contentId: [
      'Tren desain berganti setiap waktu: skeuomorfisme berganti flat design, lalu neumorfisme dan glassmorfisme. Namun ergonomi manusia dan kenyamanan membaca tetap konstan lintas generasi.',
      'Ketika kode disusun secara modular, semantik, dan bebas dari dependensi yang tidak perlu, perangkat lunak tetap gesit, mudah dirawat, dan memuaskan pengguna.',
      'Kemahiran sejati rekayasa web modern bukan terletak pada seberapa banyak ornamen yang bisa dijejalkan, melainkan seberapa banyak distraksi yang bisa dieliminasi tanpa mengurangi kegunaan.'
    ]
  }
];
