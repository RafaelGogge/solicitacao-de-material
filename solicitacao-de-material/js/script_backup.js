// Lista de produtos de limpeza disponíveis com variações e categorias
const categorias = [
    {
        nome: 'Álcool e Desinfetantes',
        icon: '🧪',
        produtos: [
            {
                id: 1,
                nome: 'Água Sanitária',
                descricao: 'Para limpeza e desinfecção',
                icon: '🧼',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1 Litro', '2 Litros'] }
                ]
            },
            {
                id: 2,
                nome: 'Álcool Líquido',
                descricao: 'Álcool para limpeza',
                icon: '🧪',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1 Litro', '5 Litros'] }
                ]
            },
            {
                id: 3,
                nome: 'Álcool Gel',
                descricao: 'Álcool em gel',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml', '1 Litro', '5 Litros'] }
                ]
            },
            {
                id: 7,
                nome: 'Cloro Líquido',
                descricao: 'Cloro para limpeza',
                icon: '💧',
                variacoes: []
            },
            {
                id: 8,
                nome: 'Desinfetante Pronto Uso',
                descricao: 'Desinfetante diluído',
                icon: '🧪',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['2 Litros', '5 Litros'] }
                ]
            },
            {
                id: 9,
                nome: 'Desinfetante Concentrado',
                descricao: 'Desinfetante para diluir',
                icon: '🧪',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['2 Litros', '5 Litros'] }
                ]
            }
        ]
    },
    {
        nome: 'Detergentes e Limpadores',
        icon: '🧴',
        produtos: [
            {
                id: 10,
                nome: 'Detergente Neutro',
                descricao: 'Detergente para pia',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml', '5 Litros'] }
                ]
            },
            {
                id: 22,
                nome: 'Limpa Alumínio',
                descricao: 'Limpador para alumínio',
                icon: '✨',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            },
            {
                id: 23,
                nome: 'Limpa Inox',
                descricao: 'Limpador para inox',
                icon: '✨',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['300ml', '400ml'] },
                    { nome: 'Tipo', opcoes: ['Spray', 'Líquido'] }
                ]
            },
            {
                id: 24,
                nome: 'Limpa Forno',
                descricao: 'Limpador de forno',
                icon: '🔥',
                variacoes: []
            },
            {
                id: 25,
                nome: 'Limpa Pedra',
                descricao: 'Limpador para pedras',
                icon: '🪨',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1 Litro', '2 Litros'] }
                ]
            },
            {
                id: 26,
                nome: 'Limpa Piso',
                descricao: 'Limpador de piso',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1 Litro', '5 Litros'] }
                ]
            },
            {
                id: 27,
                nome: 'Limpa Vidros',
                descricao: 'Limpador de vidros',
                icon: '🪟',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml', '5 Litros'] }
                ]
            },
            {
                id: 28,
                nome: 'Lustra Móveis',
                descricao: 'Lustra e protege móveis',
                icon: '🪑',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['200ml', '500ml'] }
                ]
            },
            {
                id: 45,
                nome: 'Pedra Sanitária',
                descricao: 'Pedra para limpeza de vaso',
                icon: '🚽',
                variacoes: []
            },
            {
                id: 46,
                nome: 'Pinho Sol',
                descricao: 'Desinfetante pinho sol',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            },
            {
                id: 47,
                nome: 'Saponáceo',
                descricao: 'Limpador abrasivo',
                icon: '🧽',
                variacoes: [
                    { nome: 'Tipo', opcoes: ['Líquido 250ml', 'Líquido 450ml', 'Pó 300g'] }
                ]
            },
            {
                id: 48,
                nome: 'Veja Multi-uso',
                descricao: 'Limpador multiuso',
                icon: '✨',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            },
            {
                id: 49,
                nome: 'Veja Limpeza Pesada',
                descricao: 'Limpador para sujeiras difíceis',
                icon: '💪',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            },
            {
                id: 50,
                nome: 'Cloro Ativo',
                descricao: 'Cloro ativo concentrado',
                icon: '💧',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            }
        ]
    },
    {
        nome: 'Ceras e Polidores',
        icon: '✨',
        produtos: [
            {
                id: 6,
                nome: 'Cera Ardosa',
                descricao: 'Cera para piso',
                icon: '✨',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['5 Litros'] }
                ]
            }
        ]
    },
    {
        nome: 'Ferramentas e Utensílios',
        icon: '🧹',
        produtos: [
            {
                id: 4,
                nome: 'Balde',
                descricao: 'Balde para limpeza',
                icon: '🪣',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['Pequeno 12L', 'Médio', 'Grande'] }
                ]
            },
            {
                id: 12,
                nome: 'Escada Alumínio',
                descricao: 'Escada para limpeza em altura',
                icon: '🪜',
                variacoes: []
            },
            {
                id: 13,
                nome: 'Escova para Roupa',
                descricao: 'Escova de lavar roupa',
                icon: '🪥',
                variacoes: [
                    { nome: 'Tipo', opcoes: ['Madeira', 'Com Alça'] }
                ]
            },
            {
                id: 14,
                nome: 'Escova Sanitária',
                descricao: 'Com suporte',
                icon: '🚽',
                variacoes: []
            },
            {
                id: 15,
                nome: 'Esfregão',
                descricao: 'Esfregão 30cm',
                icon: '🧹',
                variacoes: []
            },
            {
                id: 11,
                nome: 'Esponja Fibra',
                descricao: 'Esponja de limpeza',
                icon: '🧽',
                variacoes: [
                    { nome: 'Tipo', opcoes: ['Uso Geral', 'Pesada'] }
                ]
            },
            {
                id: 16,
                nome: 'Esponja Dupla Face',
                descricao: 'Para pia',
                icon: '🧽',
                variacoes: []
            },
            {
                id: 18,
                nome: 'Flanela Grande',
                descricao: 'Pano de limpeza',
                icon: '�',
                variacoes: [
                    { nome: 'Cor', opcoes: ['Branco', 'Amarela'] }
                ]
            },
            {
                id: 21,
                nome: 'Lã de Aço',
                descricao: 'Pacote com 8 unidades',
                icon: '�',
                variacoes: []
            },
            {
                id: 38,
                nome: 'Pá de Lixo',
                descricao: 'Pá para coleta de lixo',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tipo', opcoes: ['Sem Cabo', 'Com Cabo'] }
                ]
            },
            {
                id: 39,
                nome: 'Pano de Chão Grande',
                descricao: 'Pano para limpeza de piso',
                icon: '�',
                variacoes: [
                    { nome: 'Tipo', opcoes: ['Alvejado', 'Crú'] }
                ]
            },
            {
                id: 40,
                nome: 'Rodo',
                descricao: 'Rodo para limpeza',
                icon: '�',
                variacoes: [
                    { nome: 'Material', opcoes: ['Plástico', 'Alumínio'] }
                ]
            },
            {
                id: 41,
                nome: 'Vassoura Piaçava',
                descricao: 'Vassoura de fibra natural',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['Nº 02', 'Nº 03', 'Nº 05'] }
                ]
            },
            {
                id: 42,
                nome: 'Vassoura Pelo',
                descricao: 'Vassoura de pelo sintético',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['30cm', '40cm', '60cm'] }
                ]
            },
            {
                id: 43,
                nome: 'Vassoura Pelo Animal',
                descricao: 'Vassoura de pelo natural',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['40cm', '60cm'] }
                ]
            },
            {
                id: 44,
                nome: 'Vassoura Gari',
                descricao: 'Vassoura para área externa',
                icon: '🧹',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['40cm', '60cm'] }
                ]
            }
        ]
    },
    {
        nome: 'Aromatizadores',
        icon: '💨',
        produtos: [
            {
                id: 5,
                nome: 'Desodorizador de Ar',
                descricao: 'Aromatizador de ambiente',
                icon: '💨',
                variacoes: []
            },
            {
                id: 17,
                nome: 'Essência Eucalipto',
                descricao: 'Para sauna',
                icon: '🌿',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1 Litro'] }
                ]
            }
        ]
    },
    {
        nome: 'Papel e Descartáveis',
        icon: '🧻',
        produtos: [
            {
                id: 51,
                nome: 'Papel Higiênico',
                descricao: 'Pacote com 4 rolos',
                icon: '🧻',
                variacoes: [
                    { nome: 'Metragem', opcoes: ['30 metros', '60 metros'] }
                ]
            },
            {
                id: 52,
                nome: 'Papel Higiênico Rolão',
                descricao: 'Pacote com 8 rolos de 300m',
                icon: '🧻',
                variacoes: []
            },
            {
                id: 53,
                nome: 'Papel Toalha',
                descricao: '1.000 folhas',
                icon: '📄',
                variacoes: [
                    { nome: 'Cor', opcoes: ['Branco', 'Creme'] }
                ]
            }
        ]
    },
    {
        nome: 'Sabões e Sabonetes',
        icon: '🧼',
        produtos: [
            {
                id: 54,
                nome: 'Sabão de Coco',
                descricao: 'Sabão em barra 200g',
                icon: '🧼',
                variacoes: []
            },
            {
                id: 55,
                nome: 'Sabão em Barra',
                descricao: 'Pacote com 5 unidades',
                icon: '🧼',
                variacoes: []
            },
            {
                id: 56,
                nome: 'Sabão em Pó',
                descricao: 'Sabão em pó para roupas',
                icon: '📦',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['1kg', '2kg'] }
                ]
            },
            {
                id: 57,
                nome: 'Sabonete Líquido',
                descricao: 'Sabonete líquido para mãos',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['250ml', '500ml', '5 Litros'] }
                ]
            },
            {
                id: 58,
                nome: 'Sabonete Comum',
                descricao: 'Sabonete em barra 90g',
                icon: '🧼',
                variacoes: []
            },
            {
                id: 59,
                nome: 'Sabão Líquido Multi-uso',
                descricao: 'Sabão líquido para limpeza',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['5 Litros'] }
                ]
            }
        ]
    },
    {
        nome: 'Sacos de Lixo',
        icon: '🗑️',
        produtos: [
            {
                id: 60,
                nome: 'Saco de Lixo 20L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 61,
                nome: 'Saco de Lixo 40L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 62,
                nome: 'Saco de Lixo 60L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 63,
                nome: 'Saco de Lixo 100L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 64,
                nome: 'Saco de Lixo 200L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 65,
                nome: 'Saco de Lixo 240L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 66,
                nome: 'Saco de Lixo 300L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            },
            {
                id: 67,
                nome: 'Saco de Lixo 360L',
                descricao: 'Pacote com 100 unidades',
                icon: '🗑️',
                variacoes: []
            }
        ]
    },
    {
        nome: 'Suportes e Acessórios',
        icon: '🔧',
        produtos: [
            {
                id: 68,
                nome: 'Suporte para Toalheiro',
                descricao: 'Suporte de parede',
                icon: '🔧',
                variacoes: []
            },
            {
                id: 69,
                nome: 'Suporte para Rolão',
                descricao: 'Suporte para papel rolão',
                icon: '🔧',
                variacoes: []
            },
            {
                id: 70,
                nome: 'Suporte para Saboneteira',
                descricao: 'Suporte de parede',
                icon: '🔧',
                variacoes: []
            },
            {
                id: 71,
                nome: 'Suporte para Fibra',
                descricao: 'Suporte para esponja',
                icon: '🔧',
                variacoes: []
            }
        ]
    },
    {
        nome: 'Lixeiras e Cinzeiros',
        icon: '🗑️',
        produtos: [
            {
                id: 29,
                nome: 'Lixeira Basculante',
                descricao: 'Lixeira com tampa basculante',
                icon: '🗑️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['15 Litros', '30 Litros', '50 Litros', '100 Litros'] }
                ]
            },
            {
                id: 30,
                nome: 'Lixeira com Pedal',
                descricao: 'Lixeira acionada por pedal',
                icon: '🗑️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['5 Litros', '12 Litros', '30 Litros', '50 Litros'] }
                ]
            },
            {
                id: 31,
                nome: 'Lixeira Tampa Panela',
                descricao: 'Lixeira com tampa tipo panela',
                icon: '🗑️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['20 Litros', '40 Litros', '60 Litros'] }
                ]
            },
            {
                id: 32,
                nome: 'Lixeira Tampa Meia Esfera',
                descricao: 'Lixeira com tampa meia esfera',
                icon: '🗑️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['30 Litros', '50 Litros', '80 Litros'] }
                ]
            },
            {
                id: 33,
                nome: 'Lixeira Coleta Seletiva',
                descricao: 'Conjunto para coleta seletiva',
                icon: '♻️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['25 Litros', '50 Litros', '100 Litros'] }
                ]
            },
            {
                id: 34,
                nome: 'Lixeira Inox Automática',
                descricao: 'Lixeira inox com sensor',
                icon: '✨',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['6 Litros', '12 Litros', '30 Litros', '50 Litros'] }
                ]
            },
            {
                id: 35,
                nome: 'Lixeira Inox',
                descricao: 'Lixeira em aço inoxidável',
                icon: '🗑️',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['5 Litros', '12 Litros', '20 Litros', '40 Litros'] }
                ]
            },
            {
                id: 36,
                nome: 'Cinzeiro Lixeira',
                descricao: 'Cinzeiro com compartimento',
                icon: '🚬',
                variacoes: [
                    { nome: 'Material', opcoes: ['Inox', 'PVC'] }
                ]
            },
            {
                id: 37,
                nome: 'Cinzeiro de Chão',
                descricao: 'Cinzeiro de pé para área externa',
                icon: '🚬',
                variacoes: [
                    { nome: 'Material', opcoes: ['Inox', 'Plástico'] }
                ]
            }
        ]
    },
    {
        nome: 'Material de Cozinha (Copa/Café)',
        icon: '☕',
        produtos: [
            {
                id: 73,
                nome: 'Açúcar Cristal',
                descricao: 'Açúcar cristal',
                icon: '🍚',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['2kg', '5kg'] }
                ]
            },
            {
                id: 74,
                nome: 'Adoçante',
                descricao: 'Adoçante líquido',
                icon: '💧',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['100ml'] }
                ]
            },
            {
                id: 75,
                nome: 'Café em Pó',
                descricao: 'Café moído',
                icon: '☕',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['250gr', '500gr'] }
                ]
            },
            {
                id: 76,
                nome: 'Caneco em Alumínio',
                descricao: 'Caneca de alumínio',
                icon: '☕',
                variacoes: []
            },
            {
                id: 77,
                nome: 'Coador de Pano',
                descricao: 'Coador de café de pano',
                icon: '☕',
                variacoes: []
            },
            {
                id: 78,
                nome: 'Copo Descartável',
                descricao: 'Copo descartável',
                icon: '🥤',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['150ml', '200ml', '300ml'] }
                ]
            },
            {
                id: 79,
                nome: 'Ebulidor',
                descricao: 'Ebulidor elétrico',
                icon: '⚡',
                variacoes: [
                    { nome: 'Voltagem', opcoes: ['110V', '220V'] }
                ]
            },
            {
                id: 80,
                nome: 'Filtro para Café',
                descricao: 'Filtro de papel para café',
                icon: '☕',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['102', '103'] }
                ]
            },
            {
                id: 81,
                nome: 'Garrafa Térmica',
                descricao: 'Garrafa térmica',
                icon: '🫖',
                variacoes: [
                    { nome: 'Capacidade', opcoes: ['1 Litro', '2 Litros', '5 Litros'] }
                ]
            },
            {
                id: 82,
                nome: 'Pano de Prato',
                descricao: 'Pano para secar louça',
                icon: '🍽️',
                variacoes: []
            },
            {
                id: 83,
                nome: 'Margarina',
                descricao: 'Margarina com sal',
                icon: '🧈',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['250gr', '500gr'] }
                ]
            }
        ]
    },
    {
        nome: 'Outros',
        icon: '📦',
        produtos: [
            {
                id: 19,
                nome: 'Fósforo',
                descricao: 'Pacote com 10 caixinhas',
                icon: '🔥',
                variacoes: []
            },
            {
                id: 20,
                nome: 'Inseticida',
                descricao: 'Spray 300ml',
                icon: '🦟',
                variacoes: []
            },
            {
                id: 72,
                nome: 'Vaselina',
                descricao: 'Vaselina líquida',
                icon: '🧴',
                variacoes: [
                    { nome: 'Tamanho', opcoes: ['500ml'] }
                ]
            }
        ]
    }
];

