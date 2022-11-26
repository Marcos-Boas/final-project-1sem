var skins = [
  {
    nomePersonagem: "AWP",
    nomeSkin: "Asiimov",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX2FzaW1vdl9saWdodF9sYXJnZS4zMmQ5MDQ1ZjhhMmJjZDEzY2ExODM5MGNjOWZkODIwMjZlNzE5NWFiLnBuZw--/auto/auto/85/notrim/3f3705a2adf75e891fdb212e6309755e.webp",
    fkSkin: 1,
  },
  {
    nomePersonagem: "AWP",
    nomeSkin: "Neo-Noir",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX25lb25vaXJfbGlnaHRfbGFyZ2UuYzVkZDU3Zjg1NTVkMTNjNDFmMDgwMjRmMjdhOTMxNDA3NGI2OThhZi5wbmc-/auto/auto/85/notrim/35a4c7d7ca4975146774f46c26106407.webp",
    fkSkin: 2,
  },
  {
    nomePersonagem: "AWP",
    nomeSkin: "Atheris",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX3ZpcGVyX2xpZ2h0X2xhcmdlLjJkZTc1NDA4YTdjNTk1MzEyZDU4MjAzZjUzYzczYTNhMThmYWE0YTMucG5n/auto/auto/85/notrim/306e0ba35cae9b3d42c540fa2a9c7726.webp",
    fkSkin: 3,
  },
  {
    nomePersonagem: "AK-47",
    nomeSkin: "Ice Coaled",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29ndGhpbmdzX2xpZ2h0X2xhcmdlLjliNDY3OGE3MGMzMTVlNWQ2MGEyMDM0MzZiN2E5NWNkNGM1ZGNjODkucG5n/auto/auto/85/notrim/bc13b2fd9ea48a6ffc74b418aac13e32.webp",
    fkSkin: 4,
  },
  {
    nomePersonagem: "AK-47",
    nomeSkin: "Slate",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2dzX2FrNDdfcHJvZmVzc2lvbmFsX2xpZ2h0X2xhcmdlLmQwOWQ2MjNkMGE3MjVjNjNlOGEzOTA1ZjY2YmJhNDFiYTJlZDU5ZTgucG5n/auto/auto/85/notrim/80e5e7d932106d10badb93ccfc10b648.webp",
    fkSkin: 5,
  },
  {
    nomePersonagem: "AK-47",
    nomeSkin: "Nightwish",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfbmlnaHR3aXNoX2xpZ2h0X2xhcmdlLjBjNDU4MWJlMDk0ZTJiZDczMmJlYzE4ZWJkYWQyZjcxYjEwMThhZjIucG5n/auto/auto/85/notrim/3bf736c4f8a790cfddb4158587415b44.webp",
    fkSkin: 6,
  },
  {
    nomePersonagem: "Desert Eagle",
    nomeSkin: "Code Red",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfZ3NfZGVhZ2xlX2FnZ3Jlc3Nvcl9saWdodF9sYXJnZS41MWZmYjg3ZjAzYWUwZDNjNDY3ZDQ0MTJmM2MyNDYwNjc3NDhlNjFkLnBuZw--/auto/auto/85/notrim/9ec696896d67fe4daec5179807eb50e7.webp",
    fkSkin: 7,
  },
  {
    nomePersonagem: "Desert Eagle",
    nomeSkin: "Kumicho Dragon",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfYXFfZGVzZXJ0ZWFnbGVfa3VtaWNob2RyYWdvbl9saWdodF9sYXJnZS4xOTg3NGU5YTIwY2ZhYzQ5ZWZiZTFmMTU1N2I5OTVlNDUzNjMzZmZlLnBuZw--/auto/auto/85/notrim/d5a83f4d1ebf38f24e1bcf03a45eed21.webp",
    fkSkin: 8,
  },
  {
    nomePersonagem: "Desert Eagle",
    nomeSkin: "Fennec Fox",
    jogo: "Counter Strike: Global Offensive",
    caminhoImg:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfZ3NfZGVhZ2xlX2Zlbm5lY19saWdodF9sYXJnZS45MmRiZGE3M2VkY2M2ZWI2MDIyZjFmMDI0OGNiMTkwNjNkNzEwN2FhLnBuZw--/auto/auto/85/notrim/ae6b08a591d811a10d5251ecaf80de56.webp",
    fkSkin: 9,
  },
  {
    nomePersonagem: "Ghost",
    nomeSkin: "Luxe",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-luxe-ghost-weapon-skin.png",
    fkSkin: 10,
  },
  {
    nomePersonagem: "Ghost",
    nomeSkin: "Prism",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-prism-ghost-weapon-skin.png",
    fkSkin: 11,
  },
  {
    nomePersonagem: "Ghost",
    nomeSkin: "Ego",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-ego-ghost-weapon-skin.png",
    fkSkin: 12,
  },
  {
    nomePersonagem: "Vandal",
    nomeSkin: "Aristocrat",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-aristocrat-vandal-weapon-skin.png",
    fkSkin: 13,
  },
  {
    nomePersonagem: "Vandal",
    nomeSkin: "Sakura",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-sakura-vandal-weapon-skin.png",
    fkSkin: 14,
  },
  {
    nomePersonagem: "Vandal",
    nomeSkin: "Avalanche",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-avalanche-vandal-weapon-skin.png",
    fkSkin: 15,
  },
  {
    nomePersonagem: "Spectre",
    nomeSkin: "Wasteland",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-wasteland-spectre-weapon-skin.png",
    fkSkin: 16,
  },
  {
    nomePersonagem: "Spectre",
    nomeSkin: "BlastX",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-blastx-spectre-weapon-skin.png",
    fkSkin: 17,
  },
  {
    nomePersonagem: "Spectre",
    nomeSkin: "Horizon",
    jogo: "Valorant",
    caminhoImg:
      "https://vgraphs.com/images/weapons/skins/full-details/valorant-horizon-spectre-weapon-skin.png",
    fkSkin: 18,
  },
  {
    nomePersonagem: "Kog'Maw",
    nomeSkin: "Zap'Maw",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/kog-maw-zap-maw.jpg",
    fkSkin: 19,
  },
  {
    nomePersonagem: "Kog'Maw",
    nomeSkin: "Bee'Maw",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/kog-maw-bee-maw.jpg",
    fkSkin: 20,
  },
  {
    nomePersonagem: "Kog'Maw",
    nomeSkin: "Battlecast",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/kogmaw-battlecast.jpg",
    fkSkin: 21,
  },
  {
    nomePersonagem: "Graves",
    nomeSkin: "EDG",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/graves-sentinel.jpg",
    fkSkin: 22,
  },
  {
    nomePersonagem: "Graves",
    nomeSkin: "Sentinel",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/graves-sentinel.jpg",
    fkSkin: 23,
  },
  {
    nomePersonagem: "Graves",
    nomeSkin: "Battle Professor",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/graves-battle-professor.jpg",
    fkSkin: 24,
  },
  {
    nomePersonagem: "Lee Sin",
    nomeSkin: "Storm Dragon",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/lee-sin-storm-dragon.jpg",
    fkSkin: 25,
  },
  {
    nomePersonagem: "Lee Sin",
    nomeSkin: "FPX",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/lee-sin-fpx.jpg",
    fkSkin: 26,
  },
  {
    nomePersonagem: "Lee Sin",
    nomeSkin: "Muay Thai",
    jogo: "League of Legends",
    caminhoImg:
      "https://www.mobafire.com/images/champion/skins/portrait/lee-sin-muay-thai.jpg",
    fkSkin: 27,
  },
];

