type RealScoutWidgetProps = {
  priceMin: number;
  priceMax?: number;
  agentId?: string;
};

export default function RealScoutWidget({
  priceMin,
  priceMax = 1200000,
  agentId = 'QWdlbnQtMjI1MDUw',
}: RealScoutWidgetProps) {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">RealScout Widget</h3>
      <p className="text-indigo-700 mb-4">RealScout widget will be integrated here</p>
      <a
        href="/properties"
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
      >
        View Properties
      </a>
    </div>
  );
}
