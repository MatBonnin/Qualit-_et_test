# TP - Mathématiques pour enfants : les tests unitaires

## Objectif

Le but de ce TP est de vous familiariser avec les tests unitaires. Nous utiliserons le langage JS / TS. Vous allez devoir écrire des tests pour des fonctions mathématiques simples. L'objectif est de mettre en place une approche TDD (Test Driven Development).

## Prérequis

- Créer un projet vite  
```bash
npm init vite@latest
Vanilla
Typescript
```

- Installer le framework de test vitest  
```bash
npm install -D vitest
```

- Ajouter le script dans le fichier `package.json`  
```json
"scripts": {
  "test": "vitest"
}
```

- Créer un fichier `sum.ts` dans le dossier `src/modules`  
```typescript
export function sumSmallNumbers(a,b){
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
};

export function sum(numA: number, numB: number){
    return sumSmallNumbers(numA, numB);
};
```

- Créer un fichier `sum.test.ts` dans le dossier `src/__tests__`  
```typescript
import { sumSmallNumbers } from '../modules/sum';
import { expect, describe, it } from 'vitest';

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
```

- Lancer les tests  
```bash
npm run test
```

## Consignes

1 - Créer une fonction 'addition' qui prend en paramètre deux nombres et qui retourne la somme de ces deux nombres.
Les nombres doivent être positifs peuvent être > 10. Si ce n'est pas le cas, la fonction doit retourner une erreur.

2 - Créer un autre fichier pour gérer la multiplication de deux nombres. Les nombres peuvent être négatifs.

3 - Faites de même pour les puissances.

4 - Créer une fonction de soustraction à partir de la fonction suivante :
```typescript
export function smallNumberSubstraction(a: number, b: number) {
  if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
  }

  const result = a - b;

  if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
  }

  return result;
}

export function substraction(a: number, b: number) {
  return smallNumberSubstraction(a, b);
}
```

5 - Créer une fonction de division à partir des fonctions précédentes. Retourner le modulo et la division entière.
