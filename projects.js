//1-Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.
function either404(numbers) {
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0 && numbers[i + 1] == 0) {
      obj[0] = 1;
    }
    if (numbers[i] == 4 && numbers[i + 1] == 4) {
      obj[1] = 1;
    }
  }
  if (Object.keys(obj).length) return true;
  else return false;
}
console.log(either404([2, 8, 4, 4]));
//2-Given an array of integers arr and a target sum target, find all pairs of distinct integers that add up to the target sum. Return an array of arrays containing these pairs sorted in ascending order. If there are no such pairs, return an empty array.

//Important: Your result array(s) must have the same sorting as the test cases.
function findPairs(arr, target) {
  arr.sort();
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        temp.push([arr[i], arr[j]]);
      }
    }
  }

  return temp;
}
console.log(findPairs([3, 7, 8, 4, 5, 9], 12));
//3-Given is a number number. Return the product of the multiplacement of the individual numbers from 1 upwards.
function firstFactorial(number) {
  if (number == 1 || number == 0) return 1;
  return number * firstFactorial(number - 1);
}
console.log(firstFactorial(0));
//4-A string string is given. Return the number of the longest block. A block means a multiple occurrence of a letter in a row.
function longest(string) {
  const obj = {};
  if (string.length == 0) return 0;
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!obj[element]) {
      obj[element] = 1;
    } else obj[element]++;
  }
  const a = Object.values(obj);
  return Math.max(...a);
}

console.log(longest(""));
//5-A String string is given. Return the number of the word "Me" in this string. Count 'Me' only if none 'x' is in front of it.
function countMe(string) {
  if (string[0] + string[1] === "Me") {
    return 1;
  } else return 0;
}
console.log(countMe("Meishere"));
//6-Given is an array words with words. Return the longest word of the array. Return 'Foobar' if the two longest words have the same length.
function longestWord(words) {
  let numberLength = 0;
  let longWord = "";
  let longest = 0;
  for (let j = 0; j < words.length; j++) {
    if (longest <= words[j].length) {
      longest = words[j].length;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (numberLength == words[i].length && words[i].length == longest) {
      return "Foobar";
    }

    if (numberLength <= words[i].length) {
      numberLength = words[i].length;
      longWord = words[i];
    }
  }
  return longWord;
}
//console.log(longestWord(["This", "is", "a", "test"])); -> "foobar"
//console.log(longestWord(["welcome", "to", "JScodebox"])); -> "JScodebox"
//console.log(longestWord(["you", "are", "great"])); -> "great"
//console.log(longestWord(["you", "are","very", "beautiful"])); -> "beautiful"
console.log(longestWord(["This", "is", "a", "test"]));
console.log(longestWord(["welcome", "to", "JScodebox"]));
console.log(longestWord(["you", "are", "great"]));
console.log(longestWord(["you", "are", "very", "beautiful"]));
//7-A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.
function gHappy(string) {
  if (!string.length) return false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "g") {
      if (string[i + 1] !== "g") {
        return false;
      } else return true;
    }
  }
}
console.log(gHappy("garage of eggs"));
//8-A string minutes is given. Return a string with the converted time in the format hh:mm.
function timeConvert(minutes) {
  const h = "" + Math.floor(minutes / 60);
  const hh = h.length == 1 ? "0" + h.slice(-2) : "" + h;

  const m = ("0" + (minutes % 60)).slice(-2);
  return `${hh}:${m}`;
}
console.log(timeConvert(1000));
//9-timeConvert(34303)->'571:43'
function longestWord2(array) {
  const lenMap = {};
  let longest = array[0];
  let hasMoreLongest = false;

  for (let i = 1; i < array.length; i++) {
    const word = array[i];
    const wordLen = word.length;

    longest = wordLen > longest.length ? word : longest;
    if (longest.length in lenMap) {
      hasMoreLongest = true;
    }
    lenMap[longest.length] = true;
  }

  return hasMoreLongest ? "FooBar" : longest;
}