// Array plano de todos os produtos para facilitar busca
const produtos = categorias.flatMap(cat => cat.produtos);

// Carrinho de compras
let carrinho = [];
let produtoSelecionado = null;

// Elementos do DOM
const produtosGrid = document.getElementById('produtosGrid');
const carrinhoLista = document.getElementById('carrinhoLista');
const totalItensElement = document.getElementById('totalItens');
const btnLimparCarrinho = document.getElementById('btnLimparCarrinho');
const btnFinalizar = document.getElementById('btnFinalizar');

// Elementos do Modal
const modal = document.getElementById('modalVariacao');
const modalClose = document.getElementById('modalClose');
const modalIcon = document.getElementById('modalIcon');
const modalNome = document.getElementById('modalNome');
const modalVariacoes = document.getElementById('modalVariacoes');
const modalQuantidade = document.getElementById('modalQuantidade');
const btnDiminuir = document.getElementById('btnDiminuir');
const btnAumentar = document.getElementById('btnAumentar');
const btnAdicionarModal = document.getElementById('btnAdicionarModal');

// Renderizar produtos na tela por categoria
function renderizarProdutos() {
    produtosGrid.innerHTML = '';

    categorias.forEach(categoria => {
        // Criar cabeçalho da categoria
        const categoriaHeader = document.createElement('div');
        categoriaHeader.className = 'categoria-header';
        categoriaHeader.innerHTML = `
            <span class="categoria-icon">${categoria.icon}</span>
            <h3 class="categoria-nome">${categoria.nome}</h3>
        `;
        produtosGrid.appendChild(categoriaHeader);

        // Criar grid de produtos da categoria
        const categoriaGrid = document.createElement('div');
        categoriaGrid.className = 'categoria-grid';

        categoria.produtos.forEach(produto => {
            const produtoCard = document.createElement('div');
            produtoCard.className = 'produto-card';
            produtoCard.innerHTML = `
                <div class="produto-icon">${produto.icon}</div>
                <div class="produto-nome">${produto.nome}</div>
                <div class="produto-descricao">${produto.descricao}</div>
                <button class="btn-adicionar" onclick="abrirModal(${produto.id})">
                    Selecionar
                </button>
            `;
            categoriaGrid.appendChild(produtoCard);
        });

        produtosGrid.appendChild(categoriaGrid);
    });
}

