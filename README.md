# 🎓 Faculdade

> **Repositório acadêmico de projetos, trabalhos e anotações.**  
> _Centralize, organize e evolua!_

---

## 🗂️ Estrutura do Repositório

```text
Faculdade/
├── 1 - Semestre/
│   └── 1 - PCG/                  # Programação de Computadores (Linguagem C)
│       ├── backend.c / .h
│       ├── frontend.c / .h
│       ├── main.c
│       └── README.md
│
├── 4 - Semestre/
│   ├── POO - Jogo RPG/           # Programação Orientada a Objetos (Python)
│   │   ├── classes.py            # Modelagem OOP (Personagens, Classes, Tabuleiro)
│   │   ├── main.py               # Jogo RPG - Versão Terminal
│   │   ├── main2.py              # Jogo RPG - Versão Interface Gráfica (Tkinter)
│   │   └── README.md             # Documentação e regras do jogo
│   │
│   └── TABNET/                   # Redesign TABNET DATASUS (HTML5 / Bootstrap 5 / JS)
│       ├── index.html            # Ponto de entrada (Redirecionamento / Login Gov.br)
│       ├── login-gov.html        # Autenticação Gov.br (Identidade Visual Oficial)
│       ├── consulta.html         # Painel de Seleção de Filtros, Períodos e CID-10
│       ├── carregamento.html     # Feedback de processamento de dados do SUS
│       ├── resultado.html        # Visualização de dados (Gráficos, Tabela e Exportação)
│       ├── css/style.css         # Estilos customizados e Modo Alto Contraste
│       ├── js/contraste.js       # Controle de Acessibilidade (Alto Contraste e VLibras)
│       └── assets/               # Imagens, ícones e fontes oficiais
│
├── index.html                    # Redirecionamento raiz para GitHub Pages
├── .gitignore
└── README.md
```

---

## 📚 Semestres e Disciplinas

### 📌 1º Semestre
* **[1 - PCG (Princípios de Computação e Algoritmos)](./1%20-%20Semestre/1%20-%20PCG/)**: Sistema desenvolvido em Linguagem C com separação modular (frontend e backend).

### 📌 4º Semestre
* **[POO - Jogo RPG em Python](./4%20-%20Semestre/POO%20-%20Jogo%20RPG/)**: Jogo de RPG em turnos com exploração de mapa e combate tático aplicando os pilares de POO:
  * Classes Abstratas (`ABC`), Herança, Polimorfismo e Encapsulamento
  * Versão Terminal (CLI) e Interface Gráfica (Tkinter)

* **[TABNET DATASUS - Redesign & Acessibilidade](./4%20-%20Semestre/TABNET/)**: Interface moderna e responsiva para consulta ao banco de dados do DATASUS (Morbidade Hospitalar do SUS - SIH/SUS), projetada sob as diretrizes do **Design System do Gov.br** e padrões de acessibilidade **e-MAG / W3C**:
  * **Identidade Oficial Gov.br:** Tipografia Rawline, componentes institucionais e paleta oficial.
  * **Fluxo Completo de Consulta:** Login gov.br, seleção dinâmica de filtros (linha, coluna, métrica, período e CID-10), tela de carregamento e exibição de resultados em tabela responsiva e gráfico comparativo.
  * **Recursos de Acessibilidade:**
    * 🌓 **Modo Alto Contraste:** Alternância instantânea e persistente entre sessões via `localStorage`.
    * 🤟 **VLibras Integrado:** Integração com o widget oficial do Governo Federal para tradução em LIBRAS via avatar 3D.
  * **Tecnologias:** HTML5 semântico, CSS3, JavaScript Vanilla, Bootstrap 5.3 e Font Awesome 6.

---

## 👤 Autor

- **Rhuan Miguel**
- GitHub: [@Rhazer01](https://github.com/Rhazer01)
- Contato: [rhuanmiguel99113@gmail.com](mailto:rhuanmiguel99113@gmail.com)

---

## 🚀 Como Executar os Projetos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rhazer01/Faculdade.git
   ```

2. Para testar o **TABNET DATASUS**:
   - Abra o arquivo `index.html` ou `4 - Semestre/TABNET/index.html` diretamente em qualquer navegador moderno.
   - Ou acesse a versão online via **GitHub Pages**: [https://rhazer01.github.io/Faculdade/](https://rhazer01.github.io/Faculdade/)

3. Para jogar o **RPG de POO**:
   ```bash
   cd "Faculdade/4 - Semestre/POO - Jogo RPG"
   python main.py       # Versão Terminal
   python main2.py      # Versão Interface Gráfica
   ```

---

## ⚠️ Observação Acadêmica

> Este repositório é de uso pessoal e acadêmico para acompanhamento de evolução curricular.  
> Sinta-se à vontade para explorar os conteúdos para estudo, respeitando a ética acadêmica.