console.log(longestWord2(["welcome", "to", "JScodebox"]));
console.log(longestWord2(["This", "is", "a", "test"]));
console.log(longestWord2(["you", "are", "great"]));
console.log(longestWord2(["you", "are", "very", "beautiful"]));
//10-Given are two arrays inside and outside. Return true if all numbers present in inside array are also present in outside array.
function outsideIn(outside, inside) {
  if (inside.every((element) => outside.includes(element))) return true;
  else return false;
}
console.log(outsideIn([0, 1], [1]));
//11-The variables start and end are given. Return an array with the contents of the individual numbers. Replace all numbers divisible by three with "Fizz" and all numbers divisible by five with "Buzz". If a number is divisible by five and three replace it by "FizzBuzz".
function fizzBuzz(start, end) {
  const temp = [];
  for (start; start <= end; start++) {
    if (start % 3 == 0 && start % 5 == 0) temp.push("FizzBuzz");
    else if (start % 3 == 0) temp.push("Fizz");
    else if (start % 5 == 0) temp.push("Buzz");
    else temp.push(start);
  }
  return temp;
}
console.log(fizzBuzz(3, 16));
//12-Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
function findPersonMoreSkills(object) {
  let numberSkills = 0;
  let name = "";
  for (const key in object) {
    if (object[key].skills.length > numberSkills) {
      numberSkills = object[key].skills.length;
      name = key;
    }
  }
  return name;
}

console.log(findPersonMoreSkills(users));
//13-Count logged in users, count users having greater than equal to 50 points from the following object.
function highPoints(object) {
  let number = 0;
  for (const key in object) {
    if (object[key].points >= 50) {
      number++;
    }
  }
  return number;
}

console.log(highPoints(users));
//14-Find people who are MERN stack developer from the users object
function mernStack(object) {
  const MERN = ["MongoDB", "Express", "React", "Node"];
  const nameFullStack = [];
  for (const key in object) {
    if (MERN.every((skill) => object[key].skills.includes(skill))) {
      nameFullStack.push(key);
    }
  }
  return nameFullStack;
}
console.log(mernStack(users));
//15-Set your name in the users object without modifying the original users object
function addMe(users) {
  let user2 = { ...users };
  user2.afsun = {
    email: "Afsun@gmsil.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
    age: 35,
    isLoggedIn: false,
    points: 40,
  };
  return user2;
}
console.log(addMe(users));

//16-Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

function nearestChapter(object, n) {
  let obj = {};
  const temp = [];

  for (const key in object) {
    if (object[key] - n > 0) obj[key] = object[key] - n;
    else obj[key] = n - object[key];
  }
  const min = Object.values(obj).reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
  for (const key in obj) {
    if (obj[key] == min) temp.push(key);
  }
  temp.sort((a, b) => {
    a - b;
  });

  return temp[temp.length - 1];
}

// function nearestChapter(chapt, page) {
//   return Object.entries(chapt).reduce((acc, curr) => {
//     if (Math.abs(curr[1] - page) <= Math.abs(acc[1] - page)) {
//       acc = curr;
//     }
//     return acc
//   })[0];
// }

console.log(
  nearestChapter(
    {
      "Chapter 1": 1,
      "Chapter 2": 15,
      "Chapter 3": 37,
    },
    10
  )
);
console.log(
  nearestChapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 62,
      "The End?": 194,
      "The True Ending": 460,
    },
    200
  )
);
console.log(
  nearestChapter(
    {
      "Chapter 1a": 1,
      "Chapter 1b": 5,
    },
    3
  )
);
console.log(nearestChapter({ "Chapter Four": 46, "Chapter Five": 54 }, 50));
//17-Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.
function convertTime(time) {
  let c = "00";
  const PMorAM = time.slice(-2);
  if (PMorAM.toUpperCase() === "AM") {
    if (time.startsWith("12")) {
      return c.concat(
        time.slice(0, time.length - 2).substring(2, time.length - 2)
      );
    } else return time.slice(0, time.length - 2);
  }

  if (PMorAM.toUpperCase() === "PM") {
  }
  if (time.startsWith("12")) {
    return time.slice(0, time.length - 2);
  } else {
    const getFirstDigit = String(time.slice(0, 2) / 1 + 12);
    return getFirstDigit.concat(
      time.slice(0, time.length - 2).substring(2, time.length - 2)
    );
  }
}
console.log(convertTime("12:40:22AM"));
console.log(convertTime("07:05:45PM"));
console.log(convertTime("12:45:54PM"));
//18-Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
function zeroesToEnd(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j - 1] == 0) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
//19-Write a function that returns an array of strings populated from the slices of n-length characters of the given word (a slice after another while n-length applies onto the word).
function collect(str, n, temp = []) {
  if (str.length < n) return String(temp);
  temp.push(str.substring(0, n));

  return collect(str.substring(n, str.lenght), n, temp);
}
console.log(collect("intercontinentalisationalism", 6));
//20-Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
function getDepth(array, n = 1) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element == "object") {
      n++;
      return getDepth(element, n);
    }
  }
  return n;
}
console.log(getDepth([1, [2, [3, [4, [5]]]]]));

