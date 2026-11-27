import { useState } from "react";

function App() {
  const [adminAberto, setAdminAberto] = useState(true);
  const [comerAberto, setComerAberto] = useState(true);
  const [engenAberto, setEngenAberto] = useState(true);
  const [jornaAberto, setJornaAberto] = useState(true);
  const [produAberto, setProduAberto] = useState(true);

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
          <div
            style={{
              textAlign: "left",
              marginTop: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "400px",
            }}
          >
            <h3>Estrutura Organizacional da IDTV</h3>

            <ul>
              <li>
                IDTV
                <ul>
                  <li>
                    Direção Geral
                    <ul>
                      <li>
                        <span
                          onClick={() => setAdminAberto(!adminAberto)}
                          style={{ cursor: "pointer" }}
                        >
                          {adminAberto ? "▼ Administração" : "▶ Administração"}
                        </span>
                        {adminAberto && (
                          <ul>
                            <li>Financeiro</li>
                            <li>Infraestrutura</li>
                            <li>RH</li>
                            <li>Suprimentos</li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <span
                          onClick={() => setComerAberto(!comerAberto)}
                          style={{ cursor: "pointer" }}
                        >
                          {comerAberto ? "▼ Comercial" : "▶ Comercial"}
                        </span>
                        {comerAberto && (
                          <ul>
                            <li>Executivo de contas</li>
                            <li>Projetos especiais</li>
                            <li>Planejamento</li>
                            <li>OPEC</li>
                            <li>Mídias digitais</li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <span
                          onClick={() => setEngenAberto(!engenAberto)}
                          style={{ cursor: "pointer" }}
                        >
                          {engenAberto ? "▼ Engenharia" : "▶ Engenharia"}
                        </span>
                        {engenAberto && (
                          <ul>
                            <li>Financeiro</li>
                            <li>Infraestrutura</li>
                            <li>RH</li>
                            <li>Suprimentos</li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <span
                          onClick={() => setJornaAberto(!jornaAberto)}
                          style={{ cursor: "pointer" }}
                        >
                          {jornaAberto ? "▼ Jornalismo" : "▶ Jornalismo"}
                        </span>
                        {jornaAberto && (
                          <ul>
                            <li>Financeiro</li>
                            <li>Infraestrutura</li>
                            <li>RH</li>
                            <li>Suprimentos</li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <span
                          onClick={() => setProduAberto(!produAberto)}
                          style={{ cursor: "pointer" }}
                        >
                          {produAberto ? "▼ Produção" : "▶ Produção"}
                        </span>
                        {produAberto && (
                          <ul>
                            <li>Financeiro</li>
                            <li>Infraestrutura</li>
                            <li>RH</li>
                            <li>Suprimentos</li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h3>Cadastro de Centro de Custo</h3>

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

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
