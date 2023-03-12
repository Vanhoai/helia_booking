export const isNumber = (x: any): x is number => typeof x === 'number';

export const isString = (x: any): x is string => typeof x === 'string';

export const isUndefined = (x: any): x is undefined => x === undefined;
