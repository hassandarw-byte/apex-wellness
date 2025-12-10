import { useState } from 'react'
import { useLocation } from 'wouter'

export default function Tracking() {
  const [, setLocation] = useLocation()
  const [water, setWater] = useState(0)
  const [meals, setMeals] = useState(0)
  const [workouts, setWorkouts] = useState(0)

  const addWater = () => setWater(w => w + 250)
  const removeWater = () => setWater(w => Math.max(0, w - 250))

  const addMeal = () => setMeals(m => m + 1)
  const removeMeal = () => setMeals(m => Math.max(0, m - 1))

  const addWorkout = () => setWorkouts(w => w + 1)
  const removeWorkout = () => setWorkouts(w => Math.max(0, w - 1))

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setLocation('/')}
          className="mb-6 px-4 py-2 bg-dark-card border border-dark-border rounded hover:border-indigo-500"
        >
          ← العودة
        </button>

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">تتبع التقدم</h1>

        {/* Water Tracking */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">تتبع المياه</h2>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              {water}ml
            </div>
            <p className="text-gray-400 mb-6">الهدف اليومي: 2000ml</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={removeWater}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all"
              >
                ➖ إنقاص
              </button>
              <button
                onClick={addWater}
                className="px-6 py-3 gradient-primary rounded-lg font-bold transition-all"
              >
                ➕ إضافة (250ml)
              </button>
            </div>
            <div className="mt-6 bg-dark-hover p-4 rounded">
              <div className="w-full bg-dark-bg rounded-full h-4 overflow-hidden">
                <div
                  className="gradient-primary h-full transition-all duration-300"
                  style={{ width: `${Math.min((water / 2000) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{Math.round((water / 2000) * 100)}% من الهدف</p>
            </div>
          </div>
        </div>

        {/* Meals Tracking */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">تتبع الوجبات</h2>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              {meals}
            </div>
            <p className="text-gray-400 mb-6">الهدف اليومي: 3 وجبات</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={removeMeal}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all"
              >
                ➖ إنقاص
              </button>
              <button
                onClick={addMeal}
                className="px-6 py-3 gradient-primary rounded-lg font-bold transition-all"
              >
                ➕ إضافة وجبة
              </button>
            </div>
            <div className="mt-6 bg-dark-hover p-4 rounded">
              <div className="w-full bg-dark-bg rounded-full h-4 overflow-hidden">
                <div
                  className="gradient-primary h-full transition-all duration-300"
                  style={{ width: `${Math.min((meals / 3) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{Math.round((meals / 3) * 100)}% من الهدف</p>
            </div>
          </div>
        </div>

        {/* Workouts Tracking */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">تتبع التمارين</h2>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              {workouts}
            </div>
            <p className="text-gray-400 mb-6">الهدف الأسبوعي: 5 تمارين</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={removeWorkout}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all"
              >
                ➖ إنقاص
              </button>
              <button
                onClick={addWorkout}
                className="px-6 py-3 gradient-primary rounded-lg font-bold transition-all"
              >
                ➕ إضافة تمرين
              </button>
            </div>
            <div className="mt-6 bg-dark-hover p-4 rounded">
              <div className="w-full bg-dark-bg rounded-full h-4 overflow-hidden">
                <div
                  className="gradient-primary h-full transition-all duration-300"
                  style={{ width: `${Math.min((workouts / 5) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{Math.round((workouts / 5) * 100)}% من الهدف</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
