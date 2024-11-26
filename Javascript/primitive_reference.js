// Bagian 1: Primitive Value
let x = 100;
let y = x; // Salin nilai x ke y
y = 200; // Ubah y
console.log("x:", x); // Output: 100
console.log("y:", y); // Output: 200

// Bagian 2: Reference Value
let obj1 = { nilai: 50 };
let obj2 = obj1; // Salin referensi obj1 ke obj2
obj2.nilai = 100; // Ubah nilai di obj2
console.log("obj1:", obj1); // Output: { nilai: 100 }
console.log("obj2:", obj2); // Output: { nilai: 100 }
