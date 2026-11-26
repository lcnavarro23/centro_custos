# Sistema de Gestão de Custos e Orçamento

## Status Atual

### Ambiente

- Git configurado
- GitHub configurado
- VS Code configurado
- Node.js instalado
- Projeto React criado com Vite

### Estrutura do Sistema

Menu:

- Dashboard
- Cadastros
    - Estrutura Organizacional
    - Plano de Contas
    - Usuários
- Orçamento
- Custos
- Relatórios
- Administração

### Regras de Negócio Definidas

1. Sistema web para rede interna.

2. Até 10 usuários simultâneos.

3. Todas as ferramentas devem ser gratuitas.

4. Lançamentos serão feitos somente nos níveis finais da estrutura.

5. As mesmas contas serão utilizadas em todas as áreas.

6. O sistema deverá consolidar automaticamente os valores dos níveis inferiores para os superiores.

### Estrutura Inicial da Empresa

IDTV

└─ Direção Geral
   ├─ Administração
   ├─ Comercial
   ├─ Engenharia
   ├─ Jornalismo
   ├─ Programação
   ├─ OPEC
   └─ Produção

### Administração

- RH
- Financeiro
- Infraestrutura
- Suprimentos

### Comercial

- Vendas
- Pós-Vendas
- Marketing
- Eventos

## Onde Paramos

Foi criada a tela inicial da Estrutura Organizacional.

Foram criados os campos:

- Código
- Nome
- Superior
- Responsável
- Status

Foram criados os botões:

- Adicionar
- Editar
- Desativar

O campo Superior foi convertido para lista de seleção.

Foi iniciada a modelagem da estrutura organizacional da IDTV.

## Próximo Passo

Continuar definindo as subdivisões das áreas:

- Engenharia
- Jornalismo
- Programação
- OPEC
- Produção

Após concluir a estrutura organizacional:

1. Definir o Plano de Contas.
2. Criar a tela do Plano de Contas.
3. Definir os lançamentos de orçamento.
4. Definir os lançamentos de custos realizados.