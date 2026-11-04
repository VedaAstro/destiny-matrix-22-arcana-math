# Destiny Matrix 22 Major Arcana Mathematics & Sankhya Shastra Numerology Reference

Open-source mathematical specification and client-side reference solver for the **22 Major Arcana Octagram (Destiny Matrix / Матрица судьбы)**, **26 Karmic Tail triads**, and **Sankhya Shastra Vedic Numerology (Mulank / Bhagyank)**.

- **Live Documentation & Equations (GitHub Pages):** [https://vedaastro.github.io/destiny-matrix-22-arcana-math/](https://vedaastro.github.io/destiny-matrix-22-arcana-math/)

---

## Interactive Production Calculators (Zero-Latency Browser Engines)

### Russian (РФ — АстроГуру)
- **Матрица судьбы онлайн (полный расчёт октаграммы 22 арканов по дате рождения):** [https://astroguru.ru/matrica-sudby](https://astroguru.ru/matrica-sudby)
- **10 аркан в Матрице судьбы (Колесо Фортуны — расшифровка в плюсе и минусе, финансы и кармические хвосты):** [https://astroguru.ru/matrica-sudby/arkan-10](https://astroguru.ru/matrica-sudby/arkan-10)
- **14 аркан в Матрице судьбы (Умеренность / Зрелая Душа — таланты, деньги и совместимость):** [https://astroguru.ru/matrica-sudby/arkan-14](https://astroguru.ru/matrica-sudby/arkan-14)
- **Ведическая нумерология Санкхья-шастра (Число Души Джанма-анка и Число Судьбы Бхагья-анка):** [https://astroguru.ru/numerologiya](https://astroguru.ru/numerologiya)

### International (EN / IT / ES — AstrologyCalc)
- **English — Destiny Matrix Chart Calculator (22 Major Arcana & Karmic Tail):** [https://astrologycalc.com/destiny-matrix-calculator/](https://astrologycalc.com/destiny-matrix-calculator/)
- **Italiano — Calcolatore Matrice del Destino (22 Arcani Maggiori e Coda Karmica):** [https://astrologycalc.com/it/destiny-matrix-calculator/](https://astrologycalc.com/it/destiny-matrix-calculator/)
- **Español — Calculadora de Matriz del Destino (22 Arcanos Mayores y Cola Kármica):** [https://astrologycalc.com/es/destiny-matrix-calculator/](https://astrologycalc.com/es/destiny-matrix-calculator/)

---

## 1. Base-22 Modulo Recursive Reduction Operator $R_{22}(n)$

Unlike classical modular arithmetic ($n \bmod 22$), the 22 Arcana octagram uses recursive decimal digit summation for any integer $n > 22$:

$$R_{22}(n) = \begin{cases} n, & 1 \le n \le 22 \\ R_{22}\!\left(\sum_{k=0}^{m} d_k\right), & n > 22 \end{cases}$$

### Primary Octagram Vertices for Birth Date $(D, M, Y)$
1. **Point A (Personal Portrait / Day Vertex):** $A = R_{22}(D)$
2. **Point B (Spiritual Connection / Month Vertex):** $B = R_{22}(M)$
3. **Point C (Material Karma & Financial Entry / Year Vertex):** $C = R_{22}\!\left(\sum d_i(Y)\right)$
4. **Point D (Past Life Foundation / Bottom Vertex):** $D = R_{22}(A + B + C)$
5. **Point E (Core Comfort Zone / Central Node):** $E = R_{22}(A + B + C + D)$

---

## 2. Spotlight on Key Archetypes: Arcana 10 & Arcana 14

| Arcana Code | Tarot / Archetype Name | Governing Planet | Key Nodes & Karmic Tail Combinations | Full Interactive Breakdown |
| :--- | :--- | :--- | :--- | :--- |
| **Arcana 10** | Wheel of Fortune (Колесо Фортуны) | Jupiter (Guru) | Born on the 10th or 28th (`2+8=10`), October (month 10), tails `21-4-10`, `21-10-16`, `3-13-10`, `21-10-7` | [Разбор 10 аркана на AstroGuru.ru](https://astroguru.ru/matrica-sudby/arkan-10) |
| **Arcana 14** | Temperance / Mature Soul (Умеренность / Зрелая Душа) | Jupiter / Chiron | Born on the 14th, composite sums `6+8=14`, `5+9=14`, `7+7=14`, `4+10=14`, `3+11=14` | [Разбор 14 аркана на AstroGuru.ru](https://astroguru.ru/matrica-sudby/arkan-14) |

---

## 3. Sankhya Shastra (Vedic Numerology) vs Base-22 Octagram

In Vedic **Sankhya Shastra** ([https://astroguru.ru/numerologiya](https://astroguru.ru/numerologiya)), numbers are reduced to the 9 planetary Navagraha vibrations ($R_9(n) \in \{1..9\}$):
- **1 — Surya (Sun):** Leadership, autonomy, vitality.
- **2 — Chandra (Moon):** Empathy, intuition, emotional adaptability.
- **3 — Guru (Jupiter):** Wisdom, mentorship, structural law.
- **4 — Rahu (North Node):** Innovation, non-standard systems, disruption.
- **5 — Budha (Mercury):** Commerce, analytics, communication speed.
- **6 — Shukra (Venus):** Aesthetics, diplomacy, harmony, design.
- **7 — Ketu (South Node):** Research, mysticism, deep introspection.
- **8 — Shani (Saturn):** Discipline, long-horizon karma, endurance.
- **9 — Mangala (Mars):** Action, courage, decisive protection.
