import React, { useMemo, useState } from 'react';

// Local hero background provided by user
const heroImage = new URL('../../shopping-bag-cart 1.png', import.meta.url).href;

const TabButton = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-sm font-semibold tracking-wide transition-colors ${
      active ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
    }`}
  >
    {children}
  </button>
);

const Icon = ({ path }) => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const InputRow = ({ icon, children }) => (
  <div className="flex items-center gap-3 border-b border-gray-200 py-3 focus-within:border-gray-400">
    <Icon path={icon} />
    <div className="flex-1">{children}</div>
  </div>
);

const AuthPage = ({ initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const isLogin = mode === 'login';

  const headline = useMemo(
    () => (isLogin ? "" : ''),
    [isLogin],
  );

  return (
    <div
      className="relative min-h-screen flex items-center px-4 sm:px-10 lg:px-16 py-10"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent lg:bg-gradient-to-r" />

      <div className="relative w-full max-w-6xl mx-auto flex justify-start">
        <div className="w-full max-w-2xl lg:w-[560px] bg-white/92 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <TabButton active={isLogin} onClick={() => setMode('login')}>
                LOGIN
              </TabButton>
              <TabButton active={!isLogin} onClick={() => setMode('register')}>
                REGISTER
              </TabButton>
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mt-8 sm:mt-12 space-y-10">
            <div className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center">
              {headline}
            </div>

            <form className="space-y-6">
              {!isLogin && (
                <InputRow icon="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0">
                  <input
                    type="text"
                    placeholder="enter a name"
                    className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none"
                  />
                </InputRow>
              )}

              <InputRow icon="M21 8.25l-9 5.25L3 8.25m18 0l-9-5.25L3 8.25m18 0v7.5l-9 5.25-9-5.25v-7.5">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none"
                />
              </InputRow>

              {!isLogin && (
                <InputRow icon="M2.25 5.25h19.5m-16.5 0V4.5A2.25 2.25 0 0 1 7.5 2.25h9A2.25 2.25 0 0 1 18.75 4.5v.75m-6 6h.008v.008H12v-.008Z">
                  <div className="flex items-center gap-3">
                    <select className="text-sm text-gray-600 outline-none bg-transparent">
                      <option value="+84">+84</option>
                      <option value="+1">+1</option>
                      <option value="+65">+65</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="phone number"
                      className="flex-1 text-sm text-gray-600 placeholder-gray-400 outline-none"
                    />
                  </div>
                </InputRow>
              )}

              <InputRow icon="M12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none"
                />
              </InputRow>

              <div className="flex items-center justify-between text-xs text-gray-500">
                {!isLogin && (
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-700" />
                    <span>Agree to the terms and conditions</span>
                  </label>
                )}

                {isLogin && (
                  <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
                    Forget Password?
                  </button>
                )}
              </div>

              {!isLogin && (
                <label className="flex items-center gap-3 text-xs text-gray-500 cursor-pointer select-none">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-700" />
                  <span>Receive notifications from us</span>
                </label>
              )}

              <button
                type="button"
                className="w-full py-3.5 mt-3 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            {isLogin && (
              <div className="pt-6 border-t border-gray-100">
                <div className="text-center text-sm text-gray-500 mb-4">Or Sign in with:</div>
                <div className="flex items-center justify-center gap-5">
                  {['F', 'G', 'G+', 'In'].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="h-11 w-11 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition"
                      aria-label={`Sign in with ${label}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
