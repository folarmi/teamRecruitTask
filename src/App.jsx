import "./App.css";
import { Form, Header, Sidebar } from "./components";

function App() {
  return (
    <main className="px-6 lg:px-10 mt-12 lg:mt-24">
      <section className="flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-[60%] lg:mr-28">
          <Header />
          <Form />
        </div>
        <div className="w-full lg:w-[30%] h-full">
          <Sidebar />
        </div>
      </section>
    </main>
  );
}

export default App;
