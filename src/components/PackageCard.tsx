import React from 'react';
import { Package } from '@/types/package';
import { Clock, Repeat } from 'lucide-react';

interface PackageCardProps {
  package: Package;
  onAddToCart: (pkg: Package) => void;
}

export const PackageCard = ({ package: pkg, onAddToCart }: PackageCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data-repeatable':
        return 'bg-green-500';
      case 'minutes':
        return 'bg-blue-500';
      case 'data-daily':
        return 'bg-purple-500';
      case 'sms':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'data-repeatable':
        return 'bg-green-50 border-green-200';
      case 'minutes':
        return 'bg-blue-50 border-blue-200';
      case 'data-daily':
        return 'bg-purple-50 border-purple-200';
      case 'sms':
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`rounded-xl border-2 ${getCategoryBg(pkg.category)} p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
          <p className="text-sm text-gray-600">{pkg.description}</p>
        </div>
        {pkg.isRepeatable && (
          <div className="flex-shrink-0">
            <Repeat className="w-5 h-5 text-green-600" />
          </div>
        )}
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Clock className="w-4 h-4 mr-1" />
        <span>{pkg.duration}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900">KSh {pkg.price}</div>
          <div className="text-xs text-gray-500">Code: {pkg.code}</div>
        </div>

        <button
          onClick={() => onAddToCart(pkg)}
          className={`${getCategoryColor(pkg.category)} hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all duration-200 font-semibold`}
        >
          Add to Cart
        </button>
      </div>

      {pkg.category === 'data-daily' && (
        <div className="mt-3 text-xs text-amber-600 bg-amber-50 p-2 rounded">
          ⚠️ One offer per day
        </div>
      )}
    </div>
  );
};
