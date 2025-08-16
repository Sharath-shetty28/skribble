import React, { useState } from "react";
import {
  Pencil,
  Users,
  Trophy,
  Zap,
  Menu,
  X,
  Github,
  Mail,
  Shield,
} from "lucide-react";

export default function LandingPage({ onPlay }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-cyan-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-cyan-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center">
                <Pencil className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Skribble
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("rules")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                How to Play
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Features
              </button>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                  Login
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-300 transition-all duration-200 transform hover:scale-105">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-800/30 bg-slate-900/95 backdrop-blur-md">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("rules")}
                  className="text-left px-4 py-2 text-gray-300 hover:text-cyan-400"
                >
                  How to Play
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left px-4 py-2 text-gray-300 hover:text-cyan-400"
                >
                  Features
                </button>
                <div className="px-4 py-2 flex flex-col space-y-2">
                  <button className="text-left text-cyan-400">Login</button>
                  <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold rounded-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
              Draw. Guess. Win.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate multiplayer drawing game that brings friends together
            through creativity and laughter.
          </p>

          <button
            onClick={onPlay}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-black text-lg font-semibold rounded-xl hover:from-cyan-400 hover:to-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            <Zap className="w-6 h-6 mr-2 group-hover:animate-bounce" />
            Play Now
          </button>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-800/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-800/30">
              <div className="text-3xl font-bold text-teal-400 mb-2">50K+</div>
              <div className="text-gray-300">Games Played</div>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-800/30">
              <div className="text-3xl font-bold text-cyan-300 mb-2">99%</div>
              <div className="text-gray-300">Fun Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section
        id="rules"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How to Play
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple rules, endless fun! Master these steps and become a
              Skribble champion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rule 1 */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:rotate-1 border border-cyan-800/30">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Pencil className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                1. Get a Word
              </h3>
              <p className="text-gray-300">
                Choose from 3 random words and start drawing your masterpiece!
              </p>
            </div>

            {/* Rule 2 */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:-rotate-1 border border-cyan-800/30">
              <div className="w-16 h-16 bg-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                2. Draw & Share
              </h3>
              <p className="text-gray-300">
                Use the drawing tools to illustrate your word while others
                watch!
              </p>
            </div>

            {/* Rule 3 */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:rotate-1 border border-cyan-800/30">
              <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                3. Guess Fast
              </h3>
              <p className="text-gray-300">
                Type your guesses in the chat. The faster you guess, the more
                points!
              </p>
            </div>

            {/* Rule 4 */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:-rotate-1 border border-cyan-800/30">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                4. Win Points
              </h3>
              <p className="text-gray-300">
                Earn points for correct guesses and climb the leaderboard!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Players Love
                <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  {" "}
                  Skribble
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the perfect blend of creativity, competition, and
                connection in every game.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-cyan-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-800/50 transition-colors duration-200 border border-cyan-700/30">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Multiplayer Magic
                    </h3>
                    <p className="text-gray-300">
                      Play with friends or meet new people from around the world
                      in real-time drawing battles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-teal-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-800/50 transition-colors duration-200 border border-teal-700/30">
                    <Pencil className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Creative Expression
                    </h3>
                    <p className="text-gray-300">
                      Unleash your artistic side with intuitive drawing tools
                      and unlimited creativity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700/50 transition-colors duration-200 border border-slate-600/30">
                    <Trophy className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Competitive Fun
                    </h3>
                    <p className="text-gray-300">
                      Climb leaderboards, earn achievements, and prove you're
                      the ultimate Skribble master.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-700 via-cyan-900 to-black rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group border border-cyan-800/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-400/10 group-hover:from-cyan-500/20 group-hover:to-teal-400/20 transition-all duration-500"></div>
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-slate-800/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-cyan-700/30">
                    <Pencil className="w-16 h-16 text-cyan-400" />
                  </div>
                  <p className="text-cyan-300 text-lg font-medium">
                    Interactive Drawing Canvas
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-400/40 rounded-full animate-bounce"></div>
                <div
                  className="absolute top-12 right-8 w-6 h-6 bg-teal-400/40 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-12 w-4 h-4 bg-cyan-300/40 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-4 right-4 w-10 h-10 bg-teal-300/40 rounded-full animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-cyan-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Drawing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of players in the most entertaining drawing game
            online!
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-black text-lg font-semibold rounded-xl hover:from-cyan-400 hover:to-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
            <Zap className="w-6 h-6 mr-2 group-hover:animate-bounce" />
            Play Now - It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <Pencil className="w-5 h-5 text-black" />
                </div>
                <span className="text-2xl font-bold text-white">Skribble</span>
              </div>
              <p className="text-gray-400 max-w-md">
                The ultimate multiplayer drawing game that brings creativity and
                fun together. Draw, guess, and win with friends from around the
                world!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group border border-cyan-800/30"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group border border-cyan-800/30"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group border border-cyan-800/30"
                >
                  <Shield className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Skribble Game. All rights reserved. Made with ❤️ for
              creative minds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
