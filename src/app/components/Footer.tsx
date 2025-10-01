'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '../utils/Logo';
import { FaCopyright, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo />
          </Link>

          <p className="mt-4 text-sm text-slate-600">
            Master SQL. One query at a time.
          </p>
        </div>

        {/* Center: Links */}
        <div>
          <h4 className="font-medium text-slate-900 mb-3">Links</h4>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/" className="hover:text-[#00FF7A]  text-slate-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/playground"
                className="hover:text-[#00FF7A]  text-slate-700"
              >
                Playground
              </Link>
            </li>
            <li>
              <Link
                href="/questions"
                className="hover:text-[#00FF7A]  text-slate-700"
              >
                Question Bank
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-[#00FF7A]  text-slate-700"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact & social */}
        <div>
          <h4 className="font-medium text-slate-900 mb-3">Connect</h4>
          <p className="text-sm text-slate-700">
            shravan.bobade.tech@gmail.com
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-slate-100 text-slate-800"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-slate-100 text-slate-800"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md hover:bg-slate-100 text-slate-800"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-10 text-center text-sm text-slate-800">
        <FaCopyright />
        <p>2025 QueryQuest. All rights reserved.</p>
      </div>
    </div>
  );
}
