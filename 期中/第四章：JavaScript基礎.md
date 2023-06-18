# 第四章：JavaScript基礎

## 4.1 JavaScript簡介

JavaScript是一種高級、動態、解釋型的程式語言，主要用於網頁開發，但同樣也廣泛應用於其他領域，例如伺服器端開發、桌面應用程式和移動應用程式等。

以下是JavaScript的一些主要特點和特性：

動態語言：JavaScript是一種動態語言，不需要在編譯階段聲明變數類型，可以根據需要在運行時進行類型轉換和屬性添加。

解釋型語言：JavaScript是一種解釋型語言，不需要編譯成二進制碼，可以直接在運行環境中解釋和執行。

物件導向：JavaScript支持物件導向程式設計，可以使用物件和類的概念來組織程式碼，實現封裝、繼承和多態等特性。

事件驅動：JavaScript通常用於網頁交互，可以對使用者的操作和瀏覽器事件進行響應，例如按鈕點擊、滑鼠移動等。

跨平台：JavaScript可以在不同的環境中運行，包括瀏覽器、伺服器和移動設備等，實現跨平台的應用開發。

豐富的內建庫：JavaScript提供了許多內建的庫和函數，包括操作DOM、處理字串、數字和日期等常見任務的功能。

開放的標準：JavaScript是一種開放的語言，有一個由W3C和ECMA組織維護的標準規範，確保了語言的統一和互操作性。

JavaScript的主要用途之一是網頁前端開發，通過操縱網頁的DOM（文檔對象模型）來實現動態和交互式的網頁效果。它可以與HTML和CSS配合使用，實現頁面的結構、樣式和行為的控制。

此外，JavaScript也可用於伺服器端開發。Node.js是一個基於JavaScript運行的伺服器端平台，它提供了一個事件驅動、非阻塞I/O的環境，使得開發人員能夠使用JavaScript進行伺服器端的應用開發，例如建立網站的後端服務、API開發和資料庫操作等。透過Node.js，開發人員可以使用相同的語言和工具集在前端和後端之間共享程式碼，提高開發效率和代碼重用性。

JavaScript生態系統非常豐富，有許多開源庫和框架可供使用，讓開發人員更容易實現各種功能和效果。例如，jQuery庫可以簡化DOM操作，Bootstrap框架提供了現成的樣式和佈局組件，React和Vue.js則提供了強大的UI組件和虛擬DOM的管理。

在現代網站開發中，JavaScript已經成為一種不可或缺的語言，它為開發人員提供了豐富的工具和功能，使得網頁變得更加動態、互動和功能豐富。熟練掌握JavaScript的開發技巧和最佳實踐，對於成為一名優秀的網站設計師或開發人員是至關重要的。接下來的章節中，我們將更詳細地探討JavaScript的不同方面，包括語法、物件導向程式設計、異步編程和常用的庫和框架等。

## 4.2 JavaScript變數和數據類型

JavaScript中的變數用於存儲數據，並且可以隨時更改其值。在JavaScript中，變數是使用關鍵字var、let或const來聲明的。

以下是JavaScript中常見的數據類型：

字串（String）: 用於表示文本數據，使用引號（單引號或雙引號）括起來。例如：let name = "John";

數字（Number）: 用於表示數值，包括整數和浮點數。例如：let age = 25;

布林值（Boolean）: 用於表示真（true）或假（false）的值。例如：let isStudent = true;

陣列（Array）: 用於存儲多個值的集合，可以是不同類型的值。陣列使用方括號[]來表示，並使用逗號將各個值分隔開。例如：let numbers = [1, 2, 3, 4, 5];

物件（Object）: 用於表示複雜的數據結構，包含多個屬性和值的集合。物件使用花括號{}來表示，每個屬性由鍵（key）和值（value）組成，用冒號:分隔。例如：
```html
let person = {
  name: "John",
  age: 25,
  isStudent: true
};
```
空（Null）和未定義（Undefined）: null表示變數的值為空，undefined表示變數尚未被賦值。
在JavaScript中，變數的數據類型是動態的，即可以在運行時根據需要更改變數的數據類型。可以使用內建的函數typeof來檢測變數的數據類型。例如：
```html
let name = "John";
console.log(typeof name);  // 輸出：string

let age = 25;
console.log(typeof age);  // 輸出：number

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);  // 輸出：object

let person = {
  name: "John",
  age: 25
};
console.log(typeof person);  // 輸出：object
```

