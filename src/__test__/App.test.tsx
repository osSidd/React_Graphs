import { render } from "react-dom"
import App from "../App"
import '@testing-library/jest-dom'

test('demo', () => {
    expect(true).toBe(true)
})

test('renders the main page', () => {
    render(<App/>, document.body)

    expect(true).toBeTruthy()

})