import React, { useState } from 'react';
import { X, Trash2, CreditCard } from 'lucide-react';
import { Package } from '@/types/package';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Package[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const Cart = ({ isOpen, onClose, items, onRemoveItem, onClearCart }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handlePurchase = async () => {
    if (!phone || phone.length !== 10 || !phone.startsWith('07')) {
      setStatus('Enter a valid Safaricom number (07XXXXXXXX)');
      return;
    }

    if (items.length === 0) {
      setStatus('Cart is empty.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/stk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          package: items.map(i => i.name).join(', '),
          amount: total
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Payment failed.');

      setStatus('✅ Payment initiated! Check your phone.');
      onClearCart(); // Optional: clear cart after success
    } catch (err) {
      setStatus(`❌ ${err instanceof Error ? err.message : 'Payment failed'}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">Code: {item.code}</p>
                  <p className="text-sm text-gray-600">{item.duration}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-900">KSh {item.price}</span>
                  <button
                    onClick={() => onRemoveItem(`${item.id}-${index}`)}
                    className="p-1 hover:bg-red-100 rounded text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-blue-600">KSh {total}</span>
            </div>

            <input
              type="tel"
              placeholder="Enter Safaricom number e.g. 0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex space-x-3">
              <button
                onClick={onClearCart}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={handlePurchase}
                disabled={loading}
                className={`flex-1 ${
                  loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2`}
              >
                <CreditCard className="w-5 h-5" />
                <span>{loading ? 'Processing...' : 'Purchase'}</span>
              </button>
            </div>

            {status && (
              <div className="text-sm text-center text-gray-700 font-medium">{status}</div>
            )}

            <div className="text-xs text-gray-500 text-center">
              Pay exact amount to TILL 8498618 (Josh Comm)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