//21-Write a recursive function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.
function findLongest(str, n = 0) {
  let element = "";
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if (element.length > n) n = element.length;
  }
  return element;
}

console.log(findLongest("A thing of beauty is a joy forever."));
function findLongest2(str, n = 0) {
  subStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      subStr = str.slice(0, i);
      console.log(subStr);
      console.log(n);
      console.log(str);
      if (i > n) {
        n = i;
        return findLongest2(str.substring(i, str.lenght), n);
      } else return findLongest2(str.substring(n + i, str.lenght), n);
    }
  }
  return subStr;
}
console.log(findLongest2("A thing of beauty is a joy forever."));
//
//dacbbcac ابتدا bb از رشته حذف شده و رشته برابر daccac می‌شود. سپس cc حذف شده و رشته برابر daac می‌شود. نهایتاً aa حذف شده و مقدار نهایی رشته dc می‌شود.
function remoteDoubel(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      return remoteDoubel(str.substring(0, i) + str.substring(i + 2));
    }
  }
  return str;
}
console.log(remoteDoubel("dacbbcac"));
//Create a function that accepts str and cases as parameters where the string is split into N distinct cases of equal length as shown:
function splitNCases2(str, cases) {
  let temp = [];
  let n = str.length / cases;

  if (str.length == 0) return temp;
  while (str) {
    temp.push(str.slice(0, n));
    str = str.substring(n);
  }
  return temp;
}
console.log(splitNCases2("Strengthened", 6));
//Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.
const user1 = {
  powerPlant: 70000,
  rental: 12000,
};

const user2 = {
  teaching: 40000,
  rental: 10000,
};
function combine(user1Income, user2Income) {
  let becomes = {};
  for (const key in user1Income) {
    if (key in user2Income) {
      becomes[key] = user1Income[key] + user2Income[key];
    } else {
      becomes[key] = user1Income[key];
    }
  }
  for (const key in user2Income) {
    if (key in becomes) {
    } else becomes[key] = user2Income[key];
  }
  return Object.fromEntries(
    Object.entries(becomes).sort(([, a], [, b]) => b - a)
  );
}
console.log(combine(user1, user2));
//Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5
function getNotesDistribution(arr) {
  let arr2 = [1, 2, 3, 4, 5];
  return arr.reduce((prev, curr) => {
    curr.notes.filter((value) => {
      if (arr2.includes(value)) {
        if (value in prev) prev[value]++;
        else prev[value] = 1;
      }
    });
    return prev;
  }, {});
}
console.log(
  getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3, 5],
    },
  ])
);
//You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually
function ungroupStudents(list) {
  return list.flatMap(({ teacher, data }) =>
    data.map((value) => Object.assign({ teacher }, value))
  );
}
console.log(
  ungroupStudents([
    {
      teacher: "Ms. Car",
      data: [
        {
          name: "James",
          emergenceNumber: "617-771-1082",
        },
        {
          name: "Alice",
          alergies: ["nuts", "carrots"],
        },
      ],
    },
    {
      teacher: "Mr. Lamb",
      data: [
        {
          name: "Aaron",
          age: 3,
        },
      ],
    },
  ])
);
//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
//You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.
function splitBunches(array) {
  let obj = {};
  const temp = [];
  for (const element of array) {
    if (element.quantity > 1) {
      for (let index = element.quantity; index >= 1; index--) {
        obj.name = element.name;
        obj.quantity = 1;
        obj;
        temp.push(obj);
        obj = {};
      }
    } else {
      temp.push(element);
    }
  }
  return temp;
}
function splitBunches2(array) {
  return array.reduce((prev, curr) => {
    for (let i = 0; i < curr.quantity; i++) {
      prev.push({ ...curr, quantity: 1 });
    }
    return prev;
  }, []);
}
console.log(
  splitBunches2([
    { name: "currants", quantity: 1 },
    { name: "dfghf", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 },
  ])
);
//The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

//You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.
function findAndRemove(obj) {
  for (const key in obj) {
    key;
    if (typeof obj[key] !== "object") {
      if (!(obj[key] * 1)) {
        delete obj[key];
      } else obj[key] = Number(obj[key]);
    } else if (typeof obj[key] === "object") {
      findAndRemove(obj[key]);
    }
  }
  return obj;
}

