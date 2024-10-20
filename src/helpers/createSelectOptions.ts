import { OptionSelect } from "../types/types";

export const createSelectOptions = (options: string[]): OptionSelect[] => {
    const result = options.map(item => {
        return {
            value: item,
            label: item,
        };
    });
    return result;
};