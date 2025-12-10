import { useLocation } from 'wouter'

export default function Home() {
  const [, setLocation] = useLocation()

  const features = [
    { icon: '💪', title: 'تمارين احترافية', desc: 'برامج تمارين مخصصة مع فيديوهات تعليمية' },
    { icon: '🍎', title: 'تغذية حلال', desc: 'خطط غذائية صحية 100% حلال' },
    { icon: '📊', title: 'تتبع متقدم', desc: 'راقب تقدمك مع تحليلات مفصلة' },
    { icon: '🏆', title: 'إنجازات', desc: 'حقق أهدافك واكسب الإنجازات' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">APEX Wellness</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setLocation('/login')}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              دخول
            </button>
            <button
              onClick={() => setLocation('/premium')}
              className="px-6 py-2 gradient-primary rounded-lg font-bold"
            >
              اشترك الآن
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-primary bg-clip-text text-transparent">
            لياقة فاخرة
          </span>
          <br />
          <span>حلال 100%</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          تطبيق APEX Wellness هو منصتك الشاملة للياقة البدنية والتغذية الحلال مع تقنيات متقدمة وتصميم فاخر
        </p>
        <button
          onClick={() => setLocation('/signup')}
          className="px-8 py-4 gradient-primary rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
        >
          ابدأ الآن مجاناً
        </button>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">المميزات الرئيسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">💪 تمارين احترافية</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ تمارين متنوعة مع فيديوهات YouTube</li>
              <li>✓ برامج مخصصة حسب مستواك</li>
              <li>✓ تعليمات مفصلة لكل تمرين</li>
              <li>✓ تتبع السعرات المحروقة</li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🍎 تغذية حلال</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ وجبات صحية 100% حلال</li>
              <li>✓ معلومات غذائية دقيقة</li>
              <li>✓ خطط غذائية مخصصة</li>
              <li>✓ بدون لحوم خنزير أو محرمات</li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">📊 تتبع متقدم</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ تتبع المياه مع أزرار إضافة/إنقاص</li>
              <li>✓ تتبع الوجبات والتمارين</li>
              <li>✓ تحليلات وإحصائيات مفصلة</li>
              <li>✓ رسوم بيانية للتقدم</li>
            </ul>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🏆 إنجازات وجوائز</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ نظام إنجازات تحفيزي</li>
              <li>✓ شارات وجوائز</li>
              <li>✓ مقارنة التقدم</li>
              <li>✓ تحديات أسبوعية</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز لتغيير حياتك؟</h2>
          <p className="text-xl mb-8 opacity-90">انضم إلى آلاف المستخدمين الذين بدأوا رحلتهم نحو اللياقة</p>
          <button
            onClick={() => setLocation('/signup')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            ابدأ مجاناً الآن
          </button>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">استكشف التطبيق</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'التمارين', path: '/exercises', icon: '💪' },
            { label: 'التغذية', path: '/nutrition', icon: '🍎' },
            { label: 'التتبع', path: '/tracking', icon: '📊' },
            { label: 'الملف الشخصي', path: '/profile', icon: '👤' },
            { label: 'الإنجازات', path: '/achievements', icon: '🏆' },
            { label: 'التحليلات', path: '/analytics', icon: '📈' }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => setLocation(item.path)}
              className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-indigo-500 transition-all text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="font-bold">{item.label}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 APEX Wellness. جميع الحقوق محفوظة.</p>
          <p className="mt-2">تطبيق لياقة فاخر 100% حلال</p>
        </div>
      </footer>
    </div>
  )
}
