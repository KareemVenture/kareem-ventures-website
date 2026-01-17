import { Translations } from './types';
import { 
  Building2, 
  Briefcase, 
  Layout,
  Globe, 
  Activity,
  Users,
  Search,
  FileSignature,
  Handshake,
  BarChart3,
  ShieldCheck,
  Zap,
  Leaf,
  Layers,
  Award,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

export const WHATSAPP_NUMBER = "6281234567890"; // Example number
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTENT: Record<string, Translations> = {
  en: {
    meta: {
      title: "Kareem Ventures | The Operating System for Islamic Capital",
      description: "Indonesia's first integrated platform enabling SMEs to structure social giving through Islamic Waqf contracts. Invest in verified productive assets."
    },
    nav: {
      whyUs: "Problem",
      impact: "Opportunities", 
      howItWorks: "Process",
      about: "Team", 
      faq: "FAQ",
      blog: "Insights",
      contact: "Partner"
    },
    hero: {
      label: "Institutional Waqf Infrastructure",
      headline: "The Operating System for Islamic Capital",
      subheadline: "We provide the compliance, legal, and technical rails to deploy capital into verified productive Waqf assets.",
      ctaPrimary: "View Opportunities", 
      ctaSecondary: "View Methodology",
      stats: [
        { label: "Sharia Compliant", value: "100%" },
        { label: "Asset Classes", value: "2+" },
        { label: "Verified Deal Flow", value: "Active" }
      ]
    },
    marketGap: {
      title: "The Trillion-Dollar Disconnect",
      subtitle: "Billions in social capital sits undeployed while high-yield productive assets are starved of growth funding.",
      supplyTitle: "Capital Seeking Deployment",
      supplyDesc: "Corporate CSR, Islamic banks (DSKL), and Family offices need compliant, transparent channels.",
      problemSupply: "No efficient discovery",
      gapTitle: "The Void",
      gapDesc: "Trust Gap",
      demandTitle: "Assets Needing Capital",
      demandDesc: "Productive Waqf SMEs and Social Enterprises with proven cash flow.",
      problemDemand: "No institutional access"
    },
    beneficiaries: { // Commercially rebranded in the UI as "Asset Classes"
      subtitle: "We structure opportunities across two distinct asset classes offering different risk/social-return profiles.",
      assetsLabel: "Productive Equity",
      assetsDesc: "Profitable SMEs generating dividends to fund social sustainability.",
      yieldLabel: "Social Infrastructure",
      yieldDesc: "Direct investment into operational efficiency for schools and clinics."
    },
    solution: {
      title: "The Infrastructure",
      subtitle: "A Trusted Marketplace",
      description: "Kareem provides the trust, compliance, and transaction infrastructure to connect capital with verified impact.",
      cards: [
        {
          title: "For Capital Partners",
          description: "Access a curated pipeline of verified Waqf opportunities with standardized due diligence.",
          icon: Briefcase
        },
        {
          title: "For Asset Owners",
          description: "Get discovered by institutional capital and formalize operations with digital contracts.",
          icon: Building2
        },
        {
          title: "For Asset Managers",
          description: "Digital rails to manage assets, track dividends, and demonstrate real-time audit trails.",
          icon: Layout
        }
      ]
    },
    process: {
      title: "Deployment Engine",
      valuePropTitle: "Risk Management",
      valueProps: [
        "Rigorous Due Diligence (KYC/KYB)",
        "Standardized Sharia Contracts",
        "Automated Impact Telemetry"
      ],
      steps: [
        { number: "01", title: "Verify", desc: "Entities undergo strict financial & Sharia due diligence (Risk Assessment)." },
        { number: "02", title: "Structure", desc: "Automated legal & Sharia-compliant contract generation." },
        { number: "03", title: "Deploy", desc: "Secure capital routing via escrow to verified projects." },
        { number: "04", title: "Monitor", desc: "Live dashboard for financial dividends & social ROI." }
      ]
    },
    vision: {
      title: "The Horizon",
      subtitle: "Building the Rails for a New Era",
      points: [],
      impactTitle: "",
      impactDesc: ""
    },
    credibility: {
      title: "The Architects",
      subtitle: "A team forged in hyper-growth tech companies and deep Islamic finance.",
      team: [
        { name: "Pandu Hartanto", role: "Chief Executive Officer", ex: "Ex-Midtrans, Gojek", image: "" },
        { name: "Ari Bhaktisubagja", role: "Chief Product Officer", ex: "Ex-Kartuku, Gojek", image: "" },
        { name: "Fachry Bafadal", role: "Chief Operating Officer", ex: "Ex-Onebit", image: "" },
        { name: "Syarif Hidayat", role: "Chief Technology Officer", ex: "Ex-PythonID", image: "" }
      ]
    },
    leadGen: {
      title: "Request Data Room",
      subtitle: "Accredited investors and institutional partners may request access to our current deal flow.",
      form: {
        name: "Full Name",
        org: "Institution / Family Office",
        email: "Work Email",
        interest: "Investment Class",
        submit: "Request Access"
      },
      disclaimer: "For accredited investors and institutional partners only."
    },
    faq: {
        subtitle: "Understanding our structure, compliance, and risk management.",
        items: [
            {
                question: "How do you ensure Sharia compliance?",
                answer: "We work with a dedicated Sharia Advisory Board and utilize standardized contracts approved by relevant Islamic finance bodies (BWI/MUI standards). All assets are screened for halal compliance before listing."
            },
            {
                question: "Is my capital guaranteed?",
                answer: "As with all Sharia-compliant investments (Musyarakah/Mudharabah), returns are based on performance and capital is at risk. However, we mitigate this through rigorous due diligence, collateral backing where possible, and by focusing on cash-flow-positive productive assets."
            },
            {
                question: "What is the Exit Strategy?",
                answer: "For equity-based productive waqf, liquidity is typically achieved through secondary market sales (where applicable) or buy-back clauses structured into the contract by the underlying asset owner."
            },
            {
                question: "What is the fee structure?",
                answer: "Kareem Ventures charges a success fee upon capital deployment (typically 3-5%) and a platform management fee on the yields generated (profit-sharing). There are no upfront fees for investors to access the deal flow."
            },
            {
                question: "What is the minimum ticket size?",
                answer: "We primarily work with institutional partners (CSR, Family Offices). Minimum deployment sizes vary by asset class, typically starting at IDR 25M for pooled deals, though specific tranches may differ."
            },
            {
                question: "Who holds the funds (Custody)?",
                answer: "Funds are routed through verified escrow accounts held with our partner Islamic Banks (e.g., BSI) and are released to the asset owner only upon contract finalization and milestone verification."
            },
            {
                question: "How is impact measured?",
                answer: "We track both financial performance (dividends generated) and social output (students funded, patients served) via our real-time Nadzir dashboard, providing you with quarterly impact reports."
            }
        ]
    },
    footer: {
      contactTitle: "Inquiries",
      quickLinksTitle: "Company",
      copyright: "© 2024 Kareem Ventures. All Rights Reserved."
    }
  },
  id: {
    meta: {
      title: "Kareem Ventures | Sistem Operasi untuk Modal Islam",
      description: "Platform terintegrasi pertama di Indonesia yang memungkinkan UKM menyusun wakaf produktif. Investasi dalam aset produktif terverifikasi."
    },
    nav: {
      whyUs: "Masalah",
      impact: "Peluang",
      howItWorks: "Proses",
      about: "Tim",
      faq: "FAQ",
      blog: "Wawasan",
      contact: "Mitra"
    },
    hero: {
      label: "Infrastruktur Wakaf Institusional",
      headline: "Sistem Operasi untuk Modal Islam",
      subheadline: "Kami menyediakan infrastruktur kepatuhan, hukum, dan teknis untuk menyalurkan modal ke aset Wakaf produktif terverifikasi.",
      ctaPrimary: "Lihat Peluang",
      ctaSecondary: "Lihat Metodologi",
      stats: [
        { label: "Kepatuhan Syariah", value: "100%" },
        { label: "Kelas Aset", value: "2+" },
        { label: "Aset Terverifikasi", value: "Aktif" }
      ]
    },
    marketGap: {
      title: "Kesenjangan Triliunan Rupiah",
      subtitle: "Miliaran modal sosial menganggur sementara aset produktif kekurangan dana pertumbuhan.",
      supplyTitle: "Modal Siap Salur",
      supplyDesc: "Dana CSR, Bank Syariah, dan Family Office butuh saluran patuh syariah yang transparan.",
      problemSupply: "Tidak ada penemuan efisien",
      gapTitle: "Kekosongan",
      gapDesc: "Celah Kepercayaan",
      demandTitle: "Aset Butuh Modal",
      demandDesc: "UKM Wakaf Produktif dan Wirausaha Sosial dengan arus kas terbukti.",
      problemDemand: "Tidak ada akses institusi"
    },
    beneficiaries: {
      subtitle: "Kami menyusun peluang di dua kelas aset berbeda dengan profil risiko/imbal sosial yang berbeda.",
      assetsLabel: "Ekuitas Produktif",
      assetsDesc: "UKM menguntungkan yang menghasilkan dividen untuk keberlanjutan sosial.",
      yieldLabel: "Infrastruktur Sosial",
      yieldDesc: "Investasi langsung pada efisiensi operasional sekolah dan klinik."
    },
    solution: {
      title: "Infrastruktur",
      subtitle: "Marketplace Terpercaya",
      description: "Kareem menyediakan infrastruktur kepercayaan, kepatuhan, dan transaksi.",
      cards: [
        {
          title: "Untuk Mitra Modal",
          description: "Akses pipeline peluang Wakaf terverifikasi dengan due diligence standar.",
          icon: Briefcase
        },
        {
          title: "Untuk Pemilik Aset",
          description: "Ditemukan oleh modal institusional dan formalkan operasi dengan kontrak digital.",
          icon: Building2
        },
        {
          title: "Untuk Manajer Aset",
          description: "Rel digital untuk mengelola aset, melacak dividen, dan menunjukkan jejak audit real-time.",
          icon: Layout
        }
      ]
    },
    process: {
      title: "Mesin Penyaluran",
      valuePropTitle: "Manajemen Risiko",
      valueProps: [
        "Due Diligence Ketat (KYC/KYB)",
        "Kontrak Syariah Standar",
        "Telemetri Dampak Otomatis"
      ],
      steps: [
        { number: "01", title: "Verifikasi", desc: "Entitas menjalani due diligence keuangan & Syariah ketat (Risk Assessment)." },
        { number: "02", title: "Struktur", desc: "Pembuatan kontrak hukum & patuh Syariah otomatis." },
        { number: "03", title: "Salurkan", desc: "Penyaluran modal aman ke akun escrow terverifikasi." },
        { number: "04", title: "Monitor", desc: "Dashboard langsung untuk kinerja keuangan & ROI sosial." }
      ]
    },
    vision: {
      title: "",
      subtitle: "",
      points: [],
      impactTitle: "",
      impactDesc: ""
    },
    credibility: {
      title: "Para Arsitek",
      subtitle: "Tim dari perusahaan teknologi pertumbuhan tinggi dan keuangan Islam.",
      team: [
        { name: "Pandu Hartanto", role: "Chief Executive Officer", ex: "Ex-Midtrans, Gojek", image: "" },
        { name: "Ari Bhaktisubagja", role: "Chief Product Officer", ex: "Ex-Kartuku, Gojek", image: "" },
        { name: "Fachry Bafadal", role: "Chief Operating Officer", ex: "Ex-Onebit", image: "" },
        { name: "Syarif Hidayat", role: "Chief Technology Officer", ex: "Ex-PythonID", image: "" }
      ]
    },
    leadGen: {
      title: "Minta Data Room",
      subtitle: "Investor terakreditasi dan mitra institusi dapat meminta akses ke deal flow kami.",
      form: {
        name: "Nama Lengkap",
        org: "Institusi / Family Office",
        email: "Email Kantor",
        interest: "Kelas Investasi",
        submit: "Minta Akses"
      },
      disclaimer: "Hanya untuk investor terakreditasi dan mitra institusi."
    },
    faq: {
        subtitle: "Memahami struktur, kepatuhan, dan manajemen risiko kami.",
        items: [
            {
                question: "Bagaimana Anda memastikan kepatuhan Syariah?",
                answer: "Kami bekerja dengan Dewan Pengawas Syariah dan menggunakan kontrak standar yang disetujui oleh badan keuangan Islam terkait (BWI/MUI). Semua aset disaring untuk kepatuhan halal."
            },
            {
                question: "Apakah modal saya dijamin?",
                answer: "Seperti semua investasi Syariah (Musyarakah/Mudharabah), hasil didasarkan pada kinerja dan modal memiliki risiko. Namun, kami memitigasi ini melalui due diligence ketat, jaminan aset jika memungkinkan, dan fokus pada aset produktif dengan arus kas positif."
            },
            {
                question: "Bagaimana Strategi Exit-nya?",
                answer: "Untuk wakaf produktif berbasis ekuitas, likuiditas biasanya dicapai melalui penjualan pasar sekunder (jika berlaku) atau klausul buy-back yang disusun dalam kontrak oleh pemilik aset dasar."
            },
            {
                question: "Bagaimana struktur biayanya?",
                answer: "Kareem Ventures mengenakan biaya keberhasilan saat penyaluran modal (biasanya 3-5%) dan biaya manajemen platform atas hasil yang dihasilkan (bagi hasil). Tidak ada biaya di muka untuk investor."
            },
            {
                question: "Berapa ukuran tiket minimum?",
                answer: "Kami terutama bekerja dengan mitra institusi (CSR, Family Office). Ukuran penyaluran minimum bervariasi, biasanya mulai dari Rp 25 Juta untuk kesepakatan gabungan."
            },
            {
                question: "Siapa yang memegang dana (Kustodian)?",
                answer: "Dana disalurkan melalui rekening escrow terverifikasi di Bank Syariah mitra kami (mis. BSI) dan hanya dilepaskan ke pemilik aset setelah finalisasi kontrak dan verifikasi milestone."
            },
            {
                question: "Bagaimana dampak diukur?",
                answer: "Kami melacak kinerja keuangan (dividen yang dihasilkan) dan output sosial (siswa didanai, pasien dilayani) melalui dashboard Nadzir real-time kami."
            }
        ]
    },
    footer: {
      contactTitle: "Inquiries",
      quickLinksTitle: "Perusahaan",
      copyright: "© 2024 Kareem Ventures. Hak Cipta Dilindungi."
    }
  }
};