console.log(
  findAndRemove({
    bedroom: { slippers: 10000, piano: 0.834325683995413 },
  })
);
//
function champions(arr) {
  arr.sort((a, b) => b.wins - a.wins);
  arr;
  if (arr[0].wins !== arr[1].wins) return arr[0].name;
  arr.sort((a, b) => b.conceded - a.conceded);
  arr;
  return arr[0].name;
}

console.log(
  champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "NewCastle United",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 36,
    },
    {
      name: "Leicester City",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 108,
      conceded: 21,
    },
  ])
);

//
function compact(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element) {
      temp.push(element);
    }
  }
  return temp;
}
console.log(compact([0, 1, false, 2, "", 3]));
/////

const a = [];
const b = a.push(10);
console.log(b);
/////////
console.log(1 + +"1");
////
console.log(1 == "1");
console.log({} == {});
console.log([] == ![]);
//
function countUp(start) {
  var num = start;
  while (num <= 10) {
    typeof num;
    console.log(num);
    num += num;
  }
}
console.log(countUp("3"));

console.log(1 < 2 < 3);
//
function rotate(list) {
  let temp = [];
  temp = list.slice(1);
  const p = list.shift();
  temp.push(p);
  return temp;
}
console.log(rotate([1, 2, 3, 7]));
function rotateright(list) {
  list.unshift(list.pop());
  return list;
}
console.log(rotateright([1, 2, 3, 7]));
//
function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
}
console.log(swap(3, 4));
//
function findDeepMaxNumberArray(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
  let max = Number.MIN_SAFE_INTEGER;
}

console.log(
  findDeepMaxNumberArray([
    1,
    [2, 3, [12]],
    19,
    [21, -3, [5, 99, [27, 88, [92, 102, [13]], 199, [780, [-1]]]]],
  ])
);
function findDeepObject(obj) {
  let max = Number.MIN_SAFE_INTEGER;
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      const maxResult = findDeepObject(obj[key]);
      if (maxResult > max) {
        max = maxResult;
      }
    } else if (obj[key] > max) {
      max = obj[key];
    }
  }
  return max;
}
console.log(findDeepObject({ a: 1, b: 3, c: { g: 1, d: 4 } }));
//
function removArray(array, n) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      removArray(element, n);
    } else if (element > 10) {
      array.splice(index, 1);
    }
  }
  return array;
}
console.log(removArray([1, [2, [12]], [90], [0]], 10));
function fill(n, time) {
  let temp = [];
  if (time === 0) return temp;
  if (time >= 1) {
    temp.push(n);
    temp = temp.concat(fill(n, time - 1));
  }
  return temp;
}
console.log(fill(2, 3));
//
function product(a, b) {
  return (c, d) => {
    return (e, f) => {
      return a * c * e + b * d * f;
    };
  };
}
console.log(product(1, 2)(1, 1)(2, 3));
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;
const num1 = increaseNumber();
const num2 = increaseNumber(num1);
console.log(num1, num2);

let i = 0;
i++;
const a2 = () => [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
const user = { name: "leydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
const name = "afsun";
age = 21;
console.log(global.age);
console.log(delete age);
console.log(delete name);
console.log(1 == "1");

function count(n) {
  let s = 0;
  while (n < 10) {
    s += n;
    s;
    n++;
  }
  return s;
}
console.log(count("3"));
const deepObj = {
  a: {
    b: {
      c: {
        d: {
          e: {
            z: 12,
            y: "test",
          },
        },
      },
    },
  },
};
function deepcopy(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      result[key] = deepcopy(obj[key]);
    } else result[key] = obj[key];
  }
  return result;
}
console.log(deepcopy(deepObj));
//Write a function that removes the last vowel in each word in a sentence.
function removeLastVowel(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  const arr = str.split(" ");
  const result = arr.map((nodeStr) => {
    const st = nodeStr.split("").reverse();
    for (let i = 0; i < st.length; i++) {
      const element = st[i];
      if (vowel.includes(element.toLowerCase())) {
        st.splice(i, 1);
        return st.reverse().join("");
      }
    }
  });
  return result.join(" ");
}
console.log(
  removeLastVowel(
    "If you want to live a happy life, tie it to a goal, not to people."
  )
);
// function removeLastVowel(str) {
// 	return str.split(/\s+/).map(function(x){
// 		return x.split('').reverse().join('').replace(/[aeiou]/,'').split('').reverse().join('');
// 	}).join(' ');
// }

