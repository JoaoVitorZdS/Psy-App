import * as React from "react";
import { Searchbar } from "react-native-paper";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Busca"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon="magnify"
    />
  );
}
