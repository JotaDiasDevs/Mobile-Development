type Produto = {

    id: number;
    nome: string;
    preco: number;
    categoria: string;
    emEstoque: boolean;

};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "iPhone 15",
    preco: 5999.0,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
  {
    id: 2,
    nome: "Cabo HDMI",
    preco: 39.9,
    categoria: "Eletrônicos",
    emEstoque: false,
  },
  {
    id: 3,
    nome: "Tênis Running Pro",
    preco: 349.9,
    categoria: "Esportes",
    emEstoque: true,
  },
  {
    id: 4,
    nome: "Mochila Urbana",
    preco: 189.9,
    categoria: "Acessórios",
    emEstoque: false,
  },
  {
    id: 5,
    nome: "Fone Bluetooth",
    preco: 229.9,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
];