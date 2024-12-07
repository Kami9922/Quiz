import { Route, Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { Test, EditTest, Main } from './pages/index'

function App() {
	const AppColumn = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 1000px;
		min-height: 100%;
		background-color: #fff;
		margin: 0 auto;
	`
	const Page = styled.div`
		padding: 120px 0 20px;
	`
	return (
		<AppColumn>
			<Page>
				<Routes>
					<Route
						path='/'
						element={<Main />}
					/>
					<Route
						path='/test'
						element={<Test />}
					/>
					<Route
						path='/editTest'
						element={<EditTest />}
					/>
					{/* <Route
						path='*'
						element={<Error error={} />}/> */}
				</Routes>
			</Page>
		</AppColumn>
	)
}

export default App
