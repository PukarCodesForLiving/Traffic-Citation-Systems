import React from 'react';
import { useForm } from 'react-hook-form';
import { Citation } from '../types';
import { X } from 'lucide-react';

interface CitationFormProps {
  onSubmit: (data: Partial<Citation>) => void;
  onClose: () => void;
  initialData?: Partial<Citation>;
}

export default function CitationForm({ onSubmit, onClose, initialData }: CitationFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">
          {initialData ? 'Edit Citation' : 'New Citation'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              {...register('type', { required: 'Citation type is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select type...</option>
              <option value="PARKING">Parking</option>
              <option value="MOVING">Moving</option>
              <option value="WARNING">Warning</option>
              <option value="FIX_IT">Fix-it</option>
            </select>
            {errors.type && (
              <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Violation Code
            </label>
            <input
              type="text"
              {...register('violationCode', { required: 'Violation code is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.violationCode && (
              <p className="mt-1 text-sm text-red-600">{errors.violationCode.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fine Amount</label>
            <input
              type="number"
              {...register('fine', { required: 'Fine amount is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.fine && (
              <p className="mt-1 text-sm text-red-600">{errors.fine.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              {...register('status', { required: 'Status is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select status...</option>
              <option value="PENDING">Pending</option>
              <option value="PAID">Paid</option>
              <option value="TRAFFIC_SCHOOL">Traffic School</option>
              <option value="WARRANT_ISSUED">Warrant Issued</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            >
              {initialData ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}