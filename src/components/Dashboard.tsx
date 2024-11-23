import React from 'react';
import { 
  Car, FileWarning, AlertTriangle, Calendar,
  TrendingUp, Users, FileText, Shield
} from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change }: {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-indigo-100">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${
        change.startsWith('+') ? 'text-green-600' : 'text-red-600'
      }`}>
        {change}
      </span>
      <span className="text-sm text-gray-500 ml-2">from last month</span>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={Car}
              title="Vehicle Queries"
              value="2,345"
              change="+5.36%"
            />
            <StatCard
              icon={FileWarning}
              title="Active Citations"
              value="1,234"
              change="-2.31%"
            />
            <StatCard
              icon={AlertTriangle}
              title="Active Warrants"
              value="89"
              change="+12.5%"
            />
            <StatCard
              icon={Calendar}
              title="Traffic School Sessions"
              value="15"
              change="+3.2%"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Citations</h3>
                <div className="mt-4">
                  <div className="flow-root">
                    <ul className="-my-5 divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <FileText className="h-6 w-6 text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                Speeding Violation #{item}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                Officer Johnson • 2h ago
                              </p>
                            </div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Active Warrants</h3>
                <div className="mt-4">
                  <div className="flow-root">
                    <ul className="-my-5 divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <Shield className="h-6 w-6 text-red-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                Warrant #{item}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                Unpaid Citations • 3 days old
                              </p>
                            </div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Active
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}