var conteudo = `<select name="" id="sel_jogo" onchange="montarSelectPersonagem()">
        <option selected disabled value="">- ESCOLHA UM -</option>`;
for (let index = 0; index < skins.length; index += 9) {
  conteudo += `<option value="${skins[index].jogo}">${skins[index].jogo}</option>`;
}

escolhaJogo.innerHTML = `${conteudo} </select>`;

function montarSelectPersonagem() {
  escolhaSkin.innerHTML = "";
  var jogoSelecionado = sel_jogo.value;

  var conteudoPersonagem = `<select id="sel_personagem" onchange="montarSelectSkin()">
                                <option selected disabled value="">- ESCOLHA UM -</option> `;
  for (let index = 0; index < skins.length; index += 3) {
    if (skins[index].jogo == jogoSelecionado) {
      conteudoPersonagem += `<option value="${skins[index].nomePersonagem}">${skins[index].nomePersonagem}</option>`;
    }
  }
  escolhaPersonagem.innerHTML = `${conteudoPersonagem} </select>`;
}

function montarSelectSkin() {
  var personagemSelecionado = sel_personagem.value;

  var conteudoSkin = `<select id="sel_skin" onchange="mostrarSkinSelecionada()">
                                <option selected disabled value="">- ESCOLHA UM -</option> `;
  for (let index = 0; index < skins.length; index++) {
    if (skins[index].nomePersonagem == personagemSelecionado) {
      conteudoSkin += `<option value="${index}">${skins[index].nomeSkin}</option>`;
    }
  }
  escolhaSkin.innerHTML = `${conteudoSkin} </select> <br>`;
}

var skinEscolhida

function mostrarSkinSelecionada() {
   skinEscolhida = sel_skin.value;

  imgSkinEscolhida.style.backgroundImage = `url(${skins[skinEscolhida].caminhoImg})`;

  // editar(skins[index].fkSkin)
}

function editar() {
  fetch(`/usuarios/editar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fkSkin: skins[skinEscolhida].fkSkin,
      idUsuario: sessionStorage.ID_USUARIO,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        window.alert(
          "Skin escolhida com sucesso: " +
            sessionStorage.getItem("SKIN_FAVORITA") +
            "!"
        );
        window.location = "index.html";
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
