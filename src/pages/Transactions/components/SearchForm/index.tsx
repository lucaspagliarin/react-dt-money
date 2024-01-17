import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações"/>
      <button><MagnifyingGlass size={20}/><span>Buscar</span></button>
    </SearchFormContainer>
  )
}