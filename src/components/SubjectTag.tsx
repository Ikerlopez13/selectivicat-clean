'use client';

import React from 'react';

interface SubjectTagProps {
  subject: string;
}

const subjectColors: Record<string, string> = {
  'Castellano': 'bg-orange-100 text-orange-800',
  'Català': 'bg-red-100 text-red-800',
  'Matemàtiques': 'bg-blue-100 text-blue-800',
  'Física': 'bg-purple-100 text-purple-800',
  'Química': 'bg-green-100 text-green-800',
  'Biologia': 'bg-emerald-100 text-emerald-800',
  'Història': 'bg-yellow-100 text-yellow-800',
  'Geografia': 'bg-brown-100 text-brown-800',
  'Filosofia': 'bg-gray-100 text-gray-800',
  'default': 'bg-gray-100 text-gray-800'
};

export default function SubjectTag({ subject }: SubjectTagProps) {
  const colorClasses = subjectColors[subject] || subjectColors.default;
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses}`}>
      {subject}
    </span>
  );
} 