interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number): void => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }

    onPageChange(newPage);
  };

  const generatePageNumbers = (): number[] => {
    const maxVisiblePages = 5;
    const middlePage = Math.floor(maxVisiblePages / 2);
    const startPage = Math.max(currentPage - middlePage, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const pageNumbers: number[] = generatePageNumbers();

  return (
    <div>
      <ul className="flex items-center justify-center gap-4 pb-8">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              data-active={pageNumber === currentPage}
              className="rounded-full bg-purple-400 px-4 py-2 font-bold text-gray-900 hover:bg-purple-300 data-[active=true]:bg-purple-300"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
