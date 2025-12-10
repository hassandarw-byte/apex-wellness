import { useState } from 'react'
import { useLocation } from 'wouter'

export default function Signup() {
  const [, setLocation] = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSignup = () => {
    if (name && email && password && confirm && password === confirm) {
      setLocation('/')
    }
  }

  return (
    <div className="page-enter min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">APEX</h1>
          <p className="text-gray-400">إنشاء حساب جديد</p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">الاسم الكامل</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                placeholder="أحمد محمد"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">تأكيد كلمة المرور</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-dark-hover border border-dark-border rounded px-4 py-2 text-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full gradient-primary py-3 rounded-lg font-bold mb-4"
          >
            إنشاء حساب
          </button>

          <p className="text-center text-gray-400">
            لديك حساب بالفعل؟{' '}
            <button
              onClick={() => setLocation('/login')}
              className="text-indigo-400 hover:text-indigo-300"
            >
              دخول
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
