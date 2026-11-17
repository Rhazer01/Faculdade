# ⚔️ RPG em Python - Programação Orientada a Objetos (POO)

[![Python Version](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python&logoColor=white)](https://www.python.org/)
[![GUI](https://img.shields.io/badge/GUI-CustomTkinter-blueviolet)](https://github.com/TomSchimansky/CustomTkinter)
[![Paradigma](https://img.shields.io/badge/Paradigma-POO-success)](#-pilares-de-poo-aplicados)
[![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)]()

Projeto acadêmico desenvolvido para a disciplina de **Programação Orientada a Objetos (POO)** no 4º Semestre. Trata-se de um jogo de RPG tático em turnos com exploração de mapa em grid (15x15), múltiplos arquétipos de personagens com atributos distintos, combate estratégico e rolagens de dados (D6).

O jogo oferece compatibilidade total tanto via **Terminal (CLI)** quanto em **Interface Gráfica Moderna (GUI)**, compartilhando o mesmo motor de regras e modelo de domínio em POO.

---

## 🎮 Modos de Jogo

O projeto foi arquitetado com separação clara entre a lógica de negócios e as camadas de visualização:

### 1. Versão Interface Gráfica (GUI)
- Construída com **CustomTkinter** e **Pillow (PIL)** através da classe `RPGApp` em [`interface_gui.py`](./interface_gui.py).
- **Grid Responsivo em Canvas**: redimensionamento dinâmico do tabuleiro e interpolação de sprites (`LANCZOS`) conforme a janela é redimensionada.
- **Sprites Customizados**: ícones temáticos para Guerreiro, Mago, Sacerdote e Inimigo (Orc) carregados a partir da pasta `assets/`.
- **Painel de Combate Dinâmico**: acionado automaticamente ao pisar na mesma célula de um inimigo, exibindo botões de ação e status em tempo real.
- **Diálogos Interativos**: caixas de entrada (`CTkInputDialog`) e alertas de resultado (`CTkMessagebox`) para golpes críticos, vitória e game over.

### 2. Versão Terminal (CLI)
- Executada via terminal em [`interface_cli.py`](./interface_cli.py), utilizando exclusivamente módulos da biblioteca padrão do Python.
- **Renderização ASCII/Unicode**: molduras de caracteres especiais (`═`, `║`) e emojis representativos para cada classe (`🗡️`, `🪄`, `⚕️`, `👹`, `·`).
- **Menus Numéricos Intuitivos**: navegação por teclado e turnos detalhados com feedback no stdout.

---

## 🎲 Mecânicas do Jogo

### Classes Jogáveis

| Classe | Vida | Ataque | Defesa | Recurso Especial | Habilidade Exclusiva |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Guerreiro** | 100% | 15 | 10 | — | **Golpe Pesado**: causa 1.5x de dano base ou 3x (dano crítico) se rolar 6 no dado. |
| **Mago** | 100% | 10 | 5 | 100 Mana | **Magia de Fogo**: dano mágico escalonado por D6 (2x a 4x o ataque) consumindo mana. |
| **Sacerdote** | 100% | 5 | 5 | 100 Mana | **Curar**: restaura pontos de vida do herói com base no dado (até crítico de 25 HP). |

### Inimigos e Níveis de Dificuldade
Os inimigos (**Orcs**) possuem 100% de Vida, 10 de Ataque e 15 de Defesa. Ao iniciar a partida, eles são distribuídos aleatoriamente em células livres do tabuleiro:

- **Fácil**: 1 Inimigo
- **Médio**: 3 Inimigos
- **Difícil**: 5 Inimigos

### Sistema de Combate e Exploração
- **Fórmula de Dano**: $\text{Dano Real} = \max(0, (\text{Ataque} + \text{D6}) - \text{Defesa})$.
- **Fuga**: Rolar $\ge 4$ no D6 permite escapar com sucesso do confronto.
- **Vitória**: Ocorre ao derrotar todos os inimigos presentes no mapa.
- **Derrota**: Ocorre caso os pontos de vida do herói cheguem a zero.

---

## 🏛️ Pilares de POO Aplicados

O projeto foi estruturado com foco na correta aplicação dos conceitos essenciais da Orientação a Objetos:

### 1. Abstração e Classes Abstratas
- A classe base **`Personagem`** (em [`modelo_jogo.py`](./modelo_jogo.py)) herda de `abc.ABC`, servindo como modelo base para todas as entidades vivas do jogo.
- Define os atributos comuns (`_nome`, `_vida`, `ataque`, `defesa`, coordenadas `posicao_x` e `posicao_y`) e comportamentos universais (`receber_dano`, `receber_cura`, `mover`, `tentar_fugir`, `atacar`).

### 2. Encapsulamento
- Atributos vitais e sensíveis como `_nome` e `_vida` são protegidos por convenção (`_`), sendo acessados e modificados exclusivamente por métodos específicos (`get_nome()`, `get_vida()`, `receber_dano()`, `receber_cura()`).
- Regras de domínio (ex.: teto de 100% para cura, dano não-negativo após redução de armadura e impossibilidade de ação para personagens mortos) são validadas internamente.

### 3. Herança
- Classes especializadas herdam de `Personagem`, reaproveitando a estrutura básica e delegando a inicialização à superclasse através de `super().__init__(...)`:
  - `Guerreiro` (alto poder ofensivo e armadura física pesada).
  - `Mago` (gerenciamento do atributo `mana` e magias ofensivas).
  - `Sacerdote` (gerenciamento de `mana` e magias de regeneração).
  - `Inimigo` (criatura hostil instanciada e distribuída no mapa).

### 4. Polimorfismo e Especialização
- Sobrescrita de métodos e implementação de habilidades únicas por arquétipo:
  - `Guerreiro.golpe_pesado(alvo)`
  - `Mago.magia_fogo(alvo)`
  - `Sacerdote.curar(alvo)`
- Cada classe reage e executa suas ações de acordo com seu próprio comportamento polimórfico durante o ciclo de batalha.

### 5. Associação e Composição
- A classe **`Tabuleiro`** gerencia o estado espacial da partida:
  - Armazena as entidades em um dicionário indexado pelas coordenadas `(x, y)`.
  - Responsável por validar limites do mapa (15x15), movimentar personagens e detectar colisões ou encontros entre o herói e inimigos.

---

## 🕹️ Como Executar

### Pré-requisitos
- Python 3.8 ou superior instalado no sistema.
- A versão CLI necessita apenas da biblioteca padrão.
- A versão GUI utiliza as dependências listadas em `requirements.txt`.

### 1. Instalação das Dependências (para modo GUI)

```bash
python -m pip install -r requirements.txt
```

### 2. Executando o Jogo

Na raiz da pasta do projeto, execute:

```bash
python main.py
```

O launcher inicial solicitará a escolha da interface:
- Digite `1` ou `CLI` para jogar no terminal.
- Digite `2` ou `GUI` para abrir a janela gráfica.

### 3. Controles

| Ação | Tecla |
| :--- | :---: |
| Mover para Cima | <kbd>W</kbd> |
| Mover para a Esquerda | <kbd>A</kbd> |
| Mover para Baixo | <kbd>S</kbd> |
| Mover para a Direita | <kbd>D</kbd> |
| Sair da Partida (no CLI) | <kbd>Q</kbd> |

---

## 📂 Estrutura de Arquivos

```text
POO - Jogo RPG/
├── assets/                  # Sprites e ícones gráficos dos personagens
│   ├── guerreiro.png        # Sprite do Guerreiro
│   ├── mago.png             # Sprite do Mago
│   ├── sarcedote.png        # Sprite do Sacerdote
│   └── ORC.png              # Sprite do Inimigo (Orc)
├── modelo_jogo.py           # Regras de POO, classes de personagens, combate e Tabuleiro
├── interface_cli.py         # Implementação da interface em terminal (ASCII/Unicode)
├── interface_gui.py         # Implementação visual com CustomTkinter (RPGApp)
├── main.py                  # Ponto de entrada do jogo (seletor CLI / GUI)
├── requirements.txt         # Lista de dependências externas (CustomTkinter, Pillow, CTkMessagebox)
└── README.md                # Documentação completa do projeto
```

---

## 📈 Histórico de Avaliações e Entregas

| Etapa | Descrição da Entrega / Feedback | Status |
| :---: | :--- | :---: |
| **Fase 1** | Modelagem inicial das classes de POO e versionamento no GitHub | ✅ Concluído |
| **Fase 2** | Implementação do motor de combate em turnos e movimentação em grid no Terminal (CLI) | ✅ Concluído |
| **Fase 3** | Desenvolvimento da interface gráfica moderna com CustomTkinter, sprites e Canvas responsivo | ✅ Concluído |
| **Fase 4** | Sistema de dificuldades selecionáveis, rolagens com crítico e refinamentos de UX | ✅ Concluído |

---

## 👥 Autores

- **Rhuan Miguel**
  - GitHub: [@Rhazer01](https://github.com/Rhazer01)
  - E-mail: [rhuanmiguel99113@gmail.com](mailto:rhuanmiguel99113@gmail.com)

- **Henrique Barbosa**
  - GitHub: [@HLicio](https://github.com/HLicio)
  - E-mail: [henriquelicio339@gmail.com](mailto:henriquelicio339@gmail.com)

---
