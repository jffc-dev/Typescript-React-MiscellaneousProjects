import { type TodoTitle } from "../types"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>
        todo
        <img
          style={{ width: "60px", height: "auto" }}
          src="https://commons.wikimedia.org/wiki/Category:TypeScript#/media/File:Typescript_logo_2020.svg"
        />
      </h1>
    </header>
  )
}
