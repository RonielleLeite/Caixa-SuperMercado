# 🛒 Caixa SuperMercado

Um **sistema de ponto de venda (PDV) simplificado** desenvolvido em HTML, CSS e JavaScript puro. O projeto simula o gerenciamento de produtos em um supermercado, permitindo adicionar itens, calcular totais e processar vendas.

---

## 🚀 Funcionalidades

- **Catálogo de Produtos**: Listagem de produtos disponíveis com preços
- **Adicionar ao Carrinho**: Selecione produtos e adicione à compra
- **Cálculo Automático**: Total é calculado automaticamente
- **Remover Itens**: Delete produtos do carrinho conforme necessário
- **Aplicar Desconto**: Opção para aplicar desconto percentual
- **Finalizar Venda**: Processe a compra e gere recibo
- **Histórico de Vendas**: Visualize vendas anteriores
- **Interface Intuitiva**: Design limpo e fácil de usar

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica do documento. |
| **CSS3** | Estilização e layout responsivo. |
| **JavaScript (ES6+)** | Lógica de negócio e manipulação de DOM. |
| **LocalStorage** | Persistência de dados de vendas. |

---

## 📦 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/RonielleLeite/Caixa-SuperMercado.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd Caixa-SuperMercado
   ```

3. **Abra no navegador**:
   - Abra o arquivo `index.html` diretamente no seu navegador, ou
   - Use um servidor local (ex: Live Server no VS Code)

---

## 🎯 Como Usar

### Passo a Passo:

1. **Visualizar Produtos**: Veja todos os produtos disponíveis com preços
2. **Adicionar ao Carrinho**: Clique em "Adicionar" para cada produto desejado
3. **Visualizar Carrinho**: Veja os itens selecionados e o total
4. **Ajustar Quantidade**: Modifique a quantidade de cada item
5. **Remover Itens**: Delete produtos que não deseja mais
6. **Aplicar Desconto**: Insira um percentual de desconto (opcional)
7. **Finalizar Venda**: Clique em "Finalizar" para processar a compra
8. **Gerar Recibo**: Imprima ou visualize o recibo da venda

---

## 📋 Estrutura do Projeto

```
Caixa-SuperMercado/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── products/
└── README.md
```

---

## 💼 Funcionalidades Técnicas

### Gerenciamento de Produtos:
```javascript
const produtos = [
  { id: 1, nome: 'Leite', preco: 4.50 },
  { id: 2, nome: 'Pão', preco: 6.00 },
  // ...
];
```

### Carrinho de Compras:
- Armazenamento em array
- Cálculo de subtotal
- Aplicação de descontos
- Cálculo de total

### Persistência de Dados:
- Histórico de vendas no localStorage
- Recuperação de dados ao recarregar

---

## 🎨 Interface

A interface foi desenvolvida com foco em:

- **Usabilidade**: Fácil navegação e compreensão
- **Responsividade**: Funciona em desktop, tablet e mobile
- **Clareza**: Informações bem organizadas e visíveis
- **Eficiência**: Operações rápidas e intuitivas

---

## 🔢 Cálculos Implementados

- ✅ **Subtotal**: Soma dos preços dos itens
- ✅ **Desconto**: Percentual aplicado ao subtotal
- ✅ **Total**: Subtotal menos desconto
- ✅ **Troco**: Cálculo baseado no valor pago

---

## 🚀 Melhorias Futuras

- [ ] Adicionar mais produtos
- [ ] Implementar categorias de produtos
- [ ] Adicionar busca e filtro
- [ ] Integrar com backend
- [ ] Adicionar sistema de usuários
- [ ] Implementar relatórios de vendas
- [ ] Adicionar cupom fiscal
- [ ] Dark mode

---

## 💡 Aprendizados

Este projeto demonstra:

- ✅ Manipulação de arrays e objetos
- ✅ Cálculos matemáticos
- ✅ Manipulação de DOM
- ✅ Event listeners
- ✅ Persistência de dados
- ✅ Formatação de moeda
- ✅ Validação de entrada

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, abra uma **issue** ou envie um **pull request**.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> Desenvolvido com ❤️ por [Ronielle Leite](https://github.com/RonielleLeite)
