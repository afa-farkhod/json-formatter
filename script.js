document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("inputJson");
  const outputEl = document.getElementById("outputJson");
  const statusEl = document.getElementById("status");

  const formatBtn = document.getElementById("formatBtn");
  const minifyBtn = document.getElementById("minifyBtn");
  const copyBtn = document.getElementById("copyBtn");
  const clearBtn = document.getElementById("clearBtn");

  function setStatus(message, type = "") {
    statusEl.textContent = message;
    statusEl.className = "status" + (type ? " " + type : "");
  }

  function parseJsonOrShowError(raw) {
    if (!raw.trim()) {
      setStatus("Input is empty. Paste JSON on the left.", "");
      return null;
    }
    try {
      const obj = JSON.parse(raw);
      setStatus("Valid JSON ✔", "ok");
      return obj;
    } catch (err) {
      setStatus("Invalid JSON: " + err.message, "error");
      outputEl.value = "";
      return null;
    }
  }

  formatBtn.addEventListener("click", () => {
    const raw = inputEl.value;
    const obj = parseJsonOrShowError(raw);
    if (obj === null) return;
    outputEl.value = JSON.stringify(obj, null, 2);
  });

  minifyBtn.addEventListener("click", () => {
    const raw = inputEl.value;
    const obj = parseJsonOrShowError(raw);
    if (obj === null) return;
    outputEl.value = JSON.stringify(obj);
    setStatus("Valid JSON ✔ (minified)", "ok");
  });

  copyBtn.addEventListener("click", async () => {
    const text = outputEl.value;
    if (!text.trim()) {
      setStatus("Nothing to copy. Format or minify first.", "");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Output copied to clipboard.", "ok");
    } catch (err) {
      setStatus("Could not copy to clipboard: " + err.message, "error");
    }
  });

  clearBtn.addEventListener("click", () => {
    inputEl.value = "";
    outputEl.value = "";
    setStatus("Cleared. Paste JSON to get started.", "");
  });

  // small UX: auto-fill sample JSON
  inputEl.value = JSON.stringify(
      {
        name: "Test",
        tool: "JSON Formatter",
        items: ["validators", "devops", "web tools"]
      },
      null,
      2
  );
});
