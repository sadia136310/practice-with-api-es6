// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const person = {
    name: 'sadia',
    age: 23,
    family: {
        father: 'nazrul',
        mother: 'Irin Sultana',
        brother: 'saim'
    }

}

const { name } = person;
// const { father, mother, brother } = family
// console.log(mother);

const numbers = [20, 7, 9, 50, 62, 16];
const [, balance] = numbers;
// const balance = num;
console.log(balance);