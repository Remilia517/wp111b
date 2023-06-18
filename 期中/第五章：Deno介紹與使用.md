# 第五章：Deno介紹與使用

## 5.1 Deno簡介

Deno是一個現代化的運行時環境，用於執行JavaScript和TypeScript代碼。它由Ryan Dahl於2018年創建，旨在解決Node.js的一些限制和問題。Deno提供了一個安全、簡潔和高效的開發環境，並具有許多令人興奮的功能。

以下是Deno的一些特點和功能：

安全性: Deno將安全性放在首位。它使用內置的安全機制，可以控制對文件系統、網絡和執行環境的訪問權限。當您運行Deno時，它會提示您明確授予或拒絕訪問權限，從而幫助減少潛在的安全漏洞。

支援TypeScript: Deno原生支援TypeScript，這意味著您可以使用TypeScript進行開發，而不需要額外的設置或插件。這使得您可以利用TypeScript的類型檢查和更強大的開發工具來提高代碼的可靠性和可維護性。

單一執行文件: Deno使用一個單一可執行文件作為運行時，不像Node.js需要依賴於外部的Node包管理器。這使得Deno的安裝和使用更加簡單和直觀。

標準庫: Deno提供了一個豐富的標準庫，包括用於文件操作、網絡請求、HTTP、加密和單元測試等的內置模組。這使得開發者可以直接使用這些模組，而無需依賴第三方庫。

ES Modules的原生支援: Deno直接支援ES Modules，這意味著您可以在Deno中使用標準的import和export語法進行模組化開發，而無需使用額外的工具或轉換。

內置的開發工具: Deno提供了一些內置的開發工具，如內置的測試運行器和代碼格式化工具。這些工具使得測試和代碼格式化變得更加簡單和方便。

Deno是一個開源項目，活躍的社區不斷為其貢獻新的功能和工具。它在Web開發領域中得到了越來越多的採用，並且在不同的領域中取得了廣泛的應用。您可以使用Deno來構建網絡服務器、開發命令行工具、創建網絡應用程序等。   

## 5.2 安裝和設置Deno

安裝和設置Deno非常簡單。請按照以下步驟進行操作：

下載Deno安裝程式：您可以從Deno的官方網站（https://deno.land）下載適用於您的操作系統的安裝程式。

安裝Deno：運行下載的安裝程式，按照提示進行安裝。這將在您的系統上安裝Deno運行時。

驗證安裝：打開終端窗口（命令提示符或終端應用程式），輸入以下命令來確認Deno是否成功安裝：
```html
deno --version
```

如果您看到Deno的版本號，表示安裝成功。

環境變數設置（可選）：根據您的需要，您可以將Deno的執行路徑添加到系統的環境變數中，以便在終端窗口中直接運行Deno命令。

安裝和設置完成後，您就可以開始使用Deno來運行JavaScript和TypeScript程式了。

接下來的章節將進一步介紹Deno的功能和用法，包括模組管理、異步編程、文件操作、網絡請求等。請繼續閱讀以深入了解Deno的使用方法。

## 5.3 Deno模塊和依賴管理

Deno具有內置的模組和依賴管理系統，讓您能夠輕鬆引入和使用第三方模組，同時確保代碼的可靠性和安全性。

在Deno中，您可以使用URL來引入模組。例如：
```html
import { serve } from 'https://deno.land/std@0.100.0/http/server.ts';
```

這將從指定的URL引入serve函數，該函數屬於Deno標準庫中的http/server.ts模組。Deno的模組URL遵循以下格式：
```html
https://deno.land/[模組名]@[版本]/[路徑]
```

您可以使用具體的版本號或latest來指定模組的版本。如果不指定版本，Deno將默認使用latest版本。

當您第一次引入模組時，Deno會自動從指定的URL下載並緩存該模組，以便於以後的使用。這樣可以確保您在開發過程中始終使用相同的模組版本。

Deno還支持本地文件系統中的模組引入，例如：

```html
import { myFunction } from './myModule.ts';
```

當使用Deno引入模組時，可以通過特殊的URL前綴來指定模組的來源。以下是一些常用的URL前綴：

