// //........................................1..................................................................
// function createObject(name) {
    
//     let obj = {
//         name: name,
      
//         setter: function() {
//             console.log(this.name + " in js");
//         }
//     };
    
//     return obj;
// }


// let person = createObject("Utkarsh");
// person.setter(); 
// //.........................................................2.....................................................


// function deleteRollNo(obj) {
   
//     delete obj.rollno;
    
   
//     if (!('rollno' in obj)) {
//         console.log("True in js");
//     } else {
//         console.log("False");
//     }
// }

// let name = "Utkarsh";
// let rollno = 129;
// let student = {
//     name: name,
//     rollno: rollno
// };

// deleteRollNo(student);  



// //...................................................3....................................................

// function checkSalary(obj) {
   
//     if (obj.salary > 500000) {
//         console.log("Dream");
//     } else {
//         console.log("NotDream");
//     }
// }


// let studentPackage = {
//     salary: 100000 
// };

// checkSalary(studentPackage);  
// //.................................................4.........................................................
function ObjectNotEmpty(obj) {
    
    if (Object.keys(obj).length === 0) {
        return false; 
    } else {
        return true; 
    }
}


const emptyObject = {};
console.log(ObjectNotEmpty(emptyObject)); 
// //................................................5.............................................................

// function mergeObjects(obj1, obj2) {
   
//     return { ...obj1, ...obj2 };
// }


// let obj1 = { name: "Utkarsh", id: 129 };  
// let obj2 = { state: "Haryana", code: 121009 }; 

// let mergedObject = mergeObjects(obj1, obj2);

// console.log(mergedObject.name);
// console.log(mergedObject.id);
// console.log(mergedObject.state);
// console.log(mergedObject.code);

// //..........................................6.................................................


// function objectMultiplier(obj, N) {
//     // Multiply the 'id' and 'houseno' properties by the digit N
//     obj.id *= N;
//     obj.houseno *= N;
// }

// // Example usage:
// let N = 2;  // Multiplier
// let obj = { id: 12, houseno: 146 };  // Initial object

// objectMultiplier(obj, N);

// // The object now has:
// // obj.id = 24
// // obj.houseno = 292

// //..........................................7..........................................
// function Check(Obj) {
   
//     return Obj.p1 + Obj.p2 + Obj.p3;
// }

// let Obj = { p1: 1, p2: 2, p3: 3 }; 
// let result = Check(Obj); 
// console.log(result); 
// //...............................................8...........................................

function CheckObjectEquality(obj, new_name, new_id) {
   
    if (obj.name === new_name && obj.id === new_id) {
        return "true";
    } else {
        return "false";
    }
}

let obj = { name: "Utkarsh", id: 2 };
let new_name = "Prepbytes";
let new_id = 3;

let result = CheckObjectEquality(obj, new_name, new_id);
console.log(result); 