了解JavaScript中的變數和數據類型是編寫程式的基礎，它們允許我們在應用中存儲和操作不同類型的數據。

## 4.3 JavaScript運算符和表達式

JavaScript提供了各種運算符，可以用於執行數學運算、比較值、結合字符串等操作。下面是一些常見的JavaScript運算符：

算術運算符：用於執行數學計算，包括加法（+）、減法（-）、乘法（*）、除法（/）和餘數（%）。例如：
```html
let a = 10;
let b = 5;
let sum = a + b;  // 15
let difference = a - b;  // 5
let product = a * b;  // 50
let quotient = a / b;  // 2
let remainder = a % b;  // 0
```

比較運算符：用於比較值的大小或相等性，包括等於（==）、不等於（!=）、大於（>）、小於（<）、大於等於（>=）和小於等於（<=）。例如：
```html
let a = 5;
let b = 10;
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a > b);  // false
console.log(a < b);  // true
console.log(a >= b);  // false
console.log(a <= b);  // true
```

邏輯運算符：用於對布林值進行邏輯運算，包括且（&&）、或（||）和非（!）。例如：
```html
let a = true;
let b = false;
console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);  // false
```

賦值運算符：用於將值賦給變數，包括等於（=）、加等於（+=）、減等於（-=）、乘等於（*=）和除等於（/=）。例如：
```html
let a = 10;
a += 5;  // a的值為15
```

字符串運算符：用於連接字符串，包括加號（+）。例如：
```html
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"
```

以上僅列舉了一些常見的JavaScript運算符，還有其他更多運算符可用於不同的操作和情境。理解運算符的使用方式和規則對於編寫複雜的JavaScript程式至關重要。

## 4.4 JavaScript條件語句和迴圈

### 4.4.1 條件語句

條件語句用於根據一個或多個條件執行不同的程式塊。最常見的條件語句是if語句和switch語句。

if語句：用於根據一個條件執行程式塊。如果條件為真，則執行if塊中的程式碼；否則，跳過if塊。可以使用else語句定義當條件為假時要執行的程式碼。
```html
let age = 18;

if (age >= 18) {
  console.log("成年人");
} else {
  console.log("未成年人");
}
```

switch語句：用於根據不同的情況執行不同的程式塊。根據給定的表達式值，選擇相應的case塊執行。如果沒有匹配的case，可以使用default塊定義預設的程式碼。
```html
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("星期一");
    break;
  case "Tuesday":
    console.log("星期二");
    break;
  default:
    console.log("其他");
    break;
}
```

### 4.4.2 迴圈

迴圈用於重複執行程式塊，直到條件不再滿足。在JavaScript中，最常見的迴圈是for迴圈和while迴圈。

for迴圈：通過指定初始值、條件和遞增/遞減來執行程式塊。迴圈會在每次迭代時檢查條件，如果條件為真，則執行程式塊。
```html
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

while迴圈：在指定的條件為真時重複執行程式塊。在每次迭代之前，都會檢查條件是否滿足。
```html
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

除了for迴圈和while迴圈，JavaScript還提供了do-while迴圈，它與while迴圈非常相似，不同之處在於它會先執行一次程式塊，然後再檢查條件。

do-while迴圈：在指定的條件為真時重複執行程式塊。不同於while迴圈，在每次迭代之前，do-while迴圈會先執行一次程式塊，然後再檢查條件是否滿足。
```html
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4.4.3 中斷和繼續

在迴圈中，我們可以使用break語句中斷迴圈的執行，也可以使用continue語句跳過當前迭代並進入下一次迭代。

break語句：用於完全終止迴圈的執行，並跳出迴圈。
```html
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

continue語句：用於跳過當前迭代，並進入下一次迭代。
```html
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```

這些條件語句和迴圈為我們提供了靈活和強大的控制程式流程和邏輯的方式。通過選擇不同的程式塊或重複執行程式塊，我們可以根據不同的情況執行適當的程式碼。

## 4.5 函數

在JavaScript中，函數是一段可重複使用的程式碼塊，用於執行特定的任務或計算。它可以接收參數（函數的輸入值），並返回結果（函數的輸出值）。


### 4.5.1 函數的定義

