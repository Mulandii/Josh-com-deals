import React, { useState } from 'react';
import { PackageCard } from '@/components/PackageCard';
import { Cart } from '@/components/Cart';
import { Package, packages } from '@/types/package';
import { ShoppingCart, Phone } from 'lucide-react';

const Index = () => {
  const [cart, setCart] = useState<Package[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (pkg: Package) => setCart([...cart, pkg]);
  const removeFromCart = (id: string) =>
    setCart(cart.filter((_, index) => `${cart[index].id}-${index}` !== id));
  const clearCart = () => setCart([]);

  const categories = [
    { id: 'data-repeatable', title: 'Repeatable Data Offers', subtitle: 'Buy as many times as you want', icon: '🔄' },
    { id: 'minutes', title: 'Voice Minutes', subtitle: 'Airtime packages', icon: '📞' },
    { id: 'data-daily', title: 'Daily Data Bundles', subtitle: 'One offer per day', icon: '📱' },
    { id: 'sms', title: 'SMS Packages', subtitle: 'Text message bundles', icon: '💬' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Josh Comm</h2>
              <p className="text-sm text-gray-600">Affordable Deals</p>
            </div>
          </div>
          <button onClick={() => setIsCartOpen(true)} className="relative bg-blue-600 text-white p-3 rounded-lg">
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Josh Comm <span className="text-blue-600">Deals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our affordable data, minutes, and SMS packages. Pay exact amount to TILL 8498618
          </p>
          <div className="mt-6 inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2">
            <p className="text-yellow-800 font-semibold">TILL: 8498618 (Josh Comm)</p>
          </div>
        </div>

        <div className="space-y-12">
          {categories.map(category => {
            const categoryPackages = packages.filter(pkg => pkg.category === category.id);
            return (
              <section key={category.id} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryPackages.map(pkg => (
                    <PackageCard key={pkg.id} package={pkg} onAddToCart={addToCart} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Josh Comm Deals</h3>
          <p className="text-gray-400">Affordable data, minutes, and SMS packages</p>
          <div className="mt-4 text-sm text-gray-400">
            Pay exact amount to TILL 8498618 (Josh Comm) • Support: 0795414740
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
