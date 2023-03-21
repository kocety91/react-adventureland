import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
// import { Spinner } from "./components/spinner/Spinner";
import { Table } from "./components/todos/Table";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <Spinner /> */}

            <Table />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
