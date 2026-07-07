import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(page - 1)}
              className="rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
            />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              onClick={() => onPageChange(number)}
              isActive={page === number}
              className={`rounded-xl transition-all duration-200 ${
                page === number
                  ? "gradient-brand text-white shadow-md border-0 hover:opacity-90"
                  : "hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page !== pageNumbers.length && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => onPageChange(page + 1)}
              className="rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
