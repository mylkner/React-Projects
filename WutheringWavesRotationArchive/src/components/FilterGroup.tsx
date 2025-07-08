import type { Dispatch, SetStateAction } from "react";

interface FilterGroupProps<T> {
    values: T[];
    selected: T[];
    setSelected: Dispatch<SetStateAction<T[]>>;
    imgPathMaker: (value: T) => string;
}

const FilterGroup = <T,>({
    values,
    selected,
    setSelected,
    imgPathMaker,
}: FilterGroupProps<T>) => {
    const handleClick = (item: T) => {
        setSelected((prev: T[]) =>
            prev.includes(item)
                ? prev.filter((f) => f !== item)
                : [...prev, item]
        );
    };

    return (
        <div className="flex gap-2">
            {values.map((item) => (
                <div
                    key={String(item)}
                    className={`${
                        selected.includes(item) && "bg-neutral-600"
                    } border border-white rounded p-1 cursor-pointer`}
                    onClick={() => handleClick(item)}
                >
                    <img
                        src={imgPathMaker(item)}
                        className="h-[50px] w-[50px]"
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterGroup;
