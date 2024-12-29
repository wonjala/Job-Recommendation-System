const ResponsiveTable = ({ data = [], columns = [], title = "" }) => {
  // Early return with a message if no data or columns
  if (!data?.length || !columns?.length) {
    return (
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {title && (
          <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h4>
        )}
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          {!columns?.length ? "No columns defined" : "No data available"}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {title && (
        <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
      )}

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="whitespace-nowrap px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                      >
                        {column.cell ? column.cell(row) : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example of how to use the component
const ExampleUsage = () => {
  // Sample data
  const sampleData = [
    {
      logo: "/path/to/logo1.svg",
      name: "Google",
      visitors: 3.5,
      revenues: "5,768",
      sales: 590,
      conversion: 4.8,
    },
    {
      logo: "/path/to/logo2.svg",
      name: "Twitter",
      visitors: 2.2,
      revenues: "4,635",
      sales: 467,
      conversion: 4.3,
    },
  ];

  // Column definitions
  const sampleColumns = [
    {
      header: "Source",
      accessor: "name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.logo} alt={row.name} className="h-8 w-8" />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      header: "Visitors",
      accessor: "visitors",
      cell: (row) => `${row.visitors}K`,
    },
    {
      header: "Revenues",
      accessor: "revenues",
      cell: (row) => <span className="text-green-500">${row.revenues}</span>,
    },
    {
      header: "Sales",
      accessor: "sales",
    },
    {
      header: "Conversion",
      accessor: "conversion",
      cell: (row) => <span className="text-blue-500">{row.conversion}%</span>,
    },
  ];

  return (
    <ResponsiveTable
      data={sampleData}
      columns={sampleColumns}
      title="Top Channels"
    />
  );
};

export default ResponsiveTable;
