// data.js
// Contiene la clasificación final de pilotos para las temporadas 2000 a 2025.
// SECCIÓN ESPECIAL: Estadísticas de Carrera (Career Totals)
const PILOTOS_HISTORICOS = {
    "Lewis Hamilton": { victorias: 105, poles: 104, puntos: 4850, titulos: 7, nacionalidad: "Reino Unido", escuderia: "Mercedes" },
    "Michael Schumacher": { victorias: 91, poles: 68, puntos: 1566, titulos: 7, nacionalidad: "Alemania", escuderia: "Ferrari" },
    "Max Verstappen": { victorias: 71, poles: 48, puntos: 3012, titulos: 4, nacionalidad: "Países Bajos", escuderia: "Red Bull Racing" },
    "Sebastian Vettel": { victorias: 53, poles: 57, puntos: 3098, titulos: 4, nacionalidad: "Alemania", escuderia: "Red Bull / Aston Martin" },
    "Alain Prost": { victorias: 51, poles: 33, puntos: 798, titulos: 4, nacionalidad: "Francia", escuderia: "McLaren / Williams" },
    "Ayrton Senna": { victorias: 41, poles: 65, puntos: 614, titulos: 3, nacionalidad: "Brasil", escuderia: "McLaren" },
    "Fernando Alonso": { victorias: 32, poles: 22, puntos: 2350, titulos: 2, nacionalidad: "España", escuderia: "Aston Martin / Renault" },
    "Nigel Mansell": { victorias: 31, poles: 32, puntos: 482, titulos: 1, nacionalidad: "Reino Unido", escuderia: "Williams" },
    "Niki Lauda": { victorias: 25, poles: 24, puntos: 420, titulos: 3, nacionalidad: "Austria", escuderia: "Ferrari / McLaren" },
    "Jim Clark": { victorias: 25, poles: 33, puntos: 274, titulos: 2, nacionalidad: "Reino Unido", escuderia: "Lotus" }
};

    // ... aquí sigue el resto de tu código original ...
