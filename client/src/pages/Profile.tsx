import { useState } from 'react'
import { useLocation } from 'wouter'

export default function Profile() {
  const [, setLocation] = useLocation()
  const [name, setName] = useState('أحمد محمد')
  const [age, setAge] = useState(28)
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(180)
  const [goal, setGoal] = useState('بناء العضلات')

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1)

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setLocation('/')}
          className="mb-6 px-4 py-2 bg-dark-card border border-dark-border rounded hover:border-indigo-500"
        >
          ← العودة
        </button>

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">الملف الشخصي</h1>

        {/* Profile Header */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-4xl">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-gray-400">{age} سنة</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-hover p-4 rounded">
              <div className="text-sm text-gray-400">الوزن</div>
              <div className="text-2xl font-bold">{weight} كجم</div>
            </div>
            <div className="bg-dark-hover p-4 rounded">
              <div className="text-sm text-gray-400">الطول</div>
              <div className="text-2xl font-bold">{height} سم</div>
            </div>
            <div className="bg-dark-hover p-4 rounded">
              <div className="text-sm text-gray-400">مؤشر كتلة الجسم</div>
              <div className="text-2xl font-bold">{bmi}</div>
            </div>
            <div className="bg-dark-hover p-4 rounded">
              <div className="text-sm text-gray-400">الهدف</div>
              <div className="text-lg font-bold">{goal}</div>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">تحديث البيانات</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">الاسم</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">العمر</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">الوزن (كجم)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">الطول (سم)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">الهدف</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                >
                  <option>بناء العضلات</option>
                  <option>فقدان الوزن</option>
                  <option>تحسين اللياقة</option>
                </select>
              </div>
            </div>
            <button className="w-full gradient-primary py-3 rounded-lg font-bold">
              حفظ التغييرات
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
