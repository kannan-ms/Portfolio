'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AdminMessages() {
  const [threads, setThreads] = useState<any[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [reply, setReply] = useState('');
  const [replySubject, setReplySubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('admin-auth') !== 'true') {
      router.push('/admin');
    } else {
      fetchThreads();
    }
  }, []);

  const fetchThreads = async () => {
    setLoading(true);
    const res = await fetch('/api/messages');
    const data = await res.json();
    setThreads(data);
    setLoading(false);
  };

  // Helper function to format time like WhatsApp
  const formatMessageTime = (date: string | Date) => {
    const msgDate = new Date(date);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const msgDateOnly = new Date(msgDate.getFullYear(), msgDate.getMonth(), msgDate.getDate());
    
    const timeStr = msgDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (msgDateOnly.getTime() === today.getTime()) {
      return `Today ${timeStr}`;
    } else if (msgDateOnly.getTime() === yesterday.getTime()) {
      return `Yesterday ${timeStr}`;
    } else {
      return `${msgDate.toLocaleDateString()} ${timeStr}`;
    }
  };

  const handleReply = async (email: string) => {
    if (!reply || !replySubject) return;
    setLoading(true);
    setNotification(null);
    
    try {
      // Send email
      const emailResponse = await fetch('/api/messages/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: replySubject,
          text: reply,
        }),
      });
      
      // Store reply in database
      const storeResponse = await fetch('/api/messages/store-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: 'Admin',
          message: reply,
          subject: replySubject,
          isAdmin: true,
        }),
      });
      
      if (emailResponse.ok && storeResponse.ok) {
        // Update local state
        const updatedThreads = threads.map(thread => {
          if (thread.email === email) {
            return {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  name: 'Admin',
                  message: reply,
                  date: new Date().toISOString(),
                  subject: replySubject,
                  isAdmin: true,
                },
              ],
            };
          }
          return thread;
        });
        setThreads(updatedThreads);
        setReply('');
        setReplySubject('');
        setNotification({ type: 'success', message: 'Reply sent successfully!' });
      } else {
        setNotification({ type: 'error', message: 'Failed to send reply. Please try again.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'An error occurred while sending reply.' });
    } finally {
      setLoading(false);
      // Auto-hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Admin Messages</h2>
          </div>
          <button onClick={handleLogout} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-300">Logout</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Senders</h3>
            <ul className="bg-blue-50 rounded-xl shadow p-4">
              {threads.map(thread => (
                <li key={thread.email} className={`p-3 cursor-pointer rounded-xl mb-2 transition-all duration-200 border ${selectedEmail === thread.email ? 'bg-blue-100 border-blue-400' : 'border-transparent'}`}
                    onClick={() => setSelectedEmail(thread.email)}>
                  <span className="font-medium text-blue-700">{thread.name}</span> <br />
                  <span className="text-sm text-gray-500">{thread.email}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            {selectedEmail ? (
              <div className="bg-blue-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Conversation</h3>
                <div className="mb-6 max-h-96 overflow-y-auto">
                  {threads.find(t => t.email === selectedEmail)?.messages.map((msg: any, idx: number) => (
                    <div key={idx} className={`mb-4 p-3 rounded-lg ${msg.isAdmin ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'}`}>
                      <div className={`font-semibold ${msg.isAdmin ? 'text-blue-700' : 'text-indigo-700'}`}>{msg.name}</div>
                      {msg.subject && (
                        <div className="text-xs text-blue-500 font-semibold mb-1">Subject: {msg.subject}</div>
                      )}
                      <div className="text-gray-700">{msg.message}</div>
                      <div className="text-xs text-gray-400 mt-1">{formatMessageTime(msg.date)}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <input
                    type="text"
                    value={replySubject}
                    onChange={e => setReplySubject(e.target.value)}
                    placeholder="Subject"
                    className="flex-1 px-3 py-2 border rounded-lg mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    value={reply}
                    onChange={e => setReply(e.target.value)}
                    placeholder="Type your reply..."
                    className="flex-1 px-3 py-2 border rounded-lg"
                  />
                  <button
                    onClick={() => handleReply(selectedEmail)}
                    className={`px-6 py-2 rounded-lg font-semibold shadow transition-all duration-300 ${
                      loading || !reply.trim() || !replySubject.trim()
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    } text-white`}
                    disabled={loading || !reply.trim() || !replySubject.trim()}
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Select a sender to view messages.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
