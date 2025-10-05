'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import SqlIcon from '../icons/SqlIcon';
import QuestionBankIcon from '../icons/QuestionBankIcon';
import ProgressTrackingIcon from '../icons/ProgressTrackingIcon';
import HeroPlaceholder from '../icons/HeroPlaceHolder';

type Feature = {
  title: string;
  icon: string | React.ComponentType;
};

const features: Feature[] = [
  {
    title: 'Real-Time SQL Execution',
    icon: SqlIcon,
  },
  {
    title: 'Question Bank with Filters',
    icon: QuestionBankIcon,
  },
  {
    title: 'Progress Tracking',
    icon: ProgressTrackingIcon,
  },
];

const HeroBlock = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    } catch (err) {
      setError(err as Error);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Master SQL. One query at a time.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            LeetCode-style platform for SQL practice with real-time query
            execution on realistic mock databases
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            <Link href={isLoggedIn ? '/playground' : '/signup'}>
              <button
                className="px-8 py-3 text-lg font-semibold rounded-lg shadow-md bg-green-500 text-white hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? <FaSpinner /> : 'Get Started'}
              </button>
            </Link>

            {!isLoggedIn && (
              <Link href="/login">
                <button
                  className="px-8 py-3 text-lg font-semibold rounded-lg shadow-md border-2 border-green-500 text-green-700 bg-white hover:bg-green-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  {isLoading ? <FaSpinner /> : 'Log In'}
                </button>
              </Link>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <p className="mt-4 text-sm text-red-600">Error: {error.message}</p>
          )}
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <HeroPlaceholder className="w-full max-w-md aspect-square text-[#00FF7A]" />
        </div>
      </div>

      {/* Feature Blocks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center py-2 space-y-4"
            >
              <div className="text-3xl m-0">
                {typeof feature.icon === 'string' ? (
                  feature.icon
                ) : (
                  <feature.icon />
                )}
              </div>

              <h3 className="text-[22px] font-semibold text-slate-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroBlock;
