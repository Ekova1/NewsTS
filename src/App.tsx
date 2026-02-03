import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";


function App() {

	return (
		<>
			<Header />
			<div className="p-6 min min-h-screen">
				<Main />
			</div>
		</>
	)
}

export default App
