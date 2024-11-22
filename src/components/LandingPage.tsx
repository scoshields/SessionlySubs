import React from 'react';
import { Brain, Check, Calendar, Users, FileText, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="glass fixed w-full z-50 border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold gradient-text">SessionPro</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="btn-secondary"
              >
                Log in
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="btn"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-8">
              <Brain className="h-16 w-16 text-indigo-600 animate-bounce-slow" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold gradient-text tracking-tight mb-6">
              SessionPro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
              Streamline your therapy practice with our comprehensive practice management solution
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate('/signup')}
                className="btn px-8 py-3 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
              Everything you need to manage your practice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 hover-lift">
              <Calendar className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Scheduling
              </h3>
              <p className="text-gray-600">
                Effortlessly manage appointments with our intuitive calendar system
              </p>
            </div>
            <div className="card p-8 hover-lift">
              <Users className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Client Management
              </h3>
              <p className="text-gray-600">
                Keep track of client information, history, and progress in one place
              </p>
            </div>
            <div className="card p-8 hover-lift">
              <FileText className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Session Notes
              </h3>
              <p className="text-gray-600">
                Create and manage session notes with our secure documentation system
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
              Why Choose SessionPro?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl hover-lift">
              <Star className="h-10 w-10 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                User-Friendly
              </h3>
              <p className="text-gray-600">
                Intuitive interface designed for therapists, by therapists
              </p>
            </div>
            <div className="glass p-8 rounded-xl hover-lift">
              <Shield className="h-10 w-10 text-green-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Secure & Compliant
              </h3>
              <p className="text-gray-600">
                Built with privacy and security at its core
              </p>
            </div>
            <div className="glass p-8 rounded-xl hover-lift">
              <Zap className="h-10 w-10 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Time-Saving
              </h3>
              <p className="text-gray-600">
                Automate routine tasks and focus on what matters most
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to streamline your practice?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-8">
              <button
                onClick={() => navigate('/signup')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 hover:scale-105 transform transition-all duration-200"
              >
                Get started for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};