const f1_data = {
    // -------------------------------------------------------------------
    // 2025 (Simulado/Actual)
    // -------------------------------------------------------------------
    "2025": [
        {pos: 1, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 400},
        {pos: 2, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 350},
        {pos: 3, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 300},
        {pos: 4, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 250},
        {pos: 5, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 200},
        {pos: 6, piloto: "Oscar Piastri", nacionalidad: "Australia", escuderia: "McLaren", puntos: 180},
        {pos: 7, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Ferrari", puntos: 150},
        {pos: 8, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Red Bull Racing", puntos: 120},
        {pos: 9, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Aston Martin", puntos: 90},
        {pos: 10, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Alpine", puntos: 60},
        {pos: 11, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Alpine", puntos: 40},
        {pos: 12, piloto: "Yuki Tsunoda", nacionalidad: "Japón", escuderia: "Racing Bulls", puntos: 30},
        {pos: 13, piloto: "Alex Albon", nacionalidad: "Tailandia", escuderia: "Williams", puntos: 20},
        {pos: 14, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Racing Bulls", puntos: 10},
        {pos: 15, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 8},
        {pos: 16, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Sauber", puntos: 6},
        {pos: 17, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Aston Martin", puntos: 4},
        {pos: 18, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 2},
        {pos: 19, piloto: "Zhou Guanyu", nacionalidad: "China", escuderia: "Sauber", puntos: 1},
        {pos: 20, piloto: "Logan Sargeant", nacionalidad: "EE. UU.", escuderia: "Williams", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2024 (Oficial)
    // -------------------------------------------------------------------
    "2024": [
        {pos: 1, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 429},
        {pos: 2, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 349},
        {pos: 3, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 337},
        {pos: 4, piloto: "Oscar Piastri", nacionalidad: "Australia", escuderia: "McLaren", puntos: 292},
        {pos: 5, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Ferrari", puntos: 290},
        {pos: 6, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 245},
        {pos: 7, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 223},
        {pos: 8, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Red Bull Racing", puntos: 152},
        {pos: 9, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Aston Martin", puntos: 68},
        {pos: 10, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Alpine", puntos: 42},
        {pos: 11, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Alpine", puntos: 27},
        {pos: 12, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Haas", puntos: 22},
        {pos: 13, piloto: "Yuki Tsunoda", nacionalidad: "Japón", escuderia: "RB", puntos: 22},
        {pos: 14, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "RB", puntos: 17},
        {pos: 15, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Aston Martin", puntos: 17},
        {pos: 16, piloto: "Oliver Bearman", nacionalidad: "Reino Unido", escuderia: "Ferrari", puntos: 6},
        {pos: 17, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 5},
        {pos: 18, piloto: "Alex Albon", nacionalidad: "Tailandia", escuderia: "Williams", puntos: 0},
        {pos: 19, piloto: "Guanyu Zhou", nacionalidad: "China", escuderia: "Sauber", puntos: 0},
        {pos: 20, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Sauber", puntos: 0},
        {pos: 21, piloto: "Logan Sargeant", nacionalidad: "EE. UU.", escuderia: "Williams", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2023 (Oficial)
    // -------------------------------------------------------------------
    "2023": [
        {pos: 1, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 575},
        {pos: 2, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Red Bull Racing", puntos: 285},
        {pos: 3, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 234},
        {pos: 4, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Aston Martin", puntos: 206},
        {pos: 5, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 206},
        {pos: 6, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 205},
        {pos: 7, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Ferrari", puntos: 200},
        {pos: 8, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 175},
        {pos: 9, piloto: "Oscar Piastri", nacionalidad: "Australia", escuderia: "McLaren", puntos: 97},
        {pos: 10, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Aston Martin", puntos: 74},
        {pos: 11, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Alpine", puntos: 62},
        {pos: 12, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Alpine", puntos: 58},
        {pos: 13, piloto: "Alex Albon", nacionalidad: "Tailandia", escuderia: "Williams", puntos: 27},
        {pos: 14, piloto: "Yuki Tsunoda", nacionalidad: "Japón", escuderia: "AlphaTauri", puntos: 17},
        {pos: 15, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Alfa Romeo", puntos: 10},
        {pos: 16, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Haas", puntos: 9},
        {pos: 17, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "AlphaTauri", puntos: 6},
        {pos: 18, piloto: "Guanyu Zhou", nacionalidad: "China", escuderia: "Alfa Romeo", puntos: 6},
        {pos: 19, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 3},
        {pos: 20, piloto: "Liam Lawson", nacionalidad: "Nueva Zelanda", escuderia: "AlphaTauri", puntos: 2},
        {pos: 21, piloto: "Logan Sargeant", nacionalidad: "EE. UU.", escuderia: "Williams", puntos: 1},
        {pos: 22, piloto: "Nyck de Vries", nacionalidad: "Países Bajos", escuderia: "AlphaTauri", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2022 (Oficial)
    // -------------------------------------------------------------------
    "2022": [
        {pos: 1, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 454},
        {pos: 2, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 308},
        {pos: 3, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Red Bull Racing", puntos: 305},
        {pos: 4, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 275},
        {pos: 5, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Ferrari", puntos: 246},
        {pos: 6, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 240},
        {pos: 7, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 122},
        {pos: 8, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Alpine", puntos: 92},
        {pos: 9, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Alpine", puntos: 81},
        {pos: 10, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Alfa Romeo", puntos: 49},
        {pos: 11, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "McLaren", puntos: 37},
        {pos: 12, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Aston Martin", puntos: 37},
        {pos: 13, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "AlphaTauri", puntos: 23},
        {pos: 14, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 25},
        {pos: 15, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Aston Martin", puntos: 18},
        {pos: 16, piloto: "Mick Schumacher", nacionalidad: "Alemania", escuderia: "Haas", puntos: 12},
        {pos: 17, piloto: "Yuki Tsunoda", nacionalidad: "Japón", escuderia: "AlphaTauri", puntos: 12},
        {pos: 18, piloto: "Guanyu Zhou", nacionalidad: "China", escuderia: "Alfa Romeo", puntos: 6},
        {pos: 19, piloto: "Alex Albon", nacionalidad: "Tailandia", escuderia: "Williams", puntos: 4},
        {pos: 20, piloto: "Nyck de Vries", nacionalidad: "Países Bajos", escuderia: "Williams", puntos: 2},
        {pos: 21, piloto: "Nicholas Latifi", nacionalidad: "Canadá", escuderia: "Williams", puntos: 0},
        {pos: 22, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Aston Martin", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2021 (Oficial)
    // -------------------------------------------------------------------
    "2021": [
        {pos: 1, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 395.5},
        {pos: 2, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 387.5},
        {pos: 3, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Mercedes", puntos: 226},
        {pos: 4, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Red Bull Racing", puntos: 190},
        {pos: 5, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Ferrari", puntos: 164.5},
        {pos: 6, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 160},
        {pos: 7, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 159},
        {pos: 8, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "McLaren", puntos: 115},
        {pos: 9, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "AlphaTauri", puntos: 110},
        {pos: 10, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Alpine", puntos: 81},
        {pos: 11, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Alpine", puntos: 74},
        {pos: 12, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Aston Martin", puntos: 43},
        {pos: 13, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Aston Martin", puntos: 34},
        {pos: 14, piloto: "Yuki Tsunoda", nacionalidad: "Japón", escuderia: "AlphaTauri", puntos: 32},
        {pos: 15, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Williams", puntos: 16},
        {pos: 16, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Alfa Romeo", puntos: 10},
        {pos: 17, piloto: "Nicholas Latifi", nacionalidad: "Canadá", escuderia: "Williams", puntos: 7},
        {pos: 18, piloto: "Antonio Giovinazzi", nacionalidad: "Italia", escuderia: "Alfa Romeo", puntos: 3},
        {pos: 19, piloto: "Mick Schumacher", nacionalidad: "Alemania", escuderia: "Haas", puntos: 0},
        {pos: 20, piloto: "Nikita Mazepin", nacionalidad: "Rusia", escuderia: "Haas", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2020 (Oficial)
    // -------------------------------------------------------------------
    "2020": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 347},
        {pos: 2, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Mercedes", puntos: 223},
        {pos: 3, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 214},
        {pos: 4, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Racing Point", puntos: 125},
        {pos: 5, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Renault", puntos: 119},
        {pos: 6, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "McLaren", puntos: 105},
        {pos: 7, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 98},
        {pos: 8, piloto: "Alexander Albon", nacionalidad: "Tailandia", escuderia: "Red Bull Racing", puntos: 105},
        {pos: 9, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 97},
        {pos: 10, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "AlphaTauri", puntos: 75},
        {pos: 11, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Racing Point", puntos: 75},
        {pos: 12, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Renault", puntos: 66},
        {pos: 13, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 33},
        {pos: 14, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "AlphaTauri", puntos: 32},
        {pos: 15, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Racing Point", puntos: 10},
        {pos: 16, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Alfa Romeo", puntos: 4},
        {pos: 17, piloto: "Antonio Giovinazzi", nacionalidad: "Italia", escuderia: "Alfa Romeo", puntos: 4},
        {pos: 18, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Williams", puntos: 3},
        {pos: 19, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Haas", puntos: 2},
        {pos: 20, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 1},
        {pos: 21, piloto: "Nicholas Latifi", nacionalidad: "Canadá", escuderia: "Williams", puntos: 0},
        {pos: 22, piloto: "Jack Aitken", nacionalidad: "Reino Unido", escuderia: "Williams", puntos: 0},
        {pos: 23, piloto: "Pietro Fittipaldi", nacionalidad: "Brasil", escuderia: "Haas", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2019 (Oficial)
    // -------------------------------------------------------------------
    "2019": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 413},
        {pos: 2, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Mercedes", puntos: 326},
        {pos: 3, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 278},
        {pos: 4, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Ferrari", puntos: 264},
        {pos: 5, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 240},
        {pos: 6, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "McLaren", puntos: 96},
        {pos: 7, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Red Bull Racing", puntos: 95},
        {pos: 8, piloto: "Alexander Albon", nacionalidad: "Tailandia", escuderia: "Red Bull Racing", puntos: 92},
        {pos: 9, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Renault", puntos: 54},
        {pos: 10, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Renault", puntos: 52},
        {pos: 11, piloto: "Lando Norris", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 49},
        {pos: 12, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "Toro Rosso", puntos: 37},
        {pos: 13, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Racing Point", puntos: 52},
        {pos: 14, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Alfa Romeo", puntos: 43},
        {pos: 15, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Racing Point", puntos: 21},
        {pos: 16, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 20},
        {pos: 17, piloto: "Antonio Giovinazzi", nacionalidad: "Italia", escuderia: "Alfa Romeo", puntos: 14},
        {pos: 18, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Haas", puntos: 8},
        {pos: 19, piloto: "Robert Kubica", nacionalidad: "Polonia", escuderia: "Williams", puntos: 1},
        {pos: 20, piloto: "George Russell", nacionalidad: "Reino Unido", escuderia: "Williams", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2018 (Oficial)
    // -------------------------------------------------------------------
    "2018": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 408},
        {pos: 2, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 320},
        {pos: 3, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 251},
        {pos: 4, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 249},
        {pos: 5, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Mercedes", puntos: 247},
        {pos: 6, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 170},
        {pos: 7, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Renault", puntos: 69},
        {pos: 8, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Force India", puntos: 62},
        {pos: 9, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 56},
        {pos: 10, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Renault", puntos: 53},
        {pos: 11, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "McLaren", puntos: 50},
        {pos: 12, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Force India", puntos: 49},
        {pos: 13, piloto: "Charles Leclerc", nacionalidad: "Mónaco", escuderia: "Sauber", puntos: 39},
        {pos: 14, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Haas", puntos: 37},
        {pos: 15, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 29},
        {pos: 16, piloto: "Stoffel Vandoorne", nacionalidad: "Bélgica", escuderia: "McLaren", puntos: 12},
        {pos: 17, piloto: "Marcus Ericsson", nacionalidad: "Suecia", escuderia: "Sauber", puntos: 9},
        {pos: 18, piloto: "Brendon Hartley", nacionalidad: "Nueva Zelanda", escuderia: "Toro Rosso", puntos: 4},
        {pos: 19, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Williams", puntos: 6},
        {pos: 20, piloto: "Sergey Sirotkin", nacionalidad: "Rusia", escuderia: "Williams", puntos: 1}
    ],
    // -------------------------------------------------------------------
    // 2017 (Oficial)
    // -------------------------------------------------------------------
    "2017": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 363},
        {pos: 2, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 317},
        {pos: 3, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Mercedes", puntos: 305},
        {pos: 4, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 205},
        {pos: 5, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 200},
        {pos: 6, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 168},
        {pos: 7, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Force India", puntos: 100},
        {pos: 8, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Force India", puntos: 87},
        {pos: 9, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Toro Rosso / Renault", puntos: 54},
        {pos: 10, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Renault", puntos: 43},
        {pos: 11, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Williams", puntos: 43},
        {pos: 12, piloto: "Lance Stroll", nacionalidad: "Canadá", escuderia: "Williams", puntos: 40},
        {pos: 13, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Haas", puntos: 28},
        {pos: 14, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Haas", puntos: 19},
        {pos: 15, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "McLaren", puntos: 17},
        {pos: 16, piloto: "Stoffel Vandoorne", nacionalidad: "Bélgica", escuderia: "McLaren", puntos: 13},
        {pos: 17, piloto: "Jolyon Palmer", nacionalidad: "Reino Unido", escuderia: "Renault", puntos: 8},
        {pos: 18, piloto: "Pascal Wehrlein", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 5},
        {pos: 19, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "Toro Rosso", puntos: 5},
        {pos: 20, piloto: "Antonio Giovinazzi", nacionalidad: "Italia", escuderia: "Sauber", puntos: 0},
        {pos: 21, piloto: "Pierre Gasly", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 0},
        {pos: 22, piloto: "Brendon Hartley", nacionalidad: "Nueva Zelanda", escuderia: "Toro Rosso", puntos: 0},
        {pos: 23, piloto: "Marcus Ericsson", nacionalidad: "Suecia", escuderia: "Sauber", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2016 (Oficial)
    // -------------------------------------------------------------------
    "2016": [
        {pos: 1, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 385},
        {pos: 2, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 380},
        {pos: 3, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 256},
        {pos: 4, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 212},
        {pos: 5, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 204},
        {pos: 6, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 186},
        {pos: 7, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Force India", puntos: 101},
        {pos: 8, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Williams", puntos: 85},
        {pos: 9, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Force India", puntos: 72},
        {pos: 10, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "McLaren", puntos: 54},
        {pos: 11, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Williams", puntos: 53},
        {pos: 12, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Toro Rosso", puntos: 46},
        {pos: 13, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Haas", puntos: 29},
        {pos: 14, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "Toro Rosso", puntos: 25},
        {pos: 15, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 21},
        {pos: 16, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "Renault", puntos: 7},
        {pos: 17, piloto: "Felipe Nasr", nacionalidad: "Brasil", escuderia: "Sauber", puntos: 2},
        {pos: 18, piloto: "Jolyon Palmer", nacionalidad: "Reino Unido", escuderia: "Renault", puntos: 1},
        {pos: 19, piloto: "Pascal Wehrlein", nacionalidad: "Alemania", escuderia: "Manor", puntos: 1},
        {pos: 20, piloto: "Stoffel Vandoorne", nacionalidad: "Bélgica", escuderia: "McLaren", puntos: 0},
        {pos: 21, piloto: "Esteban Gutiérrez", nacionalidad: "México", escuderia: "Haas", puntos: 0},
        {pos: 22, piloto: "Marcus Ericsson", nacionalidad: "Suecia", escuderia: "Sauber", puntos: 0},
        {pos: 23, piloto: "Rio Haryanto", nacionalidad: "Indonesia", escuderia: "Manor", puntos: 0},
        {pos: 24, piloto: "Esteban Ocon", nacionalidad: "Francia", escuderia: "Manor", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2015 (Oficial)
    // -------------------------------------------------------------------
    "2015": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 381},
        {pos: 2, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 322},
        {pos: 3, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 278},
        {pos: 4, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 150},
        {pos: 5, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Williams", puntos: 136},
        {pos: 6, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Williams", puntos: 121},
        {pos: 7, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 92},
        {pos: 8, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "Red Bull Racing", puntos: 95},
        {pos: 9, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Force India", puntos: 78},
        {pos: 10, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Force India", puntos: 58},
        {pos: 11, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Lotus", puntos: 49},
        {pos: 12, piloto: "Max Verstappen", nacionalidad: "Países Bajos", escuderia: "Toro Rosso", puntos: 49},
        {pos: 13, piloto: "Felipe Nasr", nacionalidad: "Brasil", escuderia: "Sauber", puntos: 27},
        {pos: 14, piloto: "Carlos Sainz", nacionalidad: "España", escuderia: "Toro Rosso", puntos: 18},
        {pos: 15, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "McLaren", puntos: 11},
        {pos: 16, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 16},
        {pos: 17, piloto: "Marcus Ericsson", nacionalidad: "Suecia", escuderia: "Sauber", puntos: 9},
        {pos: 18, piloto: "Pastor Maldonado", nacionalidad: "Venezuela", escuderia: "Lotus", puntos: 27},
        {pos: 19, piloto: "Roberto Merhi", nacionalidad: "España", escuderia: "Manor Marussia", puntos: 0},
        {pos: 20, piloto: "Will Stevens", nacionalidad: "Reino Unido", escuderia: "Manor Marussia", puntos: 0},
        {pos: 21, piloto: "Alexander Rossi", nacionalidad: "EE. UU.", escuderia: "Manor Marussia", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2014 (Oficial)
    // -------------------------------------------------------------------
    "2014": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 384},
        {pos: 2, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 317},
        {pos: 3, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 238},
        {pos: 4, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Williams", puntos: 186},
        {pos: 5, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 163},
        {pos: 6, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Ferrari", puntos: 161},
        {pos: 7, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Williams", puntos: 134},
        {pos: 8, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 126},
        {pos: 9, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Force India", puntos: 96},
        {pos: 10, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Force India", puntos: 59},
        {pos: 11, piloto: "Kevin Magnussen", nacionalidad: "Dinamarca", escuderia: "McLaren", puntos: 55},
        {pos: 12, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 55},
        {pos: 13, piloto: "Jean-Éric Vergne", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 22},
        {pos: 14, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Lotus", puntos: 8},
        {pos: 15, piloto: "Daniil Kvyat", nacionalidad: "Rusia", escuderia: "Toro Rosso", puntos: 8},
        {pos: 16, piloto: "Pastor Maldonado", nacionalidad: "Venezuela", escuderia: "Lotus", puntos: 2},
        {pos: 17, piloto: "Jules Bianchi", nacionalidad: "Francia", escuderia: "Marussia", puntos: 2},
        {pos: 18, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 0},
        {pos: 19, piloto: "Marcus Ericsson", nacionalidad: "Suecia", escuderia: "Caterham", puntos: 0},
        {pos: 20, piloto: "Kamui Kobayashi", nacionalidad: "Japón", escuderia: "Caterham", puntos: 0},
        {pos: 21, piloto: "Max Chilton", nacionalidad: "Reino Unido", escuderia: "Marussia", puntos: 0},
        {pos: 22, piloto: "Esteban Gutiérrez", nacionalidad: "México", escuderia: "Sauber", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2013 (Oficial)
    // -------------------------------------------------------------------
    "2013": [
        {pos: 1, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 397},
        {pos: 2, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Ferrari", puntos: 242},
        {pos: 3, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 199},
        {pos: 4, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "Mercedes", puntos: 189},
        {pos: 5, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Lotus", puntos: 183},
        {pos: 6, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 171},
        {pos: 7, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 112},
        {pos: 8, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Lotus", puntos: 132},
        {pos: 9, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 73},
        {pos: 10, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 51},
        {pos: 11, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "McLaren", puntos: 49},
        {pos: 12, piloto: "Paul di Resta", nacionalidad: "Reino Unido", escuderia: "Force India", puntos: 48},
        {pos: 13, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Force India", puntos: 29},
        {pos: 14, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Toro Rosso", puntos: 20},
        {pos: 15, piloto: "Jean-Éric Vergne", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 13},
        {pos: 16, piloto: "Esteban Gutiérrez", nacionalidad: "México", escuderia: "Sauber", puntos: 6},
        {pos: 17, piloto: "Pastor Maldonado", nacionalidad: "Venezuela", escuderia: "Williams", puntos: 1},
        {pos: 18, piloto: "Valtteri Bottas", nacionalidad: "Finlandia", escuderia: "Williams", puntos: 4},
        {pos: 19, piloto: "Jules Bianchi", nacionalidad: "Francia", escuderia: "Marussia", puntos: 0},
        {pos: 20, piloto: "Charles Pic", nacionalidad: "Francia", escuderia: "Caterham", puntos: 0},
        {pos: 21, piloto: "Giedo van der Garde", nacionalidad: "Países Bajos", escuderia: "Caterham", puntos: 0},
        {pos: 22, piloto: "Max Chilton", nacionalidad: "Reino Unido", escuderia: "Marussia", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2012 (Oficial)
    // -------------------------------------------------------------------
    "2012": [
        {pos: 1, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 281},
        {pos: 2, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Ferrari", puntos: 278},
        {pos: 3, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Lotus", puntos: 207},
        {pos: 4, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 190},
        {pos: 5, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 188},
        {pos: 6, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 179},
        {pos: 7, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 122},
        {pos: 8, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Lotus", puntos: 96},
        {pos: 9, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 93},
        {pos: 10, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Force India", puntos: 73},
        {pos: 11, piloto: "Paul di Resta", nacionalidad: "Reino Unido", escuderia: "Force India", puntos: 46},
        {pos: 12, piloto: "Kamui Kobayashi", nacionalidad: "Japón", escuderia: "Sauber", puntos: 60},
        {pos: 13, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 49},
        {pos: 14, piloto: "Pastor Maldonado", nacionalidad: "Venezuela", escuderia: "Williams", puntos: 45},
        {pos: 15, piloto: "Bruno Senna", nacionalidad: "Brasil", escuderia: "Williams", puntos: 31},
        {pos: 16, piloto: "Jean-Éric Vergne", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 16},
        {pos: 17, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "Toro Rosso", puntos: 10},
        {pos: 18, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Sauber", puntos: 66},
        {pos: 19, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "Caterham", puntos: 0},
        {pos: 20, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Marussia", puntos: 0},
        {pos: 21, piloto: "Vitaly Petrov", nacionalidad: "Rusia", escuderia: "Caterham", puntos: 0},
        {pos: 22, piloto: "Charles Pic", nacionalidad: "Francia", escuderia: "Marussia", puntos: 0},
        {pos: 23, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "HRT", puntos: 0},
        {pos: 24, piloto: "Narain Karthikeyan", nacionalidad: "India", escuderia: "HRT", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2011 (Oficial)
    // -------------------------------------------------------------------
    "2011": [
        {pos: 1, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 392},
        {pos: 2, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 270},
        {pos: 3, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 258},
        {pos: 4, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Ferrari", puntos: 257},
        {pos: 5, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 227},
        {pos: 6, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 118},
        {pos: 7, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 89},
        {pos: 8, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 76},
        {pos: 9, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Force India", puntos: 42},
        {pos: 10, piloto: "Paul di Resta", nacionalidad: "Reino Unido", escuderia: "Force India", puntos: 27},
        {pos: 11, piloto: "Kamui Kobayashi", nacionalidad: "Japón", escuderia: "Sauber", puntos: 30},
        {pos: 12, piloto: "Vitaly Petrov", nacionalidad: "Rusia", escuderia: "Renault", puntos: 37},
        {pos: 13, piloto: "Bruno Senna", nacionalidad: "Brasil", escuderia: "Renault", puntos: 2},
        {pos: 14, piloto: "Jaime Alguersuari", nacionalidad: "España", escuderia: "Toro Rosso", puntos: 26},
        {pos: 15, piloto: "Sébastien Buemi", nacionalidad: "Suiza", escuderia: "Toro Rosso", puntos: 15},
        {pos: 16, piloto: "Sergio Pérez", nacionalidad: "México", escuderia: "Sauber", puntos: 14},
        {pos: 17, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Williams", puntos: 4},
        {pos: 18, piloto: "Pastor Maldonado", nacionalidad: "Venezuela", escuderia: "Williams", puntos: 1},
        {pos: 19, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "Lotus", puntos: 0},
        {pos: 20, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Lotus", puntos: 0},
        {pos: 21, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Marussia Virgin", puntos: 0},
        {pos: 22, piloto: "Jérôme d'Ambrosio", nacionalidad: "Bélgica", escuderia: "Marussia Virgin", puntos: 0},
        {pos: 23, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "HRT", puntos: 0},
        {pos: 24, piloto: "Daniel Ricciardo", nacionalidad: "Australia", escuderia: "HRT", puntos: 0},
        {pos: 25, piloto: "Narain Karthikeyan", nacionalidad: "India", escuderia: "HRT", puntos: 0},
        {pos: 26, piloto: "Karun Chandhok", nacionalidad: "India", escuderia: "Lotus", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2010 (Oficial)
    // -------------------------------------------------------------------
    "2010": [
        {pos: 1, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 256},
        {pos: 2, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Ferrari", puntos: 252},
        {pos: 3, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 242},
        {pos: 4, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 240},
        {pos: 5, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 214},
        {pos: 6, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 144},
        {pos: 7, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 142},
        {pos: 8, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Mercedes", puntos: 72},
        {pos: 9, piloto: "Robert Kubica", nacionalidad: "Polonia", escuderia: "Renault", puntos: 136},
        {pos: 10, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Williams", puntos: 47},
        {pos: 11, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Force India", puntos: 47},
        {pos: 12, piloto: "Kamui Kobayashi", nacionalidad: "Japón", escuderia: "Sauber", puntos: 32},
        {pos: 13, piloto: "Vitaly Petrov", nacionalidad: "Rusia", escuderia: "Renault", puntos: 27},
        {pos: 14, piloto: "Nico Hülkenberg", nacionalidad: "Alemania", escuderia: "Williams", puntos: 22},
        {pos: 15, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "Force India", puntos: 21},
        {pos: 16, piloto: "Sébastien Buemi", nacionalidad: "Suiza", escuderia: "Toro Rosso", puntos: 8},
        {pos: 17, piloto: "Jaime Alguersuari", nacionalidad: "España", escuderia: "Toro Rosso", puntos: 5},
        {pos: 18, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "Sauber", puntos: 6},
        {pos: 19, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "Lotus", puntos: 0},
        {pos: 20, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Lotus", puntos: 0},
        {pos: 21, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Virgin Racing", puntos: 0},
        {pos: 22, piloto: "Bruno Senna", nacionalidad: "Brasil", escuderia: "HRT", puntos: 0},
        {pos: 23, piloto: "Karun Chandhok", nacionalidad: "India", escuderia: "HRT", puntos: 0},
        {pos: 24, piloto: "Lucas di Grassi", nacionalidad: "Brasil", escuderia: "Virgin Racing", puntos: 0},
        {pos: 25, piloto: "Christian Klien", nacionalidad: "Austria", escuderia: "HRT", puntos: 0},
        {pos: 26, piloto: "Sakon Yamamoto", nacionalidad: "Japón", escuderia: "HRT", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2009 (Oficial)
    // -------------------------------------------------------------------
    "2009": [
        {pos: 1, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Brawn GP", puntos: 95},
        {pos: 2, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Red Bull Racing", puntos: 84},
        {pos: 3, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Brawn GP", puntos: 77},
        {pos: 4, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 69.5},
        {pos: 5, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 49},
        {pos: 6, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 48},
        {pos: 7, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Williams", puntos: 35.5},
        {pos: 8, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Toyota", puntos: 32.5},
        {pos: 9, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 26},
        {pos: 10, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Toyota", puntos: 24},
        {pos: 11, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "BMW Sauber", puntos: 19},
        {pos: 12, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 22},
        {pos: 13, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 22},
        {pos: 14, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Force India / Ferrari", puntos: 8},
        {pos: 15, piloto: "Robert Kubica", nacionalidad: "Polonia", escuderia: "BMW Sauber", puntos: 17},
        {pos: 16, piloto: "Sébastien Buemi", nacionalidad: "Suiza", escuderia: "Toro Rosso", puntos: 6},
        {pos: 17, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Force India", puntos: 5},
        {pos: 18, piloto: "Kamui Kobayashi", nacionalidad: "Japón", escuderia: "Toyota", puntos: 0},
        {pos: 19, piloto: "Jaime Alguersuari", nacionalidad: "España", escuderia: "Toro Rosso", puntos: 0},
        {pos: 20, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "Force India", puntos: 0},
        {pos: 21, piloto: "Kazuki Nakajima", nacionalidad: "Japón", escuderia: "Williams", puntos: 0},
        {pos: 22, piloto: "Romain Grosjean", nacionalidad: "Francia", escuderia: "Renault", puntos: 0},
        {pos: 23, piloto: "Lucas di Grassi", nacionalidad: "Brasil", escuderia: "Renault", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2008 (Oficial)
    // -------------------------------------------------------------------
    "2008": [
        {pos: 1, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 98},
        {pos: 2, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 97},
        {pos: 3, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 75},
        {pos: 4, piloto: "Robert Kubica", nacionalidad: "Polonia", escuderia: "BMW Sauber", puntos: 75},
        {pos: 5, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 61},
        {pos: 6, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "BMW Sauber", puntos: 60},
        {pos: 7, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 53},
        {pos: 8, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "Toro Rosso", puntos: 35},
        {pos: 9, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Toyota", puntos: 31},
        {pos: 10, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Toyota", puntos: 25},
        {pos: 11, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 21},
        {pos: 12, piloto: "Nelsinho Piquet", nacionalidad: "Brasil", escuderia: "Renault", puntos: 19},
        {pos: 13, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Williams", puntos: 17},
        {pos: 14, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Honda", puntos: 11},
        {pos: 15, piloto: "Kazuki Nakajima", nacionalidad: "Japón", escuderia: "Williams", puntos: 9},
        {pos: 16, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "Red Bull Racing", puntos: 8},
        {pos: 17, piloto: "Sébastien Bourdais", nacionalidad: "Francia", escuderia: "Toro Rosso", puntos: 4},
        {pos: 18, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Honda", puntos: 3},
        {pos: 19, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Force India", puntos: 0},
        {pos: 20, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Force India", puntos: 0},
        {pos: 21, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "Super Aguri", puntos: 0},
        {pos: 22, piloto: "Anthony Davidson", nacionalidad: "Reino Unido", escuderia: "Super Aguri", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2007 (Oficial)
    // -------------------------------------------------------------------
    "2007": [
        {pos: 1, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Ferrari", puntos: 110},
        {pos: 2, piloto: "Lewis Hamilton", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 109},
        {pos: 3, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "McLaren", puntos: 109},
        {pos: 4, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 94},
        {pos: 5, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "BMW Sauber", puntos: 61},
        {pos: 6, piloto: "Robert Kubica", nacionalidad: "Polonia", escuderia: "BMW Sauber", puntos: 39},
        {pos: 7, piloto: "Heikki Kovalainen", nacionalidad: "Finlandia", escuderia: "Renault", puntos: 30},
        {pos: 8, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Renault", puntos: 21},
        {pos: 9, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Toyota", puntos: 8},
        {pos: 10, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Red Bull Racing", puntos: 10},
        {pos: 11, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "Red Bull Racing", puntos: 14},
        {pos: 12, piloto: "Alexander Wurz", nacionalidad: "Austria", escuderia: "Williams", puntos: 13},
        {pos: 13, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Williams", puntos: 15},
        {pos: 14, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Honda", puntos: 0},
        {pos: 15, piloto: "Sebastian Vettel", nacionalidad: "Alemania", escuderia: "BMW Sauber / Toro Rosso", puntos: 6},
        {pos: 16, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Honda", puntos: 6},
        {pos: 17, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Toyota", puntos: 5},
        {pos: 18, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "Super Aguri", puntos: 4},
        {pos: 19, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "Toro Rosso", puntos: 3},
        {pos: 20, piloto: "Adrian Sutil", nacionalidad: "Alemania", escuderia: "Spyker", puntos: 1},
        {pos: 21, piloto: "Anthony Davidson", nacionalidad: "Reino Unido", escuderia: "Super Aguri", puntos: 0},
        {pos: 22, piloto: "Scott Speed", nacionalidad: "EE. UU.", escuderia: "Toro Rosso", puntos: 0},
        {pos: 23, piloto: "Sakon Yamamoto", nacionalidad: "Japón", escuderia: "Spyker", puntos: 0},
        {pos: 24, piloto: "Christijan Albers", nacionalidad: "Países Bajos", escuderia: "Spyker", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2006 (Oficial)
    // -------------------------------------------------------------------
    "2006": [
        {pos: 1, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 134},
        {pos: 2, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 121},
        {pos: 3, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 80},
        {pos: 4, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Renault", puntos: 72},
        {pos: 5, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 65},
        {pos: 6, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Honda", puntos: 56},
        {pos: 7, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Honda", puntos: 30},
        {pos: 8, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "McLaren", puntos: 26},
        {pos: 9, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "BMW Sauber", puntos: 23},
        {pos: 10, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Toyota", puntos: 20},
        {pos: 11, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "McLaren", puntos: 19},
        {pos: 12, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Toyota", puntos: 15},
        {pos: 13, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "Red Bull Racing", puntos: 14},
        {pos: 14, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Williams", puntos: 7},
        {pos: 15, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "BMW Sauber", puntos: 7},
        {pos: 16, piloto: "Christian Klien", nacionalidad: "Austria", escuderia: "Red Bull Racing", puntos: 2},
        {pos: 17, piloto: "Nico Rosberg", nacionalidad: "Alemania", escuderia: "Williams", puntos: 4},
        {pos: 18, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "Toro Rosso", puntos: 1},
        {pos: 19, piloto: "Scott Speed", nacionalidad: "EE. UU.", escuderia: "Toro Rosso", puntos: 0},
        {pos: 20, piloto: "Christijan Albers", nacionalidad: "Países Bajos", escuderia: "Midland", puntos: 0},
        {pos: 21, piloto: "Tiago Monteiro", nacionalidad: "Portugal", escuderia: "Midland", puntos: 0},
        {pos: 22, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "Super Aguri", puntos: 0},
        {pos: 23, piloto: "Robert Doornbos", nacionalidad: "Países Bajos", escuderia: "Red Bull Racing", puntos: 0},
        {pos: 24, piloto: "Sakon Yamamoto", nacionalidad: "Japón", escuderia: "Super Aguri", puntos: 0},
        {pos: 25, piloto: "Yuji Ide", nacionalidad: "Japón", escuderia: "Super Aguri", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2005 (Oficial)
    // -------------------------------------------------------------------
    "2005": [
        {pos: 1, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 133},
        {pos: 2, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 112},
        {pos: 3, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 62},
        {pos: 4, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "McLaren", puntos: 60},
        {pos: 5, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Renault", puntos: 58},
        {pos: 6, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Toyota", puntos: 45},
        {pos: 7, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "Red Bull Racing", puntos: 24},
        {pos: 8, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "BAR", puntos: 37},
        {pos: 9, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Williams", puntos: 36},
        {pos: 10, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Williams", puntos: 28},
        {pos: 11, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 38},
        {pos: 12, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "Sauber", puntos: 9},
        {pos: 13, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Toyota", puntos: 33},
        {pos: 14, piloto: "Tiago Monteiro", nacionalidad: "Portugal", escuderia: "Jordan", puntos: 7},
        {pos: 15, piloto: "Alexander Wurz", nacionalidad: "Austria", escuderia: "McLaren", puntos: 6},
        {pos: 16, piloto: "Christian Klien", nacionalidad: "Austria", escuderia: "Red Bull Racing", puntos: 9},
        {pos: 17, piloto: "Christijan Albers", nacionalidad: "Países Bajos", escuderia: "Minardi", puntos: 4},
        {pos: 18, piloto: "Narain Karthikeyan", nacionalidad: "India", escuderia: "Jordan", puntos: 5},
        {pos: 19, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Sauber", puntos: 11},
        {pos: 20, piloto: "Patrick Friesacher", nacionalidad: "Austria", escuderia: "Minardi", puntos: 3},
        {pos: 21, piloto: "Antônio Pizzonia", nacionalidad: "Brasil", escuderia: "Williams", puntos: 2},
        {pos: 22, piloto: "Vitantonio Liuzzi", nacionalidad: "Italia", escuderia: "Red Bull Racing", puntos: 1},
        {pos: 23, piloto: "Robert Doornbos", nacionalidad: "Países Bajos", escuderia: "Jordan", puntos: 0},
        {pos: 24, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "BAR", puntos: 1}
    ],
    // -------------------------------------------------------------------
    // 2004 (Oficial)
    // -------------------------------------------------------------------
    "2004": [
        {pos: 1, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 148},
        {pos: 2, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 114},
        {pos: 3, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "BAR", puntos: 85},
        {pos: 4, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 59},
        {pos: 5, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "Williams", puntos: 58},
        {pos: 6, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Renault / Toyota", puntos: 46},
        {pos: 7, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 45},
        {pos: 8, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "BAR", puntos: 34},
        {pos: 9, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 24},
        {pos: 10, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Sauber", puntos: 22},
        {pos: 11, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Williams", puntos: 24},
        {pos: 12, piloto: "Felipe Massa", nacionalidad: "Brasil", escuderia: "Sauber", puntos: 12},
        {pos: 13, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Jaguar", puntos: 7},
        {pos: 14, piloto: "Olivier Panis", nacionalidad: "Francia", escuderia: "Toyota", puntos: 6},
        {pos: 15, piloto: "Christian Klien", nacionalidad: "Austria", escuderia: "Jaguar", puntos: 3},
        {pos: 16, piloto: "Cristiano da Matta", nacionalidad: "Brasil", escuderia: "Toyota", puntos: 3},
        {pos: 17, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Jordan", puntos: 3},
        {pos: 18, piloto: "Timo Glock", nacionalidad: "Alemania", escuderia: "Jordan", puntos: 2},
        {pos: 19, piloto: "Zsolt Baumgartner", nacionalidad: "Hungría", escuderia: "Minardi", puntos: 1},
        {pos: 20, piloto: "Ricardo Zonta", nacionalidad: "Brasil", escuderia: "Toyota", puntos: 0},
        {pos: 21, piloto: "Giorgio Pantano", nacionalidad: "Italia", escuderia: "Jordan", puntos: 0},
        {pos: 22, piloto: "Gianmaria Bruni", nacionalidad: "Italia", escuderia: "Minardi", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2003 (Oficial)
    // -------------------------------------------------------------------
    "2003": [
        {pos: 1, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 93},
        {pos: 2, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 91},
        {pos: 3, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "Williams", puntos: 82},
        {pos: 4, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Williams", puntos: 58},
        {pos: 5, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 65},
        {pos: 6, piloto: "Fernando Alonso", nacionalidad: "España", escuderia: "Renault", puntos: 55},
        {pos: 7, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 51},
        {pos: 8, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Renault", puntos: 33},
        {pos: 9, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "BAR", puntos: 17},
        {pos: 10, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Jaguar", puntos: 17},
        {pos: 11, piloto: "Heinz-Harald Frentzen", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 13},
        {pos: 12, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Jordan", puntos: 12},
        {pos: 13, piloto: "Cristiano da Matta", nacionalidad: "Brasil", escuderia: "Toyota", puntos: 10},
        {pos: 14, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "BAR", puntos: 6},
        {pos: 15, piloto: "Olivier Panis", nacionalidad: "Francia", escuderia: "Toyota", puntos: 6},
        {pos: 16, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 6},
        {pos: 17, piloto: "Justin Wilson", nacionalidad: "Reino Unido", escuderia: "Minardi / Jaguar", puntos: 1},
        {pos: 18, piloto: "Ralph Firman", nacionalidad: "Reino Unido", escuderia: "Jordan", puntos: 1},
        {pos: 19, piloto: "Jos Verstappen", nacionalidad: "Países Bajos", escuderia: "Minardi", puntos: 0},
        {pos: 20, piloto: "Antônio Pizzonia", nacionalidad: "Brasil", escuderia: "Jaguar", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2002 (Oficial)
    // -------------------------------------------------------------------
    "2002": [
        {pos: 1, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 144},
        {pos: 2, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 77},
        {pos: 3, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "Williams", puntos: 50},
        {pos: 4, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Williams", puntos: 42},
        {pos: 5, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 41},
        {pos: 6, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 24},
        {pos: 7, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Renault", puntos: 14},
        {pos: 8, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Renault", puntos: 9},
        {pos: 9, piloto: "Eddie Irvine", nacionalidad: "Reino Unido", escuderia: "Jaguar", puntos: 4},
        {pos: 10, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 7},
        {pos: 11, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Jordan", puntos: 7},
        {pos: 12, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "BAR", puntos: 4},
        {pos: 13, piloto: "Olivier Panis", nacionalidad: "Francia", escuderia: "BAR", puntos: 3},
        {pos: 14, piloto: "Takuma Sato", nacionalidad: "Japón", escuderia: "Jordan", puntos: 2},
        {pos: 15, piloto: "Mark Webber", nacionalidad: "Australia", escuderia: "Minardi", puntos: 2},
        {pos: 16, piloto: "Heinz-Harald Frentzen", nacionalidad: "Alemania", escuderia: "Arrows / Sauber", puntos: 2},
        {pos: 17, piloto: "Mika Salo", nacionalidad: "Finlandia", escuderia: "Toyota", puntos: 2},
        {pos: 18, piloto: "Allan McNish", nacionalidad: "Reino Unido", escuderia: "Toyota", puntos: 0},
        {pos: 19, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "Jaguar", puntos: 0},
        {pos: 20, piloto: "Alex Yoong", nacionalidad: "Malasia", escuderia: "Minardi", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2001 (Oficial)
    // -------------------------------------------------------------------
    "2001": [
        {pos: 1, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 123},
        {pos: 2, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 65},
        {pos: 3, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 56},
        {pos: 4, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Williams", puntos: 49},
        {pos: 5, piloto: "Mika Häkkinen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 37},
        {pos: 6, piloto: "Juan Pablo Montoya", nacionalidad: "Colombia", escuderia: "Williams", puntos: 31},
        {pos: 7, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Sauber", puntos: 12},
        {pos: 8, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Jordan", puntos: 12},
        {pos: 9, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "BAR", puntos: 12},
        {pos: 10, piloto: "Kimi Räikkönen", nacionalidad: "Finlandia", escuderia: "Sauber", puntos: 9},
        {pos: 11, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Benetton", puntos: 8},
        {pos: 12, piloto: "Eddie Irvine", nacionalidad: "Reino Unido", escuderia: "Jaguar", puntos: 6},
        {pos: 13, piloto: "Jean Alesi", nacionalidad: "Francia", escuderia: "Prost / Jordan", puntos: 5},
        {pos: 14, piloto: "Olivier Panis", nacionalidad: "Francia", escuderia: "BAR", puntos: 5},
        {pos: 15, piloto: "Heinz-Harald Frentzen", nacionalidad: "Alemania", escuderia: "Jordan / Prost", puntos: 6},
        {pos: 16, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Benetton", puntos: 2},
        {pos: 17, piloto: "Jos Verstappen", nacionalidad: "Países Bajos", escuderia: "Arrows", puntos: 1},
        {pos: 18, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "Jaguar", puntos: 3},
        {pos: 19, piloto: "Luciano Burti", nacionalidad: "Brasil", escuderia: "Prost / Jaguar", puntos: 0},
        {pos: 20, piloto: "Enrique Bernoldi", nacionalidad: "Brasil", escuderia: "Arrows", puntos: 0}
    ],
    // -------------------------------------------------------------------
    // 2000 (Oficial)
    // -------------------------------------------------------------------
    "2000": [
        {pos: 1, piloto: "Michael Schumacher", nacionalidad: "Alemania", escuderia: "Ferrari", puntos: 108},
        {pos: 2, piloto: "Mika Häkkinen", nacionalidad: "Finlandia", escuderia: "McLaren", puntos: 89},
        {pos: 3, piloto: "David Coulthard", nacionalidad: "Reino Unido", escuderia: "McLaren", puntos: 73},
        {pos: 4, piloto: "Rubens Barrichello", nacionalidad: "Brasil", escuderia: "Ferrari", puntos: 46},
        {pos: 5, piloto: "Ralf Schumacher", nacionalidad: "Alemania", escuderia: "Williams", puntos: 24},
        {pos: 6, piloto: "Giancarlo Fisichella", nacionalidad: "Italia", escuderia: "Benetton", puntos: 18},
        {pos: 7, piloto: "Jacques Villeneuve", nacionalidad: "Canadá", escuderia: "BAR", puntos: 17},
        {pos: 8, piloto: "Jenson Button", nacionalidad: "Reino Unido", escuderia: "Williams", puntos: 12},
        {pos: 9, piloto: "Heinz-Harald Frentzen", nacionalidad: "Alemania", escuderia: "Jordan", puntos: 11},
        {pos: 10, piloto: "Jarno Trulli", nacionalidad: "Italia", escuderia: "Jordan", puntos: 6},
        {pos: 11, piloto: "Eddie Irvine", nacionalidad: "Reino Unido", escuderia: "Jaguar", puntos: 4},
        {pos: 12, piloto: "Mika Salo", nacionalidad: "Finlandia", escuderia: "Sauber", puntos: 6},
        {pos: 13, piloto: "Jos Verstappen", nacionalidad: "Países Bajos", escuderia: "Arrows", puntos: 5},
        {pos: 14, piloto: "Pedro de la Rosa", nacionalidad: "España", escuderia: "Arrows", puntos: 2},
        {pos: 15, piloto: "Ricardo Zonta", nacionalidad: "Brasil", escuderia: "BAR", puntos: 0},
        {pos: 16, piloto: "Alexander Wurz", nacionalidad: "Austria", escuderia: "Benetton", puntos: 2},
        {pos: 17, piloto: "Johnny Herbert", nacionalidad: "Reino Unido", escuderia: "Jaguar", puntos: 0},
        {pos: 18, piloto: "Marc Gené", nacionalidad: "España", escuderia: "Minardi", puntos: 0},
        {pos: 19, piloto: "Gaston Mazzacane", nacionalidad: "Argentina", escuderia: "Minardi", puntos: 0},
        {pos: 20, piloto: "Nick Heidfeld", nacionalidad: "Alemania", escuderia: "Prost", puntos: 0},
        {pos: 21, piloto: "Jean Alesi", nacionalidad: "Francia", escuderia: "Prost", puntos: 0}
    ]
};
let sortDirection = true; // true = ascendente, false = descendente

function sortTable(columnIndex) {
    const table = document.querySelector("table");
    const tbody = document.getElementById("classification-body");
    const rows = Array.from(tbody.rows);

    // Cambiar dirección
    sortDirection = !sortDirection;

    const sortedRows = rows.sort((a, b) => {
        let valA = a.cells[columnIndex].textContent.trim();
        let valB = b.cells[columnIndex].textContent.trim();

        // Si es una columna numérica (Posición o Puntos)
        if (!isNaN(valA) && !isNaN(valB)) {
            return sortDirection ? valA - valB : valB - valA;
        }

        // Si es texto (Piloto, Escudería, etc.)
        return sortDirection 
            ? valA.localeCompare(valB) 
            : valB.localeCompare(valA);
    });

    // Limpiar y volver a llenar la tabla con el nuevo orden
    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));
}