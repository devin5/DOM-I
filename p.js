const customers = [
  { name: "betsy", adress: "182 crawfordlane", credits: 800 },
  { name: "jimmy", adress: "72 hello ave", credits: 200 },
  { name: "dorothy", adress: "12 luoislane", credits: 100 },
  { name: "lilly", adress: "1 easterlane", credits: 400 },
  { name: "betsy", adress: "182 crawfordlane", credits: 800 },
  { name: "betsy", adress: "182 crawfordlane", credits: 800 }
];

// const newObj = [];

// customers.forEachewObj((item, index, array) => {
//   newObj.push(item);
// });

// const newCustomers = customers.map((item, index, array) => {
//   item.credits += 200;
//   return item;

//     return { ...item, credits: item.credits + 200 };
// });

// console.log(newCustomers);

function largestSwap(num) {
  if (
    num >=
    parseInt(
      num
        .toString()
        .split("")
        .reverse()
        .join()
    )
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(largestSwap(37));
