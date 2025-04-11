import { addition, sumSmallNumbers } from '../modules/sum';
import { describe, expect, it } from 'vitest';

describe('sumSmallNumbers', () => {
    it('should return 2 when 1 + 1', () => {
        expect(sumSmallNumbers(1, 1)).toBe(2);
    });

    it('should throw an error when a is negative', () => {
        expect(() => sumSmallNumbers(-1, 1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when b is negative', () => {
        expect(() => sumSmallNumbers(1, -1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when a is greater than 9', () => {
        expect(() => sumSmallNumbers(10, 1)).toThrow('Les nombres doivent être inférieurs à 10');
    });

    it('should throw an error when b is greater than 9', () => {
        expect(() => sumSmallNumbers(1, 10)).toThrow('Les nombres doivent être inférieurs à 10');
    });
});

describe('addition - cas simples', () => {
    it('should return 2 when 1 + 1', () => {
        expect(addition(1, 1)).toBe(2);
    });

    it('should return 3 when 1 + 2', () => {
        expect(addition(1, 2)).toBe(3);
    });
});

describe('addition - cas avec nombres valant 0', () => {
    it('should return 0 when 0 + 0', () => {
        expect(addition(0, 0)).toBe(0);
    });

    it('should return the other number when 0 + 5', () => {
        expect(addition(0, 5)).toBe(5);
    });

    it('should return the other number when 5 + 0', () => {
        expect(addition(5, 0)).toBe(5);
    });
});

describe('addition - cas avec nombres négatifs', () => {
    it('should return -4 when -2 + -2', () => {
        expect(addition(-2, -2)).toBe(-4);
    });

    it('should return 3 when -2 + 5', () => {
        expect(addition(-2, 5)).toBe(3);
    });

    it('should return -3 when 5 + -8', () => {
        expect(addition(5, -8)).toBe(-3);
    });

    it('should return 0 when -5 + 5', () => {
        expect(addition(-5, 5)).toBe(0);
    });
});

describe('addition - cas avec retenue', () => {
    it('addition avec retenue', () => {
        expect(addition(9, 8)).toBe(17);
    });

    it('addition avec retenue et nombre supérieur à 9', () => {
        expect(addition(92, 74)).toBe(166);
    });
});

describe('addition - cas avec nombres supérieurs à 9', () => {
    it('addition avec deux nombres supérieurs à 9', () => {
        expect(addition(17, 12)).toBe(17);
    });

    it('addition avec premier nombre supérieur à 9', () => {
        expect(addition(10, 1)).toBe(11);
    });

    it('addition avec deuxième nombre supérieur à 9', () => {
        expect(addition(1, 10)).toBe(11);
    });
});

describe('addition - cas avec nombres à plusieurs chiffres', () => {
    it('addition avec un nombre à 3 chiffres', () => {
        expect(addition(100, 1)).toBe(101);
    });

    it('addition avec deux nombres à 3 chiffres', () => {
        expect(addition(100, 200)).toBe(300);
    });
});