type PrimitiveValue = number | string | boolean
const formatValue = (value: PrimitiveValue): PrimitiveValue => {
    if(typeof value === 'number'){
        return value*10
    }else if(typeof value === 'string'){
        return value.toUpperCase()
    }else if(typeof value === 'boolean'){
        return !value; 
    }else{
        return -1
    }
}


type StringArray<T> = Array<T> | string
const getLength = <T>(value: StringArray<T>): number => {
    if(typeof value === 'string'){
        return value.length
    }else if (Array.isArray(value)){
        return value.length
    }else{
        return -1
    }
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type Item = {
    title: string;
    rating: number;
}
const filterByRating = (arr: Item[]): Item[] => {

    for(let i = 0; i < arr.length; i++){
        if(arr[i].rating < 0 || arr[i].rating > 5){
            throw new Error("Rating cannot be more than 5")
        }
    }
    return arr.filter((item) => item.rating >= 4)
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive === true)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (obj: Book) => {
    console.log(`Title: ${obj.title}, Author: ${obj.author}, Published: ${obj.publishedYear}, Available: ${obj.isAvailable ? 'Yes' : 'No'}`)
}


type AlphanumericArr = Array<string | number>
const getUniqueValues = (arr1: AlphanumericArr, arr2: AlphanumericArr): AlphanumericArr => {
    let temp: AlphanumericArr = [];
    let tempCurrent = 0;

    const doesExist = (val: string | number): boolean => {
        for(let i = 0; i < tempCurrent; i++){
            if(temp[i] === val){
                return true
            }
        }
        return false
    }

    for(let i = 0; i < arr1.length; i++){
        if(!doesExist(arr1[i])){
            temp[tempCurrent] = arr1[i]
            tempCurrent++
        }
    }

    for(let j = 0; j < arr2.length; j++){
        if(!doesExist(arr2[j])){
            temp[tempCurrent] = arr2[j]
            tempCurrent++
        }
    }
    return temp;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {

    return products.reduce((totalPrice, prod) => {
        const {price, quantity, discount} = prod
        const disc = discount ?? 0;
        return totalPrice + (price * (1-disc/100)) * quantity
    }, 0)
   
}