// Abrir modal de seleção
function abrirModal(produtoId) {
    produtoSelecionado = produtos.find(p => p.id === produtoId);

    modalIcon.textContent = produtoSelecionado.icon;
    modalNome.textContent = produtoSelecionado.nome;
    modalQuantidade.value = 1;

    // Renderizar variações
    modalVariacoes.innerHTML = '';

    if (produtoSelecionado.variacoes && produtoSelecionado.variacoes.length > 0) {
        produtoSelecionado.variacoes.forEach((variacao, indexVariacao) => {
            const variacaoDiv = document.createElement('div');
            variacaoDiv.className = 'variacao-grupo';

            const label = document.createElement('label');
            label.textContent = variacao.nome + ':';
            variacaoDiv.appendChild(label);

            const opcoesDiv = document.createElement('div');
            opcoesDiv.className = 'variacao-opcoes';

            variacao.opcoes.forEach((opcao, indexOpcao) => {
                const opcaoDiv = document.createElement('div');
                opcaoDiv.className = 'variacao-opcao';

                const inputId = `variacao_${indexVariacao}_${indexOpcao}`;
                const checked = indexOpcao === 0 ? 'checked' : '';

                opcaoDiv.innerHTML = `
                    <input type="radio" 
                           id="${inputId}" 
                           name="variacao_${indexVariacao}" 
                           value="${opcao}" 
                           ${checked}>
                    <label for="${inputId}">${opcao}</label>
                `;

                opcoesDiv.appendChild(opcaoDiv);
            });

            variacaoDiv.appendChild(opcoesDiv);
            modalVariacoes.appendChild(variacaoDiv);
        });
    }

    modal.classList.add('show');
}

