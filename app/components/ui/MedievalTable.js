'use client';

export default function MedievalTable({ headers, data, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-lg border-2 border-uo-darkwood/20 dark:border-uo-gold/20 ${className}`}>
      <div className="relative">
        {/* Cantos decorativos */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-uo-crimson/30 dark:border-uo-gold/30 -ml-px -mt-px"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-uo-crimson/30 dark:border-uo-gold/30 -mr-px -mt-px"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-uo-crimson/30 dark:border-uo-gold/30 -ml-px -mb-px"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-uo-crimson/30 dark:border-uo-gold/30 -mr-px -mb-px"></div>
        
        <table className="w-full">
          <thead className="bg-uo-crimson/10 dark:bg-uo-gold/10">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="px-4 py-3 text-left font-medieval text-uo-crimson dark:text-uo-gold border-b border-uo-darkwood/10 dark:border-uo-gold/10"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={`border-b border-uo-darkwood/10 dark:border-uo-gold/10 ${rowIndex % 2 === 0 ? 'bg-white/50 dark:bg-gray-900/50' : 'bg-white/20 dark:bg-gray-900/20'} hover:bg-uo-crimson/5 dark:hover:bg-uo-gold/5 transition-colors`}
              >
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className="px-4 py-3 text-uo-darkwood/80 dark:text-uo-mist/80"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 