import { useState } from 'react'
import { useLocation } from 'wouter'

const meals = [
  {
    id: 1,
    name: 'سلطة الدجاج',
    type: 'غداء',
    calories: 350,
    protein: 35,
    carbs: 20,
    fat: 12,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: ['دجاج مشوي', 'خضار طازة', 'زيت زيتون', 'عصير ليمون'],
    halal: true
  },
  {
    id: 2,
    name: 'سمك السلمون',
    type: 'عشاء',
    calories: 400,
    protein: 40,
    carbs: 15,
    fat: 18,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: ['سمك سلمون', 'ليمون', 'أعشاب', 'زيت'],
    halal: true
  },
  {
    id: 3,
    name: 'عصير البروتين',
    type: 'وجبة خفيفة',
    calories: 200,
    protein: 25,
    carbs: 30,
    fat: 3,
    image: 'https://images.unsplash.com/photo-1590080876-5b1d4e4b6f0a?w=400&h=300&fit=crop',
    ingredients: ['حليب', 'موز', 'عسل', 'بروتين'],
    halal: true
  },
  {
    id: 4,
    name: 'أرز بالدجاج',
    type: 'غداء',
    calories: 450,
    protein: 38,
    carbs: 45,
    fat: 10,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: ['أرز بسمتي', 'دجاج', 'خضار', 'توابل'],
    halal: true
  }
]

export default function Nutrition() {
  const [, setLocation] = useLocation()
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [selectedType, setSelectedType] = useState('الكل')

  const filtered = selectedType === 'الكل' ? meals : meals.filter(m => m.type === selectedType)

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setLocation('/')}
          className="mb-6 px-4 py-2 bg-dark-card border border-dark-border rounded hover:border-indigo-500"
        >
          ← العودة
        </button>

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">التغذية الحلال</h1>

        {/* Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['الكل', 'إفطار', 'غداء', 'عشاء', 'وجبة خفيفة'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded whitespace-nowrap transition-all ${
                selectedType === type
                  ? 'gradient-primary text-white'
                  : 'bg-dark-card border border-dark-border hover:border-indigo-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {filtered.map(meal => (
            <button
              key={meal.id}
              onClick={() => setSelectedMeal(meal)}
              className="card-hover bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-indigo-500 text-left"
            >
              <img src={meal.image} alt={meal.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{meal.name}</h3>
                  {meal.halal && <span className="text-green-500 text-xs font-bold">✓ حلال</span>}
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{meal.calories} سعرة</span>
                  <span>{meal.protein}g بروتين</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedMeal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-dark-card border border-dark-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-dark-card border-b border-dark-border p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedMeal.name}</h2>
                <button onClick={() => setSelectedMeal(null)} className="text-2xl">✕</button>
              </div>

              <div className="p-6">
                <img src={selectedMeal.image} alt={selectedMeal.name} className="w-full h-64 object-cover rounded-lg mb-4" />

                {selectedMeal.halal && (
                  <div className="bg-green-900/20 border border-green-500/30 p-3 rounded mb-4">
                    <p className="text-green-400 font-bold">✓ وجبة حلال 100%</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">السعرات</div>
                    <div className="text-2xl font-bold">{selectedMeal.calories}</div>
                  </div>
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">البروتين</div>
                    <div className="text-2xl font-bold">{selectedMeal.protein}g</div>
                  </div>
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">الكربوهيدرات</div>
                    <div className="text-2xl font-bold">{selectedMeal.carbs}g</div>
                  </div>
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">الدهون</div>
                    <div className="text-2xl font-bold">{selectedMeal.fat}g</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">المكونات:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedMeal(null)}
                  className="w-full gradient-primary py-3 rounded-lg font-bold"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