// Fechar modal
function fecharModal() {
    modal.classList.remove('show');
    produtoSelecionado = null;
}

// Adicionar produto ao carrinho via modal
function adicionarDoModal() {
    if (!produtoSelecionado) return;

    const quantidade = parseInt(modalQuantidade.value);
    if (quantidade < 1) {
        alert('Quantidade deve ser pelo menos 1');
        return;
    }

    // Coletar variações selecionadas
    const variacoesSelecionadas = [];
    if (produtoSelecionado.variacoes && produtoSelecionado.variacoes.length > 0) {
        produtoSelecionado.variacoes.forEach((variacao, index) => {
            const radioSelecionado = document.querySelector(`input[name="variacao_${index}"]:checked`);
            if (radioSelecionado) {
                variacoesSelecionadas.push({
                    nome: variacao.nome,
                    valor: radioSelecionado.value
                });
            }
        });
    }

    // Verificar se item com mesmas variações já existe no carrinho
    const itemExistente = carrinho.find(item =>
        item.id === produtoSelecionado.id &&
        JSON.stringify(item.variacoes) === JSON.stringify(variacoesSelecionadas)
    );

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produtoSelecionado.id,
            nome: produtoSelecionado.nome,
            icon: produtoSelecionado.icon,
            descricao: produtoSelecionado.descricao,
            variacoes: variacoesSelecionadas,
            quantidade: quantidade
        });
    }

    atualizarCarrinho();
    fecharModal();
    mostrarNotificacao(`${produtoSelecionado.nome} adicionado!`);
}

