export default function TestLayout() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Layout Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Card 1</h2>
            <p className="text-gray-600">This is a test card to check if Tailwind utilities are working.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Card 2</h2>
            <p className="text-gray-600">Another test card to verify layout functionality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Card 3</h2>
            <p className="text-gray-600">Third test card for layout testing.</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-500 text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Container Test</h3>
          <p>This should be centered and have proper max-width if the container class is working.</p>
        </div>
      </div>
    </div>
  );
} 