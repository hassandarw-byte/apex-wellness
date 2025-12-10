import { useState } from 'react'
import { useLocation } from 'wouter'

const exercises = [
  {
    id: 1,
    name: 'تمرين الضغط',
    type: 'قوة',
    difficulty: 'سهل',
    duration: 15,
    calories: 80,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
    youtubeId: 'Eh00_rniF8E',
    description: 'تمرين الضغط الكلاسيكي لتقوية عضلات الصدر والذراعين',
    steps: ['استلقِ على الأرض', 'ضع يديك بعرض الكتفين', 'ارفع جسدك بقوة ذراعيك', 'انزل ببطء']
  },
  {
    id: 2,
    name: 'تمرين الجري',
    type: 'قلب',
    difficulty: 'متوسط',
    duration: 30,
    calories: 300,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    youtubeId: 'tYzd0586yLU',
    description: 'الجري السريع لتحسين اللياقة القلبية',
    steps: ['ابدأ بالإحماء', 'اركض بسرعة معتدلة', 'حافظ على التنفس المنتظم']
  },
  {
    id: 3,
    name: 'تمرين البطن',
    type: 'قوة',
    difficulty: 'سهل',
    duration: 10,
    calories: 50,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop',
    youtubeId: 'I1-cqnMoK5E',
    description: 'تمرين عضلات البطن الفعال',
    steps: ['استلقِ على ظهرك', 'اثنِ ركبتيك', 'ارفع رأسك وكتفيك']
  }
]

export default function Exercises() {
  const [, setLocation] = useLocation()
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [selectedType, setSelectedType] = useState('الكل')

  const filtered = selectedType === 'الكل' ? exercises : exercises.filter(e => e.type === selectedType)

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setLocation('/')}
          className="mb-6 px-4 py-2 bg-dark-card border border-dark-border rounded hover:border-indigo-500"
        >
          ← العودة
        </button>

        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-6">التمارين</h1>

        {/* Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['الكل', 'قوة', 'قلب'].map(type => (
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
          {filtered.map(exercise => (
            <button
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise)}
              className="card-hover bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-indigo-500"
            >
              <img src={exercise.image} alt={exercise.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">{exercise.name}</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{exercise.type}</span>
                  <span>{exercise.duration} دقيقة</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedExercise && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-dark-card border border-dark-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-dark-card border-b border-dark-border p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedExercise.name}</h2>
                <button onClick={() => setSelectedExercise(null)} className="text-2xl">✕</button>
              </div>

              <div className="p-6">
                <img src={selectedExercise.image} alt={selectedExercise.name} className="w-full h-64 object-cover rounded-lg mb-4" />

                {/* YouTube Video */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${selectedExercise.youtubeId}`}
                    title={selectedExercise.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <p className="text-gray-300 mb-4">{selectedExercise.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">المدة</div>
                    <div className="text-2xl font-bold">{selectedExercise.duration} دقيقة</div>
                  </div>
                  <div className="bg-dark-hover p-4 rounded">
                    <div className="text-sm text-gray-400">السعرات</div>
                    <div className="text-2xl font-bold">{selectedExercise.calories} سعرة</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">الخطوات:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                  {selectedExercise.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>

                <button
                  onClick={() => setSelectedExercise(null)}
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
