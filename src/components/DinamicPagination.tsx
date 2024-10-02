import { useState } from 'react';
import Image from 'next/image';
import strelka from '../../public/svg/strelka2.svg';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    setPage,
}) => {
    const [page, setpage] = useState<number>(currentPage);

    // Function to handle page change
    const handlePageChange = (pageNum: number) => {
        if (pageNum > 0 && pageNum <= totalPages) {
            setpage(pageNum);
            setPage(pageNum); // Callback to set the current page in the parent component
        }
    };

    // Function to render page numbers
    const renderPageNumbers = () => {
        return Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNum) => (
                <div
                    key={pageNum}
                    className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                        pageNum === page
                            ? 'text-[#2961B1] border-[#2961B1]'
                            : 'border-black border-opacity-10'
                    } cursor-pointer`}
                    onClick={() => handlePageChange(pageNum)}
                >
                    {pageNum}
                </div>
            )
        );
    };

    return (
        <div className="flex mb-[100px] justify-center">
            <div className="flex flex-row gap-5">
                <Image
                    src={strelka}
                    alt="strelka"
                    style={{ transform: 'rotate(180deg)' }}
                    className="cursor-pointer"
                    onClick={() => handlePageChange(page - 1)} // Previous page
                />
                <div className="flex flex-row gap-3">{renderPageNumbers()}</div>
                <Image
                    src={strelka}
                    alt="strelka"
                    className="cursor-pointer"
                    onClick={() => handlePageChange(page + 1)} // Next page
                />
            </div>
        </div>
    );
};

export default Pagination;
