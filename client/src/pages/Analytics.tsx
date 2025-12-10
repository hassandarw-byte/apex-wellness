import { useLocation } from 'wouter'

export default function Analytics() {
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

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">التحليلات</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2">إجمالي التمارين</div>
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">24</div>
            <div className="text-xs text-gray-500 mt-2">↑ 5 هذا الأسبوع</div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2">السعرات المحروقة</div>
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">2,480</div>
            <div className="text-xs text-gray-500 mt-2">↑ 320 هذا الأسبوع</div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2">أيام النشاط</div>
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">18</div>
            <div className="text-xs text-gray-500 mt-2">من آخر 30 يوم</div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2">متوسط المدة</div>
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">32</div>
            <div className="text-xs text-gray-500 mt-2">دقيقة لكل تمرين</div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">التقدم الأسبوعي</h2>
          <div className="space-y-4">
            {['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, i) => (
              <div key={day}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{day}</span>
                  <span className="text-gray-400">{Math.floor(Math.random() * 500) + 200} سعرة</span>
                </div>
                <div className="w-full bg-dark-hover rounded-full h-2 overflow-hidden">
                  <div
                    className="gradient-primary h-full"
                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