// Atualizar visualização do carrinho
function atualizarCarrinho() {
    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = '<p class="carrinho-vazio">Nenhum item adicionado</p>';
        btnFinalizar.disabled = true;
    } else {
        carrinhoLista.innerHTML = '';
        carrinho.forEach((item, index) => {
            const carrinhoItem = document.createElement('div');
            carrinhoItem.className = 'carrinho-item';

            let variacoesTexto = '';
            if (item.variacoes && item.variacoes.length > 0) {
                variacoesTexto = '<div class="carrinho-item-variacao">' +
                    item.variacoes.map(v => `${v.nome}: ${v.valor}`).join(' • ') +
                    '</div>';
            }

            carrinhoItem.innerHTML = `
                <div class="carrinho-item-info">
                    <div class="carrinho-item-nome">${item.icon} ${item.nome}</div>
                    ${variacoesTexto}
                    <div class="carrinho-item-quantidade">
                        <button class="btn-quantidade" onclick="alterarQuantidade(${index}, 'diminuir')">-</button>
                        <span class="quantidade-valor">${item.quantidade}</span>
                        <button class="btn-quantidade" onclick="alterarQuantidade(${index}, 'aumentar')">+</button>
                    </div>
                </div>
                <button class="btn-remover" onclick="removerDoCarrinho(${index})">Remover</button>
            `;
            carrinhoLista.appendChild(carrinhoItem);
        });
        btnFinalizar.disabled = false;
    }

    // Atualizar total de itens
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    totalItensElement.textContent = totalItens;
}

