import { optionSelect } from "../types/types";

export const createSelectOptions = (options: string[]): optionSelect[] => {
    const result = options.map(item => {
        return {
            value: item,
            label: item,
        };
    });
    return result;
};