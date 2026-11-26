function App() {
  return (
    <div>
      <h1>Sistema Gestão de Custos e Orçamento</h1>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "220px",
            borderRight: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>Menu</h3>

          <p>Dashboard</p>

          <h4>Cadastros</h4>

          <div style={{ marginLeft: "15px" }}>
            <p>Estrutura Organizacional</p>
            <p>Plano de Contas</p>
            <p>Usuários</p>
          </div>

          <h4>Orçamento</h4>
          <h4>Custos</h4>
          <h4>Relatórios</h4>
          <h4>Administração</h4>
        </div>

        <div style={{ padding: "20px" }}>
          <h2>Estrutura Organizacional</h2>

          <p>Código:</p>
          <input type="text" />

          <p>Nome:</p>
          <input type="text" />

          <p>Superior:</p>

          <select>
            <option>Selecione</option>
            <option>ID TV</option>
            <option>Direção Geral</option>
            <option>Administração</option>
            <option>Comercial</option>
            <option>Engenharia</option>
            <option>Jornalismo</option>
            <option>Produção</option>
            <option>Opec</option>
          </select>

          <p>Responsável:</p>
          <input type="text" />

          <p>Status:</p>
          <select>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>

          <br />
          <br />

          <button>Adicionar</button>
          <button style={{ marginLeft: "10px" }}>Editar</button>
          <button style={{ marginLeft: "10px" }}>Desativar</button>

          <hr />

          <pre>
          {`IDTV
          └─ Diretor Geral
            ├─ Administração
            │  ├─ RH
            │  ├─ Financeiro
            │  ├─ Infraestrutura
            │  └─ Suprimentos
            │
            ├─ Comercial
            │  ├─ Vendas
            │  ├─ Pós-Vendas
            │  ├─ Marketing
            │  └─ Eventos`}
          </pre>

          <br />
          <br />

        </div>
      </div>
    </div>
  );
}

export default App;