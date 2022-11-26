var caminhoImgs = [
    "https://i.pinimg.com/564x/10/c2/8c/10c28cce44d1b5c723b22c45f6b7def6.jpg",
    "https://i.pinimg.com/564x/45/b4/45/45b4451aa0e90bbb856603db99bbbc93.jpg",
    "https://i.pinimg.com/564x/67/a4/8d/67a48d564e086eb0c256831669cfd9c2.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/1931509974427378219/C4F2117625B4EFA8A7BE202EBE674A4F126D9C82/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "https://i.pinimg.com/564x/52/25/06/522506e66e88d8fcfac16cb00c04c6b2.jpg",
    "https://i.pinimg.com/564x/41/58/95/4158951016e6277616121599bd7ca66c.jpg",
    "https://i.pinimg.com/564x/01/7b/75/017b758a1a2ffc4feab524d5b77c1502.jpg",
    "https://i.pinimg.com/564x/3a/39/14/3a391415d1aeedb0de6c4479c91d3559.jpg",
    "https://i.pinimg.com/564x/1e/e3/68/1ee368bc67ba7878fe6b3567ad2e88d8.jpg",
];

var caminhoExemplos = [
    {
        explicacao: "Skins de pequenas lendas(personagens) em Team Fight Tactics",
        caminhoImg:
            "https://1hitgames.com/wp-content/uploads/2020/05/D8uEWHzXkAAwLF1.jpg",
    },
    {
        explicacao: "Skin de arenas em Team Fight Tactics",
        caminhoImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb8069740cc170e7f/60a719acc8faf774ab45f9ab/Count_Spatula_Concept_3_v2_5_25_21.jpg",
    },
    {
        explicacao: "Mais Skins de arenas...",
        caminhoImg:
            "https://1.bp.blogspot.com/-I8LXd8zihGE/XcXKOzXnroI/AAAAAAABHaU/qqY8bnZYrMgNtYy2OG7Zs30YKxeOcbXeACLcBGAsYHQ/s1600/image%2B%25285%2529.jpg",
    },
    {
        explicacao: "Mais Skins de arenas...",
        caminhoImg:
            "http://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/october/freljordarena/Frost_Guard_Arena.jpg&resize=1536:",
    },
    {
        explicacao: "Skins de booms...",
        caminhoImg:
            "https://static.invenglobal.com/upload/image/2020/05/25/o1590420216632167.png",
    },
    {
        explicacao: "Skins de booms...",
        caminhoImg:
            "https://assets.gamepur.com/wp-content/uploads/2022/11/07103639/TFT-Booms-850x478.jpg",
    },
];

var contador = 0;

function sortearimg() {
    num = parseInt(Math.random() * caminhoImgs.length);

    document.getElementById(
        "skinCarrosel"
    ).style.backgroundImage = `url('${caminhoImgs[num]}')`;
    setTimeout(() => {
        sortearimg();
    }, "2000");
}

function trocarExemplo() {
    if (contador >= caminhoExemplos.length) {
        contador = 0;
    }

    textoExemplos.innerHTML = `${caminhoExemplos[contador].explicacao}`;
    imgExemplos.style.backgroundImage = `url('${caminhoExemplos[contador].caminhoImg}')`;

    setTimeout(() => {
        trocarExemplo();
    }, "5000");
    contador++;
}