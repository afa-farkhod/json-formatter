# JSON Formatter & Validation

- A client-side web tool to **validate**, **format (pretty-print)**, and **minify** JSON.  
- Built with plain **HTML + CSS + JavaScript** and designed to run entirely in the browser.


> 💡 No backend, no tracking – your JSON never leaves the page.


## ✨ Features

- ✅ **Validation**  
  - Checks if the input is valid JSON and shows clear success / error messages.
- 🎨 **Pretty Formatting**  
  - Formats valid JSON with indentation for easier reading.
- 📦 **Minify**  
  - Converts JSON into a compact single-line format for usage in configs, env vars, etc.
- 📋 **Copy Output**  
  - One-click copy of the formatted / minified JSON to your clipboard.
- 🔐 **Privacy-friendly**  
  - All logic runs in the browser using JavaScript.  
    No data is sent to any server.

## 🧱 Tech Stack

- HTML5
- CSS3 (responsive, card-style layout)
- Vanilla JavaScript (no frameworks)

## 📁 Project Structure

```
.
├── index.html   # Main page markup
├── style.css    # Styling for layout & components
└── script.js    # JSON parsing, validation, formatting, minifying, copy logic
```

📝 Usage:

- Paste raw JSON into the Input panel.
- Click Format & Validate:
   - If valid, you’ll see pretty-printed JSON in the Output panel and a “Valid JSON ✔” status.
   - If invalid, you’ll see an error message with details.
- Click Minify to generate a compact version.
- Click Copy Output to copy the result to your clipboard.

<img width="977" height="529" alt="image" src="https://github.com/user-attachments/assets/f96506c3-ae37-4337-8a28-6fe668322d92" />

-----

💡 Ideas for Future Improvements:

- Support for JSON → YAML conversion.
- Theme toggle (light / dark).
- Basic lint rules (e.g., enforcing double quotes, key ordering).
- Offline PWA support.

Feel free to open issues or PRs with suggestions and improvements!
