console.log("[MODAL] modal-produtos.js carregado – Todos os produtos");

// ================== DADOS DOS PRODUTOS ==================
const produtosData = {
    itaueira: [
        {
            titulo: "Melão Amarelo Rei",
            descricao: "Doce, suculento e sempre pronto para consumo imediato.",
            imagem: "assets/svg/produtos/am-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Amarelo Cepi",
            descricao: "Variedade selecionada, com textura macia e frescor prolongado.",
            imagem: "assets/svg/produtos/amarelo-cepi.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor suave" },
                { icon: "bi-sun", texto: "Cultivo especial" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Sapo Rei",
            descricao: "Clássico e refrescante, ideal para consumo diário.",
            imagem: "assets/svg/produtos/sapo-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor refrescante" },
                { icon: "bi-droplet", texto: "Textura suculenta" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Sapo Cepi",
            descricao: "Variedade diferenciada, com frescor marcante e textura firme.",
            imagem: "assets/svg/produtos/sapo-cepi.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor intenso" },
                { icon: "bi-sun", texto: "Cultivo selecionado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Matisse Rei",
            descricao: "Fruto sofisticado, com sabor adocicado e aroma marcante.",
            imagem: "assets/svg/produtos/matisse-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor sofisticado" },
                { icon: "bi-brightness-high", texto: "Boa durabilidade" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Matisse Cepi",
            descricao: "Exclusivo e delicado, perfeito para quem busca qualidade e frescor.",
            imagem: "assets/svg/produtos/matisse-cepi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor marcante" },
                { icon: "bi-sun", texto: "Cultivo especial" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Galia Rei",
            descricao: "Doce e aromático, com sabor que conquista no primeiro corte.",
            imagem: "assets/svg/produtos/galia-rei.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-droplet", texto: "Muito suculento" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Galia Cepi",
            descricao: "Variedade de alta qualidade, com frescor e aroma únicos.",
            imagem: "assets/svg/produtos/galia-cepi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor delicado" },
                { icon: "bi-sun", texto: "Cultivo controlado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Cantaloupe Rei",
            descricao: "Intensamente aromático, com sabor doce e textura macia.",
            imagem: "assets/svg/produtos/cantaloupe-rei.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor marcante" },
                { icon: "bi-droplet", texto: "Textura cremosa" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Cantaloupe Cepi",
            descricao: "Com sabor intenso e aroma tropical, é perfeito para ocasiões especiais.",
            imagem: "assets/svg/produtos/cantaloupe-cepi.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor tropical" },
                { icon: "bi-sun", texto: "Cultivo especial" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Melancia Magali",
            descricao: "Refrescante, doce e perfeita para compartilhar em momentos especiais.",
            imagem: "assets/svg/produtos/sem-semente.webp",

            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente suculenta" },
                { icon: "bi-emoji-laughing", texto: "Sabor marcante" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melancia Cepi",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/svg/produtos/melancia-cepi.webp",

            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melancia Cepi Branca",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/svg/produtos/branca.webp",

            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/svg/produtos/pamarelo.webp",

            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/svg/produtos/pvermelho.webp",

            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/svg/produtos/plaranja.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/svg/produtos/melb.webp",

            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/svg/produtos/melv.webp",

            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    melancia: [
        {
            titulo: "Melancia Baby",
            descricao: "Fruta menor e prática, de polpa doce e refrescante. Ideal para consumo individual e porções rápidas.",
            imagem: "assets/svg/produtos/melanciasb.webp",

            impactCharacters: [
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-basket", texto: "Tamanho prático" }
            ]
        }

    ],
    melao: [
        {
            titulo: "Melão Amarelo",
            descricao: "Doce, suculento e sempre pronto para consumo imediato. Ideal para cafés da manhã e sobremesas leves.",
            imagem: "assets/svg/produtos/amarelo.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Marca premium" }
            ]
        },
        {
            titulo: "Melão Pele de Sapo",
            descricao: "Casca verde rajada e polpa branca adocicada. Versátil, ideal para consumo in natura ou em saladas de frutas.",
            imagem: "assets/svg/produtos/sapo.webp",

            impactCharacters: [
                { icon: "bi-bag-check", texto: "Aceito no atacado" },
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-globe", texto: "Popular internacional" }
            ]
        },
        {
            titulo: "Melão Matisse",
            descricao: "De aparência marcante e polpa doce, é valorizado pela qualidade premium e sabor único.",
            imagem: "assets/svg/produtos/matisse.webp",

            impactCharacters: [
                { icon: "bi-patch-check", texto: "Selo premium" },
                { icon: "bi-gem", texto: "Sabor único" },
                { icon: "bi-trophy", texto: "Alta valorização" }
            ]
        },
        {
            titulo: "Melão Gália",
            descricao: "Casca amarelada com polpa esverdeada clara, textura macia e sabor suave. Excelente para dias quentes.",
            imagem: "assets/svg/produtos/galia.webp",

            impactCharacters: [
                { icon: "bi-emoji-sunglasses", texto: "Refrescante" },
                { icon: "bi-droplet-half", texto: "Polpa leve" },
                { icon: "bi-bag-heart", texto: "Aceito no varejo" }
            ]
        },
        {
            titulo: "Melão Cantaloupe",
            descricao: "Um dos mais aromáticos. Casca rendada e polpa firme e doce. Ideal para cafés da manhã.",
            imagem: "assets/svg/produtos/charentais.webp",

            impactCharacters: [
                { icon: "bi-flower3", texto: "Aroma marcante" },
                { icon: "bi-egg-fried", texto: "Pratos sofisticados" },
                { icon: "bi-cup-hot", texto: "Café da manhã" }
            ]
        },
        {
            titulo: "Melão Orange",
            descricao: "Polpa alaranjada, doce e levemente aromática. Rico em vitaminas, perfeito para sucos tropicais.",
            imagem: "assets/svg/produtos/orange.webp",

            impactCharacters: [
                { icon: "bi-star", texto: "Cor vibrante" },
                { icon: "bi-cup-straw", texto: "Ideal para sucos" },
                { icon: "bi-heart", texto: "Rico em nutrientes" }
            ]
        }
    ],
    pimentao: [
        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/svg/produtos/pamarelo.webp",

            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/svg/produtos/pvermelho.webp",

            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/svg/produtos/plaranja.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    mel: [
        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/svg/produtos/melb.webp",

            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/svg/produtos/melv.webp",

            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    uva: [
        {
            titulo: "Uva vitória",
            descricao: "Mesa clássica, baga grande e firme, sabor doce e levemente ácido. Ideal para consumo in natura.",
            imagem: "assets/svg/produtos/uva1.webp",
            impactCharacters: [
                { icon: "bi-apple", texto: "Boa firmeza" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
        {
            titulo: "Uva X",
            descricao: "Sem sementes, baga verde-clara, doçura intensa. Perfeita para sucos e decoração.",
            imagem: "assets/svg/produtos/uva2.webp",
            impactCharacters: [
                { icon: "bi-x-circle", texto: "Sem sementes" },
                { icon: "bi-cup-straw", texto: "Ótima para sucos" },
                { icon: "bi-palette", texto: "Visual limpo" }
            ]
        }
    ],
    abacaxi: [
        {
            titulo: "Abacaxi Pérola",
            descricao: "Fruta pequena, coroa curta, polpa amarelo-clara, doce e aromática. Ideal para consumo in natura e sucos.",
            imagem: "assets/svg/produtos/abacaxi.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Sabor doce" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos" },
                { icon: "bi-emoji-smile", texto: "Aroma marcante" }
            ]
        }
    ],
    manga: [
        {
            titulo: "Manga Keitt",
            descricao: "Pele verde mesmo madura, polpa firme, doce e sem fibras. Perfeita para saladas e sobremesas.",
            imagem: "assets/svg/produtos/keitt.webp",
            impactCharacters: [
                { icon: "bi-check-circle", texto: "Sem fibras" },
                { icon: "bi-egg-fried", texto: "Ideal para saladas" },
                { icon: "bi-heart", texto: "Doçura intensa" }
            ]
        },
        {
            titulo: "Manga Palmer",
            descricao: "Pele avermelhada, polpa suculenta e sabor equilibrado. Excelente para mesa e polpas.",
            imagem: "assets/svg/produtos/palmer.webp",
            impactCharacters: [
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Sucesso no varejo" }
            ]
        },
        {
            titulo: "Manga Tommy",
            descricao: "Pele avermelhada, polpa suculenta e sabor equilibrado. Excelente para mesa e polpas.",
            imagem: "assets/svg/produtos/tommy.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Sucesso no varejo" }
            ]
        },
        {
            titulo: "Manga Rosa",
            descricao: "Fruta tradicional, de casca avermelhada e polpa doce e perfumada. Muito apreciada para consumo fresco e sucos.",
            imagem: "assets/svg/produtos/manga-rosa.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-heart", texto: "Doçura intensa" },
                { icon: "bi-flower1", texto: "Aroma marcante" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" }
            ]
        },
        {
            titulo: "Manga Espada",
            descricao: "Variedade popular, de polpa suculenta e fibras finas, sabor adocicado com leve acidez. Muito usada em sucos e consumo direto.",
            imagem: "assets/svg/produtos/manga-espada.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Muito procurada no varejo" }
            ]
        },
        {
            titulo: "Manga Shelly",
            descricao: "Fruta de polpa macia e suculenta, sabor doce e levemente aromático. Ideal para consumo in natura e sucos.",
            imagem: "assets/svg/produtos/shelly.webp",

            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" }
            ]
        }

    ],
    morango: [
        {
            titulo: "Morango San Andreas",
            descricao: "Variedade de alto rendimento, com sabor adocicado e excelente firmeza. Ideal para transporte e consumo in natura.",
            imagem: "assets/svg/produtos/morango.webp",

            impactCharacters: [
                { icon: "bi-graph-up", texto: "Alta produtividade" },
                { icon: "bi-truck", texto: "Bom transporte" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        },
        {
            titulo: "Morango Albion",
            descricao: "Fruto de coloração intensa, formato alongado e aroma marcante. Muito utilizado em confeitaria e sobremesas.",
            imagem: "assets/svg/produtos/morango-albion.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-brush", texto: "Cor intensa" },
                { icon: "bi-cake2", texto: "Perfeito para doces" },
                { icon: "bi-flower1", texto: "Aroma marcante" }
            ]
        },
        {
            titulo: "Morango Camino Real",
            descricao: "Morangos firmes, grandes e de coloração vibrante. Ótima resistência no transporte e conservação.",
            imagem: "assets/svg/produtos/morango-caminoreal.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-bounding-box", texto: "Frutos grandes" },
                { icon: "bi-hourglass-split", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Resistente ao transporte" }
            ]
        },
        {
            titulo: "Morango Monterey",
            descricao: "Variedade muito doce e produtiva, perfeita para consumo direto e ideal para climas mais quentes.",
            imagem: "assets/svg/produtos/morango-monterey.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-emoji-heart-eyes", texto: "Extremamente doce" },
                { icon: "bi-sun", texto: "Adaptado a calor" },
                { icon: "bi-bar-chart", texto: "Alta produtividade" }
            ]
        },

    ],
    caqui: [
        {
            titulo: "Caqui Fuyu",
            descricao: "Fruta firme, doce e de coloração laranja intensa. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/svg/produtos/caqui.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-apple", texto: "Fruta firme" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    pera: [
        {
            titulo: "Pera X",
            descricao: "Fruta suculenta, de polpa macia e sabor doce. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/svg/produtos/pera.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e delicado" },
                { icon: "bi-apple", texto: "Textura macia" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    laranja: [
        {
            titulo: "Laranja Kinkan",
            descricao: "Fruta pequena, doce e levemente ácida, com casca fina e comestível. Perfeita para consumo in natura e decoração de pratos.",
            imagem: "assets/svg/produtos/kinkan.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-apple", texto: "Casca fina e comestível" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    nespera: [
        {
            titulo: "Nêspera Tradicional",
            descricao: "Fruta de polpa macia, doce e levemente ácida. Ideal para consumo in natura, sobremesas e compotas.",
            imagem: "assets/svg/produtos/nespera.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-apple", texto: "Textura macia" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
    ],
    maracuja: [
        {
            titulo: "Granadilha",
            descricao: "Fruta de polpa aromática, sabor equilibrado entre doce e ácido. Ideal para sucos, sobremesas e uso culinário em geral.",
            imagem: "assets/svg/produtos/granadilha.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa aromática" },
                { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    mirtilo: [
        {
            titulo: "Mirtilo Clássico",
            descricao: "Fruta pequena, sabor doce e levemente ácido, com coloração azul intensa. Ideal para consumo in natura, saladas e sobremesas.",
            imagem: "assets/svg/produtos/mirtilo.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-palette", texto: "Cor intensa" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    pitaya: [
        {
            titulo: "Pitaya Vermelha",
            descricao: "Fruta exótica de polpa suculenta e sabor levemente adocicado. Ideal para consumo in natura, sucos e sobremesas decorativas.",
            imagem: "assets/svg/produtos/pitaya.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
        {
            titulo: "Pitaya Branca",
            descricao: "Fruta leve e delicada, de sabor suave e polpa branca com sementes pretas. Muito versátil, perfeita para saladas, sucos e sobremesas.",
            imagem: "assets/svg/produtos/pitaya-branca.webp",
            impactCharacters: [
                { icon: "bi-flower1", texto: "Sabor suave" },
                { icon: "bi-droplet", texto: "Hidratante e leve" },
                { icon: "bi-stars", texto: "Exótica e elegante" }
            ]
        },
        {
            titulo: "Pitaya Amarela",
            descricao: "Fruta rara e altamente apreciada, de casca amarela e polpa branca adocicada. Rica em fibras e vitamina C, com sabor marcante.",
            imagem: "assets/svg/produtos/pitaya-amarela.webp",
            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Rica em vitamina C" },
                { icon: "bi-heart-pulse", texto: "Fonte de fibras" },
                { icon: "bi-star-fill", texto: "Sabor marcante" }
            ]
        }
    ],
    cupuacu: [
        {
            titulo: "Cupuaçu",
            descricao: "Fruta de polpa cremosa, sabor adocicado e aroma marcante. Ideal para sucos, sobremesas e produtos gourmet.",
            imagem: "assets/svg/produtos/cupuacu.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa cremosa" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos e sobremesas" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    graviola: [
        {
            titulo: "Graviola Tradicional",
            descricao: "Fruta de polpa macia e suculenta, sabor doce com toque ácido. Ideal para sucos, sobremesas e consumo in natura.",
            imagem: "assets/svg/produtos/graviola.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    cacau: [
        {
            titulo: "Cacau Tradicional",
            descricao: "Fruta de polpa macia e sementes ricas em sabor. Ideal para produção de chocolate, sucos e doces artesanais.",
            imagem: "assets/svg/produtos/cacau.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa saborosa" },
                { icon: "bi-cup-straw", texto: "Perfeito para doces e chocolates" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    caju: [
        {
            titulo: "Caju Tradicional",
            descricao: "Fruta de polpa suculenta e sabor levemente ácido, rica em vitamina C. Ideal para consumo in natura, sucos e doces.",
            imagem: "assets/svg/produtos/caju.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    amora: [
        {
            titulo: "Amora Preta",
            descricao: "Pequena fruta de sabor doce e levemente ácido, rica em antioxidantes e vitaminas. Excelente para consumo fresco, geleias, sobremesas e sucos.",
            imagem: "assets/svg/produtos/amora.webp",
            impactCharacters: [
                { icon: "bi-heart-pulse", texto: "Rica em antioxidantes" },
                { icon: "bi-cup-straw", texto: "Ideal para sucos e geleias" },
                { icon: "bi-stars", texto: "Sabor marcante" }
            ]
        }
    ],
    acerola: [
        {
            titulo: "Acerola",
            descricao: "Pequena e suculenta, extremamente rica em vitamina C. Ideal para sucos refrescantes e consumo in natura.",
            imagem: "assets/svg/produtos/acerola.webp",
            impactCharacters: [
                { icon: "bi-cup-straw", texto: "Fonte de vitamina C" },
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-heart", texto: "Refrescante e nutritiva" }
            ]
        }
    ],

    jaca: [
        {
            titulo: "Jaca",
            descricao: "Fruto grande, aromático e adocicado, versátil em pratos doces e salgados.",
            imagem: "assets/svg/produtos/jaca.webp",
            impactCharacters: [
                { icon: "bi-basket", texto: "Fruta volumosa" },
                { icon: "bi-emoji-smile", texto: "Sabor adocicado" },
                { icon: "bi-fire", texto: "Versátil na cozinha" }
            ]
        }
    ],



    physalis: [
        {
            titulo: "Physalis",
            descricao: "Exótica e delicada, de sabor cítrico e levemente adocicado, muito usada em sobremesas gourmet.",
            imagem: "assets/svg/produtos/physales.webp",
            impactCharacters: [
                { icon: "bi-stars", texto: "Exótica e elegante" },
                { icon: "bi-emoji-smile", texto: "Sabor cítrico suave" },
                { icon: "bi-cake2", texto: "Perfeita para doces" }
            ]
        }
    ],

    figo: [
        {
            titulo: "Figo",
            descricao: "Fruta macia e adocicada, muito apreciada em doces, geleias e consumo fresco.",
            imagem: "assets/svg/produtos/figo.webp",
            impactCharacters: [
                { icon: "bi-cake", texto: "Ideal para sobremesas" },
                { icon: "bi-droplet", texto: "Textura macia" },
                { icon: "bi-heart", texto: "Sabor adocicado" }
            ]
        }
    ],

    goiaba: [
        {
            titulo: "Goiaba Vermelha",
            descricao: "Fruta doce e aromática, consumida fresca ou em doces e sucos tradicionais.",
            imagem: "assets/svg/produtos/goiaba.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Aroma marcante" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-cake2", texto: "Base para doces" }
            ]
        }
    ],

    roma: [
        {
            titulo: "Romã",
            descricao: "Grãos suculentos e levemente ácidos, símbolo de prosperidade e muito nutritiva.",
            imagem: "assets/svg/produtos/roma.webp",
            impactCharacters: [
                { icon: "bi-gem", texto: "Fruta simbólica" },
                { icon: "bi-droplet", texto: "Sementes suculentas" },
                { icon: "bi-heart", texto: "Fonte de antioxidantes" }
            ]
        }
    ],

    umbu: [
        {
            titulo: "Umbu",
            descricao: "Fruta pequena e refrescante, de sabor agridoce característico do sertão.",
            imagem: "assets/svg/produtos/umbu.webp",
            impactCharacters: [
                { icon: "bi-sun", texto: "Fruto do sertão" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos" },
                { icon: "bi-emoji-smile", texto: "Sabor agridoce" }
            ]
        }
    ],
    atemoia: [
        {
            titulo: "Atemoia",
            descricao: "Fruta doce e cremosa, com sabor suave e aromático.",
            imagem: "assets/svg/produtos/atemoia.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e aromático" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-leaf", texto: "Polpa cremosa" }
            ]
        },
    ],
    mamao: [
        {
            titulo: "Mamão Papaya",
            descricao: "Fruta tropical de polpa doce e macia, ideal para consumo in natura e vitaminas.",
            imagem: "assets/svg/produtos/papaya.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa macia" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-heart", texto: "Rico em vitaminas" }
            ]
        },
        {
            titulo: "Mamão Formosa",
            descricao: "Fruta de polpa firme e doce, grande porte, excelente para consumo direto e sobremesas.",
            imagem: "assets/svg/produtos/formosa.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa firme" },
                { icon: "bi-emoji-smile", texto: "Sabor adocicado" },
                { icon: "bi-shop", texto: "Grande porte" }
            ]
        },
        {
            titulo: "Mamão Clam Shell",
            descricao: "Variedade de mamão com polpa doce e suculenta, ideal para consumo in natura e embalagens práticas.",
            imagem: "assets/svg/produtos/clam.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-cup-straw", texto: "Perfeito para embalagens" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        }
    ],



};

// ================== ESTADO DO MODAL ==================
let modalState = {
    slug: null,
    index: 0,
    lista: []
};

// ================== FUNÇÕES ==================
function abrirModal(slug) {
    let lista = produtosData[slug];
    if (!lista || !lista.length) {
        console.warn("Produto não encontrado:", slug);
        return;
    }

    lista = lista.filter(p => p.visible !== false);

    if (!lista.length) {
        console.warn("Nenhum produto visível para:", slug);
        return;
    }

    modalState = { slug, index: 0, lista };
    preencherModal(lista[0]);

    const modal = document.getElementById("modalProduto");
    if (modal) modal.style.display = "flex";
}


function preencherModal(produto) {
    if (!produto) return;

    const titulo = document.getElementById("modalTitulo");
    const descricao = document.getElementById("modalDescricao");
    const imagem = document.getElementById("modalImagem");
    const miniGaleria = document.getElementById("miniGaleria");
    const impact = document.querySelector(".impact-characters");
    const progresso = document.getElementById("progressoTexto");

    if (titulo) titulo.textContent = produto.titulo || "";
    if (descricao) descricao.textContent = produto.descricao || "";
    if (imagem) imagem.src = produto.imagem || "";



    // Impact characters
    if (impact) {
        impact.innerHTML = "";
        (produto.impactCharacters || []).forEach(c => {
            const div = document.createElement("div");
            div.className = "character";
            if (c.icon) {
                div.innerHTML = `<i class="bi ${c.icon}"></i><span>${c.texto}</span>`;
            } else if (c.img) {
                div.innerHTML = `<img src="${c.img}" alt="icon"><span>${c.texto}</span>`;
            }

            impact.appendChild(div);
        });
    }

    // Progresso
    if (progresso) {
        progresso.textContent = `${modalState.index + 1}/${modalState.lista.length}`;
    }
}




function fecharModal() {
    const modal = document.getElementById("modalProduto");
    if (modal) modal.style.display = "none";
}

function proximoProduto() {
    if (!modalState.lista.length) return;
    modalState.index = (modalState.index + 1) % modalState.lista.length;
    preencherModal(modalState.lista[modalState.index]);
}

function anteriorProduto() {
    if (!modalState.lista.length) return;
    modalState.index =
        (modalState.index - 1 + modalState.lista.length) % modalState.lista.length;
    preencherModal(modalState.lista[modalState.index]);
}

// ================== IMAGEM FULLSCREEN ==================
function abrirImagemFullscreen(src) {
    const win = window.open("");
    if (win) win.document.write(`<img src="${src}" style="width:100%">`);
}

function setupModalImageZoom() {
    const imagem = document.getElementById("modalImagem");
    if (!imagem) return;
    imagem.addEventListener("click", () => abrirImagemFullscreen(imagem.src));
}

document.addEventListener("DOMContentLoaded", setupModalImageZoom);

// ================== TECLAS DE ATALHO ==================
document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("modalProduto");
    if (!modal || modal.style.display !== "flex") return;

    switch (e.key) {
        case "Escape": // ESC fecha modal
            fecharModal();
            break;
        case "ArrowRight": // seta direita -> próximo
            proximoProduto();
            break;
        case "ArrowLeft": // seta esquerda -> anterior
            anteriorProduto();
            break;
    }
});

// ================== MOSTRAR/ESCONDER BOTÕES ==================
function atualizarBotoesNavegacao() {
    const btnPrev = document.getElementById("anteriorBtn");
    const btnNext = document.getElementById("proximoBtn");

    if (!btnPrev || !btnNext) return;

    if (modalState.lista.length <= 1) {
        btnPrev.style.display = "none";
        btnNext.style.display = "none";
    } else {
        btnPrev.style.display = "block";
        btnNext.style.display = "block";
    }
}

// Chamando no preencherModal para atualizar sempre que abrir/andar
const _preencherModalOriginal = preencherModal;
preencherModal = function (produto) {
    _preencherModalOriginal(produto);
    atualizarBotoesNavegacao();
};