// Remover produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Alterar quantidade
function alterarQuantidade(index, operacao) {
    if (operacao === 'aumentar') {
        carrinho[index].quantidade++;
    } else if (operacao === 'diminuir') {
        if (carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        } else {
            removerDoCarrinho(index);
            return;
        }
    }
    atualizarCarrinho();
}

// Limpar carrinho
function limparCarrinho() {
    if (carrinho.length > 0) {
        if (confirm('Deseja realmente limpar todo o carrinho?')) {
            carrinho = [];
            atualizarCarrinho();
            mostrarNotificacao('Carrinho limpo!');
        }
    }
}

// Finalizar solicitação
function finalizarSolicitacao() {
    if (carrinho.length === 0) {
        alert('O carrinho está vazio!');
        return;
    }

    let mensagem = 'SOLICITAÇÃO DE MATERIAL DE LIMPEZA\n\n';
    mensagem += `Data: ${new Date().toLocaleDateString('pt-BR')}\n\n`;
    mensagem += 'Itens solicitados:\n';
    mensagem += '─'.repeat(40) + '\n';

    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.nome}\n`;
        if (item.variacoes && item.variacoes.length > 0) {
            item.variacoes.forEach(v => {
                mensagem += `   ${v.nome}: ${v.valor}\n`;
            });
        }
        mensagem += `   Quantidade: ${item.quantidade}\n\n`;
    });

    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    mensagem += '─'.repeat(40) + '\n';
    mensagem += `Total de itens: ${totalItens}\n`;

    console.log(mensagem);
    alert('Solicitação finalizada com sucesso!\n\nConfira os detalhes no console (F12)');

    carrinho = [];
    atualizarCarrinho();
}

// Mostrar notificação
function mostrarNotificacao(texto) {
    const notificacao = document.createElement('div');
    notificacao.textContent = texto;
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notificacao);
        }, 300);
    }, 2000);
}

// Event Listeners
btnLimparCarrinho.addEventListener('click', limparCarrinho);
btnFinalizar.addEventListener('click', finalizarSolicitacao);
modalClose.addEventListener('click', fecharModal);
btnAdicionarModal.addEventListener('click', adicionarDoModal);

// Fechar modal ao clicar fora
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

// Controles de quantidade no modal
btnDiminuir.addEventListener('click', () => {
    const valor = parseInt(modalQuantidade.value);
    if (valor > 1) {
        modalQuantidade.value = valor - 1;
    }
});

btnAumentar.addEventListener('click', () => {
    const valor = parseInt(modalQuantidade.value);
    modalQuantidade.value = valor + 1;
});

// Prevenir valores inválidos no input de quantidade
modalQuantidade.addEventListener('input', (e) => {
    if (e.target.value < 1) {
        e.target.value = 1;
    }
});

// Inicializar aplicação
renderizarProdutos();
atualizarCarrinho();

