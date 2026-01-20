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
  BarChart3,
  ShieldCheck,
  Zap,
  Leaf,
  Layers,
  Award,
  Wallet,
  ArrowUpRight,
  Infinity
} from 'lucide-react';

export const WHATSAPP_NUMBER = "6281234567890"; // Example number
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const BLOG_POSTS = [
    { title: "Smart Money and Waqf", category: "Trends", readTime: "3 min", date: "Oct 12" },
    { title: "How We Verify Businesses", category: "Trust", readTime: "5 min", date: "Oct 10" },
    { title: "Sustainable Giving", category: "Impact", readTime: "4 min", date: "Oct 08" }
];

export const CONTENT: Record<string, Translations> = {
  en: {
    meta: {
      title: "Kareem Ventures | Simple Waqf Investing",
      description: "Grow your wealth while helping others. Secure, transparent, and sharia-compliant."
    },
    nav: {
      whyUs: "The Problem",
      impact: "Projects", 
      howItWorks: "How It Works",
      about: "Team", 
      faq: "FAQ",
      blog: "Blog",
      contact: "Start Now"
    },
    hero: {
      label: "Waqf Platform",
      headline: "Invest for Good",
      subheadline: "We connect your money to real businesses. You get safety, they get capital, and the community gets the profit.",
      ctaPrimary: "See Projects", 
      ctaSecondary: "Learn More",
      stats: [] 
    },
    marketGap: {
      title: "The Missing Link",
      subtitle: "People want to help, and businesses need money. But trust is missing.",
      supplyTitle: "Donors",
      supplyDesc: "Unsure where money goes. Is it safe? Is it real?",
      problemSupply: "No Trust",
      gapTitle: "The Gap",
      gapDesc: "No Connection",
      demandTitle: "Businesses",
      demandDesc: "Good businesses can't grow without fair capital.",
      problemDemand: "No Money",
      label: "The Problem"
    },
    beneficiaries: { 
      subtitle: "Two ways your money makes a difference.",
      assetsLabel: "Real Businesses",
      assetsDesc: "Shops, farms, and services. They make money to fund charity.",
      yieldLabel: "Social Needs",
      yieldDesc: "Schools, clinics, and water. Direct help for people."
    },
    solution: {
      title: "The Solution",
      subtitle: "",
      description: "We make it easy to do good and track your impact.",
      cards: [
        {
          title: "Sustainable Giving",
          description: "Your money keeps working. Invest once, help forever.",
          icon: Infinity
        },
        {
          title: "Safe & Legal",
          description: "Official contracts protect your money and its purpose.",
          icon: FileSignature
        }
      ]
    },
    process: {
      title: "How It Works",
      valuePropTitle: "",
      valueProps: [],
      steps: [
        { number: "01", title: "We Check", desc: "We verify the business is real and safe." },
        { number: "02", title: "You Fund", desc: "Choose a project and send money securely." },
        { number: "03", title: "We Lock", desc: "We sign legal papers to protect the asset." },
        { number: "04", title: "You Track", desc: "See the impact and growth online." }
      ]
    },
    vision: {
      title: "Our Vision",
      subtitle: "Building a better future for Islamic finance.",
      points: [
          "Digital Trust",
          "Long-term Wealth",
          "Global Reach"
      ],
      impactTitle: "Real Impact",
      impactDesc: "Connecting money to meaning."
    },
    credibility: {
      title: "Our Team",
      subtitle: "Experts in tech and Sharia.",
      team: [
        { name: "Pandu Hartanto", role: "CEO", ex: "Ex-Midtrans, Gojek", image: "", linkedin: "https://www.linkedin.com/in/panduhartanto/" },
        { name: "Ari Bhaktisubagja", role: "CPO", ex: "Ex-Kartuku, Gojek", image: "", linkedin: "https://www.linkedin.com/in/aribhaktisubagja/" },
        { name: "Fachry Bafadal", role: "COO", ex: "Ex-Onebit", image: "", linkedin: "https://www.linkedin.com/in/fachrybafadal/" },
        { name: "Syarif Hidayat", role: "CTO", ex: "Ex-PythonID", image: "", linkedin: "https://www.linkedin.com/in/aijogja/" }
      ]
    },
    leadGen: {
      title: "Get Started",
      subtitle: "Ready to help? Let's talk.",
      form: {
        name: "Name",
        org: "Organization",
        email: "Email",
        interest: "Your Goal",
        submit: "Send Message"
      },
      disclaimer: ""
    },
    faq: {
        subtitle: "Simple answers.",
        items: []
    },
    blog: {
        title: "Latest News",
        subtitle: "Read about faith and finance.",
        viewAll: "See All",
        items: BLOG_POSTS
    },
    footer: {
      contactTitle: "Contact",
      quickLinksTitle: "Company",
      copyright: "© 2024 Kareem Ventures."
    }
  },
  id: {
    meta: {
      title: "Kareem Ventures | Investasi Wakaf Mudah",
      description: "Kembangkan harta sambil membantu sesama. Aman, transparan, dan syariah."
    },
    nav: {
      whyUs: "Masalah",
      impact: "Proyek",
      howItWorks: "Cara Kerja",
      about: "Tim",
      faq: "FAQ",
      blog: "Blog",
      contact: "Mulai"
    },
    hero: {
      label: "Platform Wakaf",
      headline: "Investasi Kebaikan",
      subheadline: "Kami hubungkan uang Anda ke bisnis nyata. Anda aman, mereka dapat modal, umat dapat untung.",
      ctaPrimary: "Lihat Proyek",
      ctaSecondary: "Pelajari",
      stats: []
    },
    marketGap: {
      title: "Mata Rantai Putus",
      subtitle: "Orang ingin membantu, bisnis butuh modal. Tapi rasa percaya hilang.",
      supplyTitle: "Donatur",
      supplyDesc: "Ragu uang kemana. Apakah aman? Apakah nyata?",
      problemSupply: "Tidak Percaya",
      gapTitle: "Celah",
      gapDesc: "Tidak Terhubung",
      demandTitle: "Bisnis",
      demandDesc: "Bisnis bagus sulit tumbuh tanpa modal adil.",
      problemDemand: "Kurang Modal",
      label: "Masalah"
    },
    beneficiaries: {
      subtitle: "Dua cara uang Anda memberi dampak.",
      assetsLabel: "Bisnis Nyata",
      assetsDesc: "Toko, kebun, dan jasa. Hasilkan untung untuk amal.",
      yieldLabel: "Sosial",
      yieldDesc: "Sekolah, klinik, dan air. Bantuan langsung untuk umat."
    },
    solution: {
      title: "Solusi Kami",
      subtitle: "",
      description: "Kami mudahkan Anda beramal dan pantau hasilnya.",
      cards: [
        {
          title: "Amal Berkelanjutan",
          description: "Uang Anda terus bekerja. Investasi sekali, bantu selamanya.",
          icon: Infinity
        },
        {
          title: "Aman & Legal",
          description: "Kontrak resmi lindungi uang dan tujuannya.",
          icon: FileSignature
        }
      ]
    },
    process: {
      title: "Cara Kerja",
      valuePropTitle: "",
      valueProps: [],
      steps: [
        { number: "01", title: "Kami Cek", desc: "Kami pastikan bisnis nyata dan aman." },
        { number: "02", title: "Anda Danai", desc: "Pilih proyek dan kirim dana aman." },
        { number: "03", title: "Kami Kunci", desc: "Kami buat surat resmi jaga aset." },
        { number: "04", title: "Anda Pantau", desc: "Lihat dampak dan hasil online." }
      ]
    },
    vision: {
      title: "Visi Kami",
      subtitle: "Membangun masa depan keuangan Islam.",
      points: [
        "Kepercayaan Digital",
        "Kekayaan Abadi",
        "Jangkauan Global"
      ],
      impactTitle: "Dampak Nyata",
      impactDesc: "Hubungkan uang dengan tujuan."
    },
    credibility: {
      title: "Tim Kami",
      subtitle: "Ahli teknologi dan Syariah.",
      team: [
        { name: "Pandu Hartanto", role: "CEO", ex: "Ex-Midtrans, Gojek", image: "", linkedin: "https://www.linkedin.com/in/panduhartanto/" },
        { name: "Ari Bhaktisubagja", role: "CPO", ex: "Ex-Kartuku, Gojek", image: "", linkedin: "https://www.linkedin.com/in/aribhaktisubagja/" },
        { name: "Fachry Bafadal", role: "COO", ex: "Ex-Onebit", image: "", linkedin: "https://www.linkedin.com/in/fachrybafadal/" },
        { name: "Syarif Hidayat", role: "CTO", ex: "Ex-PythonID", image: "", linkedin: "https://www.linkedin.com/in/aijogja/" }
      ]
    },
    leadGen: {
      title: "Mulai Sekarang",
      subtitle: "Siap membantu? Mari bicara.",
      form: {
        name: "Nama",
        org: "Organisasi",
        email: "Email",
        interest: "Tujuan Anda",
        submit: "Kirim Pesan"
      },
      disclaimer: ""
    },
    faq: {
        subtitle: "Jawaban singkat.",
        items: []
    },
    blog: {
        title: "Berita Terbaru",
        subtitle: "Baca tentang iman dan keuangan.",
        viewAll: "Lihat Semua",
        items: BLOG_POSTS
    },
    footer: {
      contactTitle: "Kontak",
      quickLinksTitle: "Perusahaan",
      copyright: "© 2024 Kareem Ventures."
    }
  }
};