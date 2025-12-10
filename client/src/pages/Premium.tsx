import { useLocation } from 'wouter'

export default function Premium() {
  const [, setLocation] = useLocation()

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setLocation('/')}
          className="mb-6 px-4 py-2 bg-dark-card border border-dark-border rounded hover:border-indigo-500"
        >
          ← العودة
        </button>

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">الاشتراك المميز</h1>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'أساسي', price: 'مجاني', features: ['تمارين أساسية', 'تتبع بسيط'] },
            { name: 'مميز', price: '29 ريال/شهر', features: ['جميع التمارين', 'تحليلات متقدمة', 'خطط مخصصة'], highlighted: true },
            { name: 'فاخر', price: '99 ريال/شهر', features: ['كل شيء', 'مدرب شخصي', 'دعم 24/7'] }
          ].map((plan, i) => (
            <div
              key={i}
              className={`border rounded-lg p-6 transition-all ${
                plan.highlighted
                  ? 'bg-dark-card border-indigo-500 shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-dark-card border-dark-border hover:border-indigo-500'
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-4">{plan.price}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-gray-300">✓ {feature}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                plan.highlighted
                  ? 'gradient-primary text-white'
                  : 'bg-dark-hover border border-dark-border hover:border-indigo-500'
              }`}>
                اختر الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
