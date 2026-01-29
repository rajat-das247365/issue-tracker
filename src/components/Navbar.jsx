import React from 'react'

const Navbar = () => {
  return (
        <nav className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Arcane-style glyph */}
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20 ring-1 ring-cyan-400/40 shadow shadow-cyan-500/30">
            <span className="text-cyan-300 font-bold tracking-wider">
              ◈
            </span>
          </div>

          <span className="text-lg font-semibold tracking-wide text-white">
            Issue Tracker
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          
          {/* Dashboard Link */}
          <button
            className="text-sm text-white/70 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-md px-2 py-1"
            aria-label="Go to dashboard"
          >
            Dashboard
          </button>

          {/* Settings Icon */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            aria-label="Open settings"
          >
            ⚙
          </button>

          {/* Profile Avatar */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 text-white font-medium ring-1 ring-white/20 hover:ring-cyan-400/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Open profile"
          >
            A
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
