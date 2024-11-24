import React, { useState } from 'react';
import { Citation } from '../types';
import CitationList from './CitationList';
import CitationForm from './CitationForm';
import { Plus } from 'lucide-react';

// Mock data for initial citations
const initialCitations: Citation[] = [
  {
    id: '1',
    type: 'MOVING',
    issuedAt: new Date('2024-03-15'),
    officerId: 'OFF123',
    violationCode: 'SPD001',
    description: 'Speeding - 20mph over limit',
    fine: 250.00,
    status: 'PENDING'
  },
  {
    id: '2',
    type: 'PARKING',
    issuedAt: new Date('2024-03-14'),
    officerId: 'OFF456',
    violationCode: 'PRK002',
    description: 'Expired meter',
    fine: 75.00,
    status: 'PAID'
  }
];

export default function CitationManager() {
  const [citations, setCitations] = useState<Citation[]>(initialCitations);
  const [showForm, setShowForm] = useState(false);
  const [editingCitation, setEditingCitation] = useState<Citation | null>(null);

  const handleSubmit = (data: Partial<Citation>) => {
    if (editingCitation) {
      // Update existing citation
      setCitations(citations.map(citation =>
        citation.id === editingCitation.id
          ? { ...citation, ...data }
          : citation
      ));
    } else {
      // Create new citation
      const newCitation: Citation = {
        ...data as Citation,
        id: Math.random().toString(36).substr(2, 9),
        issuedAt: new Date(),
        officerId: 'OFF789' // In a real app, this would come from the logged-in user
      };
      setCitations([...citations, newCitation]);
    }
    setShowForm(false);
    setEditingCitation(null);
  };

  const handleEdit = (citation: Citation) => {
    setEditingCitation(citation);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this citation?')) {
      setCitations(citations.filter(citation => citation.id !== id));
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Citations</h2>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Citation
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <CitationList
            citations={citations}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {showForm && (
          <CitationForm
            onSubmit={handleSubmit}
            onClose={() => {
              setShowForm(false);
              setEditingCitation(null);
            }}
            initialData={editingCitation || undefined}
          />
        )}
      </div>
    </div>
  );
}