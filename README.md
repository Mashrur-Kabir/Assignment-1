# **ব্লগ**


## **২ নম্বর প্রশ্নের উত্তর:**

---
একটি অবজেক্টে মূলত একটি **কী** ও একটি **মান** থাকে। TypeScript এ, `keyof` একটি অবজেক্ট টাইপের সব কী-গুলোকে একটি ইউনিয়ন টাইপ হিসেবে ফেরত দেয়। মানে, অবজেক্টের কীগুলোকে তখন টাইপ হিসেবে ব্যবহার করা যায়। এছাড়া, যখন আমরা কোনো ফাংশন লিখি, তখন `keyof` নিশ্চিত করতে পারে যে প্রপার্টির নাম সঠিক কিনা।

---

### **উদাহরণ:**

```ts
type Product = {
    id: number;
    title: string;
    price: number;
};

const product: Product = {
    id: 101,
    title: "Wireless Mouse",
    price: 899,
};

const getProductProperty = (obj: Product, key: keyof Product) => {
    return obj[key];
};

const result1 = getProductProperty(product, "price");   // বৈধ
const result2 = getProductProperty(product, "title");   // বৈধ

const result3 = getProductProperty(product, "color");  // ভুল, কারণ ‘color’ নামে কোনো কী নেই

console.log(result1, result2);
```


## **৫ নম্বর প্রশ্নের উত্তর:**

---
## **Union Type**

Union Type মানে একটি ভেরিয়েবল একাধিক টাইপের মধ্যে যেকোনো একটি নিতে পারে।

---

### **উদাহরণ:**

```ts
type Alphanumeric = number | string;

let value1: Alphanumeric = "Next level"; // বৈধ
let value2: Alphanumeric = 6;            // বৈধ
```
---
## **Intersection Type**

Intersection Type: অনেকগুলো টাইপ একসাথে নিয়ে একটি নতুন টাইপ তৈরি করে।

---

### **উদাহরণ:**

```ts
type Person = {
    name: string;
}

type Driver = {
    carBrand: string;
}

type Racer = Person & Driver;

const professionalRacer: Racer = {
    name: "Mashrur",
    carBrand: "Nissan",
};
```
---