我們可以使用function關鍵字來定義一個函數。函數定義包括函數名稱、參數列表和函數體。
```html
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

在上面的例子中，我們定義了一個名為greet的函數，它接收一個名為name的參數，並在控制台中打印出一個問候語。

### 4.5.2 函數的調用

要使用一個函數，我們需要調用它。通過函數名稱後面加上括號，我們可以調用函數並傳遞所需的參數。
```html
greet("John");
```

在上面的例子中，我們調用了greet函數並將"John"作為參數傳遞給它。這將打印出"Hello, John!"。

### 4.5.3 函數的返回值

函數可以返回一個值，我們可以使用return語句來指定函數的返回值。
```html
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // 5
```

在上面的例子中，add函數接收兩個參數a和b，並返回它們的和。我們將add(2, 3)的結果賦值給變量result，然後將結果打印到控制台中。

### 4.5.4 函數的參數

函數可以接收一個或多個參數。參數是在函數定義中聲明的變量，用於接收調用函數時傳遞的值。
```html
function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3);
console.log(result); // 6
```

在上面的例子中，multiply函數接收兩個參數a和b，並返回它們的乘積。我們將multiply(2, 3)的結果賦值給變量result，然後將結果打印到控制台中。

### 4.5.5 預設參數

在JavaScript中，我們可以為函數的參數指定預設值。這樣，如果在函數調用時沒有提供相應的參數，將使用預設值。
```html
function greet(name = "Anonymous") {
  console.log("Hello, " + name + "!");
}

greet(); // Hello, Anonymous!
greet("John"); // Hello, John!
```

在上面的例子中，greet函數的name參數有一個預設值"Anonymous"。如果我們在調用greet時沒有傳遞參數，則使用預設值。如果我們提供了參數，則使用提供的值。

### 4.5.6 匿名函數

除了使用function關鍵字定義具名函數之外，我們還可以使用匿名函數。匿名函數是沒有名稱的函數，它可以被賦值給變量或作為其他函數的參數。
```html
let greet = function(name) {
  console.log("Hello, " + name + "!");
};

greet("John"); // Hello, John!
```

在上面的例子中，我們將一個匿名函數賦值給變量greet，然後可以像調用具名函數一樣調用它。

### 4.5.7 箭頭函數

ES6引入了箭頭函數的語法，它提供了更簡潔的函數定義方式。
```html
let multiply = (a, b) => a * b;

let result = multiply(2, 3);
console.log(result); // 6
```

在上面的例子中，箭頭函數multiply接收兩個參數a和b，並返回它們的乘積。箭頭函數的語法更簡潔，並且在某些情況下可以更清晰地表達函數的意圖。


### 4.5.8 遞迴函數

遞迴函數是一個調用自身的函數。它通常用於解決可以被分解為更小重複性問題的問題。
```html
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let result = factorial(5);
console.log(result); // 120
```

在上面的例子中，factorial函數計算一個數的階乘。它通過不斷調用自身並將問題分解為更小的子問題，最終達到終止條件（當n等於0時返回1），然後將子問題的結果合併以獲得最終結果。

### 4.5.9 函數的範疇（作用域）

每個函數都有自己的範疇，範疇定義了變量的可見性和生命週期。JavaScript中有以下幾種類型的範疇：

全域範疇（Global Scope）：位於所有函數之外的範疇，其中定義的變量在整個程式中可見。
函數範疇（Function Scope）：位於函數內部的範疇，其中定義的變量僅在函數內部可見。
塊級範疇（Block Scope）：從ES6開始引入的特性，使用let或const關鍵字在塊（如if語句或迴圈）中定義的變量僅在該塊中可見。

```html
let globalVariable = "I'm a global variable";

function foo() {
  let functionVariable = "I'm a function variable";

  if (true) {
    let blockVariable = "I'm a block variable";
    console.log(blockVariable); // I'm a block variable
  }

  console.log(functionVariable); // I'm a function variable
  console.log(globalVariable); // I'm a global variable
}

foo();
console.log(globalVariable); // I'm a global variable
console.log(functionVariable); // ReferenceError: functionVariable is not defined
console.log(blockVariable); // ReferenceError: blockVariable is not defined
```

在上面的例子中，我們定義了全域範疇中的globalVariable變量。在foo函數中，我們定義了函數範疇中的functionVariable變量和塊範疇中的blockVariable變量。我們可以看到，這些變量僅在它們所屬的範疇內部可見，無法在其他範疇中訪問。

函數是JavaScript中非常重要的概念之一，它們使我們能夠組織和重複使用程式碼，並實現複雜的邏輯。熟悉函數的定義、調用、參數、返回值和範疇的概念是成為一個優秀的JavaScript開發者的關鍵。