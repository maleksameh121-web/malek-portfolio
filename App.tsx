import { useState, useEffect } from 'react'
import { Code, Palette, Bot, Briefcase, Mail, Linkedin, Github, ChevronDown, ExternalLink, ArrowRight } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'مصمم مواقع ويب محترف'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'services', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = [
    { name: 'HTML & CSS', level: 95, color: 'bg-orange-500' },
    { name: 'JavaScript / TypeScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React / Next.js', level: 88, color: 'bg-cyan-500' },
    { name: 'UI/UX Design', level: 85, color: 'bg-pink-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-sky-500' },
    { name: 'WordPress', level: 80, color: 'bg-blue-500' },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'تصميم المواقع',
      description: 'تصميم مواقع ويب احترافية ومتجاوبة تناسب جميع الأجهزة وتوفر تجربة مستخدم متميزة.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'تصميم واجهات المستخدم',
      description: 'إنشاء تصاميم بصرية جذابة وسهلة الاستخدام تضمن رضا العملاء والزوار.'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'تكامل الذكاء الاصطناعي',
      description: 'دمج حلول الذكاء الاصطناعي في المواقع لتحسين الأداء وتخصيص تجربة المستخدم.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'استشارات الأعمال الرقمية',
      description: 'تقديم المشورة الاستراتيجية لتحسين وجودك الرقمي وتحقيق أهدافك التجارية.'
    },
  ]

  const interests = [
    { label: 'تطوير الويب', icon: '🌐' },
    { label: 'التصميم', icon: '🎨' },
    { label: 'الذكاء الاصطناعي', icon: '🤖' },
    { label: 'الأعمال', icon: '💼' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-l from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MS
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {section === 'home' ? 'الرئيسية' :
                   section === 'about' ? 'من أنا' :
                   section === 'skills' ? 'المهارات' :
                   section === 'services' ? 'الخدمات' : 'تواصل'}
                </button>
              ))}
            </div>
            <a
              href="mailto:maleksameh121@gmail.com"
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              تواصل معي
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">متاح للعمل الحر</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-l from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
              مالك سامح
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-blue-400 font-medium mb-8 h-10">
            {typedText}<span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            أحوّل أفكارك إلى تجارب رقمية استثنائية. متخصص في تصميم وتطوير المواقع الاحترافية
            التي تجمع بين الجمال والوظائف المتقدمة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              ابدأ مشروعك
              <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-xl font-medium transition-all"
            >
              تعرف عليّ
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="مالك سامح"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-sm text-blue-400 font-medium mb-2 uppercase tracking-wider">من أنا</h2>
              <h3 className="text-4xl font-bold mb-6">شغف بالتصميم<br />والتكنولوجيا</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                أنا مالك سامح، مصمم مواقع ويب محترف أؤمن بأن كل موقع يحكي قصة فريدة.
                أجمع بين الإبداع التقني والحس الجمالي لإنشاء تجارب رقمية لا تُنسى.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                مع خبرة تمتد عبر مشاريع متنوعة، أسعى دائماً لتقديم حلول تحقق أهداف عملائي
                وتتجاوز توقعاتهم.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm font-medium text-slate-200">{interest.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/maleksameh121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5 py-3 rounded-lg transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/maleksameh121-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5 py-3 rounded-lg transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm text-blue-400 font-medium mb-2 uppercase tracking-wider">المهارات</h2>
            <h3 className="text-4xl font-bold">المهارات والتقنيات</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm text-blue-400 font-medium mb-2 uppercase tracking-wider">الخدمات</h2>
            <h3 className="text-4xl font-bold">ما يمكنني تقديمه</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              أقدم مجموعة متكاملة من الخدمات الرقمية المصممة لمساعدتك على تحقيق أهدافك
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm text-blue-400 font-medium mb-2 uppercase tracking-wider">تواصل</h2>
            <h3 className="text-4xl font-bold">لنتواصل معاً</h3>
            <p className="text-slate-400 mt-4">
              لديك مشروع في ذهنك؟ أنا هنا لمساعدتك في تحويله إلى واقع
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a
                href="mailto:maleksameh121@gmail.com"
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">البريد الإلكتروني</p>
                  <p className="font-medium">maleksameh121@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/maleksameh121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-medium flex items-center gap-1">
                    الملف الشخصي
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </a>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="الموضوع"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="رسالتك..."
                rows={5}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold bg-gradient-to-l from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MS
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 مالك سامح. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/maleksameh121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/maleksameh121-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
