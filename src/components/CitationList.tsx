import React from 'react';
import { format } from 'date-fns';
import { Citation } from '../types';
import { Edit, Trash2 } from 'lucide-react';

interface CitationListProps {
  citations: Citation[];
  onEdit: (citation: Citation) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  PAID: 'bg-green-100 text-green-800',
  TRAFFIC_SCHOOL: 'bg-blue-100 text-blue-800',
  WARRANT_ISSUED: 'bg-red-100 text-red-800'
};

export default function CitationList({ citations, onEdit, onDelete }: CitationListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Violation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fine
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {citations.map((citation) => (
            <tr key={citation.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(citation.issuedAt), 'MMM d, yyyy')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {citation.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{citation.violationCode}</div>
                <div className="text-sm text-gray-500">{citation.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${citation.fine.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[citation.status]}`}>
                  {citation.status.replace('_', ' ')}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-3">
                  <button
                    onClick={() => onEdit(citation)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(citation.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}