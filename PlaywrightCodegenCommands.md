Here is a **clean command reference** for using Playwright Codegen (Test Generator).

---

# 🚀 1️⃣ Basic Codegen Command

```bash
npx playwright codegen
```

Opens a browser and records interactions.

---

# 🌐 2️⃣ Codegen With URL

```bash
npx playwright codegen https://example.com
```

Example with OrangeHRM demo:

```bash
npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
```

---

# 📁 3️⃣ Save Output to File

```bash
npx playwright codegen -o tests/example.spec.js
```

With URL:

```bash
npx playwright codegen https://example.com -o tests/login.spec.js
```

---

# 🌍 4️⃣ Choose Browser

### Chromium (default)

```bash
npx playwright codegen --browser=chromium
```

### Firefox

```bash
npx playwright codegen --browser=firefox
```

### WebKit

```bash
npx playwright codegen --browser=webkit
```

---

# 📱 5️⃣ Emulate Device

```bash
npx playwright codegen --device="iPhone 14"
```

List available devices:

```bash
npx playwright codegen --list-devices
```

---

# 📝 6️⃣ Generate in Different Languages

Default is JavaScript (Playwright Test).

### Python

```bash
npx playwright codegen --target=python
```

### Java

```bash
npx playwright codegen --target=java
```

### C#

```bash
npx playwright codegen --target=csharp
```

---

# 🎯 7️⃣ Generate Script Only (No Test Runner)

```bash
npx playwright codegen --target=javascript
```

---

# 🔍 8️⃣ Record Only Specific Selector (Advanced)

```bash
npx playwright codegen --selector="button"
```

---

# 🧪 9️⃣ With Persistent Context (Keep Login Session)

```bash
npx playwright codegen --user-data-dir=./user-data
```

---

# 🏆 Most Common Real-World Usage

```bash
npx playwright codegen https://your-app-url -o tests/recorded.spec.js
```

Then:

* Clean up selectors
* Replace brittle locators
* Add proper assertions

---

# ⚠ Professional Tip

Never commit raw codegen output directly.

Always:

* Replace auto-generated locators
* Remove unnecessary waits
* Add meaningful assertions

---
