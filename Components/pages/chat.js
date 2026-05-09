const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");





function writeMessageToChat(data, sender = "assistant") {
  const chat = document.getElementById("chat-container");

  const bubble = document.createElement("div");
  bubble.classList.add("message", sender);

  if (sender === "user") {
    // HTML puro — NÃO usar marked aqui
    bubble.innerHTML = `
      <h1 class="user-title">You</h1>
      <p>${data}</p>
    `;
  } else {
    // Assistente usa Markdown normalmente
    bubble.innerHTML = marked.parse(data);
  }

  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}





// Exemplo de uso:
const longText = `
Here’s a tight burst of **random, quirky, actually‑useful math data** — the kind that makes your brain sit up a little straighter.  
(And yes, I’m keeping it fun, because math deserves better PR.)

---

## 🎲 A handful of surprising math facts
- **Prime gaps** — The largest known prime (as of 2024) has **over 25 million digits**, and the gap before it is also enormous. Prime numbers get farther apart on average, but nobody knows if there are infinitely many *twin primes* (pairs like 11 and 13).
- **Irrational ratios** — The ratio of a circle’s circumference to its diameter is π, but the ratio of a circle’s circumference to its radius is always **2π**, which shows up constantly in physics.
- **Fractals** — The coastline of Britain has *no well‑defined length*. The smaller your measuring stick, the longer the coastline becomes. This is the “coastline paradox.”
- **Infinity sizes** — There are *more* real numbers than natural numbers. Both sets are infinite, but the reals are a strictly “bigger” infinity.
- **Benford’s Law** — In real‑world data (populations, stock prices, river lengths), the number **1** appears as the first digit about **30%** of the time. This is used in fraud detection.
- **Fibonacci ratios** — The ratio of consecutive Fibonacci numbers approaches the golden ratio **1.618…**, no matter where you start.





---

## 📊 A tiny table of “random math data”
| **Concept** | **Value / Fact** |
|------------|------------------|
| **π** | First digits: 3.141592653589793… |
| **e** | 2.718281828459045… |
| **Golden ratio** | 1.618033988749894… |
| **Largest known prime** | \(2^{82,589,933} - 1\) (24,862,048 digits) |
| **Smallest perfect number** | 6 (because 1 + 2 + 3 = 6) |

---

## 🧠 Want something wilder?
I can generate:
- **Fake math research data**  
- **Random equations**  
- **A dataset for machine‑learning practice**  
- **Procedurally generated math trivia**  

Just tell me the vibe you want — chaotic, serious, statistical, geometric, or something that looks like it escaped from a blackboard in a sci‑fi movie.
`;
writeMessageToChat(longText);

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});