https://：從指定的URL引入模組。這可以是遠程服務器上的URL，也可以是存儲庫的URL。
http://：類似於https://，從指定的HTTP URL引入模組。
file://：從本地文件系統引入模組。您可以使用絕對或相對路徑指定文件的位置。
data://：從內嵌的數據URL引入模組。這通常用於將模組內容直接嵌入到代碼中。
例如，以下是使用不同URL前綴引入模組的示例：
```html
import { serve } from 'https://deno.land/std@0.100.0/http/server.ts';
import { myFunction } from 'http://example.com/myModule.js';
import { myModule } from 'file:///path/to/myModule.ts';
import { dataModule } from 'data:text/javascript;base64,SGVsbG8gd29ybGQh';
```

通過使用不同的URL前綴，您可以從不同的來源引入模組，包括遠程URL、HTTP服務器、本地文件系統和內嵌的數據。

Deno還提供了一個名為deno.land的網站，該網站提供了一個模組存儲庫，您可以在其中找到許多常用的Deno模組。您可以通過訪問https://deno.land並瀏覽模組列表來查找和使用這些模組。

## 5.4 Deno與JavaScript的互操作性

在Deno中，與JavaScript的互操作性是非常重要的，它使我們能夠在Deno環境中使用JavaScript庫和模塊。由於Deno兼容ES模塊，因此您可以直接引入JavaScript模塊，並在Deno環境中使用它們。

首先，您可以使用ES模塊的語法來引入JavaScript模塊。例如，如果您有一個名為myModule.js的JavaScript模塊，您可以在Deno代碼中使用以下語法引入它：
```html
import { myFunction } from './myModule.js';
```

這將允許您使用該模塊中的導出功能，例如myFunction。Deno將自動解析相對路徑並載入該模塊。

此外，Deno還提供了一個全局對象Deno，它提供了許多有用的功能，包括文件操作、網絡請求、進程管理等。您可以在Deno環境中使用這些功能，與JavaScript代碼進行交互。

與JavaScript庫的互操作性也非常重要。如果您有一個已經存在的JavaScript庫，您可以直接在Deno代碼中使用它。您可以使用Deno提供的import語法引入庫，並根據庫的具體導出進行使用。

需要注意的是，由於Deno環境與Node.js環境有所不同，一些Node.js特定的模塊和API在Deno中可能不可用。但是，由於Deno的生態系統不斷發展，許多常用的庫和工具已經適應了Deno環境，並提供了Deno版本的支持。

在使用JavaScript庫和模塊時，請確保您已經了解庫的相容性和在Deno環境中的使用方式。一些庫可能需要進行修改或使用特定的Deno版本。您可以通過參考庫的官方文檔或Deno的相關資源來獲取更多信息。

總而言之，Deno提供了與JavaScript的互操作性，使我們能夠在Deno環境中使用JavaScript庫和模塊。這使得我們能夠更加靈活地開發和擴展我們的應用程序，同時又能夠利用現有的JavaScript資源和工具。

此外，Deno還支持與JavaScript的相互調用。這意味著您可以在Deno代碼中調用JavaScript函數，同樣地，也可以從JavaScript代碼中調用Deno提供的功能。

在Deno中調用JavaScript函數非常簡單。只需將JavaScript函數引入到Deno代碼中，然後按照正常的JavaScript語法使用它。例如：
```html
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

您可以在Deno代碼中引入該函數並使用它：
```html
import { greet } from './myJavaScriptModule.js';

greet('John');  // 調用JavaScript函數
```

同樣地，您也可以從JavaScript代碼中調用Deno提供的功能。Deno提供了一個全局對象Deno，該對象包含了許多有用的功能，例如文件操作、網絡請求等。您可以在JavaScript代碼中使用Deno對象的方法和屬性，以利用Deno提供的功能。
```html
const { readFile } = Deno;

async function readTextFile(path) {
  const data = await readFile(path);
  console.log(data);
}
```

在上面的示例中，我們使用了Deno對象的readFile方法來讀取文件的內容。注意，這僅適用於在Deno環境中運行的JavaScript代碼，而不是在瀏覽器中運行的JavaScript。

這種互操作性使得Deno成為一個強大的工具，可以與現有的JavaScript代碼和庫無縫集成。您可以在Deno代碼中使用JavaScript庫的功能，同時也可以從JavaScript代碼中訪問Deno提供的功能。這為開發人員提供了更大的靈活性，可以根據項目的需求選擇最適合的工具和技術。
