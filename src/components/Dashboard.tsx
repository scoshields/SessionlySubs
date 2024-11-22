import React, { useState } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Brain, LogOut, Home, Users, Calendar, FileText } from 'lucide-react';
import { ClientForm } from './ClientForm';
import { ClientList } from './ClientList';
import { ClientProfile } from './ClientProfile';
import { SessionCalendar } from './SessionCalendar';
import { TherapyNotes } from './TherapyNotes';
import { DashboardHome } from './DashboardHome';
import { useStore } from '../store';

const ClientProfileWrapper = () => {
  const { id } = useParams();
  const { clients, sessions, notes } = useStore();
  const navigate = useNavigate();
  const client = clients.find(c => c.id === id);

  if (!client) {
    return <Navigate to="/dashboard/clients" />;
  }

  return (
    <ClientProfile
      client={client}
      sessions={sessions.filter(s => s.client_id === id)}
      notes={notes.filter(n => n.client_id === id)}
      onBack={() => navigate('/dashboard/clients')}
      onAddSession={useStore.getState().addSession}
      onUpdateSession={useStore.getState().updateSession}
    />
  );
};

export const Dashboard: React.FC = () => {
  const [showNewClient, setShowNewClient] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { clients, sessions, notes, signOut } = useStore();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/clients', icon: Users, label: 'Clients' },
    { path: '/dashboard/schedule', icon: Calendar, label: 'Schedule' },
    { path: '/dashboard/notes', icon: FileText, label: 'Notes' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <nav className="glass fixed w-full z-50 border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold gradient-text">
                  SessionPro
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map(({ path, icon: Icon, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/dashboard'}
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        isActive
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`
                    }
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleSignOut}
                className="btn"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<DashboardHome clients={clients} sessions={sessions} notes={notes} />} />
            <Route 
              path="/clients" 
              element={
                <div className="space-y-8">
                  <ClientList 
                    clients={clients}
                    onSelectClient={(client) => navigate(`/dashboard/clients/${client.id}`)}
                  />
                  {showNewClient && (
                    <div className="glass p-6 rounded-xl">
                      <ClientForm onSubmit={async (data) => {
                        await useStore.getState().addClient(data);
                        setShowNewClient(false);
                      }} />
                    </div>
                  )}
                  {!showNewClient && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => setShowNewClient(true)}
                        className="btn"
                      >
                        Add Client
                      </button>
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/clients/:id" element={<ClientProfileWrapper />} />
            <Route 
              path="/schedule" 
              element={
                <SessionCalendar
                  sessions={sessions}
                  clients={clients}
                  onEditSession={(session) => {
                    navigate(`/dashboard/clients/${session.client_id}`);
                  }}
                />
              }
            />
            <Route 
              path="/notes" 
              element={
                <TherapyNotes
                  sessions={sessions}
                  clients={clients}
                  notes={notes}
                  onSubmit={useStore.getState().addNote}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};