//We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
function balanced(word) {
  let n = 0;
  let m = 0;
  const arrayStr = word.split("");
  const Length = Math.floor(arrayStr.length / 2);
  for (
    let start = 0, end = arrayStr.length - 1;
    start < Length;
    start++, end--
  ) {
    n += arrayStr[start].charCodeAt();
    m += arrayStr[end].charCodeAt();
  }
  if (n === m) return true;
  else return false;
}
console.log(balanced("brake"));
//Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order
function allPairs(arr, target) {
  arr.sort();
  let temp = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === target) {
        temp.push([arr[i], arr[j]]);
      }
    }
  }
  return temp;
}
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
//Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.
function group2(arr, size) {
  let temp = [];
  if (arr.length < size) return temp;
  temp = [arr.splice(0, size)];
  arr;
  temp = temp.concat(group2(arr, size));
  return temp;
}
console.log(group2([1, 2, 3, 4, 5, 6], 2));
//
function product(a, b) {
  return (c, d) => {
    return (e, f) => {
      return a * c * e + b * d * f;
    };
  };
}
console.log(product(1, 2)(1, 1)(2, 3));
//Create a function that takes an array and returns the most frequently occurring element contained within it.
function findFrequent(arr) {
  let obj = {};
  let key = arr[0];
  let maxCount = 1;
  for (const node of arr) {
    if (!(node in obj)) {
      obj[node] = 1;
    } else obj[node]++;
    if (obj[node] > maxCount) {
      key = node;
      maxCount = obj[node];
    }
  }
  return key;
}
console.log(findFrequent([null, "hello", true, null]));
const sums = new Promise((resolve, reject) => {
  let sum = 0;
  for (let index = 0; index < 1_000_000; index++) {
    sum += index;
  }
  resolve(sum);
});
sums.then((value) => {
  console.log(value);
});

const bb = new Promise((resolve, reject) => {
  reject("lanat be ruzegar");
});
bb.then((value) => {
  console.log(value);
}).catch((value) => {
  console.log(value);
});

function getsum(min = 0, max = min + 1) {
  return new Promise((resolve) => {
    let sum = 0;
    for (let step = 0; step < max; step++) {
      sum += step;
    }
    resolve(sum);
  });
}
const s = getsum(1, 10);

console.log(1);
s.then((v) => console.log(v));
console.log(2);
setTimeout(() => {
  console.log("salam");
}, 5000);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// function getUser() {
//   return new Promise((resolve) => {
//     resolve([{ name: "Afsun", family: "omidi" }]);
//   });
// }
async function getUser() {
  return [{ name: "Afsun", family: "omidi" }];
}

async function getPostes() {
  return [{ titel: "salam" }, { titel: "amir" }];
}

// function getPostes() {
//   return new Promise((resolve) => {
//     resolve([{ titel: "salam" }, { titel: "amir" }]);
//   });
// }

function getAllUsers() {
  return new Promise((resolve) => {
    let users = [];
    let postes = [];
    getUser()
      .then((userlist) => {
        users = userlist;
        return getPostes();
      })
      .then((postlist) => {
        postlist;
        postes = postlist;
        resolve({ users, postes });
      });
  });
}
getAllUsers().then((list) => {
  console.log(list);
});
async function getAllUsers2() {
  const users = await getUser();
  const postes = await getPostes();
  return { users, postes };
}
console.log(
  getAllUsers2().then((value) => {
    value;
  })
);
//Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).
function majorityVote(arr) {
  const obj = {};
  let key = arr[0];
  let maxCount = 1;
  for (const node of arr) {
    const node = arr[i];
    if (!(node in obj)) {
      obj[node] = 1;
    } else obj[node]++;
  }
  return obj;
}
console.log(majorityVote(["A", "A", "B"]));
var t = "s";
function p() {
  console.log(t);
  var t = "h";
}
console.log(t);

//

function sevenBoom(arr) {
  return arr.join("").includes("7") ? "Boom!" : "there is no 7 in the array";
}
console.log(sevenBoom([2, 55, 60, 97, 86]));
//Create a function that takes two dates and returns the number of days between the first and second date.
function getDays(date1, date2) {
  const a = date1.toString().split(" ");
  const b = date2.toString().split(" ");

  if (a[3] === b[3]) {
    return Math.abs(a[2] - b[2]);
  } else return;
}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish"
function oddishOrEvenish(num) {
  //const n=String(num).split("");
  let n = 0;
  while (num > 10) {
    n += num % 10;
    num = Math.floor(num / 10);
  }
  n += num;
  if (n % 2 == 0) return "Evenish";
  else return "Oddish";
}
console.log(oddishOrEvenish(4433));
