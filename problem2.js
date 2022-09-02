// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const person = {
    name: 'sadia',
    age: 23,
    subject: {
        name1: 'Math',
        marks1: 90
    },
    marks: [70, 85],
    fullName: function () {
        return `My name is ${this.name}.My age ${this.age}.My science marks is ${this.marks[0]}`

    }

}

const temp = `My subjects are ${person.subject.name1}. My second marks is ${person.marks[1]}.My Age is ${person.age}`
console.log(temp);