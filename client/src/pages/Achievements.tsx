import { useLocation } from 'wouter'

const achievements = [
  { id: 1, name: 'البداية', description: 'أكمل أول تمرين', icon: '🏃', unlocked: true },
  { id: 2, name: 'الأسبوع الأول', description: 'تمرن 7 أيام متتالية', icon: '🔥', unlocked: true },
  { id: 3, name: 'شرب الماء', description: 'اشرب 2 لتر من الماء يومياً', icon: '💧', unlocked: false },
  { id: 4, name: 'بطل اللياقة', description: 'أكمل 50 تمرين', icon: '🏆', unlocked: false },
  { id: 5, name: 'الصحة أولاً', description: 'اتبع خطة صحية لمدة شهر', icon: '❤️', unlocked: false },
  { id: 6, name: 'الشهر الذهبي', description: 'حافظ على روتينك لمدة 30 يوم', icon: '⭐', unlocked: false }
]

export default function Achievements() {
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

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">الإنجازات</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">2</div>
            <div className="text-sm text-gray-400">إنجازات مفتوحة</div>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">4</div>
            <div className="text-sm text-gray-400">إنجازات متبقية</div>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">33%</div>
            <div className="text-sm text-gray-400">نسبة الإنجاز</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={`border rounded-lg p-6 transition-all ${
                achievement.unlocked
                  ? 'bg-dark-card border-indigo-500/50 shadow-lg shadow-indigo-500/20'
                  : 'bg-dark-hover border-dark-border opacity-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{achievement.name}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {achievement.unlocked && (
                    <p className="text-xs text-green-400 mt-2">✓ تم فتحه</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
