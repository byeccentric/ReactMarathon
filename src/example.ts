// Тип функции конкатенирующей 2 строки
type TConcatType = (string1: string, string2: string) => string;
const concat: TConcatType = (string1, string2) => string1 + string2;

//Интерфейсы
interface IWithData {
    howIDoIt: string;
    simeArray: (string | number)[];
}

interface IMyHoteTask extends IWithData {
    withData: IWithData[];
}

const MyHometask: IMyHoteTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Generic для метода reduce
interface IMyArray<T> {
    [n: number]: T;
    reduce<U>(callbackFn: (accumulator: U, currentValue: T, index?: number) => U, defaultValue: U): U
}
const myArr: IMyArray<number> = [1, 2, 3, 4];
myArr.reduce((acc, value) => `${acc}, ${value}`, '');

